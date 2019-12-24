import React from 'react';
import { init, createDonut } from './utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ADD: 0.1,
      renderer: null,
      scene: null,
      camera: null,
      torus: null,
      donuts: []
    };
  }

  componentDidMount = () => {
    const start = init();
    const viewer = document.getElementById('viewer');
    viewer.appendChild(start.renderer.domElement);
    const { renderer, scene, camera } = start;
    this.setState({
      renderer,
      scene,
      camera
    });
    this.mainLoop();
  };

  mainLoop = () => {
    const { ADD, scene, camera, renderer, donuts } = this.state;
    if (scene !== null && camera !== null && renderer !== null) {
      const x = Math.random();
      if (x < 0.10) {
        const donut = createDonut();
        const newDonuts = [...donuts];
        newDonuts.push(donut);
        scene.add(donut);
        this.setState({
          donuts: newDonuts
        });
      }

      if (donuts.length > 0) {
        donuts.forEach((d) => {
          d.position.y -= ADD;
          d.rotation.x += ADD;
          d.rotation.y -= ADD;
        });
      }

      renderer.render(scene, camera);
    }
    requestAnimationFrame(this.mainLoop);
  };

  body = () => <div id="viewer"></div>;

  render() {
    return this.body();
  }
}

export default App;
