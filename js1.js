const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

//button initialisation

button1.onclick = Motivate;
button2.onclick = Swear;
button3.onclick = Nothing;
//functions

function Motivate(){
    button1.innerText="Dont give up";
}
function Swear(){
    button2.innerText="Fuck you";
}
function Nothing(){
    button3.innerText=".";
}
