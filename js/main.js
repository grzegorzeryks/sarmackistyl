$(document).ready(function() {
  console.log('ready!');
  let backLogo = $(".background-logo");
  console.log(backLogo);
  let graphic = $('#graphic');
  console.log(graphic);
  let crownLogo = $('.crown-logo');
  // back.on('click',function(){
  //   console.log('elo');
  //
  // });


//page load animation
backLogo.css('top', '11%');
crownLogo.addClass('crown-logo-move');

// crownLogo.mousemove(function(){
//   // $(this).css('margin','1% 40%');
//   $(this).addClass('crown-logo-animate');
//   console.log('dziaa');
//
//    crownLogo.removeClass('crown-logo-animate');
//    console.log('class removed');
//
// });


//Smooth scroll
$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });




});
