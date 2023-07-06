import { StyleMatcherOptions } from '../interfaces/style-matcher-options.interface';
import { Config } from './config';
import { SwaggerConfig } from './swagger-config';
import { RedocTryItOutConfig } from './redoc-try-it-out-config';

declare let $: any;

export class StyleMatcherConfig extends Config<StyleMatcherOptions> implements StyleMatcherOptions {

    public readonly url: string;
    private readonly swaggerConfig: SwaggerConfig;
    private readonly redocConfig: RedocTryItOutConfig;

    public readonly tryItOutEnabled: boolean = false;
    private readonly _informationContainerTargetSelector: string    = '.swagger-ui .information-container';
    private readonly _schemeContainerTargetSelector: string         = '.swagger-ui .scheme-container';
    private readonly _modelsContainerTargetSelector: string         = '.swagger-ui .models';

    private readonly _inputTargetSelector: string       = '.swagger-ui input[type=text]';
    private readonly _selectTargetSelector: string      = '.swagger-ui .opblock select';
    private readonly _textAreaTargetSelector: string    = '.swagger-ui .opblock textarea';
    private readonly _paragraphTargetSelector: string   = '.swagger-ui .opblock p';
    private readonly _executeBtnTargetSelector: string  = '.swagger-ui .opblock .btn.execute';

    private readonly _responseContainerTargetSelector: string       = '.swagger-ui .opblock .opblock-body .responses-inner';
    private readonly _responseTitleTargetSelector: string           = '.swagger-ui .opblock .responses-inner > div > h4';
    private readonly _responseHeaderTargetSelector: string          = '.swagger-ui .opblock .responses-inner h4';
    private readonly _responseTableTargetSelector: string           = '.swagger-ui .opblock .responses-inner > .responses-table';
    private readonly _responseWrapperTargetSelector: string         = '.swagger-ui .opblock .responses-wrapper';
    private readonly _responseWrapperResultTargetSelector: string   = '.swagger-ui .opblock .btn-group + .responses-wrapper';
    private readonly _responseMicrolightTargetSelector: string      = '.swagger-ui .opblock .microlight';
    private readonly _responseCodeTargetSelector: string            = '.swagger-ui .opblock .microlight code';
    private readonly _responseClipboardTargetSelector: string       = '.swagger-ui .opblock .responses-inner .copy-to-clipboard';
    private readonly _responseClipboardBtnTargetSelector: string    = '.swagger-ui .opblock .responses-inner .copy-to-clipboard button';
    private readonly _responseCurlClipboardTargetSelector: string   = '.swagger-ui .opblock .responses-inner .curl-command .copy-to-clipboard';
    private readonly _responseDownloadTargetSelector: string        = '.swagger-ui .opblock .responses-inner .download-contents';

    private readonly _serverResponseHeaderTargetSelector: string            = '.swagger-ui .opblock .responses-inner .responses-header td.col_header';
    private readonly _serverResponseStatusTargetSelector: string            = '.swagger-ui .opblock .responses-inner .response .response-col_status';
    private readonly _serverResponseDescriptionTargetSelector: string       = '.swagger-ui .opblock .responses-inner .response .response-col_description';
    private readonly _serverResponseSubHeaderTargetSelector: string         = '.swagger-ui .opblock .responses-inner .response h5';

    private readonly _clearBtnTargetSelector: string = '.swagger-ui .opblock .btn-group .btn-clear';

    private readonly _operationTagTargetSelector: string                = '.swagger-ui .opblock-tag[data-tag]';
    private readonly _operationHeaderContainerTargetSelector: string    = '.swagger-ui .opblock .opblock-section-header';
    private readonly _operationHeaderTargetSelector: string             = '.swagger-ui .opblock .opblock-section-header h4';
    private readonly _operationHeaderDecorationTargetSelector: string   = '.swagger-ui .opblock .opblock-section-header h4 span::after';
    private readonly _operationTryOutTargetSelector: string             = '.swagger-ui .operation-tag-content div.try-out';

    private readonly _descriptionContainerTargetSelector: string    = '.swagger-ui .opblock .opblock-body .opblock-description-wrapper';
    private readonly _summaryTargetSelector: string                 = '.swagger-ui .operation-tag-content div.opblock .opblock-summary';

    private readonly _modalHeaderContainerTargetSelector: string    = '.swagger-ui .dialog-ux .modal-ux-header';
    private readonly _modalHeaderTargetSelector: string             = '.swagger-ui .dialog-ux .modal-ux-header h3';
    private readonly _modalTitleTargetSelector: string              = '.swagger-ui .dialog-ux .modal-ux-content h4';
    private readonly _modalTitleCodeTargetSelector: string          = '.swagger-ui .dialog-ux .modal-ux-content .wrapper code';
    private readonly _modalLabelTargetSelector: string              = '.swagger-ui .modal-ux label';
    private readonly _modalCodeTargetSelector: string               = '.swagger-ui .modal-ux code';
    private readonly _modalBtnTargetSelector: string                = '.swagger-ui .modal-ux button';

    private readonly _parametersTableContainerTargetSelector: string    = '.swagger-ui .opblock .table-container';
    private readonly _parametersHeadTargetSelector: string              = '.swagger-ui .opblock .table-container table.parameters thead';
    private readonly _parameterNameFieldTargetSelector: string          = '.swagger-ui .opblock .table-container table.parameters .parameter__name';
    private readonly _parameterTypeFieldTargetSelector: string          = '.swagger-ui .opblock .table-container table.parameters .parameter__type';
    private readonly _parameterDeprecatedTargetSelector: string         = '.swagger-ui .opblock .table-container table.parameters .parameter__deprecated';
    private readonly _parameterSourceTargetSelector: string             = '.swagger-ui .opblock .table-container table.parameters .parameter__in';
    private readonly _parameterRequiredMarkerTargetSelector: string     = '.swagger-ui .opblock .table-container table.parameters .parameter__name.required span';
    private readonly _parameterRequiredTargetSelector: string           = '.swagger-ui .opblock .table-container table.parameters .parameter__name.required::after';

    private readonly _apiContentSourceSelector: string = '.api-content';
    private readonly _inputSourceSelector: string = '[kind=field] ~ td';
    private readonly _codeSourceSelector: string = 'code';
    private readonly _codeBoxSourceSelector: string = '[data-section-id] [role=tabpanel]';
    private readonly _dataSectionSourceSelector: string = '[data-section-id] > div > div';
    private readonly _fieldSourceSelector: string = '[kind=field]';
    private readonly _requiredFieldSourceSelector: string = '[kind=field] div';
    private readonly _fieldMarkerSourceSelector: string = '[kind=field]:first span:first-child';
    private readonly _sanSerifFontSourceSelector: string = 'h2';
    private readonly _alternativeMonospaceFontSourceSelector: string = '[kind=field] span';
    private readonly _alternativeSansSerifSourceSelector: string = 'h5';
    private readonly _h2SourceSelector: string = 'h2'
    private readonly _h3SourceSelector: string = 'h3'
    private readonly _h5SourceSelector: string = 'h5'
    private readonly _labelSourceSelector: string = '[kind=field] ~ td'
    private readonly _typeSourceSelector: string = '[kind=field] ~ td span'
    private readonly _btnSourceSelector: string =  '[role=tabpanel] button'
    private readonly _defaultBorderColorSelector: string = 'h5';
    public readonly _authBtnSourceSelector: string = 'a[href*="swagger.json"]:eq(0)';
    private readonly _httpVerbSourceSelector: string = '[data-section-id] .http-verb';

    public constructor(cfg:StyleMatcherOptions, swaggerConfig: SwaggerConfig, redocConfig: RedocTryItOutConfig) {
        super(cfg);
        this.swaggerConfig = swaggerConfig;
        this.redocConfig = redocConfig;
        this.tryItOutEnabled = cfg.tryItOutEnabled;
        this.url = cfg.url;
        this._authBtnSourceSelector = `a[href*="${cfg.url}"]:eq(0)`
    }

    public get openedInformationContainerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector}.${this.swaggerConfig.showClass} ${this._informationContainerTargetSelector}`;
    }

    public get openedSchemeContainerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector}.${this.swaggerConfig.showClass} ${this._schemeContainerTargetSelector}`;
    }

    public get openedModelsContainerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector}.${this.swaggerConfig.showClass} ${this._modelsContainerTargetSelector}`;
    }

    public get operationContainerTargetSelector(): string {
        return `${this.swaggerConfig.operationContainerSelector }`;
    }

    public get openedOperationContainerSelector(): string {
        return `${this.operationContainerTargetSelector}.${this.swaggerConfig.selectedOperationContainerClass}`;
    }

    public get inputTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._inputTargetSelector}`;
    }

    public get selectTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._selectTargetSelector}`;
    }

    public get textAreaTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._textAreaTargetSelector}`;
    }

    public get paragraphTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._paragraphTargetSelector}`;
    }

    public get executeBtnTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._executeBtnTargetSelector}`;
    }

    public get responseTableTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseTableTargetSelector}`;
    }

    public get responseWrapperTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseWrapperTargetSelector}`;
    }

    public get responseWrapperResultTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseWrapperResultTargetSelector}`;
    }

    public get operationSectionTargetSelector(): string {
        return `${this.swaggerConfig.operationSectionContainerSelector}`;
    }

    public get openedOperationSectionSelector(): string {
        return `${this.operationSectionTargetSelector}.${this.swaggerConfig.selectedOperationContainerClass}`;
    }

    public get operationTagTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._operationTagTargetSelector}`;
    }

    public get operationHeaderContainerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._operationHeaderContainerTargetSelector}`;
    }

    public get clearBtnTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._clearBtnTargetSelector}`;
    }

    public get operationHeaderTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._operationHeaderTargetSelector}`;
    }

    public get responseHeaderTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseHeaderTargetSelector}`;
    }

    public get responseMicrolightTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseMicrolightTargetSelector}`;
    }

    public get responseCodeTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseCodeTargetSelector}`;
    }

    public get responseContainerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseContainerTargetSelector}`;
    }

    public get descriptionContainerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._descriptionContainerTargetSelector}`;
    }

    public get serverResponseSubHeaderTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._serverResponseSubHeaderTargetSelector}`;
    }

    public get serverResponseHeaderTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._serverResponseHeaderTargetSelector}`;
    }

    public get serverResponseStatusTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._serverResponseStatusTargetSelector}`;
    }

    public get serverResponseDescriptionTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._serverResponseDescriptionTargetSelector}`;
    }

    public get responseClipboardTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseClipboardTargetSelector}`;
    }

    public get responseClipboardBtnTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseClipboardBtnTargetSelector}`;
    }

    public get responseCurlClipboardTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseCurlClipboardTargetSelector}`;
    }

    public get responseDownloadTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseDownloadTargetSelector}`;
    }

    public get modalTargetSelector(): string {
        return `${this.swaggerConfig.authorizeModalSelector}`;
    }

    public get modalHeaderContainerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._modalHeaderContainerTargetSelector}`;
    }

    public get modalHeaderTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._modalHeaderTargetSelector}`;
    }

    public get modalTitleTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._modalTitleTargetSelector}`;
    }

    public get modalLabelTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._modalLabelTargetSelector}`;
    }

    public get modalTitleCodeTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._modalTitleCodeTargetSelector}`;
    }

    public get modalCodeTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._modalCodeTargetSelector}`;
    }

    public get modalBtnTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._modalBtnTargetSelector}`;
    }

    public get operationHeaderDecorationTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._operationHeaderDecorationTargetSelector}`;
    }

    public get parametersTableContainerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._parametersTableContainerTargetSelector}`;
    }

    public get parametersHeadTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._parametersHeadTargetSelector}`;
    }

    public get parameterNameFieldTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._parameterNameFieldTargetSelector}`;
    }

    public get parameterTypeFieldTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._parameterTypeFieldTargetSelector}`;
    }

    public get parameterDeprecatedTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._parameterDeprecatedTargetSelector}`;
    }

    public get parameterSourceTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._parameterSourceTargetSelector}`;
    }

    public get parameterRequiredMarkerTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._parameterRequiredMarkerTargetSelector}`;
    }

    public get parameterRequiredTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._parameterRequiredTargetSelector}`;
    }

    public get operationTryOutTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._operationTryOutTargetSelector}`;
    }

    public get summaryTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._summaryTargetSelector}`;
    }

    public get responseTitleTargetSelector(): string {
        return `${this.swaggerConfig.boxSelector} ${this._responseTitleTargetSelector}`;
    }

    public get apiContentSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._apiContentSourceSelector}`;
    }

    public get inputSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._inputSourceSelector}`;
    }

    public get $inputSource(): JQuery {
        return $(this.inputSourceSelector);
    }

    public get codeSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._codeSourceSelector}`;
    }

    public get $codeSource(): JQuery {
        return $(this.codeSourceSelector);
    }

    public get codeBoxSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._codeBoxSourceSelector}`;
    }

    public get $codeBoxSource(): JQuery {
        return $(this.codeBoxSourceSelector);
    }

    public get dataSectionSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._dataSectionSourceSelector}`;
    }

    public get $dataSectionSource(): JQuery {
        return $(this.dataSectionSourceSelector);
    }

    public get fieldSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._fieldSourceSelector}`;
    }

    public get $fieldSource(): JQuery {
        return $(this.fieldSourceSelector);
    }

    public get requiredFieldSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._requiredFieldSourceSelector}`;
    }

    public get $requiredFieldSource(): JQuery {
        return $(this.requiredFieldSourceSelector);
    }

    public get fieldMarkerSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._fieldMarkerSourceSelector}`;
    }

    public get $fieldMarkerSource(): JQuery {
        return $(this.fieldMarkerSourceSelector);
    }

    public get alternativeMonospaceFontSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._alternativeMonospaceFontSourceSelector}`;
    }

    public get $alternativeMonospaceFontSource(): JQuery {
        return $(this.alternativeMonospaceFontSourceSelector);
    }

    public get sanSerifFontSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._sanSerifFontSourceSelector}`;
    }

    public get $sanSerifFontSource(): JQuery {
        return $(this.sanSerifFontSourceSelector);
    }

    public get alternativeSansSerifSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._alternativeSansSerifSourceSelector}`;
    }

    public get h2SourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._h2SourceSelector}`;
    }

    public get $h2Source(): JQuery {
        return $(this.h2SourceSelector);
    }

    public get h3SourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._h3SourceSelector}`;
    }

    public get $h3Source(): JQuery {
        return $(this.h3SourceSelector);
    }

    public get h5SourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._h5SourceSelector}`;
    }

    public get $h5Source(): JQuery {
        return $(this.h5SourceSelector);
    }

    public get labelSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._labelSourceSelector}`;
    }

    public get $labelSource(): JQuery {
        return $(this.labelSourceSelector);
    }

    public get typeSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._typeSourceSelector}`;
    }

    public get $typeSource(): JQuery {
        return $(this.typeSourceSelector);
    }

    public get btnSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._btnSourceSelector}`;
    }

    public get $btnSource(): JQuery {
        return $(this.btnSourceSelector);
    }

    public get defaultBorderColorSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._defaultBorderColorSelector}`;
    }

    public get defaultBorderColor(): string {
        return $(this.labelSourceSelector).css('border-color');
    }

    public get defaultBackgroundColor(): string {
        const bg = $(this.apiContentSourceSelector).css('background-color') || 'white';
        return /rgba(\s)*?\(0,(\s)*?0,(\s)*?0,(\s)*?0(\s)*?\)/.test(bg) ? 'white' : bg;
    }

    public get authBtnSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._authBtnSourceSelector}`;
    }

    public get $authBtnSource(): JQuery {
        return $(this.authBtnSourceSelector);
    }

    public get authBtnClassesSource(): string {
        return $(this.authBtnSourceSelector).attr('class');
    }

    public get httpVerbSourceSelector(): string {
        return `${this.redocConfig.containerSelector} ${this._httpVerbSourceSelector}`;
    }

    public get $httpVerbSource(): JQuery {
        return $(this.httpVerbSourceSelector);
    }
}