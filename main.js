$(document).ready(function() {
    $('.button-close').click(function() {
        $('.mobile-menu-links').removeClass('active');
    });
    $('.menu-burger').click(function() {
        $('.mobile-menu-links').addClass('active');

    });


    $.mask.definitions["9"]="";$.mask.definitions["d"]="[0-9]";$('[name="phone"]').mask("+7(ddd) ddd-dd-dd");
});