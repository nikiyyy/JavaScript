function generateGrid(){
    
    document.getElementById("control").style.display = "none";
    document.getElementById("board").style.display = "inline-block";

    for(
        i=0;
        i < document.getElementById("size").value;
        i++
        ){
            document.getElementById("table").innerHTML += "<tr>"
            for(
                j=0;
                j < document.getElementById("size").value;
                j++
                ){
                    document.getElementById("table").innerHTML += '<button id="box"></button>';
                }
            document.getElementById("table").innerHTML += "</tr>"
        }
    //document.getElementById("table").innerHTML += "<div class='task' id="+"task-"+couter+">" + document.getElementById("input").value + " <button class='DelButton' type='button' onclick="+ "deleteTask("+"\"task-"+ couter +"\")"+">🗑️</button>" + "</div>";
	//couter++;
}

function hoverStart(){
    console.log("hh")
}
function hoverEnd(){
    console.log("ii")
}

document.getElementById("genButton").addEventListener("click",generateGrid);
//document.getElementById("box").addEventListener("click",hoverStart);
//document.getElementById("box").addEventListener("mouseenter",hoverStart);
//document.getElementById("box").addEventListener("mouseleave",hoverEnd);