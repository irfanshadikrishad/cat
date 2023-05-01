function thanks() {
  document.getElementById("cat__thanks").style.display = "inline-block";
}
function hideThanks() {
  document.getElementById("cat__thanks").style.display = "none";
}
setInterval(hideThanks, 5000);

function mouseover() {
  document.getElementById("cat__i").style.top = "-30px";
}
function mouseout() {
  document.getElementById("cat__i").style.top = "-15px";
}
