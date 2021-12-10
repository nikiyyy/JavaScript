document.getElementById("search").style.display = "none";

function searchbutton(){
	if (document.getElementById("search").style.display == "none"){
		document.getElementById("search").style.display = "inline";
	}
	else if (document.getElementById("search").style.display == "inline" && !document.getElementById("search").value){
		document.getElementById("search").style.display = "none";
	}
	else if (document.getElementById("search").value){
		console.log(document.getElementById("search").value)
		document.getElementById("history").innerHTML += "<br />"+ document.getElementById("search").value ;
	}

}
