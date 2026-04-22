import React, { useState, useEffect } from "react";

const PHASES = [
  { emoji: "🐕", label: "walk", duration: 6000, speed: "2.5s", bounce: "0.3s" },
  { emoji: "🐕", label: "trot", duration: 5000, speed: "1.6s", bounce: "0.25s" },
  { emoji: "🐕", label: "run", duration: 4000, speed: "0.9s", bounce: "0.18s" },
  { emoji: "🐕", label: "sprint", duration: 4000, speed: "0.5s", bounce: "0.12s" },
  { emoji: "🐕‍🦺", label: "tired", duration: 4000, speed: "3s", bounce: "0.6s" },
];

const TOTAL_CYCLE = PHASES.reduce((s, p) => s + p.duration, 0);

export const DogAnimation: React.FC = () => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((e) => (e + 200) % TOTAL_CYCLE);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  let acc = 0;
  let phase = PHASES[0];
  for (const p of PHASES) {
    acc += p.duration;
    if (elapsed < acc) { phase = p; break; }
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="text-2xl select-none"
        style={{
          animation: `dog-bounce ${phase.bounce} ease-in-out infinite alternate, dog-move ${phase.speed} linear infinite`,
          display: "inline-block",
        }}
      >
        {phase.emoji}
      </div>
      <style>{`
        @keyframes dog-bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-4px); }
        }
        @keyframes dog-move {
          0% { margin-left: -20px; }
          50% { margin-left: 20px; }
          100% { margin-left: -20px; }
        }
      `}</style>
    </div>
  );
};
