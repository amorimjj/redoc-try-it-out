import { AuthBtnOptions } from '../interfaces/auth-btn-options.interface';
import { Config } from './config';

export class AuthBtnConfig extends Config<AuthBtnOptions> implements AuthBtnOptions {
    public readonly posSelector: string = 'h1:eq(0)';
    public readonly text: string = 'AUTHORIZE';
    public readonly className: string = '_auth-btn';
}