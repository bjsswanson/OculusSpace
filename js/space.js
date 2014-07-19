var SPACE = window.SPACE || {};

SPACE.Scene = new THREE.Scene();

SPACE.Utils = {
	million : function( v ) {
		return v * 1000000;
	},

	billion: function( v ) {
		return SPACE.Utils.million( v ) * 1000;
	},

	loadTexture : function( image, callback ) {
		if(callback == undefined) {
			callback = function(){};
		}
		return THREE.ImageUtils.loadTexture(image, null, callback);
	}
};

SPACE.Lights = function() {
	var ambientLight = new THREE.AmbientLight( 0x888888 );
	SPACE.Scene.add( ambientLight );

	return {
		ambient: ambientLight
	}
}();

SPACE.Earth = function() {
	var geometry = new THREE.SphereGeometry(637, 64, 64);
	var material = new THREE.MeshPhongMaterial();
	material.map = SPACE.Utils.loadTexture('img/earth/earthmap4k.jpg');
	material.bumpMap = SPACE.Utils.loadTexture('img/earth/earthbump1k.jpg');
	material.bumpScale = 0.05;
	material.specularMap = SPACE.Utils.loadTexture('img/earth/earthspec1k.jpg');
	material.specular = new THREE.Color('grey');

	var mesh = new THREE.Mesh(geometry, material);
	SPACE.Scene.add(mesh);

	return {
		mesh: mesh,
		animate: function(){
			mesh.rotation.y += THREE.Math.degToRad(0.01);
		}
	}
}();


SPACE.animate = function(){
	SPACE.Earth.animate();
}

