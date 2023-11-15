/* Services Menu Bar */
document.addEventListener('DOMContentLoaded', function() {
    const servicesButton = document.getElementById('ServicesButton');
    const serviceMenu = document.querySelector('.ServiceMenu');
    const closeButton = document.getElementById('x-button');

    servicesButton.addEventListener('click', function() {
        serviceMenu.classList.add('active');
        event.preventDefault();
    });

    closeButton.addEventListener('click', function() {
        serviceMenu.classList.remove('active');
    });
});

// Zipcode validation
function validateZipCode() {
    var zipCodeInput = document.getElementById("zip_code");
    var zipCodeValue = zipCodeInput.value;

// Regular expression for a 5-digit ZIP code (US format)
var zipCodePattern = /^\d{5}$/;

if (!zipCodePattern.test(zipCodeValue)) {
    alert("Please enter a valid 5-digit ZIP code.");
    zipCodeInput.focus();
    return false;
}

return true;
}
// Shelter service question functions
function showAdditionalQuestions() {
    var serviceSelect = document.getElementById("service");
    var shelterQuestions = document.getElementById("shelterQuestions");
    var daycareQuestions = document.getElementById("daycareQuestions");

if (serviceSelect.value === "Shelter") {
    shelterQuestions.style.display = "block";
    daycareQuestions.style.display = "none";
} else if (serviceSelect.value === "DayCare") {
    daycareQuestions.style.display = "block";
    shelterQuestions.style.display = "none";
} else {
    shelterQuestions.style.display = "none";
    daycareQuestions.style.display = "none";
}
}

function typeGovAssist() {
    var gov = document.querySelector('input[name="government_assistance"]:checked').value;
    var assist = document.getElementById('government_assistance_type');
    
    if (gov === 'Yes') {
    assist.style.display = 'block';
} else {
    assist.style.display = 'none';
}
}

function familyMembersInput() {
    var fam = document.querySelector('input[name="family"]:checked').value;
    var famMem = document.getElementById('family_members_input')

    if (fam === 'Yes') {
      famMem.style.display = 'block';
    } else {
      famMem.style.display = 'none';
    }
  }

function showPetNumInput() {
    var hasPet = document.querySelector('input[name="pets"]:checked').value;
    var petNumberInput = document.getElementById('pet_number_input');

    if (hasPet === 'Yes') {
      petNumberInput.style.display = 'block';
    } else {
      petNumberInput.style.display = 'none';
    }
  }

function typeOfCrisis() {
    var crisis = document.querySelector('input[name="crisis_situation"]:checked').value;
    var reason = document.getElementById('type_of_crisis');

    if (crisis === 'Yes') {
      reason.style.display = 'block';
    } else {
      reason.style.display = 'none';
    }
  }
  
  //Shelter JSON Displayed
  function fetchAndDisplayShelters() {
    // Assuming the JSON file is one level up from the current directory
    const jsonFilePath = '../JSON/services.json';
  
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            // Handle the JSON data and display businesses
            displayShelters(data.shelters);
            //jToString(data.businesses);
            
        })
        .catch(error => console.error('Error fetching JSON:', error));
  }
  
  function displayShelters(shelters) {
    const sheltersContainer = document.getElementById('sheltersContainer');
    sheltersContainer.innerHTML = ''; // Clear previous content

    shelters.forEach((shelter, index) => {
        const shelterDiv = document.createElement('div');
        shelterDiv.innerHTML = `
        <div id = "box" style="display: flex;">
        <div style="flex: 1;">
            <p>${shelter.businessName}</p>
            <p>${shelter.location.street} ${shelter.location.city} ${shelter.location.state} ${shelter.location.zipcode}</p></p>
            <p>${shelter.contacts.phone}</p>
            <p>${shelter.contacts.email}</p>
            <p>${shelter.website}</p>
        </div>
        <div id="map${index}" class="map-container"></div>
    </div>
    <hr>
`;

//Timer so each div generated fades inn
setTimeout(() => {
  sheltersContainer.appendChild(shelterDiv);

    //create a map for each business
    createMap(`map${index}`, `${shelter.location.latitude}`, `${shelter.location.longitude}`, `${shelter.businessName}`);
}, index * 200); // Adjust the delay value as needed
        
    });
}

//Function to generate leaflet map
function createMap(mapId, latitude, longitude, name) {
    var map = L.map(mapId).setView([latitude, longitude], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(name).openPopup();
}

