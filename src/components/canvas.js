import React, { useEffect } from 'react';
import * as THREE from 'three';

const Canvas = () => {
    useEffect(() => {
        // Init the scene
        const scene = new THREE.Scene();

        // Init the camera
        const camera = new THREE.PerspectiveCamera( 
            75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.setZ(30);
        // Init the renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(pointLight, ambientLight);

        // add point light
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(10,10,10);

        // add a TORUS geometry
        // Init some geometry!
        const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
        const material = new THREE.MeshStandardMaterial( {color: 0x5f31f5 });
        // no light source necessary
        const torus = new THREE.Mesh( geometry, material );

        scene.add(torus)

        // animate function
        const animate = () => {
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };
        animate(); // animate it!
    }, []);
}

export default Canvas;