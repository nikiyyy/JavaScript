function fileRead(){
    console.log("1");
}

function nextQuestion(){
    console.log("2");
}

function prevQuestion(){
    console.log("3");
}

document.getElementById('file-selector')
.addEventListener('change', function() {
  
var fr=new FileReader();
fr.onload=function(){
    console.log(fr.result);
}
  
fr.readAsText(this.files[0]);
})

document.getElementById("prev").addEventListener("click", fileRead );
document.getElementById("next").addEventListener("click", fileRead );