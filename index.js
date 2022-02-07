// For left image element
var randomVariable1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomVariable1 + ".png";    //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;    //images/dice1.png - images/dice6.png

// Change source attribute of both left and right images to this randomly generated source
var image1 = document.querySelectorAll("img")[0]; //querySelectorAll coz we have to select both images
image1.setAttribute("src", randomImageSource);   //setAttribute(what you wanna change, change into?)


// For right image element same steps
var randomVariable2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomVariable2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Changing h1 text depending on the winner
if(randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}else if(randomVariable2 > randomVariable1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}