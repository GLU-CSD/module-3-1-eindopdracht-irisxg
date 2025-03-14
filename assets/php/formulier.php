<?php
// Databaseverbinding
$host = "localhost";
$user = "u240496_webshop"; 
$pass = "SWAwWThtPv8WYZfdVAQX"; 
$dbname = "u240496_webshop"; 

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Verbindingsfout: " . $conn->connect_error);
}

// Verkrijg formuliergegevens
$type = $_POST['type'];
$aanhef = $_POST['aanhef'];
$voornaam = $_POST['voornaam'];
$tussenvoegsel = $_POST['tussenvoegsel'] ?? null;
$achternaam = $_POST['achternaam'];
$straat = $_POST['straat'];
$huisnummer = $_POST['huisnummer'];
$postcode = $_POST['postcode'];
$land = $_POST['land'];
$email = $_POST['email'];
$telefoon = $_POST['telefoonnummer'];
$geboortedatum = $_POST['geboortedatum'];
$akkoord = isset($_POST['voorwaarden']) ? 1 : 0;
$nieuwsbrief = isset($_POST['nieuwsbrief']) ? 1 : 0;

$sql = "INSERT INTO bestellingen (type, aanhef, voornaam, tussenvoegsel, achternaam, straat, huisnummer, postcode, land, email, telefoon, geboortedatum, akkoord, nieuwsbrief) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssssssssii", $type, $aanhef, $voornaam, $tussenvoegsel, $achternaam, $straat, $huisnummer, $postcode, $land, $email, $telefoon, $geboortedatum, $akkoord, $nieuwsbrief);

if ($stmt->execute()) {
    echo "Bestelling succesvol verzonden!";
} else {
    echo "Fout bij opslaan: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
