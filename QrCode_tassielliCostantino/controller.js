window.addEventListener("load", () => {
    let genera = document.getElementById("genera");

    genera.addEventListener("click", () => {
        let url = document.getElementById("sito").value;
        let dim = document.getElementById("dim").value;
        let colour = document.getElementById("colore").value;
        let background = document.getElementById("sfondo").value;
        document.getElementById("qrcode").innerHTML = '<img src="http://api.qrserver.com/v1/create-qr-code/?' +
            'data=' + url +
            '&size=' + dim + 'x' + dim +
            '&color=' + colour +
            '&bgcolor=' + background + '"/>';
    });
});