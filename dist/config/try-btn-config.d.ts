import { TryBtnOptions } from '../interfaces/try-btn-options.interface';
import { Config } from './config';
export declare class TryBtnConfigConfig extends Config<TryBtnOptions> implements TryBtnOptions {
    readonly siblingSelector: string;
    readonly text: string;
    readonly className: string;
    readonly selectedClassName: string;
    get selector(): string;
    get selectedSelector(): string;
}
