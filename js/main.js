function PageFunction(){
    var self = this;
    var ww = wh = 0;

    this.init = function(){
        self.jsMenu();

        if($(".wrap-js").length > 0){
            $(".wrap-js").mCustomScrollbar();
        }

        if($('.banner-main').length > 0){
            self.jsBanner();
        }

        if($('.box-highlights').length > 0){
            swiper = new Swiper('.box-highlights .swiper-container', {
                spaceBetween: 10,
                nextButton: '.box-highlights .swiper-button-next',
                prevButton: '.box-highlights .swiper-button-prev'
            });
        }

        $(document).on('click','#header .wrap-search',function(){
            var that = $(this);
            if(!that.hasClass('open')){
                that.addClass('open');
            }
            return false;
        });

        $(document).on('click','#header .wrap-search .fa-close',function(){
            $('#header .wrap-search').removeClass('open');
            return false;
        });

        $(document).on('click','.wrap-chat a',function(){
            var that = $(this);
            var next = that.next();
            if(next.is(":hidden")){
                next.fadeIn();
            }else{
                next.fadeOut();
            }
            return false;
        });

        if($('.wrap-partner').length > 0){
            swiper = new Swiper('.wrap-partner .swiper-container', {
                slidesPerView: "auto",
                spaceBetween: 30,
                nextButton: '.wrap-partner .swiper-button-next',
                prevButton: '.wrap-partner .swiper-button-prev'
            });
        }
    };

    this.jsBanner = function(){
        // var banner_main = new Swiper('.banner-main .swiper-container', {
        //     autoplay: 5000,
        //     disableOnInteraction: false,
        //     pagination: '.banner-main .swiper-pagination',
        //     paginationClickable: true
        // });
        //
        // $('.banner-main')
        //     .mouseover(function() {
        //         banner_main.stopAutoplay();
        //     })
        //     .mouseout(function() {
        //         banner_main.startAutoplay();
        //     });

        var time, imageSlider;

        var sliderOptions = {
            sliderId: "slider",
            startSlide: 0,
            effect: "15",
            effectRandom: false,
            pauseTime: 2600,
            transitionTime: 500,
            slices: 12,
            boxes: 8,
            hoverPause: false,
            autoAdvance: true,
            captionOpacity: 0.3,
            captionEffect: "fade",
            thumbnailsWrapperId: "thumbs",
            m: false,
            license: null
        };

        imageSlider = new mcImgSlider(sliderOptions);

        $(window).resize(function(){
            clearTimeout(time);
            time = setTimeout(function(){
                imageSlider.reload();
            }, 500)
        });


    }

    this.scrollPage = function(ele){
        $("html, body").stop().animate({ scrollTop: ele.offset().top }, "slow");
    };

    this.jsMenu = function(){
        var ele_hd_fix = $('.headerfix'),
            ele_nav = $('#nav-icon'),
            ele_menu_mb = $('.wrap-menu-mb'),
            ele_container_menu = $('.wrap-header-fix .container'),
            ele_container_menu_bg = $('.wrap-header-fix .container .bg');
        var count = $('#slider-log-top .swiper-slide').length;
        if(count > 1){
            var swiper = new Swiper('#slider-log-top', {
                slidesPerView: 5,
                autoplay: 5000,
                disableOnInteraction: false,
                nextButton: '.headebottom .wrap-slider .swiper-button-next',
                prevButton: '.headebottom .wrap-slider .swiper-button-prev',
                breakpoints: {
                    480: {
                        slidesPerView: 3
                    },
                    400: {
                        slidesPerView: 2
                    }
                }
            });

            $('#slider-log-top')
                .mouseover(function() {
                    swiper.stopAutoplay();
                })
                .mouseout(function() {
                    swiper.startAutoplay();
                });
        }

        $(document).on('click','#nav-icon', function(){
            if(!ele_nav.hasClass('open')){
                ele_nav.addClass('open');
                ele_menu_mb.addClass('open');
            }else{
                ele_nav.removeClass('open');
                ele_menu_mb.removeClass('open');
            }
            return false;
        });

        $(document).on("click",".wrap-menu-mb .menu li a", function(){
            var that = $(this);
            var next = that.next('.sub');
            if(next.length > 0){
                if(!next.is(":visible")){
                    next.slideDown();
                }else{
                    next.slideUp();
                }
                return false
            }
        });


        bg_menu();
        fixMenu();
        $(window).scroll(function(){
            fixMenu();
        });

        $(window).resize(function(){
            fixMenu();
            bg_menu();
        });


        function bg_menu(){
            ww = $(window).width();
            var w_container = ele_container_menu.outerWidth();
            var w_ele = ww - w_container;
            ele_container_menu_bg.width(w_ele/2 + 15);
        }

        function fixMenu(){
            var scroll = $(window).scrollTop();
            ww = $(window).width();
            var headerHeight = $('#header').height();

            if(scroll > headerHeight - 40){
                ele_hd_fix.addClass('fix');
            }else{
                ele_hd_fix.removeClass('fix');
            }
        }
    };

    this.homePage = function(){
        var disabledDays = ["2018-4-10","2018-4-11","2018-4-12","2018-4-13"];
        var date = new Date();
        var ele_datepiker = $('#datepicker-box');
        ele_datepiker.datepicker({
            dateFormat: 'yy-mm-dd',
            beforeShowDay: function(date) {
                var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
                for (i = 0; i < disabledDays.length; i++) {
                    if($.inArray(y + '-' + (m+1) + '-' + d,disabledDays) != -1) {
                        //return [false];
                        return [true, 'ui-state-active', ''];
                    }
                }
                return [true];

            }
        });
    }

    this.pageAbout = function(){
        var count = $('.wrapStatistical .swiper-slide').length;
        if(count > 1){
            var swiper = new Swiper('.wrapStatistical .swiper-container', {
                spaceBetween: 30,
                slidesPerView: 4,
                autoplay: 5000,
                disableOnInteraction: false,
                nextButton: '.wrapStatistical .swiper-button-next',
                prevButton: '.wrapStatistical .swiper-button-prev',
                breakpoints: {
                    768: {
                        slidesPerView: 3
                    },
                    640: {
                        slidesPerView: 2
                    },
                    480: {
                        slidesPerView: 1
                    }
                }
            });

            $('.wrapStatistical .swiper-container')
                .mouseover(function() {
                    swiper.stopAutoplay();
                })
                .mouseout(function() {
                    swiper.startAutoplay();
                });
        }
    }

    this.pageContact = function(){
        $(document).on('click','.page-contact .tab a',function(){
            var that = $(this);
            var index = $('.page-contact .tab a').index(that);
            if(!that.hasClass('active')){
                $('.page-contact .tab a').removeClass('active');
                that.addClass('active');
                $('.page-contact .ctt > div').hide();
                $('.page-contact .ctt > div').eq(index).show();
            }
            return false;
        });
    }

    this.slip_link = function(){
        var link_page = window.location.href;
        var link_root = link_page.split("#")[0];
        var link_id = link_page.split("#")[1];
        return link_id;
    }

    this.pageGallery = function(){

        $('.full-link').click(function() {
            var id = $(this).data('target');
            var link = $(this).data('link');
            var html = $(id).html();
            $('#modal-detail').html(html);
            $('#modal-detail').modal('show');
            window.location = link;
            return false;
        });

        $(window).load(function(){
            $('.grid-isotope').isotope({
                itemSelector: '.grid-item'
            });
        });

        var swiper = "", swiper_text = "";

        $('#modal-detail').on('shown.bs.modal', function (e) {
            swiper = new Swiper('#modal-detail .img .swiper-container', {
                slidesPerView: 1,
                nextButton: '#modal-detail .img .swiper-button-next',
                prevButton: '#modal-detail .img .swiper-button-prev',
                onTransitionEnd: function(){
                    var index = swiper.activeIndex;
                    goto(index)
                }
            });

            swiper_text = new Swiper('#modal-detail .text .swiper-container', {
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 30,
                nextButton: '#modal-detail .text .swiper-button-next',
                prevButton: '#modal-detail .text .swiper-button-prev',
                breakpoints: {
                    768: {
                        spaceBetween: 10
                    }
                }
            });
        });

        $('#modal-detail').on('hidden.bs.modal', function (e) {
            var scr = $(window).scrollTop();
            window.location.href = '#';
            $(window).scrollTop(scr);
            $('#modal-detail').html('');
            if(swiper != ""){
                swiper.destroy(true, true);
                swiper_text.destroy(true, true);
                swiper = "";
                swiper_text = "";
            }
        });

        var link = self.slip_link();
        if(link != ""){
            $('.full-link[data-link="#'+link+'"]').trigger('click');
        }

        $(document).on('click','#modal-detail .text a',function(){
            var that = $(this);
            var index = $('#modal-detail .text a').index(that);
            if(!that.hasClass('active')){
                goto(index);
            }
        });

        function goto(index){
            $('#modal-detail .text a').removeClass('active');
            $('#modal-detail .text a').eq(index).addClass('active');
            swiper.slideTo(index, 500, true);
            var html = $('#modal-detail .img .swiper-slide-active img').attr('data-desc');
            $('#modal-detail .text .top').html(html);
        }
    }

    this.pageVideo = function(){

        $('.full-link').click(function() {
            var id = $(this).data('target');
            var link = $(this).data('link');
            var html = $(id).html();
            $('#modal-detail').html(html);
            $('#modal-detail').modal('show');
            window.location = link;
            return false;
        });

        $(window).load(function(){
            $('.grid-isotope').isotope({
                itemSelector: '.grid-item'
            });
        });

        var swiper = "", swiper_text = "";

        $('#modal-detail').on('shown.bs.modal', function (e) {
            swiper_text = new Swiper('#modal-detail .text .swiper-container', {
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 30,
                nextButton: '#modal-detail .text .swiper-button-next',
                prevButton: '#modal-detail .text .swiper-button-prev',
                breakpoints: {
                    768: {
                        spaceBetween: 10
                    }
                }
            });

            $('#modal-detail .text a').eq(0).trigger('click');
        });

        $('#modal-detail').on('hidden.bs.modal', function (e) {
            var scr = $(window).scrollTop();
            window.location.href = '#';
            $(window).scrollTop(scr);
            $('#modal-detail').html('');
            if(swiper != ""){
                swiper_text.destroy(true, true);
                swiper = "";
                swiper_text = "";
            }
        });

        $(document).on('click','#modal-detail .text a',function(){
            var that = $(this);
            var id = that.attr('data-id');
            if(!that.hasClass('active')){
                var html = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                $('#modal-detail .img iframe').remove();
                $('#modal-detail .img').append(html);
                $('#modal-detail .text a').removeClass('active');
                that.addClass('active');
            }
        });

        var link = self.slip_link();
        if(link != ""){
            $('.full-link[data-link="#'+link+'"]').trigger('click');
        }
    }

    this.pageAchievement = function(){
        var swiper, swiper_1, swiper_2;

        swiper = new Swiper('.wrap-time .swiper-container', {
            slidesPerView: 9,
            centeredSlides: true,
            nextButton: '.wrap-time .swiper-button-next',
            prevButton: '.wrap-time .swiper-button-prev',
            breakpoints: {
                990: {
                    slidesPerView: 5,
                },
                640: {
                    slidesPerView: 3,
                }
            }
        });

        swiper_1 = new Swiper('.wrap-img .swiper-container', {
            slidesPerView: 3,
            centeredSlides: true,
            nextButton: '.wrap-img .swiper-button-next',
            prevButton: '.wrap-img .swiper-button-prev'
        });

        swiper_2 = new Swiper('.wrap-content .swiper-container', {
            slidesPerView: 1,
            simulateTouch: false
        });

        $(document).on('click','.wrap-time a',function(){
            var that = $(this);
            var index = $('.wrap-time a').index(that);
            if(!that.hasClass('active')){
                $('.wrap-time a').removeClass('active');
                that.addClass('active');
                swiper.slideTo(index, 1000, true);
            }
            return false;
        });

        $(document).on('click','.wrap-img a',function(){
            var that = $(this);
            var index = $('.wrap-img a').index(that);
            if(!that.hasClass('active')){
                $('.wrap-img a').removeClass('active');
                that.addClass('active');
                swiper_1.slideTo(index, 1000, true);
                swiper_2.slideTo(index, 1000, true);
            }
            return false;
        });
    }
}

var PageFunction = new PageFunction();

$(document).ready(function(){
    PageFunction.init();
});




