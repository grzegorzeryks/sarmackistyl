$(document).ready(function() {
  console.log('ready!');
  let backLogo = $(".background-logo");
  let graphic = $('#graphic');
  let crownLogo = $('.crown-logo');
  let asideMenu = $('aside');
  console.log(asideMenu);
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

  //finding element offset and animating aside

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
       console.log(scroll);
      if (scroll >= 730) {
          //console.log('a');
          asideMenu.addClass("move-aside");
      } else {
          //console.log('a');
          asideMenu.removeClass("move-aside");
      }
  });




  //Smooth scroll
  $('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
