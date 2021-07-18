window.onscroll = function () {
    if (window.pageYOffset > 10) {
        document.getElementById('header').style.backgroundColor = "#9B3D3D";
    }
    else {
        document.getElementById('header').style.backgroundColor = "transparent";
    }
};

