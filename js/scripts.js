/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});



 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });




 $(document).ready(function() {
  
    $('.single-item-mobile').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    });

});
 
 
  $(document).ready(function() {
  
    $('.single-item-mobile2').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });

});
 




  $(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});


  document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);



$('.selectpicker').selectpicker({
});




    if(screen.width<=400){
            $('head').append('<meta name="viewport" content="width=400">');
        } else {
            $('head').append('<meta name="viewport" content="width=device-width">');
        }
        $(window).on("orientationchange",function(){
          if(window.orientation == 0) // Portrait 
          {
            $('head').append('<meta name="viewport" content="width=device-width">');
          } else // Landscape 
          {
            $('head').append('<meta name="viewport" content="width=740">');
          }
        });
        
  




  

$('.script-send').click(function() {
 $('.mobile-energy-script').css('display', 'none');
 $('.mobile-energy-script2').css('display', 'block');
}); 

$('.script-get').click(function() {
 $('.mobile-energy-script2').css('display', 'none');
 $('.mobile-energy-script').css('display', 'block');
});  
  
  
$('.script-send-poket').click(function() {
 $('.mobile-energy-script-poket').css('display', 'none');
 $('.mobile-energy-script-poket2').css('display', 'block');
  $('.content-page-pokeballs').css('display', 'none');
}); 
 
$('.script-get-poket').click(function() {
 $('.mobile-energy-script-poket2').css('display', 'none');
 $('.mobile-energy-script-poket').css('display', 'block');
 $('.content-page-pokeballs').css('display', 'none');
});   

$('.rty1').click(function() {
 $('.mobile-energy-script-poket2').css('display', 'none');
 $('.mobile-energy-script-poket').css('display', 'none');
 $('.content-page-pokeballs').css('display', 'block');
}); 

$('.rty3').click(function() {
 $('.mobile-energy-script-poket2').css('display', 'none');
 $('.mobile-energy-script-poket').css('display', 'none');
 $('.content-page-pokeballs').css('display', 'block');
}); 


