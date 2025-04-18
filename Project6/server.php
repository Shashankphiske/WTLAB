<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $address = $_POST["address"];
    $email = $_POST["email"];
    $phone = $_POST["phone no"];
    $department = $_POST["department"];
    $errors = [];

    $con = mysqli_connect("localhost", "root", "root", "hospital");

    // Server-side validation
    if (empty($name) || empty($address) || empty($email) || empty($phone) || empty($department)) {
        $errors[] = "All fields are required.";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    if (!preg_match("/^[0-9]{10}$/", $phone)) {
        $errors[] = "Invalid phone number. Must be 10 digits.";
    }

    if (empty($errors)) {
        echo "<script>alert('Form submitted successfully!');</script>";
    }
    if (!empty($errors)) {
        echo "<div style='color: red;'><ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul></div>";
    }
}
?>