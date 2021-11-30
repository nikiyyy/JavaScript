//only one flag can be raised at a time
//the flag determens wich opertaion will be performed
var nextNumber_Flag=false;
var plus_Flag=false;
var minus_Flag=false;
var multiply_Flag=false;
var devide_Flag=false;

//stored the firstNumber
var firstNumber=0;
var secondNumber=0;

console.log("gfddg");
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
	clearAllFlags();
	firstNumber=0;
}

function deleteAll(){
	document.getElementById("output").innerHTML = "0";
	clearAllFlags();
	firstNumber=0;
}

// arethmethic operations
function addNumbers(){
	clearAllFlags();
	plus_Flag=true;
	firstNumber=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = 0;
}

function subtractNumbers(){
	clearAllFlags();
	minus_Flag=true;
	firstNumber=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = 0;
}

function devideNumbers(){
	clearAllFlags();
	devide_Flag=true;
	firstNumber=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = 0;

}

function multiplyNumbers(){
	clearAllFlags();
	multiply_Flag=true;
	firstNumber=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = 0;
}

function squareroot(){
	document.getElementById("output").innerHTML = Math.sqrt(document.getElementById("output").innerHTML)
	document.getElementById("output").innerHTML = document.getElementById("output").innerHTML.slice(0,9);
}

function calculate(){
	if(plus_Flag){
		document.getElementById("output").innerHTML = parseInt(firstNumber) + parseInt(document.getElementById("output").innerHTML);
	}
	else if(minus_Flag){
		document.getElementById("output").innerHTML = parseInt(firstNumber) - parseInt(document.getElementById("output").innerHTML);
	}
	else if(multiply_Flag){
		document.getElementById("output").innerHTML = parseInt(firstNumber) * parseInt(document.getElementById("output").innerHTML);
	}
	else if(devide_Flag){
		document.getElementById("output").innerHTML = parseInt(firstNumber) / parseInt(document.getElementById("output").innerHTML);
	}
	if (document.getElementById("output").innerHTML.length > 8){
		document.getElementById("output").innerHTML = 99999999
	}
	
}

