document.addEventListener('DOMContentLoaded', function () {
    

    //OPCIONES GLOBALES https://api.highcharts.com/highcharts/?_ga=2.28196540.1890809574.1651928294-1237859957.1651343397
    Highcharts.setOptions({
        lang: {
            months: [
                'Enero', 'Febrero', 'Marzo', 'Abril',
                'Mayo', 'Junio', 'Julio', 'Agosto',
                'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ],
            weekdays: [
                 'Lunes', 'Martes', 'Miércoles',
                'Jueves', 'Viernes', 'Sábado', 'Domingo'
            ]
        },
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
            borderWidth: 0,
            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            plotShadow: true,
            plotBorderWidth: 0
        },
        caption:{

        margin:10


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
   
    }

}





function pintarChart(anyos,data,title){

    
    var chart5 = new Highcharts.Chart({
        title: {
            text: title
        },
        chart: {
            renderTo: 'chart-container',
            type: 'area'
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
function pintarChart2(anyos,data,title,type){

    
    var chart5 = new Highcharts.Chart({
        title: {
            text: title
        },
        chart: {
            renderTo: 'chart-container',
            type: type
        },
        xAxis: {
            categories: anyos
            
        },
        series: 
            data
    
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

//FUNCION PARA CREAR UN OBJETO CHART
function chart(title,xAxysName,yAxysName,anyos,periodos,dataSeries,type,color) {
    this.title = title;
    this.xAxysName = xAxysName;
    this.yAxysName = yAxysName;
    this.anyos = anyos;
    this.periodos = periodos;
    //Dataseries será un objeto con varios objetos
    this.dataSeries = dataSeries;
    this.type = type;
    this.color = color;
  }
