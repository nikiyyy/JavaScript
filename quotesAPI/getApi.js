function getQuote(){
    fetch("https://api.quotable.io/random")
      .then((data) => data.json())
      .then((item) => {
        document.getElementById("quote").innerHTML = item.content + "<br /><br /> - " + item.author;
      });}
getQuote();

document.getElementById("genquote").addEventListener("click", getQuote );