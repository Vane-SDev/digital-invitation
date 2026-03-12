import { useState } from 'react';

export default function RSVPForm() {
    const [status, setStatus] = useState('idle');
    const [formData, setFormData] = useState({
        name: '',
        attending: '', 
        dietary: '',
        song: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAttendingChange = (status) => {
        setFormData(prev => ({ ...prev, attending: status }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de seguridad para la UI
        if (!formData.attending) {
            alert("Por favor, indícanos si asistirás seleccionando una de las opciones.");
            return;
        }

        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="text-center py-10 animate-reveal">
                <div className="w-20 h-20 mx-auto border-px border-[#C5A059] rounded-full flex items-center justify-center mb-6 bg-[#C5A059]/5">
                    <svg className="w-8 h-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-3xl font-serif italic mb-3 text-gray-900">¡Confirmación Recibida!</h3>
                <p className="text-gray-500 text-sm font-light">
                    {formData.attending === 'yes'
                        ? "Qué alegría contar contigo. Te esperamos para celebrar."
                        : "Lamentamos que no puedas venir, te tendremos presente."}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left w-full max-w-md mx-auto">

            {/* Campo: Nombre */}
            <div className="relative">
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 focus:outline-none focus:border-[#C5A059] transition-colors placeholder-transparent"
                    placeholder="Nombre Completo"
                />
                <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-widest text-gray-400 font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#C5A059]"
                >
                    Nombre y Apellido
                </label>
            </div>

            {/* Tarjetas de Asistencia */}
            <div>
                <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold text-center">
                    ¿Nos acompañas?
                </span>
                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={() => handleAttendingChange('yes')}
                        className={`py-6 px-4 border rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${formData.attending === 'yes'
                                ? 'border-[#C5A059] bg-[#C5A059]/5 shadow-sm scale-[1.02]'
                                : 'border-gray-100 hover:border-gray-300 bg-white hover:bg-gray-50'
                            }`}
                    >
                        <span className={`font-serif text-2xl italic mb-1 ${formData.attending === 'yes' ? 'text-[#C5A059]' : 'text-gray-900'}`}>Sí</span>
                        <span className="text-[9px] uppercase tracking-widest text-gray-400">Ahí estaré</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleAttendingChange('no')}
                        className={`py-6 px-4 border rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${formData.attending === 'no'
                                ? 'border-gray-800 bg-gray-900 text-white shadow-sm scale-[1.02]'
                                : 'border-gray-100 hover:border-gray-300 bg-white hover:bg-gray-50'
                            }`}
                    >
                        <span className={`font-serif text-2xl italic mb-1 ${formData.attending === 'no' ? 'text-white' : 'text-gray-900'}`}>No</span>
                        <span className={`text-[9px] uppercase tracking-widest ${formData.attending === 'no' ? 'text-gray-400' : 'text-gray-400'}`}>No podré ir</span>
                    </button>
                </div>
            </div>

            {/* Sugerencia de Canción  */}
            <div className={`transition-all duration-500 overflow-hidden ${formData.attending === 'yes' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="relative mt-2">
                    <input
                        type="text"
                        id="song"
                        name="song"
                        value={formData.song}
                        onChange={handleChange}
                        className="peer w-full border-b border-gray-300 bg-transparent py-2 pl-8 text-gray-900 focus:outline-none focus:border-[#C5A059] transition-colors placeholder-transparent"
                        placeholder="¿Qué canción no puede faltar?"
                    />
                    <svg className="w-4 h-4 text-gray-400 absolute left-0 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    <label
                        htmlFor="song"
                        className="absolute left-8 -top-3.5 text-[10px] uppercase tracking-widest text-gray-400 font-bold transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#C5A059]"
                    >
                        ¿Qué canción no puede faltar? (Opcional)
                    </label>
                </div>
            </div>

            {/* Campo: Restricciones Alimenticias */}
            <div className="relative mt-2">
                <input
                    type="text"
                    id="dietary"
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    className="peer w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 focus:outline-none focus:border-[#C5A059] transition-colors placeholder-transparent"
                    placeholder="Menú Especial / Alergias"
                />
                <label
                    htmlFor="dietary"
                    className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-widest text-gray-400 font-bold transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#C5A059]"
                >
                    Menú Especial / Alergias (Opcional)
                </label>
            </div>

            {/* Botón de Envío */}
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 w-full bg-gray-900 text-white py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#C5A059] transition-colors disabled:opacity-80 flex justify-center items-center h-14"
            >
                {status === 'submitting' ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : (
                    'Enviar Confirmación'
                )}
            </button>
        </form>
    );
}