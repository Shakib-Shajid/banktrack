"use client"

import { useState } from "react";
import CardSet from "./CardSet";

export default function CardToggle() {
  const [showLeft, setShowLeft] = useState(true);

  const toggleCards = () => {
    setShowLeft(!showLeft);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Toggle Button */}
      <input
        type="checkbox"
        className="toggle"
        defaultChecked={showLeft}
        onChange={toggleCards}
      />

      {/* Cards */}
      <CardSet showLeft={showLeft} />
    </div>
  );
}
