import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "../components/branding/Icon.jsx";

export default function Home({ setActiveTab }) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    async function fetchPrices() {
      try {
        const resp = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,toncoin,binancecoin,cardano&vs_currencies=usd"
        );
        const data = await resp.json();
        setPrices(data);
      } catch (err) {
        console.error("Error fetching prices:", err);
      }
    }

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // оновлювати кожну хвилину
    return () => clearInterval(interval);
  }, []);

  const coins = [
    { id: "bitcoin", label: "BTC" },
    { id: "ethereum", label: "ETH" },
    { id: "toncoin", label: "TON" },
    { id: "binancecoin", label: "BNB" },
    { id: "cardano", label: "ADA" },
  ];

  return (
    <div className="max-w-md mx-auto px-5 pt-12 pb-6">
      {/* верхній бар із логотипом */}
      <div className="flex items-center gap-3 mb-6">
        <Icon name="logo" className="w-7 h-7" />
        <h2 className="text-xl font-semibold tracking-wide">ELUMA</h2>
      </div>

      {/* головна картка */}
      <motion.div
        className="rounded-2xl bg-black text-white p-5 shadow-soft"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-2">Welcome to ELUMA</h3>
        <p className="text-white/80 text-sm">
          A clean, fast trading experience. White-first design, subtle motion.
        </p>
        <button
          onClick={() => setActiveTab("Trade")}
          className="mt-4 inline-flex items-center gap-2 bg-white text-black rounded-xl px-4 py-2 font-medium active:scale-[0.98]"
        >
          Start Trading
        </button>
      </motion.div>

      {/* криптовалюти */}
      <div className="mt-8 grid grid-cols-1 gap-3">
        {coins.map((coin) => {
          const priceObj = prices[coin.id];
          const price = priceObj ? priceObj.usd.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : "--";
          return (
            <motion.div
              key={coin.id}
              className="border border-black/10 rounded-2xl p-4 flex items-center justify-between"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
            >
              <div>
                <div className="text-sm text-black/60">{coin.label}/USDT</div>
                <div className="text-lg font-semibold">{price === "--" ? price : `$${price}`}</div>
              </div>
              <div className="text-green-600">+/-</div>
            </motion.div>
          );
        })}
      </div>

      {/* неонова кнопка "What is Eluma?" */}
      <div className="text-center mt-10">
        <button
          onClick={() => setActiveTab("About")}
          className="text-[1.1rem] font-semibold text-[#00c06b] soft-neon"
        >
          What is Eluma ?
        </button>
      </div>
    </div>
  );
}
