import * as THREE from 'three'

const Computer = () => {
    const camera = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {
	    requestAnimationFrame( animate );

    	cube.rotation.x += 0.01;
	    cube.rotation.y += 0.01;

    	renderer.render( scene, camera );
    };

    animate();
}

export default Computer;