const mainText = document.querySelector(".main-text");
const leftIcon = document.querySelector(".left");
const rigthIcon = document.querySelector(".right");


const randomPlayerOne = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
const randomPlayerTwo = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

document.querySelector(".left-img").setAttribute("src", randomPlayerOne);
document.querySelector(".right-img").setAttribute("src", randomPlayerTwo);



if (randomPlayerOne > randomPlayerTwo){
    mainText.innerHTML = "Player 1 Won";
    leftIcon.setAttribute("style", "visibility: visible");

} else if(randomPlayerTwo > randomPlayerOne){
    mainText.innerHTML = "Player 2 Won";
    rigthIcon.setAttribute("style", "visibility: visible");
} else {
    mainText.innerHTML = "Draw";
}
