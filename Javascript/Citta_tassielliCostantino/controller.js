window.addEventListener("load", () => {
    let bottone = document.getElementById("search");
    bottone.addEventListener("click", () => {

        let nome = document.getElementById("luogo").value;
        let requestURL = "https://geocoding-api.open-meteo.com/v1/search?name=" + nome;
        console.log(requestURL);
        let request = new XMLHttpRequest();
        request.open("GET", requestURL);
        request.responseType = "json";
        request.send();

        request.onload = () => {
            const citta = request.response;
            for (let i = 0; i < citta.length; i++) {
                if (citta.admin1 = "Apulia") {
                    document.getElementById("dati").innerHTML = "La città di " + citta.results[i].name + " ha:<br>" +
                        "<strong>Altitudine:</strong> " + citta.results[i].latitude + "<br>" +
                        "<strong>Longitudine:</strong> " + citta.results[i].longitude + "<br>" +
                        "<strong>Numero Abitanti:</strong> " + citta.results[i].population + "<br>";
                }

            }
            document.getElementById("dati").innerHTML = "La città di " + citta.results[0].name + " ha:<br>" +
                "<strong>Altitudine:</strong> " + citta.latitude + "<br>" +
                "<strong>Longitudine:</strong> " + citta.longitude + "<br>" +
                "<strong>Numero Abitanti:</strong> " + citta.population + "<br>";

        }


    });
});