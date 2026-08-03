/// <reference types="jquery" />
/// <reference types="jquery.scrollto" />
import { TryBtnConfigConfig } from '../config/try-btn-config';
export declare class TryBtn {
    static cfg: TryBtnConfigConfig;
    private static get $sibling();
    static isSelected($btn: JQuery): boolean;
    static unselectAll(): void;
    static select($btn: JQuery): void;
    static get $selected(): JQuery;
    static get $btn(): JQuery;
    static init(): void;
}
