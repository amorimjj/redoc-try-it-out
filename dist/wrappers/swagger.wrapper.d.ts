/// <reference types="jquery" />
/// <reference types="jquery.scrollto" />
import { SwaggerConfig } from '../config/swagger-config';
import { CallbackFunction } from "../interfaces/swagger-options.interface";
export declare class SwaggerWrapper {
    static cfg: SwaggerConfig;
    static get $box(): JQuery;
    private static get $authorizeBtn();
    private static get $authorizeModalCloseTriggers();
    private static operationSummarySelector;
    private static get $selectedContainerElements();
    static get hasAuth(): boolean;
    static init(): Promise<void>;
    static hide(): void;
    static show(): void;
    static showAuthModal(): void;
    static hideAuthModal(): void;
    static onCloseAuthModal(event: CallbackFunction): void;
    static selectApiSection(api: string, method: string): void;
}
