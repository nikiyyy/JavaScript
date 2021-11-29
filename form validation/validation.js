function validate(){
	//username validation
	if (document.getElementById("usernamename").value.length >= 9)
	{
		console.log("win1")
	}
	else
	{
		console.log("fail1")
	}
	
	//mail validation
	if (document.getElementById("mail").value.length > 10 && document.getElementById("mail").value.slice(-10) == "@gmail.com")
	{
		console.log("win2")
	}
	else
	{
		console.log("fail2")
	}
	
	//password validation
	if (document.getElementById("pass").value.length > 6)
	{
		console.log("win3")
	}
	else
	{
		console.log("fail3")
	}
	
	//repassword validation
	if (document.getElementById("repass").value == document.getElementById("pass").value)
	{
		console.log("win4")
	}
	else
	{
		console.log("fail4")
	}
	
	
}