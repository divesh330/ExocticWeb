function createCard(gecko) {
    return `
      <div class="col-md-2 mb-4">
        <div class="card" data-gecko-id="${gecko.id}"> 
          <img src="${gecko.pic}" class="card-img-top" alt="${gecko.name}">
          <div class="card-body">
            <h5 class="card-title">${gecko.name}</h5>
        
          </div>
        </div>
      </div>
    `;
  }
// Function to fetch snake data from the server and display it as cards
async function displayGeckoCards() {
    const geckoCardsDiv = document.getElementById('gecko-cards');
  
    try {
      // Fetch snake data from the server (you can replace the URL with your API endpoint)
      const response = await fetch('./database/gecko_data.php');
      const geckos = await response.json();
  
      let cardsHTML = '';
      for (let i = 0; i < Math.min(4, geckos.length); i++) {
        const item = geckos[i];
        const cardHTML = createCard(item);
        cardsHTML += cardHTML;
      }
  
      // Add the generated cards to the container
      geckoCardsDiv.innerHTML = cardsHTML;

      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          // Get the gecko ID from the data-gecko-id attribute
          const geckoId = card.getAttribute('data-gecko-id');
          // Redirect to the gecko_details.html page with the gecko ID as a query parameter
          window.location.href = `gecko_details.php?id=${geckoId}`;
        });
      });
    } catch (error) {
      console.error('Error fetching gecko data:', error);
      geckoCardsDiv.innerHTML = '<p>Error fetching gecko data</p>';
    }
  }
  
  // Call the function to display snake cards when the page loads
  displayGeckoCards();