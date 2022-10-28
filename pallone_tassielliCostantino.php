<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pallone</title>

    <script>
        function Ingrandisci() {
            
        }

        function Rimpicciolisci() {

        }
    </script>
</head>

<body>
    <center>
        <h2>Boom Baloon</h2>
        <p>Premendo l'azione '+' il pallond si ingrandisce, analogamente premendo l'azione '-' ne riduce le dimensioni.</p><br>
        <b>Attenzione a non gonfiare troppo il pallone, potrebbe scoppiare!!</b><br><br>
        <span style='font-size:100px;'></span><br><br><br>
        <form action="pallone_tassielliCostantino.html" method="post">
            <button onclick="Ingrandisci()" id="aumenta">+</button>
            <button onclick="Rimpicciolisci()" id="diminuisci">-</button>
        </form>
    </center>
</body>

</html>