mapboxgl.accessToken =
    "pk.eyJ1IjoiamF2aWVydG9iYXIiLCJhIjoiY2p1dDlndG80MDVyZzQ0bWh1aXduczlyNiJ9.ECrS8-CoO1Ura4mmYo865A";
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-70.7631, -33.5209],
    zoom: 12
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
// map.addControl(
//     new MapboxDirections({
//         accessToken: mapboxgl.accessToken
//     }),
//     "top-left"
// );

var geojson = {
    type: 'FeatureCollection',
    features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.7957887, -33.5200749]
            },
            properties: {
                title: 'Punto verde',
                description: 'Campanario 2679'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.767225, -33.495797]
            },
            properties: {
                title: 'Punto verde',
                description: 'Vivero municipal, San Martín 3460'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.7589991, -33.5089215]
            },
            properties: {
                title: 'Punto verde',
                description: 'Piscina municipal de Maipú'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.7577564, -33.4946651]
            },
            properties: {
                title: 'Punto verde',
                description: 'Cerro Primo de Rivera Hill'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.7673041, -33.5108542]
            },
            properties: {
                title: 'Punto verde',
                description: 'Templo Votivo de Maipú'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.751281, -33.5073169]
            },
            properties: {
                title: 'Punto verde',
                description: 'Estadio Santiago Bueras'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.7587871, -33.5065132]
            },
            properties: {
                title: 'Punto de reciclaje de aceite',
                description: 'Jardin uno 2248'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.7522329, -33.5169395]
            },
            properties: {
                title: 'Punto de reciclaje de aceite',
                description: 'Santa Gemita 906'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.7574053, -33.5104597]
            },
            properties: {
                title: 'Punto de reciclaje de aceite',
                description: 'Av. 5 de Abril 260'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-70.7579869, -33.4890327]
            },
            properties: {
                title: 'Punto de reciclaje de aceite',
                description: 'Achupallas 181'
            }
        },
    ]
};

// add markers to map
geojson.features.forEach(function (marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
});