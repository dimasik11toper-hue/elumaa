import React from 'react'
import { motion } from 'framer-motion'


export default function Trade() {
const [side, setSide] = React.useState('Buy')
return (
<div className="max-w-md mx-auto px-5 pt-12 pb-6">
<h2 className="text-xl font-semibold tracking-wide mb-4">Trade</h2>
<div className="bg-black text-white rounded-2xl p-4 shadow-soft">
<div className="flex gap-2 mb-4">
{['Buy', 'Sell'].map(s => (
<button key={s} onClick={()=>setSide(s)} className={`px-4 py-2 rounded-xl font-medium ${side===s? 'bg-white text-black':'bg-white/10'}`}>{s}</button>
))}
</div>
<div className="grid grid-cols-2 gap-3">
<label className="text-sm">
<span className="block text-white/70 mb-1">Price (USDT)</span>
<input type="number" placeholder="0.00" className="w-full px-3 py-2 rounded-lg text-black" />
</label>
<label className="text-sm">
<span className="block text-white/70 mb-1">Amount (BTC)</span>
<input type="number" placeholder="0.0000" className="w-full px-3 py-2 rounded-lg text-black" />
</label>
</div>
<button className="mt-4 w-full bg-white text-black rounded-xl py-3 font-semibold active:scale-[0.98]">{side} BTC</button>
</div>


{/* Mini order book placeholder */}
<div className="mt-6 grid grid-cols-2 gap-3">
<motion.div className="border border-black/10 rounded-2xl p-4" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}>
<div className="text-sm font-semibold mb-2">Bids</div>
{[1,2,3,4].map(i => (
<div key={i} className="flex justify-between text-sm py-1">
<span>67,10{i}</span>
<span className="text-black/60">0.0{i}</span>
</div>
))}
</motion.div>
<motion.div className="border border-black/10 rounded-2xl p-4" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}>
<div className="text-sm font-semibold mb-2">Asks</div>
{[1,2,3,4].map(i => (
<div key={i} className="flex justify-between text-sm py-1">
<span>67,12{i}</span>
<span className="text-black/60">0.0{i}</span>
</div>
))}
</motion.div>
</div>
</div>
)
}