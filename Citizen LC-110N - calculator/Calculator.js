
var nextNumber_Flag=false;
var plus_Flag=false;
var minus_Flag=false;
var multiply_Flag=false;
var devide_Flag=false;
var firstNumber=0;

function clearAllFlags(){
	nextNumber_Flag=false;
	plus_Flag=false;
	minus_Flag=false;
	multiply_Flag=false;
	devide_Flag=false;
}

function appendToScreen(a)
{
	if (document.getElementById("output").innerHTML.length == 1 && document.getElementById("output").innerHTML == 0)
	{
		document.getElementById("output").innerHTML=a;
		return
	}
	
	if (document.getElementById("output").innerHTML.length != 0 && document.getElementById("output").innerHTML.length <8)
	{
		document.getElementById("output").innerHTML = document.getElementById("output").innerHTML += a;
	}
}

function tirnOff(){
	document.getElementById("output").innerHTML = "";
	clearAllFlags()
	firstNumber=0;
}

function deleteAll(){
	document.getElementById("output").innerHTML = "0";
	clearAllFlags()
	firstNumber=0;
}

function addNumbers(){
	clearAllFlags()
	plus_Flag=true;
	firstNumber=document.getElementById("output").innerHTML
	document.getElementById("output").innerHTML = 0
}

function subtractNumbers(){
	clearAllFlags()
	minus_Flag=true;
	firstNumber=document.getElementById("output").innerHTML
	document.getElementById("output").innerHTML = 0
}

function calculate(){
	if(plus_Flag){
		document.getElementById("output").innerHTML = parseInt(document.getElementById("output").innerHTML) + parseInt(firstNumber)
	}
}

