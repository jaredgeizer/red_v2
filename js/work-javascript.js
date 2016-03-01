$(document).ready(function(){
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});

$(window).resize(function(){
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});

$(document).on('click', '.beta', function(){
    $('menu').toggleClass('menu-position');
    $('.hover-off').toggleClass('hidden');
});
$(document).on('click', '.hover-off', function(){
    $('menu').removeClass('menu-position');
    $('.hover-off').addClass('hidden');
});
$('.hover-off').hover(function(){
    $('menu').removeClass('menu-position');
    $('.hover-off').addClass('hidden');
});

$(document).on('click', '#web', function(){
    $('.web-container').removeClass('hidden');
    $('.back-button').removeClass('hidden');
    $('.back-button').addClass('back-from-web');
    $('.web-container').addClass('show');
    $('#categories').addClass('hidden');
    $('.web-extension').addClass('hidden');
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});
$(document).on('click', '.web > h2', function(){
    $('.web-container').removeClass('hidden');
    $('.back-button').removeClass('hidden');
    $('.back-button').addClass('back-from-web');
    $('.web-container').addClass('show');
    $('#categories').addClass('hidden');
    $('.web-extension').addClass('hidden');
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});
$(document).on('click', '.web-extension', function(){
    $('.web-container').removeClass('hidden');
    $('.back-button').removeClass('hidden');
    $('.back-button').addClass('back-from-web');
    $('.web-container').addClass('show');
    $('#categories').addClass('hidden');
    $('.web-extension').addClass('hidden');
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});
$('.web > h2').hover(function(){
    $('.web > div').toggleClass("active");
    $('.web-extension').toggleClass("web-extension-active");
});
$('#web').hover(function(){
    $('.web-extension').toggleClass("web-extension-active");
});
$('.web-extension').hover(function(){
    $('.web > div').toggleClass("active");
    $('.web-extension').toggleClass("web-extension-active");
});

$(document).on('click', '#print', function(){
    $('.print-container').removeClass('hidden');
    $('.back-button').removeClass('hidden');
    $('.back-button').addClass('back-from-print');
    $('.print-container').addClass('show');
    $('#categories').addClass('hidden');
    $('.web-extension').addClass('hidden');
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});
$(document).on('click', '.print > h2', function(){
    $('.print-container').removeClass('hidden');
    $('.back-button').removeClass('hidden');
    $('.back-button').addClass('back-from-print');
    $('.print-container').addClass('show');
    $('#categories').addClass('hidden');
    $('.web-extension').addClass('hidden');
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});
$('.print > h2').hover(function(){
    $('.print > div').toggleClass("active");
});


$(document).on('click', '#process', function(){
    $('.process-container').removeClass('hidden');
    $('.process-container').addClass('show');
    $('#categories').addClass('hidden');
    $('.web-extension').addClass('hidden');
    $('body').css('overflowY','scroll');
    $('header').css('background-color','#D53531');
    $('body').css('background-color','#D53531');
    $("#viewport").addClass('hidden');
});
$(document).on('click', '.process > h2', function(){
    $('.process-container').removeClass('hidden');
    $('.process-container').addClass('show');
    $('#categories').addClass('hidden');
    $('.web-extension').addClass('hidden');
    $('body').css('overflowY','scroll');
    $('header').css('background-color','#D53531');
    $('body').css('background-color','#D53531');
    $("#viewport").addClass('hidden');
});
$('.process > h2').hover(function(){
    $('.process > div').toggleClass("active");
});

$(document).on('click', '.back-button', function(){
    $('.web-container').addClass('hidden');
    $('.back-button').addClass('hidden');
    $('.back-button').removeClass('back-from-web');
    $('.web-container').removeClass('show');
    $('#categories').removeClass('hidden');
    $('.web-extension').removeClass('hidden');
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
    $('.print-container').addClass('hidden');
    $('.back-button').removeClass('back-from-print');
    $('.print-container').removeClass('show');
});
            
$(window).load(function(){
jQuery(document).ready(function ($) {
 
    $('[data-popup-target]').click(function () {
        var activePopup = $(this).attr('data-popup-target');
        $(activePopup).addClass('show');
      $('.work-overlay').removeClass('hidden')
 
    });
 
    $('.close').click(function () {
        clearPopup();
 
    });
 
 
    function clearPopup() {
        $('.work-overlay').addClass('hidden').removeClass('show');
      $('.work-container div').removeClass('show')
        
    }
 
});
});
                 
        