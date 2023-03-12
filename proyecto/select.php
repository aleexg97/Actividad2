<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, x-requested-with");
    $conexion = mysqli_connect("localhost","root","");

    include_once("datos.php");

    $conexion = $GLOBALS["conexion"];

    $consulta = 'SELECT * FROM Usuarios;';
    $result = mysqli_query($conexion,$consulta);

    while($lista = mysqli_fetch_all($result)){          //fetch_all

        echo json_encode($lista);                       //devolver en json_encode
    }
?>