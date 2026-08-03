import { AuthBtnOptions } from '../interfaces/auth-btn-options.interface';
import { Config } from './config';
export declare class AuthBtnConfig extends Config<AuthBtnOptions> implements AuthBtnOptions {
    readonly posSelector: string;
    readonly text: string;
    readonly className: string;
}
