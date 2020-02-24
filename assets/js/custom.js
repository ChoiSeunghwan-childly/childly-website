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
      "contact"
    ],
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
  onBackModal();
}
