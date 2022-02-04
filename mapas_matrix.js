///////////Creación variable mapa/////////// 
var map = L.map('map', {
		zoomControl: false,
		center: [40, -3],
		zoom: 6,
		minZoom: 3,
		maxZoom: 20,
		maxBounds: [
			[20, -50],
			[50, 50]
			],
	});



///////////Funcionalidades estructura del visor///////////
//Layers on top
map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'none';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'none';
//Barra de interacción de capas	tantaas sildebar como grupos de capas
var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var geocoder = L.Control.geocoder({ position: 'topleft',
	//defaultMarkGeocode: false
	}).addTo(map);


///////////Diseño caracteriticas basicas del visor///////////
//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h3>Mortalidad por enfermedades de personas mayores en España';
	 return div;
	};
	title2.addTo(map);
//Logo Matrix	
var title1 = L.control({position: 'bottomright'});
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info1');
	 div.innerHTML +=
	 '<a href="https://www.fundacionmatrix.es"><img src="images/matrix.png" width="75%" ></img></a>';
	 return div;
	};
	title1.addTo(map);
//Logo demos
var title3 = L.control({position: 'bottomright'});
	title3.onAdd = function (map) {
var div = L.DomUtil.create('div','info3');
	 div.innerHTML +=
	 '<a><img src="images/MAYORSIG.jpg" width="90px" height="63px" ></img></a>';
	 return div;
	};
	title3.addTo(map);  
// logo mayorsig

	var title4 = L.control({position: 'bottomright'});
	title4.onAdd = function (map) {
var div = L.DomUtil.create('div','info4');
	 div.innerHTML +=
	 '<a><img src="images/DEMOS.png" width="90px" height="63px" ></img></a>';
	 return div;
	};
	title4.addTo(map);  


///////////Cartografía de referencia///////////
var Mapa_fondo = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap </a>| Map data © 2019 <a href="https://www.fundacionmatrix.es"><strong>Fundación Matrix</strong></a>',
	}).addTo(map);		
//			var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
//			attribution: '©OpenStreetMap, ©CartoDB'
//			}).addTo(map);
//			var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
//			attribution: '©OpenStreetMap, ©CartoDB',
//			pane: 'labels'
//			}).addTo(map);
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy'
	});
var osm1 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	opacity: 0,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});
var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});
var osm3 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap </a>| Map data © 2019 <a href="https://www.fundacionmatrix.es"><strong>Fundación Matrix</strong></a>',
	});
//Límites
var comunidades = L.geoJson(comunidades, {
	color: "#17202A", 
	weight: 1.4,
	opacity: 0.5,
	fillOpacity: 0,
	attribution: '| © <a href="http://www.ign.es">Instituto Geográfico Nacional |'			
	}).addTo(map);

var limitespj = L.geoJson(limitespj, {
	color: "#17202A", 
	weight: 1.2,
	opacity: 0.6,
	fillOpacity: 1,
	attribution: '| © <a href="http://www.ign.es">Instituto Geográfico Nacional |'			
	});

	



//rasters overlay

//Rasters overlay//

var base10 = L.imageOverlay('images/vulner10_.png',
  imageBounds = [
    [27.097, -18.83],
    [44.75660, 4.97]
  ]);

 base10.setOpacity( 0.7);

var base4 = L.imageOverlay('images/vulner4_.png',
  imageBounds = [
    [27.097, -18.83],
    [44.75660, 5.0]
  ]);

base4.setOpacity( 0.7);

///////////Otras funcionalidades
//minimapa	
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"bottomright", width:100,height:100,}).addTo(map); 					
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[40, -5], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen						
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);

///////////Estilo de las capas especificas del visor///////////




/*
// Capa isolineas 4 enf

function styleCURV4(feature) {
	return {
		fillColor: '#000000',
		weight: 1.5,
		opacity: 1,
		color: '#000000',
		dashArray: '1',
		fillOpacity: 1
	};

};



var curvas4 = L.geoJson(CURV4, {
	style: styleCURV4,
onEachFeature: function (feature, layer) {
        layer.bindTooltip(feature.properties.ELEV.toLocaleString().replace(".", ","),{permanent: true, opacity: 1, direction: 'center',});
    }
});	


// Capa isolineas 10 enf

function styleCURV10(feature) {
	return {
		fillColor: '#000000',
		weight: 1.5,
		opacity: 1,
		color: '#000000',
		dashArray: '1',
		fillOpacity: 1
	};

};



var curvas10 = L.geoJson(CURV10, {
	style: styleCURV10,
onEachFeature: function (feature, layer) {
        layer.bindTooltip(feature.properties.ELEV.toLocaleString().replace(".", ","),{permanent: true, opacity: 1, direction: 'center',});
    }
});	



    



// G1 Hipertensivas (5 clases)


function getColor1(a) {
	
	return a > 0.500? '#e11e00' :
	a > 0.400? '#ea6452' :
	a > 0.300? '#f3a193' :
	a > 0.200? '#f7c5bb' :
	a > 0.100? '#fce9e3' :
	'#C2523C';
};


function style1(feature) {
	return {
		fillColor: getColor1(feature.properties.G1),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.8
	};

};

function popup1(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G1.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson1 = L.geoJson(ENF, {
	style: style1,
	onEachFeature: popup1
});

// diabetes (7c)

function getColor2(a) {
	
	return  a > 0.400? '#e11e01' :
	a > 0.350? '#e64d35' :
	a > 0.300? '#ef7e6c' :
	a > 0.250? '#efa294' :
	a > 0.200? '#f4b9ac' :
	a > 0.150? '#f6d1c9' :
	a > 0.100? '#fce9e3' :
	'#C2523C';
};

function style2(feature) {
	return {
		fillColor: getColor2(feature.properties.G2),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.8
	};

};

function popup2(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G2.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson2 = L.geoJson(ENF, {
	style: style2,
	onEachFeature: popup2
});
*/
// circulatorias

function getColor3(a) {
	return  a > 8.01? '#e11e01' :
	a > 7.01? '#e64d35' :
	a > 6.01? '#ef7e6c' :
	a > 5.01? '#efa294' :
	a > 4.01? '#f4b9ac' :
	a > 3.01? '#f6d1c9' :
	a > 2.01? '#fce9e3' :
	'#C2523C';
};

function style3(feature) {
	return {
		fillColor: getColor3(feature.properties.G3),
		weight: 0.5,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup3(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G3.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<br><strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson3 = L.geoJson(ENF, {
	style: style3,
	onEachFeature: popup3
}).addTo(map);



// G4 ( 8 clases)

function getColor4(a) {
	
	return  a > 2.00? ' #e11e00':
	a > 1.80? '#e7462f' :
	a > 1.60? '#ec705a' :
	a > 1.40? '#f09788' :
	a > 1.20? '#f1ac9d' :
	a > 1.00? '#f6bfb7' :
	a > 0.80? '#fad5cd' :
	a > 0.60? ' #fce9e3' :
	'#C2523C';
};

function style4(feature) {
	return {
		fillColor: getColor4(feature.properties.G4),
		weight: 0.5,
		opacity: 0,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup4(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G4.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<br><strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson4 = L.geoJson(ENF, {
	style: style4,
	onEachFeature: popup4
});



//G5
/*	
	function getColor5(a) {
	
	return  a > 0.200? ' #e11e00':
	a > 0.175? '#e7462f' :
	a > 0.150? '#ec705a' :
	a > 0.125? '#f09788' :
	a > 0.100? '#f1ac9d' :
	a > 0.075? '#f6bfb7' :
	a > 0.050? '#fad5cd' :
	a > 0.025? '#fce9e3' :
	'#C2523C';
};

function style5(feature) {
	return {
		fillColor: getColor5(feature.properties.G5),
		weight: 0.5,
		opacity: 0,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup5(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G5.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson5 = L.geoJson(ENF, {
	style: style5,
	onEachFeature: popup5
});
*/
//G6

function getColor6(a) {

return a > 3.00? '#e11e00' :
	a > 2.75? '#e63d26' :
	a > 2.50? '#ea5d46' :
	a > 2.25? '#ed7f6c' :
	a > 2.00? '#f2998a' :	
	a > 1.75? '#f3a89c' :
	a > 1.50? '#f6b9ae' :
	a > 1.25? '#f8c9c1' :
    a > 1.00? '#fad9d2' :
	a > 0.75? '#fbe9e3' :
	'#C2523C';
};

function style6(feature) {
	return {
		fillColor: getColor6(feature.properties.G6),
		weight: 0.5,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup6(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G6.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson6 = L.geoJson(ENF, {
	style: style6,
	onEachFeature: popup6
});



// G7

function getColor7(a) {
	
	return a > 0.325? '#e11e00' :
	a > 0.300? '#e63d26' :
	a > 0.275? '#ea5d46' :
	a > 0.250? '#ed7f6c' :
	a > 0.225? '#f2998a' :	
	a > 0.200? '#f3a89c' :
	a > 0.175? '#f6b9ae' :
	a > 0.150? '#f8c9c1' :
    a > 0.125? '#fad9d2' :
	a > 0.100? '#fbe9e3' :
	'#C2523C';
};

function style7(feature) {
	return {
		fillColor: getColor7(feature.properties.G7),
		weight: 0.5,
		opacity: 0,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup7(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G7.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson7 = L.geoJson(ENF, {
	style: style7,
	onEachFeature: popup7
});



//G8

function getColor8(a) {
	
return  a > 0.150? '#e11e01' :
	a > 0.125? '#e64d35' :
	a > 0.100? '#ef7e6c' :
	a > 0.075? '#efa294' :
	a > 0.050? '#f4b9ac' :
	a > 0.025? '#f6d1c9' :
	'#C2523C';
};

function style8(feature) {
	return {
		fillColor: getColor8(feature.properties.G8),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup8(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G8.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson8 = L.geoJson(ENF, {
	style: style8,
	onEachFeature: popup8
});

//G9
/*
function getColor9(a) {
	
	return  a > 0.30? '#e11e01' :
	a > 0.25? '#e64d35' :
	a > 0.20? '#ef7e6c' :
	a > 0.15? '#efa294' :
	a > 0.10? '#f4b9ac' :
	a > 0.05? '#f6d1c9' :
	'#C2523C';
};

function style9(feature) {
	return {
		fillColor: getColor9(feature.properties.G9),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup9(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G9.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson9 = L.geoJson(ENF, {
	style: style9,
	onEachFeature: popup9
});
*/
//G10 

function getColor10(a) {
    return a > 0.35? '#e11e00' :
	a > 0.30? '#ea6452' :
	a > 0.25? '#f3a193' :
	a > 0.20? '#f7c5bb' :
	a > 0.15? '#fce9e3' :
	'#C2523C';
	
};

function style10(feature) {
	return {
		fillColor: getColor10(feature.properties.G10),
		weight: 0.5,
		opacity: 0,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup10(feature, layer) {

	if (feature.properties && feature.properties.NAMEUNIT_1) {
		layer.bindTooltip("<div id='custom'>"
             +"<strong>Tasa: </strong>"+  
			feature.properties.G10.toLocaleString().replace(".", ",")+"‰<br>"+
			
			"<br><strong>Provincia: </strong>"+ 
            feature.properties.NAMEUNIT_1,{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson10 = L.geoJson(ENF, {
	style: style10,
	onEachFeature: popup10
});


//var mapa1 = L.layerGroup([curvas10,base10]).addTo(map);
//var mapa2 = L.layerGroup([curvas4,base4]);
//var mapa3 = L.layerGroup([geojson1]);
//var mapa4 = L.layerGroup([geojson2]);
var mapa5 = L.layerGroup([geojson3]);
var mapa6 = L.layerGroup([geojson4]);
//var mapa7 = L.layerGroup([geojson5]);
var mapa8 = L.layerGroup([geojson6]);
var mapa9 = L.layerGroup([geojson7]);
var mapa10 = L.layerGroup([geojson8]);
//var mapa11 = L.layerGroup([geojson9]);
var mapa12 = L.layerGroup([geojson10]);





var baseLayers = [
	{ label: "<strong>Limpiar mapa", layer: osm3 },
	/*{
	label: '<strong>Modelos espaciales de vulnerabilidad de personas mayores segúnenfermedades asociadas',
	children: [
	
	    { label: "Modelo espacial devulnerabilidad según la mortalidad por las 10 enfermedades máscomunes"},
		{ label: "Modelo espacial devulnerabilidad según la mortalidad por las 4 enfermedades máscomunes"},
	    
		
		 ]
	},*/

{
	label: '<strong>Mapas de mortalidad de personas mayores por enfermedades asociadas',
	children: [
	//{ label: "Enfermedades hipertensivas",layer: mapa3},
		//{ label: "Enfermedades diabéticas",layer: mapa4},
		{ label: "Enfermedades circulatorias",layer: mapa5},
		{ label: "Enfermedades respiratorias",layer: mapa6},
		//{ label: "Enfermedades hepáticas",layer: mapa7},
		{ label: "Enfermedades neurológicas",layer: mapa8},
		{ label: "Enfermedades renales",layer: mapa9},
		{ label: "Enfermedades sanguíneas",layer: mapa10},
		//{ label: "Enfermedades seniles",layer: mapa11},
		{ label: "Enfermedades oncológicas",layer: mapa12}

		]
	},

	];
	
	
var overlays = {
	label: 'Mapas de referencia',
	children: [
	
		//{ label: "<b>Límites de Comunidades Autónomas", layer: comunidades},
		{ label: "OpenStreetMap", layer: osm}
		
	]
};	



// modelo 10 enf
/*var htmlLegendCURVA10 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Modelo espacial de vulnerabilidad según la mortalidad por las 10 enfermedades máscomunes'+"<\h2>",
			style: styleCURV10,
			layer: curvas10,
			elements: [{
/*return a > 0.500? : '#e11e00' :
	a > 0.400? '#ea6452' :
	a > 0.300? '#f3a193' :
	a > 0.200? '#f7c5bb' :
	a > 0.100? '#fce9e3' :

				label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades <br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
		        label:"<h3>"+  '<br>Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

                label:'<br><img src="images/leg10.jpeg",></img><br>',
			
		        
				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegendCURVA10);

// modelo 4 enf
var htmlLegendCURVA4 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Modelo espacial de vulnerabilidad según la mortalidad por las 4 enfermedades máscomunes'+"<\h2>",
			style: styleCURV4,
			layer: curvas4,
			elements: [{
/*return a > 0.500? : '#e11e00' :
	a > 0.400? '#ea6452' :
	a > 0.300? '#f3a193' :
	a > 0.200? '#f7c5bb' :
	a > 0.100? '#fce9e3' :

				
				label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades <br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
		        label:"<h3>"+  '<br>Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

                label:'<br><img src="images/leg4.jpg",></img><br>',
			
		        
				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegendCURVA4);
*/
// hipertensivas

/*var htmlLegend1 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades hipertensivas. Promedio del periodo 2007-2018'+"<\h2>",
			style: style1,
			layer: geojson1,
			elements: [{
return a > 0.500? : '#e11e00' :
	a > 0.400? '#ea6452' :
	a > 0.300? '#f3a193' :
	a > 0.200? '#f7c5bb' :
	a > 0.100? '#fce9e3' :

				label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades <br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  '<br>Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,101 - 0,200'+"<\h4>",html: '',style: {'background-color': '#fce9e3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,201 - 0,300'+"<\h4>",html: '',style: {'background-color': '#f7c5bb','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,301 - 0,400'+"<\h4>",html: '',style: {'background-color': '#f3a193','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,401 - 0,500'+"<\h4>",html: '',style: {'background-color': '#ea6452','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '0,501 - 0,600'+"<\h4>",html: '',style: {'background-color': '#e11e00','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 


				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend1);

	//leyenda diabétes


	var htmlLegend2 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por Diabetes mellitus. Promedio del periodo 2007-2018<br>'+"<\h2>",
			style: style2,
			layer: geojson2,
			elements: [{
				
	return  a > 5.5? '#e11e01' :
	a > 5.0? '#e64d35' :
	a > 4.5? '#ef7e6c' :
	a > 4.0? '#efa294' :
	a > 3.5? '#f4b9ac' :
	a > 3.0? '#f6d1c9' :
	a > 2.5? '#fce9e3' :
	'#C2523C';
	
                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades <br><br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,101 - 0,150'+"<\h4>",html: '',style: {'background-color': '#fce9e3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,151 - 0,200'+"<\h4>",html: '',style: {'background-color': '#f6d1c9','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,201 - 0,250'+"<\h4>",html: '',style: {'background-color': '#f4b9ac','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,251 - 0,300'+"<\h4>",html: '',style: {'background-color': '#efa294','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '0,301 - 0,350'+"<\h4>",html: '',style: {'background-color': '#ef7e6c','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,351 - 0,400'+"<\h4>",html: '',style: {'background-color': '#e64d35','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,401 - 0,450'+"<\h4>",html: '',style: {'background-color': '#e11e01','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 

				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
    map.addControl(htmlLegend2);
*/

	// circulatorio


		var htmlLegend3 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades del sistema circulatorio. Promedio del periodo 2007-2018'+"<\h2>",
			style: style3,
			layer: geojson3,
			elements: [{

                
                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades<br><br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '2,01 - 3,00'+"<\h4>",html: '',style: {'background-color': '#fce9e3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '3,01 - 4,00'+"<\h4>",html: '',style: {'background-color': '#f6d1c9','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '4,01 - 5,00'+"<\h4>",html: '',style: {'background-color': '#f4b9ac','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '5,01 - 6,00'+"<\h4>",html: '',style: {'background-color': '#efa294','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '6,01 - 7,00'+"<\h4>",html: '',style: {'background-color': '#ef7e6c','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '7,01 - 8,00'+"<\h4>",html: '',style: {'background-color': '#e64d35','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '8,01 - 9,00'+"<\h4>",html: '',style: {'background-color': '#e11e01','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 

				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends. 
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend3);

 // Respiratorias/
 
	var htmlLegend4 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades del sistema respiratorio. Promedio del periodo 2007-2018'+"<\h2>",
			style: style4,
			layer: geojson4,
			elements: [{

                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades <br><br>'+"<\h3",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,61 - 0,80'+"<\h4>",html: '',style: {'background-color': '#fce9e3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,81 - 1,00'+"<\h4>",html: '',style: {'background-color': '#fad5cd','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '1,01 - 1,20'+"<\h4>",html: '',style: {'background-color': '#f6bfb7','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '1,21 - 1,40'+"<\h4>",html: '',style: {'background-color': '#f1ac9d','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '1,41 - 1,60'+"<\h4>",html: '',style: {'background-color': '#f09788','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '1,61 - 1,80'+"<\h4>",html: '',style: {'background-color': '#ec705a','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '1,81 - 2,00'+"<\h4>",html: '',style: {'background-color': '#e7462f','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '2,01 - 2,20'+"<\h4>",html: '',style: {'background-color': '#e11e00','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends. 
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend4);


 /* hepáticas
	var htmlLegend5 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades hepáticas. Promedio del periodo 2007-2018'+"<\h2>",
			style: style5,
			layer: geojson5,
			elements: [{

                
                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades <br><br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,001 - 0,025'+"<\h4>",html: '',style: {'background-color': '#fce9e3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,026 - 0,050'+"<\h4>",html: '',style: {'background-color': '#fad5cd','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,051 - 0,075'+"<\h4>",html: '',style: {'background-color': '#f6bfb7','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,076 - 0,100'+"<\h4>",html: '',style: {'background-color': '#f1ac9d','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '0,101 - 0,125'+"<\h4>",html: '',style: {'background-color': '#f09788','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,126 - 0,150'+"<\h4>",html: '',style: {'background-color': '#ec705a','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,151 - 0,175'+"<\h4>",html: '',style: {'background-color': '#e7462f','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,176 - 0,200'+"<\h4>",html: '',style: {'background-color': '#e11e00','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 

              

				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends. 
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend5);
*/
//G6 neurológicas
/*
return a > 0.500? '#e11e00' :
	a > 0.400? '#e63d26' :
	a > 0.300? '#ea5d46' :
	a > 0.300? '#ed7f6c' :
	a > 0.200? '#f2998a' :	
	a > 0.400? '#f3a89c' :
	a > 0.300? '#f6b9ae' :
	a > 0.200? '#f8c9c1' :
    a > 0.200? '#fad9d2' :
	a > 0.100? ' #fce9e3' :
	'#C2523C';
	*/
	var htmlLegend6 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades neurológicas Promedio del periodo 2007-2018'+"<\h2>",
			style: style6,
			layer: geojson6,
	        elements: [{
                
                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades <br><br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,75 - 1,00'+"<\h4>",html: '',style: {'background-color': '#fce9e3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '1,01 - 1,25'+"<\h4>",html: '',style: {'background-color': '#fad9d2','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '1,26 - 1,50'+"<\h4>",html: '',style: {'background-color': '#f8c9c1','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '1,51 - 1,75'+"<\h4>",html: '',style: {'background-color': '#f6b9ae','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '1,76 - 2,00'+"<\h4>",html: '',style: {'background-color': '#f3a89c','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '2,01 - 2,25'+"<\h4>",html: '',style: {'background-color': '#f2998a','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '2,26 - 2,50'+"<\h4>",html: '',style: {'background-color': '#ed7f6c','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
	            label:"<h4>"+  '2,51 - 2,75'+"<\h4>",html: '',style: {'background-color': '#ea5d46','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '2,76 - 3,00'+"<\h4>",html: '',style: {'background-color': '#e63d26','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '3,01 - 3,25'+"<\h4>",html: '',style: {'background-color': '#e11e00','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 

				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends. 
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend6);

//G7

var htmlLegend7 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades renales Promedio del periodo 2007-2018'+"<\h2>",
			style: style7,
			layer: geojson7,
	        elements: [{
                
                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades<br><br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,101 - 0,025'+"<\h4>",html: '',style: {'background-color': '#fce9e3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,126 - 0,150'+"<\h4>",html: '',style: {'background-color': '#fad9d2','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,151 - 0,175'+"<\h4>",html: '',style: {'background-color': '#f8c9c1','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,176 - 0,200'+"<\h4>",html: 
				'',style: {'background-color': '#f6b9ae','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '0,201 - 0,225'+"<\h4>",html: '',style: {'background-color': '#f3a89c','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,226 - 0,250'+"<\h4>",html: '',style: {'background-color': '#f2998a','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,251 - 0,275'+"<\h4>",html: '',style: {'background-color': '#ed7f6c','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
	            label:"<h4>"+  '0,276 - 0,300'+"<\h4>",html: '',style: {'background-color': '#ea5d46','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,301 - 0,325'+"<\h4>",html: '',style: {'background-color': '#e63d26','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,326 - 0,350'+"<\h4>",html: '',style: {'background-color': '#e11e00','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 

				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends. 
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend7);


// sanguineas

var htmlLegend8 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades sanguineas Promedio del periodo 2007-2018'+"<\h2>",
			style: style8,
			layer: geojson8,
	        elements: [{

                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades<br><br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,026 - 0,050'+"<\h4>",html: '',style: {'background-color': '#f6d1c9','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,051 - 0,075'+"<\h4>",html: '',style: {'background-color': '#f4b9ac','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,076 - 0,100'+"<\h4>",html: '',style: {'background-color': '#efa294','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,101 - 0,125'+"<\h4>",html: '',style: {'background-color': '#ef7e6c','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '0,126 - 0,150'+"<\h4>",html: '',style: {'background-color': '#e64d35','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,151 - 0,175'+"<\h4>",html: '',style: {'background-color': '#e11e01','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				
				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends. 
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend8);


	//seniles

/*

	var htmlLegend9 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades seniles Promedio del periodo 2007-2018'+"<\h2>",
			style: style9,
			layer: geojson9,
	        elements: [{


                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades<br><br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,06 - 0,10'+"<\h4>",html: '',style: {'background-color': '#f6d1c9','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,11 - 0,15'+"<\h4>",html: '',style: {'background-color': '#f7c5bb','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,16 - 0,20'+"<\h4>",html: '',style: {'background-color': '#efa294','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,21 - 0,25'+"<\h4>",html: '',style: {'background-color': '#ef7e6c','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '0,26 - 0,30'+"<\h4>",html: '',style: {'background-color': '#e64d35','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
				label:"<h4>"+  '0,31 - 0,35'+"<\h4>",html: '',style: {'background-color': '#e11e01','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 

				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends. 
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend9);

	          

*/

	// cancer

		var htmlLegend10 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Mortalidad de personas mayores por enfermedades oncológicas Promedio del periodo 2007-2018'+"<\h2>",
			style: style10,
			layer: geojson10,
			elements: [{

                label:"<h3>"+  'Tasa de mortalidad específica de personas mayores (≥ 65 años) por este tipo de enfermedades<br><br>'+"<\h3>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		        label:"<h3>"+  'Unidades: ‰<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
			
		        label:"<h4>"+  '0,16 - 0,20'+"<\h4>",html: '',style: {'background-color': '#fce9e3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 
			    label:"<h4>"+  '0,21 - 0,25'+"<\h4>",html: '',style: {'background-color': '#f7c5bb','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,25 - 0,30'+"<\h4>",html: '',style: {'background-color': '#f3a193','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  '0,31 - 0,40'+"<\h4>",html: '',style: {'background-color': '#ea6452','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '0,41 - 0,50'+"<\h4>",html: '',style: {'background-color': '#e11e00','width': '40px','height': '14px', 'border': 'black 1px solid'}}, { 


				IMG:"<h3>"+  '<BR>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del Instituto Nacional de Estadística (2019)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend10);

//Visualizar capas
//L.control.layers(baseLayers, overlays,{collapsed:false, position: 'topright',}).addTo(map);
 
 L.control.layers.tree(baseLayers, overlays).addTo(map);
//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});