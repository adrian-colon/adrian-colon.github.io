//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let webmap01 = L.map('webmap01').setView([51.505, -0.09], 13)
L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}").addTo(webmap01)
let marker = L.marker([51.5, -0.09]).addTo(webmap01)

let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(webmap01)

polygon.bindPopup('St. Katharine\'s and Wapping')
marker.bindPopup('London Bridge Station')

webmap01.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

// create a red polyline from an array of LatLng points
var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(webmap01);
// zoom the map to the polyline
webmap01.fitBounds(polyline.getBounds());
