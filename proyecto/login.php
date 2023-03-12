<?php
    header("Access-Control_Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Width");
    
    include("datos.php");

    $consexion = $GLOBALS["conexion"];

    $data = json_decode(file_get_contents("php://input"));
        //print_r($data);
    $nombre = $data->nombre;
        //print_r($nombre);
    $contrasenya = $data->contrasenya;
        //print_r($contrasenya);
    
    $consulta = 'SELECT * FROM Usuarios WHERE nombre="'.$nombre.'" AND contrasenya="'.$contrasenya.'";';
    $result = mysqli_query($conexion,$consulta);
    
        while($lista = mysqli_fetch_array($result)){
            extract($lista);
                //print_r("La BD devuelve : ".$nombre);
                //print_r("La BD devuelve : ".$contrasenya);

            if($nombre == "admin"){
                if($contrasenya = "admin"){
                    print_r(1);
                }
            }
            else{
                print_r(2);
            }
        }

    /*$consulta = 'SELECT * from Empleado WHERE nombre="'.$nombre.'" AND correo="'.$pass.'";';

    $result = mysqli_query($conexion,$consulta);
    
    $nombreBD = "";
    $correoBD = "";

    while($lista = mysqli_fetch_array($result)){
        extract($lista);

        $nombreBD = $nombre;
        $correoBD = $correo;
    }
  
    //Hacer un if que si el usuario es admin que duevelva un (4), con ese 4 en el react haces que si te devuelve un 4 el servidor, le ccarger la /AdminPanel

    if($nombre == $nombreBD && $correo == $correoBD){
        print_r(200);
    }else{
        print_r(404);
    }
    */
?>