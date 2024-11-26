<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formdan gelen verileri al
    $topic = $_POST['Selectbox'] ?? '';
    $name = $_POST['Name'] ?? '';
    $email = $_POST['Email'] ?? '';
    $phone = $_POST['Phone'] ?? '';
    $comments = $_POST['Textarea'] ?? '';

    // Discord Webhook URL
    $webhookUrl = 'https://canary.discord.com/api/webhooks/1310965451039309935/95GdhuStmM2DO1RHM2HScRHSO6ze_Ycg16c4cSj-xDF9LvQ7KjlWu_K-qfHAuOn-ZHdc';

    // Discord Embed formatı
    $embed = [
        "embeds" => [
            [
                "title" => "📩 New Form Submission",
                "description" => "**Topic:** $topic\n**Comments:**\n$comments",
                "color" => 0x00ff00, // Embed rengi (yeşil)
                "fields" => [
                    [
                        "name" => "👤 Name",
                        "value" => $name,
                        "inline" => true
                    ],
                    [
                        "name" => "📧 Email",
                        "value" => $email,
                        "inline" => true
                    ],
                    [
                        "name" => "📞 Phone",
                        "value" => $phone,
                        "inline" => true
                    ],
                ],
                "footer" => [
                    "text" => "Submission received on " . date('Y-m-d H:i:s')
                ]
            ]
        ]
    ];

    // JSON verisini oluştur
    $payload = json_encode($embed);

    // Webhook isteğini gönder
    $ch = curl_init($webhookUrl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    if ($httpCode === 204) {
        // Discord'a başarıyla gönderildi
        echo "Your message has been sent successfully!";
    } else {
        // Hata varsa logla
        echo "Error sending to Discord. HTTP Code: $httpCode\n";
        echo "Response: $response";
    }
} else {
    echo "Invalid request method!";
}
