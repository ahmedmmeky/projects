// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggleBtn.addEventListener("click", function () {
  /*if (!links.classList.contains("show-links")) {
    links.classList.add("show-links");
  } else {
    links.classList.remove("show-links");
  }*/
  //or use a one liner that will do the same thing
  links.classList.toggle("show-links");
});
