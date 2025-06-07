const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const { setGlobalOptions } = require("firebase-functions/v2");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();
setGlobalOptions({ maxInstances: 10 });
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "success!" });
});

app.post("/payment/create", async (req, res) => {
  try {
    const total = parseInt(req.body.total, 10); // Read total from POST body

    console.log("Received total:", total);

    if (isNaN(total) || total <= 0) {
      return res
        .status(400)
        .json({ message: "Total must be a number greater than 0" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    console.log("Created PaymentIntent:", paymentIntent.id);

    return res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

exports.api = onRequest(app);
