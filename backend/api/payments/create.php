<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once "../../config/db.php";

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->booking_email) && !empty($data->amount) && !empty($data->method)) {

    $query = "INSERT INTO payments SET booking_email=:booking_email, amount=:amount, method=:method, status='Completed'";
    $stmt = $connection->prepare($query);

    $stmt->bindParam(":booking_email", $data->booking_email);
    $stmt->bindParam(":amount", $data->amount);
    $stmt->bindParam(":method", $data->method);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Payment recorded successfully."]);
    } else {
        echo json_encode(["message" => "Unable to record payment."]);
    }

} else {
    echo json_encode(["message" => "Incomplete payment data."]);
}
?>
