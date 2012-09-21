var ambientalSoundUrl = 'song.ogg';
var ambientalAudio = document.createElement('audio');
ambientalAudio.src = ambientalSoundUrl;

function playAmbientSound() {
	ambientalAudio.play();
}

$().ready(function() {
	//playAmbientSound();

	$(ambientalAudio).bind("ended", function(){
		playAmbientSound();
	});

	$('.backgroudTrigger').click(function() {
		var newClass = $(this).attr('href');
		$('body').removeClass().addClass(newClass);
		return false;
	});

	$('.textTrigger').click(function() {
		var newClass = $(this).attr('href');
		$('#text').removeClass().addClass(newClass);
		return false;
	});
});
