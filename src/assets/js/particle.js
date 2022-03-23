import html2canvas from "html2canvas";
let ctx;

export default function particleGenerator(
  btn,
  smallPottion = true,
  slideRight = true
) {
  html2canvas(btn, {
    useCORS: true,
  }).then((canvas) => {
    ctx = canvas.getContext("2d");

    createParticleCanvas();

    // Get our color data like before
    // let rect = e.target.getBoundingClientRect();
    // let localX = e.touches[0].clientX - rect.left;
    // let localY = e.touches[0].clientY - rect.top;
    // let rgbaColorArr = ctx.getImageData(localX, localY, 1, 1).data;
    // console.log(rgbaColorArr);
    // Get the button's positioning in terms of the window
    // let globalX = rect.left + localX;
    // let globalY = rect.top + localY;
    // let width = canvas.width;
    // let height = canvas.height;
    let colorData;
    let width = btn.offsetWidth;
    let height = btn.offsetHeight;
    if (smallPottion) {
      colorData = ctx.getImageData(5, 5, 23, 23).data;
    } else {
      colorData = ctx.getImageData(0, 0, width, height).data;
    }
    console.log(colorData);
    let reductionFactor = 15;

    let count = 0;

    // Go through every location of our button and create a particle
    for (let localX = 0; localX < width; localX++) {
      for (let localY = 0; localY < height; localY++) {
        if (count % reductionFactor === 0) {
          let index = (localY * width + localX) * 4;
          let rgbaColorArr = colorData.slice(index, index + 4);

          let bcr = btn.getBoundingClientRect();
          let globalX = bcr.left + localX;
          let globalY = bcr.top + localY;

          createParticleAtPoint(globalX, globalY, rgbaColorArr, slideRight);
        }
        count++;
      }
    }
  });
}

/* An "exploding" particle effect that uses circles */
let ExplodingParticle = function () {
  // Set how long we want our particle to animate for
  this.animationDuration = 10000; // in ms

  // Set the speed for our particle
  this.speed = {
    x: -5 + Math.random() * 10,
    y: -5 + Math.random() * 10,
  };

  // Size our particle
  this.radius = 3 + Math.random() * 10;

  // Set a max time to live for our particle
  this.life = 5000 + Math.random() * 20;
  this.remainingLife = this.life;

  // This function will be called by our animation logic later on
  this.draw = (ctx) => {
    let p = this;

    if (this.remainingLife > 0 && this.radius > 0) {
      // Draw a circle at the current location
      ctx.beginPath();
      ctx.arc(p.startX, p.startY, p.radius, 0, Math.PI * 2);
      ctx.fillStyle =
        "rgba(" +
        this.rgbArray[0] +
        "," +
        this.rgbArray[1] +
        "," +
        this.rgbArray[2] +
        ", 1)";
      ctx.fill();

      // Update the particle's location and life
      p.remainingLife -= 0.1;
      p.radius -= 0.05;
      p.startX += p.speed.x;
      p.startY += p.speed.y;
    }
  };
};

let ExplodeToRightParticle = function () {
  this.name = "ExplodeToRightParticle";
  this.animationDuration = 10000; // in ms

  this.speed = {
    x: 0 + Math.random() * 6,
    y: -1.5 + Math.random() * 3,
  };
  this.radius = 0 + Math.random() * 9;
  this.life = 500 + Math.random() * 20;
  this.remainingLife = this.life;

  this.firstRun = true;
  this.draw = (ctx) => {
    if (this.firstRun) {
      this.firstRun = false;
      this.startX += Math.random() * 20;
    }

    if (this.remainingLife > 0 && this.radius > 0) {
      ctx.beginPath();
      ctx.arc(this.startX, this.startY, this.radius, 0, Math.PI * 2);
      ctx.fillStyle =
        "rgba(" +
        this.rgbArray[0] +
        "," +
        this.rgbArray[1] +
        "," +
        this.rgbArray[2] +
        ", 1)";
      ctx.fill();
      this.remainingLife--;
      this.radius -= 0.1;
      this.startX += this.speed.x;
      this.startY += this.speed.y;
    }
  };
};

let particles = [];
function createParticleAtPoint(x, y, colorData, slideRight) {
  let particle;
  if (slideRight) {
    particle = new ExplodeToRightParticle();
  } else {
    particle = new ExplodingParticle();
  }

  particle.rgbArray = colorData;
  particle.startX = x;
  particle.startY = y;
  particle.startTime = Date.now();

  particles.push(particle);
}

let particleCanvas, particleCtx;
function createParticleCanvas() {
  // remove the old canvas
  const canvas = document.querySelector("canvas");
  if (canvas) {
    canvas.remove();
  }
  // Create our canvas
  particleCanvas = document.createElement("canvas");
  particleCtx = particleCanvas.getContext("2d");

  // Size our canvas
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;

  // Position out canvas
  particleCanvas.style.position = "absolute";
  particleCanvas.style.top = "0";
  particleCanvas.style.left = "0";

  // Make sure it's on top of other elements
  particleCanvas.style.zIndex = "1001";

  // Make sure other elements under it are clickable
  particleCanvas.style.pointerEvents = "none";

  // Add our canvas to the page
  document.body.appendChild(particleCanvas);
}

function update() {
  // Clear out the old particles
  if (typeof particleCtx !== "undefined") {
    particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  // Draw all of our particles in their new location
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw(particleCtx);

    // Simple way to clean up if the last particle is done animating
    if (i === particles.length - 1) {
      let percent =
        (Date.now() - particles[i].startTime) / particles[i].animationDuration;

      if (percent > 1) {
        particles = [];
      }
    }
  }

  // Animate performantly
  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
