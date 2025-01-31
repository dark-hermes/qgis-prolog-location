var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_prolog_1 = new ol.format.GeoJSON();
var features_prolog_1 = format_prolog_1.readFeatures(json_prolog_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prolog_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prolog_1.addFeatures(features_prolog_1);
var lyr_prolog_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_prolog_1, 
                style: style_prolog_1,
                popuplayertitle: 'prolog',
                interactive: true,
                title: '<img src="styles/legend/prolog_1.png" /> prolog'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_prolog_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_prolog_1];
lyr_prolog_1.set('fieldAliases', {'lintang': 'lintang', 'bujur': 'bujur', 'tempat': 'tempat', });
lyr_prolog_1.set('fieldImages', {'lintang': 'TextEdit', 'bujur': 'TextEdit', 'tempat': 'TextEdit', });
lyr_prolog_1.set('fieldLabels', {'lintang': 'no label', 'bujur': 'no label', 'tempat': 'inline label - always visible', });
lyr_prolog_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});