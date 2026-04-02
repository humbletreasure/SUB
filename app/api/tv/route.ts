import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { provider, plan, iucNumber } = await req.json();
  const USER_ID = process.env.CLUBKONNECT_USER_ID;
  const API_KEY = process.env.CLUBKONNECT_API_KEY;

  // Provider IDs: GOTV, DSTV, STARTIMES
  const url = `https://www.nellobytesystems.com/APICableTVV1.asp?UserID=${USER_ID}&APIKey=${API_KEY}&CableTV=${provider}&Package=${plan}&SmartCardNo=${iucNumber}`;

  const res = await fetch(url);
  const result = await res.json();

  return NextResponse.json({ status: result.status });
}