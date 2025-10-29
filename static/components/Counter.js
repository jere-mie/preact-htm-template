import { html, useState } from '../vendor/standalone-preact.esm.js';

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return html`
        <div class="max-w-3xl mx-auto mt-12 px-4">
            <div class="bg-white rounded-2xl shadow-2xl p-10 text-center border border-gray-100">
                <div class="mb-6">
                    <span class="text-6xl">🔢</span>
                </div>
                <h2 class="text-3xl font-bold mb-8 text-gray-800">Interactive Counter</h2>
                
                <div class="mb-10">
                    <div class="inline-block px-12 py-8 rounded-2xl ${count > 0 ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300' : count < 0 ? 'bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-300' : 'bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-300'} transition-all duration-300">
                        <div class="text-7xl font-extrabold ${count > 0 ? 'text-green-600' : count < 0 ? 'text-red-600' : 'text-gray-500'}">
                            ${count}
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <button 
                        onClick=${increment} 
                        class="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center sm:order-3"
                    >
                        <span class="text-2xl mr-2 group-hover:scale-110 transition-transform">+</span>
                        Increment
                    </button>
                    <button 
                        onClick=${reset} 
                        class="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:from-gray-300 hover:to-gray-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 sm:order-2"
                    >
                        ↻ Reset
                    </button>
                    <button 
                        onClick=${decrement} 
                        class="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center sm:order-1"
                    >
                        <span class="text-2xl mr-2 group-hover:scale-110 transition-transform">−</span>
                        Decrement
                    </button>
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
