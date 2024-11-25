<?php
// API bağlantı bilgileri
$apiUrl = "https://key.xld.com.tr/submit"; // Hedef API URL'si
$apiToken = "YOUR_API_TOKEN"; // (Gerekirse) API anahtarı

// Formdan gelen verileri alın ve güvenlik kontrolleri yapın
$name = htmlspecialchars($_POST['Name'] ?? '');
$email = htmlspecialchars($_POST['Email'] ?? '');
$countrycode = htmlspecialchars($_POST['CountryCode'] ?? '');
$phone = htmlspecialchars($_POST['Phone'] ?? '');
$instagram = htmlspecialchars($_POST['Instagram'] ?? '');
$about = htmlspecialchars($_POST['About'] ?? '');
$demoLink = htmlspecialchars($_POST['DemoLink'] ?? '');

// Eksik bilgi kontrolü
if (empty($name) || empty($email) || empty($phone) || empty($instagram) || empty($about) || empty($demoLink)) {
    die("Eksik bilgiler mevcut! Lütfen tüm alanları doldurun.");
}

// API'ye göndermek için JSON formatında veri hazırlayın
$data = [
    'name' => $name,
    'email' => $email,
    'countrycode' => $countrycode,
    'phone' => $phone,
    'instagram' => $instagram,
    'about' => $about,
    'demo_link' => $demoLink
];

// Curl ile API isteği gönderin
$ch = curl_init($apiUrl);

// Curl ayarları
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); // JSON verisi gönderiliyor
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json', // JSON başlığı
    'Authorization: Bearer ' . $apiToken // Eğer API anahtarı gerekiyorsa
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Yanıtı döndür

// İstek gönder ve yanıtı al
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE); // HTTP yanıt kodu
curl_close($ch);

// API yanıtını kontrol edin ve kullanıcıya mesaj verin
if ($httpCode === 200) {
    echo "Form başarıyla gönderildi!";
} else {
    echo "Bir hata oluştu: HTTP Kodu $httpCode, Yanıt: $response";
}
?>
