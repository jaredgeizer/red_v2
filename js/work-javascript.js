$(document).ready(function () {
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});

$(window).resize(function () {
    window.scroll($("#viewport").offset().left, $("#viewport").offset().top);
});








$(document).on('click', '.process', function () {
    $('.process-container').removeClass('hidden');
    $('.process-container').addClass('show');
    $('main').addClass('hidden');
    $('body').css('overflowY', 'scroll');
    $('header').css('background-color', '#D53531');
    $('body').css('background-color', '#D53531');
    $("#viewport").addClass('hidden');
});
$(document).on('click', '.process > h2', function () {
    $('.process-container').removeClass('hidden');
    $('.process-container').addClass('show');
    $('main').addClass('hidden');
    $('body').css('overflowY', 'scroll');
    $('header').css('background-color', '#D53531');
    $('body').css('background-color', '#D53531');
    $("#viewport").addClass('hidden');
});
$('.process > h2').hover(function () {
    $('.process > div').toggleClass("active");
});

            
$(window).load(function () {
    $(document).ready(function ($) {
 
    $('[data-popup-target]').click(function () {
        var activePopup = $(this).attr('data-popup-target');
        $(activePopup).addClass('show-flex');
        $('.work-overlay').removeClass('hidden');
        var contentHeight = $(activePopup).height();
        $('.close').css('height', contentHeight + 200);
        $('.hexagon').addClass('hidden');
        $('header').addClass('hidden');
        $('.bottom-fog').addClass('hidden');
        $('.process').addClass('hidden');
    });
    
    
 
    $('.close').click(function () {
        clearPopup();
        $('.hexagon').removeClass('hidden');
        $('header').removeClass('hidden');
        $('.bottom-fog').removeClass('hidden');
        $('.process').removeClass('hidden');
    });
 
 
    function clearPopup() {
        $('.work-overlay').addClass('hidden').removeClass('show');
      $('.work-container div').removeClass('show-flex');
        
    }
 
});
});
                        