ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([849506.156280, 6248597.762500, 889623.343720, 6283194.737500]);
var wms_layers = [];

var lyr_PlanIGNJ1_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN J+1',
                            popuplayertitle: 'Plan IGN J+1',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNJ1_0, 0]);
var lyr_Ortho20cm_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            popuplayertitle: 'Ortho 20 cm',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_1, 0]);
var format_communescommune_2 = new ol.format.GeoJSON();
var features_communescommune_2 = format_communescommune_2.readFeatures(json_communescommune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_communescommune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communescommune_2.addFeatures(features_communescommune_2);
var lyr_communescommune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communescommune_2, 
                style: style_communescommune_2,
                popuplayertitle: 'communes — commune',
                interactive: false,
                title: '<img src="styles/legend/communescommune_2.png" /> communes — commune'
            });
var format_lignesdebateaubusLignesdebateaubuspotentielles_3 = new ol.format.GeoJSON();
var features_lignesdebateaubusLignesdebateaubuspotentielles_3 = format_lignesdebateaubusLignesdebateaubuspotentielles_3.readFeatures(json_lignesdebateaubusLignesdebateaubuspotentielles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_lignesdebateaubusLignesdebateaubuspotentielles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lignesdebateaubusLignesdebateaubuspotentielles_3.addFeatures(features_lignesdebateaubusLignesdebateaubuspotentielles_3);
var lyr_lignesdebateaubusLignesdebateaubuspotentielles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lignesdebateaubusLignesdebateaubuspotentielles_3, 
                style: style_lignesdebateaubusLignesdebateaubuspotentielles_3,
                popuplayertitle: 'lignes de bateau-bus = Lignes de bateau-bus potentielles',
                interactive: true,
    title: 'lignes de bateau-bus = Lignes de bateau-bus potentielles<br />\
    <img src="styles/legend/lignesdebateaubusLignesdebateaubuspotentielles_3_0.png" /> 298 - 852<br />\
    <img src="styles/legend/lignesdebateaubusLignesdebateaubuspotentielles_3_1.png" /> 852 - 1949<br />\
    <img src="styles/legend/lignesdebateaubusLignesdebateaubuspotentielles_3_2.png" /> 1949 - 4016<br />\
    <img src="styles/legend/lignesdebateaubusLignesdebateaubuspotentielles_3_3.png" /> 4016 - 4492<br />\
    <img src="styles/legend/lignesdebateaubusLignesdebateaubuspotentielles_3_4.png" /> 4492 - 4976<br />' });
var format_embarcadere_potentielsEmbarcadrespotentiels_4 = new ol.format.GeoJSON();
var features_embarcadere_potentielsEmbarcadrespotentiels_4 = format_embarcadere_potentielsEmbarcadrespotentiels_4.readFeatures(json_embarcadere_potentielsEmbarcadrespotentiels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_embarcadere_potentielsEmbarcadrespotentiels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_embarcadere_potentielsEmbarcadrespotentiels_4.addFeatures(features_embarcadere_potentielsEmbarcadrespotentiels_4);
var lyr_embarcadere_potentielsEmbarcadrespotentiels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_embarcadere_potentielsEmbarcadrespotentiels_4, 
                style: style_embarcadere_potentielsEmbarcadrespotentiels_4,
                popuplayertitle: 'embarcadere_potentiels = Embarcadères potentiels',
                interactive: true,
    title: 'embarcadere_potentiels = Embarcadères potentiels<br />\
    <img src="styles/legend/embarcadere_potentielsEmbarcadrespotentiels_4_0.png" /> Bonne emprise foncière mais éloignement à plus de 100 m des commodités<br />\
    <img src="styles/legend/embarcadere_potentielsEmbarcadrespotentiels_4_1.png" /> Emprise foncière supérieure à 1500 m² et bonne connexion aux commodités les plus proches<br />\
    <img src="styles/legend/embarcadere_potentielsEmbarcadrespotentiels_4_2.png" /> <br />' });
var format_ports_existantsPortsexistants_5 = new ol.format.GeoJSON();
var features_ports_existantsPortsexistants_5 = format_ports_existantsPortsexistants_5.readFeatures(json_ports_existantsPortsexistants_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ports_existantsPortsexistants_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ports_existantsPortsexistants_5.addFeatures(features_ports_existantsPortsexistants_5);
cluster_ports_existantsPortsexistants_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ports_existantsPortsexistants_5
});
var lyr_ports_existantsPortsexistants_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ports_existantsPortsexistants_5, 
                style: style_ports_existantsPortsexistants_5,
                popuplayertitle: 'ports_existants = Ports existants',
                interactive: true,
                title: '<img src="styles/legend/ports_existantsPortsexistants_5.png" /> ports_existants = Ports existants'
            });

lyr_PlanIGNJ1_0.setVisible(true);lyr_Ortho20cm_1.setVisible(true);lyr_communescommune_2.setVisible(true);lyr_lignesdebateaubusLignesdebateaubuspotentielles_3.setVisible(true);lyr_embarcadere_potentielsEmbarcadrespotentiels_4.setVisible(true);lyr_ports_existantsPortsexistants_5.setVisible(true);
var layersList = [lyr_PlanIGNJ1_0,lyr_Ortho20cm_1,lyr_communescommune_2,lyr_lignesdebateaubusLignesdebateaubuspotentielles_3,lyr_embarcadere_potentielsEmbarcadrespotentiels_4,lyr_ports_existantsPortsexistants_5];
lyr_communescommune_2.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_du_canton': 'code_insee_du_canton', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'superficie_cadastrale': 'superficie_cadastrale', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'codes_siren_des_epci': 'codes_siren_des_epci', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', 'liens_vers_autorite_administrative': 'liens_vers_autorite_administrative', });
lyr_lignesdebateaubusLignesdebateaubuspotentielles_3.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'nb_passager_jour': 'Nombre de passagers par jour', });
lyr_embarcadere_potentielsEmbarcadrespotentiels_4.set('fieldAliases', {'fid': 'fid', 'hub_dist_routes': 'Distance de la route la plus proche (en m)', 'hub_dist_parking': 'Distance au parking le plus proche (en m)', 'surf': 'Surface (en m²)', 'potentiel': 'Potentiel', });
lyr_ports_existantsPortsexistants_5.set('fieldAliases', {'fid': 'fid', 'nom': 'Nom', });
lyr_communescommune_2.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_du_canton': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'Range', 'superficie_cadastrale': 'Range', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'CheckBox', 'chef_lieu_de_collectivite_terr': 'CheckBox', 'chef_lieu_de_departement': 'CheckBox', 'chef_lieu_de_region': 'CheckBox', 'capitale_d_etat': 'CheckBox', 'date_du_recensement': 'DateTime', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'codes_siren_des_epci': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', 'liens_vers_autorite_administrative': 'TextEdit', });
lyr_lignesdebateaubusLignesdebateaubuspotentielles_3.set('fieldImages', {'fid': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'nb_passager_jour': 'Range', });
lyr_embarcadere_potentielsEmbarcadrespotentiels_4.set('fieldImages', {'fid': 'Hidden', 'hub_dist_routes': 'TextEdit', 'hub_dist_parking': 'TextEdit', 'surf': 'Range', 'potentiel': 'TextEdit', });
lyr_ports_existantsPortsexistants_5.set('fieldImages', {'fid': 'Hidden', 'nom': 'TextEdit', });
lyr_communescommune_2.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_du_canton': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'superficie_cadastrale': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'code_postal': 'no label', 'nom_officiel': 'no label', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'codes_siren_des_epci': 'no label', 'lien_vers_chef_lieu': 'no label', 'liens_vers_autorite_administrative': 'no label', });
lyr_lignesdebateaubusLignesdebateaubuspotentielles_3.set('fieldLabels', {'nb_passager_jour': 'header label - visible with data', });
lyr_embarcadere_potentielsEmbarcadrespotentiels_4.set('fieldLabels', {'hub_dist_routes': 'inline label - visible with data', 'hub_dist_parking': 'inline label - visible with data', 'surf': 'inline label - visible with data', 'potentiel': 'inline label - visible with data', });
lyr_ports_existantsPortsexistants_5.set('fieldLabels', {'nom': 'inline label - visible with data', });
lyr_ports_existantsPortsexistants_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});