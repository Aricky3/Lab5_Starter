// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  if(document.getElementById("horn-select").value == "car-horn"){
    document.getElementsByTagName("img")[0].src = "assets/images/car-horn.svg"; /*img stored in 2D arr */
    document.getElementsByTagName("audio")[0].src = "assets/audio/car-horn.mp3";
    var x = document.querySelector("#volume-controls input");
    if(x.value == 0){
      document.getElementsByTagName("img")[1].src = "assets/icons/volume-level-0.svg";
    }
    var b = document.getElementsByTagName("button");
    b.addEventListener("click",play);
    function play(){
      document.getElementsByTagName("audio").src.play();
    }
  }
}