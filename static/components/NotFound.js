import { html } from '../vendor/standalone-preact.esm.js';

export function NotFound() {
    return html`
        <div class="container mt-5 text-center p-4">
            <h1 class="display-1 text-muted">404</h1>
            <h2 class="mb-4">Page Not Found</h2>
            <p class="lead mb-4">
                The page you're looking for doesn't exist.
            </p>
            <a href="#/" class="btn btn-primary">Go Home</a>
        </div>
    `;
}
