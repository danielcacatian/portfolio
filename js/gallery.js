// <!-- WORKS GALLERY SCRIPT --------------------------------------------------------------------------------------------->
// Hover effect
$(document).ready(function () {
  // Lazy load images
  $(".artwork-image img").each(function () {
    $(this).attr("loading", "lazy");
  });

  $(".artwork-image").hover(
    function () {
      $(this)
        .siblings(".artwork-title")
        .find(".artwork-slash, .artwork-name")
        .fadeIn(250);
    },
    function () {
      $(this)
        .siblings(".artwork-title")
        .find(".artwork-slash, .artwork-name")
        .fadeOut(250);
    }
  );
});

// Showcase gallery in view
$(document).ready(function () {
  // Initially hide all artwork images
  $(".artwork").css({ opacity: 0 });

  // Function to reveal artwork images on scroll
  function revealArtwork() {
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let scrollBottom = scrollTop + windowHeight;
    let offset = 200; // buffer space

    $(".artwork").each(function () {
      let $artwork = $(this);
      let elementTop = $artwork.offset().top;
      let elementBottom = elementTop + $artwork.outerHeight();

      // Check if element is within viewport, accounting for offset
      let inView =
        elementBottom > scrollTop + offset &&
        elementTop < scrollBottom - offset;

      if (inView) {
        $artwork.stop(true, true).fadeTo(0, 1).css("pointer-events", "auto");
      } else {
        $artwork.stop(true, true).fadeTo(0, 0).css("pointer-events", "none");
      }
    });
  }

  $(window).on("scroll", revealArtwork);
  revealArtwork(); // Run once in case some images are already in view
});

// Gallery filtering
$(document).ready(function () {
  // Set initial active filter and opacity
  $(".works-gallery").not(".digital-art").css({
    transform: "translateX(100%)",
    opacity: 0,
  });

  // Handle filter item click
  $(".filter-item").click(function () {
    const filterType = $(this).data("filter");

    // Add active class to clicked item and remove from others
    $(".filter-item").removeClass("active");
    $(this).addClass("active");

    // Slide out current gallery and slide in the new one
    const currentGallery = $(".works-gallery:visible");
    const newGallery = $("." + filterType);

    // Fade out current gallery and slide it out
    currentGallery
      .css({
        transform: "translateX(100%)",
        opacity: 0.5,
      })
      .animate(
        {
          transform: "translateX(0)",
          opacity: 0,
        },
        250
      );

    // Fade in the new gallery and slide it in
    newGallery
      .css({
        transform: "translateX(0%)",
        opacity: 0.5,
      })
      .animate(
        {
          transform: "translateX(100%)",
          opacity: 1,
        },
        250
      );
  });
});
