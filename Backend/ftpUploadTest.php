<?php
require __DIR__ . '/vendor/autoload.php';

// Load environment variables from .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Retrieve FTP credentials from .env using $_ENV
$ftp_server = $_ENV['FTP_SERVERNAME']; 
$ftp_username = $_ENV['FTP_USERNAME'];
$ftp_password = $_ENV['FTP_PASSWORD'];
$ftp_port = $_ENV['FTP_PORT'];
$ftp_folder = $_ENV['FTP_FOLDER'];

// Debugging: Print environment variables to ensure they are loaded
if (!$ftp_server || !$ftp_username || !$ftp_password || !$ftp_port || !$ftp_folder) {
    die("One or more environment variables are missing or incorrect.\n");
}

echo "FTP_SERVERNAME: $ftp_server\n";
echo "FTP_USERNAME: $ftp_username\n";
echo "FTP_PASSWORD: $ftp_password\n";
echo "FTP_PORT: $ftp_port\n";
echo "FTP_FOLDER: $ftp_folder\n";

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set up basic connection with timeout
$ftp_conn = ftp_connect($ftp_server, $ftp_port, 10); // 10 seconds timeout
if (!$ftp_conn) {
    die("Could not connect to $ftp_server on port $ftp_port\n");
}

// Login
$login_result = @ftp_login($ftp_conn, $ftp_username, $ftp_password);
if (!$login_result) {
    die("Could not connect as $ftp_username\n");
} else {
    echo "Connected as $ftp_username@$ftp_server\n";
}

// Enable passive mode
ftp_pasv($ftp_conn, true);

// Change to the specified folder
if ($ftp_folder !== '/') {
    if (!ftp_chdir($ftp_conn, $ftp_folder)) {
        die("Could not change directory to $ftp_folder\n");
    } else {
        echo "Changed directory to $ftp_folder\n";
    }
}

// Check the current directory
$current_directory = ftp_pwd($ftp_conn);
if ($current_directory === false) {
    die("Could not get current directory\n");
} else {
    echo "Current directory: $current_directory\n";
}

// List directories to verify the correct path
echo "Listing directories in the current directory:\n";
$contents = ftp_nlist($ftp_conn, ".");
if ($contents === false) {
    die("Could not list directories.\n");
} else {
    foreach ($contents as $content) {
        echo $content . "\n";
    }
}

// File to upload
$file_to_upload = '/home/daniel/workspace/github.com/Daniel-Burbridge-Developer/Wonderstruck_Creationz/dist/assets/categories/16oz UV DTF wrap TAY,ERASTOUR.jpg';
$remote_file = '16oz UV DTF wrap TAY,ERASTOUR.jpg'; // Name of the file on the server

// Check if local file exists
if (!file_exists($file_to_upload)) {
    die("Local file does not exist: $file_to_upload\n");
}

// Upload file
if (ftp_put($ftp_conn, $remote_file, $file_to_upload, FTP_BINARY)) {
    echo "Successfully uploaded $file_to_upload as $remote_file\n";
} else {
    echo "Error uploading $file_to_upload\n";
}

// Close the connection
ftp_close($ftp_conn);
?>
