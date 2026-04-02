import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { adminKey, message, type } = await req.json();

    // 1. Basic Security Check
    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Logic: Save to Database
    // In Supabase: await supabase.from('notifications').insert([{ message, type, active: true }])
    
    console.log(`Broadcast Sent: ${message}`);

    return NextResponse.json({ success: true, msg: "Broadcast live!" });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}