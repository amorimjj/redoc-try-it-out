import { TryBtn } from '../elements/try.btn';
import { RedocTryItOutConfig } from '../config/redoc-try-it-out-config';
import { loadScript } from '../utils/loaders/scripts';

declare let Redoc: any;
declare let $: any;

export class RedocWrapper {

    public static cfg:RedocTryItOutConfig;

    private static get $operationBox(): JQuery {
        return TryBtn.$selected.parents(RedocWrapper.cfg.operationBoxSelector);
    }

    private static get $apiInfoContainer(): JQuery {
        return TryBtn.$selected.parent();
    }

    private static get apiContainer(): JQuery {
        return RedocWrapper.$apiInfoContainer.parent();
    }

    public static get $tryItBoxContainer(): JQuery {
        const $tryItBox = $(RedocWrapper.cfg.tryItBoxSelector);
        return $tryItBox.length ? $tryItBox : $(`<div class="${RedocWrapper.cfg.tryItBoxClass}"></div>`);
    }

    private static moveTryApiContainer(): void {
        RedocWrapper.apiContainer.after(RedocWrapper.$tryItBoxContainer);
    }

    private static get domElement(): HTMLElement {
        if ( RedocWrapper.cfg.element ) {
            return RedocWrapper.cfg.element;
        }

        const $element = $(`<div id="${RedocWrapper.cfg.containerId}"></div>`);
        $('body').append($element);
        return $element[0];
    }

    public static async init():Promise<void> {

        await loadScript(RedocWrapper.cfg.bundleUrl);
        const promise = new Promise<void>((resolve, reject): void => {
            Redoc.init(RedocWrapper.cfg.docUrl, RedocWrapper.cfg, RedocWrapper.domElement, (e:Error) => e ? reject(e) : resolve());
        });

        return promise;
    }

    public static configureTryBox(): void {
        RedocWrapper.$operationBox.addClass(RedocWrapper.cfg.selectedOperationClass);
        RedocWrapper.moveTryApiContainer();
    }

    public static hide(): void {
        RedocWrapper.$operationBox.removeClass(RedocWrapper.cfg.selectedOperationClass);
    }

    public static fixScrollPosition(): void {
        $('body').scrollTo(RedocWrapper.$operationBox);
    }

    public static getCurrentApiInfo(): { api: string, method: string } {
        const rawApiInfo = RedocWrapper.$apiInfoContainer.text().replace(TryBtn.cfg.text, '').trim();
        const match = rawApiInfo.match(/(\w+)(.*)/);
        const [ ,method, api ] = match as Array<string>;
        return { api, method }
    }
}