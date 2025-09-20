import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-03T00:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p className="text-sm text-white/70 mb-4">Faltan para el evento:</p>
      <div className="flex justify-center gap-8 text-center">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-neon-yellow">{timeLeft.days}</span>
          <span className="text-xs uppercase tracking-wider text-white/70">Días</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-neon-cyan">{timeLeft.hours}</span>
          <span className="text-xs uppercase tracking-wider text-white/70">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-neon-yellow">{timeLeft.minutes}</span>
          <span className="text-xs uppercase tracking-wider text-white/70">Minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-neon-cyan">{timeLeft.seconds}</span>
          <span className="text-xs uppercase tracking-wider text-white/70">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;