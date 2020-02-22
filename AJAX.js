function display(){
    alert("made it");
    var key = "c14a711c";
    var url = "http://www.omdbapi.com/?apikey=[c14a711c]&";
    //might need to remove brackets around key^
//http://www.omdbapi.com/?apikey=c14a711c&t=star+wars

    



}


function getWeather(city, country){

    

    const apiKey = "081ff0cf85a3a31024f8fac0a6142051";

    var urlRequest = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;

    weatherRequest(urlRequest);

}



// WEATHERREQUEST

// function - uses AJAX to request current weather from input city - console logs data.

function weatherRequest(urlRequest) {



    var xhttp = new XMLHttpRequest();   

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {

       

        console.log(this.responseText);

       var obj = JSON.parse(this.responseText);

       console.log(obj);

      }

    };

    xhttp.open("GET", urlRequest, true);

    xhttp.send();

  }
</script>