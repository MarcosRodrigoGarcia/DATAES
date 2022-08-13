<?php

// mensajes de error/informacion

if($mensaje){

  switch($mensaje){
    case 'error':
      errorLog();
      break;
    case 'logOk':  
      logOk();
      break;
    case 'regOk':  
      regOk();
      break;
    case 'regFail':  
      logOk();
      break;
    case 'logout':  
      logout();
      break;
    case 'ninguno':  
      break;
    }
}


function errorLog(){
    echo'
    <div class= "container">
    <!-- mesaje error para login incorrecto -->
    <div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>Inicio de Sesión incorrecto!</strong> Change a few things up</a> Inténtalo de nuevo o <a href="mailto:info@marcosrodrigo.es" class="alert-link">mándanos un mail a ver si podemos ayudarte</a>.
    </div> </div>';
    
}
function logout(){
    echo'
    <div class= "container">
    <!-- mesaje error para login incorrecto -->
    <div class="alert alert-dismissible alert-info">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>Has cerrado sesión</strong> 
    </div> </div>';
    
}
function regFail(){
    echo'
    <div class= "container">
    <!-- mesaje error para login incorrecto -->
    <div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>Registro incorrecto!</strong> Change a few things up</a> Inténtalo de nuevo o <a href="mailto:info@marcosrodrigo.es" class="alert-link">mándanos un mail a ver si podemos ayudarte</a>.
    </div> </div>';
    
}


function logOk(){
  echo'
  <div class= "container">
  <div class="alert alert-dismissible alert-success">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <strong>Inicio de sesión correcto</strong> Ahora puedes guardar y recuperar tus consultas <a href="#" class="alert-link"></a>.
</div> </div>';
}

function regOk(){
  echo'
  <div class= "container">
  <div class="alert alert-dismissible alert-success">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <strong>Bienvenido al mundo de los gráficos</strong> Ahora puedes guardar y recuperar tus consultas <a href="#" class="alert-link"></a>.
</div> </div>';

}
    ?>
