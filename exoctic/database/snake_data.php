<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'exoctic');
 
/* Attempt to connect to MySQL database */
$connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check if the connection was successful
if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}

// Define the query to fetch gecko data
$query = "SELECT id,name, pic FROM product WHERE type ='snake'";

$result = $connection->query($query);

// Check if the query was successful
if (!$result) {
    die('Error fetching snake data: ' . $connection->error);
}

// Fetch the data as an associative array
$snakes = array();
while ($row = $result->fetch_assoc()) {
    $snakes[] = $row;
}

// Close the database connection
$connection->close();

// Set the response header to indicate JSON content
header('Content-Type: application/json');

// Send the snake data as JSON response
echo json_encode($snakes);
?>
