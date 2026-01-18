<?php
// Username dan password valid
$valid_username = "admin";
$valid_password = "12345";

// Cek apakah form sudah di-submit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil inputan dari form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validasi login
    if ($username == $valid_username && $password == $valid_password) {
        echo "Login berhasil! Selamat datang, " . $username . ".";
    } else {
        echo "Username atau password salah!";
    }
}
?>
