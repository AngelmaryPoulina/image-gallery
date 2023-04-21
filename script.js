var popup = document.getElementById("overlay");
function showpop(elem) {
  document.getElementById("popImage").src = elem.src;
  popup.style.display = "flex";
}
function hidePop() {
  popup.style.display = "none";
}