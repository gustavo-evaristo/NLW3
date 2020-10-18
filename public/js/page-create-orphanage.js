//Create Map
const map = L.map("mapid").setView([-23.5340132, -46.5760993], 16);

//Create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "../../public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

let marker

//Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name = lat]').value= lat
    document.querySelector('[name = lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
    
} ) 


//add photo field
function addPhotoField (){

    //get images container
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    const input = newFieldContainer.children[0].value

    if (input.length > 0) {
        newFieldContainer.children[0].value = ''
        container.appendChild(newFieldContainer)
    }   
}

//remove photo
function deleteField(event) {
    span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    

    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ''    
        return 
    }

    span.parentNode.remove()
   
}

//select yes or no
function toggleSelect(event){
   document.querySelectorAll('.button-select button')
   .forEach( function (button) {
    button.classList.remove('active')
})

    const button = event.currentTarget
    button.classList.add('active')
   
    const input = document.querySelector('[name="open_on_weekends"]')
       
    input.value = button.dataset.value

     

}