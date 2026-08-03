/// <reference types="jquery" />
/// <reference types="jquery.scrollto" />
import { RedocTryItOutConfig } from '../config/redoc-try-it-out-config';
export declare class RedocWrapper {
    static cfg: RedocTryItOutConfig;
    private static get $operationBox();
    private static get $apiInfoContainer();
    private static get apiContainer();
    static get $tryItBoxContainer(): JQuery;
    private static moveTryApiContainer;
    private static get domElement();
    static init(): Promise<void>;
    static configureTryBox(): void;
    static hide(): void;
    static fixScrollPosition(): void;
    static getCurrentApiInfo(): {
        api: string;
        method: string;
    };
}
