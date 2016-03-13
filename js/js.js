// jQuery

$(document).ready(function () {
    "use strict";
    $("#split").on("mouseover", function () {
        var width = $(document).width();
        var curPosX = event.pageX;
        var leftSplit = 100 / width * curPosX;
        var rightSplit = 100 - leftSplit;
        
        var left = leftSplit + "%";
        var right = rightSplit + "%";
        
        $(this).children("#left-split").css( "width", left );
        $(this).children("#right-split").css( "width", right );        
    });
    
    $("#split").on("mouseout", function() {
        $(this).children("#left-split").css( "width", "50%" );
        $(this).children("#right-split").css( "width", "50%" );
    });
});