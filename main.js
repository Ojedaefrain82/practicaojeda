window.onload = init;

function init(){
	const map = new ol.Map({	
		view: new ol.View ({
			center: ol.proj.transform([-63.4563,-17.0000], 'EPSG:4326', 'EPSG:3857' ),
			zoom: 6.5,
			minZoom: 0
			
		}),
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target:"js-map"
	})
	
	const cantones = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geo.gob.bo/geoserver/ows?",
			params:{
				LAYERS: "geonode:cantones_geo",
				FORMAT:"image/png",
				TRANSPARENT: true
			},
			attributions: '<a href=https://geo.gob.bo/geoserver/ows?service=WFS&acceptversions=2.0.0&request=GetCapabilities/>GEO</a>'
			
						
		})
	})
	map.addLayer(cantones);
	
		const rioslimitrofes = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geo.gob.bo/geoserver/ows?",
			params:{
				LAYERS: "geonode:rioslimitrofes",
				FORMAT:"image/png",
				TRANSPARENT: true
			},
			attributions: '<a href=https://geo.gob.bo/geoserver/ows?service=WFS&acceptversions=2.0.0&request=GetCapabilities/>GEO</a>'
			
						
		})
	})
	map.addLayer(rioslimitrofes);
		
		const peajes = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geo.gob.bo/geoserver/ows?",
			params:{
				LAYERS: "geonode:vias_bolivia2017",
				FORMAT:"image/png",
				TRANSPARENT: true
			},
			attributions: '<a href=https://geo.gob.bo/geoserver/ows?service=WFS&acceptversions=2.0.0&request=GetCapabilities/>GEO</a>'
			
						
		})
	})
	map.addLayer(peajes);
}