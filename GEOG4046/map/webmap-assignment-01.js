let webmap01 = L.map('webmap01').setView([51.505, -0.09], 13)
L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}").addTo(webmap01)

let marker = L.marker([18.2, -67.1]).addTo(webmap01)
let polygon = L.polygon([
  [18.230, -65.796],
  [18.329, -65.702],
  [18.328, -65.883]
]).addTo(webmap01)
polygon.bindPopup('El Yunque National Forest')
marker.bindPopup('Mayaguez')

webmap01.on('click', function (event) {
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
var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(webmap01);

// zoom the map to the polyline
webmap01.fitBounds(polyline.getBounds());
