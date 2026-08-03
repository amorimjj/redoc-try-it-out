"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedocTryItOutConfig = void 0;
const config_1 = require("./config");
const invalid_element_error_1 = require("../errors/invalid-element.error");
class RedocTryItOutConfig extends config_1.Config {
    constructor(docUrl, cfg, element) {
        super(cfg);
        this._containerId = 'redoc-container';
        this._operationBoxSelector = '[data-section-id]';
        this.tryItOutEnabled = true;
        this.tryItBoxContainerId = 'try-out-wrapper';
        this.redocVersion = '2.0.0-rc.56';
        this.selectedOperationClass = 'try';
        this.dependenciesVersions = { jquery: '3.6.0', jqueryScrollTo: '2.1.2' };
        this.docUrl = docUrl;
        this.element = element;
    }
    get elementId() {
        const containerId = $(this.element).attr('id');
        if (!containerId) {
            throw new invalid_element_error_1.InvalidElementError('redoc container element must have an id');
        }
        return containerId;
    }
    get tryItBoxSelector() {
        return `#${this.tryItBoxContainerId}`;
    }
    get version() {
        return this.redocVersion;
    }
    get containerId() {
        return this.element ? this.elementId : this._containerId;
    }
    get containerSelector() {
        return `#${this.containerId}`;
    }
    get operationBoxSelector() {
        return `${this.containerSelector} ${this._operationBoxSelector}`;
    }
    get bundleUrl() {
        return `${this.cdnUrl}/redoc@${this.version}/bundles/redoc.standalone.min.js`;
    }
    get tryItDependencies() {
        return {
            jqueryUrl: `${this.cdnUrl}/jquery@${this.dependenciesVersions.jquery}/dist/jquery.min.js`,
            jqueryScrollToUrl: `${this.cdnUrl}/jquery.scrollto@${this.dependenciesVersions.jqueryScrollTo}/jquery.scrollTo.min.js`
        };
    }
}
exports.RedocTryItOutConfig = RedocTryItOutConfig;
