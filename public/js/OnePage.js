// Animations feuilles Les Piliers 

window.onload = function() {
    // const leafBienEtre = document.getElementById ("bienEtre"); 
    // const leafBienManger = document.getElementById ("bienMnager"); 
    // const leafBio = document.getElementById ("bio"); 

    // const leafBienEtreLight = document.getElementById ("bienEtreLight"); 
    // const leafBienMangerLight = document.getElementById ("bienMangerLight"); 
    // const leafBioLight = document.getElementById ("bioLight"); 

    // const bienEtreTexte = document.getElementById ("explication-bienEtre")
    // const bienMangerTexte = document.getElementById ("explication-bienManger"); 
    // const bioTexte = document.getElementById ("explication-biodiversité"); 


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
        document.getElementById("bienManger").style.display = "flex";
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
}