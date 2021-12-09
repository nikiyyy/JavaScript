function next(){
    if (!document.getElementById("one").classList.contains("active")){
        document.getElementById("one").classList.add("active");
        document.getElementById("backButton").classList.remove("invalid");
        return
    }
    else if (!document.getElementById("two").classList.contains("active")){
        document.getElementById("two").classList.add("active");
        return
    }
    else if (!document.getElementById("three").classList.contains("active")){
        document.getElementById("three").classList.add("active");
        return
    }
    else if (!document.getElementById("four").classList.contains("active")){
        document.getElementById("four").classList.add("active");
        document.getElementById("nextButton").classList.add("invalid");
        return
    }
}
function back(){
    if (document.getElementById("four").classList.contains("active")){
        document.getElementById("four").classList.remove("active");
        document.getElementById("nextButton").classList.remove("invalid");
        return
    }
    else if (document.getElementById("three").classList.contains("active")){
        document.getElementById("three").classList.remove("active");
        return
    }
    else if (document.getElementById("two").classList.contains("active")){
        document.getElementById("two").classList.remove("active");
        return
    }
    else if (document.getElementById("one").classList.contains("active")){
        document.getElementById("one").classList.remove("active");
        document.getElementById("backButton").classList.add("invalid");
        return
    }
}
