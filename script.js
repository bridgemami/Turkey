//useGeographic();

//const place = [28.9784, 41.0082];
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([28.9784, 41.0082]),
      zoom: 4
    })
  });
  var layer = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([28.9784, 41.0082]))
             }),
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([34.846306, 38.640388]))
             })
         ]
     })
 });
 map.addLayer(layer);
 // change mouse cursor when over marker
