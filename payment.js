const express = require("express");
const Razorpay = require("razorpay");

const app = express();
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.post("/create-order", async (req, res) => {
  const { items } = req.body;

  // Calculate on server
  let total = 0;

  for (const item of items) {
    total += item.price * item.quantity;
  }

  const order = await razorpay.orders.create({
    amount: total * 100, // paise
    currency: "INR"
  });

  res.json(order);
});

app.listen(3000);
