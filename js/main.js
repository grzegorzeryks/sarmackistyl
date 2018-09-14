$(document).ready(function() {
  let backLogo = $(".background-logo");
  let graphic = $('#graphic');
  let crownLogo = $('.crown-logo');
  let asideMenu = $('aside');
  let constructLogo = $('.construct')



  //page load animation
  backLogo.css('top', '11%');
  crownLogo.addClass('crown-logo-move');


  //scrolling

  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let grapicSectionHeight = $('.graphic').height();
    let landingSectionHeight = $('.start').height();
    let graphicEndPosition = landingSectionHeight + grapicSectionHeight + 20;

    console.log(scroll);

    console.log('graph ' + grapicSectionHeight);
    console.log('end ' + graphicEndPosition);



    if (scroll >= landingSectionHeight && scroll < graphicEndPosition) {
      //console.log('a');
      constructLogo.css('right', '4px');
      asideMenu.addClass("move-aside");
    } else if (scroll >= graphicEndPosition) {
            console.log('hurrraaaa');
            //kodzik do zmiany koloru
    } else {
      //console.log('a');
      constructLogo.css('right', '-30%');
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
