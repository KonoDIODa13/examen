<?php
  
    $conexion = mysqli_connect("localhost", "root", "", "universidad");

    if($conexion->connect_error){
        print "Fallo al conectar con la base de datos. ".$conexion->connect_error;
        echo 0;
    }else{
        
        $profesor = $_POST["profesor"];
        $sql = "SELECT nombre FROM `departamento` INNER JOIN profesor ON id_departamento=departamento.id  where id_profesor=".$profesor;
        $resultados=mysqli_query($conexion,$sql) or die(mysqli_error());
        $datos=array();
        while ( $fila = mysqli_fetch_array($resultados, MYSQLI_ASSOC))
            {
            $datos[]=$fila;
            }
       
        echo(json_encode($datos));
        
        mysqli_close($conexion);
    }

?>