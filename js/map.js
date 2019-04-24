mapboxgl.accessToken =
    "pk.eyJ1IjoiamF2aWVydG9iYXIiLCJhIjoiY2p1dDlndG80MDVyZzQ0bWh1aXduczlyNiJ9.ECrS8-CoO1Ura4mmYo865A";
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-70.7631, -33.5209],
    zoom: 13
});

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    "top-left"
);