import * as THREE from 'three';
import philipPic from './../../assets/me-flowers-sq.jpeg';

export default (scene, textureLoader) => {
    // Box geometry
    const philipTexture = textureLoader.load(philipPic);
    const boxGeo = new THREE.Mesh(
        new THREE.BoxGeometry(3,3,3),
        new THREE.MeshBasicMaterial( {map: philipTexture })
    );
    boxGeo.position.set(0.5,0,-30);
    scene.add(boxGeo);

    function update() {
        boxGeo.rotation.y += 0.01;
        
        
    }

    return {
        update
    }
}