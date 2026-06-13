import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 700;
    const count = isMobile ? 15 : 30;
    const newParticles = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        startX: Math.random() * 100, // vw
        startY: 110, // vh (start below screen)
        endY: -10, // vh (end above screen)
        drift: (Math.random() - 0.5) * 20, // drift amount
        size: Math.random() * 4 + 2, // px
        duration: Math.random() * 15 + 15, // s
        delay: -Math.random() * 30, // s
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: `${p.startY}vh`, x: `${p.startX}vw`, opacity: 0 }}
          animate={{
            y: [`${p.startY}vh`, `${p.endY}vh`],
            x: [`${p.startX}vw`, `${p.startX + p.drift}vw`],
            opacity: [0, 0.4, 0.4, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            backgroundColor: 'var(--gl-cyan, #22d3ee)',
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
}
