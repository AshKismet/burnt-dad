function px(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, w = 1, h = 1) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

export function drawBella(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, 32, 32);
  const K = '#111111', W = '#ffffff', HW = '#f8f8f8', HB = '#d0d0d0', HS = '#f5c842';
  const FO = '#FF8C42', FL = '#FFB366', FD = '#CC5500', FM = '#FFD4A8';
  const NP = '#FF5577', EY = '#22CC44', EP = '#FF99BB';

  // === CHEF HAT ===
  px(ctx, HW, 9, 0, 14, 1);
  px(ctx, HW, 7, 1, 18, 1);
  px(ctx, HW, 6, 2, 20, 3);
  px(ctx, HW, 7, 5, 18, 1);
  px(ctx, HB, 8, 5, 16, 1);
  px(ctx, HS, 7, 6, 18, 2);
  px(ctx, K, 8, 0, 13, 1); px(ctx, K, 7, 1, 1, 1); px(ctx, K, 21, 1, 1, 1);
  px(ctx, K, 6, 2, 1, 3); px(ctx, K, 26, 2, 1, 3);

  // === CAT EARS ===
  px(ctx, FO, 5, 7, 4, 1);
  px(ctx, FO, 4, 8, 5, 1);
  px(ctx, FO, 3, 9, 4, 2);
  px(ctx, EP, 5, 8, 2, 1);
  px(ctx, EP, 4, 9, 2, 2);
  px(ctx, K, 5, 7, 1, 1); px(ctx, K, 3, 8, 1, 1); px(ctx, K, 3, 9, 1, 2);
  px(ctx, FO, 23, 7, 4, 1);
  px(ctx, FO, 23, 8, 5, 1);
  px(ctx, FO, 25, 9, 4, 2);
  px(ctx, EP, 25, 8, 2, 1);
  px(ctx, EP, 26, 9, 2, 2);
  px(ctx, K, 26, 7, 1, 1); px(ctx, K, 27, 8, 1, 1); px(ctx, K, 28, 9, 1, 2);

  // === HEAD ===
  px(ctx, FO, 6, 11, 20, 14);
  px(ctx, FL, 8, 11, 16, 4);
  px(ctx, FD, 6, 13, 2, 10); px(ctx, FD, 24, 13, 2, 10);
  px(ctx, FM, 10, 19, 12, 5);
  px(ctx, FM, 9, 20, 14, 3);
  px(ctx, K, 6, 11, 1, 14); px(ctx, K, 25, 11, 1, 14);
  px(ctx, K, 7, 10, 18, 1); px(ctx, K, 7, 25, 18, 1);
  px(ctx, K, 6, 25, 1, 1); px(ctx, K, 25, 25, 1, 1);

  // === EYES ===
  px(ctx, W, 9, 14, 5, 4);
  px(ctx, EY, 10, 15, 3, 2);
  px(ctx, K, 11, 15, 1, 1);
  px(ctx, K, 9, 14, 5, 1); px(ctx, K, 9, 18, 5, 1);
  px(ctx, K, 9, 14, 1, 4); px(ctx, K, 13, 14, 1, 4);
  px(ctx, W, 18, 14, 5, 4);
  px(ctx, EY, 19, 15, 3, 2);
  px(ctx, K, 20, 15, 1, 1);
  px(ctx, K, 18, 14, 5, 1); px(ctx, K, 18, 18, 5, 1);
  px(ctx, K, 18, 14, 1, 4); px(ctx, K, 22, 14, 1, 4);
  px(ctx, W, 12, 15, 1, 1); px(ctx, W, 21, 15, 1, 1);

  // === NOSE ===
  px(ctx, NP, 14, 20, 4, 2);
  px(ctx, NP, 15, 19, 2, 1);
  px(ctx, K, 14, 20, 4, 1); px(ctx, K, 14, 20, 1, 2); px(ctx, K, 17, 20, 1, 2); px(ctx, K, 14, 22, 4, 1);

  // === MOUTH & WHISKERS ===
  px(ctx, K, 16, 22, 1, 2);
  px(ctx, K, 13, 23, 3, 1); px(ctx, K, 17, 23, 3, 1);
  px(ctx, K, 3, 21, 6, 1); px(ctx, K, 23, 21, 6, 1);
  px(ctx, K, 3, 23, 6, 1); px(ctx, K, 23, 23, 6, 1);

  // === BODY ===
  px(ctx, FO, 8, 25, 16, 6);
  px(ctx, FL, 10, 25, 12, 2);
  px(ctx, FM, 11, 27, 10, 3);
  px(ctx, K, 8, 25, 1, 6); px(ctx, K, 23, 25, 1, 6);
  px(ctx, K, 8, 31, 16, 1);

  // === PAWS ===
  px(ctx, FO, 7, 30, 4, 2); px(ctx, FO, 21, 30, 4, 2);
  px(ctx, K, 7, 30, 1, 2); px(ctx, K, 10, 30, 1, 2);
  px(ctx, K, 21, 30, 1, 2); px(ctx, K, 24, 30, 1, 2);
  px(ctx, NP, 8, 31, 1, 1); px(ctx, NP, 9, 31, 1, 1);
  px(ctx, NP, 22, 31, 1, 1); px(ctx, NP, 23, 31, 1, 1);
}

export function drawMaxi(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, 32, 32);
  const K = '#111111', W = '#ffffff', HW = '#f8f8f8', HS = '#f5c842';
  const FG = '#C8860A', FL = '#F0B030', FD = '#8B5E00', FC = '#FDE8A0';
  const NB = '#222222', EY = '#7A3B00', TG = '#FF4444';

  // === CHEF HAT ===
  px(ctx, HW, 9, 0, 14, 1);
  px(ctx, HW, 7, 1, 18, 1);
  px(ctx, HW, 6, 2, 20, 3);
  px(ctx, HW, 7, 5, 18, 1);
  px(ctx, HS, 7, 6, 18, 2);
  px(ctx, K, 8, 0, 13, 1); px(ctx, K, 7, 1, 1, 1); px(ctx, K, 21, 1, 1, 1);
  px(ctx, K, 6, 2, 1, 3); px(ctx, K, 26, 2, 1, 3);

  // === FLOPPY EARS ===
  px(ctx, FL, 3, 8, 5, 1);
  px(ctx, FG, 2, 9, 6, 2);
  px(ctx, FG, 2, 11, 5, 3);
  px(ctx, FD, 3, 9, 1, 5);
  px(ctx, K, 2, 8, 1, 1); px(ctx, K, 3, 8, 5, 1); px(ctx, K, 2, 9, 1, 6); px(ctx, K, 7, 9, 1, 5); px(ctx, K, 3, 14, 5, 1);
  px(ctx, FL, 24, 8, 5, 1);
  px(ctx, FG, 24, 9, 6, 2);
  px(ctx, FG, 25, 11, 5, 3);
  px(ctx, FD, 28, 9, 1, 5);
  px(ctx, K, 29, 8, 1, 1); px(ctx, K, 24, 8, 5, 1); px(ctx, K, 29, 9, 1, 6); px(ctx, K, 24, 9, 1, 5); px(ctx, K, 24, 14, 5, 1);

  // === HEAD ===
  px(ctx, FG, 6, 10, 20, 15);
  px(ctx, FL, 8, 10, 16, 5);
  px(ctx, FD, 6, 12, 2, 11); px(ctx, FD, 24, 12, 2, 11);
  px(ctx, FC, 9, 19, 14, 5);
  px(ctx, FC, 8, 20, 16, 3);
  px(ctx, K, 6, 10, 1, 15); px(ctx, K, 25, 10, 1, 15);
  px(ctx, K, 7, 9, 18, 1); px(ctx, K, 7, 25, 18, 1);

  // === EYES ===
  px(ctx, W, 9, 13, 5, 4);
  px(ctx, EY, 10, 14, 3, 2);
  px(ctx, K, 11, 14, 1, 1);
  px(ctx, K, 9, 13, 5, 1); px(ctx, K, 9, 17, 5, 1);
  px(ctx, K, 9, 13, 1, 4); px(ctx, K, 13, 13, 1, 4);
  px(ctx, W, 12, 14, 1, 1);
  px(ctx, W, 18, 13, 5, 4);
  px(ctx, EY, 19, 14, 3, 2);
  px(ctx, K, 20, 14, 1, 1);
  px(ctx, K, 18, 13, 5, 1); px(ctx, K, 18, 17, 5, 1);
  px(ctx, K, 18, 13, 1, 4); px(ctx, K, 22, 13, 1, 4);
  px(ctx, W, 21, 14, 1, 1);

  // === NOSE ===
  px(ctx, NB, 13, 19, 6, 3);
  px(ctx, NB, 12, 20, 8, 2);
  px(ctx, K, 12, 19, 1, 3); px(ctx, K, 19, 19, 1, 3);
  px(ctx, K, 13, 19, 6, 1); px(ctx, K, 13, 22, 6, 1);
  px(ctx, W, 14, 20, 2, 1);

  // === MOUTH & TONGUE ===
  px(ctx, K, 16, 22, 1, 2);
  px(ctx, K, 12, 23, 4, 1); px(ctx, K, 17, 23, 4, 1);
  px(ctx, TG, 14, 24, 4, 2);
  px(ctx, TG, 13, 23, 6, 2);
  px(ctx, K, 13, 23, 1, 1); px(ctx, K, 18, 23, 1, 1);

  // === BODY ===
  px(ctx, FG, 8, 25, 16, 6);
  px(ctx, FL, 10, 25, 12, 2);
  px(ctx, FC, 11, 27, 10, 3);
  px(ctx, K, 8, 25, 1, 6); px(ctx, K, 23, 25, 1, 6);
  px(ctx, K, 8, 31, 16, 1);

  // === PAWS ===
  px(ctx, FG, 7, 29, 5, 3); px(ctx, FG, 20, 29, 5, 3);
  px(ctx, FC, 8, 30, 3, 2); px(ctx, FC, 21, 30, 3, 2);
  px(ctx, K, 7, 29, 1, 3); px(ctx, K, 11, 29, 1, 3);
  px(ctx, K, 20, 29, 1, 3); px(ctx, K, 24, 29, 1, 3);
  px(ctx, K, 7, 31, 5, 1); px(ctx, K, 20, 31, 5, 1);
}

export function drawMerchArt(canvases: {
  shirt1: HTMLCanvasElement | null;
  shirt2: HTMLCanvasElement | null;
  shirt3: HTMLCanvasElement | null;
  shirt4: HTMLCanvasElement | null;
}) {
  const p = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, col: string) => {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w || 1, h || 1);
  };

  // Shirt 1: "WE ATE IT" skull with chef hat
  if (canvases.shirt1) {
    const ctx = canvases.shirt1.getContext('2d')!;
    ctx.clearRect(0, 0, 80, 80);
    p(ctx, 10, 30, 60, 40, '#1a1a1a');
    p(ctx, 0, 30, 12, 20, '#1a1a1a'); p(ctx, 68, 30, 12, 20, '#1a1a1a');
    p(ctx, 28, 30, 24, 6, '#111');
    ctx.strokeStyle = '#FF5500'; ctx.lineWidth = 2;
    ctx.strokeRect(10, 30, 60, 40);
    ctx.beginPath(); ctx.moveTo(0, 30); ctx.lineTo(10, 30); ctx.lineTo(28, 36); ctx.lineTo(52, 36); ctx.lineTo(70, 30); ctx.lineTo(80, 30); ctx.strokeStyle = '#FF5500'; ctx.stroke();
    p(ctx, 28, 38, 24, 18, '#f0e8d0');
    p(ctx, 26, 44, 28, 14, '#f0e8d0');
    p(ctx, 31, 41, 6, 6, '#1a1a1a'); p(ctx, 43, 41, 6, 6, '#1a1a1a');
    p(ctx, 33, 43, 2, 2, '#FF5500'); p(ctx, 45, 43, 2, 2, '#FF5500');
    p(ctx, 37, 48, 2, 3, '#1a1a1a'); p(ctx, 39, 49, 2, 2, '#1a1a1a');
    p(ctx, 30, 54, 4, 3, '#fff'); p(ctx, 35, 54, 4, 3, '#fff'); p(ctx, 40, 54, 4, 3, '#fff'); p(ctx, 45, 54, 4, 3, '#fff');
    p(ctx, 29, 53, 22, 1, '#1a1a1a'); p(ctx, 29, 57, 22, 1, '#1a1a1a');
    p(ctx, 30, 28, 20, 2, '#888');
    p(ctx, 32, 18, 16, 10, '#f5f5f5');
    p(ctx, 34, 14, 12, 6, '#f5f5f5');
    p(ctx, 36, 10, 8, 6, '#f5f5f5');
    ctx.fillStyle = '#FF8C00'; ctx.font = 'bold 6px monospace';
    ctx.fillText('WE ATE IT', 16, 78);
  }

  // Shirt 2: Burnt Dad apron
  if (canvases.shirt2) {
    const ctx = canvases.shirt2.getContext('2d')!;
    ctx.clearRect(0, 0, 80, 80);
    ctx.fillStyle = '#2a1a00';
    ctx.fillRect(15, 8, 50, 65);
    ctx.fillRect(5, 8, 70, 12);
    ctx.fillStyle = '#3a2800';
    ctx.fillRect(30, 4, 20, 8);
    ctx.strokeStyle = '#FF5500'; ctx.lineWidth = 2;
    ctx.strokeRect(15, 8, 50, 65);
    ctx.strokeRect(5, 8, 70, 12);
    ctx.fillStyle = '#FF5500';
    ctx.fillRect(28, 32, 4, 16); ctx.fillRect(32, 28, 4, 20); ctx.fillRect(36, 24, 4, 24); ctx.fillRect(40, 28, 4, 20); ctx.fillRect(44, 32, 4, 16);
    ctx.fillStyle = '#FF8C00';
    ctx.fillRect(30, 30, 2, 14); ctx.fillRect(34, 26, 2, 18); ctx.fillRect(38, 22, 2, 22); ctx.fillRect(42, 26, 2, 18); ctx.fillRect(46, 30, 2, 14);
    ctx.fillStyle = '#FFD93D';
    ctx.fillRect(35, 30, 2, 10); ctx.fillRect(39, 26, 2, 14); ctx.fillRect(43, 30, 2, 10);
    ctx.fillStyle = '#FF8C00'; ctx.font = 'bold 7px monospace';
    ctx.fillText('BURNT DAD', 17, 22);
    ctx.fillStyle = '#806040'; ctx.font = '5px monospace';
    ctx.fillText('KITCHEN', 27, 72);
  }

  // Sticker 3: Bella & Maxi heads
  if (canvases.shirt3) {
    const ctx = canvases.shirt3.getContext('2d')!;
    ctx.clearRect(0, 0, 80, 80);
    ctx.strokeStyle = '#FF8C00'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(4, 4, 72, 72, 8); ctx.stroke();
    ctx.fillStyle = '#1a0800'; ctx.fill();
    ctx.fillStyle = '#FF9A3C'; ctx.font = 'bold 6px monospace';
    ctx.fillText('BELLA', 4, 74);
    ctx.fillText('MAXI', 50, 74);
    ctx.fillStyle = '#FF8C42';
    ctx.fillRect(8, 20, 22, 18);
    ctx.fillRect(10, 18, 18, 4);
    ctx.fillStyle = '#FF8C42';
    ctx.fillRect(8, 12, 6, 8); ctx.fillRect(20, 12, 6, 8);
    ctx.fillStyle = '#FF99BB';
    ctx.fillRect(10, 14, 3, 5); ctx.fillRect(21, 14, 3, 5);
    ctx.fillStyle = '#22CC44';
    ctx.fillRect(11, 22, 4, 3); ctx.fillRect(20, 22, 4, 3);
    ctx.fillStyle = '#111'; ctx.fillRect(12, 23, 2, 1); ctx.fillRect(21, 23, 2, 1);
    ctx.fillStyle = '#FF5577'; ctx.fillRect(17, 28, 4, 2); ctx.fillRect(18, 27, 2, 1);
    ctx.fillStyle = '#111'; ctx.fillRect(4, 28, 6, 1); ctx.fillRect(28, 28, 6, 1);
    ctx.fillStyle = '#C8860A';
    ctx.fillRect(50, 18, 22, 20);
    ctx.fillStyle = '#A06800';
    ctx.fillRect(46, 16, 6, 14); ctx.fillRect(70, 16, 6, 14);
    ctx.fillStyle = '#7A3B00';
    ctx.fillRect(54, 22, 4, 3); ctx.fillRect(63, 22, 4, 3);
    ctx.fillStyle = '#fff'; ctx.fillRect(57, 22, 1, 1); ctx.fillRect(66, 22, 1, 1);
    ctx.fillStyle = '#222'; ctx.fillRect(58, 28, 6, 4); ctx.fillRect(57, 29, 8, 2);
    ctx.fillStyle = '#fff'; ctx.fillRect(59, 29, 2, 1);
    ctx.fillStyle = '#FF4444'; ctx.fillRect(59, 33, 4, 3); ctx.fillRect(58, 32, 6, 2);
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(10, 8, 18, 6); ctx.fillRect(12, 4, 14, 6); ctx.fillRect(14, 2, 10, 4);
    ctx.fillRect(52, 8, 18, 6); ctx.fillRect(54, 4, 14, 6); ctx.fillRect(56, 2, 10, 4);
    ctx.fillStyle = '#FF8C00';
    ctx.fillRect(10, 13, 18, 3); ctx.fillRect(52, 13, 18, 3);
  }

  // Kids shirt 4: "DAD'S SOUS CHEF"
  if (canvases.shirt4) {
    const ctx = canvases.shirt4.getContext('2d')!;
    ctx.clearRect(0, 0, 80, 80);
    p(ctx, 15, 28, 50, 44, '#FF5500');
    p(ctx, 5, 28, 12, 18, '#FF5500'); p(ctx, 63, 28, 12, 18, '#FF5500');
    p(ctx, 28, 28, 24, 8, '#CC3300');
    ctx.strokeStyle = '#1a0800'; ctx.lineWidth = 2;
    ctx.strokeRect(15, 28, 50, 44);
    ctx.beginPath(); ctx.moveTo(5, 28); ctx.lineTo(15, 28); ctx.lineTo(28, 34); ctx.lineTo(52, 34); ctx.lineTo(65, 28); ctx.lineTo(75, 28); ctx.strokeStyle = '#1a0800'; ctx.stroke();
    ctx.fillStyle = '#FFD93D';
    for (let i = 0; i < 8; i++) {
      ctx.save(); ctx.translate(40, 52); ctx.rotate(i * Math.PI / 4);
      ctx.fillRect(-1, -12, 2, 10); ctx.restore();
    }
    p(ctx, 36, 48, 8, 8, '#FF8C00');
    p(ctx, 39, 44, 2, 16, '#f5f5f5'); p(ctx, 37, 44, 6, 4, '#f5f5f5');
    ctx.fillStyle = '#1a0800'; ctx.font = 'bold 6px monospace';
    ctx.fillText("DAD'S", 25, 40);
    ctx.fillStyle = '#FFD93D'; ctx.font = 'bold 5px monospace';
    ctx.fillText('SOUS CHEF', 20, 68);
  }
}
