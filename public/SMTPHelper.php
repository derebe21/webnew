<?php
/**
 * ITSEC TECHNOLOGY - SMTP HELPER (PHPMailer-lite)
 * -----------------------------------------------
 * A standalone SMTP client that uses direct sockets to send email.
 * NO composer or external libraries required.
 */

class SMTPHelper {
    private $config;
    private $error = "";

    public function __construct($config) {
        $this->config = $config;
    }

    public function get_error() {
        return $this->error;
    }

    public function send($to, $subject, $body, $from_name = "ITSEC TECHNOLOGY") {
        $host   = $this->config['smtp_host'];
        $port   = $this->config['smtp_port'];
        $user   = $this->config['smtp_user'];
        $pass   = $this->config['smtp_pass'];
        $secure = $this->config['smtp_secure'];

        $from_email = $user; // Often must be the same as user for cPanel

        $socket_host = ($secure === 'ssl') ? 'ssl://' . $host : $host;
        $socket = fsockopen($socket_host, $port, $errno, $errstr, 20);

        if (!$socket) {
            $this->error = "Connection Failed: $errstr ($errno)";
            return false;
        }

        $this->read($socket); // Initial Greeting

        fputs($socket, "EHLO " . $host . "\r\n");
        $this->read($socket);

        if ($secure === 'tls') {
            fputs($socket, "STARTTLS\r\n");
            $this->read($socket);
            stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
            fputs($socket, "EHLO " . $host . "\r\n");
            $this->read($socket);
        }

        fputs($socket, "AUTH LOGIN\r\n");
        $this->read($socket);

        fputs($socket, base64_encode($user) . "\r\n");
        $this->read($socket);
        fputs($socket, base64_encode($pass) . "\r\n");
        $this->read($socket);

        fputs($socket, "MAIL FROM: <$from_email>\r\n");
        $this->read($socket);

        // Multiple recipients check
        $recipients = explode(',', $to);
        foreach ($recipients as $recipient) {
            fputs($socket, "RCPT TO: <" . trim($recipient) . ">\r\n");
            $this->read($socket);
        }

        fputs($socket, "DATA\r\n");
        $this->read($socket);

        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "From: \"$from_name\" <$from_email>\r\n";
        $headers .= "To: $to\r\n";
        $headers .= "Subject: $subject\r\n";
        $headers .= "Date: " . date("r") . "\r\n";
        $headers .= "X-Mailer: ITSEC-SMTP-HELPER\r\n";

        fputs($socket, $headers . "\r\n" . $body . "\r\n.\r\n");
        $this->read($socket);

        fputs($socket, "QUIT\r\n");
        $this->read($socket);

        fclose($socket);
        return true;
    }

    private function read($socket) {
        $out = "";
        while ($str = fgets($socket, 515)) {
            $out .= $str;
            if (substr($str, 3, 1) == " ") break;
        }
        return $out;
    }
}
?>
