import React, { useState, useRef } from "react";

const FloatingImage = () => {
  const containerRef = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
    filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.2))",
    transition: "transform 0.3s ease, filter 0.3s ease",
    transformStyle: "preserve-3d",
    willChange: "transform",
  });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const shadowX = ((centerX - x) / centerX) * 15;
    const shadowY = ((centerY - y) / centerY) * 15;

    setStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      filter: `drop-shadow(${shadowX}px ${shadowY}px 15px rgba(0,0,0,0.3))`,
      transition: "transform 0.1s ease-out, filter 0.1s ease-out",
      transformStyle: "preserve-3d",
      willChange: "transform",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
      filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.2))", 
      transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
      transformStyle: "preserve-3d",
      willChange: "transform",
    });
  };

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 py-8 md:mt-0 cursor-pointer"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive floating image"
      role="img"
    >
      <img
        src="assets/img/floating-img.webp"
        alt="Floating 3D element"
        className="w-80 sm:w-96 md:w-[28rem] me-0 md:me-16 mx-auto md:mx-0"
        loading="eager"
        fetchPriority="high"
        draggable={false}
        style={{ imageRendering: "auto" }}
      />
    </div>
  );
};

export default FloatingImage;
