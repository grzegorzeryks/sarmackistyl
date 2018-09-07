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

crownLogo.mousemove(function(){
  // $(this).css('margin','1% 40%');
  $(this).addClass('crown-logo-animate');


});

});
