$(document).ready(function(){
    
    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })

    //Lightbox
    lightbox.option({
        'resizeDuration': 700,
        'wrapAround': true,
        'positionFromTop': 300,
      })

    //下拉選單
    $('.dropdown').click(function(event){
        event.preventDefault();
        $(this).siblings().slideToggle();

        $(this).parent().siblings().find('.dropdown-list').slideUp();
    });

    $('.top').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });


});