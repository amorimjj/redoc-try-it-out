import { RedocTryItOutOptions, DependenciesVersions } from '../interfaces/redoc-try-it-out-options.interface';
import { Config } from './config';
import { InvalidElementError } from '../errors/invalid-element.error';
import { AuthBtnOptions } from '../interfaces/auth-btn-options.interface';
import { TryBtnOptions } from '../interfaces/try-btn-options.interface';
import { StyleMatcherOptions } from '../interfaces/style-matcher-options.interface';

declare let $: any;

export class RedocTryItOutConfig extends Config<RedocTryItOutOptions> implements RedocTryItOutOptions {

    public readonly docUrl;
    public readonly element?: HTMLElement;

    private readonly _containerId: string = 'redoc-container';
    private readonly _operationBoxSelector: string = '[data-section-id]';

    public tryItOutEnabled = false;
    public tryItBoxContainerId = 'try-out-wrapper';
    public redocVersion = '2.0.0-rc.56';
    public selectedOperationClass = 'try';
    public options: RedocTryItOutOptions = {};
    public tryBtn: TryBtnOptions = { tryItOutEnabled: false };
    public authBtn: AuthBtnOptions = { tryItOutEnabled: false };
    public stylerMatcher: StyleMatcherOptions = { tryItOutEnabled: false, url: '' };

    public dependenciesVersions: DependenciesVersions = { jquery: '3.6.0', jqueryScrollTo: '2.1.2' };

    public constructor(docUrl: string, cfg:RedocTryItOutOptions, element?: HTMLElement) {
        super(cfg);
        this.docUrl = docUrl;
        this.element = element;

        this.options = cfg;

        if (cfg.tryItOutEnabled) { this.tryItOutEnabled = cfg.tryItOutEnabled }
        if (cfg.tryItBoxContainerId) { this.tryItBoxContainerId = cfg.tryItBoxContainerId }
        if (cfg.redocVersion) { this.redocVersion = cfg.redocVersion }
        if (cfg.authBtn) { this.authBtn = cfg.authBtn }
        if (cfg.tryBtn) { this.tryBtn = cfg.tryBtn }
        if (cfg.stylerMatcher) { this.stylerMatcher = cfg.stylerMatcher }
        if (cfg.dependenciesVersions) { this.dependenciesVersions = cfg.dependenciesVersions }
    }

    private get elementId(): string {
        const containerId = $(this.element).attr('id');

        if ( ! containerId ) {
            throw new InvalidElementError('redoc container element must have an id');
        }

        return containerId;
    }

    public get tryItBoxSelector(): string {
        return `#${this.tryItBoxContainerId}`;
    }

    public get version(): string {
        return this.redocVersion;
    }

    public get containerId(): string {
        return this.element ? this.elementId : this._containerId;
    }

    public get containerSelector(): string {
        return `#${this.containerId}`;
    }

    public get operationBoxSelector(): string {
        return `${this.containerSelector} ${this._operationBoxSelector}`;
    }

    public get bundleUrl(): string {
        return `${this.cdnUrl}/redoc@${this.version}/bundles/redoc.standalone.min.js`
    }

    public get tryItDependencies(): { jqueryUrl: string, jqueryScrollToUrl: string } {
        return {
            jqueryUrl: `${this.cdnUrl}/jquery@${this.dependenciesVersions.jquery}/dist/jquery.min.js`,
            jqueryScrollToUrl: `${this.cdnUrl}/jquery.scrollto@${this.dependenciesVersions.jqueryScrollTo}/jquery.scrollTo.min.js`
        }
    }
}