$(document).ready(function() {
  let backLogo = $(".background-logo");
  let graphic = $('#graphic');
  let crownLogo = $('.crown-logo');
  let asideMenu = $('aside');
  let constructLogo = $('.construct');
  let smallLogo = $('.small-logo');
  let designIcon = $('#design-icon');
  let frontIcon = $('#front-icon');
  let photoIcon = $('#photo-icon');
  let aboutIcon = $('#about-icon');
  let smallCrownIcon = $('#small-crown-icon');

  //page load animation
  backLogo.css('top', '11%');
  crownLogo.addClass('crown-logo-move');
  console.log(smallLogo);
  console.log(designIcon);

  //scrolling

  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let grapicSectionHeight = $('.graphic').height();
    let landingSectionHeight = $('.start').height();
    let frontendSectionHeight = $('.frontend').height();
    let photoSectionHeight = $('.photo').height();
    let graphicEndPosition = landingSectionHeight + grapicSectionHeight + 20;
    let frontendEndPosition = graphicEndPosition + frontendSectionHeight;
    let photoEndPosition = frontendEndPosition + photoSectionHeight;
    console.log(scroll);
    console.log('frontend ' + frontendEndPosition);
    console.log('graph ' + grapicSectionHeight);
    console.log('end ' + graphicEndPosition);

    function whiteLogos() {
      smallCrownIcon.attr('src', '../img/crown_logo_white.png');
      designIcon.attr('src', '../img/design_icon.png');
      frontIcon.attr('src', '../img/code_icon.png');
      photoIcon.attr('src', '../img/photo_icon.png');
      aboutIcon.attr('src', '../img/phone_icon.png');
    }

    function blackLogos() {
      smallCrownIcon.attr('src', '../img/crown_logo_black.png');
      designIcon.attr('src', '../img/design_icon2.png');
      frontIcon.attr('src', '../img/code_icon2.png');
      photoIcon.attr('src', '../img/photo_icon2.png');
      aboutIcon.attr('src', '../img/phone_icon2.png');
    }


    if (scroll >= landingSectionHeight && scroll < graphicEndPosition) {
      constructLogo.css('right', '4px');
      asideMenu.addClass('move-aside');
      whiteLogos();
    } else if (scroll >= graphicEndPosition && scroll <= frontendEndPosition) {
      asideMenu.addClass('move-aside');
      blackLogos();
    } else if (scroll > frontendEndPosition && scroll <= photoEndPosition) {
      whiteLogos();

    } else if (scroll > photoEndPosition) {
      blackLogos();
    } else {
      constructLogo.css('right', '-30%');
      asideMenu.removeClass('move-aside');
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
