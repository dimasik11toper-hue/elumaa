import React from "react";
import logo from "../../assets/logo.png"; // <-- твій PNG логотип

export default function BrandMark({ className = "" }) {
  return <img src={logo} alt="Eluma logo" className={className} />;
}
