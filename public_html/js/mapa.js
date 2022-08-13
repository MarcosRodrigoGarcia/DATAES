const tasaParo=[['es-vi',9.38],['es-ab',16.57],['es-a',14.78],['es-al',15.9],['es-av',15.35],['es-ba',18.89],['es-pm',18.03],['es-b',10.14],['es-bu',9.94],['es-cc',19.14],['es-ca',26.3],['es-cs',11.84],['es-cr',18.28],['es-co',16.85],['es-c',9.96],['es-cu',10.41],['es-gi',10.25],['es-gr',18.95],['es-gu',10.14],['es-ss',6.96],['es-h',18.24],['es-hu',6.77],['es-j',18.36],['es-le',12.79],['es-l',6.91],['es-lo',11.21],['es-lu',10.2],['es-m',11.85],['es-ma',20.16],['es-mu',13.44],['es-na',10.44],['es-or',11.66],['es-o',11.97],['es-p',10.17],['es-gc',20.51],['es-po',13.52],['es-sa',12.18],['es-tf',20.06],['es-s',10.53],['es-sg',8.94],['es-se',17.95],['es-so',8.07],['es-t',12.82],['es-te',10.35],['es-to',13.02],['es-v',11.65],['es-va',9.42],['es-bi',9.55],['es-za',12.8],['es-z',10.87],['es-ce',29.21],['es-me',22.12]];
const poblacion= [['es-vi',333940],['es-ab',388270],['es-a',1879888],['es-al',727945],['es-av',157664],['es-ba',672137],['es-pm',1171543],['es-b',5743402],['es-bu',357650],['es-cc',391850],['es-ca',1244049],['es-cs',585590],['es-cr',495045],['es-co',781451],['es-c',1121815],['es-cu',196139],['es-gi',781788],['es-gr',919168],['es-gu',261995],['es-ss',727121],['es-h',524278],['es-hu',222687],['es-j',631381],['es-le',456439],['es-l',438517],['es-lo',319914],['es-lu',327946],['es-m',6779888],['es-ma',1685920],['es-mu',1511251],['es-na',661197],['es-or',306650],['es-o',1018784],['es-p',160321],['es-gc',1131065],['es-po',945408],['es-sa',329245],['es-tf',1044887],['es-s',582905],['es-sg',153478],['es-se',1950219],['es-so',88884],['es-t',816772],['es-te',134176],['es-to',703772],['es-v',2591875],['es-va',520649],['es-bi',1159443],['es-za',170588],['es-z',972528],['es-ce',84202],['es-me',87076]];    
const nacimientos2021 = [['es-vi',2339],['es-ab',2803],['es-a',13382],['es-al',6912],['es-av',838],['es-ba',5003],['es-pm',9360],['es-b',42731],['es-bu',2154],['es-cc',2399],['es-ca',9183],['es-cs',4159],['es-cr',3398],['es-co',5726],['es-c',6567],['es-cu',1150],['es-gi',6326],['es-gr',7151],['es-gu',1660],['es-ss',5119],['es-h',4271],['es-hu',1443],['es-j',4499],['es-le',2283],['es-l',3348],['es-lo',2310],['es-lu',1674],['es-m',52857],['es-ma',12655],['es-mu',13792],['es-na',5054],['es-or',1452],['es-o',4876],['es-p',919],['es-gc',6993],['es-po',5655],['es-sa',1842],['es-tf',6038],['es-s',3437],['es-sg',912],['es-se',15605],['es-so',584],['es-t',6093],['es-te',879],['es-to',4882],['es-v',18412],['es-va',3321],['es-bi',7417],['es-za',774],['es-z',6766],['es-ce',895],['es-me',1017]];
const explotacionesAgricolasEco=[['es-vi',3145],['es-ab',105788],['es-a',17171],['es-al',54176],['es-av',4845],['es-ba',83778],['es-pm',15780],['es-b',29713],['es-bu',8445],['es-cc',26646],['es-ca',111533],['es-cs',6566],['es-cr',118967],['es-co',161461],['es-c',2238],['es-cu',43046],['es-gi',31120],['es-gr',117803],['es-gu',24886],['es-ss',981],['es-h',130674],['es-hu',6950],['es-j',77777],['es-le',6062],['es-l',84204],['es-lo',5340],['es-lu',7104],['es-m',8242],['es-ma',30545],['es-mu',84919],['es-na',18727],['es-or',2863],['es-o',10577],['es-p',3998],['es-gc',895],['es-po',892],['es-sa',3675],['es-tf',2167],['es-s',4100],['es-sg',7337],['es-se',128034],['es-so',4338],['es-t',16249],['es-te',22335],['es-to',119694],['es-v',27844],['es-va',16816],['es-bi',1065],['es-za',20079],['es-z',49941],['es-ce',],['es-me',]];
const cabezasBovino=[['es-vi',43060],['es-ab',14653],['es-a',8115],['es-al',1905],['es-av',242453],['es-ba',324882],['es-pm',28559],['es-b',162902],['es-bu',82681],['es-cc',564190],['es-ca',130905],['es-cs',21732],['es-cr',112804],['es-co',160838],['es-c',346027],['es-cu',18133],['es-gi',148704],['es-gr',21885],['es-gu',15963],['es-ss',50656],['es-h',71076],['es-hu',282769],['es-j',31296],['es-le',164697],['es-l',350357],['es-lo',43322],['es-lu',477247],['es-m',93580],['es-ma',18540],['es-mu',78133],['es-na',124536],['es-or',70502],['es-o',409918],['es-p',67903],['es-gc',12949],['es-po',100738],['es-sa',596495],['es-tf',6989],['es-s',269640],['es-sg',135326],['es-se',111099],['es-so',23933],['es-t',14134],['es-te',51745],['es-to',327441],['es-v',23865],['es-va',56966],['es-bi',46851],['es-za',123599],['es-z',73697],['es-ce',],['es-me',]];
const cabezasOvino=[['es-vi',48168],['es-ab',473172],['es-a',81652],['es-al',197017],['es-av',158639],['es-ba',2574326],['es-pm',285736],['es-b',128301],['es-bu',177527],['es-cc',1259740],['es-ca',125991],['es-cs',110180],['es-cr',965917],['es-co',743321],['es-c',28194],['es-cu',377981],['es-gi',93985],['es-gr',445143],['es-gu',182871],['es-ss',125465],['es-h',216817],['es-hu',498826],['es-j',296686],['es-le',428263],['es-l',208961],['es-lo',103590],['es-lu',48381],['es-m',82652],['es-ma',204417],['es-mu',612592],['es-na',466650],['es-or',62106],['es-o',40084],['es-p',206450],['es-gc',28653],['es-po',21680],['es-sa',361541],['es-tf',11663],['es-s',34273],['es-sg',208378],['es-se',370026],['es-so',186958],['es-t',57524],['es-te',590473],['es-to',444395],['es-v',83202],['es-va',307148],['es-bi',49009],['es-za',629199],['es-z',565487],['es-ce',],['es-me',]];
const cabezaCaprino=[['es-vi',3839],['es-ab',93846],['es-a',34108],['es-al',167747],['es-av',70947],['es-ba',140745],['es-pm',12469],['es-b',19815],['es-bu',6724],['es-cc',128190],['es-ca',144460],['es-cs',22994],['es-cr',127173],['es-co',63480],['es-c',6687],['es-cu',23999],['es-gi',9515],['es-gr',167629],['es-gu',13903],['es-ss',7877],['es-h',56400],['es-hu',25418],['es-j',64271],['es-le',27144],['es-l',21519],['es-lo',11027],['es-lu',13781],['es-m',33154],['es-ma',229759],['es-mu',211410],['es-na',11632],['es-or',10644],['es-o',32332],['es-p',3471],['es-gc',137043],['es-po',7563],['es-sa',7348],['es-tf',58952],['es-s',18748],['es-sg',3184],['es-se',177115],['es-so',5643],['es-t',18971],['es-te',13310],['es-to',133481],['es-v',22353],['es-va',5128],['es-bi',12385],['es-za',15387],['es-z',14171],['es-ce',],['es-me',]];
const cabezasPorcino=[['es-vi',20822],['es-ab',407159],['es-a',58029],['es-al',463375],['es-av',246374],['es-ba',1478735],['es-pm',85739],['es-b',1922673],['es-bu',509874],['es-cc',203350],['es-ca',80288],['es-cs',758160],['es-cr',79243],['es-co',293195],['es-c',316384],['es-cu',395132],['es-gi',1006341],['es-gr',271841],['es-gu',19015],['es-ss',5858],['es-h',232467],['es-hu',1858293],['es-j',126982],['es-le',139299],['es-l',4665626],['es-lo',175662],['es-lu',254777],['es-m',19290],['es-ma',398280],['es-mu',2366928],['es-na',827530],['es-or',434943],['es-o',7319],['es-p',136224],['es-gc',15265],['es-po',402713],['es-sa',662676],['es-tf',22666],['es-s',2082],['es-sg',1281574],['es-se',680281],['es-so',558476],['es-t',598156],['es-te',609917],['es-to',1884257],['es-v',565594],['es-va',409284],['es-bi',2984],['es-za',481234],['es-z',1648848],['es-ce',],['es-me',]];
const avesCorral=[['es-vi',415536],['es-ab',3053964],['es-a',747923],['es-al',923606],['es-av',1670613],['es-ba',5470918],['es-pm',286546],['es-b',4141353],['es-bu',3762964],['es-cc',3124154],['es-ca',444554],['es-cs',9219912],['es-cr',1039587],['es-co',1390074],['es-c',1618099],['es-cu',6902678],['es-gi',3520593],['es-gr',3546749],['es-gu',4792539],['es-ss',286523],['es-h',4808817],['es-hu',9041156],['es-j',1657987],['es-le',2766669],['es-l',22347660],['es-lo',3231889],['es-lu',6473339],['es-m',1495671],['es-ma',795068],['es-mu',7317427],['es-na',6944276],['es-or',10839420],['es-o',157527],['es-p',591216],['es-gc',838520],['es-po',5894266],['es-sa',359208],['es-tf',1763368],['es-s',80444],['es-sg',5370225],['es-se',6186589],['es-so',661134],['es-t',12534406],['es-te',3485147],['es-to',11002973],['es-v',9400421],['es-va',6526270],['es-bi',789915],['es-za',1138926],['es-z',10721943],['es-ce',],['es-me',]];
const conejasMadres=[['es-vi',974],['es-ab',26738],['es-a',5078],['es-al',66],['es-av',7021],['es-ba',1517],['es-pm',550],['es-b',51753],['es-bu',5380],['es-cc',1612],['es-ca',319],['es-cs',50787],['es-cr',4718],['es-co',6],['es-c',34791],['es-cu',19106],['es-gi',8532],['es-gr',4229],['es-gu',2943],['es-ss',10035],['es-h',15],['es-hu',13192],['es-j',797],['es-le',71635],['es-l',37995],['es-lo',10393],['es-lu',16711],['es-m',415],['es-ma',1100],['es-mu',9662],['es-na',23107],['es-or',37677],['es-o',1193],['es-p',7744],['es-gc',1023],['es-po',29302],['es-sa',17023],['es-tf',4125],['es-s',7855],['es-sg',22931],['es-se',11],['es-so',5113],['es-t',40120],['es-te',50913],['es-to',502],['es-v',43811],['es-va',29482],['es-bi',9154],['es-za',23219],['es-z',18900],['es-ce',],['es-me',]];
const colmenas=[['es-vi',2561],['es-ab',19945],['es-a',16270],['es-al',31080],['es-av',2534],['es-ba',185844],['es-pm',4331],['es-b',4410],['es-bu',7205],['es-cc',114380],['es-ca',6442],['es-cs',39986],['es-cr',16449],['es-co',8563],['es-c',3805],['es-cu',22601],['es-gi',3049],['es-gr',20609],['es-gu',9660],['es-ss',3561],['es-h',12602],['es-hu',14770],['es-j',15069],['es-le',22126],['es-l',21934],['es-lo',6937],['es-lu',17290],['es-m',877],['es-ma',21331],['es-mu',19404],['es-na',2840],['es-or',17159],['es-o',11274],['es-p',4002],['es-gc',973],['es-po',2942],['es-sa',36420],['es-tf',2275],['es-s',3386],['es-sg',4242],['es-se',13840],['es-so',3704],['es-t',33430],['es-te',17787],['es-to',13407],['es-v',73528],['es-va',1165],['es-bi',2767],['es-za',10240],['es-z',19175],['es-ce',],['es-me',]];
const equinos=[['es-vi',4086],['es-ab',893],['es-a',682],['es-al',1125],['es-av',4951],['es-ba',11131],['es-pm',5888],['es-b',2997],['es-bu',5720],['es-cc',9346],['es-ca',7384],['es-cs',1836],['es-cr',2327],['es-co',6980],['es-c',4074],['es-cu',434],['es-gi',3778],['es-gr',3168],['es-gu',248],['es-ss',7563],['es-h',8049],['es-hu',1069],['es-j',3204],['es-le',9134],['es-l',6018],['es-lo',2645],['es-lu',9024],['es-m',3052],['es-ma',3977],['es-mu',1082],['es-na',21735],['es-or',962],['es-o',22099],['es-p',2404],['es-gc',580],['es-po',1798],['es-sa',4377],['es-tf',183],['es-s',22444],['es-sg',3640],['es-se',12983],['es-so',1072],['es-t',587],['es-te',236],['es-to',2126],['es-v',1171],['es-va',981],['es-bi',5916],['es-za',2142],['es-z',689],['es-ce',],['es-me',]];
  





function elegirChart(){
    var selected=$('#mapa').val();
    if (selected=='paro'){
        var data=tasaParo;
    }
    else if(selected=='poblacion'){
        var data=poblacion
    }
    else if(selected=='nacimientos'){
        var data=nacimientos2021;
    }
    else if(selected=='eco'){
        var data=explotacionesAgricolasEco;
    }
    else if(selected=='bovino'){
        var data=cabezasBovino;

    }
    else if(selected=='ovino'){
        var data=cabezasOvino;
    }
    else if(selected=='carpino'){
        var data=cabezaCaprino;
    }
    else if(selected=='porcino'){
        var data=cabezasPorcino;
    }
    else if(selected=='aves'){
        var data=avesCorral;
    }
    else if(selected=='conejas'){
        var data=conejasMadres;
    }
    else if(selected=='colmenas'){
        var data=colmenas;
    }
    else if(selected=='equinos'){
        var data=equinos;
    }
    createMapChart(data);
}



function createMapChart(data){
 
(async () => {
    
    const topology = await fetch(
      'https://code.highcharts.com/mapdata/countries/es/es-all.topo.json'
    ).then(response => response.json());
  
    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.


    
    // Create the chart
    Highcharts.mapChart('container-map', {
      chart: {
        map: topology
      },
  
      title: {
        text: 'Highcharts Maps basic demo'
      },
  
      subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/es/es-all.topo.json">Spain</a>'
      },
  
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
  
      colorAxis: {
        min: 0
      },
  
      series: [{
          
        data: data,
        name: 'Random data',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    });
  
  })();
    
}