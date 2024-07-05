(function($) {

    "use strict";

    // Background Image
    $('[data-bg-img]').each(function() {
        $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });

    // Responsive Menu
    var $offcanvasNav = $("#offcanvasNav a");
    $offcanvasNav.on("click", function () {
        var link = $(this);
        var closestUl = link.closest("ul");
        var activeLinks = closestUl.find(".active");
        var closestLi = link.closest("li");
        var linkStatus = closestLi.hasClass("active");
        var count = 0;

        closestUl.find("ul").slideUp(function () {
            if (++count == closestUl.find("ul").length)
                activeLinks.removeClass("active");
        });

        if (!linkStatus) {
            closestLi.children("ul").slideDown();
            closestLi.addClass("active");
        }
    });

    // Vertical Menu Js
    const $btnMenu = $(".menu-btn");
    const $vmenuContent = $(".vmenu-content");
    $btnMenu.on("click", function (event) {
        $vmenuContent.slideToggle(500);
    });

    $vmenuContent.each(function () {
        var $ul = $(this),
            $lis = $ul.find(".menu-item:gt(08)"),
            isExpanded = $ul.hasClass("expanded");
        $lis[isExpanded ? "show" : "hide"]();

        if ($lis.length > 0) {
            $ul.append(
                $(
                    '<li class="expand">' +
                    (isExpanded
                        ? '<a class="minus" href="javascript:void(0);"><span><i class="fa-regular fa-circle-minus"></i>Close Categories</span></a>'
                        : '<a href="javascript:void(0);"><span><i class="fa-regular fa-circle-plus"></i>More Categories</span></a>') +
                    "</li>"
                ).on("click", function (event) {
                    var isExpanded = $ul.hasClass("expanded");
                    event.preventDefault();
                    $(this).html(
                        isExpanded
                            ? '<a href="javascript:void(0);"><span><i class="fa-regular fa-circle-plus">More Categories</span></a>'
                            : '<a class="minus" href="javascript:void(0);"><span><i class="fa-regular fa-circle-minus"></i>Close Categories</span></a>'
                    );
                    $ul.toggleClass("expanded");
                    $lis.toggle(300);
                })
            );
        }
    });

    // Swipper JS
    // Home Two Slider
    var swiper = new Swiper('.home-slider2-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider-container', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.product-slider-nav .swiper-button-next',
            prevEl: '.product-slider-nav .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 4
            },

            992:{
                slidesPerView : 4
            },

            768:{
                slidesPerView : 3
            },

            625:{
                slidesPerView : 2,
            },

            576:{
                slidesPerView : 2,
            },

            480:{
                slidesPerView : 2,
            },

            0:{
                slidesPerView : 1
            }
        },
        on: {
            beforeInit() {
                const slides = this.el.querySelectorAll('.swiper-slide');

                if (slides) {
                    this.params.loop = slides.length > 1;
                }
            },
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider3-container', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        observer: true,
        observeParents: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.product-slider3-nav .swiper-button-next',
            prevEl: '.product-slider3-nav .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 4
            },

            992:{
                slidesPerView : 4
            },

            768:{
                slidesPerView : 3
            },

            625:{
                slidesPerView : 2,
            },

            576:{
                slidesPerView : 2,
            },

            480:{
                slidesPerView : 2,
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider4-container', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        observer: true,
        observeParents: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.product-slider4-nav .swiper-button-next',
            prevEl: '.product-slider4-nav .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 4
            },

            992:{
                slidesPerView : 4
            },

            768:{
                slidesPerView : 4
            },

            625:{
                slidesPerView : 2,
            },

            480:{
                slidesPerView : 2,
            },

            0:{
                slidesPerView : 1
            }
        },
        on: {
            beforeInit() {
                const slides = this.el.querySelectorAll('.swiper-slide');

                if (slides) {
                    this.params.loop = slides.length > 1;
                }
            },
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider7-container', {
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween : 0,
        navigation: {
            nextEl: '.product-slider7-container .swiper-button-next',
            prevEl: '.product-slider7-container .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 5
            },

            992:{
                slidesPerView : 5
            },

            768:{
                slidesPerView : 4
            },

            625:{
                slidesPerView : 3,
            },

            480:{
                slidesPerView : 3,
            },

            380:{
                slidesPerView : 2,
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider9-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween : 0,
        navigation: {
            nextEl: '.product-slider9-nav .swiper-button-next',
            prevEl: '.product-slider9-nav .swiper-button-prev',
        },
        breakpoints: {
            1200:{
                slidesPerView : 1
            },

            992:{
                slidesPerView : 1
            },

            768:{
                slidesPerView : 1

            },

            576:{
                slidesPerView : 1
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider10-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween : 0,
        navigation: {
            nextEl: '.product-slider10-nav .swiper-button-next',
            prevEl: '.product-slider10-nav .swiper-button-prev',
        },
        breakpoints: {
            1200:{
                slidesPerView : 1
            },

            992:{
                slidesPerView : 1
            },

            768:{
                slidesPerView : 1

            },

            576:{
                slidesPerView : 1
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider11-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween : 0,
        navigation: {
            nextEl: '.product-slider11-nav .swiper-button-next',
            prevEl: '.product-slider11-nav .swiper-button-prev',
        },
        breakpoints: {
            1200:{
                slidesPerView : 1
            },

            992:{
                slidesPerView : 1
            },

            768:{
                slidesPerView : 1

            },

            576:{
                slidesPerView : 1
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider12-container', {
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween : 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.product-slider12-nav .swiper-button-next',
            prevEl: '.product-slider12-nav .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 5
            },

            992:{
                slidesPerView : 4
            },

            768:{
                slidesPerView : 3
            },

            625:{
                slidesPerView : 2,
            },

            576:{
                slidesPerView : 2
            },

            480:{
                slidesPerView : 2
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider13-container', {
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween : 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.product-slider13-nav .swiper-button-next',
            prevEl: '.product-slider13-nav .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 5
            },

            992:{
                slidesPerView : 4
            },

            768:{
                slidesPerView : 3
            },

            625:{
                slidesPerView : 2,
            },

            576:{
                slidesPerView : 2
            },

            480:{
                slidesPerView : 2
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider14-container', {
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween : 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.product-slider14-nav .swiper-button-next',
            prevEl: '.product-slider14-nav .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 5
            },

            992:{
                slidesPerView : 4
            },

            768:{
                slidesPerView : 3
            },

            625:{
                slidesPerView : 2,
            },

            576:{
                slidesPerView : 2
            },

            480:{
                slidesPerView : 2
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Slider
    var swiper = new Swiper('.product-slider15-container', {
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween : 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.product-slider15-nav .swiper-button-next',
            prevEl: '.product-slider15-nav .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 5
            },

            992:{
                slidesPerView : 4
            },

            768:{
                slidesPerView : 3
            },

            625:{
                slidesPerView : 2,
            },

            576:{
                slidesPerView : 2
            },

            480:{
                slidesPerView : 2
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Blog Slider
    var swiper = new Swiper('.blog-slider-container', {
        slidesPerView: 2,
        loop: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.blog-slider-nav .swiper-button-next',
            prevEl: '.blog-slider-nav .swiper-button-prev',
        },
        breakpoints: {
            1200:{
                slidesPerView : 2
            },

            992:{
                slidesPerView : 2
            },

            768:{
                slidesPerView : 2

            },

            576:{
                slidesPerView : 2
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // brand-logo Slider
    var swiper = new Swiper('.brand-logo-slider-container', {
        slidesPerView : 6,
        loop: true,
        speed: 1000,
        spaceBetween : 0,
        autoplay: false,
        navigation: {
            nextEl: '.brand-logo-slider-nav .swiper-button-next',
            prevEl: '.brand-logo-slider-nav .swiper-button-prev',
        },
        breakpoints: {
            1200:{
                slidesPerView : 6
            },

            992:{
                slidesPerView : 4,
                spaceBetween : 30
            },

            768:{
                slidesPerView : 3,
                spaceBetween : 30

            },

            576:{
                slidesPerView : 3,
                spaceBetween : 30
            },

            380:{
                slidesPerView : 3,
                spaceBetween : 30
            },

            0:{
                slidesPerView : 2,
                spaceBetween : 30
            }
        }
    });

    // Testimonial Slider
    var swiper = new Swiper('.testimonial-slider-container', {
        slidesPerView: 3,
        loop: true,
        spaceBetween : 30,
        breakpoints: {
            1200:{
                slidesPerView : 3
            },

            992:{
                slidesPerView : 2
            },

            768:{
                slidesPerView : 2

            },

            576:{
                slidesPerView : 1
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Team Slider
    var swiper = new Swiper('.team-slider-container', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.team-slider-nav .swiper-button-next',
            prevEl: '.team-slider-nav .swiper-button-prev',
        },
        breakpoints: {
            1500:{
                slidesPerView : 4
            },

            992:{
                slidesPerView : 4
            },

            768:{
                slidesPerView : 3
            },

            625:{
                slidesPerView : 2,
            },

            576:{
                slidesPerView : 2,
            },

            480:{
                slidesPerView : 2,
            },

            0:{
                slidesPerView : 1
            }
        }
    });

    // Product Single Slider
    var ProductNav = new Swiper('.single-product-nav-slider', {
        spaceBetween: 11,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        navigation: {
            nextEl: '.single-swiper-nav .swiper-button-next',
            prevEl: '.single-swiper-nav .swiper-button-prev',
        },
    });

    var ProductThumb = new Swiper('.single-product-thumb-slider', {
        freeMode: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: ProductNav
        }
    });

    // var ProductRelatedNav = new Swiper('.product-related-slider-container', {
    //     spaceBetween: 11,
    //     slidesPerView: 4,
    //     loop: true,
    //     freeMode: true,
    //     navigation: {
    //         nextEl: '.product-related-slider-nav .swiper-button-next',
    //         prevEl: '.product-related-slider-nav .swiper-button-prev',
    //     },
        // on: {
        //     beforeInit() {
        //         const slides = this.el.querySelectorAll('.swiper-slide');
        //
        //         if (slides) {
        //             this.params.loop = slides.length > 1;
        //         }
        //     },
        // }
    // });

    // Fancybox Js
    $('.lightbox-image').fancybox();

    // // Images Zoom
    // $('.zoom-hover').zoom();

    //Header My Acc btn
    $(".header-action-dropdown-toggle").on('click', function() {
        $(".info-dropdown-toggle").slideToggle("100");
    });
    $(".header-offcanvas-dropdown-toggle").on('click', function() {
        $(".info-dropdown-offcanvas-toggle").slideToggle("100");
    });

    //Shop review btn
    $(".review-write-btn").on('click', function() {
        $(".product-review-form").toggle('active');
    });

    // Product Qty
    var proQty = $(".pro-qty");
    proQty.append('<a href="#" class="inc qty-btn"><i class="ion-chevron-up"></i></a>');
    proQty.append('<a href="#" class= "dec qty-btn"><i class="ion-chevron-down"></i></a>');
    $('.qty-btn').on('click', function(e) {
        e.preventDefault();
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    // Search Box JS
    var searchwrapper = $(".search-box-wrapper");
    $(".btn-search-menu").on('click', function() {
        searchwrapper.addClass('show');
        $("#search-input").focus();
    });
    $(".search-close").on('click', function() {
        searchwrapper.removeClass('show');
    });

    // Checkout Toggle Active
    $('.checkout-coupon-active').on('click', function(e) {
        e.preventDefault();
        $('.checkout-coupon-content').slideToggle(1000);
    });

    var checked = $( '.sin-payment input:checked' )
    if(checked){
        $(checked).siblings( '.payment-box' ).slideDown(900);
    };
    $( '.sin-payment input' ).on('change', function() {
        $( '.payment-box' ).slideUp(900);
        $(this).siblings( '.payment-box' ).slideToggle(900);
    });

    // Scroll Top Hide Show
    var varWindow = $(window);
    varWindow.on('scroll', function(){
        if ($(this).scrollTop() > 250) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }

        // Sticky Header
        if($('.sticky-header').length){
            var windowpos = $(this).scrollTop();
            if (windowpos >= 213) {
                $('.sticky-header').addClass('sticky');
            } else {
                $('.sticky-header').removeClass('sticky');
            }
        }
    });

    // Ajax Contact Form JS
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function(e) {
        e.preventDefault();
        var formData = form.serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('alert alert-danger');
            $(formMessages).addClass('alert alert-success fade show');

            // Set the message text.
            formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
            formMessages.append(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('alert alert-success');
            $(formMessages).addClass('alert alert-danger fade show');

            // Set the message text.
            if (data.responseText === '') {
                formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
                formMessages.append(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occurred and your message could not be sent.');
            }
        });
    });

    //Scroll To Top
    $('.scroll-to-top').on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


})(window.jQuery);