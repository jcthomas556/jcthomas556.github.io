function display() {

    var userInput = document.getElementById("mName").value;

    var url = "api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=2a305cfee9eeaa017e35ea84424ffccc";

    
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);
            console.log(obj);

            var result = JSON.stringify(obj);
            document.getElementById("movieBox").innerText = result;
        }
    };

    
    xhttp.open("GET", url, true);

    xhttp.send();




}
