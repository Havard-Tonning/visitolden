var map = L.map('mat', {zoomControl: false}).setView([61.84017770961436, 6.805104792299194], 14,5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([61.841857038014155, 6.811442067471242], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='./kartinnhold/sundekiosken.html' class='popup-link'><H3>Sundekiosken</H3><p>Sundekiosken er en fast-food restaurant med både tradisjonell gatemat som burger og løvstek, samt asiatiske retter som vårruller og nudler.</p><img src='../bilder/sunde2.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.8425222198133, 6.810743183913986], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='./kartinnhold/molla.html' class='popup-link'><H3>Mølla Gjestehus</H3><p>Mølla er en restaurant lokalisert rett ved fjorden, og serverer både sjømat og pizza.</p><img src='../bilder/molla3.jpg' class='popup-image'> <style='opacity:0'></a>");


L.marker([61.848272904545304, 6.814688885941699], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='./kartinnhold/fjordhotel.html' class='popup-link'><H3>Olden Fjordhotel</H3><p>Olden Fjordhotel har middagsbuffet open for alle, hver dag fra 19:00-22:00. </p><img src='../bilder/fjordhotel1.jpg' class='popup-image'> <style='opacity:0'></a>");

    
L.marker([61.83452678782124, 6.804963791435792], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='./kartinnhold/yris.html' class='popup-link'><H3>Yris Kafé</H3><p>Yris Kafé, lokalisert i sentrum av Olden, tilbyr både iskrem, kaffe og matservering.</p><img src='../bilder/yris1.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.83514958988893, 6.804779749846841], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='./kartinnhold/stabukk.html' class='popup-link'><H3>Stabukk</H3><p>Stabukk er en kafé i hjertet av Olden med is, shakes, boller og kaffe.</p><img src='../bilder/stabukk5.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.83237864928943, 6.813073108002821], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='./kartinnhold/singermat.html' class='popup-link'><H3>Singerheimen</H3><p>På Singerheimen serverer de afternoon tea i omgivelser fulle av tradisjon og historie.</p><img src='../bilder/singer-food.jpg' class='popup-image'> <style='opacity:0'></a>");
