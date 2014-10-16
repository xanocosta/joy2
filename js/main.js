$(document).ready(function(){
	speed= 20;

	$('#btright').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +speed;
		if (newpleft > 800) {
			newpleft = 800;
		}
		//$b.css('left', newpleft + 'px');
		$b.animate({"left": "+=" + speed + "px"},"slow");
	})

	$('#btleft').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -speed;
		if (newpleft > 40) {
			$b.animate({"left": "-=" + speed + "px"},"slow");
		}
		//$b.css('left', newpleft + 'px');

	})

	$('#btdown').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +speed;
		$b.css('top', newpleft + 'px');

		if (newpleft > 300) {
			
			$b.animate({"left": "-=" + speed + "px"},"slow");

	}
	})

	$('#btup').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -speed;
		$b.css('top', newpleft + 'px');
		if (newpleft > 0) {
			newpleft = 0
		}

	})
});