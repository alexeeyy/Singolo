$( document ).ready(function () {

    $(".to-top").click(function ()
    {
        $("html, body").animate({ scrollTop: 0 }, 500, 'swing');
        return false;
    });

    $(window).scroll(function() {

        if ($(this).scrollTop()<1000)
        {
            $('.to-top').fadeOut();
        }
        else
        {
            $('.to-top').fadeIn();
        }
    });

    $('.slider').slick();

    $('.select2').select2();

});

