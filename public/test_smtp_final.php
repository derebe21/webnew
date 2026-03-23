<?php
// FINAL SMTP DIAGNOSTIC TOOL
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h1>ITSEC Technology - Final SMTP Diagnostic</h1>";

$config = require_once("smtp_config.php");
require_once("SMTPHelper.php");

echo "<h2>Checking Current Configuration:</h2>";
echo "<ul>";
echo "<li>Host: " . $config['smtp_host'] . "</li>";
echo "<li>Port: " . $config['smtp_port'] . "</li>";
echo "<li>User: " . $config['smtp_user'] . "</li>";
echo "<li>Password Set: " . ($config['smtp_pass'] !== 'YOUR_PASSWORD_HERE' ? "Yes ✅" : "No (Placeholder detected) ❌") . "</li>";
echo "</ul>";

if ($config['smtp_pass'] === 'YOUR_PASSWORD_HERE') {
    echo "<p style='color:red; font-weight:bold;'>CRITICAL: You must replace 'YOUR_PASSWORD_HERE' in smtp_config.php with your actual email password!</p>";
}

echo "<h2>Connection Test:</h2>";
$smtp = new SMTPHelper($config);
$result = $smtp->send("info@itsectechnology.com", "DIAGNOSTIC TEST", "Direct SMTP Test Message", "DIAGNOSTIC");

if ($result) {
    echo "<p style='color:green'>✅ SMTP SUCCESS! Your emails should be delivering correctly now.</p>";
} else {
    echo "<p style='color:red'>❌ SMTP FAILURE: " . $smtp->get_error() . "</p>";
    echo "<p><b>Common Fixes:</b></p>";
    echo "<ul>";
    echo "<li>If error is 'Connection Failed', try changing port to 587 and secure to 'tls' in smtp_config.php</li>";
    echo "<li>Ensure your password is correct. If you have 2-Step Verification, use an 'App Password'.</li>";
    echo "</ul>";
}
?>
