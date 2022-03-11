import * as THREE from "three";
import { nextTick, onMounted, ref } from "vue";

export default function useThree() {
  // * ref
  const ballRef = ref(null);

  //  * lifecycles
  onMounted(() => {
    activate();
  });
  /**
   * * threejs
   */
  // * scene
  const scene = new THREE.Scene();
  //  * ball
  const ballGeometry = new THREE.SphereBufferGeometry(0.5, 512, 512);
  const ballMaterial = new THREE.MeshBasicMaterial();
  const ball = new THREE.Mesh(ballGeometry, ballMaterial);
  //  * sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  console.log("asdasd", sizes);
  // * camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

  const pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  // * rendered
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const clock = new THREE.Clock();
  //  * methods
  async function init() {
    await nextTick();
    // * canvas
    const canvas = ballRef.value;
    console.log(canvas);
    scene.add(ball);
    scene.add(camera);
    scene.add(ambientLight);
    scene.add(pointLight);
    renderer.canvas = canvas;
    // console.log("123", renderer);
    console.log(scene);
  }
  function tick() {
    const elapsedTime = clock.getElapsedTime();
    ball.position.z = 0.15 * elapsedTime;
    ball.position.y = 0.15 * elapsedTime;
    ball.position.x = 0.15 * elapsedTime;

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  }
  function activate() {
    init();
    tick();
  }
  //  * return
  return {
    ballRef,
  };
}
