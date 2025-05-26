$(document).ready(function () {
  const images = [
    "../assets/images/name_logo1.png",
    "../assets/images/name_logo2.png",
    "../assets/images/name_logo3.png"
  ];

  let index = 0;
  const frameRate = 250// in milliseconds (1000ms = 1 second)

  setInterval(function () {
    index = (index + 1) % images.length; // Cycle back to 0 after the last image
    $(".home-name").attr("src", images[index]);
  }, frameRate);
});

$(document).ready(function () {
  const images = [
    "../assets/images/name1.png",
    "../assets/images/name2.png",
    "../assets/images/name3.png"
  ];

  let index = 0;
  const frameRate = 250// in milliseconds (1000ms = 1 second)

  setInterval(function () {
    index = (index + 1) % images.length; // Cycle back to 0 after the last image
    $(".name-cycle").attr("src", images[index]);
  }, frameRate);
});