<?php
session_start();
include_once('../../resources/templates/header.php');
?>


    <div class="container mapa">
    <div class="titulo">
      <h2>Mapas interactivos</h2>
    </div>
        
        <div class="row justify-content-center">
            <div class="col-md-6 col-12">
               
                <select class="form-select"id="mapa">
                    <optgroup label="Tasa de paro">
                            <option value="paro">Tasa de paro 2022T1</option>
                    </optgroup>
                    <optgroup label="Poblacion">
                        <option value="poblacion">Población 2021</option>
                        <option value="nacimientos">Nacimientos 2021</option>
                    </optgroup>
                    <optgroup label="Agricultura">
                        <option value="eco">Explotaciones ecológicas</option>
                    </optgroup>
                    <optgroup label="Ganadería (Cabezas)">
                        <option value="bovino">Bovino</option>
                        <option value="ovino">Ovino</option>
                        <option value="carpino">Caprino</option>
                        <option value="porcino">Porcino</option>
                        <option value="aves">Aves de corral</option>
                        <option value="conejas">Conejas Madres</option>
                        <option value="colmenas">Colmenas</option>
                        <option value="equinos">Equinos</option>
                    </optgroup>
                </select>
            </div>
        </div>
        

        
        <div class="row">
        
        </div>
        <div class="mt-3 text-center">
            <button class= "btn btn-info pintarMapaEscritorio" onclick="elegirChart()"> <i class="fa-solid fa-map"></i> Mostrar mapa</button>
        </div>
        
        
        
        <div id="container-map"></div>
    </div>

 
    <?php
include_once('../../resources/templates/footer.php');
include_once('../../resources/templates/login.php');
include_once('../../resources/templates/sing_up.php');
?> 