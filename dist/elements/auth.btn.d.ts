/// <reference types="jquery" />
/// <reference types="jquery.scrollto" />
import { AuthBtnConfig } from '../config/auth-btn-config';
export declare class AuthBtn {
    static cfg: AuthBtnConfig;
    static get $element(): JQuery;
    static init(): void;
}
