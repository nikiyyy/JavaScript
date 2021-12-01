function toggleMenu(){
	//document.getElementsByClassName("button").style.display = "none";
	let buttons = document.getElementsByClassName("button");
	for(let i = 0; i < buttons.length;i++){
		if (buttons[i].style.display == "none"){
			buttons[i].style.display = "inline";
			document.getElementById("button").innerHTML = "Menu ▲";
		}
		else
		{
			buttons[i].style.display = "none";
			document.getElementById("button").innerHTML = "Menu ▼";
		}
	}
}