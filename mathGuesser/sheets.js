//document.getElementById("menu").style.display = "none";
//style
function menu()
{

    if (document.getElementById("menu").style.display == "none"){
        console.log("eyrteyt");
        document.getElementById("menu").style.display = "inline";
    }
    else
    { 
        document.getElementById("menu").style.display = "none";
    }
}

//functionality
function getTask()
{
    console.log(Math.floor((Math.random(5))*5));
}