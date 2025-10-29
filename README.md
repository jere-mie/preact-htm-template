# Preact+HTM Template

A minimal, **zero-build** single-page application (SPA) template using Preact and HTM. No npm, no webpack, no transpilation — just pure ES modules running directly in the browser.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## ✨ Features

- 🚀 **No Build Step** - Write code, refresh browser, see changes instantly
- 📦 **Fully Vendored** - All dependencies included as static files
- 🎯 **Modern Stack** - Preact + HTM for reactive components
- 🧭 **Client-Side Routing** - Hash-based routing with custom router
-- 🎨 **Twind (Tailwind-compatible)** - Utility-first styling provided at runtime via the vendored Twind runtime
- 🔧 **Zero Configuration** - No package.json, no build tools, no setup
- 🤖 **AI-Ready** - Enhanced for AI-assisted development with comprehensive [Copilot instructions](.github/copilot-instructions.md)

## 🚀 Quick Start

Choose any of these and you're ready:

- Use the "Use this template" button on GitHub, or fork/download the repo.
- Clone locally and serve:

```bash
git clone https://github.com/jere-mie/preact-htm-template.git
cd preact-htm-template
python3 -m http.server 8000
# then open http://localhost:8000
```

That's all — no build, no setup.

## 🏃 Running the Application

Serve the directory with any static file server:

### Python (comes with most systems)
```bash
python3 -m http.server 8000
```

### Node.js (if you have it)
```bash
npx http-server -p 8000
```

### PHP
```bash
php -S localhost:8000
```

Then open your browser to `http://localhost:8000`

**That's it!** No installation, no build, no wait.

## 📂 Project Structure

```
.
├── index.html                      # Entry point
├── static/
│   ├── components/
│   │   ├── App.js                 # Root component with navbar
│   │   ├── Router.js              # Hash-based routing logic
│   │   ├── Home.js                # Home page
│   │   ├── Clock.js               # Example: live clock component
│   │   ├── Counter.js             # Example: interactive counter
│   │   └── NotFound.js            # 404 page
│   ├── vendor/
│   │   ├── standalone-preact.esm.js  # Preact + Hooks + HTM bundle
│   │   └── twind.cdn.js               # Twind runtime (Tailwind-compatible utilities)
│   └── style.css                  # Custom styles (optional overrides)
└── LICENSE                         # MIT License
```

## 🛠️ Building Your App

### Creating a New Component

1. Create a file in `static/components/`:

```javascript
// static/components/MyComponent.js
import { html, useState } from '../vendor/standalone-preact.esm.js';

export function MyComponent({ name }) {
    const [count, setCount] = useState(0);
    
    return html`
        <div class="max-w-3xl mx-auto mt-5 px-4">
            <h2 class="text-xl font-semibold">Hello, ${name}!</h2>
            <p class="mt-2">Count: ${count}</p>
            <button onClick=${() => setCount(count + 1)} class="mt-3 bg-blue-600 text-white px-3 py-2 rounded">
                Increment
            </button>
        </div>
    `;
}
```

### Adding a New Route

2. Import and register in `static/components/App.js`:

```javascript
import { MyComponent } from './MyComponent.js';

const routes = [
    { path: '/', component: Home },
    { path: '/my-page', component: MyComponent },
    // ... other routes
];
```

3. Add a navigation link:

```html
<a href="#/my-page" class="nav-link">My Page</a>
```

### Key Concepts

#### HTM Template Syntax
Use tagged template literals with `html`:
```javascript
html`<div class="alert">${message}</div>`
```

#### Component Interpolation
Components require special syntax:
```javascript
html`<${MyComponent} prop=${value} />`
```

#### Event Handlers
Pass function references directly:
```javascript
html`<button onClick=${handleClick}>Click</button>`
```

#### Conditional Rendering
```javascript
html`
    <div>
        ${isLoggedIn ? html`<p>Welcome!</p>` : html`<p>Please log in</p>`}
    </div>
`
```

## 📚 Documentation

- **[Preact](https://preactjs.com/)** - Fast 3kB React alternative
- **[HTM](https://github.com/developit/htm)** - JSX-like syntax using template literals
- **[Preact Hooks](https://preactjs.com/guide/v10/hooks/)** - useState, useEffect, etc.
- **[Preact Signals](https://preactjs.com/guide/v10/signals/)** - lightweight reactive primitives (signal, useSignal) available in the vendored bundle
- **[Twind](https://twind.style/)** - Tailwind-compatible runtime used in this template
- **[Standalone Preact](https://standalonepreact.satge.net/)** - Tool used to generate the vendored bundle

## 💻 VS Code Setup (Recommended)

For the best development experience with HTM template literals, install one of these extensions:

- **[lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)** - Syntax highlighting and IntelliSense for html tagged templates
- **[Inline HTML](https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html)** - IntelliSense, Emmet and Syntax Highlighting for html/css in ES6 template strings

These extensions provide:
- 🎨 Syntax highlighting inside `` html`...` `` tags
- ✨ HTML IntelliSense and autocomplete
- 🔍 Proper code folding
- 🐛 Better error detection

**Installation:**
```
code --install-extension bierner.lit-html
# or
code --install-extension pushqrdx.inline-html
```

Or search for "lit-html" or "Inline HTML" in VS Code's Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`).

## 🎯 Use Cases

Perfect for:
- 📝 Prototypes and MVPs
- 🎓 Learning modern web development
- 🚀 Quick demos and landing pages
- 🔬 Experimenting with ideas
- 📦 Projects where simplicity > complexity

## 🔌 Adding External Libraries

Download standalone browser builds and place them in `static/vendor/`:

```javascript
// Use ES module versions when available
import { something } from '../vendor/library.esm.js';
```

Popular libraries with browser builds:
- [date-fns](https://cdn.jsdelivr.net/npm/date-fns@3.0.0/+esm)
- [marked](https://cdn.jsdelivr.net/npm/marked/+esm) (Markdown)
- [DOMPurify](https://cdn.jsdelivr.net/npm/dompurify/+esm) (XSS sanitization)

Use [esm.sh](https://esm.sh/) or [jspm](https://jspm.org/) to get ES module versions.

## 🚢 Deployment

This is a static site and can be hosted anywhere that serves static files (GitHub Pages, Netlify, Vercel, CDNs, or any web server). No build step or special configuration required — just publish the project files.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📄 License

This template is licensed under the [MIT License](LICENSE).

### Included Libraries

- **Preact** - MIT License ([preactjs/preact](https://github.com/preactjs/preact))
- **HTM** - Apache License 2.0 ([developit/htm](https://github.com/developit/htm))
- **Twind** - MIT License (Twind runtime vendored in `static/vendor/twind.cdn.js`)

The vendored `standalone-preact.esm.js` bundle includes Preact, Preact Hooks, and HTM. The Twind runtime is vendored separately and applies Tailwind-compatible utility classes at runtime.

## 💡 Philosophy

This template embraces simplicity:
- No build step means no build step failures
- Vendored dependencies mean no version conflicts
- Direct browser execution means instant feedback
- Minimal abstractions mean easier debugging

Modern browsers are powerful. Sometimes, that's all you need.

## 🙋 FAQ

**Q: Can I use TypeScript?**  
A: Not directly, since there's no build step. However, you can use JSDoc comments for type checking in VS Code.

**Q: How do I handle environment variables?**  
A: Create a `config.js` module and import it. Don't commit secrets to git.

**Q: Can I add a CSS preprocessor?**  
A: Not without a build step, which defeats the purpose. Use vanilla CSS or CSS custom properties.

**Q: What about older browsers?**  
A: This template targets modern browsers with ES module support (Chrome 61+, Firefox 60+, Safari 11+, Edge 79+).

**Q: Is this production-ready?**  
A: Yes, for appropriate use cases. It's perfect for internal tools, demos, and small apps where simplicity is valued over optimization.

## 🔗 Links

- [Repository](https://github.com/jere-mie/preact-htm-template)
- [Issues](https://github.com/jere-mie/preact-htm-template/issues)
- [Discussions](https://github.com/jere-mie/preact-htm-template/discussions)

---

**Made with ❤️ by [Jeremie Bornais](https://github.com/jere-mie)**

*Star this repo if you find it helpful!* ⭐