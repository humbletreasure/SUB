import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { network, amount, phone } = await req.json();
    const USER_ID = process.env.CLUBKONNECT_USER_ID;
    const API_KEY = process.env.CLUBKONNECT_API_KEY;

    // ClubKonnect Network IDs: MTN=01, GLO=02, 9Mobile=03, Airtel=04
    const netIds: any = { mtn: '01', glo: '02', '9mobile': '03', airtel: '04' };
    
    const url = `https://www.nellobytesystems.com/APIAirtimeV1.asp?UserID=${USER_ID}&APIKey=${API_KEY}&MobileNetwork=${netIds[network]}&Amount=${amount}&MobileNumber=${phone}`;

    const res = await fetch(url);
    const result = await res.json();

    if (result.status === "ORDER_RECEIVED") {
      return NextResponse.json({ success: true, orderId: result.orderid });
    }
    return NextResponse.json({ success: false, msg: result.status });
  } catch (e) {
    return NextResponse.json({ success: false, msg: "Server Error" });
  }
}