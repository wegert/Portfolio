// jQuery

/*******************
**                **
**   TIME-LINE    **
**                **
*******************/

/*
$(function(){

    $("#timeline-container").load('../timeline.svg',function(response){

        $(this).addClass("svgLoaded");

        if(!response){
            // Error loading SVG!
            // Make absolutely sure you are running this on a web server or localhost!
        }

    });
});
*/

$(document).ready(function () {
    /*"use strict";*/
    
    /*******************
    **                **
    **   NAVIGATION   **
    **                **
    *******************/
    
    $('ul.menu').find('a').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        var $a_href = $(this).attr('href');
        var $anchor = $($a_href).offset();
        
        //window.scrollTo($anchor.left,$anchor.top);
        $('body').animate({ scrollTop: $anchor.top }, 1000);
        
        return false;
    });
    
    
    /*******************
    **                **
    **   NAV SCROLL   **
    **                **
    *******************/
    
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 69;
    var navbarHeight = $('.navigation').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        
        if($(this).scrollTop() <= $('#header').outerHeight() ) {
            $('#header .navigation-sticky').fadeOut(500);
            return;
        }
        
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#header .navigation-sticky').css("display", "none").removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#header .navigation-sticky').css("display", "block").removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
        
        
    }
    
    
    /*******************
    **                **
    **  HEADER IMAGE  **
    **                **
    *******************/
    
    var width = $(window).width();
    var height = $(window).height();
    
    if ( width < height) {
        $("#profile-image").css("width", "60%");
    }
    
    var ProfileImgWidht = $("#profile-image").width();   
    $("#profile-image").height(ProfileImgWidht);
    
    $( window ).resize(function() {
        var ProfileImgWidht = $("#profile-image").width();   
        $("#profile-image").height(ProfileImgWidht);
    });
    
    
    /*******************
    **                **
    **     ABOUT      **
    **                **
    *******************/
    
    $(".bio-box").on("mouseover", function () {
        /*$(this).css( "background-color", "#fcfcfc").css( "box-shadow", "5px 5px 10px rgba(0, 0, 0, 0.3)").fadeIn(2000);*/
        $(this).children(".bio-inner-hover").css( "display", "table");
        $(this).children(".bio-inner").css( "display", "none");
    });
    
    $(".bio-box").on("mouseleave", function () {
        /*$(this).css( "background-color", "none").css( "box-shadow", "none").fadeOut(1000);*/
        $(this).children(".bio-inner-hover").css( "display", "none");
        $(this).children(".bio-inner").css( "display", "table");
    });
    
    
    /*******************
    **                **
    **     TYPED      **
    **                **
    *******************/
    
    $(function(){
        $("#about-typed").typed({
            strings: ["Photography^1000", "^1000Web Design^1000", "^1000Programming^1000", "^1000Design^1000"],
            typeSpeed: 120,
            loop: true,
            loopCount: false,
            startDelay: 1000,
            backDelay: 750
        });
    });
});