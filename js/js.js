// jQuery

$(document).ready(function () {
    "use strict";
    
    $("#split").on("mousemove", function () {
        var width = $(window).width();
        var curPosX = event.pageX;
        
        var leftSplit = 100 / width * curPosX;
        var rightSplit = 100 - leftSplit;
        
        var left = leftSplit + "%";
        var right = rightSplit + "%";
        
        var widthLeftSplit = $("#left-split").width();
        var widthRightSplit = $("#right-split").width();

        var widthLeftTitle = $("#left-split").find(".wrapTitle").children("h1").width() + 100;
        var widthRightTitle = $("#right-split").find(".wrapTitle").children("h1").width() + 100;
        
        if (widthLeftSplit > widthLeftTitle && widthRightSplit > widthRightTitle) {
            
            if (curPosX > widthLeftTitle && curPosX < width - widthRightTitle) {
                $(this).children("#left-split").css( "width", left );
                $(this).children("#right-split").css( "width", right );
            }
            else {
                
                leftPercent = widthLeftTitle + "%";
                rightPercent = widthRightTitle + "%";
                $(this).children("#left-split").css( "width", leftPercent );
                $(this).children("#left-split").css( "width", rightPercent );
            }
        }
    });
    
    $("#split").on("mouseout", function() {
        $(this).children("#left-split").css( "width", "50%" );
        $(this).children("#right-split").css( "width", "50%" );
    });
});