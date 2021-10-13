import { TryBtnOptions } from '../interfaces/try-btn-options.interface';
import { Config } from './config';

export class TryBtnConfigConfig extends Config<TryBtnOptions> implements TryBtnOptions {
    public readonly siblingSelector: string = '.http-verb';
    public readonly text: string = 'TRY OUT';
    public readonly className: string = 'tryBtn';
    public readonly selectedClassName: string = 'selected';

    public get selector(): string {
        return `.${this.className}`;
    }

    public get selectedSelector(): string {
        return `${this.selector}.${this.selectedClassName}`;
    }
}