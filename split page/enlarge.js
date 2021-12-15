function hordeOver(){
    //document.getElementById("right").style.backgroundPositionX="-20px";
    console.log("1");
}
function allianceOver(){
    //document.getElementById("left").style.backgroundPositionX="10px";
    console.log("2");
}

function hordeLeave(){
    //document.getElementById("right").style.backgroundPositionX="-20px";
    console.log("3");
}
function allianceLeave(){
    //document.getElementById("left").style.backgroundPositionX="10px";
    console.log("4");
}
document.getElementById("horde").addEventListener("mouseover", hordeOver );
document.getElementById("horde").addEventListener("mouseleave", hordeLeave );

document.getElementById("alliance").addEventListener("mouseover", allianceOver );
document.getElementById("alliance").addEventListener("mouseleave", allianceLeave );