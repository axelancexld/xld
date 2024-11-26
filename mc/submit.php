<?php
    // API bağlantı bilgileri
    $apiUrl = "https://key.xld.com.tr/submit2"; // Hedef API URL'si
    $apiToken = "YOUR_API_TOKEN"; // (Gerekirse) API anahtarı
    
    // Formdan gelen verileri alın ve güvenlik kontrolleri yapın
    $selectbox = htmlspecialchars($_POST['Selectbox'] ?? '');
    $name = htmlspecialchars($_POST['Name'] ?? '');
    $email = htmlspecialchars($_POST['Email'] ?? '');
    $phone = htmlspecialchars($_POST['Phone'] ?? '');
    $textarea = htmlspecialchars($_POST['Textarea'] ?? '');
    
    // Eksik bilgi kontrolü
    if (empty($name) || empty($email) || empty($phone) || empty($selectbox) || empty($textarea)) {
        die("Eksik bilgiler mevcut! Lütfen tüm alanları doldurun.");
    }
    
    // API'ye göndermek için JSON formatında veri hazırlayın
    $data = [
        'selectbox' => $selectbox,
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'textarea' => $textarea
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
