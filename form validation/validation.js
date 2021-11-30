function validate(){
	//username validation  document.getElementById("usernamename").style.borderColor = "red"; 
	if (document.getElementById("usernamename").value.length >= 9)
	{
		document.getElementById("username_feedback").innerHTML = "Valid input";
		document.getElementById("username_feedback").style.color = "green";
		document.getElementById("usernamename").style.borderColor = "green"; 
	}
	else
	{
		document.getElementById("username_feedback").innerHTML = "Needs to be 9 characters or longer";
		document.getElementById("username_feedback").style.color = "red"; 
		document.getElementById("usernamename").style.borderColor = "red"; 
	}
	
	//mail validation
	if (document.getElementById("mail").value.length > 10 && document.getElementById("mail").value.slice(-10) == "@gmail.com")
	{
		document.getElementById("mail_feedback").innerHTML = "Valid input";
		document.getElementById("mail_feedback").style.color = "green";
		document.getElementById("mail").style.borderColor = "green"; 
	}
	else
	{
		document.getElementById("mail_feedback").innerHTML = "Needs to end with \"@gmail.com\"";
		document.getElementById("mail_feedback").style.color  = "red"; 
		document.getElementById("mail").style.borderColor = "red"; 
	}
	
	//password validation
	if (document.getElementById("pass").value.length >= 6)
	{
		document.getElementById("pass_feedback").innerHTML = "Valid input";
		document.getElementById("pass_feedback").style.color = "green";
		document.getElementById("pass").style.borderColor = "green"; 
	}
	else
	{
		document.getElementById("pass_feedback").innerHTML = "Needs to be 6 characters or longer";
		document.getElementById("pass_feedback").style.color = "red";
		document.getElementById("pass").style.borderColor = "red"; 
	}
	
	//repassword validation
	if (document.getElementById("repass").value == document.getElementById("pass").value && document.getElementById("pass").value.length >= 6)
	{
		document.getElementById("repass_feedback").innerHTML = "Valid input";
		document.getElementById("repass_feedback").style.color = "green";
		document.getElementById("repass").style.borderColor = "green"; 
	}
	else
	{
		document.getElementById("repass_feedback").innerHTML = "Passwords do not match";
		document.getElementById("repass_feedback").style.color = "red";
		document.getElementById("repass").style.borderColor = "red"; 
	}
	
	
}