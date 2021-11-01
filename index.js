var randomNumber = Math.floor(Math.random()*100+1);
var changeNumber = document.querySelector(".firstHeding").innerHTML = randomNumber+"% ❤️";

if(randomNumber>=80){
    document.querySelector("h2").innerHTML = "congratulations 😍";
}

else if(randomNumber<30){
    document.querySelector("h2").innerHTML = "Another Try 😋";
}

else if(randomNumber<80){
    document.querySelector("h2").innerHTML = "Wow  😘";
}

function myFunction (){
    document.querySelector(".input1").style.display = "none";
    document.querySelector(".input2").style.display = "block";
    document.querySelector(".btn1").style.display = "block";
    document.querySelector(".btn").style.display = "none";
}

function myFunction1 (){
    document.querySelector(".input2").style.display = "none";
    document.querySelector(".btn1").style.display = "none";
    document.querySelector(".firstHeding").style.display = "block";
    document.querySelector("h2").style.display = "block";
    document.querySelector(".secondHeading").style.display = "none";
}

