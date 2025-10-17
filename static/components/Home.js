import { html } from '../vendor/standalone-preact.esm.js';

export function Home() {
    return html`
        <div class="container mt-5">
            <h1 class="display-4 mb-4">Welcome to Preact+HTM Template</h1>
            <p class="lead">
                This is a simple single-page application template built with Preact and HTM,
                featuring client-side hash-based routing.
            </p>
            
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Example Pages</h5>
                    <ul>
                        <li><a href="#/clock">Clock</a> - A live digital clock</li>
                        <li><a href="#/counter">Counter</a> - An interactive counter</li>
                    </ul>
                </div>
            </div>

            <div class="alert alert-info mt-4">
                <h5 class="alert-heading">Documentation</h5>
                <ul class="mb-0">
                    <li><a href="https://preactjs.com/" target="_blank" rel="noopener">Preact Documentation</a></li>
                    <li><a href="https://github.com/developit/htm" target="_blank" rel="noopener">HTM (JSX Alternative)</a></li>
                    <li><a href="https://getbootstrap.com/docs/5.3/" target="_blank" rel="noopener">Bootstrap Documentation</a></li>
                </ul>
            </div>
        </div>
    `;
}
