
window.onload = function() {

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

}