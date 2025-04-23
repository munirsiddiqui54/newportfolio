"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  // Smooth following motion
  useEffect(() => {
    let x = 0,
      y = 0;
    let targetX = 0,
      targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${e.clientX}px`;
        trailRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      x += (targetX - x) * 0.1;
      y += (targetY - y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Hover interaction for links/buttons
  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;

    const handleMouseEnter = () => {
      ring?.classList.add("scale-150", "border-solid");
      dot?.classList.add("scale-0");
    };

    const handleMouseLeave = () => {
      ring?.classList.remove("scale-150", "border-solid");
      dot?.classList.remove("scale-0");
    };

    const hoverables = document.querySelectorAll("a, button, [data-cursor]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Central dot */}
      <div
        ref={dotRef}
        className="fixed z-[1000] w-2 h-2 bg-[#ca49b4] rounded-full pointer-events-none transition-transform duration-75"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Dotted ring */}
      <div
        ref={ringRef}
        className="fixed z-[999] w-14 h-14 border-2 border-dotted border-[#5662ea] rounded-full pointer-events-none transition-transform duration-150"
        style={{ transform: "translate(-50%, -50%)", top: -30, left: -30 }}
      />

      {/* Gradient glow trail */}
      <div
        ref={trailRef}
        className="fixed z-[998] w-32 h-32 blur-3xl bg-gradient-to-tr from-[#ca49b4] to-[#5662ea] opacity-30 pointer-events-none transition-transform duration-200"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
