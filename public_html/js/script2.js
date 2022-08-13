document.addEventListener('DOMContentLoaded', function () {
    console.log ("PRUEBA");

    //OPCIONES GLOBALES
    Highcharts.setOptions({
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
            borderWidth: 3,
            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            plotShadow: true,
            plotBorderWidth: 1
        }
    });

    // NORMAL
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });

    
var chart1 = new Highcharts.Chart({
    chart: {
        renderTo: 'container2',
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        // pointStart: Date.UTC(2010, 0, 1),
        // pointInterval: 3600 * 1000 // one hour
    }]
});
var chart2 = new Highcharts.Chart({
    chart: {
        renderTo: 'container3',
        type: 'column'
    },
    xAxis: {
        type: 'datetime'
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6],
        //punto de partida
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 3153600000
        

        //Opciones pointInterval (mili segundos)
        // -------------------------
        // Una hora-->pointInterval: 3600 * 1000 
        // Un Mes -->pointInterval: 3600 * 24 * 30 * 1000
        //one year pointInterval: 3600 * 24 * 30 * 1000 *12
        
        // TAMBIEN PODEMOS ASIGNARLE LOS INTERVALOS POR MEDIO DE VALORES AL EJE POR MEDIO DE CATEGORÍAS
        // ------------------
        // xAxis: {
        //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        // },
    }]
});
});

function consulta(){
    //console.log("dentro de consulta");
    const request = new XMLHttpRequest();
    //cogemos el valor seleccionado en el select
    var indicador=document.getElementById('indicador');
    var serie=indicador.value;
    var title=$('#indicador option:selected').text();
    

    //Cojemos los valores de fecha
   
    if($('#from-date').val()==""){
        var fecha_desde_consulta="";
    }
        else{
        var fecha_desde= $('#from-date').val();
        var split= fecha_desde.split('-');

        

        var fecha_desde_consulta = split[0]+split[1]+split[2]+"";
        //console.log(fecha_desde_consulta);
        
        
    }
    if($('#to-date').val()==""){
        var fecha_hasta_consulta="";
    }
        else{
        var fecha_hasta= $('#to-date').val();
        var split= fecha_hasta.split('-');

        

        var fecha_hasta_consulta = split[0]+split[1]+split[2]+"";
        //console.log(fecha_hasta_consulta);
        
        
    }

    
    //console.log(serie);
    const endpoint = 'https://servicios.ine.es/wstempus/js/ES/DATOS_SERIE/'+serie+'?date='+fecha_desde_consulta+':'+fecha_hasta_consulta;
    //console.log(endpoint);

    request.open('GET', endpoint, true);
    request.send();
    request.onreadystatechange = function(){
        
       ////console.log(request.responseText);
       let datos = JSON.parse(this.responseText);
       
       extraerDatos(datos,title);
       //acceder al primer elemento
       
    //    for (let item of datos){
    //        //console.log(item);
    //        var newSelect=document.createElement("option");
    //        newSelect.setAttribute("value",item.Cod_IOE);
    //        var newContent=document.createTextNode(item.Nombre + " "+item.Cod_IOE);
    //        newSelect.appendChild(newContent);
    //        select.appendChild(newSelect);
           
    //    }
    }

}



function extraerDatos(datosJSON,title){
        var anyos = new Array();
        var data = new Array();
        var nombreTabla = datosJSON.Nombre;
    
           for (let item of datosJSON.Data){
           anyos.push(item.Anyo+" "+item.FK_Periodo);
           data.push(item.Valor);

           
       }
       console.log (nombreTabla);
       console.log (anyos);
       console.log (data);

       pintarChart(anyos,data,title);
       
      
}

function pintarChart(anyos,data,title){
    
    var chart5 = new Highcharts.Chart({
        title: {
            text: title
        },
        chart: {
            renderTo: 'chart-container',
        },
        xAxis: {
            categories: anyos
            
        },
        series: [{
            name: 'España',
            data: data
            
        
        }]
    });

}

function cambiar(){
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'line '
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
}


