import {
  Scene,
  PerspectiveCamera,
  Color,
  WebGLRenderer,
  TorusGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper
} from 'three';

const addAxis = (scene) => {
  scene.add(new AxesHelper(5));
};

const init = () => {
  const { innerWidth, innerHeight } = window;
  const scene = new Scene();
  scene.background = new Color(0x000000);
  const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
  camera.position.z = 20;
  camera.position.y = -10;

  const renderer = new WebGLRenderer();
  renderer.setSize(innerWidth, innerHeight);
  return {
    renderer,
    scene,
    camera
  };
};

const randomInRange = function(from, to) {
  const x = Math.random() * (to - from);
  return x + from;
};

const createDonut = function() {
  const geometry = new TorusGeometry(1, 0.5, 5, 30);
  const material = new MeshBasicMaterial({ color: Math.random() * 0xffffff });

  const d = new Mesh(geometry, material);

  d.position.x = randomInRange(-15, 15);
  d.position.z = randomInRange(-15, 15);
  d.position.y = 15;
  return d;
};

export { init, addAxis, randomInRange, createDonut };
