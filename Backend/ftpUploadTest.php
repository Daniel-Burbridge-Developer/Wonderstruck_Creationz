<?php
require __DIR__ . '/vendor/autoload.php';

// Load environment variables from .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$ftp_server = $_ENV['FTP_SERVERNAME'];
$ftp_username = $_ENV['FTP_USERNAME'];
$ftp_userpass = $_ENV['FTP_PASSWORD'];
$ftp_port = $_ENV['FTP_PORT'];

$target_dir = $_ENV['FTP_FOLDER']; // Directory to save uploaded files on the server
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

// Check if the file was uploaded
if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    
    // Establish an FTP connection
    $ftp_conn = ftp_connect($ftp_server, $ftp_port) or die("Could not connect to $ftp_server");

    // Login to FTP server
    if (@ftp_login($ftp_conn, $ftp_username, $ftp_userpass)) {
        echo "Connected to $ftp_server as $ftp_username.";

        // Upload the file
        if (ftp_put($ftp_conn, "remote_path/" . basename($target_file), $target_file, FTP_BINARY)) {
            echo "Successfully uploaded $target_file.";
        } else {
            echo "Error uploading $target_file.";
        }

        // Close the connection
        ftp_close($ftp_conn);
    } else {
        echo "Couldn't connect as $ftp_username.";
    }

    // Delete the local file after uploading to FTP
    unlink($target_file);
} else {
    echo "Sorry, there was an error uploading your file.";
}
?>
