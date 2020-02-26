const button = document.getElementById("burgerMenu"); 
const menu = document.getElementById("menuSideBar");
const buttonSideB = document.getElementById("burgerSideBar"); 

button.addEventListener("click",function(){
    menu.classList.toggle("open"); 
})

buttonSideB.addEventListener("click", function(){
    menu.classList.toggle("open");
})