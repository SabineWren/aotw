var modal     = document.getElementById('modal-meet-us');
var button    = document.getElementById('HUD-button');
var spanClose = document.getElementById('close-meet-us');

button.onclick = function() {
	modal.style.display = "block";
}
spanClose.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if( event.target === modal ){
		modal.style.display = "none";
	}
}
