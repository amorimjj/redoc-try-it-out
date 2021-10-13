export function loadStylesheet(stylesheetUrl: string): void {
    const link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = stylesheetUrl;
    document.head.appendChild(link);
}