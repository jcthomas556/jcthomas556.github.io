   var admin = false;
   var count = 0;
   var background = new Boolean();
   //alert(background);

   function establishRectangle() {
       var width = ((Math.random() * 100));
       //console.log(width);
       var height = ((Math.random() * 100));
       //console.log(height);
       var locationX = (Math.random() * 175);
       var locationY = (Math.random() * 175);
       var rectangle = {
           width: width,
           height: height,
           locationX: locationX,
           locationY: locationY,
           color: getRandomColor()
       };
       //console.log(rectangle.color);
       listColor(rectangle);
       drawRectangle(rectangle);

   }

   function listColor(rectangle) {
       var colorNode = document.createElement("LI");

       if (background == true) {

           message = (rectangle.color + " <- Background color")
           text = document.createTextNode(message);
           colorNode.appendChild(text);

           colorList = document.getElementById("colorList");

           colorList.insertBefore(colorNode, colorList.childNodes[0]).style.color = rectangle.color;
           document.getElementById("colorList").style.fontSize = "Large";
           //document.getElementById


       } else {
           message = (rectangle.color)
           text = document.createTextNode(message);
           colorNode.appendChild(text);


           document.getElementById("colorList").appendChild(colorNode).style.color = rectangle.color;
           document.getElementById("colorList").style.fontSize = "Large";
           background = false;
       }
   }

   function drawRectangle(rectangle) {



       var c = document.getElementById("drawSpace");
       var ctx = c.getContext("2d");
       ctx.beginPath();
       var colorString = rectangle.color;
       ctx.fillStyle = rectangle.color;


       if (background == true) { //this object inherits all the data but size and location is overwritten. Color is kept the same..
           rectangle.locationX = 1;
           rectangle.locationY = 1;
           rectangle.width = 200;
           rectangle.height = 200;
           background = false;
       }




       ctx.fillRect(rectangle.locationX, rectangle.locationY, rectangle.width, rectangle
           .height); //replace numbers with rectangle object
       ctx.stroke();
   }

   function getRandomColor() {
       var letters = '0123456789ABCDEF';
       var color = '#';
       for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }

       return color;

   }


   function makeRectangle() {
       count++;

       if (count < 3) {
           changeButtonText(); //maybe put a param here to demonstrate that?
           establishRectangle();
       } else {
           establishRectangle();
       }

   }



   function newAdminButton() {
       var btn = document.createElement("BUTTON");
       btn.innerHTML = "Administrative Rectangle Creation Device\n or ARCD for short";
       btn.onclick = function () {
           makeRectangle();
           var oldButton = document.getElementById("rectangleMaker");
           oldButton.parentNode.removeChild(oldButton);
       };
       document.body.appendChild(btn);
       admin = true;
   }


   function changeButtonText() {

       var newText = "Click again for another!";
       if (count > 1 && admin == false) {
           newText = "You have abused your clicking priveledges and will receive no more rectangles.";
           newAdminButton();

       }
       document.getElementById("rectangleMaker").innerHTML = newText;


   }

   function checkCount() {
       console.log(count);
       if (count > 1) {
           return;
       }
       makeRectangle();
   }

   function makeBackground() {

       background = true;
       establishRectangle();
   }