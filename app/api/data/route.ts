import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { network, planCode, phone } = await req.json();
    const USER_ID = process.env.CLUBKONNECT_USER_ID;
    const API_KEY = process.env.CLUBKONNECT_API_KEY;

    const netIds: any = { mtn: '01', glo: '02', '9mobile': '03', airtel: '04' };

    const url = `https://www.nellobytesystems.com/APIDataV1.asp?UserID=${USER_ID}&APIKey=${API_KEY}&MobileNetwork=${netIds[network]}&DataPlan=${planCode}&MobileNumber=${phone}`;

    const res = await fetch(url);
    const result = await res.json();

    if (result.status === "ORDER_RECEIVED") {
      // Logic: Trigger referral commission here!
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false });
  } catch (e) {
    return NextResponse.json({ success: false });
  }
}