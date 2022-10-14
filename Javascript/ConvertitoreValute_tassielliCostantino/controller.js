window.addEventListener("load", () => {
    var euro = document.getElementById("euro");
    var dollaro = document.getElementById("dollaro");
    var sterlina = document.getElementById("sterlina");
    var yen = document.getElementById("yen");


    euro.addEventListener("change", () => {

        dollaro.value = euro.value * 0.97316;
        sterlina.value = euro.value * 0.86885;
        yen.value = euro.value * 143.057;

    });

    dollaro.addEventListener("change", () => {

        euro.value = dollaro.value * 1.0274;
        sterlina.value = dollaro.value * 0.89268;
        yen.value = dollaro.value * 146.991;

    });

    sterlina.addEventListener("change", () => {

        euro.value = sterlina.value * 1.15065;
        dollaro.value = sterlina.value * 1.11992;
        yen.value = sterlina.value * 164.631;

    });

    yen.addEventListener("change", () => {
        euro.value = yen.value * 0.00699;
        dollaro.value = yen.value * 0.0068;
        sterlina.value = yen.value * 0.00607;

    });

}, false);