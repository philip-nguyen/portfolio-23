import { useState, useEffect } from 'react'
import * as THREE from 'three';
import './App.css'
import SceneInit from './lib/SceneInit';

function App() {
  useEffect(() => {
    const threeJsCanvas = new SceneInit('myThreeJsBg');
    threeJsCanvas.initialize();
    threeJsCanvas.animate();
    
    document.body.onscroll = threeJsCanvas.moveCamera();
}, []);

  return (
    <div className="App">
      <canvas id="myThreeJsBg"/>
    </div>
  )
}

export default App
