var couter=0;
function addtolist()
{
	document.getElementById("todolist").innerHTML += "<div class='task' id="+"task-"+couter+">" + document.getElementById("input").value + " <button class='DelButton' type='button' onclick="+ "deleteTask("+"\"task-"+ couter +"\")"+">🗑️</button>" + "</div>";
	couter++;
}

function deleteTask(task){
	document.getElementById(task).remove();
}