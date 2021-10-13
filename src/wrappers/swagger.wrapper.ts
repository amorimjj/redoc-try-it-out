import { loadStylesheet } from '../utils/loaders/styles';
import { loadScript } from '../utils/loaders/scripts';
import { Styler } from '../styler';
import { SwaggerConfig } from '../config/swagger-config';
import {CallbackFunction} from "../interfaces/swagger-options.interface";

declare let SwaggerUIBundle: any;
declare let $: any;

export class SwaggerWrapper {

    public static cfg: SwaggerConfig;

    public static get $box(): JQuery {
        return $(`${SwaggerWrapper.cfg.boxSelector}`);
    }

    private static get $authorizeBtn(): JQuery {
        return $(`${SwaggerWrapper.cfg.authorizeBtnSelector}`);
    }

    private static get $authorizeModalCloseBtn(): JQuery {
        return $(`${SwaggerWrapper.cfg.authorizeDoneBtnSelector}, ${SwaggerWrapper.cfg.authorizeModalCloseBtnSelector}`);
    }

    private static operationSummarySelector(method: string, api: string): string {
        return SwaggerWrapper.cfg.operationSummaryPatternSelector.replace(/(.*)({method})(.*)({api})(.*)/, `$1${method}$3${api}$5`);
    }

    private static get $selectedContainerElements():JQuery {
        return $(`.${SwaggerWrapper.cfg.selectedOperationContainerClass}`)
    }

    public static get hasAuth(): boolean {
        return !!SwaggerWrapper.$authorizeBtn.length;
    }

    public static async init(): Promise<void> {
        Styler.initSwaggerWrapper();
        loadStylesheet(SwaggerWrapper.cfg.cssUrl);
        await loadScript(SwaggerWrapper.cfg.bundleUrl);
        $('body').append(`<div id="${SwaggerWrapper.cfg.id}" class="${SwaggerWrapper.cfg.hideClass}"></div>`);
        SwaggerUIBundle(SwaggerWrapper.cfg);
        return SwaggerWrapper.cfg.onCompletePromise;
    }

    public static hide(): void {
        SwaggerWrapper.$box.attr('class', SwaggerWrapper.cfg.hideClass);
        SwaggerWrapper.$selectedContainerElements.removeClass(SwaggerWrapper.cfg.selectedOperationContainerClass);
        $('body').append(SwaggerWrapper.$box);
    }

    public static show(): void {
        SwaggerWrapper.$box.attr('class',  SwaggerWrapper.cfg.showClass);
    }

    public static showAuthModal(): void {
        SwaggerWrapper.$box.attr('class', SwaggerWrapper.cfg.authModalClass);
        SwaggerWrapper.$authorizeBtn.click();
    }

    public static hideAuthModal(): void {
        SwaggerWrapper.hide();
    }

    public static onCloseAuthModal(event: CallbackFunction): void {
        SwaggerWrapper.$authorizeModalCloseBtn.click(event);
    }

    public static selectApiSection(api: string, method: string): void {

        const $apiDom = $(SwaggerWrapper.operationSummarySelector(method, api));
        const $operationContainer = $apiDom.parents(SwaggerWrapper.cfg.operationContainerSelector);
        const $operationSection = $operationContainer.parents(SwaggerWrapper.cfg.operationSectionContainerSelector);

        if (!$operationContainer.data('clicked')) {
            $apiDom.click();
        }

        $operationContainer.data('clicked', true);
        $operationContainer.addClass(SwaggerWrapper.cfg.selectedOperationContainerClass);
        $operationSection.addClass(SwaggerWrapper.cfg.selectedOperationContainerClass)
    }
}