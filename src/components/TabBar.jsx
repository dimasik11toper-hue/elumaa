import React from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import Icon from './branding/Icon.jsx'


export default function TabBar({ tabs, active, onChange }) {
return (
<div className="fixed bottom-0 inset-x-0 z-40">
<div className="mx-auto max-w-md bg-white/90 backdrop-blur border-t border-black/10">
<div className="grid grid-cols-3">
{tabs.map((tab) => {
const isActive = active === tab
return (
<button
key={tab}
onClick={() => onChange(tab)}
className={clsx(
'py-3 flex items-center justify-center gap-2 select-none',
'transition-colors',
isActive ? 'text-black' : 'text-black/50'
)}
>
<motion.span layout className="relative inline-flex items-center">
<Icon name={tab.toLowerCase()} className="w-5 h-5" />
</motion.span>
<span className="text-xs font-medium">{tab}</span>
</button>
)
})}
</div>
</div>
</div>
)
}