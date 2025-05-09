// src/components/MouseFollowCircle.jsx
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const MouseFollowCircle = () => {
  const [circleRef, setCircleRef] = useState(null);

  useEffect(() => {
    if (!circleRef) return;

    const moveCircle = (e) => {
      gsap.to(circleRef, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', moveCircle);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, [circleRef]);

  return (
    <div
      ref={setCircleRef}
      className="fixed w-10 h-10 rounded-full bg-orange-600 opacity-60 pointer-events-none z-50"
      style={{
        transform: 'translate(-50%, -50%)',
        width: '30px',
        height: '30px',
        borderRadius: '50%'
      }}
    />
  );
};

export default MouseFollowCircle;
