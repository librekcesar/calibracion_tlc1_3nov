var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tlc1_zipcodes_1 = new ol.format.GeoJSON();
var features_tlc1_zipcodes_1 = format_tlc1_zipcodes_1.readFeatures(json_tlc1_zipcodes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tlc1_zipcodes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tlc1_zipcodes_1.addFeatures(features_tlc1_zipcodes_1);
var lyr_tlc1_zipcodes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tlc1_zipcodes_1, 
                style: style_tlc1_zipcodes_1,
                interactive: false,
                title: '<img src="styles/legend/tlc1_zipcodes_1.png" /> tlc1_zipcodes'
            });
var format_tlc1_zonas_volume_2 = new ol.format.GeoJSON();
var features_tlc1_zonas_volume_2 = format_tlc1_zonas_volume_2.readFeatures(json_tlc1_zonas_volume_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tlc1_zonas_volume_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tlc1_zonas_volume_2.addFeatures(features_tlc1_zonas_volume_2);
var lyr_tlc1_zonas_volume_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tlc1_zonas_volume_2, 
                style: style_tlc1_zonas_volume_2,
                interactive: true,
                title: '<img src="styles/legend/tlc1_zonas_volume_2.png" /> tlc1_zonas_volume'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_tlc1_zipcodes_1.setVisible(true);lyr_tlc1_zonas_volume_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tlc1_zipcodes_1,lyr_tlc1_zonas_volume_2];
lyr_tlc1_zipcodes_1.set('fieldAliases', {'zipcode': 'zipcode', 'Reporte de Volumen__tlc1_zipcode_cda_zipcode': 'Reporte de Volumen__tlc1_zipcode_cda_zipcode', 'Reporte de Volumen__tlc1_zipcode_Promedio_diario': 'Reporte de Volumen__tlc1_zipcode_Promedio_diario', 'Reporte de Volumen__tlc1_zipcode_tag': 'Reporte de Volumen__tlc1_zipcode_tag', });
lyr_tlc1_zonas_volume_2.set('fieldAliases', {'zonificacion': 'zonificacion', 'tag': 'tag', 'promedio_diario': 'promedio_diario', });
lyr_tlc1_zipcodes_1.set('fieldImages', {'zipcode': 'TextEdit', 'Reporte de Volumen__tlc1_zipcode_cda_zipcode': 'TextEdit', 'Reporte de Volumen__tlc1_zipcode_Promedio_diario': 'TextEdit', 'Reporte de Volumen__tlc1_zipcode_tag': 'TextEdit', });
lyr_tlc1_zonas_volume_2.set('fieldImages', {'zonificacion': 'TextEdit', 'tag': 'TextEdit', 'promedio_diario': 'Range', });
lyr_tlc1_zipcodes_1.set('fieldLabels', {'zipcode': 'no label', 'Reporte de Volumen__tlc1_zipcode_cda_zipcode': 'no label', 'Reporte de Volumen__tlc1_zipcode_Promedio_diario': 'no label', 'Reporte de Volumen__tlc1_zipcode_tag': 'no label', });
lyr_tlc1_zonas_volume_2.set('fieldLabels', {'zonificacion': 'header label', 'tag': 'header label', 'promedio_diario': 'header label', });
lyr_tlc1_zonas_volume_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});