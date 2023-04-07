import * as THREE from 'three';
import Torus from './Torus';
// image assets
import background from './../../assets/esv-sky.jpg';

export default canvas => {
    const origin = new THREE.Vector3(0,0,0);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene(); 
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions); 
    const sceneSubjects = createSceneSubjects(scene);
    
    const textureLoader = new THREE.TextureLoader();

    function buildScene() { 
        const scene = new THREE.Scene();
        scene.background = textureLoader.load(background);

        return scene;
    }
    
    function buildRender({ width, height }) { 
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
        });
        renderer.setSize(width, height);

        return renderer;
    }

    function buildCamera({ width, height }) { 
        const fov = 45;
        const aspectRatio = width / height;

        const camera = new THREE.PerspectiveCamera(
            fov,
            aspectRatio,
            1,
            1000
        );

        camera.position.setZ(30);
    }
    function createSceneSubjects(scene) { 
        const sceneSubjects = [
            new Torus(scene),
        ];

        return sceneSubjects;
    }
    function update() { 
        for(let i = 0; i < sceneSubjects.length; i++)
            sceneSubjects[i].update();
        
            renderer.render(scene, camera);
    }
    function onWindowResize() { 
        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }

    function onScroll() {
        const t = document.body.getBoundingClientRect().top;

        camera.position.z = t * -0.01;
        camera.position.x = t *  0.005;
    }

    return {
        update,
        onWindowResize,
        onScroll
    }
}