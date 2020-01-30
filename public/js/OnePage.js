$(document).ready(function(){

    // Timeline

    // var container = $(".timelineDot");

    // // Effet de hover sur la Timeline
    // $(container).hover(function(){
    //     $(this).siblings(".timelineContent").children(".content").animate({
    //         opacity: 1
    //     }, 500);
    // }, function(){
    //     $(this).siblings(".timelineContent").children(".content").animate({
    //         opacity: 0
    //     }, 500);
    // });

    // // Effet de click sur la Timeline
    // $(container).click(function(){
    //     $(this).css("opacity", "1");
    //     $(this).siblings(".timelineContent").children(".content").css("opacity", "1");
    // });


    $(document).on({
        "mouseenter": function(){
            $(this).siblings(".timelineContent").children(".content").animate({
                opacity: 1
            }, 500);
        },
        "mouseleave": function(){
            $(this).siblings(".timelineContent").children(".content").animate({
                opacity: 0
            }, 500);
        },
        "mousedown": function(){
            $(".timelineDot").removeClass("activeDot");
            $(this).addClass("activeDot");
            $(this).siblings(".timelineContent").children(".content").addClass("activeContent");
        }
    }, ".timelineDot");


})