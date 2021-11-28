function inc_element(){
	let onScreenVar = parseInt(document.getElementById("number").innerHTML);
	document.getElementById("number").innerHTML = onScreenVar +=1 ;
}
function dec_element(){
	let onScreenVar = parseInt(document.getElementById("number").innerHTML);
	document.getElementById("number").innerHTML = onScreenVar -=1 ;
}
function null_element(){
	document.getElementById("number").innerHTML = 0;
}

//parseInt(document.getElementById("number").innerHTML)+=1