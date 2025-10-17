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
        <div class="container mt-5 text-center p-4 border rounded shadow-sm">
            <h2 class="mb-4">Current Time</h2>
            <div class="display-1 mb-3 text-primary">
                ${formatTime(time)}
            </div>
            <p class="lead text-muted">
                ${formatDate(time)}
            </p>
            <a href="#/" class="btn btn-secondary mt-3">Back to Home</a>
        </div>
    `;
}
