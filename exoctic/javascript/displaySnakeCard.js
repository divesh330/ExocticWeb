function createCard(snake) {
    return `
      <div class="col-md-2 mb-4">
        <div class="card" data-snake-id="${snake.id}"> 
          <img src="${snake.pic}" class="card-img-top" alt="${snake.name}">
          <div class="card-body">
            <h5 class="card-title">${snake.name}</h5>
        
          </div>
        </div>
      </div>
    `;
  }
// Function to fetch snake data from the server and display it as cards
async function displaySnakeCards() {
    const snakeCardsDiv = document.getElementById('snake-cards');
  
    try {
      // Fetch snake data from the server (you can replace the URL with your API endpoint)
      const response = await fetch('./database/snake_data.php');
      const snakes = await response.json();
  
      let cardsHTML = '';
      for (let i = 0; i < Math.min(4, snakes.length); i++) {
        const item = snakes[i];
        const cardHTML = createCard(item);
        cardsHTML += cardHTML;
      }
  
      // Add the generated cards to the container
      snakeCardsDiv.innerHTML = cardsHTML;

      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          // Get the gecko ID from the data-gecko-id attribute
          const snakeId = card.getAttribute('data-snake-id');
          // Redirect to the gecko_details.html page with the gecko ID as a query parameter
          window.location.href = `snake_details.php?id=${snakeId}`;
        });
      });
    } catch (error) {
      console.error('Error fetching snake data:', error);
      snakeCardsDiv.innerHTML = '<p>Error fetching snake data</p>';
    }
  }
  
  // Call the function to display snake cards when the page loads
  displaySnakeCards();