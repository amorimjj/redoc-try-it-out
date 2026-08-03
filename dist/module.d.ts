import { RedocTryItOutOptions } from './interfaces/redoc-try-it-out-options.interface';
export declare class RedocTryItOut {
    private static loadDependencies;
    private static loadAll;
    private static config;
    static init(docUrl: string, cfg: RedocTryItOutOptions, element?: HTMLElement): Promise<void>;
}
