$('.owl-index').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.owl-testimonials').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.owl-buy-phone').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<i class='icon-left-small'></i>", "<i class='icon-right-small'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
});
$('.owl-buy-2').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<i class='icon-left-small'></i>", "<i class='icon-right-small'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('.owl-now-sw').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
            dots: false,
            nav: true
        },
        600: {
            items: 2
        },
        768: {
            nav: false,
            dots: true
        },
        991: {
            items: 4
        }
    }
});
$('.about-test-owl').owlCarousel({
    center: true,
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});
$('.owl-buy-phone-2').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<i class='icon-left-small'></i>", "<i class='icon-right-small'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});
$('.owl-blog-slider-1').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<i class='icon-left-small'></i>", "<i class='icon-right-small'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.owl-slider-1').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 20,
    navText: ["<i class='icon-left-small'></i>", "<i class='icon-right-small'></i>"],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});
$('.owl-slider-2').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 20,
    navText: ["<i class='icon-left-small'></i>", "<i class='icon-right-small'></i>"],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$(document).ready(function () {
    new WOW().init();
    
    $("body").removeClass("overf-none")
    $(".preloader").remove()

    $(".header-search").click(function (e) {
        $(".search-box").toggleClass("active")
        $(".header-search .icon-search").toggleClass("icon-cancel")
        $(".menu").toggleClass("d-none")
    });
    $(".mobile-menu-icon").click(function (e) {
        $(".mobile").toggleClass("active")
        $(".blue").toggleClass("active")
        $("body").toggleClass("overf-none")
        $(".exit").toggleClass("active")
    });
    $('.mb-box').on('click', function () {
        $('.mb-box').removeClass('open')
        $('.main-menu#m-1').removeClass('active')
        $(this).addClass('open');
        $(this).closest(".m-inclusive").find("#m-1:first").addClass("active");
    });
    $('.mb-box-2').on('click', function () {
        $('.mb-box-2').removeClass('open')
        $(this).addClass('open');
        $('.main-menu#m-2').removeClass('active')
        $(this).closest(".m-inclusive").find("#m-2").toggleClass("active");
        $('.mb-box-3').removeClass('open')
        $('.menu-3.m-inclusive .main-menu').removeClass('active')
    })
    $('.mb-box-3').on('click', function () {
        $(this).toggleClass('open');
        $(this).closest(".m-inclusive").find("#m-3").toggleClass("active");
    })
    $('.blue').on('click', function () {
        $(this).removeClass('active');
        $(".mobile").removeClass("active")
        $(".exit").removeClass("active")
        $("body").removeClass("overf-none")
    });
    $('.exit').on('click', function () {
        $(".mobile").removeClass("active")
        $(".blue").removeClass("active")
        $(".exit").removeClass("active")
        $("body").removeClass("overf-none")
    });
    $('.search-close').on('click', function () {
        $(".mobile").removeClass("active")
        $(".blue").removeClass("active")
        $(".exit").removeClass("active")
        $('#full-search').val("");
    });
    $('.mobile-header-search').on('click', function () {
        $(".mobile-search-black").addClass("active")
        $(".mobile-search-content").addClass("active")
        $("body").addClass("overf-none");
        $('#full-search').val("");
    });
    $('.mobile-search-black').on('click', function () {
        $(".mobile-search-black").removeClass("active")
        $(".mobile-search-content").removeClass("active")
        $("body").removeClass("overf-none")
    });
    $('.search-close').on('click', function () {
        $(".mobile-search-black").removeClass("active")
        $(".mobile-search-content").removeClass("active")
        $("body").removeClass("overf-none")
    });

    var a = 0;
    if (window.location.href == "http://harun.vdestek.com/netfx/single-service-1.php") {
        var observer = new IntersectionObserver(function (entries) {
            if (a == 0) {
                if (entries[0]['isIntersecting'] === true) {
                    if (entries[0]['intersectionRatio'] > 0.5) {
                        $('.sayac').addClass('count');
                        $('.schema-box .circle').addClass('animation-circle');
                        $('.count').each(function () {
                            $(this).prop('Counter', 0).animate({
                                Counter: $(this).data('count')
                            }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        });
                    }
                }
                a++;
            }
        }, {
            threshold: [0, 0.5, 1]
        });
        observer.observe(document.querySelector("#schema"));
    }

    url = window.location.href
    if (url == "http://harun.vdestek.com/netfx/index-2.php") {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 400) {
                $('.fixed-num').addClass('active');
            } else {
                $('.fixed-num').removeClass('active');
            }
        });
    }
    if (url == "http://harun.vdestek.com/netfx/index-2.php" || url == "http://harun.vdestek.com/netfx/index-3.php" || url == "http://harun.vdestek.com/netfx/error.php") {
        $('footer').addClass('footer-space');
    }
    if (url == "http://harun.vdestek.com/netfx/index-4.php") {
        $('header').addClass('header-4');
        $('footer').addClass('footer-space');
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            $(".mobile-search-black").removeClass("active")
            $(".mobile-search-content").removeClass("active")
            $("body").removeClass("overf-none")
            $(".mobile").removeClass("active")
            $(".blue").removeClass("active")
            $(".exit").removeClass("active")
            $('#full-search').val("");
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    
    var scrollbtn = $('.scroll-top');
    scrollbtn.on('click', function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

$('#register_trg').click(function() {
    $("#loginmodal").modal("hide");
});

$('#login_trg').click(function() {
    $("#registermodal").modal("hide");
});