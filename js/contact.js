(function() {
  var mymap = L.map('mapid').setView([35.6441022, -0.6015572], 14);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox.streets'
  }).addTo(mymap);

  var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var marker = L.marker(
                  [35.6441022, -0.6015572],
                  {
                    icon: greenIcon,
                    title: "Etoile Plastique sarl"
                  })
                .addTo(mymap);

  marker
    .bindPopup("<strong>Etoile Plastique sarl</strong><br>Lot 140 ZI Es-senia, El Kerma")
    .openPopup();

}());
