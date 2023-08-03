<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gecko Details</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/product.css">
</head>
<body>
    <?php
    include('navbar.php')
    ?>
  <div class="container mt-5">
    <div class="row" id="gecko-details">
  

    </div>
    <button class="btn btn-primary add-to-favorites" >Add to Favorites</button>



    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.10.2/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="javascript/displayGeckoDetails.js"></script>
    <script>
     
        function openModal() {
            $('#enquiryModal').modal('show');
        }
    </script>

   


</body>
</html>
