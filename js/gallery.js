// <!-- WORKS GALLERY SCRIPT --------------------------------------------------------------------------------------------->
// Hover effect
$(document).ready(function () {
  $(".artwork-image").hover(
    function () {
      $(this)
        .siblings(".artwork-title")
        .find(".artwork-slash, .artwork-name")
        .fadeIn(300);
    },
    function () {
      $(this)
        .siblings(".artwork-title")
        .find(".artwork-slash, .artwork-name")
        .fadeOut(300);
    }
  );
});

// Gallery filtering
$(document).ready(function() {
    // Set initial active filter and opacity
    $(".works-gallery").not(".digital-art").css({
      "transform": "translateX(100%)",
      "opacity": 0
    });

    // Handle filter item click
    $(".filter-item").click(function() {
      const filterType = $(this).data("filter");

      // Add active class to clicked item and remove from others
      $(".filter-item").removeClass("active");
      $(this).addClass("active");

      // Slide out current gallery and slide in the new one
      const currentGallery = $(".works-gallery:visible");
      const newGallery = $("." + filterType);

      // Fade out current gallery and slide it out
      currentGallery.css({
        "transform": "translateX(100%)",
        "opacity": 0.5
      }).animate({
        "transform": "translateX(0)",
        "opacity": 0
      }, 250);

      // Fade in the new gallery and slide it in
      newGallery.css({
        "transform": "translateX(0%)",
        "opacity": 0.5,
      }).animate({
        "transform": "translateX(100%)",
        "opacity": 1
      }, 250);
    });
  });
