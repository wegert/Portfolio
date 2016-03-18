// jQuery

$(document).ready(function () {
    "use strict";
    
    /*******************
    **                **
    **     SPLIT      **
    **                **
    *******************/
    
    $("#split").on("mousemove", function () {
        var width = $(window).width();
        var curPosX = event.pageX;
        
        var widthLeftTitle = $("#left-split").find(".wrapTitle").children("h1").outerWidth();
        var widthRightTitle = $("#right-split").find(".wrapTitle").children("h1").outerWidth();
        
        console.log(widthLeftTitle);
        
        var minVal;
        
        if (widthLeftTitle >= widthRightTitle) {
            minVal = widthLeftTitle;
        }
        else {
            minVal = widthRightTitle;
        }
        
        console.log(minVal);
        
        var leftSplit = 100 / width * curPosX;
        var rightSplit = 100 - leftSplit;
        
        var left = leftSplit + "%";
        var right = rightSplit + "%";
        
        var widthLeftSplit = $("#left-split").width();
        var widthRightSplit = $("#right-split").width();
        
        var leftMin = 100 / width * minVal;
        var rightMax = 100 - leftMin;
        
        var leftPercent = leftMin + "%";
        var rightPercent = rightMax + "%";
        
        if (curPosX >= minVal && curPosX <= width - minVal ) {
            $(this).children("#left-split").animate({width: left}, 13, 'swing');
            $(this).children("#right-split").animate({width: right}, 13, 'swing');
        }
        else if (curPosX < minVal) {
            $(this).children("#left-split").css( "width", leftPercent );
            $(this).children("#right-split").css( "width", rightPercent );
        }
        else if (curPosX > width - minVal) {
            $(this).children("#left-split").css( "width", rightPercent );
            $(this).children("#right-split").css( "width", leftPercent );
        }
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