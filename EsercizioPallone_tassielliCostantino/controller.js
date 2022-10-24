let pixel = 100;
let x = 560;
let y = 300;

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
    document.getElementById("pallone").style.left = 560 + "px";
    document.getElementById("pallone").style.top = 300 + "px";
}

document.addEventListener("keyup", (e) => {
    if (e.key == "-") {
        Rimpicciolisci();
    } else if (e.key == "+") {
        Ingrandisci();
    } else if (e.key == "ArrowUp" && pixel < 200) {
        if (y > 270) {
            y = y - 20;
        }
    } else if (e.key == "ArrowDown" && pixel < 200) {
        y = y + 20;
    } else if (e.key == "ArrowLeft" && pixel < 200) {
        if (x > 0) {
            x = x - 20;
        }
    } else if (e.key == "ArrowRight" && pixel < 200) {
        x = x + 20;
    }
    document.getElementById("pallone").style.top = y + "px";
    document.getElementById("pallone").style.left = x + "px";
}, false);

function Balzo() {
    function generateRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    document.getElementById("pallone").style.left = x - 10 + "px";
    clearInterval(id);
    setInterval(prova, 10);

    function prova() {
        document.getElementById("pallone").style.left = x + 20 + "px";
    }
    let n = generateRandomInt(500);
    document.getElementById("pallone").style.left = n + "px";
    n = generateRandomInt(500);
    document.getElementById("pallone").style.top = n + "px";


}