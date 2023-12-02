const navWhenWindowOnScroll = () => {
    const mainBottomNav = $('.container .navbar').height();

    $(window).on('scroll', () => {
        const stop = Math.round($(window).scrollTop());

        if (stop > mainBottomNav) {
            $('.container').addClass('scroll');
        } else {
            $('.container').removeClass('scroll');
        }
    });
}
navWhenWindowOnScroll();