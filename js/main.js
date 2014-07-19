var camera, scene, renderer;
var effect, oculusControl;
var clock = new THREE.Clock();

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	scene = SPACE.Scene;
	camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.0001, SPACE.Utils.million(600)); //Unit 10km
	camera.position.set( 0, 0, 1000 );
	camera.lookAt( scene.position );

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

function animate() {
	requestAnimationFrame( animate );
	SPACE.Earth.animate();
	oculusControl.update( clock.getDelta() );
	effect.render( scene, camera );
}