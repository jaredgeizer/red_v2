$(document).on('click', '.beta', function () {
    $('menu').toggleClass('menu-position');
    $('.hover-off').toggleClass('hidden');
});
$(document).on('click', '.hover-off', function () {
    $('menu').removeClass('menu-position');
    $('.hover-off').addClass('hidden');
});
$('.hover-off').hover(function () {
    $('menu').removeClass('menu-position');
    $('.hover-off').addClass('hidden');
});