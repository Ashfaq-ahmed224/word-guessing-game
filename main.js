const words = [
    "delhi",
    "hyderabad",
    "bangalore",
    "noida",
    "chennai",
    "pune",
    "kolkata",
    "mumbai"

];

let randomIndex = Math.floor(Math.random() * words.length);
let selectedword = words[randomIndex];
console.log(selectedword);


let guessedlist = [];

let displayword = "";
for (let i = 0; i < selectedword.length; i++) {
    displayword += "_ ";

}

document.getElementById("displayword").textContent = displayword;

function guessletter() {
    let inputElement = document.getElementById("letter-input");
    if (!inputElement.value) {
        alert("Empty. please enter the letter");
        return;
    }

    let letter = inputElement.value.tolowerCase();
    inputElement.value = "";


    if (guessedlist.includes(letter)) {
        alert("the letter has been guessed!");
        return;
    }
    guessedlist.push(letter);

    let updatedDisplay = "";
    let allletterGuessed = "true";
    for (let i = 0; i < selectedword.length; i++) {
        if (guessedlist.includes(selectedword[i])) {
            updatedDisplay += selectedword[i] + "";

        } else {
            updatedDisplay += "";
            allletterGuessed = false;
        }
    }

    document.getElementById("displayword").textContent = updatedDisplay;

    if (allletterGuessed) {
        alert("guess right")
    }


}



