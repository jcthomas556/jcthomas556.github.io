  function display() {

            var userInput = document.getElementById("mName").value;

            var url = "http://www.omdbapi.com/?apikey=c14a711c&t=" + userInput;


            
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
