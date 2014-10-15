$(document).ready(function(){

	$('#btright').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +20;
		if (newpleft > 800) {
			newpleft = 800;
		}
		$b.css('left', newpleft + 'px');
	})

	$('#btleft').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -20;
		if (newpleft < 40) {
			newpleft = 40
		}
		$b.css('left', newpleft + 'px');
	})

	$('#btdown').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +10;
		$b.css('top', newpleft + 'px');
		if (newpleft > 300) {
			newpleft = 300

	}
	})

	$('#btup').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -10;
		$b.css('top', newpleft + 'px');
		if (newpleft > 0) {
			newpleft = 0
		}

	})
});