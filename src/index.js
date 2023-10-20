
//Paris
let ParisElement = document.querySelector("#Paris");
let ParisDateElement= ParisElement.querySelector(".date")
let ParisTimeElement= ParisElement.querySelector(".time");

let ParisTime = moment();

ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");

ParisTimeElement.innerHTML= ParisTime.format(
    "h:mm:ss [<small>]A[</small>]");

//
