const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//gets the button element by its id
const btn = document.getElementById("btn");

//gets the first class or id that matches with this (if there are
//multiple it will get the first one)
// in this case we are getting the color of the hex symbol
const color = document.querySelector(".color");

//addEventListener looks for an event on the page
// in this case we are looking for a click
// when this click happens we want to change the color of the button
btn.addEventListener("click", function () {
  // get random # between 0 - 3
  const randomNumber = getRandomNumber();

  //get the style of the body of the doc and change its background
  //color to a random value in the array
  document.body.style.backgroundColor = colors[randomNumber];

  //here you are setting the text that's attatched
  //to the color class to the textContent of the value at the array
  color.textContent = colors[randomNumber];
});

//you math.random will always be between 0 and 1 and never 1!!!
// to generaste a random number in a certain range multiply by a whole number
// use floor to round down to the closest integer
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
