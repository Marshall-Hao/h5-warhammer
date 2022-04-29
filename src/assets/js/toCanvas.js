import html2canvas from "html2canvas";

export default function posterGenerator(el) {
  // * 想要保存的图片节点
  const dom = document.querySelector(el);

  // 创建一个新的canvas
  const Canvas = document.createElement("canvas");
  const width = dom.offsetWidth; // 可见屏幕的宽
  const height = dom.offsetHeight; // 可见屏幕的高

  const scale = window.devicePixelRatio;

  // 将Canvas画布放大scale倍，然后放在小的屏幕里，解决模糊问题
  Canvas.width = width * scale;
  Canvas.height = height * scale;
  Canvas.getContext("2d").scale(scale, scale);

  html2canvas(dom, {
    // dpi: 300,
    logging: false,
    canvas: Canvas,
    scale: 1,
    useCORS: true,
    width: width + "px",
    hegiht: height + "px",
    ignoreElements: (element) => {
      if (element.tagName === "AUDIO") return true;
    },
  }).then((canvas) => {
    const context = canvas.getContext("2d");
    const audio = document.querySelector("audio");

    audio.removeAttribute("autoplay");
    // 关闭抗锯齿形
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    // test the canvas

    // canvas转化为图片;
    const img = canvas2Image(canvas, canvas.width, canvas.height);
    document.body.appendChild(img);
    img.classList.add("newposter");
    img.style.cssText =
      "width:38.2rem;height: 54rem;position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);opacity:;object-fit:cover;z-index:20;";
  });
}

function canvas2Image(canvas, width, height) {
  const retCanvas = document.createElement("canvas");
  const retCtx = retCanvas.getContext("2d");
  retCanvas.width = width;
  retCanvas.height = height;
  retCtx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);

  const img = document.createElement("img");
  img.src = retCanvas.toDataURL("image/jpeg"); // 可以根据需要更改格式
  return img;
}
