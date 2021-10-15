import { RedocTryItOut } from './module';

declare global {
    interface Window { RedocTryItOut: RedocTryItOut; }
}

window.RedocTryItOut = window.RedocTryItOut || RedocTryItOut;