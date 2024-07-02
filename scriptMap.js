var map = L.map("map").setView([35.827, 10.636], 13); // Centre la carte sur Sousse

// Obtenir la position actuelle de l'utilisateur
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var userLat = position.coords.latitude;
    var userLng = position.coords.longitude;

    // Créer un marqueur pour l'emplacement de l'utilisateur
    var userMarker = L.marker([userLat, userLng]).addTo(map);
    userMarker.bindPopup("Votre position").openPopup();
  });
} else {
  alert("La géolocalisation n'est pas supportée par ce navigateur.");
}

var medinaCoords = [
  [35.825, 10.632], // Point 1
  [35.828, 10.638], // Point 2
  [35.826, 10.642], // Point 3
  [35.822, 10.637], // Point 4 (revenir au point de départ pour fermer la forme)
];

var medinaPolygon = L.polygon(medinaCoords, {
  color: "orange", // Couleur de la bordure du polygone
  fillColor: "orange", // Couleur de remplissage du polygone
  fillOpacity: 0.4, // Opacité de remplissage du polygone
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

// Exemple de marqueur pour la Grande Mosquée de Sousse
L.marker([35.8302, 10.6374])
  .addTo(map)
  .bindPopup("<b>Grande Mosquée de Sousse</b><br>Monument historique")
  .openPopup();

L.marker([35.8313, 10.6405])
  .addTo(map)
  .bindPopup("<b>Kasbah de Sousse</b><br>Ancienne citadelle")
  .openPopup();

var ribat = L.marker([35.8266, 10.6367])
  .addTo(map)
  .bindPopup("<b>Ribat de Sousse</b><br>Site historique")
  .openPopup();

if (ribat.pop) {
  medinaPolygon.addTo(map);
}
