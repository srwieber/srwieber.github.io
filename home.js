function letters(){
  let speed = 50;
  let move = -5;
  $('.letters:nth-of-type(1)').delay(1500).animate({top: move}, speed, 'linear', function() {
    $('.letters:nth-of-type(1)').delay(speed).animate({top: 0}, 'linear');
    $('.letters:nth-of-type(2)').delay(speed).animate({top: move}, speed, 'linear', function() {
      $('.letters:nth-of-type(2)').delay(speed).animate({top: 0}, 'linear');
      $('.letters:nth-of-type(3)').delay(speed).animate({top: move}, speed, 'linear', function() {
        $('.letters:nth-of-type(3)').delay(speed).animate({top: 0}, 'linear');
          letters();
      });
    });
  });
}
letters();
$(function() {
  $('#loading .avy').animate({top: '25%'}, 250).animate({top: '19%'}, 250, function() {
    $('#loading .avy').animate({right: '-80%'}, 2000);
    $('#loading .leftloader').animate({left: '-80%'}, 1500);
    $('#loading .middleloader').animate({right: '120%'}, 1000);
    $('#loading .rightloader').animate({right: '-100%'}, 1500, function() {
      $('#loading').remove();
    });
  });
});
$('nav span.icon').click(function() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});
$('nav span').not('.icon').click(function() {
  var x = this.id.replace('Link','');
  $('html, body').animate({
    scrollTop: $('#' + x).offset().top
  }, 500);
});
let active = false;
$(window).on("scroll", function(){
  let bottomOfWindow = $(window).scrollTop() + $(window).height();
  let topOfWindow = $(window).scrollTop();
  if( !active && bottomOfWindow - 100 >= $("#projects .card:first-of-type").offset().top && topOfWindow + 100 <= $("#contact").offset().top ){
    //$('.card').slideDown();
    $('.card').each(function(i) {
      delay =(i)*50;
      $(this).delay(delay).animate({
        opacity:1
      }, delay, function() {
        $(this).delay(delay).addClass('slide_left');
      });  
    });
    active = true;
  }
  if( active && ( topOfWindow >= $("#contact").offset().top || bottomOfWindow <= $("#projects").offset().top ) ){
    $('.card').removeClass('slide_left').css('opacity', '0.1');;
    active = false;
  }
});
