<?php
    sleep(5);
    $conexion = mysqli_connect("localhost", "root", "", "universidad");

    if($conexion->connect_error){
        print "Fallo al conectar con la base de datos. ".$conexion->connect_error;
        echo 0;
    }else{
        
        $fecha = $_POST["fecha"];
        $sql = "SELECT id, nombre, apellido1, apellido2, tipo FROM persona WHERE CAST(fecha_nacimiento AS date) > CAST('".$fecha."' AS date)";
        
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