
async function getFavoriteItemDetails(itemId) {
    try {
      const response = await fetch(`./database/favourite.php?id=${itemId}`);
      const itemDetails = await response.json();
      return itemDetails;
    } catch (error) {
      console.error('Error fetching item details:', error);
      return null;
    }
  }
  

  async function displayFavorites() {
    const favoritesListDiv = document.getElementById('favorites-list');
  
    // Get the favorite item IDs from local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    let favoritesHTML = '';
  
    // Fetch and display each favorite item details
    for (const itemId of favorites) {
      const itemDetails = await getFavoriteItemDetails(itemId);
      console.log(itemDetails)
      if (itemDetails) {
        const itemHTML = `
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${itemDetails.pic}" class="img-fluid" alt="${itemDetails.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${itemDetails.name}</h5>
                  <
                </div>
              </div>
            </div>
          </div>
        `;
        favoritesHTML += itemHTML;
      }
    }
  
    favoritesListDiv.innerHTML = favoritesHTML;
  }
  
  displayFavorites();
  