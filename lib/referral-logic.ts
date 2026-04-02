export async function payReferralCommission(buyerId: string, type: string) {
  // 1. Find if this buyer was referred by someone
  // 2. If 'data', add 10 Naira to the Referrer's wallet
  // 3. Log it in the 'commissions' table for transparency
  
  if (type === 'data') {
    const commission = 10;
    console.log(`Paying ₦${commission} to referrer of ${buyerId}`);
    // UPDATE profiles SET wallet_balance = wallet_balance + 10 WHERE referral_code = ...
  }
}