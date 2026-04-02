import { NextResponse } from 'next/server';

export async function GET() {
  // Logic: Sum all (total_charged - wholesale_cost) from transactions table
  // Also sum all 15 Naira deposit fees
  
  const stats = {
    totalProfit: 15020.50, // This would be a DB query
    totalUsers: 450,
    activeServices: ['MTN', 'Airtel', 'DSTV']
  };

  return NextResponse.json(stats);
}