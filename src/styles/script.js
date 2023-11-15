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

  //Shelter JSON Displayed
  function fetchAndDisplayShelters() {
    // Assuming the JSON file is one level up from the current directory
    const jsonFilePath = '../../JSON/services.json';
  
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
            <br>
            <h4>${shelter.businessName}</h4>
            <p>${shelter.location.street} ${shelter.location.city} ${shelter.location.state} ${shelter.location.zipcode}</p>
            <p>Phone: ${shelter.contacts.phone}</p>
            <a href="mailto:${shelter.contacts.email}">Email: ${shelter.contacts.email}</a>
            <a href="${shelter.website}">${shelter.website}</a>
            <p>${shelter.description}</p>
  
            <!-- Add more fields as needed -->
            <br>
            <hr>
        `;
        sheltersContainer.appendChild(shelterDiv);
    });
  }