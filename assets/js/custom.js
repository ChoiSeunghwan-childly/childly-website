// $(document).ready(function() {
//   $("#fullpage").fullpage({
//     //options here
//     licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
//     autoScrolling: true,
//     fitToSection: true,
//     fitToSectionDelay: 700,
//     scrollHorizontally: true,
//     scrollBar: true,
//     anchors: [
//       "home",
//       "service",
//       "press",
//       "history",
//       "gallery",
//       "careers",
//       "contact",
//       "footer"
//     ]
//   });
// });

window.addEventListener("scroll", progressBar);
function progressBar() {
  console.log('nhihi')
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('progress-bar').style.width = scrolled + "%";
  
}

function onClickBackModal() {
  var modalElement = document.getElementById("back-modal");
  var element1 = document.getElementById("service-minigpoolhub-more-text");
  var element2 = document.getElementById("service-dovewallet-more-text");
  var element3 = document.getElementById("sub-menu-bar");
  var element4 = document.getElementById("careers-more-text");
  
  var navToggler = document.getElementById("navbar-toggler");

  element1.classList.remove("show");
  element2.classList.remove("show");
  element3.classList.remove("show");
  element4.classList.remove("show");
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
  console.log('why?', navToggler.classList);
  onBackModal();
}

function dovewalletMoreTextToggle() {
  var element = document.getElementById("service-dovewallet-more-text");
  element.classList.toggle("show");
  onBackModal();
}

function minigpoolhubMoreTextToggle() {
  var element = document.getElementById("service-minigpoolhub-more-text");
  element.classList.toggle("show");
  onBackModal();
}


function careersMoreTextToggle() {
  var element = document.getElementById("careers-more-text");
  element.classList.toggle("show");
  onBackModal();
}