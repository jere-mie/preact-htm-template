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
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#/">Preact+HTM Template</a>
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        onClick=${toggleMenu}
                        aria-expanded=${menuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ${menuOpen ? 'show' : ''}">
                        <div class="navbar-nav">
                            <a class="nav-link" href="#/" onClick=${toggleMenu}>Home</a>
                            <a class="nav-link" href="#/clock" onClick=${toggleMenu}>Clock</a>
                            <a class="nav-link" href="#/counter" onClick=${toggleMenu}>Counter</a>
                        </div>
                    </div>
                </div>
            </nav>
            <${Router} routes=${routes} />
        </div>
    `;
}
