// jQuery

$(document).ready(function () {
    "use strict";
    
    $("#split").on("mousemove", function () {
        var width = $(window).width();
        var curPosX = event.pageX;
        
        console.log(width);
        
        var minVal = width / 5;
        
        var leftSplit = 100 / width * curPosX;
        var rightSplit = 100 - leftSplit;
        
        var left = leftSplit + "%";
        var right = rightSplit + "%";
        
        var widthLeftSplit = $("#left-split").width();
        var widthRightSplit = $("#right-split").width();

        var widthLeftTitle = $("#left-split").find(".wrapTitle").children("h1").width() + 100;
        var widthRightTitle = $("#right-split").find(".wrapTitle").children("h1").width() + 100;
        
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
    
    /*
    $("#split").on("mouseout", function() {
        $(this).children("#left-split").css( "width", "50%" );
        $(this).children("#right-split").css( "width", "50%" );
    });
    */
});