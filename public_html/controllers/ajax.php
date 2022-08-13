<?php

include_once 'db.php';

$db = new DB();

$operacion = $_POST["operacion"];

if ($operacion == 'insertar') {


        //Rescatamos las variables del grafico
        $id_operacion = $_POST["id_operacion"];
        $id_tabla = $_POST["id_tabla"];
        $titulo = $_POST["titulo"];
        $subtitulo = $_POST["subtitulo"];
        $img64 = $_POST["img64"];
        $comentario = $_POST["comentario"];

        // var_dump($_POST);

        $clasificacion = array();
        //chequeamos la clasificacion
        if (empty($_POST["economia"])) {
                array_push($clasificacion, 0);
        } else {
                array_push($clasificacion, 1);
        }
        if (empty($_POST["demografia"])) {
                array_push($clasificacion, 0);
        } else {
                array_push($clasificacion, 1);
        }
        if (empty($_POST["AyG"])) {
                array_push($clasificacion, 0);
        } else {
                array_push($clasificacion, 1);
        }
        if (empty($_POST["turismo"])) {
                array_push($clasificacion, 0);
        } else {
                array_push($clasificacion, 1);
        }
        if (empty($_POST["vivienda"])) {
                array_push($clasificacion, 0);
        } else {
                array_push($clasificacion, 1);
        }
        if (empty($_POST["fav"])) {
                array_push($clasificacion, 0);
        } else {
                array_push($clasificacion, 1);
        }
        if (empty($_POST["ban"])) {
                array_push($clasificacion, 0);
        } else {
                array_push($clasificacion, 1);
        }
        $agregargrafico = $db->agregarGrafico($id_operacion, $id_tabla, $titulo, $subtitulo, $clasificacion, $img64, $comentario);

} elseif ($operacion == "recuperar") {
        $id_operacion = $_POST["id_operacion"];
        $id_tabla = $_POST["id_tabla"];
        $recuperarGrafico = $db->recuperarGrafico($id_operacion, $id_tabla);
        
} elseif ($operacion == "graficosFav") {

        $recuperarGrafico = $db->recuperarGraficosFav();
        

} elseif ($operacion == "remove") {
        $id_operacion = $_POST["id_operacion"];
        $id_tabla = $_POST["id_tabla"];
        $recuperarGrafico = $db->eliminarGrafico($id_operacion, $id_tabla);
        
} 

elseif ($operacion == "graficosRecomendados") {
        if($_SESSION['log']==1){
                // echo'A continuación se muestra tus gráficos recomendados';

                $recuperarGrafico = $db->recuperarGraficosRecomendados();
        }
        else{
                
                echo'<div class="alert alert-dismissible alert-info mensajeRecuperarGraficos">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                 inicia sesión para ver tus gráficos recomendados
              </div>';
        }

        
}
