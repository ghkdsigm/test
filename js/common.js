$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({

        scrollTop: $(hash).offset().top

      }, 800, function(){

        window.location.hash = hash;

      });

    } 

  });


  /**top버튼**/
  $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });



    $(".project_middle_04").hover(function(){
        $('.seeWorks').addClass("on");
    }, function() {
        $('.seeWorks').removeClass("on");
    });

    


});

 