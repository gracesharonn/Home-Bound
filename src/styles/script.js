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
function showAdditionalQuestions () {
  var serviceSelect = document.getElementById('service')
  var shelterQuestions = document.getElementById('shelterQuestions')
  var daycareQuestions = document.getElementById('daycareQuestions')
  var employmentQuestions = document.getElementById('employmentQuestions')
  var foodServiceQuestions = document.getElementById('foodServiceQuestions')
  var medicalServiceQuestions = document.getElementById('medicalServiceQuestions')

  if (serviceSelect.value === 'Shelter') {
    shelterQuestions.style.display = 'block'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display= 'none'

  } else if (serviceSelect.value === 'Daycare') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'block'
    employmentQuestions.style.display ='none'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display= 'none'

  } else if (serviceSelect.value === 'Employment') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display ='block'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display= 'none'

  } else if (serviceSelect.value === 'Food') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'block'
    medicalServiceQuestions.style.display= 'none'

  } else if (serviceSelect.value === 'Medical') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display= 'block'

  } else {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display= 'none'
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

  //Daycare JSON Displayed
function fetchAndDisplayDaycare () {
    // Assuming the JSON file is one level up from the current directory
    const jsonFilePath = '../../JSON/services.json'
  
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => {
        // Handle the JSON data and display businesses
        displayShelters(data.daycare)
      })
      .catch(error => console.error('Error fetching JSON:', error))
  }

function displayShelters (shelters) {
  const sheltersContainer = document.getElementById('sheltersContainer')
  sheltersContainer.innerHTML = '' // Clear previous content

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
                document.getElementById("VerificationMessage").innerText = 'Success';
                openVolunteerPage();
            } else {

                document.getElementById("VerificationMessage").innerText = 'Invalid email or password.';
            }
        })
        .catch(error => console.error('Error:', error));
   } 
   function openVolunteerPage(){
    var first_name = document.querySelector('input[name="first_name"]').value
    var last_name = document.querySelector('input[name="last_name"]').value
  
    window.location.href =
      `./services/VolunteerEvents.html?first_name=` +
      encodeURIComponent(first_name) +
      `&last_name=` +
      encodeURIComponent(last_name)
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

//onSubmit of form

function submitForm () {
  var service = document.getElementById('service').value

  //check if service
  if (service === 'Food') {
  } else if (service === 'Shelter') {
    openShelterSearch(service)
  } else if (service === 'Medical') {
  } else if (service === 'Daycare') {
  } else if (service === 'Bikehub') {
  } else if (service === 'Employment') {
  } else {
  }
  //gets value from a radio button veteran
  //var isVet = document.querySelector('input[name="veteran"]:checked').value;

  //window.location.href = `./services/Search.html?service=` + encodeURIComponent(isVet);

  return true
}

function openShelterSearch (service) {
  var sex = document.querySelector('input[name="sex"]:checked').value
  var isVet = document.querySelector('input[name="veteran"]:checked').value

  window.location.href =
    `./services/Search.html?service=` +
    encodeURIComponent(service) +
    `&sex=` +
    encodeURIComponent(sex) +
    `&veteran=` +
    encodeURIComponent(isVet)
}

function searchResults () {
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = '../../JSON/services.json'

  const urlParse = new URLSearchParams(window.location.search)

  var service = urlParse.get('service')

  //check if service
  if (service === 'Food') {
  } else if (service === 'Shelter') {
    var vet = urlParse.get('veteran')
    var sex = urlParse.get('sex')
    if (vet === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          displayVeteranFirst(data.shelters);
        })
        .catch(error => console.error('Error fetching JSON:', error))
      fetch(jsonFilePath)
    }
  } else if (service === 'Medical') {
  } else if (service === 'Daycare') {
  } else if (service === 'Bikehub') {
  } else if (service === 'Employment') {
  } else {
  }
}

function displayVeteranFirst (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business => business.attributes.veteran === 'Yes'
  )
  var nonVeteranShelters = businesses.filter(
    business => business.attributes.veteran !== 'Yes'
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)

  // Get the sheltersContainer div
  var vetContainer = document.getElementById('sheltersContainer')

  // Clear previous content in sheltersContainer
  vetContainer.innerHTML = ''

  // Display shelter information in sheltersContainer
  allShelters.forEach(shelter => {
    vetContainer.innerHTML += `
            <div class="sheltersContainer">
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
        `
  })
}

/* Registration/ SignUp */
const fs = require('fs');
const json = require('../JSON/login.json');
console.log('hello')
console.log(
    json,
    fs.readFileSync('../JSON/login.json').toString()
)
writeJSONfile()
function loadJSON(filename = ''){
    return JSON.parse(
        fs.existsSync(filename)
            ?fs.readFileSync(filename).toString()
            :'null'
    )
}
function saveJSON(filename = '', json = '"'){
    return fs.writeFileSync(filename,JSON.stringify(json, null, 2))
}
function writeJSONfile(){
    const input = loadJSON('../JSON/login.json')
    fetch('../pages/SignUp.html')
    var login = {'email_address' : "edricksok101@gmail.com",
    'password' : "password",
    'first_name': "Edrick",
    'last_name' : "Sok",
    'age' : "20",
    'sex' : "Male"
    }
    
    ;[
        {login}
        
].forEach(string => input.Volunteers.push(string))
    
    //input.Users.push(user)
    saveJSON('../JSON/login.json',input)
}
/*function writeJsonfile(){
    console.log("Running.");
    var jsfile = require('../JSON/login.json');
    var user = { "emailAddress" : document.getElementById("contact_info").value,
    "password" : document.getElementById("password").value,
    "first_name" : document.getElementById("first_name").value,
    "last_name" : document.getElementById("last_name").value,
    "age" : document.getElementById("age").value,
    "sex" : document.getElementById("sex").value
    }
    var userstring = JSON.stringify(user);
   
    jsfile.writeFile("login.json",userstring, function(err, result) {
        if(err) console.log('error',err);
    });
}
*/

