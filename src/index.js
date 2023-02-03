let upButton = document.querySelector(".upbutton");

window.onscroll = function () {
  if (window.pageYOffset > 900) {
    upButton.classList.remove("visually-hidden");
  } else {
    upButton.classList.add("visually-hidden");
  }
};

upButton.addEventListener("click", function (evt) {
  window.scrollBy({
    top: -window.pageYOffset,
    behavior: "smooth"
  });
});
