  $(document).ready(function() {
  var backLogo = $('.background-logo');
  var graphic = $('#graphic');
  var crownLogo = $('.crown-logo');
  var asideMenu = $('aside');
  var constructLogo = $('.construct');
  var smallLogo = $('.small-logo');
  var designIcon = $('#design-icon');
  var frontIcon = $('#front-icon');
  var photoIcon = $('#photo-icon');
  var aboutIcon = $('#about-icon');
  var smallCrownIcon = $('#small-crown-icon');
  var clickSound = new Audio('snd/click.mp3');
  var allLi = $('li');

  console.log('about position ' + $('.about').scrollTop());
//gallery slider
var gallerySlider = $('.gallery-slider');


  //page load animation
  backLogo.css('top', '11%');
  crownLogo.addClass('crown-logo-move');

  //scrolling

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var grapicSectionHeight = $('.graphic').height();
    var landingSectionHeight = $('.start').height();
    var frontendSectionHeight = $('.frontend').height();
    var photoSectionHeight = $('.photo').height();
    var graphicEndPosition = landingSectionHeight + grapicSectionHeight + 20;
    var frontendEndPosition = graphicEndPosition + frontendSectionHeight;
    var photoEndPosition = frontendEndPosition + photoSectionHeight;
    var aboutStartPosition = $('.about').offset();
    console.log(scroll);
    console.log('frontend ' + frontendEndPosition);
    console.log('graph ' + grapicSectionHeight);
    console.log('end ' + graphicEndPosition);


    function whiteLogos() {
      smallCrownIcon.attr('src', 'img/crown_logo_white.png');
      designIcon.attr('src', 'img/design_icon.png');
      frontIcon.attr('src', 'img/code_icon.png');
      photoIcon.attr('src', 'img/photo_icon.png');
      aboutIcon.attr('src', 'img/phone_icon.png');
    }

    function blackLogos() {
      smallCrownIcon.attr('src', 'img/crown_logo_black.png');
      designIcon.attr('src', 'img/design_icon2.png');
      frontIcon.attr('src', 'img/code_icon2.png');
      photoIcon.attr('src', 'img/photo_icon2.png');
      aboutIcon.attr('src', 'img/phone_icon2.png');
    }


    if (scroll >= landingSectionHeight) {
      constructLogo.css('right', '4px');
      asideMenu.addClass('move-aside');
    } else {
      constructLogo.css('right', '-30%');
      asideMenu.removeClass('move-aside');
    }


    if (scroll >= landingSectionHeight && scroll < graphicEndPosition) {
      whiteLogos();
            $('.frontend').css('background-position', 'right ' + '-27px' );
    } else if (scroll >= graphicEndPosition && scroll <= frontendEndPosition) {
      blackLogos();
        $('.frontend').css('background-position', '50% ' + '-27px' );


    } else if (scroll > frontendEndPosition && scroll <= photoEndPosition) {
      whiteLogos();
      $('.side-photo img').css('width', '0%');
      $('.tools').css('margin-left', '-3000px');
      asideMenu.css('position', 'fixed').css('top', '4%').css('transition', 'all 0.4s');
      $('.frontend').css('background-position', 'right ' + '-27px' );
    } else if (scroll > photoEndPosition) {
      blackLogos();
      $('.side-photo img').css('width', '31 %');
      $('.tools').css('margin-left', '0');
      asideMenu.css('position', 'absolute').css('top', aboutStartPosition.top + 'px').css('transition', 'all 0.4s');
      $('.side-photo img').css('width', '30%');
    }
  });


  //contact slide
  var contactBox = $('.contact');
  var contactButtons = $('.contact-click')

  contactButtons.each(function() {
    $(this).click(function() {
      $('.contact').css('left', '0');
      clickSound.play();
    });
  });


  contactBox.click(function() {
    $(this).css('left', '-3000px');
    clickSound.play();
  });


//graphicdesign gallery
var graphicdesign = $('.gallery div');
var closeSlider = $('.close-slider');
var galleryElements = $('.img-container div');
console.log(galleryElements);
closeSlider.click(function(){gallerySlider.css('left','-1990px')});
graphicdesign.each(function(){
  $(this).click(function(){
    gallerySlider.css('left','0');
    removeVisibility(galleryElements);
    currentClassName = '.' + $(this).attr('class');
    console.log($(this).attr('class'));
    $(currentClassName).css('display','block');

  });
});

//imgElementsVisibility
function removeVisibility(array) {
  array.each(function(){
    $(this).css('display','none');
  });
  }


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
