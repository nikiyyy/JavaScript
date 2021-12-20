function changeBG(a){
  // resets color of buttons
  document.getElementById("btn1").style.backgroundColor = "white";
  document.getElementById("btn2").style.backgroundColor = "white";
  document.getElementById("btn3").style.backgroundColor = "white";
  document.getElementById("btn4").style.backgroundColor = "white";

  if (a == "n"){
    let newA = parseInt(document.getElementById("root").style.backgroundImage.slice(12, 13))+1;
    if (newA > 4){ 
      document.getElementById("root").style.backgroundImage = "url('./bg/bg1.png')"
      document.getElementById("btn1").style.backgroundColor = "blue";
    }
    else{
      document.getElementById("root").style.backgroundImage = "url('./bg/bg"+ newA +".png')"
      document.getElementById("btn"+ newA).style.backgroundColor = "blue";
    }
    
  }
  else if(a == "b"){
    let newA = parseInt(document.getElementById("root").style.backgroundImage.slice(12, 13))-1;
    if (newA < 1){ 
      document.getElementById("root").style.backgroundImage = "url('./bg/bg4.png')"
      document.getElementById("btn4").style.backgroundColor = "blue";
    }
    else{
      document.getElementById("root").style.backgroundImage = "url('./bg/bg"+ newA +".png')"
      document.getElementById("btn"+ newA).style.backgroundColor = "blue";
    }
  }
  else{

    document.getElementById("root").style.backgroundImage = "url('./bg/bg"+ a +".png')";
    document.getElementById("btn"+ a).style.backgroundColor = "blue";
  }
}

// resets bg to 1
document.getElementById("root").style.backgroundImage = "url('./bg/bg1.png')"
document.getElementById("btn1").style.backgroundColor = "blue";
setInterval(changeBG.bind(null,"n"),6000);


document.getElementById("backBtn").addEventListener("click",changeBG.bind(null,"b") );
document.getElementById("frontBtn").addEventListener("click",changeBG.bind(null,"n") );
document.getElementById("btn1").addEventListener("click",changeBG.bind(null,"1") );
document.getElementById("btn2").addEventListener("click",changeBG.bind(null,"2") );
document.getElementById("btn3").addEventListener("click",changeBG.bind(null,"3") );
document.getElementById("btn4").addEventListener("click",changeBG.bind(null,"4") );