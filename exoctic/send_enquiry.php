<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];


    // Set up the email recipient and subject
    $recipient_email = "divesh.mohan24@gmail.com"; 
    $subject = "Enquiry from " . $name;


    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";



    // Send the email
    $headers = "From: $email"; // Set the sender email as the "From" address
    if (mail($recipient_email, $subject, $email_message, $headers)) {
        // Email sent successfully
        $response = array("status" => "success", "message" => "Enquiry sent successfully!");
    } else {
        // Failed to send email
        $response = array("status" => "error", "message" => "Error sending enquiry. Please try again later.");
    }

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
} else {
    // Invalid request method
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
