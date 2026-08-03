"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadStylesheet = void 0;
function loadStylesheet(stylesheetUrl) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheetUrl;
    document.head.appendChild(link);
}
exports.loadStylesheet = loadStylesheet;
