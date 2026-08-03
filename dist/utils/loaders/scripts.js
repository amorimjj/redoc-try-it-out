"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadScript = void 0;
function loadScript(src) {
    const loader = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = resolve;
        script.onerror = reject;
        script.src = src;
        document.head.append(script);
    });
    return loader;
}
exports.loadScript = loadScript;
