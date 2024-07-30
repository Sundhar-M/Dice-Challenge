// alert("working");
var ranNum1 = Math.floor(Math.random()*6)+1;
var ranDiceImg1 = "dice"+ranNum1+".png";
var randomImgSrc1 = "images/"+ranDiceImg1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc1);


var ranNum2 = Math.floor(Math.random()*6)+1;
var ranDiceImg2 = "dice"+ranNum2+".png";
var randomImgSrc2 = "images/"+ranDiceImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSrc2);

if(ranNum1 > ranNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} 
else if(ranNum1 < ranNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else{
    document.querySelector("h1").innerHTML = "DRAW!";
}