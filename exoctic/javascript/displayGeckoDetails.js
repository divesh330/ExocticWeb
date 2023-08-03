
async function getGeckoDetails(geckoId) {
    try {
   
      const response = await fetch(`./database/get_gecko_details.php?id=${geckoId}`);
      const geckoDetails = await response.json();
  
      return geckoDetails;
    } catch (error) {
      console.error('Error fetching gecko details:', error);
      return null;
    }
  }
  
  function isItemInFavorites(geckoId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(geckoId);
  }
  
  // Function to add the gecko to the favorites list
  function addToFavorites(geckoId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(geckoId)) {
      favorites.push(geckoId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Gecko added to favorites!');
    }
  }

  

  async function displayGeckoDetails() {
    const geckoDetailsDiv = document.getElementById('gecko-details');
  
 
    const urlParams = new URLSearchParams(window.location.search);
    const geckoId = urlParams.get('id');
  
    // Add event listener to the "Add to Favorites" button
    const addToFavoritesButton = document.querySelector('.add-to-favorites');
    addToFavoritesButton.addEventListener('click', () => {
      addToFavorites(geckoId);
      addToFavoritesButton.disabled = true; // Disable the button after adding to favorites
    });

    const geckoDetails = await getGeckoDetails(geckoId);

    if (geckoDetails) {
      
      const detailsHTML = `
      
      <div class="col-md-6">
        <img src="${geckoDetails.pic}" class="img-fluid mb-2" alt="${geckoDetails.name}">
      </div>
      <div class="col-md-5">
        <h2>${geckoDetails.name}</h2>
        <div class>
            <p> Color : ${geckoDetails.color}</p>
            <p>${geckoDetails.description}</p>
        </div>
        
        <p class="col-md-4">Price: RM${geckoDetails.price} </p>
        <button type="button" class="btn btn-primary" onclick="openModal()">
        Enquiry
    </button>
  

   

    <div class="modal fade" id="enquiryModal" tabindex="-1" role="dialog" aria-labelledby="enquiryModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="enquiryModalLabel">Send Enquiry</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Enquiry form inside the modal -->
                <form id="enquiry-form" action='send_enquiry.php' method="post">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea class="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <input type="submit" value="Submit">
                </form>
            </div>
            
        </div>
    </div>
</div>
</div>




      </div>
      
    
      `;
  
      geckoDetailsDiv.innerHTML = detailsHTML;
    } else {
      
      geckoDetailsDiv.innerHTML = '<p>Error fetching gecko details</p>';
    }
  }
  

  displayGeckoDetails();
  