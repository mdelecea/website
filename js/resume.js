(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function scrollToTop() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000, "easeInOutExpo");
}

function scrollToBottom() {
  $('html, body').animate({
    scrollTop: $(document).height()
  }, 1000, "easeInOutExpo");
}

function scrollTo(target) {
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000, "easeInOutExpo");
}

function scrollToAnchor(target) {
  $('html, body').animate({
    scrollTop: $('a[name=' + target + ']').offset().top
  }, 1000, "easeInOutExpo");
}

function scrollToElement(target) {
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000, "easeInOutExpo");
}

function enableDarkMode(){
  var element = document.body;
  var match = window.matchMedia("(prefers-color-scheme: dark)");
  if (match.matches) {
    element.classList.add("dark-mode");
  }
  else {
    element.classList.remove("dark-mode");
  }
}