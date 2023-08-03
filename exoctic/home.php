<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exotic Pets</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <?php
    include('navbar.php')
    ?>

  <!-- Gecko Section -->
  <section class="container mt-5">
    <h2 class="text-center">Geckos</h2>
    <div class="row" id="gecko-cards">
 
    </div>
  </section>

  <!-- Snake Section -->
  <section class="container mt-5">
    <h2 class="text-center">Snakes</h2>
    <div class="row" id="snake-cards">
     
    </div>
  </section>

  <!-- Feeds Section -->
  <section class="container mt-5">
    <h2 class="text-center">Feeds</h2>
    <div class="row" id="feed-cards">

    </div>
  </section>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

  <script src="javascript/displayGeckoCard.js"></script>
  <script src="javascript/displaySnakeCard.js"></script>
  <script src="javascript/displayFeedsCard.js"></script>
</body>
</html>
