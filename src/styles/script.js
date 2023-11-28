var prevScrollposNavbar = window.pageYOffset
var prevScrollposOtherServices = window.pageYOffset
var otherServicesElement = document.querySelector('.OtherServices')
var navbarElement = document.querySelector('.NavigationBar')

window.onscroll = function () {
  var currentScrollPosNavbar = window.pageYOffset
  var currentScrollPosOtherServices = window.pageYOffset

  // Navbar
  if (prevScrollposNavbar > currentScrollPosNavbar) {
    navbarElement.style.top = '0'
  } else {
    navbarElement.style.top = '-100px'
  }
  prevScrollposNavbar = currentScrollPosNavbar

  // Other Services
  if (currentScrollPosOtherServices === 0) {
    otherServicesElement.style.right = '0'
  } else if (prevScrollposOtherServices < currentScrollPosOtherServices) {
    // Add a delay before showing the Other Services element
    setTimeout(function () {
      otherServicesElement.style.right = '-30%'
    }, 300)
  } else {
    otherServicesElement.style.right = '0'
  }
  prevScrollposOtherServices = currentScrollPosOtherServices
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
  var employmentQuestions = document.getElementById('employmentQuestions')
  var foodServiceQuestions = document.getElementById('foodServiceQuestions')
  var medicalServiceQuestions = document.getElementById('medicalServiceQuestions')

  if (serviceSelect.value === 'Shelter') {
    shelterQuestions.style.display = 'block'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display = 'none'
  } else if (serviceSelect.value === 'Daycare') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'block'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display = 'none'
  } else if (serviceSelect.value === 'Employment') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'block'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display = 'none'
  } else if (serviceSelect.value === 'Food') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'block'
    medicalServiceQuestions.style.display = 'none'
  } else if (serviceSelect.value === 'Medical') {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display = 'block'
  } else {
    shelterQuestions.style.display = 'none'
    daycareQuestions.style.display = 'none'
    employmentQuestions.style.display = 'none'
    foodServiceQuestions.style.display = 'none'
    medicalServiceQuestions.style.display = 'none'
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

function displayAllData(data) {
  const servicesContainer = document.getElementById('servicesContainer');
  servicesContainer.innerHTML = ''; // Clear previous content

  // Iterate over all service types in the data
  Object.keys(data).forEach((serviceType) => {
    const services = data[serviceType];

    // Displaying business name and location for each service
    services.forEach((service, index) => {
      const serviceDiv = document.createElement('div');
      serviceDiv.classList.add('serviceContainer');

       // Create a div for shelter information
      const serviceInfoDiv = document.createElement('div');
      serviceInfoDiv.classList.add('serviceInfo');

      let content = `
        <br>
        <h4>${service.businessName}</h4>
        <p>${service.location.street} ${service.location.city} ${service.location.state} ${service.location.zipcode}</p>
        <p>${service.contacts.phone}</p>
        <a href="mailto:${service.contacts.email}" class="emailParagraph" target="_blank">${service.contacts.email}</a>
        <br>
        <a href="${service.website}" class="websiteParagraph" onclick="openInNewTab('${service.website}')">${service.website}</a>
        <p class="descriptionParagraph">"${service.description}"</p>
        <br>
        <hr>
      `;

      // Check if email exists before adding it
      if (!service.contacts.email) {
        content = content.replace('<a href="mailto:${service.contacts.email}" class="emailParagraph" target="_black">', '').replace('</a>', '');
      }

      // Check if website exists before adding it
      if (!service.website) {
        content = content.replace('<a href="${service.website}" class="websiteParagraph" onclick="openInNewTab(\'${service.website}\')">', '').replace('</a>', '');
      }

  
      //shelters
      serviceInfoDiv.innerHTML = content;

      // Append shelter information to the common container
      serviceDiv.appendChild(serviceInfoDiv);
  
     // Create a div for the map
     const mapContainer = document.createElement('div');
     const uniqueMapId = `map${serviceType}_${index}`; // Use a unique ID for each map
     mapContainer.id = uniqueMapId;
     mapContainer.classList.add('mapContainer');
  
      // Append the map container to the shelter container
      serviceDiv.appendChild(mapContainer);
  
      // Append the common container to the sheltersContainer
      servicesContainer.appendChild(serviceDiv);

      // Create map inside the map container
      createMap(uniqueMapId, `${service.location.latitude}`, `${service.location.longitude}`, `${service.businessName}`);
    });
  });
}


fetchAndDisplayAll()

function displayShelters (shelters) {
  const sheltersContainer = document.getElementById('sheltersContainer')
  sheltersContainer.innerHTML = '' // Clear previous content

  shelters.forEach((shelter, index) => {
    // Create a container for each shelter
    const container = document.createElement('div')
    container.classList.add('shelterContainer')

    // Create a div for shelter information
    const shelterInfoDiv = document.createElement('div')
    shelterInfoDiv.classList.add('shelterInfo')
    shelterInfoDiv.id = `shelter${index}`

    let content = `
      <br>
      <h4>${shelter.businessName}</h4>
      <p>${shelter.location.street} ${shelter.location.city} ${shelter.location.state} ${shelter.location.zipcode}</p>
      <p>${shelter.contacts.phone}</p>
      <a href="mailto:${shelter.contacts.email}" class="emailParagraph" target="_blank">${shelter.contacts.email}</a>
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

    shelterInfoDiv.innerHTML = content

    // Append shelter information to the common container
    container.appendChild(shelterInfoDiv)

    // Create a div for the map
    const mapContainer = document.createElement('div')
    mapContainer.id = `map${index}`
    mapContainer.classList.add('mapContainer')

    // Append the map container to the shelter container
    container.appendChild(mapContainer)

    // Append the common container to the sheltersContainer
    sheltersContainer.appendChild(container)

    // Create map inside the map container
    createMap(
      `map${index}`,
      `${shelter.location.latitude}`,
      `${shelter.location.longitude}`,
      `${shelter.businessName}`
    )
  })
}

//Function to generate leaflet map
function createMap (mapId, latitude, longitude, name) {
  var map = L.map(mapId).setView([latitude, longitude], 15)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)
  var marker = L.marker([latitude, longitude]).addTo(map)
  marker.bindPopup(name).openPopup()
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
  window.location.href =
    `../pages/VolunteerEvents.html?first_name=` +
    encodeURIComponent(first_name) +
    '&last_name=' +
    encodeURIComponent(last_name)
}

function findUserbyEmail (email_address) {
  console.log(email_address)
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

//getting params from url
function getParams () {
  var urlUserParams = new URLSearchParams(window.location.search)
  var first_name = urlUserParams.get('first_name')
  var last_name = urlUserParams.get('last_name')
  document.getElementById('first_name').innerText = first_name
  document.getElementById('last_name').innerText = last_name

  document.getElementById('first_name').style.fontSize = '35px';
  document.getElementById('first_name').style.fontStyle = 'normal';
  document.getElementById('first_name').style.fontWeight = '400';
  document.getElementById('first_name').style.letterSpacing = '1.575px';
  document.getElementById('first_name').style.backgroundColor = 'transparent';
  document.getElementById('first_name').style.color = '#F5F6FA';
  document.getElementById('first_name').style.fontFamily = 'Gochi Hand';
  
  document.getElementById('last_name').style.fontSize = '35px';
  document.getElementById('last_name').style.fontStyle = 'normal';
  document.getElementById('last_name').style.fontWeight = '400';
  document.getElementById('last_name').style.letterSpacing = '1.575px';
  document.getElementById('last_name').style.backgroundColor = 'transparent';
  document.getElementById('last_name').style.color = '#F5F6FA';
  document.getElementById('last_name').style.fontFamily = 'Gochi Hand';
}

//onSubmit of form

function submitForm () {
  var service = document.getElementById('service').value

  //check if service
  if (service === 'Food') {
    //window.location.href = './Services/Food.html'
    openFoodSearch(service)
  } else if (service === 'Shelter') {
    //window.location.href = './Services/Shelters.html'
    openShelterSearch(service)
  } else if (service === 'Medical') {
    //window.location.href = './Services/Medical.html'
    openMedicalSearch(service)
  } else if (service === 'Daycare') {
    //window.location.href = './Services/Daycare.html'
    openDaycareSearch(service)
  } else if (service === 'Bikehub') {
    window.location.href = './Services/Bikehub.html'
  } else if (service === 'Employment') {
    //window.location.href = './Services/Employment.html'
    openEmploymentSearch(service)
  } else {
    window.location.href = './Services/SeeAll.html'
  }
}

function openShelterSearch (service) {
  var sex = document.querySelector('input[name="sex"]:checked').value
  var isVet = document.querySelector('input[name="veteran"]:checked').value
  var term = document.querySelector('input[name="term"]:checked').value

  window.location.href =
    `./services/Search.html?service=` +
    encodeURIComponent(service) +
    `&sex=` +
    encodeURIComponent(sex) +
    `&veteran=` +
    encodeURIComponent(isVet) +
    `&term=` +
    encodeURIComponent(term)
}

function openMedicalSearch (service) {
  var sex = document.querySelector('input[name="sex"]:checked').value
  var assist = document.querySelector(
    'input[name="assistance_type"]:checked'
  ).value
  var drugs = document.querySelector('input[name="drugs"]:checked').value

  window.location.href =
    `./services/Search.html?service=` +
    encodeURIComponent(service) +
    `&sex=` +
    encodeURIComponent(sex) +
    `&assist=` +
    encodeURIComponent(assist) +
    `&drugs=` +
    encodeURIComponent(drugs)
}

function openDaycareSearch (service) {
  var sex = document.querySelector('input[name="sex"]:checked').value
  var age = document.querySelector('input[name="child_age"]:checked').value
  var diet = document.querySelector(
    'input[name="dietary_requirements"]:checked'
  ).value

  window.location.href =
    `./services/Search.html?service=` +
    encodeURIComponent(service) +
    `&sex=` +
    encodeURIComponent(sex) +
    `&age=` +
    encodeURIComponent(age) +
    `&diet=` +
    encodeURIComponent(diet)
}

function openFoodSearch (service) {
  var sex = document.querySelector('input[name="sex"]:checked').value
  var fam = document.querySelector('input[name="fam_status"]:checked').value
  var allergies = document.querySelector(
    'input[name="allergies"]:checked'
  ).value

  window.location.href =
    `./services/Search.html?service=` +
    encodeURIComponent(service) +
    `&sex=` +
    encodeURIComponent(sex) +
    `&fam=` +
    encodeURIComponent(fam) +
    `&allergies=` +
    encodeURIComponent(allergies)
}

function openEmploymentSearch (service) {
  var sex = document.querySelector('input[name="sex"]:checked').value
  var disability = document.querySelector('input[name="disability"]:checked').value
  var crime = document.querySelector('input[name="crime"]:checked').value

  window.location.href =
    `./services/Search.html?service=` +
    encodeURIComponent(service) +
    `&sex=` +
    encodeURIComponent(sex) +
    `&disability=` +
    encodeURIComponent(disability) +
    `&crime=` +
    encodeURIComponent(crime)
}

function searchResults () {
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = '../../JSON/services.json'

  const urlParse = new URLSearchParams(window.location.search)

  var service = urlParse.get('service')

  //check if service
  if (service === 'Food') {
    var sex = urlParse.get('sex')
    var fam = urlParse.get('fam')
    var allergies = urlParse.get('allergies')

    //opt 1
    if (fam === 'Individual' && sex === 'Male' && allergies === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt1(data.food)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 2
    else if (fam === 'Individual' && sex === 'Male' && allergies === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt2(data.food)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 3
    else if (fam === 'Individual' && sex === 'Female' && allergies === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt3(data.food)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 4
    else if (fam === 'Individual' && sex === 'Female' && allergies === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt4(data.food)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 5
    else if (fam === 'Family' && sex === 'Male' && allergies === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt5(data.food)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 6
    else if (fam === 'Family' && sex === 'Male' && allergies === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt6(data.food)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 7
    else if (fam === 'Family' && sex === 'Female' && allergies === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt7(data.food)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 8
    else if (fam === 'Family' && sex === 'Female' && allergies === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt8(data.food)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 9
    else {
      fetchAndDisplayFood ()
    }
  } else if (service === 'Shelter') {
    // variables to check for
    var vet = urlParse.get('veteran')
    var sex = urlParse.get('sex')
    var term = urlParse.get('term')

    //opt 1
    if (vet === 'Yes' && sex === 'Male' && term === 'Short') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          shelterOpt1(data.shelters)
        })
        .catch(error => console.error('Error fetching JSON:', error))
      //opt 2
    } else if (vet === 'Yes' && sex === 'Male' && term === 'Long') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          shelterOpt2(data.shelters)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 3
    else if (vet === 'Yes' && sex === 'Female' && term === 'Short') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          shelterOpt3(data.shelters)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 4
    else if (vet === 'Yes' && sex === 'Female' && term === 'Long') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          shelterOpt4(data.shelters)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 5
    else if (vet === 'No' && sex === 'Male' && term === 'Short') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          shelterOpt5(data.shelters)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 6
    else if (vet === 'No' && sex === 'Male' && term === 'Long') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          shelterOpt6(data.shelters)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 7
    else if (vet === 'No' && sex === 'Female' && term === 'Short') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          shelterOpt7(data.shelters)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 8
    else if (vet === 'No' && sex === 'Female' && term === 'Long') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          shelterOpt8(data.shelters)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 9 catch
    else {
      fetchAndDisplayShelters()
    }
  } else if (service === 'Medical') {
    // variables to check for
    var drugs = urlParse.get(drugs)
    var sex = urlParse.get(sex)
    var assist = urlParse.get(assist)
    //opt 1
    if (drugs === 'Yes' && sex === 'Male' && assist === 'Mental') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          MedicalOpt1(data.medical)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 2
    else if (drugs === 'Yes' && sex === 'Male' && assist === 'Physical') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          MedicalOpt2(data.medical)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 3
    else if (drugs === 'Yes' && sex === 'Female' && assist === 'Mental') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          MedicalOpt3(data.medical)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 4
    else if (drugs === 'Yes' && sex === 'Female' && assist === 'Physical') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          MedicalOpt4(data.medical)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 5
    else if (drugs === 'No' && sex === 'Male' && assist === 'Mental') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          MedicalOpt5(data.medical)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 6
    else if (drugs === 'No' && sex === 'Male' && assist === 'Physical') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          MedicalOpt6(data.medical)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 7
    else if (drugs === 'No' && sex === 'Female' && assist === 'Mental') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          MedicalOpt7(data.medical)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 8
    else if (drugs === 'No' && sex === 'Female' && assist === 'Physical') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          MedicalOpt8(data.medical)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 9
    else {
      fetchAndDisplayMedical()
    }
  } else if (service === 'Daycare') {
    // variables to check for
    var age = urlParse.get('age')
    var sex = urlParse.get('sex')
    var diet = urlParse.get('diet')

    //opt 1
    if (diet === 'Yes' && sex === 'Male' && age === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt1(data.daycare)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 2
    else if (diet === 'Yes' && sex === 'Male' && age === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt2(data.daycare)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 3
    else if (diet === 'Yes' && sex === 'Female' && age === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt3(data.daycare)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 4
    else if (diet === 'Yes' && sex === 'Female' && age === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt4(data.daycare)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 5
    else if (diet === 'No' && sex === 'Male' && age === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt5(data.daycare)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 6
    else if (diet === 'No' && sex === 'Male' && age === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt6(data.daycare)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 7
    else if (diet === 'No' && sex === 'Female' && age === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt7(data.daycare)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 8
    else if (diet === 'No' && sex === 'Female' && age === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          daycareOpt8(data.daycare)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 9
    else {
      fetchAndDisplayDaycare()
    }
  } else if (service === 'Bikehub') {
  } else if (service === 'Employment') {
    var sex = urlParse.get('sex')
    var disability = urlParse.get('diability')
    var crime = urlParse.get('crime')

    //opt 1
    if (disability === 'Yes' && sex === 'Male' && crime === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          employOpt1(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 2
    else if (disability === 'Yes' && sex === 'Male' && crime === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          employOpt2(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 3
    else if (disability === 'Yes' && sex === 'Female' && crime === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          employOpt3(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 4
    else if (disability === 'Yes' && sex === 'Female' && crime === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          employOpt4(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 5
    else if (disability === 'No' && sex === 'Male' && crime === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          employOpt5(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 6
    else if (disability === 'No' && sex === 'Male' && crime === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          employOpt6(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 7
    else if (disability === 'No' && sex === 'Female' && crime === 'Yes') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          employOpt7(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 8
    else if (disability === 'No' && sex === 'Female' && crime === 'No') {
      fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
          // Handle the JSON data and display businesses

          employOpt8(data.employment)
        })
        .catch(error => console.error('Error fetching JSON:', error))
    }
    //opt 9
    else {
      fetchAndDisplayEmployment()
    }
  } else {
    fetchAndDisplayAll ()
  }
}

function employOpt1 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.disability === 'Yes' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.disability !== 'Yes' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  displayShelters(allShelters)
}

function employOpt2 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.disability === 'Yes' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.disability !== 'Yes' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  displayShelters(allShelters)
}

function employOpt3 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.disability === 'Yes' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.disability !== 'Yes' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  displayShelters(allShelters)
}

function employOpt4 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.disability === 'Yes' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.disability !== 'Yes' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  displayShelters(allShelters)
}

function employOpt5 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.disability === 'No' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.disability !== 'No' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  displayShelters(allShelters)
}

function employOpt6 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.disability === 'No' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.disability !== 'No' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  displayShelters(allShelters)
}

function employOpt7 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.disability === 'No' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.disability !== 'No' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  displayShelters(allShelters)
}

function employOpt8 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.disability === 'No' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.disability !== 'No' ||
      (business.attributes.disability === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.crime !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  displayShelters(allShelters)
}

function foodOpt1 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.family === 'Individual' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.family !== 'Individual' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function foodOpt2 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.family === 'Individual' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.family !== 'Individual' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function foodOpt3 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.family === 'Individual' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.family !== 'Individual' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function foodOpt4 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.family === 'Individual' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.family !== 'Individual' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function foodOpt5 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.family === 'Family' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.family !== 'Family' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function foodOpt6 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.family === 'Family' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.family !== 'Family' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function foodOpt7 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.family === 'Family' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.family !== 'Family' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function foodOpt8 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.family === 'Family' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.family !== 'Family' ||
      (business.attributes.family === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.allergies !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function daycareOpt1 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.diet === 'Yes' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.age === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.diet !== 'Yes' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.age !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function daycareOpt2 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.diet === 'Yes' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.age === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.diet !== 'Yes' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.age !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function daycareOpt3 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.diet === 'Yes' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.age === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.diet !== 'Yes' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.age !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function daycareOpt4 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.diet === 'Yes' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.age === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.diet !== 'Yes' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.age !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function daycareOpt5 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.diet === 'No' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.age === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.diet !== 'No' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.age !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function daycareOpt6 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.diet === 'No' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.age === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.diet !== 'No' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.age !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function daycareOpt7 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.diet === 'No' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.age === 'Yes')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.diet !== 'No' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.age !== 'Yes')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function daycareOpt8 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.diet === 'No' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.age === 'No')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.diet !== 'No' ||
      (business.attributes.diet === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.age !== 'No')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function MedicalOpt1 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.drugs === 'Yes' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist === 'Mental')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.drugs !== 'Yes' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist !== 'Mental')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function MedicalOpt2 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.drugs === 'Yes' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist === 'Physical')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.drugs !== 'Yes' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist !== 'Physical')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function MedicalOpt3 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.drugs === 'Yes' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist === 'Mental')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.drugs !== 'Yes' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist !== 'Mental')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function MedicalOpt4 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.drugs === 'Yes' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist === 'Physical')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.drugs !== 'Yes' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist !== 'Physical')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function MedicalOpt5 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.drugs === 'No' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist === 'Mental')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.drugs !== 'No' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist !== 'Mental')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function MedicalOpt6 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.drugs === 'No' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist === 'Physical')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.drugs !== 'No' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist !== 'Physical')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function MedicalOpt7 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.drugs === 'No' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist === 'Mental')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.drugs !== 'No' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist !== 'Mental')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function MedicalOpt8 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      business.attributes.drugs === 'No' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist === 'Physical')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      business.attributes.drugs !== 'No' ||
      (business.attributes.drugs === 'n/a' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.assist !== 'Physical')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function shelterOpt1 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran === 'Yes' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.term === 'Short')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran !== 'Yes' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.term !== 'Short')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function shelterOpt2 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran === 'Yes' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.term === 'Long')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran !== 'Yes' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.term !== 'Long')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function shelterOpt3 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran === 'Yes' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.term === 'Short')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran !== 'Yes' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.term !== 'Short')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function shelterOpt4 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran === 'Yes' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.term === 'Long')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran !== 'Yes' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.term !== 'Long')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}
function shelterOpt5 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran === 'No' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.term === 'Short')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran !== 'No' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.term !== 'Short')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}
function shelterOpt6 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran === 'No' &&
        business.attributes.sex === 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.term === 'Long')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran !== 'No' &&
        business.attributes.sex !== 'Male') ||
      (business.attributes.sex === 'n/a' && business.attributes.term !== 'Long')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function shelterOpt7 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran === 'No' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.term === 'Short')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran !== 'No' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' &&
        business.attributes.term !== 'Short')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

function shelterOpt8 (businesses) {
  // Filter veteran and non-veteran shelters
  var veteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran === 'No' &&
        business.attributes.sex === 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.term === 'Long')
  )
  var nonVeteranShelters = businesses.filter(
    business =>
      (business.attributes.veteran !== 'No' &&
        business.attributes.sex !== 'Female') ||
      (business.attributes.sex === 'n/a' && business.attributes.term !== 'Long')
  )

  // Combine veteran and non-veteran shelters
  var allShelters = veteranShelters.concat(nonVeteranShelters)
  searchResultsOut(allShelters)
}

// function to ouput the filtered business
function searchResultsOut (allShelters) {
  // Get the sheltersContainer div
  var sheltersContainer = document.getElementById('sheltersContainer')

  // Clear previous content in sheltersContainer
  sheltersContainer.innerHTML = ''

  // Display shelter information in sheltersContainer
  allShelters.forEach((shelter, index) => {
    var container = document.createElement('div')
    container.classList.add('shelterContainer')

    var shelterInfoDiv = document.createElement('div')
    shelterInfoDiv.classList.add('shelterInfo')
    shelterInfoDiv.id = `shelter${index}`

    let content = `
      <br>
      <h4>${shelter.businessName}</h4>
      <p>${shelter.location.street} ${shelter.location.city} ${shelter.location.state} ${shelter.location.zipcode}</p>
      <p>${shelter.contacts.phone}</p>
      <a href="mailto:${shelter.contacts.email}" class="emailParagraph" target="_blank">${shelter.contacts.email}</a>
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

    shelterInfoDiv.innerHTML = content
    container.appendChild(shelterInfoDiv)

    // Create a div for the map
    const mapContainer = document.createElement('div')
    mapContainer.id = `map${index}`
    mapContainer.classList.add('mapContainer')

    // Append the map container to the shelter container
    container.appendChild(mapContainer)

    sheltersContainer.appendChild(container)

    // Create map inside the map container
    createMap(
      `map${index}`,
      `${shelter.location.latitude}`,
      `${shelter.location.longitude}`,
      `${shelter.businessName}`
    )
  })
}

/* Registration/ SignUp */
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
function sendToVolEvents () {
  var loginData
  fetchData()
  var enteredEmail = document.getElementById('email_address').value
  var first_password = document.getElementById('password').value
  var confirm_password = document.getElementById('password2').value
  fetch('../JSON/login.json')
    .then(response => response.json())
    .then(data => {
      var JSONemail = findUserbyEmail(enteredEmail)
      console.log('Email:', JSONemail)
      if (first_password === confirm_password) {
        openVolunteerPage(JSONemail)
      }
    })
    .catch(error => console.error('Error:', error))
}
