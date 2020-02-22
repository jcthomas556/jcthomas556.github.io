function changeFont(){
    document.getElementById("h1").style.fontFamily = "Impact,Charcoal,sans-serif"; 
}

function changeColor(){
    document.getElementById("rectangle").style.border="3px solid #0000FF"
}

function changeWidth(){
    document.getElementById("rectangle").style.width="1000px"
}

function changeRadius(){
    document.getElementById("circle").style.height="200px";
    document.getElementById("circle").style.width="200px";
}

function changeBackgroundColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        
    }
  document.body.style.backgroundColor = color;
}

function changeSkew(){
    document.getElementById("rectangle").style.transform = "rotate(7deg)";
   
}

function changeSize(){
    document.getElementById("rectangle").style.width="1000px"
    document.getElementById("rectangle").style.height="230px"
}

function changeBorder(){
    document.getElementById("rectangle").style.border="15px solid #000"
}

