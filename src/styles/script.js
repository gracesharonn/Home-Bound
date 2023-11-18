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
            <a href="mailto:${shelter.contacts.email}" class="emailParagraph" target="_black">${shelter.contacts.email}</a>
            <br>
            <a href="${shelter.website}" class="websiteParagraph" onclick="openInNewTab('${shelter.website}')">${shelter.website}</a>
            <p class="descriptionParagraph">"${shelter.description}"</p>
            <br>
            <hr>
        `;

        // Check if email exists before adding it
        if (!shelter.contacts.email) {
            content = content.replace('<p class="emailParagraph">', '').replace('</p>', '');
        }

        // Check if website exists before adding it
        if (!shelter.website) {
            content = content.replace('<p class="websiteParagraph">', '').replace('</p>', '');
        }

        shelterDiv.innerHTML = content;
        sheltersContainer.appendChild(shelterDiv);
    });
}

//Open new tab for website
function openInNewTab(url) {
    event.preventDefault();
    window.open(url, '_blank');
}

/* Login HTML Page*/
function checkPassword(){
    var loginData;
    fetchData();
    var enterEmail = document.getElementById("email_address").value;
    var enterPass = document.getElementById("password").value;
    
    //grab email and password from json file
    fetch('../JSON/login.json')
        .then(response => response.json())
        .then(data =>{
            var JSONemail = findUserbyEmail(enterEmail);
            console.log("Email:", JSONemail);
            var JSONpassword = findPasswordByEmail(JSONemail);
            console.log(JSONpassword);
            //data.find(u=>u.email_address === email_address && u.password === password);
            if(JSONpassword === enterPass) {
                document.getElementById('LoginValue').innerText = 'Success';
            } else {

                document.getElementById('LoginValue').innerText = 'Invalid email or password.';
            }
        })
        .catch(error => console.error('Error:', error));
   } 
   function findUserbyEmail(email_address){
        console.log(email_address);
        for(var i = 0; i < loginData.Volunteers.length;i++){
            var volunteers = loginData.Volunteers[i];
            if(volunteers.email_address === email_address){
                return volunteers.email_address;
            }
        }
        return null;
   }
   function indexOfEmail(email_address){
        return loginData.Volunteers.findIndex(function(volunteer){
            return volunteer.email_address == email_address;
        });
   }
   function findPasswordByEmail(email_address){
        var index = indexOfEmail(email_address);
        var filePassword = loginData.Volunteers[index].password;
        return filePassword;
   }
   function enterData(){
        if(loginData.Volunteers && loginData.Volunteers.length > 0){
            for(var i = 0;i < loginData.Volunteers.length;i++)
            console.log(i+":", loginData.Volunteers[i]);
        } else {
            console.log('No volunteers found.');
        }
    }
   function fetchData(){
        fetch('../JSON/login.json')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched:', data);
                loginData = data;
                enterData();
            })
    }
