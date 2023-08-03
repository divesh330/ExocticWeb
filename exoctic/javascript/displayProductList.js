
function createCard(item) {
  
    return `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <div class="col-md-3 ">
        <div class="card " data-id=${item.id} data-type=${item.type}>
      
            <img src="${item.pic}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
      
            </div>
          
        </div>
      </div>
    `;
  }
  
  // Function to fetch data for each section (geckos, snakes, and feeds) and display cards
  async function displayProduct() {
    const containerDiv = document.getElementById('product-cards');
  
    try {
      // Fetch data from the server (you can replace the URL with your API endpoint)
      const response = await fetch(`./database/get_product.php`);
      const items = await response.json();
  
      let cardsHTML = '';
      // Generate card components for each snake entry
      items.forEach((item) => {
        const cardHTML = createCard(item);
        cardsHTML += cardHTML;
      });
  
      // Add the generated cards to the container
      containerDiv.innerHTML = cardsHTML;
  
      // Add the generated cards to the container
      containerDiv.innerHTML = cardsHTML;
      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          // Get the gecko ID from the data-gecko-id attribute
          const itemId = card.getAttribute('data-id');
          const itemType = card.getAttribute('data-type');
          window.location.href = `${itemType}_details.php?id=${itemId}`;
        });
      });
    } catch (error) {
      console.error(`Error fetching data:`, error);
      containerDiv.innerHTML = `<p>Error fetching data</p>`;
    }
  }
  

  displayProduct()