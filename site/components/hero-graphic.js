"use client";

import { useEffect, useRef } from "react";

const COLUMN_COUNT = 34;
const ROW_COUNT = 20;

export default function HeroGraphic() {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!wrapper || !canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frameId;
    let pointerX = 0;
    let pointerY = 0;
    let easedPointerX = 0;
    let easedPointerY = 0;

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        width * 0.56,
        height * 0.48,
        20,
        width * 0.56,
        height * 0.48,
        width * 0.48,
      );
      glow.addColorStop(0, "rgba(99, 102, 241, 0.11)");
      glow.addColorStop(0.55, "rgba(99, 102, 241, 0.035)");
      glow.addColorStop(1, "rgba(99, 102, 241, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      easedPointerX += (pointerX - easedPointerX) * 0.035;
      easedPointerY += (pointerY - easedPointerY) * 0.035;

      const motionTime = reducedMotion.matches ? 0 : time * 0.001;
      const columns = width < 440 ? 27 : COLUMN_COUNT;

      for (let row = 0; row < ROW_COUNT; row += 1) {
        const depth = row / (ROW_COUNT - 1);
        const perspective = 0.72 + depth * 0.4;

        for (let column = 0; column < columns; column += 1) {
          const across = column / (columns - 1);
          const normalizedX = across * 2 - 1;
          const primaryWave = Math.sin(
            normalizedX * 6.2 + motionTime * 1.25 + depth * 2.8,
          );
          const secondaryWave = Math.cos(
            depth * 5.4 - motionTime * 0.7 + normalizedX * 1.8,
          );
          const waveHeight = primaryWave * 20 + secondaryWave * 7;
          const x =
            width * 0.5 +
            normalizedX * width * 0.48 * perspective +
            (depth - 0.5) * 46 +
            easedPointerX * (9 + depth * 8);
          const y =
            height * 0.15 +
            depth * height * 0.7 +
            waveHeight * perspective +
            easedPointerY * (6 + depth * 7);

          const distanceFromCentre = Math.abs(normalizedX);
          const edgeFade = Math.max(0, 1 - distanceFromCentre * 0.72);
          const opacity = (0.12 + depth * 0.44) * edgeFade;
          const isAccent = (row * 5 + column * 3) % 17 === 0;
          const radius = (0.8 + depth * 1.35) * (isAccent ? 1.55 : 1);

          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fillStyle = isAccent
            ? `rgba(99, 102, 241, ${Math.min(opacity + 0.25, 0.85)})`
            : `rgba(22, 22, 26, ${opacity})`;
          context.fill();
        }
      }
    };

    const animate = (time) => {
      draw(time);
      if (!reducedMotion.matches) frameId = requestAnimationFrame(animate);
    };

    const onPointerMove = (event) => {
      const rect = wrapper.getBoundingClientRect();
      pointerX = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      pointerY = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    };

    const onScroll = () => {
      wrapper.style.transform = `translateY(${window.scrollY * 0.1}px)`;
    };

    const restartAnimation = () => {
      cancelAnimationFrame(frameId);
      draw();
      if (!reducedMotion.matches) frameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });

    resizeObserver.observe(wrapper);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", restartAnimation);
    resize();
    restartAnimation();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", restartAnimation);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="hero-particle-wave" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
