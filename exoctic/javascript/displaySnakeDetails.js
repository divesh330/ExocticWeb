
async function getSnakeDetails(snakeId) {
    try {
   
      const response = await fetch(`./database/get_snake_details.php?id=${snakeId}`);
      const snakeDetails = await response.json();
  
      return snakeDetails;
    } catch (error) {
      console.error('Error fetching snake details:', error);
      return null;
    }
  }
  

  

  async function displaySnakeDetails() {
    const snakeDetailsDiv = document.getElementById('snake-details');
  
 
    const urlParams = new URLSearchParams(window.location.search);
    const snakeId = urlParams.get('id');
  

    const snakeDetails = await getSnakeDetails(snakeId);
  
    if (snakeDetails) {
      
      const detailsHTML = `
      <div class="col-md-6">
        <img src="${snakeDetails.pic}" class="img-fluid mb-2" alt="${snakeDetails.name}">
      </div>
      <div class="col-md-5">
        <h2>${snakeDetails.name}</h2>
        <div class>
            <p> Color : ${snakeDetails.color}</p>
            <p>${snakeDetails.description}</p>
        </div>
        
        <p class="col-md-4">Price: RM${snakeDetails.price} </p>
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
  
      snakeDetailsDiv.innerHTML = detailsHTML;
    } else {
      
        snakeDetailsDiv.innerHTML = '<p>Error fetching snake details</p>';
    }
  }
  

  displaySnakeDetails();
  