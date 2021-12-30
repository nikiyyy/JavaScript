function test(){
    var string = "";

    const LowerLettersElement = document.getElementById("LowerLetters");
    const CapLettersElement = document.getElementById("CapLetters");
    const NumbersElement = document.getElementById("Numbers");
    const SymbolsElement = document.getElementById("Symbols");

    while(string.length < document.getElementById("PassLength").value){
        if(!(LowerLettersElement.checked || CapLettersElement.checked || NumbersElement.checked || SymbolsElement.checked)){
            break
        }
        var randomNumb = Math.floor(Math.random() * 4)
        if( randomNumb == "0" && LowerLettersElement.checked){
            string += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        }
        else if( randomNumb == "1" && CapLettersElement.checked){
            string += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
        else if(randomNumb == "2" && NumbersElement.checked){
            string += String.fromCharCode(Math.floor(Math.random() * 10) + 46)
        }
        else if(randomNumb == "3" && SymbolsElement.checked){
            const symbols = "!@#$%^&*()_+{}/.,"
            string += symbols[Math.floor(Math.random() * symbols.length)]
        }
    }
    if (string.length == 0)
    {
    document.getElementById("Output").value = "Select generation criteria"
    }
    else{
        document.getElementById("Output").value = string
    }

    
}

document.getElementById("Generate").addEventListener("click", test)