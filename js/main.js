$(function(){

	$("#slideshow-current > div:gt(0)").hide();

	setInterval(function() {
	  $('#slideshow-current > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow-current');
	}, 5000);

	$("#slideshow-before > div:gt(0)").hide();

	setInterval(function() {
	  $('#slideshow-before > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow-before');
	}, 5000);

	$('.switch-field').click(function() {
	   if($('#switch_right').is(':checked')) { 
   			$('#slideshow-current').toggleClass('hidden shown');
   			$('#slideshow-before').toggleClass('shown hidden');
	   }
	});

});