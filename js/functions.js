//Smooth scroll to a div
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$(document).ready(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header-fixed').outerHeight();

  $(window).scroll(function(){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight)
      $('.header-fixed').removeClass('nav-down').addClass('nav-up');
    else if ( st + $(window).height() < $(document).height() )
      $('.header-fixed').removeClass('nav-up').addClass('nav-down');

    lastScrollTop = st;
  }
});

//navbar collapse close on click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    $hamburger.toggleClass("is-active");
});



  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });





//fade
$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.fade').each( function(i){

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      console.log('bottom of object', bottom_of_object);

      var bottom_of_window = $(window).scrollTop() + $(window).height();
      console.log('bottom of window', bottom_of_window);

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){

        $(this).animate({'opacity':'1'},10, "swing");

      }

    });

  });

});



// Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });


// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);
