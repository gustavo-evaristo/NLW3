const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
};

//Create Map
const map = L.map("mapid", options).setView([-23.5340132, -46.5760993], 16);

//Create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

//Create and add Marker
L.marker([-23.5340132, -46.5760993], { icon }).addTo(map);

//Image Galery

function selectImage(event) {
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".images button");

    const removeActiveClass = (button) => {
        button.classList.remove("active");
    };

    buttons.forEach(removeActiveClass);

    button.classList.add("active");

    const image = button.children[0];

    const imageContainer = document.querySelector(".orphanage-details > img");

    imageContainer.src = image.src;
}
