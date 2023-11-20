<?php
header("Access-Control-Allow-Origin: *");
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';


$country = isset($_GET['country']) ? $_GET['country'] : '';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE :country");
$stmt->bindParam(':country', $country, PDO::PARAM_STR);
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo "<table border='1'>";
echo "<tr><th>Country Name</th><th>Continent</th><th>Independence Year</th><th>Head of State</th></tr>";
foreach ($results as $row) {
    echo "<tr>";
    echo "<td>{$row['name']}</td>";
    echo "<td>{$row['continent']}</td>";
    echo "<td>{$row['independence_year']}</td>";
    echo "<td>{$row['head_of_state']}</td>";
    echo "</tr>";
}
echo "</table>";
?>
