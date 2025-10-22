import React from 'react'
import { motion } from 'framer-motion'
import BrandMark from './branding/BrandMark.jsx'


export default function SplashScreen({ onDone }) {
React.useEffect(() => {
const t = setTimeout(() => onDone?.(), 3000) // 3 seconds
return () => clearTimeout(t)
}, [onDone])


return (
<motion.div
className="fixed inset-0 z-50 flex items-center justify-center bg-white"
initial={{opacity:1}}
animate={{opacity:1}}
exit={{opacity:0}}
transition={{duration:0.35}}
>
<div className="flex flex-col items-center gap-6">
<motion.div
initial={{scale:0.85, rotate:-6, opacity:0}}
animate={{scale:1, rotate:0, opacity:1}}
transition={{type:'spring', stiffness:180, damping:14}}
>
<BrandMark className="w-32 h-32" />
</motion.div>
<motion.h1
className="text-3xl tracking-[0.2em] font-semibold"
initial={{opacity:0, y:6}}
animate={{opacity:1, y:0}}
transition={{delay:0.15, duration:0.3}}
>ELUMA</motion.h1>
</div>
</motion.div>
)
}