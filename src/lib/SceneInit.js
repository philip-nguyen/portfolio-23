import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import backGround from './../assets/esv-sky.jpg';
import philipPic from './../assets/me-flowers-sq.jpeg';
import moonTxtr from './../assets/moon-normal.jpg';
import nasaMoon from './../assets/nasa-moon.jpg';

export default class SceneInit {
    // constructor to pass in the id of the canvas
    constructor(canvasId) {
        // NOTE: Core components to initialize Three.js app.
        this.scene = undefined;
        this.camera = undefined;
        this.renderer = undefined;
        this.textureLoader = undefined;

        // NOTE: Camera params;
        this.fov = 45;
        this.nearPlane = 1;
        this.farPlane = 1000;
        this.canvasId = canvasId;

        // Geometries
        this.torus = undefined;
        this.philip = undefined;
        this.moon = undefined;

        // NOTE: Additional components.
        this.clock = undefined;
        // this.stats = undefined;
        this.controls = undefined;

        // NOTE: Lighting is basically required.
        this.ambientLight = undefined;
        this.directionalLight = undefined;
    }

    initialize() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
        this.fov,
        window.innerWidth / window.innerHeight,
        1,
        1000
        );
        this.camera.position.setZ(30);

        // NOTE: Specify a canvas which is already created in the HTML.
        const canvas = document.getElementById(this.canvasId);
        this.renderer = new THREE.WebGLRenderer({
        canvas,
        // NOTE: Anti-aliasing smooths out the edges.
        antialias: true,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // this.renderer.shadowMap.enabled = true;
        document.body.appendChild(this.renderer.domElement);

        this.textureLoader = new THREE.TextureLoader();
        this.scene.background = this.textureLoader.load(backGround);

        this.clock = new THREE.Clock();
        //this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // this.stats = Stats();
        // document.body.appendChild(this.stats.dom);
        
        // Torus geometry
        const torusGeo = new THREE.TorusGeometry(10, 3, 16, 100);
        const torusMat = new THREE.MeshStandardMaterial({color: 0x5f31f5});
        this.torus = new THREE.Mesh(torusGeo, torusMat);
        
        this.scene.add(this.torus);
        
        // Philip cube
        const philipTexture = this.textureLoader.load(philipPic);
        this.philip = new THREE.Mesh(
            new THREE.BoxGeometry(3,3,3),
            new THREE.MeshBasicMaterial( {map: philipTexture })
        );
        this.philip.position.set(0.5, 0, 0);
        this.scene.add(this.philip);

        // Moon geometry
        const moonTexture = this.textureLoader.load(nasaMoon);
        const normalTexture = this.textureLoader.load(moonTxtr);

        this.moon = new THREE.Mesh(
            new THREE.SphereGeometry(3, 32, 32),
            new THREE.MeshStandardMaterial( {
                map: moonTexture,
                normalMap: normalTexture 
            })
        );
        this.moon.position.z = 30;
        this.moon.position.setX(-10);
        this.scene.add(this.moon);

        // ambient light which is for the whole scene
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.ambientLight.castShadow = true;
        this.scene.add(this.ambientLight);

        // directional light - parallel sun rays
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        // this.directionalLight.castShadow = true;
        this.directionalLight.position.set(0, 32, 64);
        this.scene.add(this.directionalLight);

        // if window resizes
        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    animate() {
        // NOTE: Window is implied.
        // requestAnimationFrame(this.animate.bind(this));
        window.requestAnimationFrame(this.animate.bind(this));
        
        this.torus.rotation.x += 0.01;
        this.torus.rotation.y += 0.005;
        this.torus.rotation.z += 0.01;
        
        
        this.render();
        //this.stats.update();
        //this.controls.update();
    }
    
    render() {
        // NOTE: Update uniform data on each render.
        // this.uniforms.u_time.value += this.clock.getDelta();
        this.renderer.render(this.scene, this.camera);
    }
    
    moveCamera() {
        const t = document.body.getBoundingClientRect().top;
        this.moon.rotation.x += 0.05;
        this.moon.rotation.y += 0.075;
        this.moon.rotation.z += 0.05;

        this.philip.rotation.y += 0.01;
        //philip.rotation.z += 0.01;

        this.camera.position.z = t * -0.01;
        this.camera.position.x = t * 0.002;
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}