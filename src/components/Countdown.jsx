import { useState, useEffect } from 'react';

export default function Countdown() {
    const target = new Date("2026-12-20T21:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({ dias: 0, hs: 0, min: 0, seg: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = target - now;
            if (diff <= 0) return clearInterval(timer);

            setTimeLeft({
                dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hs: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                min: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seg: Math.floor((diff % (1000 * 60)) / 1000)
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-wrap gap-4 sm:gap-6 text-center justify-center">
            {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="flex flex-col min-w-70px">
                    <span className="text-3xl sm:text-4xl font-serif text-[#D4AF37]">
                        {value}
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
}