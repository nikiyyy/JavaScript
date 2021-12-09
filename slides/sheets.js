function box1Activate(){
    console.log("box1Activate");
    b3.style.flex=0.1
    b2.style.flex=0.1
    b1.style.flex=0.2

}

function box2Activate(){
    console.log("box2Activate");
    b3.style.flex=0.1
    b2.style.flex=0.2
    b1.style.flex=0.1
}

function box3Activate(){
    console.log("box3Activate");
    b3.style.flex=0.2
    b2.style.flex=0.1
    b1.style.flex=0.1
}
var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");

b1.addEventListener("click", box1Activate);
b2.addEventListener("click", box2Activate);
b3.addEventListener("click", box3Activate);
