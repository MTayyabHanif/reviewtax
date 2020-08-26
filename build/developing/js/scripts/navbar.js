function menuNavbarEvent(){
    $('body').on('click', 'nav .button-collapse', function (){
        $('.nav').toggleClass('show');
        if ($('.nav').hasClass('show')) {
            $('nav .button-collapse:not(.in)').slideUp();
        } else {
            $('nav .button-collapse:not(.in)').slideDown();
        }
        $('.nav-collapse-wrapper').slideToggle();
    });
}
menuNavbarEvent();