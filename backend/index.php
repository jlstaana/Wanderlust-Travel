<?php
header("Content-Type: application/json; charset=UTF-8");

echo json_encode([
    "message" => "Welcome to WanderLust PHP API!",
    "endpoints" => [
        "POST /api/bookings/create.php" => "Create a new booking",
        "GET /api/bookings/read.php" => "Fetch all bookings"
    ]
]);
?>
