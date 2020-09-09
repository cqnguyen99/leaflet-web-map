// Load leaflet map
let map = L.map('map').setView([0, 0], 1); 

let myLayer = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=5p1k4RfJY01NBSwHxca7', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
});
map.addLayer(myLayer);

let geojsonMarkerOptions = {
    radius: 7,
    fillColor: "salmon",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var marker;

// Add marker
function add_marker (data){
    marker = L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
        }).bindPopup(function(layer) {
        return (''+layer.feature.properties.mag);
    });
    map.addLayer(marker);

}

add_marker(month);

let selection = document.querySelector('#colors');

//Change map color
selection.addEventListener('change', function() { 
    if (selection.options[selection.selectedIndex].text === "Basic") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Bright") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Outdoor") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Pastel") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Streets") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Toner") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Topo") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Topographique") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/topographique/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Voyager") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }

    else if (selection.options[selection.selectedIndex].text === "Satellite Hybrid") {
        map.removeLayer(myLayer);
        myLayer = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=5p1k4RfJY01NBSwHxca7', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        });
        map.addLayer(myLayer);
    }
});

let selection_time = document.querySelector("#time")

selection_time.addEventListener('change', function() { 
    if (selection_time.options[selection_time.selectedIndex].text === "Past Hour") {
        map.removeLayer(marker);
        add_marker(hour);
    }

    else if (selection_time.options[selection_time.selectedIndex].text === "Past Day") {
        map.removeLayer(marker);
        add_marker(day);
    }

    else if (selection_time.options[selection_time.selectedIndex].text === "Past 7 Days") {
        map.removeLayer(marker);
        add_marker(week);
    }

    else if (selection_time.options[selection_time.selectedIndex].text === "Past 30 Days") {
        map.removeLayer(marker);
        add_marker(month);
    }
});