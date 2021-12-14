//style
function menu()
{
    if (document.getElementById("options").style.display == "none"){
        document.getElementById("options").style.display = "inline";
    }
    else
    { 
        document.getElementById("options").style.display = "none";
    }
}

function start(){
    setInterval(function countdown()
    {
        if(document.getElementById("countdown").innerHTML > 0)
        {
            document.getElementById("countdown").innerHTML = parseInt(document.getElementById("countdown").innerHTML) - 1;
        }
        
    }
    ,1000);
    generateTask();
}

//functionality 
function generateTask()
{
    if (document.getElementById('very-easy').checked){
        var a = Math.ceil((Math.random(9))*9);
        var b = Math.ceil((Math.random(9))*9);
    }
    else if(document.getElementById('easy').checked){
        var a = Math.ceil((Math.random(99))*99);
        var b = Math.ceil((Math.random(99))*99);
    }
    else if(document.getElementById('medium').checked){
        var a = Math.ceil((Math.random(999))*999);
        var b = Math.ceil((Math.random(999))*999);
    }
    else if(document.getElementById('hard').checked){
        var a = Math.ceil((Math.random(9999))*9999);
        var b = Math.ceil((Math.random(9999))*9999);
    }
    else if(document.getElementById('very-hard').checked){
        var a = Math.ceil((Math.random(99999))*99999);
        var b = Math.ceil((Math.random(99999))*99999);
    }
    rightanswer = a+b;
    document.getElementById("task").innerHTML = a.toString() + "+" + b.toString();

}

function inputAnswer(){
    if(document.getElementById("countdown").innerHTML != 0){
    if (document.getElementById("inputtext").value == rightanswer)
    {
        document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 1;
    }
    else
    {
        document.getElementById("wrong").innerHTML = parseInt(document.getElementById("wrong").innerHTML) + 1;
    }
    generateTask()
    document.getElementById("inputtext").value = "";
    }
}

function setTime(){
    document.getElementById("countdown").innerHTML = document.getElementById("time").value ;
}
var rightanswer;

document.getElementById("options").style.display = "none";

document.getElementById("start").addEventListener("click", start);
document.getElementById("answer").addEventListener("click", inputAnswer);
document.getElementById("settime").addEventListener("click", setTime);
