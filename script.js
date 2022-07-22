$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 100) {
            $('.navbar').addClass("sticky");
            $('.title-green').addClass("white");
            $('.menu-btn').addClass('menu-btn-white')
        } else {
            $('.navbar').removeClass("sticky");
            $('.title-green').removeClass("white");
            $('.menu-btn').removeClass('menu-btn-white')
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Penetration Tester", "Bug Bounty Hunter"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "CyberSecurity Enthusiast", "Penetration Tester", "Bug Bounty Hunter"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

