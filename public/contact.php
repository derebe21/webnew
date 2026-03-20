<?php
// ITSEC Technology - Contact Form Handler

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON data from the request body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid data"]);
        exit;
    }

    // Form Fields
    $name = strip_tags(trim($data["name"]));
    $company = strip_tags(trim($data["company"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data["phone"]));
    $service = strip_tags(trim($data["service"]));
    $setup = strip_tags(trim($data["setup"]));
    $challenges = strip_tags(trim($data["challenges"]));
    $urgency = strip_tags(trim($data["urgency"]));
    $contactMethods = implode(", ", $data["contactMethods"]);
    $additionalInfo = strip_tags(trim($data["additionalInfo"]));

    // Routing Logic
    switch ($service) {
        case "General Question":
            $to = "info@itsectechnology.com";
            break;
        case "Service Request":
            $to = "contact@itsectechnology.com";
            break;
        case "Technical Support":
        case "IT Support & Maintenance":
            $to = "support@itsectechnology.com";
            break;
        case "Sales / Pricing":
            $to = "sales@itsectechnology.com";
            break;
        default:
            // For specific technical services, send to all departments
            $to = "info@itsectechnology.com, contact@itsectechnology.com, support@itsectechnology.com, sales@itsectechnology.com";
            break;
    }
    
    // Subject
    $subject = "New Service Request: $service from $name";

    // Email Content
    $email_content = "ITSEC Technology - Service Request Details\n\n";
    $email_content .= "Full Name: $name\n";
    $email_content .= "Company: $company\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Service Requested: $service\n";
    $email_content .= "Urgency Level: $urgency\n";
    $email_content .= "Preferred Contact: $contactMethods\n\n";
    $email_content .= "--- IT / Cybersecurity Setup ---\n$setup\n\n";
    $email_content .= "--- Problems / Challenges ---\n$challenges\n\n";
    $email_content .= "--- Additional Information ---\n$additionalInfo\n\n";

    // Headers
    $headers = "From: ITSEC Website <no-reply@itsectechnology.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send Email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Request sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
    }
} else {
    http_response_code(403);
    echo "Access denied";
}
?>
