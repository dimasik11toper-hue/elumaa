import React from "react";
import { motion } from "framer-motion";
import Icon from "../components/branding/Icon.jsx";

export default function About({ setActiveTab }) {
  return (
    <motion.div
      className="max-w-md mx-auto px-5 pt-12 pb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* верхній бар */}
      <div className="flex items-center gap-3 mb-6">
        <Icon name="logo" className="w-7 h-7" />
        <h2 className="text-xl font-semibold tracking-wide">About ELUMA</h2>
      </div>

      {/* головний текст */}
      <div className="bg-black text-white rounded-2xl p-6 shadow-soft leading-relaxed">
        <h3 className="text-2xl font-semibold mb-4 text-center">What is ELUMA ?</h3>
        <p className="text-white/80 mb-4 text-sm">
          <b>ELUMA</b> — ELUMA is a modern crypto exchange designed for fast 
          and secure trading.  
          It is based on blockchain technology with a clean design and white-light-black aesthetics.
          The name comes from the word <i>“illuminate”</i> — to illuminate, to reveal the truth in 
          the world of crypto.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Illuminates — meaning</h3>
        <p className="text-white/70 text-sm">
          <b>Illuminates</b> — (from Latin illuminatus) “enlightened.”   
          These are people who seek knowledge, truth, and higher understanding.  
          In the context of Eluma, it is a symbol of transparency and enlightenment in finance and technology.
        </p>

        <div className="text-center mt-8">
          <button
            onClick={() => setActiveTab("Home")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold active:scale-[0.98]"
          >
            ← Back Home
          </button>
        </div>
      </div>
    </motion.div>
  );
}
