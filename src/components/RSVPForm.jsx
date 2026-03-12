import { useState } from 'react';

export default function RSVPForm() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    if (status === 'success') {
        return (
            <div className="text-center p-8 sm:p-10 bg-white/80 backdrop-blur-md rounded-2xl border border-gold-200">
                <h3 className="text-xl sm:text-2xl font-serif text-gray-800">¡Confirmado!</h3>
                <p className="text-sm sm:text-base text-gray-600">Tu respuesta se guardó correctamente.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto px-5 py-7 sm:p-8 bg-white rounded-2xl shadow-sm space-y-4 border border-gray-100">
            <input type="text" placeholder="Nombre completo" required className="w-full border-b p-2 text-sm sm:text-base outline-none focus:border-[#D4AF37]" />
            <select className="w-full border-b p-2 text-sm sm:text-base outline-none bg-transparent">
                <option>Asistiré con gusto</option>
                <option>No podré asistir</option>
            </select>
            <button className="w-full bg-[#333] text-white py-3 rounded-lg hover:bg-[#D4AF37] transition-all tracking-widest text-xs sm:text-sm">
                {status === 'loading' ? 'ENVIANDO...' : 'CONFIRMAR'}
            </button>
        </form>
    );
}