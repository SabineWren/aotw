var modalMeetUs  = document.getElementById('modal-meet-us');
var modalMedia   = document.getElementById('modal-media');

var buttonMeetUs = document.getElementById('HUD-button');
var buttonMedia  = document.getElementById('media-button');

var spanCloseMeetUs = document.getElementById('close-meet-us');
var spanCloseMedia  = document.getElementById('close-media');

buttonMeetUs.onclick = function() {
	modalMeetUs.style.display = "block";
}
buttonMedia.onclick = function() {
	modalMedia.style.display  = "block";
}

spanCloseMeetUs.onclick = function() {
	modalMeetUs.style.display = "none";
}
spanCloseMedia.onclick = function() {
	modalMedia.style.display  = "none";
}

window.onclick = function(event) {
	if( event.target === modalMeetUs ){
		modalMeetUs.style.display = "none";
	}
	if( event.target === modalMedia ){
		modalMedia.style.display  = "none";
	}
}
