"use client";

import { useRef, useEffect } from "react";
import { drawBella, drawMaxi } from "../lib/pixel-art";

export default function PetMascots() {
  const catRef = useRef<HTMLCanvasElement>(null);
  const dogRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const catCanvas = catRef.current;
    const dogCanvas = dogRef.current;
    if (!catCanvas || !dogCanvas) return;

    const catCtx = catCanvas.getContext("2d")!;
    const dogCtx = dogCanvas.getContext("2d")!;
    let wagT = 0;
    let animId: number;

    function animatePets() {
      wagT += 0.04;
      const wag = Math.sin(wagT);

      catCtx.clearRect(0, 0, 32, 32);
      drawBella(catCtx);

      // Subtle blink every ~3s
      if (Math.sin(wagT * 0.3) > 0.97) {
        catCtx.fillStyle = "#FF8C42";
        catCtx.fillRect(9, 15, 5, 3);
        catCtx.fillRect(18, 15, 5, 3);
      }

      dogCtx.clearRect(0, 0, 32, 32);
      drawMaxi(dogCtx);

      // Tongue wag
      const tongueY = Math.round(wag * 1.5);
      dogCtx.fillStyle = "#FF4444";
      dogCtx.fillRect(13, 24 + tongueY, 6, 2);
      dogCtx.fillStyle = "#CC2222";
      dogCtx.fillRect(14, 25 + tongueY, 4, 1);

      // Ear bounce
      const earBounce = Math.round(Math.sin(wagT * 1.5) * 0.8);
      dogCtx.fillStyle = "#F0B030";
      dogCtx.fillRect(3, 8 + earBounce, 5, 1);
      dogCtx.fillRect(24, 8 + earBounce, 5, 1);

      animId = requestAnimationFrame(animatePets);
    }

    animatePets();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="animals-row">
      <div className="animal-wrap">
        <canvas className="pet" ref={catRef} width={32} height={32} />
        <div className="pet-name">BELLA</div>
      </div>
      <div className="animal-wrap">
        <canvas className="pet" ref={dogRef} width={32} height={32} />
        <div className="pet-name">MAXI</div>
      </div>
    </div>
  );
}
