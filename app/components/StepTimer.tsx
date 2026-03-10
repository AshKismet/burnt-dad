"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { formatTime } from "../lib/recipe-utils";

interface StepTimerProps {
  totalSeconds: number;
}

export default function StepTimer({ totalSeconds }: StepTimerProps) {
  const [state, setState] = useState<"idle" | "running" | "done">("idle");
  const [remaining, setRemaining] = useState(totalSeconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const playChime = useCallback(() => {
    try {
      const ac = new AudioContext();
      [523, 659, 784].forEach((f, i) => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.connect(g);
        g.connect(ac.destination);
        o.frequency.value = f;
        g.gain.setValueAtTime(0.2, ac.currentTime + i * 0.15);
        g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + i * 0.15 + 0.3);
        o.start(ac.currentTime + i * 0.15);
        o.stop(ac.currentTime + i * 0.15 + 0.3);
      });
    } catch {
      // Audio not available
    }
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function toggle() {
    if (state === "running") {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      setState("idle");
      setRemaining(totalSeconds);
      return;
    }

    let rem = totalSeconds;
    setState("running");
    setRemaining(rem);

    intervalRef.current = setInterval(() => {
      rem--;
      if (rem <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setState("done");
        setRemaining(0);
        playChime();
      } else {
        setRemaining(rem);
      }
    }, 1000);
  }

  if (state === "done") {
    return (
      <button className="nc-timer-btn done" onClick={toggle}>
        {"\u2713"} Done!
      </button>
    );
  }

  if (state === "running") {
    return (
      <button className="nc-timer-btn running" onClick={toggle}>
        {"\u23F9"} {formatTime(remaining)} {"\u00B7"} tap to stop
      </button>
    );
  }

  return (
    <button className="nc-timer-btn" onClick={toggle}>
      {"\u23F1"} Start timer {"\u00B7"} {formatTime(totalSeconds)}
    </button>
  );
}
