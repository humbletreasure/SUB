import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { company, customerId, amount } = await req.json();
  const USER_ID = process.env.CLUBKONNECT_USER_ID;
  const API_KEY = process.env.CLUBKONNECT_API_KEY;

  // Example: Bet9ja=01, SportyBet=02
  const url = `https://www.nellobytesystems.com/APIBettingV1.asp?UserID=${USER_ID}&APIKey=${API_KEY}&BettingCompany=${company}&CustomerId=${customerId}&Amount=${amount}`;

  const res = await fetch(url);
  const result = await res.json();

  return NextResponse.json({ status: result.status });
}