// var scrollButton = document.querySelector(".scroll");
// var scrollPoint = document.querySelector(".invites");
// scrollButton.addEventListener("click", function(){scrollToInvitesSection(scrollPoint)});

// function scrollToInvitesSection(Element) {

//   var selectedPosX = 0;
//   var selectedPosY = 0;
 
//   while (Element != null) {
//       selectedPosX += Element.offsetLeft;
//       selectedPosY += Element.offsetTop;
//       Element = Element.offsetParent;
//     }
 
//   setTimeout(function()  {
//     window.scrollTo(selectedPosX, selectedPosY);
//   }, 200);
// }


$(document).ready(function(){
      $(".scroll").on("click","a", function (event) {
          event.preventDefault();
          var scrollPoint  = $(this).attr('href'),
              top = $(scrollPoint).offset().top;     
          $('body,html').animate({scrollTop: top}, 800);
     });
});
  