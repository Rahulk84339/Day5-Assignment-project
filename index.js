window.onscroll = function () {
  if (window.pageYOffset > 10) {
    document.getElementById("header").style.backgroundColor = "#9b3d3d";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
};

var isNavVisible = false;

function shownav() {
  if (isNavVisible === false) {
    document.getElementById("nav").style.height = "290px";
    isNavVisible = true;
  } else {
    document.getElementById("nav").style.height = "0px";
    isNavVisible = false;
  }
}
