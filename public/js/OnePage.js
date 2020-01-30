$(document).ready(function(){

    // Timeline

    //Actions au click
    $(".timelineDot").click(function(e){ 
        e.preventDefault();
        $(".timelineDot").removeClass("activeDot");
        $(".timelineDot").siblings(".timelineContent").children(".pContent").removeClass("stayContent");
        $(this).addClass("activeDot");
        $(this).siblings(".timelineContent").children(".pContent").addClass("stayContent");

    //Actions lorsque la souris est dessus
    }).mouseenter(function(){ 
        $(this).siblings(".timelineContent").children(".pContent").addClass("activeContent");

    //Action lorsque la souris part
    }).mouseleave(function(){ 
        $(this).siblings(".timelineContent").children(".pContent").removeClass("activeContent");
    });

    // Smooth scroll et saut vers la catégorie cliquée
    function scrollTo(target) {
        if( target.length ) {
            $("html, body").stop().animate({scrollTop: target.offset().top}, 1500);
        }
    }

    $("#section1").click(function(e){
        e.preventDefault();
        scrollTo($("#accueil"));
    })

    $("#section2").click(function(e){
        e.preventDefault();
        scrollTo($("#piliersSection"));
    })

    $("#section3").click(function(e){
        e.preventDefault();
        scrollTo($("#potagers"));
    })

    $("#section4").click(function(e){
        e.preventDefault();
        scrollTo($("#formules"));
    })

    $("#section5").click(function(e){
        e.preventDefault();
        scrollTo($("#supplement"));
    })

    // Highlight de la section en cours de lecture

    $(window).on("scroll", function() {
        $(".target").each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr("id");
                $("#timeline .timelineContainer a").removeClass("activeDot");
                $("#timeline .timelineContainer a").siblings(".timelineContent").children(".pContent").removeClass("stayContent");
                $("#timeline .timelineContainer a[href='#"+ id +"']").addClass("activeDot");
                $("#timeline .timelineContainer a[href='#"+ id +"']").siblings(".timelineContent").children(".pContent").addClass("stayContent");
            }
        });
    });

    // $("#nav nav a[href=#"+ id +"]").addClass("active");


})