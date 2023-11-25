/* Navbar effects */
var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (currentScrollPos === 0) {
                document.querySelector(".NavigationBar").style.top = "0";
            } else if (prevScrollpos > currentScrollPos) {
                document.querySelector(".NavigationBar").style.top = "-100px";
            } else {
                document.querySelector(".NavigationBar").style.top = "-100px"; // Adjust this value based on your header height
            }
            prevScrollpos = currentScrollPos;
        }
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
            
        })
        .catch(error => console.error('Error fetching JSON:', error));
  }

  //Medical JSON Displayed
  function fetchAndDisplayMedical() {
    // Assuming the JSON file is one level up from the current directory
    const jsonFilePath = '../../JSON/services.json';
  
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            // Handle the JSON data and display businesses
            displayShelters(data.medical);
            
        })
        .catch(error => console.error('Error fetching JSON:', error));
  }

  //Food JSON Displayed
  function fetchAndDisplayFood() {
    // Assuming the JSON file is one level up from the current directory
    const jsonFilePath = '../../JSON/services.json';
  
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            // Handle the JSON data and display businesses
            displayShelters(data.food);
            
        })
        .catch(error => console.error('Error fetching JSON:', error));
  }
  
//Services Information Displayed
function displayShelters(shelters) {
    const sheltersContainer = document.getElementById('sheltersContainer');
    sheltersContainer.innerHTML = ''; // Clear previous content

    shelters.forEach((shelter, index) => {
        const shelterDiv = document.createElement('div');
        shelterDiv.classList.add('sheltersContainer');

        let content = `
            <br>
            <h4>${shelter.businessName}</h4>
            <p>${shelter.location.street} ${shelter.location.city} ${shelter.location.state} ${shelter.location.zipcode}</p>
            <p>${shelter.contacts.phone}</p>
        `;

        // Check if email exists and add email element if true
        if (shelter.contacts.email) {
            content += `
                <a href="mailto:${shelter.contacts.email}" class="emailParagraph" target="_black">${shelter.contacts.email}</a>
                <br>
            `;
        }

        // Check if website exists and add website element if true
        if (shelter.website) {
            content += `
                <a href="${shelter.website}" class="websiteParagraph" onclick="openInNewTab('${shelter.website}')">${shelter.website}</a>
                <br>
            `;
        }

        content += `
            <p class="descriptionParagraph">"${shelter.description}"</p>
            <br>
            <hr>
        `;

        shelterDiv.innerHTML = content;
        sheltersContainer.appendChild(shelterDiv);
    });
}

function setDivHeight() {
    var div = document.getElementById('yourDivId');
    var height = div.scrollHeight;
    div.style.height = height + 'px';
}

//Open new tab for website
function openInNewTab(url) {
    event.preventDefault();
    window.open(url, '_blank');
}

