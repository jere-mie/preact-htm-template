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
        <div class="container mt-5 text-center p-4 border rounded shadow-sm">
            <h2 class="mb-4">Counter</h2>
            <div class="display-1 mb-4 ${count > 0 ? 'text-success' : count < 0 ? 'text-danger' : 'text-secondary'}">
                ${count}
            </div>
            <div class="btn-group mb-3">
                <button onClick=${decrement} class="btn btn-danger btn-lg">
                    - Decrement
                </button>
                <button onClick=${reset} class="btn btn-secondary btn-lg">
                    Reset
                </button>
                <button onClick=${increment} class="btn btn-success btn-lg">
                    Increment +
                </button>
            </div>
            <div class="mt-3">
                <a href="#/" class="btn btn-outline-secondary">Back to Home</a>
            </div>
        </div>
    `;
}
