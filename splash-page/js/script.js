/* Author:

*/


$(document).ready(function(){

scrolling("navbar");
collapse("contact-button",500);
spinz("contact-form")



});

$("a.scroll").click(function() {
	
		var path = $(this).attr("id").split("_")[1];			
		scrolling(path);
	
	});

function scrolling(id)
{
	$("html,body").animate({scrollTop: $("#" + id).offset().top - 60}, 1000);
}

function collapse(id,duration){
	$("#"+id).click(function(){
		$("#contact").toggleClass("collapsed",duration)
		$("#"+id).children().toggleClass("icon-minus-sign");
		$("#"+id).children().toggleClass("icon-plus-sign");
		$("#contact h3").toggle()
	});

}

function spin(target){
var opts = {
  lines: 13, // The number of lines to draw
  length: 18, // The length of each line
  width: 8, // The line thickness
  radius: 18, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  color: '#000', // #rgb or #rrggbb
  speed: 1.2, // Rounds per second
  trail: 72, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};
var target = document.getElementById(target);

var spinner = new Spinner(opts).spin(target);

}


function spinz(id){
	$('#'+id).submit(function() {
    // $('#loading_image').show(); // show animation
    spin(id);
    $(':submit',this).attr('disabled','disabled');
    $.ajax({
	    url: '..',
	    type: '..',
	    complete: function() {
	        // request is complete, regardless of error or success, so hide image
	        $('#'+id).stop();
	    }
	});
    return true; // allow regular form submission
	});
}



