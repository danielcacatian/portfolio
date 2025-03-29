// <!-- NAVIGATION BAR SCRIPT --------------------------------------------------------------------------------------------->
// Navbar dissapears than reappears
$(document).ready(function () {
    let navbar = $(".navbar");
    navbar.hide();

    $(window).on("scroll", function () {
      let sectionOffset = $("#works").offset().top;
      let scrollPos = $(window).scrollTop();

      if (scrollPos >= sectionOffset) {
        navbar.slideDown(250);
      } else {
        navbar.slideUp(250);
      }
    });
  });