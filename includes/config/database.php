<?php

function conectarDB(){
    $db = mysqli_connect('localhost', 'root', 'MieR@1', 'webnous');

    if($db){
        echo "Conexion correcta";
        exit;
    }
}