/* Author:

*/


$(document).ready(function(){

scrolling("navbar");


});
$("a.scroll").click(function() {
	
		var path = $(this).attr("id").split("_")[1];			
		scrolling(path);
	
	});

function scrolling(id)
{
	$("html,body").animate({scrollTop: $("#" + id).offset().top - 60}, 1000);
}