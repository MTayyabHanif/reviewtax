function menuNavbarEvent(){
    $('body').on('click', 'nav .button-collapse', function (){
        $('.nav').toggleClass('show');
        if ($('.nav').hasClass('show')) {
            $('nav .button-collapse:not(.in)').fadeOut( 700 );
        } else {
            $('nav .button-collapse:not(.in)').fadeIn( 700 );
        }
        $('.nav-collapse-wrapper').fadeToggle( 700, "linear" );
    });

    $('.disclosure-trigger a').on('click', function(e){
        e.preventDefault();
        $('.disclosure').toggleClass('active');
        $('.disclosure-trigger a').toggleClass('modalActive');
    });
}
menuNavbarEvent();

function disclosureModal() {
    let disclosure = $('.disclosure');
    let containerLeft = $('.nav-wrapper > .container').offset().left;
    containerLeft = Math.round(containerLeft);
    containerLeft = containerLeft + 15;
    disclosure.css('right', ''+containerLeft+'px');
}
$(function(){

    if ($(window).width() > 575) {
        disclosureModal();
    }

});