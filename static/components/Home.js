import { html } from '../vendor/standalone-preact.esm.js';

export function Home() {
    return html`
        <div class="max-w-5xl mx-auto mt-12 px-4">
            <div class="text-center mb-12">
                <h1 class="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Welcome to Preact+HTM
                </h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                    A simple, elegant single-page application template built with Preact and HTM,
                    featuring client-side hash-based routing.
                </p>
                <div class="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-2">
                    <span class="text-green-600 font-semibold">✨ Zero Build Tools</span>
                    <span class="text-green-600">•</span>
                    <span class="text-green-600 font-semibold">🚀 Fully Vendored</span>
                    <span class="text-green-600">•</span>
                    <span class="text-green-600 font-semibold">⚡ Lightning Fast</span>
                </div>
            </div>

            <!-- Key Features -->
            <div class="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                <div class="flex items-center mb-6">
                    <span class="text-5xl mr-4">🎯</span>
                    <h2 class="text-3xl font-bold text-gray-800">Key Features</h2>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                        <div class="flex items-start">
                            <span class="text-3xl mr-3">🚫</span>
                            <div>
                                <h3 class="font-bold text-lg text-blue-900 mb-2">No Build Step</h3>
                                <p class="text-blue-800 text-sm">
                                    No webpack, vite, or rollup needed. All code runs directly in the browser as ES modules. 
                                    Just serve the files with any static server and you're done!
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                        <div class="flex items-start">
                            <span class="text-3xl mr-3">📦</span>
                            <div>
                                <h3 class="font-bold text-lg text-purple-900 mb-2">Fully Vendored</h3>
                                <p class="text-purple-800 text-sm">
                                    Zero npm dependencies. Preact, HTM, and Twind are included as static files. 
                                    No package.json, no node_modules, no hassle.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-5 border border-pink-200">
                        <div class="flex items-start">
                            <span class="text-3xl mr-3">🎨</span>
                            <div>
                                <h3 class="font-bold text-lg text-pink-900 mb-2">Twind Runtime</h3>
                                <p class="text-pink-800 text-sm">
                                    Tailwind CSS utilities without the build step! Twind compiles utility classes 
                                    at runtime, giving you all the power of Tailwind with zero configuration.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
                        <div class="flex items-start">
                            <span class="text-3xl mr-3">🔄</span>
                            <div>
                                <h3 class="font-bold text-lg text-green-900 mb-2">Hash-Based Routing</h3>
                                <p class="text-green-800 text-sm">
                                    Simple client-side routing using URL hash fragments. No server configuration needed,
                                    works perfectly with GitHub Pages and any static host.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why No Build? -->
            <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-amber-200">
                <div class="flex items-center mb-4">
                    <span class="text-5xl mr-4">💡</span>
                    <h2 class="text-3xl font-bold text-gray-800">Why No Build?</h2>
                </div>
                <div class="space-y-3 text-gray-700">
                    <div class="flex items-start">
                        <span class="text-green-600 font-bold mr-2">✓</span>
                        <p><strong class="text-gray-800">Instant Development:</strong> Edit a file, refresh the browser. No waiting for rebuilds or hot module replacement.</p>
                    </div>
                    <div class="flex items-start">
                        <span class="text-green-600 font-bold mr-2">✓</span>
                        <p><strong class="text-gray-800">Zero Setup:</strong> Clone the repo, run a static server (like <code class="bg-amber-100 px-2 py-0.5 rounded text-sm">python3 -m http.server</code>), and start coding.</p>
                    </div>
                    <div class="flex items-start">
                        <span class="text-green-600 font-bold mr-2">✓</span>
                        <p><strong class="text-gray-800">Better Debugging:</strong> What you write is what runs. No transpilation, no source maps needed.</p>
                    </div>
                    <div class="flex items-start">
                        <span class="text-green-600 font-bold mr-2">✓</span>
                        <p><strong class="text-gray-800">Simpler Deployment:</strong> Upload files to any static host. No build scripts, no CI/CD complexity.</p>
                    </div>
                    <div class="flex items-start">
                        <span class="text-green-600 font-bold mr-2">✓</span>
                        <p><strong class="text-gray-800">Future-Proof:</strong> Built on web standards (ES modules). No tooling dependencies to maintain or update.</p>
                    </div>
                </div>
            </div>

            <!-- Demo Pages -->
            <div class="mb-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
                    <span class="text-4xl mr-2">🎮</span>
                    Try the Demo Pages
                </h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div class="flex items-center mb-4">
                            <span class="text-4xl mr-3">🕐</span>
                            <h5 class="text-2xl font-bold text-gray-800">Clock</h5>
                        </div>
                        <p class="text-gray-600 mb-4">
                            A live digital clock that updates every second, demonstrating Preact hooks (useEffect, useState) 
                            and real-time updates without any build tools.
                        </p>
                        <a 
                            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" 
                            href="#/clock"
                        >
                            View Clock →
                        </a>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div class="flex items-center mb-4">
                            <span class="text-4xl mr-3">🔢</span>
                            <h5 class="text-2xl font-bold text-gray-800">Counter</h5>
                        </div>
                        <p class="text-gray-600 mb-4">
                            An interactive counter showcasing state management, event handlers, and conditional styling
                            with HTM's template syntax—no JSX transpilation required.
                        </p>
                        <a 
                            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" 
                            href="#/counter"
                        >
                            Try Counter →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Tech Stack Documentation -->
            <div class="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8 shadow-xl mb-8">
                <div class="flex items-center mb-6">
                    <span class="text-5xl mr-4">📚</span>
                    <h2 class="text-3xl font-bold text-gray-800">Tech Stack</h2>
                </div>
                <div class="grid md:grid-cols-3 gap-4 mb-6">
                    <a 
                        class="block p-5 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-indigo-100 hover:border-indigo-300" 
                        href="https://preactjs.com/" 
                        target="_blank" 
                        rel="noopener"
                    >
                        <div class="font-bold text-xl text-indigo-600 mb-2">⚛️ Preact</div>
                        <div class="text-sm text-gray-700 mb-2">Fast 3kB alternative to React with the same modern API</div>
                        <div class="text-xs text-indigo-600 font-medium">React-compatible • Tiny size • Hooks support</div>
                    </a>
                    <a 
                        class="block p-5 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-purple-100 hover:border-purple-300" 
                        href="https://github.com/developit/htm" 
                        target="_blank" 
                        rel="noopener"
                    >
                        <div class="font-bold text-xl text-purple-600 mb-2">🏷️ HTM</div>
                        <div class="text-sm text-gray-700 mb-2">JSX-like syntax using tagged templates—no transpilation!</div>
                        <div class="text-xs text-purple-600 font-medium">Pure JavaScript • No build needed • Familiar syntax</div>
                    </a>
                    <a 
                        class="block p-5 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-pink-100 hover:border-pink-300" 
                        href="https://twind.style/" 
                        target="_blank" 
                        rel="noopener"
                    >
                        <div class="font-bold text-xl text-pink-600 mb-2">🎨 Twind</div>
                        <div class="text-sm text-gray-700 mb-2">Tailwind CSS utilities compiled at runtime in the browser</div>
                        <div class="text-xs text-pink-600 font-medium">Runtime CSS • All utilities • Zero config</div>
                    </a>
                </div>
                <div class="bg-white/50 rounded-lg p-4 border border-indigo-200">
                    <p class="text-sm text-gray-700">
                        <strong class="text-indigo-900">💡 Pro Tip:</strong> All dependencies are vendored in 
                        <code class="bg-indigo-100 px-2 py-0.5 rounded text-xs mx-1">static/vendor/</code>
                        and served as static files. No CDN dependencies, no version conflicts, complete offline support!
                    </p>
                </div>
            </div>

            <!-- Quick Start -->
            <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div class="flex items-center mb-6">
                    <span class="text-5xl mr-4">🚀</span>
                    <h2 class="text-3xl font-bold text-gray-800">Quick Start</h2>
                </div>
                <div class="space-y-4">
                    <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div class="font-semibold text-gray-800 mb-2">1. Clone or Download</div>
                        <code class="block bg-gray-900 text-green-400 px-4 py-2 rounded font-mono text-sm">
                            git clone https://github.com/jere-mie/preact-htm-template.git && cd preact-htm-template
                        </code>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div class="font-semibold text-gray-800 mb-2">2. Serve with Any Static Server</div>
                        <code class="block bg-gray-900 text-green-400 px-4 py-2 rounded font-mono text-sm mb-2">
                            python3 -m http.server 8000
                        </code>
                        <div class="text-xs text-gray-600">Or use: <code class="bg-gray-200 px-1 rounded">npx serve</code>, <code class="bg-gray-200 px-1 rounded">php -S localhost:8000</code>, or any other static server</div>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div class="font-semibold text-gray-800 mb-2">3. Open in Browser</div>
                        <div class="text-gray-700">Navigate to <code class="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-sm">http://localhost:8000</code></div>
                    </div>
                    <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-green-300">
                        <div class="font-bold text-green-800 mb-1">✨ That's it! No npm install, no build, no waiting.</div>
                        <div class="text-sm text-green-700">Start editing components and refresh to see changes instantly.</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
