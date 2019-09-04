
$(document).ready(function(){
      $(".scroll").on("click","a", function (event) {
          event.preventDefault();
          var scrollPoint  = $(this).attr('href'),
              top = $(scrollPoint).offset().top;     
          $('body,html').animate({scrollTop: top}, 800);
     });
});
  
