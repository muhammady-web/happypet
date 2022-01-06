$(document).ready(function () {
    
    // $('.works-control__item').click(function(){
    //     $('.works-control__item').removeClass('works-control__item_active');
    //     $(this).addClass('works-control__item_active');
    //     function filterPhoto(photo){
    //         $('.works-gallery__item').filter(photo).show();
    //         $('.works-gallery__item').not(photo).hide();
    //     }
    //     filterPhoto('.' + $(this).attr('filter'));
    // })
    
    
    $('.glava_nav-center a').click(function (e) {
        e.preventDefault();
        $('.glava_nav-center a').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.glava_nav-center').outerHeight()
        }, 800)
    });

    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        $('.glava_nav-center a').each(function () {
            if (scrolled >= $($(this).attr('href')).offset().top - $('.glava_nav-center').outerHeight()) {
                $('.glava_nav-center a').removeClass('active');
                $(this).addClass('active');
            }
        })
    });
    
    // $('.multiple-items').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   });
    $('.single-item').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
}); 