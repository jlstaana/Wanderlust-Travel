<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include_once "../../config/db.php";

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->name) && !empty($data->email) && !empty($data->destination) && !empty($data->date)) {
  $query = "INSERT INTO bookings SET name=:name, email=:email, destination=:destination, date=:date";
  $stmt = $connection->prepare($query);
  $stmt->bindParam(":name", $data->name);
  $stmt->bindParam(":email", $data->email);
  $stmt->bindParam(":destination", $data->destination);
  $stmt->bindParam(":date", $data->date);

  if ($stmt->execute()) {
    echo json_encode(["message" => "Booking created successfully."]);
  } else {
    echo json_encode(["message" => "Unable to create booking."]);
  }
} else {
  echo json_encode(["message" => "Incomplete data."]);
}
?>
