let webmap = L.map('webmap').setView([18.2, -66.4], 9)

let basemap1 = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}").addTo(webmap)
let basemap2 = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}")
let basemap3 = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}")
let mapBasemaps = {
  'StreetView Basemap': basemap1,
  'Satellite Basemap': basemap2,
  'Terrain Basemap': basemap3,
}
L.control.layers(mapBasemaps).addTo(webmap)

function createCircles(feature, latlng) {
  let isMine = feature.properties.mine
  let circleColor = 'black'
  if(isMine) {
    circleColor = 'red'
  }

  let markerStyle = {
    color: circleColor,
    radius: 6
  }

  return L.circleMarker(latlng, markerStyle)
}

let mapOptions = {
  pointToLayer: createCircles,
  onEachFeature: popup
}

function popup(feature, layer) {
  let markerPurpose = feature.properties.purpose
  let markerLocation = feature.properties.location
  layer.bindPopup(markerPurpose + ' located in ' + markerLocation + ', Puerto Rico.');
}

L.geoJSON(geoJSON_object, mapOptions).addTo(webmap)
