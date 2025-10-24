<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once "../../config/db.php";

$query = "SELECT * FROM payments ORDER BY created_at DESC";
$stmt = $connection->prepare($query);
$stmt->execute();

$payments = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($payments);
?>
