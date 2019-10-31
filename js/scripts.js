
//JQUERY ACCORDION TOGGLE AND REPOSITION ON PAGE WITH ANIMATE//
$(document).ready (function(){
$('.accordion').click(function(e){
e.preventDefault();
$(this).toggleClass('active');
$(this).next('.inner').slideToggle("slow", "linear", function(){
$('html,body').animate({scrollTop: $(this).offset().top -150}, 1000);
});//END TOGGLE FUNCTION
});//END ACCORDION CLICK EVENT
});//END DOCUMENT.READY FUNCTION
//////////////////////////////////////////////////////////////////////////

////////FOR GOOGLE FORM DISPLAY/////////////////////////////////////////////
$(document).ready(function(){
  $("#comment-form").click(function(){
      $('.question').slideToggle(1000, function(){
      $('html,body').animate({scrollTop: $(this).offset().top -500}, 2000);
    });//ENDS CLICK BUTTON FUNCTON//
      $(".question").find("input[type=radio").val("");
      $(".question").find('input:radio').removeAttr('selected');
  });//ENDS FORM TOGGLE FUNCTION//	
});//ENDS DOC .READY FUNCTION//
//////////////////////////////////////////////////////////////////////////

///EVENT THAT OPENS THE SPECIFIC ACCORDION PANELS TIED TO HREF LINK//////
$(document).ready(function(){
  $('.accordion').click(function(e){
      $(this).attr('href');
      $(this).next('.inner').toggleClass("slow", function(){
      $('html,body').animate({scrollTop: $(this).offset().top -500}, 2000);
    });//ENDS FORM TOGGLE FUNCTION//
  });
	// Begin script to open accordion panels via an external link with hash
	var hash = window.location.hash;
	var anchor = $('a[href$="'+hash+'"]');
	if (anchor.length > 0){
		anchor.click();
	}
});
