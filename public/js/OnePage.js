window.onload = function(){

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
            $("html, body").stop().animate({scrollTop: target.offset().top -150}, 1500);
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
            if($(window).scrollTop() >= $(this).offset().top -200) {
                var id = $(this).attr("id");
                $("#timeline .timelineContainer a").removeClass("activeDot");
                $("#timeline .timelineContainer a").siblings(".timelineContent").children(".pContent").removeClass("stayContent");
                $("#timeline .timelineContainer a[href='#"+ id +"']").addClass("activeDot");
                $("#timeline .timelineContainer a[href='#"+ id +"']").siblings(".timelineContent").children(".pContent").addClass("stayContent");
            }
        });
    });


// Animations feuilles Les Piliers 

    document.getElementById("bienEtreLight").onmouseover = function (){
        document.getElementById("bienEtre").style.display = "flex";
        document.getElementById("bienManger").style.display = "none"; 
        document.getElementById("bienMangerLight").style.display = "flex"; 
        document.getElementById("bio").style.display = "none";
        document.getElementById("bioLight").style.display = "flex";
        document.getElementById("explication-bienManger").style.opacity = "0";
        document.getElementById("explication-bienEtre").style.opacity = "1";
    } 

    document.getElementById("bienEtreLight").onmouseout = function (){
        document.getElementById("bienEtre").style.display = "none";
        document.getElementById("explication-bienEtre").style.opacity = "0";
    }

    document.getElementById("bienMangerLight").onmouseover = function (){
        document.getElementById("bienManger").style.display = "flex"; 
        document.getElementById("explication-bienManger").style.opacity = "1";
    }

    document.getElementById("bienMangerLight").onmouseout = function (){
        document.getElementById("bienManger").style.display = "none";
        document.getElementById("explication-bienManger").style.opacity = "0";
    }

    document.getElementById("bioLight").onmouseover = function (){
        document.getElementById("bio").style.display = "flex"; 
        document.getElementById("explication-biodiversité").style.opacity = "1";
    }

    document.getElementById("bioLight").onmouseout = function (){
        document.getElementById("bio").style.display = "none";
        document.getElementById("explication-biodiversité").style.opacity = "0";
    }

// Menu Burger

    const button = document.getElementById("burgerMenu"); 
    const menu = document.getElementById("menuSideBar");
    const buttonSideB = document.getElementById("burgerSideBar"); 

    button.addEventListener("click",function(){
        menu.classList.toggle("open"); 
    })

    buttonSideB.addEventListener("click", function(){
        menu.classList.toggle("open");
    })

const scrollStop = function (callback) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	var isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Run the callback
			callback();

		}, 2000);

	}, false);

};

document.addEventListener('scroll', () => {
    const scrollDown = document.getElementById('scrolldown');
    scrollDown.style.opacity = "0";
});

scrollStop(() => {
    const scrollDown = document.getElementById('scrolldown');
    scrollDown.style.opacity = "1";
});

