$( document ).ready(function() {
       
      

        // var img64;

        //         function encodeImgtoBase64(element) {
        //                 var file = element.files[0];
        //                 var reader = new FileReader();
        //                 reader.onloadend = function() {

        //                         $("#base64Code").val(reader.result);
        //                         img64 = reader.result;
        //                         // $("#convertImg").text(reader.result);
        //                         //mostrar imagen
        //                         // $("#base64Img").attr("src", reader.result);
        //                 }
        //                 reader.readAsDataURL(file);
        //         }

        //         function readURL(input) {
        //                 if (input.files && input.files[0]) {
        //                         var reader = new FileReader();

        //                         reader.onload = function(e) {
        //                                 $('#picture').attr('src', e.target.result);
        //                         }

        //                         reader.readAsDataURL(input.files[0]);
        //                 }
        //         }

        //         $("#foto").change(function() {
        //                 readURL(this);
        //         });

        //         //conexion AJAX 
        //         $("#add").click(function(e) {

        //                 //rescatamos valor de las variables
        //                 var id_operacion = $('#operaciones').val();
        //                 var id_tabla = $('#tablas').val();
        //                 var titulo = $('#operaciones option:selected').text();
        //                 var subtitulo = $('#tablas option:selected').text();
        //                 var comentario = $('#comentario').val();
        //                 //console.log(img64);



        //                 if ($('#Economía').is(':checked')) {
        //                         var economia = 1;
        //                 } else {
        //                         var economia = 0;
        //                 }
        //                 if ($('#demografia').is(':checked')) {
        //                         var demografia = 1;
        //                 } else {
        //                         var demografia = 0;
        //                 }
        //                 if ($('#AyG').is(':checked')) {
        //                         var AyG = 1;
        //                 } else {
        //                         var AyG = 0;
        //                 }
        //                 if ($('#turismo').is(':checked')) {
        //                         var turismo = 1;
        //                 } else {
        //                         var turismo = 0;
        //                 }
        //                 if ($('#vivienda').is(':checked')) {
        //                         var vivienda = 1;
        //                 } else {
        //                         var vivienda = 0;
        //                 }
        //                 if ($('#fav').is(':checked')) {
        //                         var fav = 1;
        //                 } else {
        //                         var fav = 0;
        //                 }
        //                 if ($('#ban').is(':checked')) {
        //                         var ban = 1;
        //                 } else {
        //                         var ban = 0;
        //                 }


        //                 $.ajax({
        //                         "method": "POST",
        //                         "url": "../controllers/ajax.php",
        //                         "data": {
        //                                 id_operacion: id_operacion,
        //                                 id_tabla: id_tabla,
        //                                 titulo: titulo,
        //                                 subtitulo: subtitulo,
        //                                 economia: economia,
        //                                 demografia: demografia,
        //                                 AyG: AyG,
        //                                 turismo: turismo,
        //                                 vivienda: vivienda,
        //                                 fav: fav,
        //                                 ban: ban,
        //                                 img64: img64,
        //                                 comentario: comentario,
        //                                 operacion:'insertar'

        //                         }
        //                 }).done(function(respuesta) {
        //                         //RESPUESTA DEL SERVIDOR
        //                         $('#txtHint').html(respuesta);
        //                 });

                        

        //         });

});