<?php
/**
 * ITSEC TECHNOLOGY - SMTP CONFIGURATION
 * -------------------------------------
 * Fill in your details below. These settings will be used to 
 * bypass the native PHP mail() function and send emails directly 
 * through your SMTP server (cPanel).
 */

return [
    'smtp_host'     => 'mail.itsectechnology.com', // Your SMTP Server
    'smtp_port'     => 465,                        // 465 (SSL) or 587 (TLS)
    'smtp_user'     => 'info@itsectechnology.com', // Your Full Email Address
    'smtp_pass'     => 'NASA@itsec2123',       // YOUR EMAIL PASSWORD (OR APP PASSWORD)
    'smtp_secure'   => 'ssl',                      // 'ssl' or 'tls'
    'smtp_timeout'  => 30,
];
?>
