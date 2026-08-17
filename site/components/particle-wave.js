"use client";

import { useEffect, useRef } from "react";

export default function ParticleWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pointer = { x: 0.5, y: 0.5, active: false };
    let frame = 0;
    let width = 0;
    let height = 0;
    let animationId;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const spacing = width < 700 ? 25 : 32;
      const columns = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      const time = reducedMotion ? 0 : frame * 0.012;

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const baseX = column * spacing - spacing / 2;
          const baseY = row * spacing - spacing / 2;
          const normalizedX = baseX / Math.max(width, 1);
          const normalizedY = baseY / Math.max(height, 1);
          const centrePull = Math.exp(-Math.pow((normalizedY - 0.6) * 2.8, 2));
          const wave =
            Math.sin(normalizedX * 9 + time + row * 0.18) * 13 * centrePull +
            Math.cos(normalizedX * 4.5 - time * 0.7 + row * 0.08) * 7;

          const distanceX = normalizedX - pointer.x;
          const distanceY = normalizedY - pointer.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          const influence = pointer.active ? Math.max(0, 1 - distance / 0.22) : 0;
          const lift = influence * -24;
          const x = baseX + Math.sin(row * 0.35 + time * 0.3) * 2;
          const y = baseY + wave + lift;
          const alpha = 0.1 + centrePull * 0.38 + influence * 0.45;
          const size = 0.75 + centrePull * 0.8 + influence * 1.2;

          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fillStyle = `rgba(${column % 3 === 0 ? "137, 102, 255" : "87, 225, 207"}, ${alpha})`;
          context.fill();
        }
      }

      frame += 1;
      animationId = requestAnimationFrame(draw);
    };

    const handlePointer = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width;
      pointer.y = (event.clientY - bounds.top) / bounds.height;
      pointer.active = true;
    };

    const stopPointer = () => {
      pointer.active = false;
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotion = (event) => {
      reducedMotion = event.matches;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handlePointer);
    canvas.addEventListener("pointerleave", stopPointer);
    motionQuery.addEventListener("change", handleMotion);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointer);
      canvas.removeEventListener("pointerleave", stopPointer);
      motionQuery.removeEventListener("change", handleMotion);
    };
  }, []);

  return <canvas aria-hidden="true" className="particle-wave" ref={canvasRef} />;
}
