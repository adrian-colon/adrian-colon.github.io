let webmap04 = L.map('webmap').setView([39.8, -98.2], 4)
L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}").addTo(webmap04)

function mapStyle(feature) {
  let population2016 = feature.properties.POPULATION
  let colorOfState = '#b7ff3a'
  if (population2016 > 4000000) {
    colorOfState = 'blue'
  }
  let mapStyle = {
    color: colorOfState,
    weight: 2,
    opacity: 1,
    fillOpacity: 0.1
  }
  return mapStyle
}

let mapOptions = {
  style: mapStyle,
  onEachFeature: statePopup
}

function statePopup(feature, layer) {
  let stateName = feature.properties.STATE_NAME
  let statePop2016 = feature.properties.POPULATION
  layer.bindPopup('Population of ' + stateName + ' is ' + statePop2016 + '.');
}

L.geoJSON(geoJSON_object, mapOptions).addTo(webmap04)
