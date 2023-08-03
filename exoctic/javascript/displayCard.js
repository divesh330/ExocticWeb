// Function to create a single card for each item (gecko, snake, or feed)
function createCard(item) {
  return `
    <div class="col-md-2 mb-3 " >
      <div class="card " data-id=${item.id}>
    
          <img src="${item.pic}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>

          </div>
        
      </div>
    </div>
  `;
}

// Function to fetch data for each section (geckos, snakes, and feeds) and display cards
async function displayCards(type, containerId) {
  const containerDiv = document.getElementById(containerId);

  try {
    // Fetch data from the server (you can replace the URL with your API endpoint)
    const response = await fetch(`./database/${type}_data.php`);
    const items = await response.json();

    let cardsHTML = '';

    for (let i = 0; i < Math.min(4, items.length); i++) {
      const item = items[i];
      const cardHTML = createCard(item);
      cardsHTML += cardHTML;
    }

    // Add the generated cards to the container
    containerDiv.innerHTML = cardsHTML;
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        // Get the gecko ID from the data-gecko-id attribute
        const itemId = card.getAttribute('data-id');
        // Redirect to the gecko_details.html page with the gecko ID as a query parameter
        window.location.href = `${type}_details.php?id=${itemId}`;
      });
    });
  } catch (error) {
    console.error(`Error fetching ${type} data:`, error);
    containerDiv.innerHTML = `<p>Error fetching ${type} data</p>`;
  }
}

// Call the function to display cards for each section when the page loads
displayCards('gecko', 'gecko-cards');

displayCards('food', 'feed-cards');
