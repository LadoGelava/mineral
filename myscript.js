



//declarations


var drpMenu = document.getElementById("drpMenu");
var drpMenu2= document.getElementById("drpMenu2");
var copy = document.getElementById("copy");
var heroDiv=document.getElementById("heroDiv");
var drogba = document.getElementById("drogba");
var drogba2 = document.getElementById("drogba2");

var burger = document.getElementById("burger");
var hiddenMenu = document.getElementById("hiddenMenu");
var burgerHide = document.getElementById("burgerHide");
var burgerShow = document.getElementById("burgerShow");
var up = document.getElementById("up");

var textBoxes = document.getElementById("textBoxes");
var navbarNav= document.getElementById("navbarNav");
var body = document.getElementById("body");
var contact = document.getElementById('contact');
var about = document.getElementById('about');








//End

function onProjectsHover(){
drpMenu.style.display="block";
}

function onProjectsOut(){
  drpMenu.style.display="none";
  }

  function onSubClick(){
    drpMenu2.style.display="block";
  }

  function onSubClickOut(){
    drpMenu2.style.display="none";
  }

  function onSubClick2(){
    drogba2.style.display="block";
  }

  function onSubClick2Out(){
    drogba2.style.display="none";
  }

  function onDrogba(){
    drogba.style.display="block";
  }

  function onDrogbaOut(){
    drogba.style.display="none";
  }









function onBurgerClick(){
 
  
  if (hiddenMenu.style.display === "flex") {
    hiddenMenu.style.display = "none";
    about.style.display="none";
    burgerShow.style.display = "block";
    burgerHide.style.display = "none";
    textBoxes.style.display="block";
  
    contact.style.display="block";
   
   
    
    
  } else {
    hiddenMenu.style.display = "flex";
    about.style.display="none";
    burgerHide.style.display = "block";
    burgerShow.style.display = "none";
    textBoxes.style.display="none";
 
    contact.style.display="none";

    
    
    

    
    
    
  }
}





