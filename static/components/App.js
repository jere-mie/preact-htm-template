import { html, useState } from '../vendor/standalone-preact.esm.js';
import { Router } from './Router.js';
import { Home } from './Home.js';
import { Clock } from './Clock.js';
import { Counter } from './Counter.js';
import { NotFound } from './NotFound.js';

export function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const routes = [
        { path: '/', component: Home },
        { path: '/clock', component: Clock },
        { path: '/counter', component: Counter },
        { path: '*', component: NotFound }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return html`
        <div class="min-h-screen">
            <header class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
                <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <a class="font-bold text-2xl tracking-tight hover:text-indigo-100 transition-colors" href="#/">
                        <span class="inline-block transform hover:scale-105 transition-transform">✨ Preact+HTM</span>
                    </a>

                    <button
                        class="md:hidden text-white focus:outline-none hover:bg-white/20 rounded-lg p-2 transition-colors"
                        type="button"
                        onClick=${toggleMenu}
                        aria-expanded=${menuOpen}
                        aria-label="Toggle navigation"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>

                    <nav class="hidden md:flex space-x-2">
                        <a class="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 font-medium" href="#/" onClick=${toggleMenu}>Home</a>
                        <a class="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 font-medium" href="#/clock" onClick=${toggleMenu}>Clock</a>
                        <a class="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 font-medium" href="#/counter" onClick=${toggleMenu}>Counter</a>
                    </nav>
                </div>

                <div class="md:hidden ${menuOpen ? 'block' : 'hidden'} px-4 pb-4 bg-black/10">
                    <div class="flex flex-col space-y-2">
                        <a class="block text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors font-medium" href="#/" onClick=${toggleMenu}>Home</a>
                        <a class="block text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors font-medium" href="#/clock" onClick=${toggleMenu}>Clock</a>
                        <a class="block text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors font-medium" href="#/counter" onClick=${toggleMenu}>Counter</a>
                    </div>
                </div>
            </header>

            <main class="pb-12">
                <${Router} routes=${routes} />
            </main>
        </div>
    `;
}
