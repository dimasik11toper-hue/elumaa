import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen.jsx";
import TabBar from "./components/TabBar.jsx";
import Home from "./pages/Home.jsx";
import Trade from "./pages/Trade.jsx";
import Wallet from "./pages/Wallet.jsx";
import About from "./pages/About.jsx";
import useTelegramInit from "./lib/useTelegramInit.js";

const TABS = ["Home", "Trade", "Wallet"];

export default function App() {
  const [isSplashDone, setIsSplashDone] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Home");

  useTelegramInit();

  return (
    <div className="min-h-screen bg-white text-black font-display">
      {/* Splash screen */}
      <AnimatePresence>
        {!isSplashDone && <SplashScreen onDone={() => setIsSplashDone(true)} />}
      </AnimatePresence>

      {/* Головний контент */}
      <div
        className={
          "pb-20 max-w-md mx-auto " +
          (!isSplashDone ? "pointer-events-none select-none" : "")
        }
      >
        <AnimatePresence mode="wait">
          {activeTab === "Home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <Home setActiveTab={setActiveTab} />
            </motion.div>
          )}
          {activeTab === "Trade" && (
            <motion.div
              key="trade"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <Trade />
            </motion.div>
          )}
          {activeTab === "Wallet" && (
            <motion.div
              key="wallet"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <Wallet />
            </motion.div>
          )}
          {activeTab === "About" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <About setActiveTab={setActiveTab} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Нижнє меню */}
      {isSplashDone && (
        <TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} />
      )}
    </div>
  );
}
