
async function getFoodDetails(foodId) {
  try {
 
    const response = await fetch(`./database/get_food_details.php?id=${foodId}`);
    const foodDetails = await response.json();

    return foodDetails;
  } catch (error) {
    console.error('Error fetching food details:', error);
    return null;
  }
}

function isItemInFavorites(foodId) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites.includes(foodId);
}

// Function to add the food to the favorites list
function addToFavorites(foodId) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(foodId)) {
    favorites.push(foodId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Food added to favorites!');
  }

}



async function displayFoodDetails() {
  const foodDetailsDiv = document.getElementById('food-details');


  const urlParams = new URLSearchParams(window.location.search);
  const foodId = urlParams.get('id');

  // Add event listener to the "Add to Favorites" button
  const addToFavoritesButton = document.querySelector('.add-to-favorites');
  addToFavoritesButton.addEventListener('click', () => {
    addToFavorites(foodId);
    addToFavoritesButton.disabled = true; // Disable the button after adding to favorites
  });


  const foodDetails = await getFoodDetails(foodId);

  if (foodDetails) {
    
    const detailsHTML = `
    <div class="col-md-6">
      <img src="${foodDetails.pic}" class="img-fluid mb-2" alt="${foodDetails.name}">
    </div>
    <div class="col-md-5">
      <h2>${foodDetails.name}</h2>
      <div class>
        
          <p>${foodDetails.description}</p>
      </div>
      
      <p class="col-md-4">Price: RM${foodDetails.price} </p>
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
                  <form id="enquiry-form">
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
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" form="enquiry-form" class="btn btn-primary">Submit Enquiry</button>
              </div>
          </div>
      </div>
  </div>
</div>
    </div>
  
    `;

    foodDetailsDiv.innerHTML = detailsHTML;
  } else {
    
    foodDetailsDiv.innerHTML = '<p>Error fetching food details</p>';
  }
}


displayFoodDetails();
