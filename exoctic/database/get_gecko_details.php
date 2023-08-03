<?php

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'exoctic');

$geckoId = $_GET['id'];

$connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check if the connection was successful
if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}

// Prepare the query to fetch gecko details based on the ID
$query = "SELECT name ,pic ,description,price,color FROM product WHERE id = ? ";

// Prepare the statement
$stmt = $connection->prepare($query);

// Bind the parameter to the statement
$stmt->bind_param("i", $geckoId);

// Execute the statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if the query was successful
if (!$result) {
    die('Error fetching gecko details: ' . $connection->error);
}

// Fetch the data as an associative array
$geckoDetails = $result->fetch_assoc();

// Close the statement and the database connection
$stmt->close();
$connection->close();

// Set the response header to indicate JSON content
header('Content-Type: application/json');

// Send the gecko details as JSON response
echo json_encode($geckoDetails);
?>