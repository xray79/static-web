// Mapbox script
mapboxgl.accessToken =
  "pk.eyJ1IjoieHJheTc5IiwiYSI6ImNsMHdlcDZvNDB1a3gzaWtibmdxeHY2NnMifQ.GgQXsfAy8wZzaJ1Frtd4kg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-0.140713, 51.515489],
  zoom: 13,
});
