const map2 = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
    .addTo(map2);

let bounds2 = [];
for (let i = 0; i < markers2.length; i++ ) {
    const marker = L.marker([markers2[i].latitude, markers2[i].longitude]).addTo(map2);
    marker.bindPopup(markers2[i].name);
    bounds2.push([markers2[i].latitude, markers2[i].longitude]);
}

map2.fitBounds(bounds2);