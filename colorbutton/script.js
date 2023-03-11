var index = 0;
function changeBack() {
  var colour = [
    "blue",
    "red",
    "purple",
    "plum",
    "peru",
    "gold",
    "green",
    "gray",
  ];
  if (colour.length === index) {
    index = 0;
  }
  document.getElementsByTagName("body")[0].style.background = colour[index++];
}

document
  .querySelector(".btn.btn-primary")
  .addEventListener("click", function () {
    changeBack();
  });
