function growText() {
    var element = document.getElementById("p1");
    element.classList.toggle("transition");
  }

  function endClick(){
    var element = document.getElementById("p1");
    element.classList.toggle("color");
    //var ele2 = document.getElementById("body");
    //ele2.classList.toggle("div");
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    var element = document.getElementById("body");
    element.classList.toggle("div");
    //console.log('DOM fully loaded and parsed');
});
