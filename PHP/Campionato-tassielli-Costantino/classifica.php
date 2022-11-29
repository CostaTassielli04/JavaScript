<?php session_start();
include('index.html'); 
$squadre=$_SESSION['competizione'];

foreach($squadre as $nome=>$punti){
    $classifica[$nome]=$punti[3];
}

array_multisort($classifica);
$classifica=array_reverse($classifica);

echo"Classifica";
echo"<table class=\"table table-danger table-striped\">
    <thead class=\"table-dark\">
            <tr>
            <th scope=\"col\">Nome</th>
            <th scope=\"col\">Vittorie</th>
            <th scope=\"col\">Sconfitte</th>
            <th scope=\"col\">Pareggi</th>
            <th scope=\"col\">Punti</th>
            </tr></thead>";
            
foreach($classifica as$key=>$punteggio){
    echo"<tr>";
    foreach($squadre as $nome=>$punti){
    if($nome==$key){?>
        <th scope="row"><?php echo $nome?></th>
        <td><?php echo$punti[0]?></td>
        <td><?php echo$punti[1]?></td>
        <td><?php echo$punti[2]?></td>
        <td><?php echo$punteggio?></td>
  <?php  }
    }
   echo" </tr>";
}
?>
</table>