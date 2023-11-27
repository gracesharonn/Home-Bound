/* Navbar effects */
var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (currentScrollPos === 0) {
    document.querySelector('.NavigationBar').style.top = '0'
  } else if (prevScrollpos > currentScrollPos) {
    document.querySelector('.NavigationBar').style.top = '-100px'
  } else {
    document.querySelector('.NavigationBar').style.top = '-100px' // Adjust this value based on your header height
  }
  prevScrollpos = currentScrollPos
}
/* Services Menu Bar */
document.addEventListener('DOMContentLoaded', function () {
  const servicesButton = document.getElementById('ServicesButton')
  const serviceMenu = document.querySelector('.ServiceMenu')
  const closeButton = document.getElementById('x-button')

  servicesButton.addEventListener('click', function () {
    serviceMenu.classList.add('active')
    event.preventDefault()
  })

  closeButton.addEventListener('click', function () {
    serviceMenu.classList.remove('active')
  })
})

// Zipcode validation
function validateZipCode () {
  var zipCodeInput = document.getElementById('zip_code')
  var zipCodeValue = zipCodeInput.value

  // Regular expression for a 5-digit ZIP code (US format)
  var zipCodePattern = /^\d{5}$/

  if (!zipCodePattern.test(zipCodeValue)) {
    alert('Please enter a valid 5-digit ZIP code.')
    zipCodeInput.focus()
    return false
  }

  return true
}

// Shelter service question functions
function showAdditionalQuestions () {
  var serviceSelect = document.getElementById('service')
  var shelterQuestions = document.getElementById('shelterQuestions')
  var daycareQuestions = document.getElementById('daycareQuestions')
  var employQuestions = document.getElementById('employmentQuestions')
  var foodQuestions = document.getElementById('foodServiceQuestions')
  var medicalQuestions = document.getElementById('medicalServiceQuestions')

  if (serviceSelect.value === 'Shelter') {
    shelterQuestions.style.display = 'block'
    daycareQuestions.style.display = 'none'
    employQuestions.style.display = 'none'
    foodQuestions.style.display = 'none'
    medicalQuestions.style.display = 'none'
  } else if (serviceSelect.value === 'Daycare') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'block'
    employQuestions.style.display = 'none'
    foodQuestions.style.display = 'none'
    medicalQuestions.style.display = 'none'
  } else if (serviceSelect.value === 'Food') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employQuestions.style.display = 'none'
    foodQuestions.style.display = 'block'
    medicalQuestions.style.display = 'none'
  } else if (serviceSelect.value === 'Medical') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employQuestions.style.display = 'none'
    foodQuestions.style.display = 'none'
    medicalQuestions.style.display = 'block'
  } else if (serviceSelect.value === 'Bikehub') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employQuestions.style.display = 'none'
    foodQuestions.style.display = 'none'
    medicalQuestions.style.display = 'none'
  } else if (serviceSelect.value === 'Employment') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employQuestions.style.display = 'block'
    foodQuestions.style.display = 'none'
    medicalQuestions.style.display = 'none'
  } else {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employQuestions.style.display = 'none'
    foodQuestions.style.display = 'none'
    medicalQuestions.style.display = 'none'
  }
}

//Shelter JSON Displayed
function fetchAndDisplayShelters () {
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = '../../JSON/services.json'

  fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
      // Handle the JSON data and display businesses
      displayShelters(data.shelters)
    })
    .catch(error => console.error('Error fetching JSON:', error))
}

//Medical JSON Displayed
function fetchAndDisplayMedical () {
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = '../../JSON/services.json'

  fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
      // Handle the JSON data and display businesses
      displayShelters(data.medical)
    })
    .catch(error => console.error('Error fetching JSON:', error))
}

//Food JSON Displayed
function fetchAndDisplayFood () {
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = '../../JSON/services.json'

  fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
      // Handle the JSON data and display businesses
      displayShelters(data.food)
    })
    .catch(error => console.error('Error fetching JSON:', error))
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

//Employment JSON Displayed
function fetchAndDisplayEmployment () {
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = '../../JSON/services.json'

  fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
      // Handle the JSON data and display businesses
      displayShelters(data.employment)
    })
    .catch(error => console.error('Error fetching JSON:', error))
}

//Bikehub JSON Displayed
function fetchAndDisplayBikehub () {
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = '../../JSON/services.json'

  fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
      // Handle the JSON data and display businesses
      displayShelters(data.bikehub)
    })
    .catch(error => console.error('Error fetching JSON:', error))
}

//All JSON Displayed
function fetchAndDisplayAll () {
  const jsonFilePath = '../../JSON/services.json'

  fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
      displayAllData(data)
    })
    .catch(error => console.error('Error fetching JSON:', error))
}

function displayAllData (data) {
  const servicesContainer = document.getElementById('servicesContainer')
  servicesContainer.innerHTML = '' // Clear previous content

  // Iterate over all service types in the data
  Object.keys(data).forEach(serviceType => {
    const services = data[serviceType]

    // Displaying business name and location for each service
    services.forEach(service => {
      const serviceDiv = document.createElement('div')
      serviceDiv.classList.add('serviceContainer')

      // Add a yellow box background to each service container
      serviceDiv.style.backgroundColor = '#FFE475'
      serviceDiv.style.padding = '5px 40px 5px 40px'
      serviceDiv.style.borderRadius = '35px'
      serviceDiv.style.boxShadow = '-30px 30px 0px rgb(0, 0, 102, 1)'
      serviceDiv.style.display = 'block'
      serviceDiv.style.width = '780px'
      serviceDiv.style.height = 'auto'
      serviceDiv.style.maxWidth = '850px'

      let content = `
          <br>
          <h4 style="background-color: #FFE475;">${service.businessName}</h4>
        `

      if (service.location) {
        content += `<p style="background-color: #FFE475;">${service.location.street} ${service.location.city} ${service.location.state} ${service.location.zipcode}</p>`
      }

      content += `
          <p style="background-color: #FFE475;">${service.contacts.phone}</p>
          <a href="mailto:${service.contacts.email}" class="emailParagraph" target="_black">${service.contacts.email}</a>
          <br>
          <a href="${service.website}" class="websiteParagraph" onclick="openInNewTab('${service.website}')">${service.website}</a>
          <p class="descriptionParagraph">"${service.description}"</p>
          <br>
          <hr>
        `

      // Check if email exists before adding it
      if (!service.contacts.email) {
        content = content
          .replace(
            '<a href="mailto:${service.contacts.email}" class="emailParagraph" target="_black">',
            ''
          )
          .replace('</a>', '')
      }

      // Check if website exists before adding it
      if (!service.website) {
        content = content
          .replace(
            '<a href="${service.website}" class="websiteParagraph" onclick="openInNewTab(\'${service.website}\')">',
            ''
          )
          .replace('</a>', '')
      }

      serviceDiv.innerHTML = content
      servicesContainer.appendChild(serviceDiv)
    })
  })
}

//Services Information Displayed
function displayShelters (shelters) {
  const sheltersContainer = document.getElementById('sheltersContainer')
  sheltersContainer.innerHTML = '' // Clear previous content

  shelters.forEach((shelter, index) => {
    const shelterDiv = document.createElement('div')
    shelterDiv.classList.add('sheltersContainer')

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
        `

    // Check if email exists before adding it
    if (!shelter.contacts.email) {
      content = content
        .replace('<p class="emailParagraph">', '')
        .replace('</p>', '')
    }

    // Check if website exists before adding it
    if (!shelter.website) {
      content = content
        .replace('<p class="websiteParagraph">', '')
        .replace('</p>', '')
    }

    shelterDiv.innerHTML = content
    sheltersContainer.appendChild(shelterDiv)
  })
}

//Open new tab for website
function openInNewTab (url) {
  event.preventDefault()
  window.open(url, '_blank')
}

/* Login HTML Page*/
function checkPassword () {
  var loginData
  fetchData()
  var enterEmail = document.getElementById('email_address').value
  var enterPass = document.getElementById('password').value

  //grab email and password from json file
  fetch('../JSON/login.json')
    .then(response => response.json())
    .then(data => {
      var JSONemail = findUserbyEmail(enterEmail)
      console.log('Email:', JSONemail)
      var JSONpassword = findPasswordByEmail(JSONemail)
      console.log(JSONpassword)
      //data.find(u=>u.email_address === email_address && u.password === password);
      if (JSONpassword === enterPass) {
        document.getElementById('VerificationMessage').innerText = 'Success'
        openVolunteerPage(JSONemail)
      } else {
        document.getElementById('VerificationMessage').innerText =
          'Invalid email or password.'
      }
    })
    .catch(error => console.error('Error:', error))
}
function openVolunteerPage (email_address) {
  var first_name = findFirstbyEmail(email_address)
  var last_name = findLastbyEmail(email_address)
  function openVolunteerPage (email_address) {
    var first_name = findFirstbyEmail(email_address)
    var last_name = findLastbyEmail(email_address)

    window.location.href =
      `../pages/VolunteerEvents.html?first_name=` +
      encodeURIComponent(first_name) +
      '&last_name=' +
      encodeURIComponent(last_name)
  }

  function findFirstbyEmail (email_address) {
    var index = indexOfEmail(email_address)
    var file_first_name = loginData.Volunteers[index].first_name
    return file_first_name
  }
  function findLastbyEmail (email_address) {
    var index = indexOfEmail(email_address)
    var file_last_name = loginData.Volunteers[index].last_name
    return file_last_name
  }
  function findUserbyEmail (email_address) {
    for (var i = 0; i < loginData.Volunteers.length; i++) {
      var volunteers = loginData.Volunteers[i]
      if (volunteers.email_address === email_address) {
        return volunteers.email_address
      }
    }
    return null
  }

  function findFirstbyEmail (email_address) {
    var index = indexOfEmail(email_address)
    var file_first_name = loginData.Volunteers[index].first_name
    return file_first_name
  }
  function findLastbyEmail (email_address) {
    var index = indexOfEmail(email_address)
    var file_last_name = loginData.Volunteers[index].last_name
    return file_last_name
  }

  function indexOfEmail (email_address) {
    return loginData.Volunteers.findIndex(function (volunteer) {
      return volunteer.email_address == email_address
    })
  }
  function findPasswordByEmail (email_address) {
    var index = indexOfEmail(email_address)
    var filePassword = loginData.Volunteers[index].password
    return filePassword
  }
  function enterData () {
    if (loginData.Volunteers && loginData.Volunteers.length > 0) {
      for (var i = 0; i < loginData.Volunteers.length; i++)
        console.log(i + ':', loginData.Volunteers[i])
    } else {
      console.log('No volunteers found.')
    }
  }
  function fetchData () {
    fetch('../JSON/login.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        console.log('Data fetched:', data)
        loginData = data
        enterData()
      })
  }
}

//onSubmit of form

function submitForm () {
  var service = document.getElementById('service').value

  //make funtionally workable by redirecting to other pages //TODO------------------------------------------------------------------------------
  //check if service
  if (service === 'Food') {
    window.location.href = './services/Food.html'
  } else if (service === 'Shelter') {
    window.location.href = './services/Shelters.html'
    //openShelterSearch(service)
  } else if (service === 'Medical') {
    window.location.href = './services/Medical.html'
  } else if (service === 'Daycare') {
    window.location.href = './services/Daycare.html'
  } else if (service === 'Bikehub') {
    window.location.href = './services/Bikehub.html'
  } else if (service === 'Employment') {
    window.location.href = './services/Employment.html'
  } else {
  }

  return true
}

function openShelterSearch (service) {
  var sex = document.querySelector('input[name="sex"]:checked').value
  var isVet = document.querySelector('input[name="veteran"]:checked').value
  var term = document.querySelector(`input[name="term"]:checked`).value

  window.location.href =
    `./services/Search.html` +
    `?service=` +
    encodeURIComponent(service) +
    `&sex=` +
    encodeURIComponent(sex) +
    `&veteran=` +
    encodeURIComponent(veteran) +
    `&term=` +
    encodeURIComponent(term)
}

function searchResults () {
  //TODO: Resolve this function to display JSON Filtered Results
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = '../../JSON/services.json'

  const urlParse = new URLSearchParams(window.location.search)

  var service = urlParse.get('service')

  //check if service
  if (service === 'Food') {
  } else if (service === 'Shelter') {
    const sex = urlParse.get('sex')
    const veteran = urlParse.get('veteran')
    const term = urlParse.get('term')

    fetch('../../JSON/services.json')
      .then(response => response.json())
      .then(data => {
        const allBusinesses = data.shelters // Assuming "shelters" is the array of businesses in your JSON

        // Filter businesses where the "veteran" attribute is set to "Yes"
        const veteranBusinesses = allBusinesses.filter(
          business => business.attributes.veteran === 'Yes'
        )

        const shelterContainer = document.getElementById('shelterContainer')

        shelterContainer.innerHTML = ''

        if (veteranBusinesses.length > 0) {
          veteranBusinesses.forEach(business => {
            const businessDiv = document.createElement('div')
            businessDiv.classList.add('shelterContainer')
            businessDiv.innerHTML = `
                    <h2>${business.businessName}</h2>
                    <p><strong>Description:</strong> ${business.description}</p>
                    <p><strong>Location:</strong> ${business.location.street}, ${business.location.city}, ${business.location.state} ${business.location.zipcode}</p>
                    <p><strong>Contact Email:</strong> ${business.contacts.email}</p>
                    <p><strong>Contact Phone:</strong> ${business.contacts.phone}</p>
                    <p><strong>Website:</strong> <a href="${business.website}" target="_blank">${business.website}</a></p>
                    <p><strong>Attributes:</strong> Veteran: ${business.attributes.veteran}, Sex: ${business.attributes.sex}, Term: ${business.attributes.term}</p>
                `
            shelterContainer.appendChild(businessDiv)
          })
        } else {
          shelterContainer.textContent =
            'No businesses found that cater to veterans.'
        }
      })
      .catch(error => console.error('Error fetching data:', error))
  } else if (service === 'Medical') {
  } else if (service === 'Daycare') {
  } else if (service === 'Bikehub') {
  } else if (service === 'Employment') {
  } else {
  }
  // Handle other service types if needed
}

/* Registration/ SignUp */
const fs = require('fs')
const json = require('../JSON/login.json')
console.log('hello')
console.log(json, fs.readFileSync('../JSON/login.json').toString())
writeJSONfile()
function loadJSON (filename = '') {
  return JSON.parse(
    fs.existsSync(filename) ? fs.readFileSync(filename).toString() : 'null'
  )
}
function saveJSON (filename = '', json = '"') {
  return fs.writeFileSync(filename, JSON.stringify(json, null, 2))
}
function writeJSONfile () {
  const input = loadJSON('../JSON/login.json')
  fetch('../pages/SignUp.html')
  var login = {
    email_address: 'edricksok101@gmail.com',
    password: 'password',
    first_name: 'Edrick',
    last_name: 'Sok',
    age: '20',
    sex: 'Male'
  }

  ;[{ login }].forEach(string => input.Volunteers.push(string))

  //input.Users.push(user)
  saveJSON('../JSON/login.json', input)
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

/*     //All JSON Displayed
    function fetchAndDisplayAll () {
      // Assuming the JSON file is one level up from the current directory
      const jsonFilePath = '../../JSON/services.json'
    
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses
          displayShelters(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
 */
