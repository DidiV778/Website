// script.js

function initMap() {
    var location = { lat: 37.995182, lng: -7.830125 }; // Coordenadas da localização fornecida
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "ALvenaria 4"
    });
}
