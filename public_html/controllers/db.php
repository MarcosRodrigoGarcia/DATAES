<?php

include_once '../clases/user.php';
include_once '../clases/chart.php';

session_start();

class DB {

    private $conexion;

    public function __construct() {
        $servername = "localhost"; 
        $username = "root"; //Elegir el usuario de phpmyadmin u otro usuario de la base de datos
        $password = ""; //Poner el password del ususario anterior
        $database = "datos_graficos"; //Poner el nombre de la base de datos de mySQL

        $this->conexion = mysqli_connect($servername, $username, $password, $database);
    }

    public function loginUser($email,$password) {
        $sql = "SELECT * FROM usuarios WHERE email='".$email."' AND password ='".$password."';";
       
        $result = $this->conexion->query($sql);

        if ($result->num_rows > 0) {
            //existe al menos un alumno  

            while ($row = $result->fetch_assoc()) {
                //creamos un usuario
                
                $user = new user($row['id_usuario'],$row["email"],$row["userName"],$row["administrador"],$row["i_economia"],$row["i_demografia"],$row["i_AyG"],$row["i_turismo"],$row["i_vivienda"]);
                
                //lo añadimos al array
            }
            return $user;
        } else {
            //no existe ningún usuario o la contraseña es incorrecta
            return false;
        }
    }
    public function singIn($email,$password, $user_name,$i_economia,$i_demografia,$i_AyG,$i_turismo,$i_vivienda) {
        $sql = "INSERT INTO `usuarios` (`id_usuario`, `password`, `email`, `userName`, `i_economia`, `i_demografia`, `i_AyG`, `i_turismo`, `i_vivienda`, `administrador`) VALUES (NULL, '".$password."', '".$email."', '".$user_name."', '".$i_economia."', '".$i_demografia."', '".$i_AyG."', '".$i_turismo."', '".$i_vivienda."', '0');";
       
        $result = $this->conexion->query($sql);

        if ($result) {
            // echo "New record created successfully";
            return true;
      } else {
            // echo "Error: " . $sql . "<br>" . $this->conexion->errno;
            return false;
      }
    }

    public function agregarGrafico($id_operacion,$id_tabla,$titulo,$subtitulo,$clasificacion,$img64,$comentario) {

        $id_operacion_f=intval($id_operacion);
        $id_tabla_f=intval($id_tabla);
        $sql = "INSERT INTO `chart` (`id_operacion`, `id_tabla`, `titulo`,`subtitulo`,`comentario`, `c_economia`, `c_demografia`, `c_aYg`, `c_turismo`, `c_vivienda`, `fav`, `lista_negra`, `img` ) VALUES ('".$id_operacion_f."','".$id_tabla_f."', '".$titulo."','".$subtitulo."','".$comentario."','".$clasificacion[0]."','".$clasificacion[1]."','".$clasificacion[2]."','".$clasificacion[3]."','".$clasificacion[4]."','".$clasificacion[5]."','".$clasificacion[6]."','".$img64."' );";
        $result = $this->conexion->query($sql);

        if ($result) {
             echo "Nuevo gráfico añadido correctamente";
            return true;
      } else {
            //  echo "Error: " . $sql . "<br>" . $this->conexion->errno;
            return false;
      }
    }
    public function recuperarGrafico($id_operacion,$id_tabla) {

        $id_operacion_f=intval($id_operacion);
        $id_tabla_f=intval($id_tabla);
        $sql = "SELECT * from chart where id_operacion=".$id_operacion_f." and id_tabla=".$id_tabla_f.";";
        $result = $this->conexion->query($sql);

        // echo'<p>Gráficos según tus preferencias</p>';

        if ($result->num_rows > 0) {
            //existe al menos un gráfico clasificado  

            while ($row = $result->fetch_assoc()) {
                //creamos un usuario
                
                $chart = array();
                $chart['id_operacion']=$row['id_operacion'];
                $chart['id_tabla']=$row['id_tabla'];
                $chart['titulo']=$row['titulo'];
                $chart['subtitulo']=$row['subtitulo'];
                $chart['comentario']=$row['comentario'];
                $chart['c_economia']=$row['c_economia'];
                $chart['c_demografia']=$row['c_demografia'];
                $chart['c_aYg']=$row['c_aYg'];
                $chart['c_turismo']=$row['c_turismo'];
                $chart['c_vivienda']=$row['c_vivienda'];
                $chart['fav']=$row['fav'];
                $chart['lista_negra']=$row['lista_negra'];
                $chart['img']=$row['img'];
                // = new user($row['id_usuario'],$row["email"],$row["userName"],$row["administrador"]);
                echo json_encode($chart);

                //lo añadimos al array
            }
            return $chart;
        } else {
            //no existe ningún usuario o la contraseña es incorrecta
            echo'no hay ningún resultado';

            //resetear todos los CHECKBOX

            return false;
        }
    }
    public function eliminarGrafico($id_operacion,$id_tabla) {

        $id_operacion_f=intval($id_operacion);
        $id_tabla_f=intval($id_tabla);
        $sql = "DELETE from chart where id_operacion=".$id_operacion_f." and id_tabla=".$id_tabla_f.";";
        $result = $this->conexion->query($sql);

        // echo'<p>Gráficos según tus preferencias</p>';

        if ($result==TRUE) {
            //existe al menos un gráfico clasificado  

           
                echo 'Gráfico eliminado';

                //lo añadimos al array
            
        } else {
            //no existe ningún usuario o la contraseña es incorrecta
            echo'El gráfico no se ha eliminado';

            //resetear todos los CHECKBOX

            return false;
        }
      }
    
    public function recuperarGraficosFav() {

        
        $sql = "SELECT * from chart where fav='1' ORDER BY RAND() LIMIT 6;";
        $result = $this->conexion->query($sql);

        if ($result->num_rows > 0) {
            //existe al menos un gráfico clasificado  

            while ($row = $result->fetch_assoc()) {
                //creamos un usuario
                
                $chart = array();
                $chart['id_operacion']=$row['id_operacion'];
                $chart['id_tabla']=$row['id_tabla'];
                $chart['titulo']=$row['titulo'];
                $chart['subtitulo']=$row['subtitulo'];
                $chart['comentario']=$row['comentario'];
                $chart['c_economia']=$row['c_economia'];
                $chart['c_demografia']=$row['c_demografia'];
                $chart['c_aYg']=$row['c_aYg'];
                $chart['c_turismo']=$row['c_turismo'];
                $chart['c_vivienda']=$row['c_vivienda'];
                $chart['fav']=$row['fav'];
                $chart['lista_negra']=$row['lista_negra'];
                $chart['img']=$row['img'];
                
                echo '<div class="col-md-4">
                <form action="../../public_html/pages/chart.php" method="post">
                <input name="tabla" type="hidden" value="'.$row['id_tabla'].'">
                <input name="titulo" type="hidden" value="'.$row['titulo'].'">
                <input name="subtitulo" type="hidden" value="'.$row['subtitulo'].'">
                <div class="card mb-3">
                  <h3 class="card-header">NOVEDADES</h3>
                  <div class="card-body">
                    <h4 class="card-title">'.$row['titulo'].'</h4>
                    <h5 class="card-subtitle text-muted">'.$row['subtitulo'].'</h5>
                  </div>
                  <img src="'.$row['img'].'" alt="">
                  <div class="card-body">
                    <p class="card-text">'.$row['comentario'].'</p>
                  </div>
        
                  <div class="card-body button-card-body">
                    <!-- por si quiero poner algo más -->
                    <button type="submit" id="btn-logout" class="btn btn-outline-success mx-xl-2"><i class="fa-solid fa-chart-line"></i> ir al grafico</button>
                  </div>
                  <div class="card-footer text-muted">';
                    if($row['c_economia']==1){
                       echo '<span class="badge bg-info">Economía</span>';
                    }
                    if($row['c_demografia']==1){
                       echo '<span class="badge bg-light">Demografía</span>';
                    }
                    if($row['c_aYg']==1){
                       echo '<span class="badge bg-success">Agricultura</span>';
                    }
                    if($row['c_turismo']==1){
                       echo '<span class="badge bg-danger">Turismo</span>';
                    }
                    if($row['c_vivienda']==1){
                       echo '<span class="badge bg-warning">Vivienda</span>';
                    }
                  echo '</div>
                  </form>
                </div>
              </div>';

                

                //lo añadimos al array
            }
            
        } else {
            //no existe ningún usuario o la contraseña es incorrecta
            echo'no hay ningún resultado';

            //resetear todos los CHECKBOX

            return false;
        }
    }
    public function recuperarGraficosRecomendados() {

        //sentencia SQL

        $sql2="";

        if($_SESSION["i_economia"]){
            $sql2.="c_economia ='1' or ";
        }
        if($_SESSION["i_demografia"]){
            $sql2.="c_demografia ='1' or ";
        }
        if($_SESSION["i_AyG"]){
            $sql2.="c_aYg ='1' or ";
        }
        if($_SESSION["i_turismo"]){
            $sql2.="c_turismo ='1' or ";
        }
        if($_SESSION["i_vivienda"]){
            $sql2.="c_vivienda ='1' or ";
        }
           $sql2=substr_replace($sql2 ,"", -3);

        
        $sql = "SELECT * FROM `chart` where ".$sql2."  ORDER BY RAND() LIMIT 6;";
        
        $result = $this->conexion->query($sql);

        if ($result->num_rows > 0) {
            //existe al menos un gráfico clasificado  

            

            while ($row = $result->fetch_assoc()) {
                //creamos un usuario
                
                $chart = array();
                $chart['id_operacion']=$row['id_operacion'];
                $chart['id_tabla']=$row['id_tabla'];
                $chart['titulo']=$row['titulo'];
                $chart['subtitulo']=$row['subtitulo'];
                $chart['comentario']=$row['comentario'];
                $chart['c_economia']=$row['c_economia'];
                $chart['c_demografia']=$row['c_demografia'];
                $chart['c_aYg']=$row['c_aYg'];
                $chart['c_turismo']=$row['c_turismo'];
                $chart['c_vivienda']=$row['c_vivienda'];
                $chart['fav']=$row['fav'];
                $chart['lista_negra']=$row['lista_negra'];
                $chart['img']=$row['img'];
                
                echo '<div class="col-md-4">
                <form action="../../public_html/pages/chart.php" method="post">
                <input name="tabla" type="hidden" value="'.$row['id_tabla'].'">
                <input name="titulo" type="hidden" value="'.$row['titulo'].'">
                <input name="subtitulo" type="hidden" value="'.$row['subtitulo'].'">
                <div class="card mb-3">
                  <h3 class="card-header">RECOMENDADO</h3>
                  <div class="card-body">
                    <h4 class="card-title">'.$row['titulo'].'</h4>
                    <h5 class="card-subtitle text-muted">'.$row['subtitulo'].'</h5>
                  </div>
                  <img src="'.$row['img'].'" alt="">
                  <div class="card-body">
                    <p class="card-text">'.$row['comentario'].'</p>
                  </div>
        
                  <div class="card-body button-card-body">
                    <!-- por si quiero poner algo más -->
                    <button type="submit" id="btn-logout" class="btn btn-outline-success mx-xl-2"><i class="fa-solid fa-chart-line"></i> ir al grafico</button>


                  </div>
                  <div class="card-footer text-muted">';
                    if($row['c_economia']==1){
                       echo '<span class="badge bg-info">Economía</span>';
                    }
                    if($row['c_demografia']==1){
                       echo '<span class="badge bg-light">Demografía</span>';
                    }
                    if($row['c_aYg']==1){
                       echo '<span class="badge bg-success">Agricultura</span>';
                    }
                    if($row['c_turismo']==1){
                       echo '<span class="badge bg-danger">Turismo</span>';
                    }
                    if($row['c_vivienda']==1){
                       echo '<span class="badge bg-warning">Vivienda</span>';
                    }
                  echo '</div>
                  </form>
                </div>
              </div>';

               
            }
            
        } else {
           
            // echo'no hay ningún resultado';

            //resetear todos los CHECKBOX

            return false;
        }
    }
}


?>