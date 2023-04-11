import * as THREE from 'three';

export default scene => {
    // Torus geometry
    const torusGeo = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({color: 0xeeeeee});
    const torus = new THREE.Mesh(torusGeo, torusMat);
    // set the torus back from where the camera is positioned (0,0,0)
    torus.position.setZ(-30);
    scene.add(torus);

    function update() {
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;
    }

    return {
        update
    }
}