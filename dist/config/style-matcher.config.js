"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleMatcherConfig = void 0;
const config_1 = require("./config");
class StyleMatcherConfig extends config_1.Config {
    constructor(cfg, swaggerConfig, redocConfig) {
        super(cfg);
        this._informationContainerTargetSelector = '.swagger-ui .information-container';
        this._schemeContainerTargetSelector = '.swagger-ui .scheme-container';
        this._modelsContainerTargetSelector = '.swagger-ui .models';
        this._inputTargetSelector = '.swagger-ui input[type=text]';
        this._selectTargetSelector = '.swagger-ui .opblock select';
        this._textAreaTargetSelector = '.swagger-ui .opblock textarea';
        this._paragraphTargetSelector = '.swagger-ui .opblock p';
        this._executeBtnTargetSelector = '.swagger-ui .opblock .btn.execute';
        this._responseContainerTargetSelector = '.swagger-ui .opblock .opblock-body .responses-inner';
        this._responseTitleTargetSelector = '.swagger-ui .opblock .responses-inner > div > h4';
        this._responseHeaderTargetSelector = '.swagger-ui .opblock .responses-inner h4';
        this._responseTableTargetSelector = '.swagger-ui .opblock .responses-inner > .responses-table';
        this._responseWrapperTargetSelector = '.swagger-ui .opblock .responses-wrapper';
        this._responseWrapperResultTargetSelector = '.swagger-ui .opblock .btn-group + .responses-wrapper';
        this._responseMicrolightTargetSelector = '.swagger-ui .opblock .microlight';
        this._responseCodeTargetSelector = '.swagger-ui .opblock .microlight code';
        this._responseClipboardTargetSelector = '.swagger-ui .opblock .responses-inner .copy-to-clipboard';
        this._responseClipboardBtnTargetSelector = '.swagger-ui .opblock .responses-inner .copy-to-clipboard button';
        this._responseCurlClipboardTargetSelector = '.swagger-ui .opblock .responses-inner .curl-command .copy-to-clipboard';
        this._responseDownloadTargetSelector = '.swagger-ui .opblock .responses-inner .download-contents';
        this._serverResponseHeaderTargetSelector = '.swagger-ui .opblock .responses-inner .responses-header td.col_header';
        this._serverResponseStatusTargetSelector = '.swagger-ui .opblock .responses-inner .response .response-col_status';
        this._serverResponseDescriptionTargetSelector = '.swagger-ui .opblock .responses-inner .response .response-col_description';
        this._serverResponseSubHeaderTargetSelector = '.swagger-ui .opblock .responses-inner .response h5';
        this._clearBtnTargetSelector = '.swagger-ui .opblock .btn-group .btn-clear';
        this._operationTagTargetSelector = '.swagger-ui .opblock-tag[data-tag]';
        this._operationHeaderContainerTargetSelector = '.swagger-ui .opblock .opblock-section-header';
        this._operationHeaderTargetSelector = '.swagger-ui .opblock .opblock-section-header h4';
        this._operationHeaderDecorationTargetSelector = '.swagger-ui .opblock .opblock-section-header h4 span::after';
        this._operationTryOutTargetSelector = '.swagger-ui .operation-tag-content div.try-out';
        this._descriptionContainerTargetSelector = '.swagger-ui .opblock .opblock-body .opblock-description-wrapper';
        this._summaryTargetSelector = '.swagger-ui .operation-tag-content div.opblock .opblock-summary';
        this._modalHeaderContainerTargetSelector = '.swagger-ui .dialog-ux .modal-ux-header';
        this._modalHeaderTargetSelector = '.swagger-ui .dialog-ux .modal-ux-header h3';
        this._modalTitleTargetSelector = '.swagger-ui .dialog-ux .modal-ux-content h4';
        this._modalTitleCodeTargetSelector = '.swagger-ui .dialog-ux .modal-ux-content .wrapper code';
        this._modalLabelTargetSelector = '.swagger-ui .modal-ux label';
        this._modalCodeTargetSelector = '.swagger-ui .modal-ux code';
        this._modalBtnTargetSelector = '.swagger-ui .modal-ux button';
        this._parametersTableContainerTargetSelector = '.swagger-ui .opblock .table-container';
        this._parametersHeadTargetSelector = '.swagger-ui .opblock .table-container table.parameters thead';
        this._parameterNameFieldTargetSelector = '.swagger-ui .opblock .table-container table.parameters .parameter__name';
        this._parameterTypeFieldTargetSelector = '.swagger-ui .opblock .table-container table.parameters .parameter__type';
        this._parameterDeprecatedTargetSelector = '.swagger-ui .opblock .table-container table.parameters .parameter__deprecated';
        this._parameterSourceTargetSelector = '.swagger-ui .opblock .table-container table.parameters .parameter__in';
        this._parameterRequiredMarkerTargetSelector = '.swagger-ui .opblock .table-container table.parameters .parameter__name.required span';
        this._parameterRequiredTargetSelector = '.swagger-ui .opblock .table-container table.parameters .parameter__name.required::after';
        this._apiContentSourceSelector = '.api-content';
        this._inputSourceSelector = '[kind=field] ~ td';
        this._codeSourceSelector = 'code';
        this._codeBoxSourceSelector = '[data-section-id] [role=tabpanel]';
        this._dataSectionSourceSelector = '[data-section-id] > div > div';
        this._fieldSourceSelector = '[kind=field]';
        this._requiredFieldSourceSelector = '[kind=field] div';
        this._fieldMarkerSourceSelector = '[kind=field]:first span:first-child';
        this._sanSerifFontSourceSelector = 'h2';
        this._alternativeMonospaceFontSourceSelector = '[kind=field] span';
        this._alternativeSansSerifSourceSelector = 'h5';
        this._h2SourceSelector = 'h2';
        this._h3SourceSelector = 'h3';
        this._h5SourceSelector = 'h5';
        this._labelSourceSelector = '[kind=field] ~ td';
        this._typeSourceSelector = '[kind=field] ~ td span';
        this._btnSourceSelector = '[role=tabpanel] button';
        this._defaultBorderColorSelector = 'h5';
        this._authBtnSourceSelector = 'a[href*="swagger.json"]:eq(0)';
        this._httpVerbSourceSelector = '[data-section-id] .http-verb';
        this.swaggerConfig = swaggerConfig;
        this.redocConfig = redocConfig;
    }
    get openedInformationContainerTargetSelector() {
        return `${this.swaggerConfig.boxSelector}.${this.swaggerConfig.showClass} ${this._informationContainerTargetSelector}`;
    }
    get openedSchemeContainerTargetSelector() {
        return `${this.swaggerConfig.boxSelector}.${this.swaggerConfig.showClass} ${this._schemeContainerTargetSelector}`;
    }
    get openedModelsContainerTargetSelector() {
        return `${this.swaggerConfig.boxSelector}.${this.swaggerConfig.showClass} ${this._modelsContainerTargetSelector}`;
    }
    get operationContainerTargetSelector() {
        return `${this.swaggerConfig.operationContainerSelector}`;
    }
    get openedOperationContainerSelector() {
        return `${this.operationContainerTargetSelector}.${this.swaggerConfig.selectedOperationContainerClass}`;
    }
    get inputTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._inputTargetSelector}`;
    }
    get selectTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._selectTargetSelector}`;
    }
    get textAreaTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._textAreaTargetSelector}`;
    }
    get paragraphTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._paragraphTargetSelector}`;
    }
    get executeBtnTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._executeBtnTargetSelector}`;
    }
    get responseTableTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseTableTargetSelector}`;
    }
    get responseWrapperTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseWrapperTargetSelector}`;
    }
    get responseWrapperResultTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseWrapperResultTargetSelector}`;
    }
    get operationSectionTargetSelector() {
        return `${this.swaggerConfig.operationSectionContainerSelector}`;
    }
    get openedOperationSectionSelector() {
        return `${this.operationSectionTargetSelector}.${this.swaggerConfig.selectedOperationContainerClass}`;
    }
    get operationTagTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._operationTagTargetSelector}`;
    }
    get operationHeaderContainerTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._operationHeaderContainerTargetSelector}`;
    }
    get clearBtnTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._clearBtnTargetSelector}`;
    }
    get operationHeaderTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._operationHeaderTargetSelector}`;
    }
    get responseHeaderTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseHeaderTargetSelector}`;
    }
    get responseMicrolightTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseMicrolightTargetSelector}`;
    }
    get responseCodeTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseCodeTargetSelector}`;
    }
    get responseContainerTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseContainerTargetSelector}`;
    }
    get descriptionContainerTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._descriptionContainerTargetSelector}`;
    }
    get serverResponseSubHeaderTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._serverResponseSubHeaderTargetSelector}`;
    }
    get serverResponseHeaderTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._serverResponseHeaderTargetSelector}`;
    }
    get serverResponseStatusTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._serverResponseStatusTargetSelector}`;
    }
    get serverResponseDescriptionTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._serverResponseDescriptionTargetSelector}`;
    }
    get responseClipboardTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseClipboardTargetSelector}`;
    }
    get responseClipboardBtnTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseClipboardBtnTargetSelector}`;
    }
    get responseCurlClipboardTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseCurlClipboardTargetSelector}`;
    }
    get responseDownloadTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseDownloadTargetSelector}`;
    }
    get modalTargetSelector() {
        return `${this.swaggerConfig.authorizeModalSelector}`;
    }
    get modalHeaderContainerTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._modalHeaderContainerTargetSelector}`;
    }
    get modalHeaderTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._modalHeaderTargetSelector}`;
    }
    get modalTitleTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._modalTitleTargetSelector}`;
    }
    get modalLabelTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._modalLabelTargetSelector}`;
    }
    get modalTitleCodeTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._modalTitleCodeTargetSelector}`;
    }
    get modalCodeTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._modalCodeTargetSelector}`;
    }
    get modalBtnTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._modalBtnTargetSelector}`;
    }
    get operationHeaderDecorationTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._operationHeaderDecorationTargetSelector}`;
    }
    get parametersTableContainerTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._parametersTableContainerTargetSelector}`;
    }
    get parametersHeadTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._parametersHeadTargetSelector}`;
    }
    get parameterNameFieldTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._parameterNameFieldTargetSelector}`;
    }
    get parameterTypeFieldTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._parameterTypeFieldTargetSelector}`;
    }
    get parameterDeprecatedTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._parameterDeprecatedTargetSelector}`;
    }
    get parameterSourceTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._parameterSourceTargetSelector}`;
    }
    get parameterRequiredMarkerTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._parameterRequiredMarkerTargetSelector}`;
    }
    get parameterRequiredTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._parameterRequiredTargetSelector}`;
    }
    get operationTryOutTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._operationTryOutTargetSelector}`;
    }
    get summaryTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._summaryTargetSelector}`;
    }
    get responseTitleTargetSelector() {
        return `${this.swaggerConfig.boxSelector} ${this._responseTitleTargetSelector}`;
    }
    get apiContentSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._apiContentSourceSelector}`;
    }
    get inputSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._inputSourceSelector}`;
    }
    get $inputSource() {
        return $(this.inputSourceSelector);
    }
    get codeSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._codeSourceSelector}`;
    }
    get $codeSource() {
        return $(this.codeSourceSelector);
    }
    get codeBoxSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._codeBoxSourceSelector}`;
    }
    get $codeBoxSource() {
        return $(this.codeBoxSourceSelector);
    }
    get dataSectionSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._dataSectionSourceSelector}`;
    }
    get $dataSectionSource() {
        return $(this.dataSectionSourceSelector);
    }
    get fieldSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._fieldSourceSelector}`;
    }
    get $fieldSource() {
        return $(this.fieldSourceSelector);
    }
    get requiredFieldSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._requiredFieldSourceSelector}`;
    }
    get $requiredFieldSource() {
        return $(this.requiredFieldSourceSelector);
    }
    get fieldMarkerSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._fieldMarkerSourceSelector}`;
    }
    get $fieldMarkerSource() {
        return $(this.fieldMarkerSourceSelector);
    }
    get alternativeMonospaceFontSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._alternativeMonospaceFontSourceSelector}`;
    }
    get $alternativeMonospaceFontSource() {
        return $(this.alternativeMonospaceFontSourceSelector);
    }
    get sanSerifFontSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._sanSerifFontSourceSelector}`;
    }
    get $sanSerifFontSource() {
        return $(this.sanSerifFontSourceSelector);
    }
    get alternativeSansSerifSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._alternativeSansSerifSourceSelector}`;
    }
    get h2SourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._h2SourceSelector}`;
    }
    get $h2Source() {
        return $(this.h2SourceSelector);
    }
    get h3SourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._h3SourceSelector}`;
    }
    get $h3Source() {
        return $(this.h3SourceSelector);
    }
    get h5SourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._h5SourceSelector}`;
    }
    get $h5Source() {
        return $(this.h5SourceSelector);
    }
    get labelSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._labelSourceSelector}`;
    }
    get $labelSource() {
        return $(this.labelSourceSelector);
    }
    get typeSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._typeSourceSelector}`;
    }
    get $typeSource() {
        return $(this.typeSourceSelector);
    }
    get btnSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._btnSourceSelector}`;
    }
    get $btnSource() {
        return $(this.btnSourceSelector);
    }
    get defaultBorderColorSelector() {
        return `${this.redocConfig.containerSelector} ${this._defaultBorderColorSelector}`;
    }
    get defaultBorderColor() {
        return $(this.labelSourceSelector).css('border-color');
    }
    get defaultBackgroundColor() {
        const bg = $(this.apiContentSourceSelector).css('background-color') || 'white';
        return /rgba(\s)*?\(0,(\s)*?0,(\s)*?0,(\s)*?0(\s)*?\)/.test(bg) ? 'white' : bg;
    }
    get authBtnSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._authBtnSourceSelector}`;
    }
    get $authBtnSource() {
        return $(this.authBtnSourceSelector);
    }
    get authBtnClassesSource() {
        return $(this.authBtnSourceSelector).attr('class');
    }
    get httpVerbSourceSelector() {
        return `${this.redocConfig.containerSelector} ${this._httpVerbSourceSelector}`;
    }
    get $httpVerbSource() {
        return $(this.httpVerbSourceSelector);
    }
}
exports.StyleMatcherConfig = StyleMatcherConfig;
