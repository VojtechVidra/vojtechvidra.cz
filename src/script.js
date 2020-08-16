window.addEventListener("load", function(e) {
  // add smooth scroll events to anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // add fixed class to menu with scroll
  window.addEventListener("scroll", function(e) {
    if (pageYOffset >= window.innerHeight / 2 - 50 && pageYOffset >= 350) {
      document
        .querySelector(".navbar-default")
        .classList.add("navbar-fixed-top");
    } else {
      document
        .querySelector(".navbar-default")
        .classList.remove("navbar-fixed-top");
    }
  });
});
