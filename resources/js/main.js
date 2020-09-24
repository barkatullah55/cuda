$(document).ready(function () {
  //STICKY MENU
  $(".js--services-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  //ACTIVE LINK
  $(document).on("click", "nav ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(document).on("click", "nav a img.logo", function () {
    $("nav ul li").removeClass("active");
    $("nav ul li:first-child").addClass("active");
  });

  //MIXITUP - (PORTFOLIO SECTION)
  var mixer = mixitup(".mixitup");

  //SMOOTH SCROLL FOR IE/ EDGE/ SAFARI
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//MOBILE MENU
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
