<?php
// ITSEC Technology - Advanced Contact Form Handler with Auto-Replies

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON data from the request body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        http_response_code(400);
        exit(json_encode(["status" => "error", "message" => "Invalid data"]));
    }

    // Shared Fields
    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data["phone"]));
    $urgency = strip_tags(trim($data["urgency"]));
    $tab = strip_tags(trim($data["tab"])); // general, support, projects, sales

    // Departmental logic
    $to = "";
    $deptName = "";
    $autoMessage = "";
    $email_content = "ITSEC Technology - New Request Details\n\n";
    $email_content .= "Submission Type: " . ucfirst($tab) . "\n";
    $email_content .= "Full Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Urgency: $urgency\n\n";

    switch ($tab) {
        case "support":
            $to = "support@itsectechnology.com";
            $deptName = "Technical Support";
            $autoMessage = "Your technical support request has been received. Our support team is currently reviewing the issue and will assist you shortly.";
            $product = strip_tags($data["product"]);
            if ($product === "Other") $product .= " (" . strip_tags($data["otherProduct"]) . ")";
            $email_content .= "Product/Service: " . $product . "\n";
            $email_content .= "Issue Description:\n" . strip_tags($data["issueDescription"]) . "\n";
            break;

        case "projects":
            $to = "contact@itsectechnology.com";
            $deptName = "Service Request / Project";
            $autoMessage = "Thank you for your project request. Our engineering team is reviewing your requirements and will contact you with the next steps.";
            $pType = strip_tags($data["projectType"]);
            if ($pType === "Other") $pType .= " (" . strip_tags($data["otherProjectType"]) . ")";
            $email_content .= "Company: " . strip_tags($data["company"]) . "\n";
            $email_content .= "Project Type: " . $pType . "\n";
            $email_content .= "Project Description:\n" . strip_tags($data["projectDescription"]) . "\n";
            break;

        case "sales":
            $to = "sales@itsectechnology.com";
            $deptName = "Sales / Pricing";
            $autoMessage = "Thank you for your interest in our services. Our sales team will review your request and provide you with pricing details soon.";
            $intService = strip_tags($data["interestedServices"]);
            if ($intService === "Other") $intService .= " (" . strip_tags($data["otherInterestedService"]) . ")";
            $email_content .= "Company: " . strip_tags($data["company"]) . "\n";
            $email_content .= "Interested Services: " . $intService . "\n";
            $email_content .= "Quote Details:\n" . strip_tags($data["quoteDetails"]) . "\n";
            break;

        case "general":
        default:
            $to = "info@itsectechnology.com";
            $deptName = "General Inquiry";
            $autoMessage = "Thank you for your general inquiry. Our team will review your message and get back to you shortly.";
            $service = strip_tags($data["service"]);
            if ($service === "Other") $service .= " (" . strip_tags($data["otherService"]) . ")";
            $email_content .= "Service: " . $service . "\n";
            $email_content .= "Current Setup:\n" . strip_tags($data["setup"]) . "\n";
            $email_content .= "Challenges:\n" . strip_tags($data["challenges"]) . "\n";
            $email_content .= "Additional Info:\n" . strip_tags($data["additionalInfo"]) . "\n";
            break;
    }

    // Main Headers (For the department email)
    $headers = "From: ITSEC Website <no-reply@itsectechnology.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Subject for department
    $subject = "[$deptName] New Request from $name";

    // 1. Send Email to Department
    $sentToDept = mail($to, $subject, $email_content, $headers);

    // 2. Send Auto-Reply to customer
    $autoSubject = "Thank You for Contacting ITSEC Technology";
    $autoBody = "Dear $name,\n\n";
    $autoBody .= "Thank you for contacting ITSEC Technology.\n\n";
    $autoBody .= "$autoMessage\n\n";
    $autoBody .= "We appreciate your interest in our services and will respond as soon as possible.\n\n";
    $autoBody .= "Best regards,\n";
    $autoBody .= "ITSEC Technology Team\n\n";
    $autoBody .= "📧 info@itsectechnology.com\n";
    $autoBody .= "📞 +251911407439 / +251955190019\n";
    $autoBody .= "📍 Addis Ababa, Ethiopia";

    $autoHeaders = "From: ITSEC Technology <no-reply@itsectechnology.com>\r\n";
    $autoHeaders .= "Reply-To: info@itsectechnology.com\r\n";
    
    $sentAutoReply = mail($email, $autoSubject, $autoBody, $autoHeaders);

    if ($sentToDept) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Request sent and auto-reply processed"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Primary email failed"]);
    }
} else {
    http_response_code(403);
    echo "Access denied";
}
?>
