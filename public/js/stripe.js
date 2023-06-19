/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe('process.env.STRIPE_PUBLIC_KEY');
  try {
    // 1) Get checkout session from API
    // const session = await axios(`api/v1/bookings/checkout-session/${tourId}`);
    const session = await axios(`/checkout-session/${tourId}`);
    // console.log(session);
    // 2) Create checkout form + charge creadit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    window.location.replace(session.data.session.url);
  } catch (err) {
    // console.log(err);
    showAlert('error', err);
  }
};

// https://natours-production-wiedy.up.railway.app/tour/api/v1/bookings/checkout-session/647565ac55acb29f7332de64
