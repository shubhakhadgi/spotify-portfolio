import React, { useState, useRef } from "react";

const FloatingImage = () => {
  const containerRef = useRef(null);
  const [style, setStyle] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    setIsHovering(true);

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

setStyle({
  transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
  transition: "transform 0.1s ease-out",
  transformStyle: "preserve-3d",
  willChange: "transform",
});

  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.6s ease-in-out",
      transformStyle: "preserve-3d",
      willChange: "transform",
    });
  };

  return (
    <div
      ref={containerRef}
      className={`flex-shrink-0 py-8 md:mt-0 cursor-pointer ${
        isHovering ? "" : "animate-floating3d"
      }`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive floating image"
      role="img"
    >
      <img
        src="assets/img/floating-img.webp"
        alt="Floating 3D element"
        className="w-80 sm:w-96 md:w-[28rem] me-0 md:me-16 mx-auto md:mx-0 pointer-events-none select-none"
        loading="eager"
        fetchPriority="high"
        draggable={false}
        style={{ imageRendering: "auto" }}
      />
    </div>
  );
};

export default FloatingImage;
