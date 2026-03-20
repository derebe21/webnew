<?php
// Standalone Email Diagnostic Tool
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h1>ITSEC Technology - Email Diagnostic</h1>";

$to = "info@itsectechnology.com"; // Test recipient
$to2 = "derebesnama21@gmail.com"; // Test recipient 2
$subject = "DIAGNOSTIC TEST: ITSEC Portal " . date("Y-m-d H:i:s");
$message = "This is a diagnostic test email to verify if the server's mail() function is operational.\n\nSent at: " . date("Y-m-d H:i:s");
$from = "info@itsectechnology.com";

$headers = "From: ITSEC Tech <$from>\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

echo "<h2>Attempting to send to $to...</h2>";
$success1 = mail($to, $subject, $message, $headers, "-f $from");

if ($success1) {
    echo "<p style='color:green'>✅ Primary Mail function returned TRUE (Message accepted for delivery).</p>";
} else {
    echo "<p style='color:red'>❌ Primary Mail function returned FALSE (Message rejected by server).</p>";
}

echo "<h2>Attempting to send to $to2...</h2>";
$success2 = mail($to2, $subject, $message, $headers, "-f $from");

if ($success2) {
    echo "<p style='color:green'>✅ Secondary Mail (Gmail) function returned TRUE.</p>";
} else {
    echo "<p style='color:red'>❌ Secondary Mail (Gmail) function returned FALSE.</p>";
}

echo "<h2>System Info:</h2>";
echo "<ul>";
echo "<li>PHP Version: " . phpversion() . "</li>";
echo "<li>Sendmail Path: " . ini_get('sendmail_path') . "</li>";
echo "<li>SMTP Server: " . ini_get('SMTP') . "</li>";
echo "<li>SMTP Port: " . ini_get('smtp_port') . "</li>";
echo "</ul>";

echo "<p>If you see 'TRUE' but no email arrives, your server is likely 'silent-blocking' the emails or they are in the SPAM folder.</p>";
?>
