//create map
const map = L.map('mapid').setView([-27.2201829,-49.64607], 15);

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popuAnchor: [170,2]
})

//const create popup overlay
const popup = L.popup({
    closeButton:false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')


//create and add marker
L
.marker([-27.2201829,-49.64607] , { icon})
.addTo(map)
.bindPopup(popup);

