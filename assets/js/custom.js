$(document).ready(function() {
  $("#fullpage").fullpage({
    //options here
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 700,
    scrollHorizontally: true,
    scrollBar: true,
    anchors: [
      "home",
      "service",
      "press",
      "history",
      "gallery",
      "careers",
      "contact",
      "footer"
    ],
    afterLoad: paint,
    lazyLoading: true
  });
});

function onClickBackModal() {
  var modalElement = document.getElementById("back-modal");
  var element1 = document.getElementById("service-minigpoolhub-more-info");
  var element2 = document.getElementById("service-dovewallet-more-info");
  var element3 = document.getElementById("sub-menu-bar");
  var navToggler = document.getElementById("navbar-toggler");

  element1.classList.remove("show");
  element2.classList.remove("show");
  element3.classList.remove("show");
  modalElement.classList.remove("on");
  navToggler.classList.remove("active");
}

function onBackModal() {
  var modalElement = document.getElementById("back-modal");
  modalElement.classList.add("on");
}

function subMenuToggle() {
  var element = document.getElementById("sub-menu-bar");
  var navToggler = document.getElementById("navbar-toggler");
  element.classList.toggle("show");
  navToggler.classList.remove("active");
  onBackModal();
}

function dovewalletMoreInfoToggle() {
  var element = document.getElementById("service-dovewallet-more-info");
  element.classList.toggle("show");
  onBackModal();
}

function minigpoolhubMoreInfoToggle() {
  var element = document.getElementById("service-minigpoolhub-more-info");
  element.classList.toggle("show");

  for (let i = 0; i < 40; i++) console.log(fibo(i));
  onBackModal();
}

function fibo(n) {
  if (n <= 1) return 1;
  else return fibo(n - 1) + fibo(n - 2);
}

//////////////////////////////////////////////////////

// var button = document.getElementById("refresh");

var paint = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  let height = document.body.scrollHeight;
  let width = document.body.scrollWidth;

  if (canvas.height === height) return;
  canvas.height = height;
  canvas.width = width;
  ctx.clearRect(0, 0, width, height);
  for (i = 0; i < 30; i++) {
    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);
    var radius = Math.floor(Math.random() * 400);

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
    ctx.fill();
    ctx.closePath();
  }
};

// setTimeout(paint, 4);
// button.addEventListener("click", refresh, false);
