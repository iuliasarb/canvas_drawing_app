var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

/*
function saveImage() {
	var data = canvas.toDataURL();
	window.open(data, '_blank', 'location=0, menubar=0'); // window open() Method --> google search
}
*/

function saveImage(){
	var canvas = document.getElementById('canvas');
	var image = canvas.toDataURL();

	var aLink = document.createElement('a');
	var evt = document.createEvent('HTMLEvents');
	evt.initEvent('click');
	aLink.download = 'image.png';
	aLink.href = image;
	aLink.dispatchEvent(evt);
}