<?php
$host = "localhost";
$db_name = "traveldb";
$username = "root";
$password = "12345";
$connection = null;

try {
  $connection = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
  $connection->exec("set names utf8");
} catch (PDOException $exception) {
  echo "Connection error: " . $exception->getMessage();
}
?>
