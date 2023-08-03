
async function getCageDetails(cageId) {
    try {
   
      const response = await fetch(`./database/get_cage_details.php?id=${cageId}`);
      const cageDetails = await response.json();
  
      return cageDetails;
    } catch (error) {
      console.error('Error fetching cage details:', error);
      return null;
    }
  }
  
  
  
  
  async function displayCageDetails() {
    const cageDetailsDiv = document.getElementById('cage-details');
  
  
    const urlParams = new URLSearchParams(window.location.search);
    const cageId = urlParams.get('id');
  
  
    const cageDetails = await getCageDetails(cageId);
  
    if (cageDetails) {
      
      const detailsHTML = `
      <div class="col-md-6">
        <img src="${cageDetails.pic}" class="img-fluid mb-2" alt="${cageDetails.name}">
      </div>
      <div class="col-md-5">
        <h2>${cageDetails.name}</h2>
        <div class>
          
            <p>${cageDetails.description}</p>
        </div>
        
        <p class="col-md-4">Price: RM${cageDetails.price} </p>
      </div>
    
      `;
  
      cageDetailsDiv.innerHTML = detailsHTML;
    } else {
      
      cageDetailsDiv.innerHTML = '<p>Error fetching cage details</p>';
    }
  }
  
  
  displayCageDetails();
  