  

  $(window).scroll(function () {
   if ($(this).scrollTop() > 80) {
     $(".fixed-top").addClass("top-sticky");
   } else {
     $(".fixed-top").removeClass("top-sticky");
   }
 });



  $(document).ready(function () {
    $(".navbar-toggler").click(function () {
     $("#icon").toggleClass("icon-close");
     $("#icon").toggleClass("icon-menu");
     $(".navbar-light ").toggleClass("nav-bg-mobile");

   });
  });

  $(document).ready(function(){
    $(".side-modal").hide();
    $(".slide-toggle").click(function(){
      $(".side-modal").animate({
        width: "toggle"
      });

      $(".slide-toggle").hide();

      $(".slide-bg").addClass('slide-overlay');


    });

    $("#modal-close").click(function(){
      $(".side-modal").animate({
        width: "toggle"
      });

      $(".slide-toggle").show();
      $(".slide-bg").removeClass('slide-overlay');

    });


  });


  $("#team").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    smartSpeed: 300,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    rtl: true,
    nav: false,
    responsive: {
     0: {
      items: 2.6,
    },
    767: {
      items: 3.5,
    },
    1000: {
      items: 6,
      autoplay: false,
      margin: 20,
    },
  },
});


  $("#customer").owlCarousel({
    loop: true,
    margin: 80,
    dots: false,
    autoplay: true,
    smartSpeed: 300,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    rtl: true,
    nav: true,
    navText: [
    "<i class='icon-angles-left-solid'></i>",
    "<i class='icon-angles-right-solid'></i>"
    ],
    responsive: {
     0: {
      items: 1.6,
      margin: 50,
      nav: false,
    },
    767: {
      items: 3.6,
      nav: false,
      margin: 50,


    },
    1000: {
      items: 3.6,
    },
  },
});



setTimeout(function(){
   $('.about-1').show();
}, 3000);

setTimeout(function(){
   $('.about-2').show();
}, 5000);

setTimeout(function(){
   $('.about-3').show();
}, 7000);

setTimeout(function(){
   $('.about-4').show();
}, 9000);

setTimeout(function(){
   $('.about-5').show();
}, 11000);