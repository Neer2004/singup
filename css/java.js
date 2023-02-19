const banner = document.querySelector("#popup-banner");
const closeButton = document.querySelector("#banner-close");

closeButton.addEventListener("click", function() {
  banner.style.display = "none";
});

setTimeout(function() {
  banner.style.display = "flex";
}, 2000);
