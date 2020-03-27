function display() {
    var userInput = document.getElementById("mName").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=2a305cfee9eeaa017e35ea84424ffccc";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);

            console.log(obj.base);
            console.log(obj.weather[0].main);

            var result = JSON.stringify(obj);
            document.getElementById("weatherMain").innerText = obj.weather[0].main;
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();

    document.getElementById("searchTools").style.display = "none";

    //don't delete this. It's setting up the view so that it can be manipulated in screen changer
    var x = document.getElementById("GeneralWeather");
    x.style.display = "none";

    document.getElementById("refreshButton").style.display = "block";
    screenChanger();
}

function screenChanger() {
    var x = document.getElementById("GeneralWeather");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}