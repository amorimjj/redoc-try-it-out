import { AuthBtnOptions } from '../interfaces/auth-btn-options.interface';
import { Config } from './config';

export class AuthBtnConfig extends Config<AuthBtnOptions> implements AuthBtnOptions {
    public readonly posSelector: string = 'h1:eq(0)';
    public readonly text: string = 'AUTHORIZE';
    public readonly className: string = '_auth-btn';
    public readonly tryItOutEnabled: boolean = false;

    public constructor(cfg:AuthBtnOptions) {
        super(cfg);
        this.tryItOutEnabled = cfg.tryItOutEnabled;
        if (cfg.posSelector) { this.posSelector = cfg.posSelector }
        if (cfg.text) { this.text = cfg.text }
        if (cfg.className) { this.className = cfg.className }
    }
}