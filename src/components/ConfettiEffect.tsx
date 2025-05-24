import React, { useEffect, useState } from 'react';

interface ConfettiEffectProps {
  active: boolean;
  duration?: number; // Duration in milliseconds
  particleCount?: number;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({
  active,
  duration = 3000,
  particleCount = 50
}) => {
  const [isVisible, setIsVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
      
      // Hide confetti after duration
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [active, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(particleCount)].map((_, i) => {
          // Generate random colors and sizes for particles
          const hue = Math.random() * 360;
          const size = Math.random() * 10 + 5;
          const left = Math.random() * 100;
          const animationDuration = Math.random() * 3 + 2;
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * -10}%`, // Start above viewport
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `hsl(${hue}, 100%, 50%)`,
                borderRadius: '50%',
                animation: `fall ${animationDuration}s linear forwards`,
              }}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ConfettiEffect; 