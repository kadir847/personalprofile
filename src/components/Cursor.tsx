import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(useMotionValue(-100), { stiffness: 150, damping: 20 });
  const ringY = useSpring(useMotionValue(-100), { stiffness: 150, damping: 20 });
  const ringScale = useSpring(1, { stiffness: 200, damping: 20 });
  const dotScale = useSpring(1, { stiffness: 200, damping: 20 });

  const ringXBase = useMotionValue(-100);
  const ringYBase = useMotionValue(-100);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringXBase.set(e.clientX);
      ringYBase.set(e.clientY);
    };

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [data-cursor="pointer"]')) {
        ringScale.set(1.8);
        dotScale.set(0);
      }
    };

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [data-cursor="pointer"]')) {
        ringScale.set(1);
        dotScale.set(1);
      }
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleEnter);
    document.addEventListener('mouseout', handleLeave);

    // Sync spring values with base
    const unsubX = ringXBase.on('change', (v) => ringX.set(v));
    const unsubY = ringYBase.on('change', (v) => ringY.set(v));

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleEnter);
      document.removeEventListener('mouseout', handleLeave);
      unsubX();
      unsubY();
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot hidden lg:block"
        style={{ left: dotX, top: dotY, scale: dotScale }}
      />
      <motion.div
        className="cursor-ring hidden lg:block"
        style={{ left: ringX, top: ringY, scale: ringScale }}
      />
    </>
  );
}