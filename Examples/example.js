function createHtml() {
    var topHtml = `<!DOCTYPE html>
    <html>
    <head>
        <title>Welcome</title>
      </head>
      <script src="example.js"></script>
      <body onload="fetchAndDisplayBusinesses()">`;

    var htmlDiv = `<div id="businessesContainer" class="business-info">
      <h2>Business Name</h2>
      <p><strong>Address:</strong> 123 Main Street, City, State ZIP</p>
      <p><strong>Hours of Operation:</strong> Monday - Friday: 9:00 AM - 5:00 PM</p>
      <p><strong>Email:</strong> <a href="mailto:info@business.com">info@business.com</a></p>
      <p><strong>Phone:</strong> (123) 456-7890</p>
      <p><strong>Website:</strong> <a href="https://www.business.com" target="_blank">www.business.com</a></p>
      <p><strong>Description:</strong> This is a short description of the business. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
      </div>`

    var endHtml = `</body>
      </html>`;

    var htmlPage = topHtml + htmlDiv + endHtml;

    var blob = new Blob([htmlPage], {type: "text/html"});
    var url = URL.createObjectURL(blob);
    window.location.href = url;
}

function fetchAndDisplayBusinesses() {
  // Assuming the JSON file is one level up from the current directory
  const jsonFilePath = 'services.json';

  fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => {
          // Handle the JSON data and display businesses
          displayBusinesses(data.shelters);
          //jToString(data.businesses);
          
      })
      .catch(error => console.error('Error fetching JSON:', error));
}

function displayBusinesses(shelters) {
  const businessesContainer = document.getElementById('businessesContainer');
  businessesContainer.innerHTML = ''; // Clear previous content

  shelters.forEach((business, index) => {
      const businessDiv = document.createElement('div');
      businessDiv.innerHTML = `
          <p><strong>Business ${index + 1}:</strong></p>
          <p>${business.businessName}</p>
          <p>${business.location.street}, </p>

          <!-- Add more fields as needed -->
          <hr>
      `;
      businessesContainer.appendChild(businessDiv);
  });
}

function jToString() {

  
  var local = "test1.html";
  window.location.href = local;
  
  const jsonFilePath = 'businesses.json';
  fetch(jsonFilePath)
  .then(function(response) {
      return response.json();
    })
    .then(function(businesses) {
      let placeholder = document.getElementById("businessesContainer");
      let out = " ";
      for(let businesses of data){
        out += `<p>${data.businessName}</p>`;
      }
      placeholder.innerHTML = out;
    })

}