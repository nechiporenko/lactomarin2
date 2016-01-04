// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 * bxSlider v4.2.4
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function(a){var b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};a.fn.bxSlider=function(c){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).bxSlider(c)}),this;var d={},e=this,f=a(window).width(),g=a(window).height();if(!a(e).data("bxSlider")){var h=function(){a(e).data("bxSlider")||(d.settings=a.extend({},b,c),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=e.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=d.settings.minSlides>1||d.settings.maxSlides>1?!0:!1,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"===d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!==d.settings.mode&&function(){for(var a=document.createElement("div"),b=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],c=0;c<b.length;c++)if(void 0!==a.style[b[c]])return d.cssPrefix=b[c].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"===d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),e.data("origStyle",e.attr("style")),e.children(d.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),i())},i=function(){var b=d.children.eq(d.settings.startSlide);e.wrap('<div class="'+d.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),d.viewport=e.parent(),d.settings.ariaLive&&!d.settings.ticker&&d.viewport.attr("aria-live","polite"),d.loader=a('<div class="bx-loading" />'),d.viewport.prepend(d.loader),e.css({width:"horizontal"===d.settings.mode?1e3*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?e.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:m()}),d.settings.pager||d.settings.controls||d.viewport.parent().css({margin:"0 auto 0px"}),d.children.css({"float":"horizontal"===d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",n()),"horizontal"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginRight",d.settings.slideMargin),"vertical"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginBottom",d.settings.slideMargin),"fade"===d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=a('<div class="bx-controls" />'),d.settings.captions&&x(),d.active.last=d.settings.startSlide===p()-1,d.settings.video&&e.fitVids(),("all"===d.settings.preloadImages||d.settings.ticker)&&(b=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.controls&&v(),d.settings.auto&&d.settings.autoControls&&w(),d.settings.pager&&u(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),j(b,k)},j=function(b,c){var d=b.find('img:not([src=""]), iframe').length,e=0;return 0===d?void c():void b.find('img:not([src=""]), iframe').each(function(){a(this).one("load error",function(){++e===d&&c()}).each(function(){this.complete&&a(this).load()})})},k=function(){if(d.settings.infiniteLoop&&"fade"!==d.settings.mode&&!d.settings.ticker){var b="vertical"===d.settings.mode?d.settings.minSlides:d.settings.maxSlides,c=d.children.slice(0,b).clone(!0).addClass("bx-clone"),f=d.children.slice(-b).clone(!0).addClass("bx-clone");d.settings.ariaHidden&&(c.attr("aria-hidden",!0),f.attr("aria-hidden",!0)),e.append(c).prepend(f)}d.loader.remove(),r(),"vertical"===d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(l()),e.redrawSlider(),d.settings.onSliderLoad.call(e,d.active.index),d.initialized=!0,d.settings.responsive&&a(window).bind("resize",R),d.settings.auto&&d.settings.autoStart&&(p()>1||d.settings.autoSlideForOnePage)&&H(),d.settings.ticker&&I(),d.settings.pager&&D(d.settings.startSlide),d.settings.controls&&G(),d.settings.touchEnabled&&!d.settings.ticker&&M(),d.settings.keyboardEnabled&&!d.settings.ticker&&a(document).keydown(L)},l=function(){var b=e.outerHeight(),c=null,f=a();if("vertical"===d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){c=1===d.settings.moveSlides?d.active.index:d.active.index*q(),f=d.children.eq(c);for(var g=1;g<=d.settings.maxSlides-1;g++)f=c+g>=d.children.length?f.add(d.children.eq(c+g-d.children.length)):f.add(d.children.eq(c+g))}else f=d.children.eq(d.active.index);else f=d.children;return"vertical"===d.settings.mode?(f.each(function(c){b+=a(this).outerHeight()}),d.settings.slideMargin>0&&(b+=d.settings.slideMargin*(d.settings.minSlides-1))):b=Math.max.apply(Math,f.map(function(){return a(this).outerHeight(!1)}).get()),"border-box"===d.viewport.css("box-sizing")?b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))+parseFloat(d.viewport.css("border-top-width"))+parseFloat(d.viewport.css("border-bottom-width")):"padding-box"===d.viewport.css("box-sizing")&&(b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))),b},m=function(){var a="100%";return d.settings.slideWidth>0&&(a="horizontal"===d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),a},n=function(){var a=d.settings.slideWidth,b=d.viewport.width();if(0===d.settings.slideWidth||d.settings.slideWidth>b&&!d.carousel||"vertical"===d.settings.mode)a=b;else if(d.settings.maxSlides>1&&"horizontal"===d.settings.mode){if(b>d.maxThreshold)return a;b<d.minThreshold?a=(b-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides:d.settings.shrinkItems&&(a=Math.floor((b+d.settings.slideMargin)/Math.ceil((b+d.settings.slideMargin)/(a+d.settings.slideMargin))-d.settings.slideMargin))}return a},o=function(){var a=1,b=null;return"horizontal"===d.settings.mode&&d.settings.slideWidth>0?d.viewport.width()<d.minThreshold?a=d.settings.minSlides:d.viewport.width()>d.maxThreshold?a=d.settings.maxSlides:(b=d.children.first().width()+d.settings.slideMargin,a=Math.floor((d.viewport.width()+d.settings.slideMargin)/b)):"vertical"===d.settings.mode&&(a=d.settings.minSlides),a},p=function(){var a=0,b=0,c=0;if(d.settings.moveSlides>0)if(d.settings.infiniteLoop)a=Math.ceil(d.children.length/q());else for(;b<d.children.length;)++a,b=c+o(),c+=d.settings.moveSlides<=o()?d.settings.moveSlides:o();else a=Math.ceil(d.children.length/o());return a},q=function(){return d.settings.moveSlides>0&&d.settings.moveSlides<=o()?d.settings.moveSlides:o()},r=function(){var a,b,c;d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop?"horizontal"===d.settings.mode?(b=d.children.last(),a=b.position(),s(-(a.left-(d.viewport.width()-b.outerWidth())),"reset",0)):"vertical"===d.settings.mode&&(c=d.children.length-d.settings.minSlides,a=d.children.eq(c).position(),s(-a.top,"reset",0)):(a=d.children.eq(d.active.index*q()).position(),d.active.index===p()-1&&(d.active.last=!0),void 0!==a&&("horizontal"===d.settings.mode?s(-a.left,"reset",0):"vertical"===d.settings.mode&&s(-a.top,"reset",0)))},s=function(b,c,f,g){var h,i;d.usingCSS?(i="vertical"===d.settings.mode?"translate3d(0, "+b+"px, 0)":"translate3d("+b+"px, 0, 0)",e.css("-"+d.cssPrefix+"-transition-duration",f/1e3+"s"),"slide"===c?(e.css(d.animProp,i),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),E())})):"reset"===c?e.css(d.animProp,i):"ticker"===c&&(e.css("-"+d.cssPrefix+"-transition-timing-function","linear"),e.css(d.animProp,i),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),s(g.resetValue,"reset",0),J())}))):(h={},h[d.animProp]=b,"slide"===c?e.animate(h,f,d.settings.easing,function(){E()}):"reset"===c?e.css(d.animProp,b):"ticker"===c&&e.animate(h,f,"linear",function(){s(g.resetValue,"reset",0),J()}))},t=function(){for(var b="",c="",e=p(),f=0;e>f;f++)c="",d.settings.buildPager&&a.isFunction(d.settings.buildPager)||d.settings.pagerCustom?(c=d.settings.buildPager(f),d.pagerEl.addClass("bx-custom-pager")):(c=f+1,d.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+c+"</a></div>";d.pagerEl.html(b)},u=function(){d.settings.pagerCustom?d.pagerEl=a(d.settings.pagerCustom):(d.pagerEl=a('<div class="bx-pager" />'),d.settings.pagerSelector?a(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),t()),d.pagerEl.on("click touchend","a",C)},v=function(){d.controls.next=a('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=a('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click touchend",y),d.controls.prev.bind("click touchend",z),d.settings.nextSelector&&a(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&a(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=a('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},w=function(){d.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=a('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",A),d.controls.autoEl.on("click",".bx-stop",B),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?a(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),F(d.settings.autoStart?"stop":"start")},x=function(){d.children.each(function(b){var c=a(this).find("img:first").attr("title");void 0!==c&&(""+c).length&&a(this).append('<div class="bx-caption"><span>'+c+"</span></div>")})},y=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToNextSlide())},z=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToPrevSlide())},A=function(a){e.startAuto(),a.preventDefault()},B=function(a){e.stopAuto(),a.preventDefault()},C=function(b){var c,f;b.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),c=a(b.currentTarget),void 0!==c.attr("data-slide-index")&&(f=parseInt(c.attr("data-slide-index")),f!==d.active.index&&e.goToSlide(f)))},D=function(b){var c=d.children.length;return"short"===d.settings.pagerType?(d.settings.maxSlides>1&&(c=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(b+1+d.settings.pagerShortSeparator+c)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(c,d){a(d).find("a").eq(b).addClass("active")}))},E=function(){if(d.settings.infiniteLoop){var a="";0===d.active.index?a=d.children.eq(0).position():d.active.index===p()-1&&d.carousel?a=d.children.eq((p()-1)*q()).position():d.active.index===d.children.length-1&&(a=d.children.eq(d.children.length-1).position()),a&&("horizontal"===d.settings.mode?s(-a.left,"reset",0):"vertical"===d.settings.mode&&s(-a.top,"reset",0))}d.working=!1,d.settings.onSlideAfter.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)},F=function(a){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[a]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+a+")").addClass("active"))},G=function(){1===p()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0===d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index===p()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},H=function(){if(d.settings.autoDelay>0){setTimeout(e.startAuto,d.settings.autoDelay)}else e.startAuto(),a(window).focus(function(){e.startAuto()}).blur(function(){e.stopAuto()});d.settings.autoHover&&e.hover(function(){d.interval&&(e.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(e.startAuto(!0),d.autoPaused=null)})},I=function(){var b,c,f,g,h,i,j,k,l=0;"next"===d.settings.autoDirection?e.append(d.children.clone().addClass("bx-clone")):(e.prepend(d.children.clone().addClass("bx-clone")),b=d.children.first().position(),l="horizontal"===d.settings.mode?-b.left:-b.top),s(l,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&(d.usingCSS?(g="horizontal"===d.settings.mode?4:5,d.viewport.hover(function(){c=e.css("-"+d.cssPrefix+"-transform"),f=parseFloat(c.split(",")[g]),s(f,"reset",0)},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(f))),J(j)})):d.viewport.hover(function(){e.stop()},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(e.css(i)))),J(j)})),J()},J=function(a){var b,c,f,g=a?a:d.settings.speed,h={left:0,top:0},i={left:0,top:0};"next"===d.settings.autoDirection?h=e.find(".bx-clone").first().position():i=d.children.first().position(),b="horizontal"===d.settings.mode?-h.left:-h.top,c="horizontal"===d.settings.mode?-i.left:-i.top,f={resetValue:c},s(b,"ticker",g,f)},K=function(b){var c=a(window),d={top:c.scrollTop(),left:c.scrollLeft()},e=b.offset();return d.right=d.left+c.width(),d.bottom=d.top+c.height(),e.right=e.left+b.outerWidth(),e.bottom=e.top+b.outerHeight(),!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom)},L=function(a){var b=document.activeElement.tagName.toLowerCase(),c="input|textarea",d=new RegExp(b,["i"]),f=d.exec(c);if(null==f&&K(e)){if(39===a.keyCode)return y(a),!1;if(37===a.keyCode)return z(a),!1}},M=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart MSPointerDown pointerdown",N),d.viewport.on("click",".bxslider a",function(a){d.viewport.hasClass("click-disabled")&&(a.preventDefault(),d.viewport.removeClass("click-disabled"))})},N=function(a){if(d.controls.el.addClass("disabled"),d.working)a.preventDefault(),d.controls.el.removeClass("disabled");else{d.touch.originalPos=e.position();var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b];d.touch.start.x=c[0].pageX,d.touch.start.y=c[0].pageY,d.viewport.get(0).setPointerCapture&&(d.pointerId=b.pointerId,d.viewport.get(0).setPointerCapture(d.pointerId)),d.viewport.bind("touchmove MSPointerMove pointermove",P),d.viewport.bind("touchend MSPointerUp pointerup",Q),d.viewport.bind("MSPointerCancel pointercancel",O)}},O=function(a){s(d.touch.originalPos.left,"reset",0),d.controls.el.removeClass("disabled"),d.viewport.unbind("MSPointerCancel pointercancel",O),d.viewport.unbind("touchmove MSPointerMove pointermove",P),d.viewport.unbind("touchend MSPointerUp pointerup",Q),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},P=function(a){var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],e=Math.abs(c[0].pageX-d.touch.start.x),f=Math.abs(c[0].pageY-d.touch.start.y),g=0,h=0;3*e>f&&d.settings.preventDefaultSwipeX?a.preventDefault():3*f>e&&d.settings.preventDefaultSwipeY&&a.preventDefault(),"fade"!==d.settings.mode&&d.settings.oneToOneTouch&&("horizontal"===d.settings.mode?(h=c[0].pageX-d.touch.start.x,g=d.touch.originalPos.left+h):(h=c[0].pageY-d.touch.start.y,g=d.touch.originalPos.top+h),s(g,"reset",0))},Q=function(a){d.viewport.unbind("touchmove MSPointerMove pointermove",P),d.controls.el.removeClass("disabled");var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],f=0,g=0;d.touch.end.x=c[0].pageX,d.touch.end.y=c[0].pageY,"fade"===d.settings.mode?(g=Math.abs(d.touch.start.x-d.touch.end.x),g>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto())):("horizontal"===d.settings.mode?(g=d.touch.end.x-d.touch.start.x,f=d.touch.originalPos.left):(g=d.touch.end.y-d.touch.start.y,f=d.touch.originalPos.top),!d.settings.infiniteLoop&&(0===d.active.index&&g>0||d.active.last&&0>g)?s(f,"reset",200):Math.abs(g)>=d.settings.swipeThreshold?(0>g?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto()):s(f,"reset",200)),d.viewport.unbind("touchend MSPointerUp pointerup",Q),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},R=function(b){if(d.initialized)if(d.working)window.setTimeout(R,10);else{var c=a(window).width(),h=a(window).height();(f!==c||g!==h)&&(f=c,g=h,e.redrawSlider(),d.settings.onSliderResize.call(e,d.active.index))}},S=function(a){var b=o();d.settings.ariaHidden&&!d.settings.ticker&&(d.children.attr("aria-hidden","true"),d.children.slice(a,a+b).attr("aria-hidden","false"))};return e.goToSlide=function(b,c){var f,g,h,i,j=!0,k=0,m={left:0,top:0},n=null;if(!d.working&&d.active.index!==b){if(d.working=!0,d.oldIndex=d.active.index,0>b?d.active.index=p()-1:b>=p()?d.active.index=0:d.active.index=b,j=d.settings.onSlideBefore.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);if("next"===c?d.settings.onSlideNext.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1):"prev"===c&&(d.settings.onSlidePrev.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1)),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);d.active.last=d.active.index>=p()-1,(d.settings.pager||d.settings.pagerCustom)&&D(d.active.index),d.settings.controls&&G(),"fade"===d.settings.mode?(d.settings.adaptiveHeight&&d.viewport.height()!==l()&&d.viewport.animate({height:l()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){a(this).css("zIndex",d.settings.slideZIndex),E()})):(d.settings.adaptiveHeight&&d.viewport.height()!==l()&&d.viewport.animate({height:l()},d.settings.adaptiveHeightSpeed),!d.settings.infiniteLoop&&d.carousel&&d.active.last?"horizontal"===d.settings.mode?(n=d.children.eq(d.children.length-1),m=n.position(),k=d.viewport.width()-n.outerWidth()):(f=d.children.length-d.settings.minSlides,m=d.children.eq(f).position()):d.carousel&&d.active.last&&"prev"===c?(g=1===d.settings.moveSlides?d.settings.maxSlides-q():(p()-1)*q()-(d.children.length-d.settings.maxSlides),n=e.children(".bx-clone").eq(g),m=n.position()):"next"===c&&0===d.active.index?(m=e.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1):b>=0&&(i=b*q(),m=d.children.eq(i).position()),void 0!==typeof m&&(h="horizontal"===d.settings.mode?-(m.left-k):-m.top,s(h,"slide",d.settings.speed))),d.settings.ariaHidden&&S(d.active.index*q())}},e.goToNextSlide=function(){if(d.settings.infiniteLoop||!d.active.last){var a=parseInt(d.active.index)+1;e.goToSlide(a,"next")}},e.goToPrevSlide=function(){if(d.settings.infiniteLoop||0!==d.active.index){var a=parseInt(d.active.index)-1;e.goToSlide(a,"prev")}},e.startAuto=function(a){d.interval||(d.interval=setInterval(function(){"next"===d.settings.autoDirection?e.goToNextSlide():e.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&a!==!0&&F("stop"))},e.stopAuto=function(a){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&a!==!0&&F("start"))},e.getCurrentSlide=function(){return d.active.index},e.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},e.getSlideElement=function(a){return d.children.eq(a)},e.getSlideCount=function(){return d.children.length},e.isWorking=function(){return d.working},e.redrawSlider=function(){d.children.add(e.find(".bx-clone")).outerWidth(n()),d.viewport.css("height",l()),d.settings.ticker||r(),d.active.last&&(d.active.index=p()-1),d.active.index>=p()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(t(),D(d.active.index)),d.settings.ariaHidden&&S(d.active.index*q())},e.destroySlider=function(){d.initialized&&(d.initialized=!1,a(".bx-clone",this).remove(),d.children.each(function(){void 0!==a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!==a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&!d.settings.pagerCustom&&d.pagerEl.remove(),a(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&a(window).unbind("resize",R),d.settings.keyboardEnabled&&a(document).unbind("keydown",L),a(this).removeData("bxSlider"))},e.reloadSlider=function(b){void 0!==b&&(c=b),e.destroySlider(),h(),a(e).data("bxSlider",this)},h(),a(e).data("bxSlider",this),this}}}(jQuery);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function (a) { var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c); a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function (a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) }, unmask: function () { return this.trigger("unmask") }, mask: function (c, g) { var h, i, j, k, l, m, n, o; if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 } return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) { "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function () { function h() { if (g.completed) { for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return; g.completed.call(B) } } function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) } function q(a) { for (; ++a < n && !j[a];); return a } function r(a) { for (; --a >= 0 && !j[a];); return a } function s(a, b) { var c, d; if (!(0 > a)) { for (c = a, d = q(b) ; n > c; c++) if (j[c]) { if (!(n > d && j[c].test(C[d]))) break; C[c] = C[d], C[d] = p(d), d = q(d) } z(), B.caret(Math.max(l, a)) } } function t(a) { var b, c, d, e; for (b = a, c = p(a) ; n > b; b++) if (j[b]) { if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break; c = e } } function u() { var a = B.val(), b = B.caret(); if (o && o.length && o.length > a.length) { for (A(!0) ; b.begin > 0 && !j[b.begin - 1];) b.begin--; if (0 === b.begin) for (; b.begin < l && !j[b.begin];) b.begin++; B.caret(b.begin, b.begin) } else { for (A(!0) ; b.begin < n && !j[b.begin];) b.begin++; B.caret(b.begin, b.begin) } h() } function v() { A(), B.val() != E && B.change() } function w(a) { if (!B.prop("readonly")) { var b, c, e, f = a.which || a.keyCode; o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault()) } } function x(b) { if (!B.prop("readonly")) { var c, d, e, g = b.which || b.keyCode, i = B.caret(); if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) { if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) { if (t(c), C[c] = d, z(), e = q(c), f) { var k = function () { a.proxy(a.fn.caret, B, e)() }; setTimeout(k, 0) } else B.caret(e); i.begin <= m && h() } b.preventDefault() } } } function y(a, b) { var c; for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c)) } function z() { B.val(C.join("")) } function A(a) { var b, c, d, e = B.val(), f = -1; for (b = 0, d = 0; n > b; b++) if (j[b]) { for (C[b] = p(b) ; d++ < e.length;) if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break } } else C[b] === e.charAt(d) && d++, k > b && (f = b); return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l } var B = a(this), C = a.map(c.split(""), function (a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }), D = C.join(""), E = B.val(); B.data(a.mask.dataName, function () { return a.map(C, function (a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function () { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function () { if (!B.prop("readonly")) { clearTimeout(b); var a; E = B.val(), a = A(), b = setTimeout(function () { B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)) }, 10) } }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () { B.prop("readonly") || setTimeout(function () { var a = A(!0); B.caret(a), h() }, 0) }), e && f && B.off("input.mask").on("input.mask", u), A() }) } }) });

/*
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function (t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t) {
    var e = -1, o = -1, i = function (t) { return parseFloat(t) || 0 }, n = function (e) { var o = 1, n = t(e), a = null, r = []; return n.each(function () { var e = t(this), n = e.offset().top - i(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null; null === s ? r.push(e) : Math.floor(Math.abs(a - n)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), a = n }), r }, a = function (e) {
        var o = {
            byRow: !0, property: "height", target: null, remove: !1
        }; return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
    }, r = t.fn.matchHeight = function (e) { var o = a(e); if (o.remove) { var i = this; return this.css(o.property, ""), t.each(r._groups, function (t, e) { e.elements = e.elements.not(i) }), this } return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this) }; r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
    r._afterUpdate = null, r._rows = n, r._parse = i, r._parseOptions = a, r._apply = function (e, o) {
        var s = a(o), h = t(e), c = [h], l = t(window).scrollTop(), p = t("html").outerHeight(!0), d = h.parents().filter(":hidden"); return d.each(function () { var e = t(this); e.data("style-cache", e.attr("style")) }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
            var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: o, "padding-top": "0",
                "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden"
            })
        }), c = n(h), h.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || "") })), t.each(c, function (e, o) {
            var n = t(o), a = 0; if (s.target) a = s.target.outerHeight(!1); else {
                if (s.byRow && n.length <= 1) return void n.css(s.property, ""); n.each(function () {
                    var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"); var i = { display: o }; i[s.property] = "",
                    e.css(i), e.outerHeight(!1) > a && (a = e.outerHeight(!1)), e.css("display", "")
                })
            } n.each(function () { var e = t(this), o = 0; s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, a - o + "px")) })
        }), d.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || null) }), r._maintainScroll && t(window).scrollTop(l / p * t("html").outerHeight(!0)), this
    }, r._applyDataApi = function () {
        var e = {}; t("[data-match-height], [data-mh]").each(function () { var o = t(this), i = o.attr("data-mh") || o.attr("data-match-height"); i in e ? e[i] = e[i].add(o) : e[i] = o }), t.each(e, function () { this.matchHeight(!0) })
    }; var s = function (e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) }; r._update = function (i, n) {
        if (n && "resize" === n.type) { var a = t(window).width(); if (a === e) return; e = a } i ? -1 === o && (o = setTimeout(function () {
            s(n), o = -1
        }, r._throttle)) : s(n)
    }, t(r._applyDataApi), t(window).bind("load", function (t) { r._update(!1, t) }), t(window).bind("resize orientationchange", function (t) { r._update(!0, t) })
});

/*
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function (a, b, c) { "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c() }(this, "verge", function () { function a() { return { width: k(), height: l() } } function b(a, b) { var c = {}; return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c } function c(a, c) { return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1 } function d(b) { b = null == b ? a() : 1 === b.nodeType ? c(b) : b; var d = b.height, e = b.width; return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d } var e = {}, f = "undefined" != typeof window && window, g = "undefined" != typeof document && document, h = g && g.documentElement, i = f.matchMedia || f.msMatchMedia, j = i ? function (a) { return !!i.call(f, a).matches } : function () { return !1 }, k = e.viewportW = function () { var a = h.clientWidth, b = f.innerWidth; return b > a ? b : a }, l = e.viewportH = function () { var a = h.clientHeight, b = f.innerHeight; return b > a ? b : a }; return e.mq = j, e.matchMedia = i ? function () { return i.apply(f, arguments) } : function () { return {} }, e.viewport = a, e.scrollX = function () { return f.pageXOffset || h.scrollLeft }, e.scrollY = function () { return f.pageYOffset || h.scrollTop }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) { var d = c(a, b); return !!d && d.right >= 0 && d.left <= k() }, e.inY = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.top <= l() }, e.inViewport = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k() }, e });
jQuery.extend(verge);

/*
 * jquery.lightbox.js v1.2
 * https://github.com/duncanmcdougall/Responsive-Lightbox
 * Copyright 2015 Duncan McDougall and other contributors; @license Creative Commons Attribution 2.5
 *
 * Options: 
 * margin - int - default 50. Minimum margin around the image
 * nav - bool - default true. enable navigation
 * blur - bool - default true. Blur other content when open using css filter
 * minSize - int - default 0. Min window width or height to open lightbox. Below threshold will open image in a new tab.
 *
 */
!function (t) { "use strict"; t.fn.lightbox = function (i) { var e = { margin: 50, nav: !0, blur: !0, minSize: 0 }, n = { items: [], lightbox: null, image: null, current: null, locked: !1, caption: null, init: function (i) { n.items = i, n.selector = "lightbox-" + Math.random().toString().replace(".", ""); var o = "lightbox-" + Math.floor(1e5 * Math.random() + 1); n.lightbox || (t("body").append('<div id="' + o + '" class="lightbox" style="display:none;"><a href="#" class="lightbox__close lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--prev lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--next lightbox__button"></a><div href="#" class="lightbox__caption"><p></p></div></div>'), n.lightbox = t("#" + o), n.caption = t(".lightbox__caption", n.lightbox)), n.items.length > 1 && e.nav ? t(".lightbox__nav", n.lightbox).show() : t(".lightbox__nav", n.lightbox).hide(), n.bindEvents() }, loadImage: function () { e.blur && t("body").addClass("blurred"), t("img", n.lightbox).remove(), n.lightbox.fadeIn("fast").append('<span class="lightbox__loading"></span>'); var i = t('<img src="' + t(n.current).attr("href") + '" draggable="false">'); t(i).load(function () { t(".lightbox__loading").remove(), n.lightbox.append(i), n.image = t("img", n.lightbox).hide(), n.resizeImage(), n.setCaption() }) }, setCaption: function () { var i = t(n.current).data("caption"); i && i.length > 0 ? (n.caption.fadeIn(), t("p", n.caption).text(i)) : n.caption.hide() }, resizeImage: function () { var i, o, l, a, r; o = t(window).height() - e.margin, l = t(window).outerWidth(!0) - e.margin, n.image.width("").height(""), a = n.image.height(), r = n.image.width(), r > l && (i = l / r, r = l, a = Math.round(a * i)), a > o && (i = o / a, a = o, r = Math.round(r * i)), n.image.width(r).height(a).css({ top: (t(window).height() - n.image.outerHeight()) / 2 + "px", left: (t(window).width() - n.image.outerWidth()) / 2 + "px" }).show(), n.locked = !1 }, getCurrentIndex: function () { return t.inArray(n.current, n.items) }, next: function () { return n.locked ? !1 : (n.locked = !0, void (n.getCurrentIndex() >= n.items.length - 1 ? t(n.items[0]).click() : t(n.items[n.getCurrentIndex() + 1]).click())) }, previous: function () { return n.locked ? !1 : (n.locked = !0, void (n.getCurrentIndex() <= 0 ? t(n.items[n.items.length - 1]).click() : t(n.items[n.getCurrentIndex() - 1]).click())) }, bindEvents: function () { t(n.items).click(function (i) { if (!n.lightbox.is(":visible") && (t(window).width() < e.minSize || t(window).height() < e.minSize)) return void t(this).attr("target", "_blank"); var o = t(this)[0]; i.preventDefault(), n.current = o, n.loadImage(), t(document).on("keydown", function (t) { 27 === t.keyCode && n.close(), 39 === t.keyCode && n.next(), 37 === t.keyCode && n.previous() }) }), n.lightbox.on("click", function (t) { this === t.target && n.close() }), t(n.lightbox).on("click", ".lightbox__nav--prev", function () { return n.previous(), !1 }), t(n.lightbox).on("click", ".lightbox__nav--next", function () { return n.next(), !1 }), t(n.lightbox).on("click", ".lightbox__close", function () { return n.close(), !1 }), t(window).resize(function () { n.image && n.resizeImage() }) }, close: function () { t(document).off("keydown"), t(n.lightbox).fadeOut("fast"), t("body").removeClass("blurred") } }; t.extend(e, i), n.init(this) } }(jQuery);

/*
    AudioPlayer
    http://osvaldas.info/audio-player-responsive-and-touch-friendly
	AUTHOR: Osvaldas Valutis, www.osvaldas.info
*/
!function (e, t, a, i) { var n = "ontouchstart" in t, o = n ? "touchstart" : "mousedown", d = n ? "touchmove" : "mousemove", l = n ? "touchcancel" : "mouseup", u = function (e) { var t = e / 3600, a = Math.floor(t), i = e % 3600 / 60, n = Math.floor(i), o = Math.ceil(e % 3600 % 60); return o > 59 && (o = 0, n = Math.ceil(i)), n > 59 && (n = 0, a = Math.ceil(t)), (0 == a ? "" : a > 0 && a.toString().length < 2 ? "0" + a + ":" : a + ":") + (n.toString().length < 2 ? "0" + n : n) + ":" + (o.toString().length < 2 ? "0" + o : o) }, r = function (e) { var t = a.createElement("audio"); return !(!t.canPlayType || !t.canPlayType("audio/" + e.split(".").pop().toLowerCase() + ";").replace(/no/, "")) }; e.fn.audioPlayer = function (t) { var t = e.extend({ classPrefix: "audioplayer", strPlay: "Play", strPause: "Pause", strVolume: "Volume" }, t), a = {}, i = { playPause: "playpause", playing: "playing", stopped: "stopped", time: "time", timeCurrent: "time-current", timeDuration: "time-duration", bar: "bar", barLoaded: "bar-loaded", barPlayed: "bar-played", volume: "volume", volumeButton: "volume-button", volumeAdjust: "volume-adjust", noVolume: "novolume", muted: "muted", mini: "mini" }; for (var s in i) a[s] = t.classPrefix + "-" + i[s]; return this.each(function () { if ("audio" != e(this).prop("tagName").toLowerCase()) return !1; var i = e(this), s = i.attr("src"), v = i.get(0).getAttribute("autoplay"), v = "" === v || "autoplay" === v ? !0 : !1, m = i.get(0).getAttribute("loop"), m = "" === m || "loop" === m ? !0 : !1, c = !1; "undefined" == typeof s ? i.find("source").each(function () { return s = e(this).attr("src"), "undefined" != typeof s && r(s) ? (c = !0, !1) : void 0 }) : r(s) && (c = !0); var h = e('<div class="' + t.classPrefix + '">' + (c ? e("<div>").append(i.eq(0).clone()).html() : '<embed src="' + s + '" width="0" height="0" volume="100" autostart="' + v.toString() + '" loop="' + m.toString() + '" />') + '<div class="' + a.playPause + '" title="' + t.strPlay + '"><a href="#">' + t.strPlay + "</a></div></div>"), f = c ? h.find("audio") : h.find("embed"), f = f.get(0); if (c) { h.find("audio").css({ width: 0, height: 0, visibility: "hidden" }), h.append('<div class="' + a.time + " " + a.timeCurrent + '"></div><div class="' + a.bar + '"><div class="' + a.barLoaded + '"></div><div class="' + a.barPlayed + '"></div></div><div class="' + a.time + " " + a.timeDuration + '"></div><div class="' + a.volume + '"><div class="' + a.volumeButton + '" title="' + t.strVolume + '"><a href="#">' + t.strVolume + '</a></div><div class="' + a.volumeAdjust + '"><div><div></div></div></div></div>'); var p = h.find("." + a.bar), y = h.find("." + a.barPlayed), g = h.find("." + a.barLoaded), b = h.find("." + a.timeCurrent), P = h.find("." + a.timeDuration), C = h.find("." + a.volumeButton), E = h.find("." + a.volumeAdjust + " > div"), w = 0, M = function (e) { theRealEvent = n ? e.originalEvent.touches[0] : e, f.currentTime = Math.round(f.duration * (theRealEvent.pageX - p.offset().left) / p.width()) }, L = function (e) { theRealEvent = n ? e.originalEvent.touches[0] : e, f.volume = Math.abs((theRealEvent.pageY - (E.offset().top + E.height())) / E.height()) }, S = function () { var e = setInterval(function () { return f.buffered.length < 1 ? !0 : (g.width(f.buffered.end(0) / f.duration * 100 + "%"), void (Math.floor(f.buffered.end(0)) >= Math.floor(f.duration) && clearInterval(e))) }, 100) }, V = f.volume, j = f.volume = .111; Math.round(1e3 * f.volume) / 1e3 == j ? f.volume = V : h.addClass(a.noVolume), P.html("&hellip;"), b.html(u(0)), f.addEventListener("loadeddata", function () { S(), P.html(e.isNumeric(f.duration) ? u(f.duration) : "&hellip;"), E.find("div").height(100 * f.volume + "%"), w = f.volume }), f.addEventListener("timeupdate", function () { b.html(u(f.currentTime)), y.width(f.currentTime / f.duration * 100 + "%") }), f.addEventListener("volumechange", function () { E.find("div").height(100 * f.volume + "%"), f.volume > 0 && h.hasClass(a.muted) && h.removeClass(a.muted), f.volume <= 0 && !h.hasClass(a.muted) && h.addClass(a.muted) }), f.addEventListener("ended", function () { h.removeClass(a.playing).addClass(a.stopped) }), p.on(o, function (e) { M(e), p.on(d, function (e) { M(e) }) }).on(l, function () { p.unbind(d) }), C.on("click", function () { return h.hasClass(a.muted) ? (h.removeClass(a.muted), f.volume = w) : (h.addClass(a.muted), w = f.volume, f.volume = 0), !1 }), E.on(o, function (e) { L(e), E.on(d, function (e) { L(e) }) }).on(l, function () { E.unbind(d) }) } else h.addClass(a.mini); h.addClass(v ? a.playing : a.stopped), h.find("." + a.playPause).on("click", function () { return h.hasClass(a.playing) ? (e(this).attr("title", t.strPlay).find("a").html(t.strPlay), h.removeClass(a.playing).addClass(a.stopped), c ? f.pause() : f.Stop()) : (e(this).attr("title", t.strPause).find("a").html(t.strPause), h.addClass(a.playing).removeClass(a.stopped), c ? f.play() : f.Play()), !1 }), i.replaceWith(h) }), this } }(jQuery, window, document);


// Application Scripts:

// Модальное окно
// Десктоп меню (выпадайки)
// Мобильное меню
// Кнопка скролла страницы
// Маска для телефонного номера
// Автовыравнивание блоков по высоте
// Лайтбокс
// Аудиоплеер
// Видео в модальном окне
// Слайдер видео-ревью
// Слайдер сертификатов
// Слайдер отзывов (видео+текст, аудио+текст)
// Счетчики
// Таймеры акционных предложений
// SVG-карта
// SEO-блок - раскроем при клике на линк
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

        method.checkResize = function () {
            var winW = verge.viewportW();
            if (winW >= 1024) {//брекпоинт мобильного - десктопного меню
                method.close();
            }
        }

        $window.on('resize', function () {
            setTimeout(method.checkResize, 500);
        });

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
    // Видео в модальном окне
    //---------------------------------------------------------------------------------------
    $('.js-video').on('click', function (e) {
        e.preventDefault();
        var link = $(this).attr('href'),
            id = getYoutubeID(link);

        if (id) {
            $('#video').find('iframe').attr('src', 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0;autoplay=1');
            showModal.open('#video');
        }

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
    });

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
            auto: false,
            infiniteLoop: false,
            hideControlOnEnd: true
        });
    }
    if ($('.js-slider-video').length) { initVideoSlider() }

    function initAudioSlider() {
        var $slider = $('.js-slider-audio');
        $slider.bxSlider({
            auto: false,
            infiniteLoop: false,
            hideControlOnEnd: true,
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
    // Таймеры акционных предложений
    //---------------------------------------------------------------------------------------
    function initCountdown() {
        var counter = [],
            count = [],
            timer = [];
        counter = $('.js-countdown');
        var l = counter.length;

        counter.append('<div class="count-values"></div>');
        counter.find('.count-values').append('<div class="count-day">00</div><div class="count-hour">00</div><div class="count-min"><span>00</span></div><div class="count-sec"><span>00</span></div>');
        counter.append('<div class="count-names"></div>');
        counter.find('.count-names').append('<div>дни</div><div>часы</div><div>мин</div><div>сек</div>');
        var holderMin = $('.count-min > span');
        var holderSec = $('.count-sec > span');

        function Count(countdown, num) { //конструктор
            this.name = countdown;
            this.holderDay = this.name.find('.count-day');
            this.holderHour = this.name.find('.count-hour');
            this.holderMin = this.name.find('.count-min > span');
            this.holderSec = this.name.find('.count-sec > span');
            this.date = countdown.data('timer');//читаем дату в атрибуте data-timer
            this.time = (new Date(this.date)).getTime();//переводим дату в миллисекунды
            this.amount = 0;
            this.days = 0;
            this.hours = 0;
            this.mins = 0;
            this.secs = 0;
            this.timer_number = num;//номер таймера (чтобы выключить при необходимости)
            this.status = true;
        };

        Count.prototype.getCount = function () {
            var current = new Date(); //берем текущую дату и время
            this.amount = this.time - current.getTime();// и сравниваем с той что была указана в data-date
            if (this.amount > 0) { //если актуально
                this.amount = Math.floor(this.amount / 1000); //прибиваем миллисекунды
                this.days = Math.floor(this.amount / 86400); //дни
                this.amount = this.amount % 86400;
                this.hours = Math.floor(this.amount / 3600); //часы
                this.amount = this.amount % 3600;
                this.mins = Math.floor(this.amount / 60); //минуты
                this.amount = this.amount % 60;
                this.secs = Math.floor(this.amount); //секунды

                if (this.days > 99) this.days = 99; //приводим таймер к виду XX XX XX XX
                if (this.days < 10) this.days = '0' + this.days;
                if (this.hours < 10) this.hours = '0' + this.hours;
                if (this.mins < 10) this.mins = '0' + this.mins;
                if (this.secs < 10) this.secs = '0' + this.secs;
            } else { //обнуляем таймер
                this.days = '00';
                this.hours = '00';
                this.mins = '00';
                this.secs = '00';
                this.status = false;
                clearInterval(timer[this.timer_number]); //выключаем таймер
            };
        };

        Count.prototype.printCount = function () {//выводим значения в блоки
            this.holderDay.text(this.days);
            this.holderHour.text(this.hours);
            this.holderMin.text(this.mins);
            this.holderSec.text(this.secs);
        };

        for (var i = 0; i < l; i++) { //генерируем объекты-таймеры
            count[i] = new Count(counter.eq(i), i);
        };

        function startCounter() {
            for (var i = 0; i < l; i++) {
                if (!count[i].status) continue; //если статус не тру, переходим к следующему таймеру
                count[i].getCount();
                count[i].printCount();
            };
        };

        for (var i = 0; i < l; i++) {//запускаем таймеры
            timer[i] = setInterval(startCounter, 1000);
        };
    }

    if ($('.js-countdown').length) { initCountdown() }

    //
    // SVG-карта
    //---------------------------------------------------------------------------------------
    if ($('#imap').length) {
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
    }

    //
    // SEO-блок - раскроем при клике на линк
    //---------------------------------------------------------------------------------------
    $('.js-seo').one('click', '.js-seo-link', function (e) {
        e.preventDefault();
        $(this).parents('.js-seo').addClass('active');
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
