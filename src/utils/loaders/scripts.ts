export function loadScript(src: string):Promise<any> {

    const loader = new Promise<any>((resolve, reject): void => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = resolve;
        script.onerror = reject;
        script.src = src;
        document.head.append(script);
    });

    return loader;
}