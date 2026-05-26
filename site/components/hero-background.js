"use client";

import { useRef, useEffect } from "react";

export default function HeroBackground() {
  const containerRef = useRef(null);
  const mouseBlobRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let targetX = container.offsetWidth / 2;
    let targetY = container.offsetHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const onTouchMove = (e) => {
      if (!e.touches[0]) return;
      const rect = container.getBoundingClientRect();
      targetX = e.touches[0].clientX - rect.left;
      targetY = e.touches[0].clientY - rect.top;
    };

    const tick = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      const velocity = Math.sqrt(dx * dx + dy * dy);
      const scale = 1 + Math.min(velocity * 0.004, 0.4);

      currentX += dx * 0.04;
      currentY += dy * 0.04;

      if (mouseBlobRef.current) {
        mouseBlobRef.current.style.transform =
          `translate(${currentX - 210}px, ${currentY - 210}px) scale(${scale})`;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div className="lava-blob lava-blob-1" />
      <div className="lava-blob lava-blob-2" />
      <div className="lava-blob lava-blob-3" />
      <div ref={mouseBlobRef} className="lava-blob lava-blob-mouse" />
    </div>
  );
}
