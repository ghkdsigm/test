

//FULLPAGE GENERAL SETTINGS//
$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    controlArrows: true,
    slidesNavigation: false,
    //sectionsColor: ['none', 'none', 'none', 'none'],
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    css3: true
  });
  
  $('.modalOpenBtn').click(function(){
    $('body').on('mousewheel', function(e) {
      e.preventDefault();
      }, false);
   });
      
  $('.modalClose').click(function(){
    $('body').off('mousewheel');
  });
});


/*
 $('#parallax').parallax({
	invertX: true,
	invertY: true,
	scalarX: 10,
	 frictionY: .1
});


//Scroll to Top on Refresh//
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}
*/


