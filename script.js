var mainText = document.querySelector(".main-text");
var leftIcon = document.querySelector(".left");
var rigthIcon = document.querySelector(".right");



var randomPlayerOne = Math.floor(Math.random() * 6) + 1;
var randomPlayerTwo = Math.floor(Math.random() * 6) + 1;

if (randomPlayerOne > randomPlayerTwo){
    mainText.innerHTML = "Player 1 Won";
    leftIcon.setAttribute("style", "visibility: visible");

} else if(randomPlayerTwo > randomPlayerOne){
    mainText.innerHTML = "Player 2 Won";
    rigthIcon.setAttribute("style", "visibility: visible");
} else {
    mainText.innerHTML = "Draw";
}

if (randomPlayerOne === 1){
    document.querySelector(".left-img").setAttribute("src", "images/dice1.png");
}

if (randomPlayerOne === 2){
    document.querySelector(".left-img").setAttribute("src", "images/dice2.png");
}

if (randomPlayerOne === 3){
    document.querySelector(".left-img").setAttribute("src", "images/dice3.png");
}

if (randomPlayerOne === 4){
    document.querySelector(".left-img").setAttribute("src", "images/dice4.png");
}

if (randomPlayerOne === 5){
    document.querySelector(".left-img").setAttribute("src", "images/dice5.png");
}

if (randomPlayerOne === 6){
    document.querySelector(".left-img").setAttribute("src", "images/dice6.png");
}

if (randomPlayerTwo === 1){
    document.querySelector(".right-img").setAttribute("src", "images/dice1.png");
}

if (randomPlayerTwo === 2){
    document.querySelector(".right-img").setAttribute("src", "images/dice2.png");
}

if (randomPlayerTwo === 3){
    document.querySelector(".right-img").setAttribute("src", "images/dice3.png");
}

if (randomPlayerTwo === 4){
    document.querySelector(".right-img").setAttribute("src", "images/dice4.png");
}

if (randomPlayerTwo === 5){
    document.querySelector(".right-img").setAttribute("src", "images/dice5.png");
}

if (randomPlayerTwo === 6){
    document.querySelector(".right-img").setAttribute("src", "images/dice6.png");
}
