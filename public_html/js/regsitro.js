$( document ).ready(function() {

//función comprobrar password iguales
//console.log('dentro de la funcion');
$('#form-registro').submit(function() {
    // DO STUFF...
    //console.log('dentro de la funcion');
    if(checkPassword()==3){

        return true; // return false to cancel form action
    }
    else{
        preventDefault();
        return false;
    }
});


// $('#user-password').focus(function() {
//     this.value('');
//   });

$('#user-password2').blur(function(){
    //console.log('entro en on blur');
    checkPassword();

});

//Al pulsar el boton iniciar sesión se muestra el panel de login
$('#btn-login').on("click",function(){
    $('#login').show();
});

$('#btn-close-log').on("click",function(){
    $( "#login" ).fadeOut( "slow", function() {
    });
});
$('a#signup').on("click",function(){
    $( "#login" ).fadeOut( "slow", function() {
    });
    $('#registro').show();
});
$('#btn-close-reg').on("click",function(){
    $( "#registro" ).fadeOut( "slow", function() {
      });
});

function checkPassword(){
    // //recogemos valores.
    // var pass1=$('#user-password').val();
    // var pass2=$('#user-password2').val();
    // //console.log(pass1);
    // //console.log(pass2);
    // if(pass1==pass2){
    //     console.log ('los password coinciden');
        
    //     $('.valid-feedback').show();
    //     $('.invalid-feedback').hide();
    //     return true;
    // }
    
    
    // else{
    //     console.log ('los password no coinciden');
    //     $('.invalid-feedback').show();
    //     $('.valid-feedback').hide();
    //     return false;
    // }
}
});