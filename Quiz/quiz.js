function nextQuestion(){
    if(parseInt(document.getElementById("MaxPosition").innerHTML) == parseInt(document.getElementById("CurPosition").innerHTML )){
        document.getElementById("quizPart").classList.add("inactive");
        document.getElementById("showScore").classList.remove("inactive");
        return
    }
    document.getElementById("CurPosition").innerHTML = parseInt(document.getElementById("CurPosition").innerHTML)+1 ;
    if(parseInt(document.getElementById("MaxPosition").innerHTML) == parseInt(document.getElementById("CurPosition").innerHTML )){
        document.getElementById("next").innerHTML="Finish"
    }
}

function prevQuestion(){
    if(parseInt(document.getElementById("CurPosition").innerHTML ) == 1){
        return
    }
    document.getElementById("CurPosition").innerHTML = parseInt(document.getElementById("CurPosition").innerHTML)-1
}

var score
var data

document.getElementById("prev").addEventListener("click", prevQuestion );
document.getElementById("next").addEventListener("click", nextQuestion );
document.getElementById('file-selector').addEventListener('change', function() {
var fr=new FileReader();
fr.onload=function(){
    //console.log(fr.result);
    document.getElementById("addData").classList.add("inactive");
    document.getElementById("quizPart").classList.remove("inactive");

    data=JSON.parse(fr.result);
    console.log(Object.entries(data).length);
    document.getElementById("MaxPosition").innerHTML =  Object.entries(data).length

    //quiz initialsiation
    console.log(document.getElementById("MaxPosition").innerHTML);
    /*
    for (const test of Object.entries(data)) {
        console.log(test[0]);
        console.log(test[1][0]);
      }
    */
    //document.getElementById("position").innerHTML = data.length
}
fr.readAsText(this.files[0]);
});
