$(function(){
  $('#nav__btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active')
  });


});

$(function(){
  $("a[href^='#']:not([href='#'])").click(function(){
    var speed = 500;
    var target = $(($this).attr("href")).offset().top;

    $("html,body").animate({scrollTop:target},500);

    target -= 100;

    return false;

  });

});

$(function(){
  $('.js_accordion').on('click',function(){
    $(this).next().slideToggle();
  })

});

$(function(){
  $('#work__slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      arrows: false,
      centerPadding: '100px',
      centerMode: true,
          responsive: [
              {
              breakpoint: 767,
              settings: {
              speed: 1000,
              autoplaySpeed: 5000,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              //centerPadding: '100px',
              centerMode: false,
              }
          }
      ]
  });
});


$(function(){
  AOS.init({
    offset: 300,
    duration: 1000,
    easing: 'ease-in',
  });

});
