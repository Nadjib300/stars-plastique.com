(function() {
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      dots:true,
      margin: 15,
      merge:false,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      autoHeight: false,
    });
  });
}());
