import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let animationFrameId: number;

    const speed = 0.0005; // Speed of stars moving towards viewer
    const starCount = 5000; // Number of stars

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1,
          z: Math.random(),
          px: 0,
          py: 0
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 20, 0.4)"; // Trails effect
      ctx.fillRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;

      stars.forEach((star) => {
        // Update star position
        star.z -= speed;
        if (star.z <= 0) {
          star.z = 1;
          star.x = Math.random() * 2 - 1;
          star.y = Math.random() * 2 - 1;
        }

        // Project 3D coordinates to 2D
        const px = (star.x / star.z) * cx + cx;
        const py = (star.y / star.z) * cy + cy;

        // Draw star
        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z) * 2.5;
          const brightness = Math.floor((1 - star.z) * 255);
          
          ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${255})`;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: "#050510" }}
    />
  );
}
