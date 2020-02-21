$(document).ready(function() {
  $('#fullpage').fullpage({
      //options here
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true,
      scrollHorizontally: true,
      scrollBar: true
  });
});

function dovewalletMoreInfoToggle() {
  var element = document.getElementById('service-dovewallet-more-info');
  element.classList.toggle("show");
}

function minigpoolhubMoreInfoToggle() {
  var element = document.getElementById('service-minigpoolhub-more-info');
  element.classList.toggle("show");
}