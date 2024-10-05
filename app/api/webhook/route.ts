import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const endpointSecret = "whsec_cb8cc75b4ff3dadc4764641dacd29cd577cd857d569655f3af3a1acb7de23f77";

export async function POST(req: NextRequest) {
	const body = await req.text();
	const sig = req.headers.get("stripe-signature") as string;
	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
	} catch (err) {
		return new Response(`Webhook error ${err}`, { status: 400 });
	}

	// Handle the event
	switch (event.type) {
		case "payment_intent.succeeded":
			const paymentIntentSucceeded = event.data.object;
			// Then define and call a function to handle the event payment_intent.succeeded
			console.log(paymentIntentSucceeded);
			break;
		// ... handle other event types
		default:
			console.log(`Unhandled event type ${event.type}`);
	}

    return new Response("webhook received");
}
