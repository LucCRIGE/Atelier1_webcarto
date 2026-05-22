ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([851968.000000, 6249421.500000, 887161.500000, 6282371.000000]);
var wms_layers = [];

var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage.HR",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            popuplayertitle: 'Ortho 20 cm',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_0, 0]);
var lyr_PlanIGN_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN',
                            popuplayertitle: 'Plan IGN',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGN_1, 0]);
var format_Communes_2 = new ol.format.GeoJSON();
var features_Communes_2 = format_Communes_2.readFeatures(json_Communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_2.addFeatures(features_Communes_2);
var lyr_Communes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_2, 
                style: style_Communes_2,
                popuplayertitle: 'Communes',
                interactive: false,
                title: '<img src="styles/legend/Communes_2.png" /> Communes'
            });
var format_Rseaudebateaubus_3 = new ol.format.GeoJSON();
var features_Rseaudebateaubus_3 = format_Rseaudebateaubus_3.readFeatures(json_Rseaudebateaubus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Rseaudebateaubus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseaudebateaubus_3.addFeatures(features_Rseaudebateaubus_3);
var lyr_Rseaudebateaubus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseaudebateaubus_3, 
                style: style_Rseaudebateaubus_3,
                popuplayertitle: 'Réseau de bateau-bus',
                interactive: true,
    title: 'Réseau de bateau-bus<br />\
    <img src="styles/legend/Rseaudebateaubus_3_0.png" /> 470 - 1310<br />\
    <img src="styles/legend/Rseaudebateaubus_3_1.png" /> 1310 - 2240<br />\
    <img src="styles/legend/Rseaudebateaubus_3_2.png" /> 2240 - 3180<br />\
    <img src="styles/legend/Rseaudebateaubus_3_3.png" /> 3180 - 4100<br />\
    <img src="styles/legend/Rseaudebateaubus_3_4.png" /> 4100 - 4880<br />' });
var format_Portsexistants_4 = new ol.format.GeoJSON();
var features_Portsexistants_4 = format_Portsexistants_4.readFeatures(json_Portsexistants_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Portsexistants_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portsexistants_4.addFeatures(features_Portsexistants_4);
var lyr_Portsexistants_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Portsexistants_4, 
                style: style_Portsexistants_4,
                popuplayertitle: 'Ports existants',
                interactive: true,
                title: '<img src="styles/legend/Portsexistants_4.png" /> Ports existants'
            });
var format_Embarcadrespotentiels_5 = new ol.format.GeoJSON();
var features_Embarcadrespotentiels_5 = format_Embarcadrespotentiels_5.readFeatures(json_Embarcadrespotentiels_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Embarcadrespotentiels_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embarcadrespotentiels_5.addFeatures(features_Embarcadrespotentiels_5);
cluster_Embarcadrespotentiels_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Embarcadrespotentiels_5
});
var lyr_Embarcadrespotentiels_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Embarcadrespotentiels_5, 
                style: style_Embarcadrespotentiels_5,
                popuplayertitle: 'Embarcadères potentiels',
                interactive: true,
    title: 'Embarcadères potentiels<br />\
    <img src="styles/legend/Embarcadrespotentiels_5_0.png" /> Faible emprise foncière et éloignement à plus de 100 m des commodités<br />\
    <img src="styles/legend/Embarcadrespotentiels_5_1.png" /> Bonne emprise foncière mais éloignement à plus de 100 m des commodités<br />\
    <img src="styles/legend/Embarcadrespotentiels_5_2.png" /> Emprise foncière supérieure à 1500 m² et bonne connexion aux commodités les plus proches<br />' });

lyr_Ortho20cm_0.setVisible(true);lyr_PlanIGN_1.setVisible(true);lyr_Communes_2.setVisible(true);lyr_Rseaudebateaubus_3.setVisible(true);lyr_Portsexistants_4.setVisible(true);lyr_Embarcadrespotentiels_5.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_PlanIGN_1,lyr_Communes_2,lyr_Rseaudebateaubus_3,lyr_Portsexistants_4,lyr_Embarcadrespotentiels_5];
lyr_Communes_2.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_du_canton': 'code_insee_du_canton', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'superficie_cadastrale': 'superficie_cadastrale', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'codes_siren_des_epci': 'codes_siren_des_epci', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', 'liens_vers_autorite_administrative': 'liens_vers_autorite_administrative', });
lyr_Rseaudebateaubus_3.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'nb_passager_j': 'Nombre de passager', });
lyr_Portsexistants_4.set('fieldAliases', {'fid': 'fid', 'nom': 'Nom du port', });
lyr_Embarcadrespotentiels_5.set('fieldAliases', {'fid': 'fid', 'surf': 'Surface disponible', 'HubDist_route': 'Distance de la route la plus proche', 'HubDist_parking': 'Distance du parking le plus proche', 'potentiel': 'potentiel', });
lyr_Communes_2.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_du_canton': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'Range', 'superficie_cadastrale': 'Range', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'CheckBox', 'chef_lieu_de_collectivite_terr': 'CheckBox', 'chef_lieu_de_departement': 'CheckBox', 'chef_lieu_de_region': 'CheckBox', 'capitale_d_etat': 'CheckBox', 'date_du_recensement': 'DateTime', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'codes_siren_des_epci': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', 'liens_vers_autorite_administrative': 'TextEdit', });
lyr_Rseaudebateaubus_3.set('fieldImages', {'fid': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'nb_passager_j': 'Range', });
lyr_Portsexistants_4.set('fieldImages', {'fid': 'Hidden', 'nom': 'TextEdit', });
lyr_Embarcadrespotentiels_5.set('fieldImages', {'fid': 'Hidden', 'surf': 'Range', 'HubDist_route': 'Range', 'HubDist_parking': 'Range', 'potentiel': 'Hidden', });
lyr_Communes_2.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_du_canton': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'superficie_cadastrale': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'code_postal': 'no label', 'nom_officiel': 'no label', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'codes_siren_des_epci': 'no label', 'lien_vers_chef_lieu': 'no label', 'liens_vers_autorite_administrative': 'no label', });
lyr_Rseaudebateaubus_3.set('fieldLabels', {'nb_passager_j': 'header label - visible with data', });
lyr_Portsexistants_4.set('fieldLabels', {'nom': 'header label - always visible', });
lyr_Embarcadrespotentiels_5.set('fieldLabels', {'surf': 'inline label - visible with data', 'HubDist_route': 'inline label - visible with data', 'HubDist_parking': 'inline label - visible with data', 'pontentiel': 'hidden field', });
lyr_Embarcadrespotentiels_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});