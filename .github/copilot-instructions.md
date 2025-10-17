# Copilot Instructions for preact-htm-template

## Project Architecture

This is a **no-build, fully vendored** Preact+HTM single-page application (SPA). The entire application runs directly in the browser with zero build tooling or npm dependencies.

### Key Design Principles

1. **No Build Step**: All code runs directly in the browser as ES modules. Never suggest build tools, bundlers, or transpilers.
2. **Vendored Dependencies**: Preact and HTM are included as static files in `static/vendor/`. Do not suggest npm or package managers.
3. **Hash-Based Routing**: Navigation uses hash fragments (`#/path`) handled by the custom Router component, not query strings or HTML5 history API.

## Component Architecture

### Import Pattern
All components use this exact import style from the vendored Preact:
```javascript
import { html, useState, useEffect } from '../vendor/standalone-preact.esm.js';
```

- Use `html` tagged templates (HTM syntax) instead of JSX
- Use `h` for createElement when not using template syntax (see `Router.js` for example)

### HTM Template Syntax
Components use tagged template literals with `html`:
```javascript
return html`
    <div class="container">
        <button onClick=${handleClick}>Click Me</button>
        <${ChildComponent} prop=${value} />
    </div>
`;
```

**Critical**: Component interpolation requires `<${ComponentName} />` syntax, not `<ComponentName />`.

## Routing System

The custom Router (`static/components/Router.js`) handles client-side navigation:

- Routes defined as array: `{ path: '/', component: Home }`
- Wildcard route (`path: '*'`) for 404 handling
- Navigation via hash links: `<a href="#/path">`
- Router listens to `hashchange` events and re-renders on path changes
- No query parameters or path parameters currently supported

To add a new route:
1. Create component in `static/components/`
2. Import in `App.js`
3. Add to routes array: `{ path: '/newpage', component: NewPage }`
4. Add navigation link with `href="#/newpage"`

## Development Workflow

### Running Locally
Serve the project with any static file server:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in a browser.

**No build, compile, or watch commands exist or are needed.**

### File Structure
```
index.html              # Entry point, renders App into #app
static/
  components/           # All Preact components
  vendor/               # Vendored dependencies (don't modify)
  style.css            # Custom styles (Bootstrap loaded separately)
```

## Styling

- Bootstrap 5 CSS is vendored and loaded globally
- Use Bootstrap utility classes for styling
- Custom styles go in `static/style.css`
- Class names use `class=`, not `className` (HTM, not JSX)

## State Management

- Use Preact hooks (`useState`, `useEffect`) for component state
- No global state management library
- For shared state, lift state up to parent components and pass via props

## Common Patterns

### Event Handlers
```javascript
<button onClick=${handleClick}>Click</button>
```
Pass function references directly, no arrow functions needed in templates.

### Conditional Rendering
```javascript
${condition ? html`<div>Shown</div>` : null}
${menuOpen ? 'show' : ''}  // For class toggling
```

### Cleanup in useEffect
Always return cleanup functions for timers/listeners:
```javascript
useEffect(() => {
    const timer = setInterval(() => { /* ... */ }, 1000);
    return () => clearInterval(timer);
}, []);
```

## Adding New Features

When adding components:
1. Create new `.js` file in `static/components/`
2. Export component as named export: `export function MyComponent() { ... }`
3. Import with relative path: `import { MyComponent } from './MyComponent.js';`
4. Include `.js` extension in all imports (required for ES modules)

When adding external libraries:
- Download standalone browser builds to `static/vendor/`
- Use ES module versions when available (check [esm.sh](https://esm.sh/) or [jspm](https://jspm.org/))
- Import directly in components that need them
- The vendored `standalone-preact.esm.js` was generated using [Standalone Preact](https://standalonepreact.satge.net/)

## Browser Compatibility

- Targets modern browsers with ES module support (Chrome 61+, Firefox 60+, Safari 11+, Edge 79+)
- No polyfills or transpilation included
- If older browser support is needed, this template is not appropriate

## Important Constraints

**Never suggest:**
- Adding package.json or npm/yarn commands
- Build tools (webpack, vite, rollup, parcel, etc.)
- Transpilers (Babel, TypeScript compiler, etc.)
- CSS preprocessors (Sass, Less, PostCSS)
- Module bundlers or tree-shaking
- Hot module replacement or watch modes
- Any tool that requires a "build" or "compile" step

**If user requests these**, explain that this template's philosophy is zero-build simplicity, and suggest they use a different template if they need those features.
