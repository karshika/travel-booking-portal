<?php
$data = json_decode(file_get_contents("php://input"), true);
if ($data) {
    // Process the booking logic
    echo json_encode([
        "success" => true,
        "message" => "Payment received"
    ]);
} else {
    echo json_encode(["success" => false]);
}
?>
