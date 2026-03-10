"use client";

import { useState, useEffect, useCallback } from "react";
import { LOADING_MESSAGES } from "../lib/constants";

export default function LoadingSpinner() {
  const [message, setMessage] = useState("GOOGLING THIS REAL QUICK...");

  const shuffle = useCallback(() => {
    return [...LOADING_MESSAGES].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    let pool = shuffle();
    let idx = 0;
    setMessage(pool[0]);

    const interval = setInterval(() => {
      idx++;
      if (idx >= pool.length) {
        pool = shuffle();
        idx = 0;
      }
      setMessage(pool[idx]);
    }, 1400);

    return () => clearInterval(interval);
  }, [shuffle]);

  return (
    <div className="loading">
      <div className="pixel-loader">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="loading-text">{message}</div>
    </div>
  );
}
