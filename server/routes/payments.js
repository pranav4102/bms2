import express from 'express';
import Stripe from 'stripe';
import { auth } from '../middleware/auth.js';
import Booking from '../models/Booking.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', auth, async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: booking.totalAmount * 100,
      currency: 'inr',
      metadata: { bookingId: booking._id.toString() }
    });

    booking.paymentIntentId = paymentIntent.id;
    await booking.save();

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: 'Payment initialization failed' });
  }
});

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const booking = await Booking.findOne({ paymentIntentId: paymentIntent.id });
    
    if (booking) {
      booking.paymentStatus = 'completed';
      await booking.save();
    }
  }

  res.json({ received: true });
});

export default router;