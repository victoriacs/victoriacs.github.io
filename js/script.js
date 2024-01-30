function heart() {
  var clicked = false;
  $("i").hover(
    function () {
      if (!clicked) {
        if ($(this).hasClass("bi-heart")) {
          $(this).toggleClass("bi-heart bi-heart-fill");
        }
      }
    },
    function () {
      if (!clicked) {
        if ($(this).hasClass("bi-heart-fill")) {
          $(this).toggleClass("bi-heart-fill bi-heart");
        }
      }
    }
  );

  $("i").on("click", function () {
    if (clicked) {
      $(this).toggleClass("bi-heart-fill bi-heart");
    }
    clicked = !clicked;
  });
}

$(document).ready(function () {
  heart();
});
