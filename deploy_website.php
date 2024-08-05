<?php
require __DIR__ . '/Backend/vendor/autoload.php';

use Dotenv\Dotenv;

// Load the .env file from the Backend directory
$dotenv = Dotenv::createImmutable(__DIR__ . '/Backend');
$dotenv->load();

// Retrieve FTP credentials from .env using $_ENV
$ftp_server = $_ENV['FTP_SERVERNAME'];
$ftp_username = $_ENV['FTP_USERNAME'];
$ftp_password = $_ENV['FTP_PASSWORD'];
$ftp_port = $_ENV['FTP_PORT'];
$ftp_folder = $_ENV['FTP_FOLDER'];

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

// Delete existing contents in the FTP folder except the assets folder
echo "Starting deletion process...\n";
ftp_recursive_delete($ftp_conn, $ftp_folder);

// Upload new contents from the dist folder
$local_dir = __DIR__ . '/dist';
echo "Starting upload process...\n";
ftp_recursive_upload($ftp_conn, $local_dir, $ftp_folder);

// Upload new contents to the assets folder specifically
$local_assets_dir = $local_dir . '/assets';
$remote_assets_dir = $ftp_folder . '/assets';
echo "Uploading assets folder...\n";
ftp_recursive_upload($ftp_conn, $local_assets_dir, $remote_assets_dir);

// Close the connection
ftp_close($ftp_conn);

echo "Upload and deletion completed successfully.\n";

function ftp_recursive_upload($ftp_conn, $local_dir, $remote_dir) {
    if ($dir = opendir($local_dir)) {
        if (!@ftp_chdir($ftp_conn, $remote_dir)) {
            echo "Creating directory: $remote_dir\n";
            ftp_mkdir($ftp_conn, $remote_dir);
            ftp_chdir($ftp_conn, $remote_dir);
        }

        while (($file = readdir($dir)) !== false) {
            if ($file === '.' || $file === '..') {
                continue;
            }
            $local_file = $local_dir . '/' . $file;
            $remote_file = $remote_dir . '/' . $file;

            if (is_dir($local_file)) {
                echo "Uploading directory: $local_file\n";
                ftp_recursive_upload($ftp_conn, $local_file, $remote_file);
            } else {
                echo "Uploading file: $local_file\n";
                ftp_put($ftp_conn, $remote_file, $local_file, FTP_BINARY);
            }
        }

        closedir($dir);
    }
}

function ftp_recursive_delete($ftp_conn, $directory) {
    echo "Scanning directory: $directory\n";
    $file_list = ftp_nlist($ftp_conn, $directory);

    if ($file_list) {
        foreach ($file_list as $file) {
            if ($file === '.' || $file === '..' || basename($file) === 'assets') {
                continue;
            }
            $file_path = $directory . '/' . $file;
            // Ensure we handle only directories and files, not unexpected paths
            if (@ftp_chdir($ftp_conn, $file_path)) {
                echo "Entering directory: $file_path\n";
                ftp_recursive_delete($ftp_conn, $file_path);
                echo "Removing directory: $file_path\n";
                ftp_rmdir($ftp_conn, $file_path);
            } else {
                echo "Deleting file: $file_path\n";
                ftp_delete($ftp_conn, $file_path);
            }
        }
    } else {
        echo "No files found in $directory\n";
    }
}



?>
