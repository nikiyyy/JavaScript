function nextQuestion(){
    //used to show the page
    let CurPosition= parseInt(document.getElementById("CurPosition").innerHTML);
    
    //finishes the quiz
    if(parseInt(document.getElementById("MaxPosition").innerHTML) == CurPosition){

        if (document.getElementById('Rinput').checked && Object.entries(data)[CurPosition-1][1][0][1] == 1){
            // console.log(Object.entries(data)[CurPosition-1][1][0][0])
            score.push(1);
         }
         else if (document.getElementById('Rinput2').checked && Object.entries(data)[CurPosition-1][1][1][1] == 1){
            // console.log(Object.entries(data)[CurPosition-1][1][1][0])
            score.push(1);
         }
         else if (document.getElementById('Rinput3').checked && Object.entries(data)[CurPosition-1][1][2][1] == 1){
             //console.log(Object.entries(data)[CurPosition-1][1][2][0])
             score.push(1);
         }
         else if (document.getElementById('Rinput4').checked && Object.entries(data)[CurPosition-1][1][3][1] == 1){
             //console.log(Object.entries(data)[CurPosition-1][1][3][0])
             score.push(1);
         }
         else{
            score.push(0);
        }
        console.log(score)

        document.getElementById("quizPart").classList.add("inactive");
        document.getElementById("showScore").classList.remove("inactive");

        let sum=0
        for(i = 0;i < document.getElementById("MaxPosition").innerHTML ; i++ ){
           sum+=score[i];
        }
        document.getElementById("score").innerHTML = sum
        document.getElementById("maxscore").innerHTML = document.getElementById("MaxPosition").innerHTML;
        return
    }

    // if this this is the last question it changes the button to reflect that
    if(parseInt(document.getElementById("MaxPosition").innerHTML) == CurPosition){
        document.getElementById("next").innerHTML="Finish"
    }

    // checks if the answer is the right one
    if (document.getElementById('Rinput').checked && Object.entries(data)[CurPosition-1][1][0][1] == 1){
       score.push(1);
    }
    else if (document.getElementById('Rinput2').checked && Object.entries(data)[CurPosition-1][1][1][1] == 1){
       score.push(1);
    }
    else if (document.getElementById('Rinput3').checked && Object.entries(data)[CurPosition-1][1][2][1] == 1){
        score.push(1);
    }
    else if (document.getElementById('Rinput4').checked && Object.entries(data)[CurPosition-1][1][3][1] == 1){
        score.push(1);
    }
    else{
        score.push(0);
    }

    // shows the question number
    document.getElementById("CurPosition").innerHTML = CurPosition+1 ;

    ///fwds the bext question
    document.getElementById("question-title").innerHTML = Object.entries(data)[CurPosition][0]
    document.getElementById("RinputLabel").innerHTML = Object.entries(data)[CurPosition][1][0][0];
    document.getElementById("RinputLabel2").innerHTML = Object.entries(data)[CurPosition][1][1][0];
    document.getElementById("RinputLabel3").innerHTML = Object.entries(data)[CurPosition][1][2][0];
    document.getElementById("RinputLabel4").innerHTML = Object.entries(data)[CurPosition][1][3][0];
    console.log(score)
}

function prevQuestion(){
    let CurPosition= parseInt(document.getElementById("CurPosition").innerHTML);
    if(CurPosition == 1){ 
        return
    }
    
    score.pop();
    console.log(score)
    document.getElementById("CurPosition").innerHTML = CurPosition-1;

    ///backwards
    document.getElementById("question-title").innerHTML = Object.entries(data)[CurPosition-2][0]
    document.getElementById("RinputLabel").innerHTML = Object.entries(data)[CurPosition-2][1][0][0];
    document.getElementById("RinputLabel2").innerHTML = Object.entries(data)[CurPosition-2][1][1][0];
    document.getElementById("RinputLabel3").innerHTML = Object.entries(data)[CurPosition-2][1][2][0];
    document.getElementById("RinputLabel4").innerHTML = Object.entries(data)[CurPosition-2][1][3][0];
}

var score = []
var data

document.getElementById("prev").addEventListener("click", prevQuestion );
document.getElementById("next").addEventListener("click", nextQuestion );
document.getElementById('file-selector').addEventListener('change', function() {
var fr=new FileReader();
fr.onload=function(){

    document.getElementById("addData").classList.add("inactive");
    document.getElementById("quizPart").classList.remove("inactive");
    data=JSON.parse(fr.result);
    console.log(Object.entries(data).length);
    document.getElementById("MaxPosition").innerHTML =  Object.entries(data).length

    //quiz initialsiation
    console.log(document.getElementById("MaxPosition").innerHTML);
    document.getElementById("question-title").innerHTML = Object.entries(data)[0][0]
    document.getElementById("RinputLabel").innerHTML = Object.entries(data)[0][1][0][0];
    document.getElementById("RinputLabel2").innerHTML = Object.entries(data)[0][1][1][0];
    document.getElementById("RinputLabel3").innerHTML = Object.entries(data)[0][1][2][0];
    document.getElementById("RinputLabel4").innerHTML = Object.entries(data)[0][1][3][0];
}
fr.readAsText(this.files[0]);
});
