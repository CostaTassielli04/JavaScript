let pixel = 100;

window.addEventListener('keyup', function(e) { // rimpicciolisco e ingradisco il pallone usando le freccette ArrowUp e ArrowDown
    if (e.key == "ArrowDown") {
        Rimpicciolisci();
    } else if (e.key == "ArrowUp") {
        Ingrandisci();
    }
}, false);

function Ingrandisci() {
    if (pixel > 200) {
        document.getElementById("pallone").innerHTML = "<img src=\"boom.jpg\">";
        document.getElementById("description").innerHTML = "<p>Oh no hai gonfiato troppo il pallone!</p>"
    } else {
        document.getElementById("description").innerHTML = "";
        pixel = pixel + (pixel * 10 / 100);
        document.getElementById("pallone").style.fontSize = pixel + "px";
    }
}

function Rimpicciolisci() {
    if (pixel < 20) {
        document.getElementById("description").innerHTML = "<div><p>Il pallone non può sgonfiarsi di più di così, gonfialo un pò!</p></div>"
    } else if (pixel < 200) {
        document.getElementById("description").innerHTML = "";
        pixel = pixel - (pixel * 10 / 100);
        document.getElementById("pallone").style.fontSize = pixel + "px";
    }
}

function Standard() {
    document.getElementById("pallone").innerHTML = "<span>&#9917;</span>";
    pixel = 100;
    document.getElementById("pallone").style.fontSize = pixel + "px";
}