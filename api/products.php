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
    ],
    [
        "name" => "Tablet",
        "price" => 25000
    ]
];

echo json_encode($products);
