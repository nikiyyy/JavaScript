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
    //initialisation
    document.getElementById("score").innerHTML = "0";
    document.getElementById("wrong").innerHTML = "0";
    document.getElementById("countdown").innerHTML = document.getElementById("time").value ;
    
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);

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

    while (true){
        operation = Math.ceil((Math.random(4))*4);

        if (operation == 1 && document.getElementById('summation').checked){
            rightanswer = a+b;
            document.getElementById("task").innerHTML = a.toString() + " + " + b.toString();
            break;
        }
        else if(operation == 2 && document.getElementById('subtraction').checked){
            rightanswer = a-b;
            document.getElementById("task").innerHTML = a.toString() + " - " + b.toString();
            break;
        }
        else if(operation == 3 && document.getElementById('multiplication').checked){
            rightanswer = a*b;
            document.getElementById("task").innerHTML = a.toString() + " * " + b.toString();
            break;
        }
        else if(operation == 4 && document.getElementById('division').checked){
            rightanswer = a/b;
            document.getElementById("task").innerHTML = a.toString() + " / " + b.toString();
            break;
        }

    
    }

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
