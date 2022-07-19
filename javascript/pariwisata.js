// clickable image functions
function goToTelomoyo(){
    window.scroll(0,findPos(document.getElementById("telomoyo")));
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