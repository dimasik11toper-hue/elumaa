import React from "react";

// імпорти твоїх іконок
import homeSvg from "../../assets/icons/home.svg";
import tradeSvg from "../../assets/icons/trade.svg";
import walletSvg from "../../assets/icons/wallet.svg";
import logoImg from "../../assets/logo.png"; // <-- твій логотип PNG

// карта назв вкладок → файлів
const MAP = {
  home: homeSvg,
  trade: tradeSvg,
  wallet: walletSvg,
  logo: logoImg,
};

export default function Icon({ name, className = "", alt = name }) {
  const src = MAP[name] || MAP.logo;
  return <img src={src} alt={alt} className={className} />;
}
