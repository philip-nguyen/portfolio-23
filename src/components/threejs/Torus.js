import * as THREE from 'three';

export default torus => {
    // Torus geometry
    const torusGeo = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({color: 0x5f31f5});
    this.torus = new THREE.Mesh(torusGeo, torusMat);

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