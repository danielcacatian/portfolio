// mousedown backup
$(document).on("mousedown", ".arrow", function (e) {
  if (e.which === 2) {
    e.preventDefault();
    console.log("Middle click blocked on mousedown");
  }
});

// auxclick for modern browsers
$(document).on("auxclick", ".arrow", function (e) {
  if (e.button === 1) {
    e.preventDefault();
    console.log("Middle click blocked on auxclick");
  }
});
