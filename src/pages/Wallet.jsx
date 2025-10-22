import React from 'react'


export default function Wallet() {
return (
<div className="max-w-md mx-auto px-5 pt-12 pb-6">
<h2 className="text-xl font-semibold tracking-wide mb-4">Wallet</h2>
<div className="border border-black/10 rounded-2xl p-4">
<div className="flex justify-between py-2">
<span className="text-black/60">BTC</span>
<span>0.0000</span>
</div>
<div className="flex justify-between py-2">
<span className="text-black/60">USDT</span>
<span>0.00</span>
</div>
<div className="flex gap-2 mt-4">
<button className="flex-1 bg-black text-white rounded-xl py-2">Deposit</button>
<button className="flex-1 bg-black text-white rounded-xl py-2">Withdraw</button>
</div>
</div>
</div>
)
}