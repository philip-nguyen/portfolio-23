import { useState, useEffect } from 'react'
import * as THREE from 'three';
import './App.css'
import SceneInit from './lib/SceneInit';
import ThreeBackground from './components/ThreeBackground';

import  Experience  from './components/experience';


function App() {
  useEffect(() => {
    // const threeJsCanvas = new SceneInit('myThreeJsBg');
    // threeJsCanvas.initialize();
    // threeJsCanvas.animate();
    
    // window.addEventListener("scroll", threeJsCanvas.moveCamera());
}, []);

  return (
    <div className="App">
      <ThreeBackground />
      <Experience />
    </div>
  )
}

export default App

// <canvas id="myThreeJsBg" className="z-[-1]"/>