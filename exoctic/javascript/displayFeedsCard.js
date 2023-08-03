function createCard(feed) {
    return `
      <div class="col-md-2 mb-4">
        <div class="card" data-feed-id="${feed.id}"> 
          <img src="${feed.pic}" class="card-img-top" alt="${feed.name}">
          <div class="card-body">
            <h5 class="card-title">${feed.name}</h5>
        
          </div>
        </div>
      </div>
    `;
  }
// Function to fetch snake data from the server and display it as cards
async function displayFeedCards() {
    const feedCardsDiv = document.getElementById('feed-cards');
  
    try {
      // Fetch snake data from the server (you can replace the URL with your API endpoint)
      const response = await fetch('./database/food_data.php');
      const feeds = await response.json();
  
      let cardsHTML = '';
      for (let i = 0; i < Math.min(4, feeds.length); i++) {
        const item = feeds[i];
        const cardHTML = createCard(item);
        cardsHTML += cardHTML;
      }
  
      // Add the generated cards to the container
      feedCardsDiv.innerHTML = cardsHTML;

      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          // Get the gecko ID from the data-gecko-id attribute
          const feedId = card.getAttribute('data-feed-id');
          // Redirect to the gecko_details.html page with the gecko ID as a query parameter
          window.location.href = `food_details.php?id=${feedId}`;
        });
      });
    } catch (error) {
      console.error('Error fetching feed data:', error);
      geckoCardsDiv.innerHTML = '<p>Error fetching feed data</p>';
    }
  }
  
  // Call the function to display snake cards when the page loads
  displayFeedCards();