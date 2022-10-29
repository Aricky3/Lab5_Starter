// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById("horn-select");
  selectElement.addEventListener("click", change);
  const ele = document.getElementsByTagName("button");
  ele.addEventListener("click",audio)
  function change() {
    /*Car Horn*/
    if (document.getElementById("horn-select").value == "car-horn") {
      document.getElementsByTagName("img")[0].src = "assets/images/car-horn.svg"; /*img stored in 2D arr */
      document.getElementsByTagName("audio")[0].src = "assets/audio/car-horn.mp3";
      var x = document.querySelector("#volume-controls input");
      if (x.value == 0) {
        document.getElementsByTagName("img")[1].src = "assets/icons/volume-level-0.svg";
      }
    }
    /*Air Horn*/
    if (document.getElementById("horn-select").value == "air-horn") {
      document.getElementsByTagName("img")[0].src = "assets/images/air-horn.svg"; /*img stored in 2D arr */
      document.getElementsByTagName("audio")[0].src = "assets/audio/air-horn.mp3";
      var x = document.querySelector("#volume-controls input");
      if (x.value == 0) {
        document.getElementsByTagName("img")[1].src = "assets/icons/volume-level-0.svg";
      }
    }
    /*Party Horn */
    if (document.getElementById("horn-select").value == "party-horn") {
      document.getElementsByTagName("img")[0].src = "assets/images/party-horn.svg"; /*img stored in 2D arr */
      document.getElementsByTagName("audio")[0].src = "assets/audio/party-horn.mp3";
      var x = document.querySelector("#volume-controls input");
      if (x.value == 0) {
        document.getElementsByTagName("img")[1].src = "assets/icons/volume-level-0.svg";
      }
    }
  }
  function audio(){
    document.getElementsByTagName("audio")[0].src.play();
  }
  // if (document.getElementById("horn-select").value == "car-horn") {
  //   document.getElementsByTagName("img")[0].src = "assets/images/car-horn.svg"; /*img stored in 2D arr */
  //   document.getElementsByTagName("audio")[0].src = "assets/audio/car-horn.mp3";
  //   var x = document.querySelector("#volume-controls input");
  //   if (x.value == 0) {
  //     document.getElementsByTagName("img")[1].src = "assets/icons/volume-level-0.svg";
  //   }

  // }
}