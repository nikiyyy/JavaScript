function test(){
    var string = "";
    while(string.length < document.getElementById("PassLength").value){
        var randomNumb = Math.floor(Math.random() * 4)
        if( randomNumb == "0" && document.getElementById("LowerLetters").checked){
            string += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        }
        else if( randomNumb == "1" && document.getElementById("CapLetters").checked){
            string += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
        else if(randomNumb == "2" && document.getElementById("Numbers").checked){
            string += String.fromCharCode(Math.floor(Math.random() * 10) + 46)
        }
        else if(randomNumb == "3" && document.getElementById("Symbols").checked){
            const symbols = "!@#$%^&*()_+{}/.,"
            string += symbols[Math.floor(Math.random() * symbols.length)]
        }
    }
    console.log(string)
    /*
    //console.log((Math.random()).toString(36).slice(2, parseInt(document.getElementById("PassLength").value)+2));
    console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 46));
    const symbols = "!@#$%^&*()_+{}/.,"
    console.log(symbols[Math.floor(Math.random() * symbols.length)]);
    */

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