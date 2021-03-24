// Replicating Bootstrap's shadow class for rotated objects in CSS

var angles = [-4, 2];			// the angle in degrees

for (i in angles) {

	var shadowXOffset = 0;
	var shadowYOffset = 0.5;
	var shadowX = Math.sin(angles[i] * (Math.PI / 180)) * shadowYOffset;
	var shadowY = Math.cos(angles[i] * (Math.PI / 180)) * shadowYOffset;

	var shadowX2 = Number.parseFloat(shadowX).toFixed(3);
	var shadowY2 = Number.parseFloat(shadowY).toFixed(3);

	console.log("ANGLE " + angles[i] + "deg:  box-shadow: " + shadowX2 + "rem " + shadowY2 + "rem 1rem rgba(0,0,0,0.15);");
}