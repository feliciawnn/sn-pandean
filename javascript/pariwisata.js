// clickable image functions
function goToTelomoyo(){
    window.scroll(0,findPos(document.getElementById("telomoyo")));
}

function goToTNP(){
    window.scroll(0,findPos(document.getElementById("tnp")));
}

function goToJeep(){
    window.scroll(0,findPos(document.getElementById("jeep")));
}

function goToATV(){
    window.scroll(0,findPos(document.getElementById("atv")));
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}