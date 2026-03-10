"use client";

import { useRef, useEffect, useState } from "react";
import { drawMerchArt } from "../lib/pixel-art";

interface MerchItem {
  id: string;
  name: string;
  notifyName: string;
  desc: string;
  price: string;
}

const MERCH_ITEMS: MerchItem[] = [
  { id: "shirt1", name: "THE CLASSIC", notifyName: "The Classic Tee", desc: '"We Ate It" tee\nBlack \u00B7 Unisex', price: "$28" },
  { id: "shirt2", name: "THE APRON", notifyName: "The Burnt Dad Apron", desc: '"Burnt Dad" apron\nCanvas \u00B7 One Size', price: "$34" },
  { id: "shirt3", name: "STICKER PACK", notifyName: "Sticker Pack", desc: "Bella, Maxi & Burnt Dad\n5 stickers \u00B7 Waterproof", price: "$12" },
  { id: "shirt4", name: "LITTLE CHEF", notifyName: "Little Chef Kids Tee", desc: '"Dad\'s Sous Chef" kids tee\nAges 4\u201312', price: "$24" },
];

export default function MerchSection() {
  const shirt1Ref = useRef<HTMLCanvasElement>(null);
  const shirt2Ref = useRef<HTMLCanvasElement>(null);
  const shirt3Ref = useRef<HTMLCanvasElement>(null);
  const shirt4Ref = useRef<HTMLCanvasElement>(null);
  const [notified, setNotified] = useState<Set<string>>(new Set());

  useEffect(() => {
    drawMerchArt({
      shirt1: shirt1Ref.current,
      shirt2: shirt2Ref.current,
      shirt3: shirt3Ref.current,
      shirt4: shirt4Ref.current,
    });
  }, []);

  const refs: Record<string, React.RefObject<HTMLCanvasElement | null>> = {
    shirt1: shirt1Ref,
    shirt2: shirt2Ref,
    shirt3: shirt3Ref,
    shirt4: shirt4Ref,
  };

  function handleNotify(name: string) {
    setNotified((prev) => new Set(prev).add(name));
  }

  return (
    <div style={{ marginTop: 24 }}>
      <div className="pixel-box" style={{ textAlign: "center", padding: "32px 20px" }}>
        <div style={{ fontSize: "clamp(11px, 2.5vw, 16px)", color: "var(--sun)", textShadow: "3px 3px 0 var(--orange)", marginBottom: 6, letterSpacing: 2 }}>
          {"\uD83D\uDD25"} BURNT DAD MERCH {"\uD83D\uDD25"}
        </div>
        <div style={{ fontFamily: "'VT323', monospace", fontSize: 18, color: "#c0a080", marginBottom: 24, lineHeight: 1.6 }}>
          Wear the shame. Share the chaos.<br />
          Art by dads after doing the dishes.
        </div>

        <div className="merch-grid">
          {MERCH_ITEMS.map((item) => (
            <div key={item.id} className="merch-item">
              <div className="merch-art">
                <canvas
                  ref={refs[item.id]}
                  width={80}
                  height={80}
                  style={{ width: 80, height: 80, imageRendering: "pixelated" }}
                />
              </div>
              <div className="merch-name">{item.name}</div>
              <div className="merch-desc">
                {item.desc.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </div>
              <div className="merch-price">{item.price}</div>
              <button
                className={`merch-btn${notified.has(item.notifyName) ? " merch-notified" : ""}`}
                onClick={() => handleNotify(item.notifyName)}
              >
                {notified.has(item.notifyName) ? "\u2713 YOU'RE ON THE LIST" : "NOTIFY ME"}
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, fontFamily: "'VT323', monospace", fontSize: 16, color: "#806040", lineHeight: 1.8 }}>
          Art by dads after doing the dishes.<br />
          Merch ships when we stop burning things long enough to fulfill orders.
        </div>
      </div>
    </div>
  );
}
