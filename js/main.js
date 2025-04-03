(function ($) {
  "use strict";

  // Initiate the wowjs animation library
  new WOW().init();

  // Preloader (if the #preloader div exists)
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });
  
  /*header-scrolled*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 60) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  //image slider for agent meeting
  $(".sliderbanner").owlCarousel({
    items: 1,  
    margin: 0,      
    loop: false,
    nav: false,
    autoplay: true,             // Enable autoplay
      autoplayTimeout: 3000,      // Set autoplay delay
      autoplayHoverPause: true,   // Pause on hover
      animateOut: 'fadeOut',      // Use fadeOut animation
      animateIn: 'fadeIn',        // Use fadeIn animation
      smartSpeed: 450,  
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  });

  //blog-slider for agent meeting
  $(".video_watcging").owlCarousel({
    items: 3.4,  
    margin: 20,     
    screenLeft:true,
    loop: false,
    nav: false,
    autoplay: false,             // Enable autoplay
      autoplayTimeout: 3000,      // Set autoplay delay
      autoplayHoverPause: true,   // Pause on hover
      animateOut: 'fadeOut',      // Use fadeOut animation
      animateIn: 'fadeIn',        // Use fadeIn animation
      smartSpeed: 450,  
      navText: [
        "<div class='nav-btn prev-slide'><img src='img/icon/arrow-left.svg' ></div>",
        "<div class='nav-btn next-slide'><img src='img/icon/arrow-right.svg' ></div>",
      ],
    dots: false,
    responsive: {
      0: {
        items: 1.2,
      },
      991: {
        items: 3,
      },
      1400: {
        items: 3.1,
      },
    },
  });
  //blog-slider for agent meeting
  $(".aboutus").owlCarousel({
    items: 2.4,  
    margin: 20,     
    screenLeft:true,
    loop: false,
    nav: false,
    autoplay: false,             // Enable autoplay
      autoplayTimeout: 3000,      // Set autoplay delay
      autoplayHoverPause: true,   // Pause on hover
      animateOut: 'fadeOut',      // Use fadeOut animation
      animateIn: 'fadeIn',        // Use fadeIn animation
      smartSpeed: 450,  
      navText: [
        "<div class='nav-btn prev-slide'><img src='img/icon/arrow-left.svg' ></div>",
        "<div class='nav-btn next-slide'><img src='img/icon/arrow-right.svg' ></div>",
      ],
    dots: false,
    responsive: {
      0: {
        items: 1.2,
      },
      991: {
        items: 2.5,
      },
      1400: {
        items: 2.1,
      },
    },
  });


  /* FOR profile NAV TOGGLES */


  jQuery(".bar-toggle").click(function () {
    if(jQuery("body").hasClass('active-slide')){
      jQuery("body").removeClass('active-slide')
    }else{
      jQuery("body").addClass('active-slide');
    }
   });
 
   jQuery(".filter-slide").click(function () {
     if(jQuery("body").hasClass('slide-s')){
       jQuery("body").removeClass('slide-s')
     }else{
       jQuery("body").addClass('slide-s');
     }
    });
 
   jQuery(".cross-mobile").click(function () {
    if(jQuery("body").hasClass('inactive-slide')){
      jQuery("body").removeClass('inactive-slide')
    }else{
      jQuery("body").addClass('inactive-slide');
    }
   });
 

  //lightbox

})(jQuery);
