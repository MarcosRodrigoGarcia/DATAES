<?php
//Sesiones

session_start();

//Comprobamos si está logeado

if (!isset($_SESSION['log'])) {
  $_SESSION['log'] = 0;
}


if (isset($_SESSION['mensaje'])) {
  $mensaje = $_SESSION['mensaje'];
  unset($_SESSION['mensaje']);
} else {
  $mensaje = 'ninguno';
}

if (isset($_SESSION['administrator'])) {
  $administrator = $_SESSION['administrator'];
}

include_once('resources/templates/header.php');
include_once('resources/templates/message.php');

?>

<!-- cabecera -->
<div id="cabecera" class="container-fluid">
</div>

<div class="container-fluid">
  <div class="container">
    <div class="titulo">
      <h2>Novedades</h2>
    </div>
    <p>A Continuación se mostrarán algunos gráficos seleccionados por el creador</p>

    <div class="row" id="graficosFavoritos">
    </div>
    <!-- fin seccion favoritos  -->
    <div class="titulo">
      <h2>Recomendados</h2>
    </div>

    <div class="row" id="graficosRecomendados">
    </div>
    <!-- fin seccion recomendados  -->
  </div>
</div>
<script>
  $(document).ready(function() {

    $.ajax({
      "method": "POST",
      "url": "public_html/controllers/ajax.php",
      "data": {
        operacion: 'graficosFav'
      }
    }).done(function(respuesta) {
      //RESPUESTA DEL SERVIDOR
      $('#graficosFavoritos').html(respuesta);
    });
  });

  $.ajax({
    "method": "POST",
    "url": "public_html/controllers/ajax.php",
    "data": {
      operacion: 'graficosRecomendados'

    }
  }).done(function(respuesta) {
    //RESPUESTA DEL SERVIDOR
    $('#graficosRecomendados').html(respuesta);
  });
</script>

<?php
include_once('resources/templates/footer.php');
include_once('resources/templates/login.php');
include_once('resources/templates/sing_up.php');
?>