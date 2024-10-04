import { headers } from 'next/headers';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';
 
// Initialize Stripe with proper typing
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// This would go in app/api/checkout/route.ts
export async function POST() {
  try {
    const headersList = headers();
    const origin = headersList.get('origin') || '';

    // Type the session creation
    const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1Q63MSPLcbHRszk0NPanZfGw",
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
    });

    // In App Router, we use redirect() instead of res.redirect
    return NextResponse.redirect(session.url as string, { status: 303 });
  } catch (err) {
    if (err instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { message: err.message },
        { status: err.statusCode || 500 }
      );
    }
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optionally, handle GET requests
export async function GET() {
  return NextResponse.json(
    { message: 'Please use POST request' },
    { status: 405 }
  );
}