function establishRectangle() {

    var width = ((Math.random() * 100));
    //console.log(width);
    var height = ((Math.random() * 100));
    //console.log(height);
    var locationX = (Math.random() * 300);
    var locationY = (Math.random() * 300);
    var rectangle = {
        width: width,
        height: height,
        locationX: locationX,
        locationY: locationY,
        color: getRandomColor()
    };
    //console.log(rectangle.color);
    drawRectangle(rectangle);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function drawRectangle(rectangle) {



    var c = document.getElementById("drawSpace");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    var colorString = rectangle.color;
    ctx.fillStyle = rectangle.color;





    ctx.fillRect(rectangle.locationX, rectangle.locationY, rectangle.width, rectangle
        .height); //replace numbers with rectangle object
    ctx.stroke();
}



function drawCircle() {
    var location =  ((Math.random() * 500));
    var height =  ((Math.random() * 300));
    var size = ((Math.random() * 150));

    var c = document.getElementById("drawSpace");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(location, height, size, 0, 2 * Math.PI);
    ctx.stroke();
}