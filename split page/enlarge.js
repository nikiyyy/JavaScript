function hordeOver(){
    document.getElementById("main").style.backgroundPositionX="-120px";
    console.log("1");
}
function allianceOver(){
    document.getElementById("main").style.backgroundPositionX="-40px";
    console.log("2");
}

function hordeLeave(){
    document.getElementById("main").style.backgroundPositionX="-80px";
    console.log("3");
}
function allianceLeave(){
    document.getElementById("main").style.backgroundPositionX="-80px";
    console.log("4");
}
//document.getElementById("main").style.backgroundPositionX="-80px"
document.getElementById("horde").addEventListener("mouseover", hordeOver );
document.getElementById("horde").addEventListener("mouseleave", hordeLeave );

document.getElementById("alliance").addEventListener("mouseover", allianceOver );
document.getElementById("alliance").addEventListener("mouseleave", allianceLeave );