import { RedocTryItOutOptions, DependenciesVersions } from '../interfaces/redoc-try-it-out-options.interface';
import { Config } from './config';
export declare class RedocTryItOutConfig extends Config<RedocTryItOutOptions> implements RedocTryItOutOptions {
    readonly docUrl: any;
    readonly element?: HTMLElement;
    private readonly _containerId;
    private readonly _operationBoxSelector;
    readonly tryItOutEnabled: boolean;
    readonly tryItBoxContainerId: string;
    readonly redocVersion: string;
    readonly selectedOperationClass: string;
    readonly dependenciesVersions: DependenciesVersions;
    constructor(docUrl: string, cfg: RedocTryItOutOptions, element?: HTMLElement);
    private get elementId();
    get tryItBoxSelector(): string;
    get version(): string;
    get containerId(): string;
    get containerSelector(): string;
    get operationBoxSelector(): string;
    get bundleUrl(): string;
    get tryItDependencies(): {
        jqueryUrl: string;
        jqueryScrollToUrl: string;
    };
}
