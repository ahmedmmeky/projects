//set initial count to 0
let count = 0;

// select value for the counter
const value = document.querySelector("#value");

//select an array of all of the buttons that have a class btns
const btns = document.querySelectorAll(".btn");

//for each button in the class of .btn
btns.forEach(function (btn) {
    //listen for a click event for any of the buttons that have a class btn
    btn.addEventListener("click", function(event){
        //event.currentTarget gets the entire button decleration
        //the .classList gets all of the classes of a certain element 
        //when a click happens, set the chosenButton equal to the button that it 
        //belong's to's classList
        const chosenButton = event.currentTarget.classList;
        if (chosenButton.contains("decrease")){
            count--;
        }
        else if (chosenButton.contains("increase")){
            count++;
        }else {
            count = 0;
        }
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})