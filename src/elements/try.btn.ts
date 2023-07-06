import { SwaggerWrapper } from '../wrappers/swagger.wrapper';
import { RedocWrapper } from '../wrappers/redoc.wrapper';
import { TryBtnConfigConfig } from '../config/try-btn-config';

declare let $: any;

const tryClickHandler = (event: Event) => {
    event.stopPropagation();
    const $tryBtn = $(event.target);
    const shouldOpen = !TryBtn.isSelected($tryBtn);
    TryBtn.unselectAll();
    if ( shouldOpen ) {
        TryBtn.select($tryBtn);
    }
}

export class TryBtn {

    public static cfg: TryBtnConfigConfig;

    private static get $sibling():JQuery {
        return $(`${TryBtn.cfg.siblingSelector}`);
    }

    public static isSelected($btn: JQuery): boolean {
        return $btn.hasClass(TryBtn.cfg.selectedClassName);
    }

    public static unselectAll():void {
        SwaggerWrapper.hide();
        RedocWrapper.hide();
        $(TryBtn.cfg.selector).removeClass(TryBtn.cfg.selectedClassName);
    }

    public static select($btn: JQuery): void {
        $btn.addClass(TryBtn.cfg.selectedClassName);
        RedocWrapper.configureTryBox();

        const { api, method } = RedocWrapper.getCurrentApiInfo();
        SwaggerWrapper.selectApiSection(api, method);

        RedocWrapper.$tryItBoxContainer.append(SwaggerWrapper.$box);
        SwaggerWrapper.show();
        RedocWrapper.fixScrollPosition();
    }

    public static get $selected(): JQuery {
        return $(`${TryBtn.cfg.selectedSelector}`);
    }

    public static get $btn(): JQuery {
        return $(`.${TryBtn.cfg.className}`);
    }

    public static init(): void {
        if (!TryBtn.cfg.tryItOutEnabled) {
            return;
        }
        
        const $tryBtn = $(`<button class="${TryBtn.cfg.className}">${TryBtn.cfg.text}</button>`);
        $tryBtn.click(tryClickHandler);
        TryBtn.$sibling.after($tryBtn);
    }
}