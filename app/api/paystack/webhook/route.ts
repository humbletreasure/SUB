import { NextResponse } from 'next/server';
import crypto from 'crypto';

// This line is CRITICAL for Vercel + Paystack
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const paystackSignature = req.headers.get('x-paystack-signature');
    const secret = process.env.PAYSTACK_SECRET_KEY;

    // 1. Verify that this message ACTUALLY came from Paystack
    const hash = crypto
      .createHmac('sha512', secret!)
      .update(body)
      .digest('hex');

    if (hash !== paystackSignature) {
      return new NextResponse('Unauthorized Signature', { status: 401 });
    }

    const event = JSON.parse(body);

    // 2. Check if the payment was successful
    if (event.event === 'charge.success') {
      const { amount, customer, reference, metadata } = event.data;
      
      // Paystack sends amount in KOBO (e.g., 10000 = ₦100)
      // We subtract your ₦15 deposit fee here
      const depositAmount = (amount / 100) - 15; 
      const userEmail = customer.email;

      console.log(`✅ Success: Received ₦${depositAmount} from ${userEmail}`);

      // --- DATABASE LOGIC (SUDO CODE) ---
      // This is where you connect to Supabase/Postgres:
      // await db.user.update({
      //   where: { email: userEmail },
      //   data: { wallet_balance: { increment: depositAmount } }
      // });
      
      return NextResponse.json({ status: 'Success', received: depositAmount });
    }

    return new NextResponse('Event Ignored', { status: 200 });

  } catch (error) {
    console.error('Webhook Error:', error);
    return new NextResponse('Webhook Error', { status: 400 });
  }
}