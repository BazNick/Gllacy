var find = document.querySelector(".how-to-find-us a");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".close");
var overlay = document.querySelector(".overlay");


find.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("feedback-show");
overlay.classList.add("overlay-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
  popup.classList.remove("feedback-show");
  overlay.classList.remove("overlay-show");
}
});

overlay.addEventListener("click", function(event) {
  popup.classList.remove("feedback-show");
  overlay.classList.remove("overlay-show");
});
