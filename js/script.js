AOS.init({
    duration: 1200,
  });



$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    // progressbar
    $('#grapdgn').LineProgressbar({
      percentage: 67,
      fillBackgroundColor: '#008AFF',
      backgroundColor: '#DEE7EE',
      radius: '0px',
      height: '10px',
      width: '100%'
    });
    $('#wbdgn').LineProgressbar({
      percentage: 89,
      fillBackgroundColor: '#008AFF',
      backgroundColor: '#DEE7EE',
      radius: '0px',
      height: '10px',
      width: '100%'
    });
    $('#dvlmnt').LineProgressbar({
      percentage: 55,
      fillBackgroundColor: '#008AFF',
      backgroundColor: '#DEE7EE',
      radius: '0px',
      height: '10px',
      width: '100%'
    });
    $('#uiux').LineProgressbar({
      percentage: 67,
      fillBackgroundColor: '#008AFF',
      backgroundColor: '#DEE7EE',
      radius: '0px',
      height: '10px',
      width: '100%'
    });

    // counterup
    $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

    // mixitup
    var mixer = mixitup('#mixbtn');

    // owlcarosul
    $("#testimoni").owlCarousel({
 
        navigation : false, // Show next and prev buttons
         
        slideSpeed : 300,
        paginationSpeed : 400,
        autoPlay: false,
        goToFirst: true,
        items : 1,
        responsive: true, 
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        itemsMobile:[479,1],
         
    });



     
});
