<?php

// <!-- ------------------------------
// ADMINISTRADOR
// ---------------------------- -->

//INCLUDES

?>
<!-- <script src="../js/administrador.js"></script> -->
<div class="container administrador">

        <div class="row">
                <div class="col">

                        <h2>Clasificacion gráfico</h2>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="economia" value="economia" id="Economía">
                                <label class="form-check-label" for="Economía">
                                        Economía
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="demografia" value="demografia" id="demografia">
                                <label class="form-check-label" for="demografia">
                                        Demografía
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="AyG" value="AyG" id="AyG">
                                <label class="form-check-label" for="AyG">
                                        Agricultura y ganadería
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="turismo" value="turismo" id="turismo">
                                <label class="form-check-label" for="turismo">
                                        Turismo
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="vivienda" value="vivienda" id="vivienda">
                                <label class="form-check-label" for="vivienda">
                                        Vivienda
                                </label>
                        </div>
                </div>

                <div class="col">
                        <h2>favoritos y lista negra</h2>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="fav" value="fav" id="fav">
                                <label class="form-check-label" for="fav"><i class="fa-solid fa-star"></i>
                                        Favorito
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="ban" value="ban" id="ban">
                                <label class="form-check-label" for="ban"><i class="fa-solid fa-ban"></i>
                                        Lista negra
                                </label>
                        </div>
                        <div class="form-group">
                                <label id="label-comentario"for="comentario" class="form-label mt-4">Comentario</label>
                                <textarea class="form-control" id="comentario" rows="5"></textarea>
                        </div>

                        <div>
                                <input type="file" id="foto" name="foto" onchange="encodeImgtoBase64(this)">
                                <div id="contenedor-img">        
                                        <img id="picture" src="#" style="width: 150px;" />
                                </div>


                        </div>

                        <div id=botones-administrador>
                                <button id="add" class="btn btn-success">Añadir/actualizar</button>
                                <button id="remove" class="btn btn-danger">Borrar</button>
                        </div>

                </div>

        </div>

        <div id="txtHint"><b></b></div>



</div>


<script>
         var img64;

function encodeImgtoBase64(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {

                $("#base64Code").val(reader.result);
                img64 = reader.result;
                // $("#convertImg").text(reader.result);
                //mostrar imagen
                // $("#base64Img").attr("src", reader.result);
        }
        reader.readAsDataURL(file);
}

function readURL(input) {
        if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                        $('#picture').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
        }
}

$("#foto").change(function() {
        readURL(this);
});

//conexion AJAX 
$("#add").click(function(e) {

        //rescatamos valor de las variables
        var id_operacion = $('#operaciones').val();
        var id_tabla = $('#tablas').val();
        var titulo = $('#operaciones option:selected').text();
        var subtitulo = $('#tablas option:selected').text();
        var comentario = $('#comentario').val();
        //console.log(img64);



        if ($('#Economía').is(':checked')) {
                var economia = 1;
        } else {
                var economia = 0;
        }
        if ($('#demografia').is(':checked')) {
                var demografia = 1;
        } else {
                var demografia = 0;
        }
        if ($('#AyG').is(':checked')) {
                var AyG = 1;
        } else {
                var AyG = 0;
        }
        if ($('#turismo').is(':checked')) {
                var turismo = 1;
        } else {
                var turismo = 0;
        }
        if ($('#vivienda').is(':checked')) {
                var vivienda = 1;
        } else {
                var vivienda = 0;
        }
        if ($('#fav').is(':checked')) {
                var fav = 1;
        } else {
                var fav = 0;
        }
        if ($('#ban').is(':checked')) {
                var ban = 1;
        } else {
                var ban = 0;
        }


        $.ajax({
                "method": "POST",
                "url": "../controllers/ajax.php",
                "data": {
                        id_operacion: id_operacion,
                        id_tabla: id_tabla,
                        titulo: titulo,
                        subtitulo: subtitulo,
                        economia: economia,
                        demografia: demografia,
                        AyG: AyG,
                        turismo: turismo,
                        vivienda: vivienda,
                        fav: fav,
                        ban: ban,
                        img64: img64,
                        comentario: comentario,
                        operacion:'insertar'

                }
        }).done(function(respuesta) {
                //RESPUESTA DEL SERVIDOR
                $('#txtHint').html(respuesta);
        });
        
});
//conexion AJAX 
$("#remove").click(function(e) {   
        var id_operacion = $('#operaciones').val();
        var id_tabla = $('#tablas').val();  
        
        $.ajax({
                "method": "POST",
                "url": "../controllers/ajax.php",
                "data": {
                        id_operacion: id_operacion,
                        id_tabla: id_tabla,
                        operacion:'remove'

                }
        }).done(function(respuesta) {
                //RESPUESTA DEL SERVIDOR
                $('#txtHint').html(respuesta);
        });

});
</script>

