var camera, scene, renderer;
var effect, oculusControl;
var clock = new THREE.Clock();

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 5000 );

	scene = new THREE.Scene();

	effect = new THREE.OculusRiftEffect( renderer, { worldScale: 1 } );
	effect.setSize( window.innerWidth, window.innerHeight );

	oculusControl = new THREE.OculusControls( camera );

	document.body.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

	oculusControl.connect();
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	effect.setSize( window.innerWidth, window.innerHeight );
}

function keyPressed(event) {
	if (event.keyCode === 72) { // H

	}
}

function animate() {
	requestAnimationFrame( animate );

	var t = clock.getElapsedTime();


	controls.update( clock.getDelta() );
	oculusControl.update( clock.getDelta() );

	effect.render( scene, camera );
}
