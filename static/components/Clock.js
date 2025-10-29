import { html, useState, useEffect } from '../vendor/standalone-preact.esm.js';

export function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return html`
        <div class="max-w-3xl mx-auto mt-12 px-4">
            <div class="bg-white rounded-2xl shadow-2xl p-10 text-center border border-gray-100">
                <div class="mb-6">
                    <span class="text-6xl">🕐</span>
                </div>
                <h2 class="text-3xl font-bold mb-8 text-gray-800">Live Clock</h2>
                
                <div class="mb-8">
                    <div class="inline-block px-12 py-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300">
                        <div class="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 font-mono tracking-tight">
                            ${formatTime(time)}
                        </div>
                        <div class="text-lg md:text-xl text-gray-600 font-medium">
                            ${formatDate(time)}
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                        <div class="text-2xl font-bold text-purple-600">${time.getHours().toString().padStart(2, '0')}</div>
                        <div class="text-xs text-purple-600 font-medium mt-1">Hours</div>
                    </div>
                    <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 border border-pink-200">
                        <div class="text-2xl font-bold text-pink-600">${time.getMinutes().toString().padStart(2, '0')}</div>
                        <div class="text-xs text-pink-600 font-medium mt-1">Minutes</div>
                    </div>
                    <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 border border-indigo-200">
                        <div class="text-2xl font-bold text-indigo-600">${time.getSeconds().toString().padStart(2, '0')}</div>
                        <div class="text-xs text-indigo-600 font-medium mt-1">Seconds</div>
                    </div>
                </div>
                
                <div class="pt-6 border-t border-gray-200">
                    <a 
                        href="#/" 
                        class="inline-flex items-center text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    `;
}
