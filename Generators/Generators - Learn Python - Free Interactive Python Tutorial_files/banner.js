if(jQuery){
$(function(){
	if($('#start-exercise').length){
		$('#start-exercise').after($('<br/><br/><a href="http://www.spoj.com/?utm_campaign=permanent&utm_medium=banner&utm_source=learnx" target="_blank"><img src="https://stx1.spoj.com/gfx/spoj-banner1.png"/></a><script type="text/javascript" src="//stx1.spoj.com/gfx/jobx.min.js"></script>'));
	} else {
	//	document.write('<a href="http://www.spoj.com/?utm_campaign=permanent&utm_medium=banner&utm_source=learnx" target="_blank"><img src="https://www.spoj.com/gfx/spoj-banner1.png"/></a>');
	}
});
} else {
	document.write('<a href="http://www.spoj.com/?utm_campaign=permanent&utm_medium=banner&utm_source=learnx" target="_blank"><img src="https://stx1.spoj.com/gfx/spoj-banner1.png"/></a><script type="text/javascript" src="//stx1.spoj.com/gfx/jobx.min.js"></script>');
}
