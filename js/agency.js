// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    var toggleAffix = function(affixElement, scrollElement, wrapper) {

      var height = affixElement.outerHeight(),
          top = wrapper.offset().top;

      if (scrollElement.scrollTop() >= top){
          wrapper.height(height);
          affixElement.addClass("affix");
      }
      else {
          affixElement.removeClass("affix");
          wrapper.height('auto');
      }

    };

    $('[data-toggle="affix"]').each(function() {
      var ele = $(this),
          wrapper = $('<div></div>');

      ele.before(wrapper);
      $(window).on('scroll resize', function() {
          toggleAffix(ele, $(this), wrapper);
      });

      // init
      toggleAffix(ele, $(window), wrapper);
    });

})(jQuery); // End of use strict
