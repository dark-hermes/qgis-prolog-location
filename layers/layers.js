var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Prolog_Kopi_1 = new ol.format.GeoJSON();
var features_Prolog_Kopi_1 = format_Prolog_Kopi_1.readFeatures(json_Prolog_Kopi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prolog_Kopi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prolog_Kopi_1.addFeatures(features_Prolog_Kopi_1);
var lyr_Prolog_Kopi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prolog_Kopi_1, 
                style: style_Prolog_Kopi_1,
                popuplayertitle: 'Prolog_Kopi',
                interactive: true,
                title: '<img src="styles/legend/Prolog_Kopi_1.png" /> Prolog_Kopi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Prolog_Kopi_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Prolog_Kopi_1];
lyr_Prolog_Kopi_1.set('fieldAliases', {'lintang': 'lintang', 'bujur': 'bujur', 'tempat': 'tempat', });
lyr_Prolog_Kopi_1.set('fieldImages', {'lintang': 'TextEdit', 'bujur': 'TextEdit', 'tempat': 'TextEdit', });
lyr_Prolog_Kopi_1.set('fieldLabels', {'lintang': 'no label', 'bujur': 'inline label - always visible', 'tempat': 'inline label - always visible', });
lyr_Prolog_Kopi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});