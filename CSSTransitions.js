//Add a class to an element which will trigger a Transition or Animation. Show lots of examples.


//onclick
//onhover
//onFocus
function doTheThing(){
  
     var elements = document.getElementsByClassName("movable");
    elements[0].classList.toggle("transition");
    elements[1].classList.toggle("transition");
    elements[2].classList.toggle("transition");
}

function findTheCircle(){
    var elements = document.getElementsByClassName("movable");
    elements[3].classList.toggle("transition");
}

function smallColoredSquare(){
    
    var elements = document.getElementsByClassName("movable");
    elements[2].classList.toggle("transitionShrink");
}

function textWonky(){
    var elements = document.getElementsByClassName("movable");
    elements[0].classList.toggle("textWonky");
    elements[1].classList.toggle("textWonky");
}

function growSlow(){
    var elements = document.getElementsByClassName("movable");
    elements[3].classList.toggle("growSlow");
    
}