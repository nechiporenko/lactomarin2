// Application Scripts:

// Модальное окно
// Десктоп меню (выпадайки)
// Мобильное меню
// Кнопка скролла страницы
// Маска для телефонного номера
// Автовыравнивание блоков по высоте
// Лайтбокс
// Аудиоплеер
// Слайдер видео-ревью
// Слайдер сертификатов
// Слайдер отзывов (видео+текст, аудио+текст)
// Счетчики
// Если браузер не знает о svg-картинках
// Если браузер не знает о плейсхолдерах в формах


//функции добавления/удаления класса для SVG
jQuery.fn.svgAddClass = function (classTitle) {
    return this.each(function () {
        var oldClass = jQuery(this).attr("class");
        oldClass = oldClass ? oldClass : '';
        jQuery(this).attr("class", (oldClass + " " + classTitle).trim());
    });
}
jQuery.fn.svgRemoveClass = function (classTitle) {
    return this.each(function () {
        var oldClass = jQuery(this).attr("class");
        var startpos = oldClass.indexOf(classTitle);
        var endpos = startpos + classTitle.length;
        var newClass = oldClass.substring(0, startpos).trim() + " " + oldClass.substring(endpos).trim();
        if (!newClass.trim())
            jQuery(this).removeAttr("class");
        else
            jQuery(this).attr("class", newClass.trim());
    });
}

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html=$('html'),
        $body = $('body');

    $body.append('<div id="overlay" class="overlay"></div>');//оверлей
    var $overlay = $('#overlay');

    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $modal,
        $close;

        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть

        $close.on('click', function (e) {
            e.preventDefault();
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $window.bind('resize.modal', method.center);
            $modal.show();
            $overlay.show();
            $overlay.bind('click', method.close);
        };

        // закрываем
        method.close = function () {
            $modal.find('iframe').attr('src', '');//если в модальном окне было видео - убъем
            $modal.hide();
            $overlay.unbind('click', method.close).hide();
            $window.unbind('resize.modal');
        };

        return method;
    }());

    // клик по кнопке с атрибутом data-modal - открываем модальное окно
    $('[data-modal]').on('click', function (e) {//передаем айди модального окна
        e.preventDefault();
        var link = $(this).data('modal');
        if (link) { showModal.open(link); }
    });

    //
    // Десктоп меню (выпадайки)
    //---------------------------------------------------------------------------------------
    var desktopMenu = (function () {
        var $menu = $('.js-menu');
        $menu.find('li').has('ul').addClass('has-menu');
        $menu.children('li').on({
            mouseenter: function () {
                $(this).find('ul:first').stop(true, true).fadeIn('fast');
                $(this).find('a:first').addClass('hover');
            },
            mouseleave: function () {
                $(this).find('ul').stop(true, true).hide();
                $(this).find('a:first').removeClass('hover');
            }
        })
    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    var mobileMenu = (function () {
        var $menu = $('.js-mnav'),
            $toggle_btn = $('.js-mnav-toggle'),
            $menu_btn = $menu.find('li').has('ul').addClass('has-menu').children('a'),
            $submenu = $menu.find('.has-menu').children('ul'),
            method = {};


        $('.header__inner').on('click', '.js-mnav-toggle', function () {
            if ($(this).hasClass('active')) {
                method.close();
            } else {
                method.show();
            }
        });

        $menu.on('click', '.m-menu__label', function () {
            method.close();
        });

        $menu.on('click', '.has-menu > a', function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                method.closeSubMenu();
            } else {
                method.closeSubMenu();
                method.showSubMenu($(this));
            }
        });

        method.show = function () {
            $html.css('overflow', 'hidden');
            $overlay.addClass('mobile').show().bind('click', method.close);
            $toggle_btn.addClass('active');
            $menu.addClass('active');
        }

        method.close = function () {
            $overlay.removeClass('mobile').hide().unbind('click', method.close);
            method.closeSubMenu();
            $toggle_btn.removeClass('active');
            $menu.removeClass('active');
            $html.css('overflow', 'auto');
        }

        method.showSubMenu = function (el) {
            method.closeSubMenu();
            el.addClass('active').parent('li').children('ul').slideDown();
        }

        method.closeSubMenu = function () {
            $submenu.slideUp();
            $menu_btn.removeClass('active');
        }
        return method;
    })();


    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    var initPageScroller = (function () {
        var $scroller = $('<div class="scroll-up-btn"><i class="icon-up-open-big"></i></div>');
        $body.append($scroller);
        $window.on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $scroller.show();
            } else {
                $scroller.hide();
            }
        });
        $scroller.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }());

    //
    // Маска для телефонного номера
    //---------------------------------------------------------------------------------------
    $('.js-phone-input').mask('+7 (999) 999 - 99 - 99');

    //
    // Автовыравнивание блоков по высоте
    //---------------------------------------------------------------------------------------
    $('.js-match-height').matchHeight();

    //
    // Лайтбокс
    //---------------------------------------------------------------------------------------
    $('.js-popup').lightbox({
        blur: false
    });

    //
    // Аудиоплеер
    //---------------------------------------------------------------------------------------------------------------
    $('audio').audioPlayer();

    //
    // Слайдер видео-ревью
    //---------------------------------------------------------------------------------------
    function initReviewSlider() {
        var $slider = $('.js-review-slider'),
            $item = $slider.children('li'),
            isDesktop = false, //флаг доп.проверки
            winW = verge.viewportW(); //точная ширина окна браузера

        getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
            var setting,
                settings1 = {
                    maxSlides: 1,
                    slideWidth: 280,
                    slideMargin: 0,
                },
                settings2 = {
                    maxSlides: 1,
                    slideWidth: 440,
                    slideMargin: 0,
                },
                settings3 = {
                    maxSlides: 3,
                    slideWidth: 312,
                    slideMargin: 2,
                    onSliderLoad: function (currentIndex) {
                        $item.eq(currentIndex + 1).addClass('active');
                    },
                    onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                        $item.removeClass('active').eq(newIndex + 1).addClass('active');
                    }
                },
                common = {
                    auto: false,
                    pager: false,
                    infiniteLoop: false,
                    hideControlOnEnd: true,
                    minSlides: 1,
                    moveSlides: 1,
                };

            if (winW < 480) {
                isDesktop = false;
                setting = $.extend(settings1, common);
            }
            if (winW >= 480 && winW < 1024) {
                isDesktop = false;
                setting = $.extend(settings2, common);
            }
            if (winW >= 1024) {
                isDesktop = true;
                setting = $.extend(settings3, common);
            }
            return setting;
        }

        $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

        $window.on('resize', function () {
            setTimeout(recalcSliderSettings, 500);
        });

        function recalcSliderSettings() {
            winW = verge.viewportW();
            if (winW >= 1024 && isDesktop) {//изменили размер окна, но остались на десктопе
                return false;
            } else {
                $item.removeClass('active'); //перешли с большого экрана на мелкий
            }
            $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: checkStartSlide() }));
        }

        function checkStartSlide() {//если перешли на десктоп - нельзя чтобы текущим стал последний слайд
            var total = $slider.getSlideCount(),
                current = $slider.getCurrentSlide();
            if ((total - current) < 3) {
                current = total - 3;
            }
            return current;
        }

        $slider.on('click', '.js-video', function (e) {//по клику откроем видео в модальном окне
            e.preventDefault();
            var link = $(this).attr('href'),
                id = getYoutubeID(link);

            if (id) {
                $('#video').find('iframe').attr('src', 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0;autoplay=1');
                showModal.open('#video');
            }
        });

        function getYoutubeID(url) {//парсим youtube-ссылку, возвращаем id видео
            var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp),
                urllink;
            if (match && match[1].length == 11) {
                urllink = match[1];
            } else {
                urllink = false;
            }
            return urllink;
        }
    }
    if ($('.js-review-slider').length) { initReviewSlider(); }


    //
    // Слайдер сертификатов
    //---------------------------------------------------------------------------------------
    function initSertSlider() {
        var $slider = $('.js-sert-slider'),
            winW = verge.viewportW(); //точная ширина окна браузера

        $slider.children('li').find('a').lightbox({blur:false});

        getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
            var setting,
                settings1 = {
                    maxSlides: 1,
                    moveSlides: 1,
                },
                settings2 = {
                    maxSlides: 2,
                    moveSlides: 2,
                },
                settings3 = {
                    maxSlides: 3,
                    moveSlides: 3,
                },
                settings4 = {
                    maxSlides: 4,
                    moveSlides: 4,
                },
                common = {
                    auto: true,
                    pause: 7000,
                    autoHover:true,
                    pager: false,
                    minSlides: 1,
                    slideWidth: 205,
                    slideMargin: 40,
                };

            if (winW < 480) {
                setting = $.extend(settings1, common);
            }
            if (winW >= 480 && winW < 768) {
                setting = $.extend(settings2, common);
            }
            if (winW >= 768 && winW < 1024) {
                setting = $.extend(settings3, common);
            }
            if (winW >= 1024) {
                setting = $.extend(settings4, common);
            }
            return setting;
        }

        $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

        $window.on('resize', function () {
            setTimeout(recalcSliderSettings, 500);
        });

        function recalcSliderSettings() {
            winW = verge.viewportW();
            
            $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }

    }
    if ($('.js-sert-slider').length) { initSertSlider() }

    //
    // Слайдер отзывов (видео+текст, аудио+текст)
    //---------------------------------------------------------------------------------------
    function initVideoSlider() {
        var $slider = $('.js-slider-video');
        $slider.bxSlider({
            auto: false
        });
    }
    if ($('.js-slider-video').length) { initVideoSlider() }

    function initAudioSlider() {
        var $slider = $('.js-slider-audio');
        $slider.bxSlider({
            auto: false
        });
    }
    if ($('.js-slider-audio').length) { initAudioSlider() }

    //
    // Счетчики
    //---------------------------------------------------------------------------------------
    function initCounters() {
        var $counter = $('.js-counter');
        $counter.each(function () {
            var $el = $(this);
            if (verge.inViewport($el)) {//если оказались видимы при загрузке страницы - запускаем
                startCounter($el);
            } else {
                checkPosition($el);
            }
        });

        function checkPosition(el) {
            $window.bind('scroll', scrollToCounter);

            function scrollToCounter() {
                var flag = verge.inViewport(el, -50);
                if (flag) {
                    $window.unbind('scroll', scrollToCounter);//прибили отслеживание для этого счетчика
                    startCounter(el); //запустили
                }
            }
        }

        function startCounter(el) {
            el.each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    }
    if ($('.js-counter').length) { initCounters() }

    //
    // SVG-карта
    //---------------------------------------------------------------------------------------
    $window.load(function () {
        var svgobject = document.getElementById('imap');
        if ('contentDocument' in svgobject) {
            var svgdom = svgobject.contentDocument; // Получаем доступ к SVG DOM
        }
        $('#imap').css('visibility', 'visible'); //покажем после загрузки
        var svgMap = {
            areaLink: {
                'KZ-AKM': 'country/kz-akm.html',
                'KZ-AKT': 'country/kz-akt.html',
                'KZ-ALM': 'country/kz-alm.html',
                'KZ-ATY': 'country/kz-aty.html',
                'KZ-KAR': 'country/kz-kar.html',
                'KZ-KUS': 'country/kz-kus.html',
                'KZ-KZY': 'country/kz-kzy.html',
                'KZ-MAN': 'country/kz-man.html',
                'KZ-PAV': 'country/kz-pav.html',
                'KZ-SEV': 'country/kz-sev.html',
                'KZ-VOS': 'country/kz-vos.html',
                'KZ-YUZ': 'country/kz-yuz.html',
                'KZ-ZAP': 'country/kz-zap.html',
                'KZ-ZHA': 'country/kz-zha.html'
            },
            getAreaLink: function (id) {
                return this.areaLink[id];
            },
            hoverToArea: function () {
                $(svgdom.getElementsByClassName('area')).hover(function () {
                    var id = $(this).attr('id'),
                        link = svgMap.getAreaLink(id);
                    if (link !== '') {
                        $(this).svgAddClass('hover');
                    }
                },
                function () {
                    $(this).svgRemoveClass('hover');
                });
            },
            clickToArea: function () {
                $(svgdom.getElementsByClassName('area')).on('click', function () {
                    var id = $(this).attr('id'),
                        link = svgMap.getAreaLink(id),
                        $target = $('#mapArea').find('.i-map__content');
                    if (link !== '') {
                        $target.html();
                        $target.load(link + '#content', function () { showModal.open('#mapArea'); });
                    }
                });
            },
            sendRequest: function () {//закроем текущее модальное окно и откроем новое с формой отправки запроса
                $('#mapArea').on('click', 'button', function () {
                    showModal.close('#mapArea');
                    showModal.open('#getClientNumber');
                });
            }
        }

        if (Modernizr.svg) {
            svgMap.hoverToArea();
            svgMap.clickToArea();
            svgMap.sendRequest();
        }

    });

    //
    // Если браузер не знает о svg-картинках
    //---------------------------------------------------------------------------------------
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    //
    // Если браузер не знает о плейсхолдерах в формах
    //---------------------------------------------------------------------------------------
    if (!("placeholder" in document.createElement("input"))) {
        $("input[placeholder], textarea[placeholder]").each(function () {
            var val = $(this).attr("placeholder");
            if (this.value == "") {
                this.value = val;
            }
            $(this).focus(function () {
                if (this.value == val) {
                    this.value = "";
                }
            }).blur(function () {
                if ($.trim(this.value) == "") {
                    this.value = val;
                }
            })
        });

        $('form').submit(function () {
            $(this).find("input[placeholder], textarea[placeholder]").each(function () {
                if (this.value == $(this).attr("placeholder")) {
                    this.value = "";
                }
            });
        });
    }


    //
    // Костыли для ie8
    //---------------------------------------------------------------------------------------
    if ($html.hasClass('lt-ie9')) {
        $('.b-features__item:nth-child(4n)').css('margin-right', 0);
        $('.b-features__item:nth-child(4n+1)').css('clear', 'left');
        $('.b-steps__item:nth-child(4n)').css('margin-right', 0);
        $('.b-sert__item:nth-child(4n)').css('margin-right', 0);
    }
   

    
});
