var map = L.map('butikker', {zoomControl: false}).setView([61.84468949956959, 6.806796286541829], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

L.marker([61.835256831323754, 6.804735556859247]).addTo(map)
.bindPopup("<a class='popup-link' href='./kartinnhold/bunnpris.html'><H3>Bunnpris</H3><p>Bunnpris er den største matbutikken i bygden, med et bredt utvalg, inkludert varmmat rett fra ovnen.</p><img src='../bilder/bunnpris.jpg' class='popup-image'></a>");
    
L.marker([61.83612161376922, 6.808173700395179]).addTo(map)
.bindPopup("<a class='popup-link' href='./kartinnhold/coop.html'><H3>Coop</H3><p>Coop er en sentralt lokalisert matbutikk som også har suvenirer og post i butikk.</p><img src='../bilder/coop.jpg' class='popup-image'></a>");


L.marker([61.83565245935973, 6.807322502675332], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a class='popup-link' href='./kartinnhold/outlet.html'><H3>Olden Outlet</H3><p>Olden Outlet er en klesbutikk med en rekke merkevarer innen sport og friluftsliv til outletpriser.</p><img src='../bilder/outlet.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.83548489705354, 6.806935950874927], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a class='popup-link' href='./kartinnhold/skogstad.html'><H3>Skogstad</H3><p>Skogstad er et lokalt merke fra nabobygden Innvik som har fått nasjonal notoritet for sine gode klær godt egnet for bruk i den norske naturen med sitt varierende vær. I tillegg til hovedbutikken, er det også en outlet vegg-i-vegg med varer til reduserte priser.</p><img src='../bilder/skogstad.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.837148083877146, 6.809560276490875], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a class='popup-link' href='./kartinnhold/riccovero.html'><H3>Riccovero</H3><p>Riccovero er et lokalt motemerke startet i 1936. Her finner du skjorter, kjoler, dress, sko, og ellers alt som trengs for en smart look, enten det er antrekk til jobb eller fest.</p><img src='../bilder/riccovero.jpg' class='popup-image'> <style='opacity:0'></a>");



L.marker([61.834732674300724, 6.805277956912417], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a class='popup-link' href='./kartinnhold/viking.html'><H3>The Viking Shop</H3><p>The Viking Shop er en suvenir-butikk med både det tradisjonelle utvalget, samt håndlagde artikler, som julekuler og treskjæringer.</p><img src='../bilder/viking.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.84308950390088, 6.811742353578101], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a class='popup-link' href='./kartinnhold/fjordsuvenir.html'><H3>Fjord Suvenir</H3><p>Fjord Suvenir er den største suvenir butikken i bygda. Her har de alt fra vikinghjelmer til skjeer med Olden på.</p><img src='../bilder/fjordsuvenir.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.84323319253481, 6.8118417518592995], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a class='popup-link' href='./kartinnhold/ljos.html'><H3>Ljós</H3><p>Ljós er en liten men koselig suvenirbutikk med norske handlagede produkt som duftlys, postkort og bilder.</p><img src='../bilder/ljos.jpg' class='popup-image'> <style='opacity:0'></a>");


// Add a control button to request location permission
var locationControl = L.control({position: 'topleft'});

locationControl.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    div.innerHTML = '<a href="#" title="Show my location" role="button" aria-label="Show my location" style="display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; background-color: white; text-decoration: none; color: black; font-size: 18px;"><i class="fa-solid fa-map-pin"></i></a>';
    
    div.onclick = function() {
        // Start location tracking when button is clicked
        map.locate({
            watch: true,
            enableHighAccuracy: true,
            maximumAge: 10000,
            //timeout: 10000
        });
        return false;
    };
    
    return div;
};

locationControl.addTo(map);
    
var locationMarker, locationCircle;

function onLocationFound(e){
    var radius = e.accuracy;

    if(!locationMarker){
        locationMarker = L.circleMarker(e.latlng, {radius: 8, fillColor: '#3a7ec9', color: "FFF", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map);

        locationCircle = L.circle(e.latlng, {radius: radius, color: '#3a7ec9', fillColor:'#3a7ec9', fillOpacity: 0.1 }).addTo(map);

        map.setView(e.latlng);
    }else {
        locationMarker.setLatLng(e.latlng);
        locationCircle.setLatLng(e.latlng);
        locationCircle.setRadius(radius);
    }

}

function onLocationError(e){
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);



