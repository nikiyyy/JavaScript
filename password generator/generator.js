function test(){
    console.log((Math.random()).toString(36))
    if(document.getElementById("CapLetters").checked){
        console.log("1")
    }
    if(document.getElementById("Symbols").checked){
        console.log("2")
    }
    if(document.getElementById("Numbers").checked){
        console.log("3")
    }
}

document.getElementById("Generate").addEventListener("click", test)