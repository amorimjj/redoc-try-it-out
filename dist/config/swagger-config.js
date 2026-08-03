"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfig = void 0;
const config_1 = require("./config");
class SwaggerConfig extends config_1.Config {
    constructor(options, url, tryItOutEnabled) {
        super(options);
        this._resolve = () => { };
        this._onComplete = () => { };
        this._authorizeBtnSelector = '.swagger-ui .auth-wrapper .authorize';
        this._authorizeDoneBtnSelector = '.swagger-ui .auth-btn-wrapper .btn-done';
        this._authorizeModalCloseBtnSelector = '.swagger-ui .dialog-ux .modal-ux-header .close-modal';
        this._authorizeModalSelector = '.swagger-ui .dialog-ux .modal-ux';
        this._modalOverlaySelector = '.swagger-ui .dialog-ux';
        this._operationSectionContainerSelector = '.swagger-ui .opblock-tag-section';
        this._operationContainerSelector = '.swagger-ui .opblock';
        this._operationSummaryPatternSelector = '.swagger-ui .opblock .opblock-summary-{method} [data-path="{api}"]';
        this._wrapperSelector = '.swagger-ui .wrapper';
        this.dom_id = '#swagger-ui';
        this.authModalClass = 'auth-modal';
        this.hideClass = 'hide';
        this.showClass = 'show';
        this.selectedOperationContainerClass = 'opened-shadow';
        this.version = '3.48.0';
        this.onComplete = () => {
            this._onComplete();
            this._resolve();
        };
        this.url = url;
        this.tryItOutEnabled = tryItOutEnabled;
        this.onCompletePromise = new Promise(resolve => this._resolve = resolve);
    }
    get id() {
        return this.dom_id.replace('#', '');
    }
    get boxSelector() {
        return this.dom_id;
    }
    get authorizeBtnSelector() {
        return `${this.boxSelector} ${this._authorizeBtnSelector}`;
    }
    get authorizeDoneBtnSelector() {
        return `${this.boxSelector} ${this._authorizeDoneBtnSelector}`;
    }
    get authorizeModalCloseBtnSelector() {
        return `${this.boxSelector} ${this._authorizeModalCloseBtnSelector}`;
    }
    get authorizeModalSelector() {
        return `${this.boxSelector} ${this._authorizeModalSelector}`;
    }
    get openModalOverlaySelector() {
        return `${this.shownAuthModalSelector} ${this._modalOverlaySelector}`;
    }
    get operationSectionContainerSelector() {
        return `${this.boxSelector} ${this._operationSectionContainerSelector}`;
    }
    get operationContainerSelector() {
        return `${this.boxSelector} ${this._operationContainerSelector}`;
    }
    get operationSummaryPatternSelector() {
        return `${this.boxSelector} ${this._operationSummaryPatternSelector}`;
    }
    get wrapperSelector() {
        return `${this.boxSelector} ${this._wrapperSelector}`;
    }
    get openAuthorizeModalSelector() {
        return `${this.shownAuthModalSelector} ${this._authorizeModalSelector}`;
    }
    get hiddenSelector() {
        return `${this.boxSelector}.${this.hideClass}`;
    }
    get shownSelector() {
        return `${this.boxSelector}.${this.showClass}`;
    }
    get shownAuthModalSelector() {
        return `${this.boxSelector}.${this.authModalClass}`;
    }
    get bundleUrl() {
        return `${this.cdnUrl}/swagger-ui-dist@${this.version}/swagger-ui-bundle.js`;
    }
    get cssUrl() {
        return `${this.cdnUrl}/swagger-ui-dist@${this.version}/swagger-ui.css`;
    }
}
exports.SwaggerConfig = SwaggerConfig;
