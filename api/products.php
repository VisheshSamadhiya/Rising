<?php

header("Content-Type: application/json");

$products = [
    [
        "name" => "Smart Phone",
        "price" => 15000
    ],
    [
        "name" => "Laptop",
        "price" => 55000
    ]
];

echo json_encode($products);
