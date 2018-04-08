//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let webmap03 = L.map('webmap').setView([18.2, -67.1], 13)
L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}").addTo(webmap03)

let flag = L.icon({
  iconUrl: 'images/flag.png',
  iconSize: [75, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})
let marker = L.marker([18.2, -67.1], {icon: flag}).addTo(webmap03)

let polygonStyle = {
  color: 'green',
  fillColor: 'green'
}
let polygon = L.polygon([
  [18.230, -65.796],
  [18.329, -65.702],
  [18.328, -65.883]
], polygonStyle).addTo(webmap03)
polygon.bindPopup('El Yunque National Forest')
marker.bindPopup('Mayaguez')

webmap03.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

// create a red polyline from an array of LatLng points
var latlngs = [
    [18.489, -67.142],
    [17.969, -67.176],
    [18.013, -65.905],
    [18.355, -65.638],
    [18.489, -67.142]
];
var polyline = L.polyline(latlngs, {color: 'green'}).addTo(webmap03);

// zoom the map to the polyline
webmap03.fitBounds(polyline.getBounds());
