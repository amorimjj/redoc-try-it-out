"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryBtn = void 0;
const swagger_wrapper_1 = require("../wrappers/swagger.wrapper");
const redoc_wrapper_1 = require("../wrappers/redoc.wrapper");
const tryClickHandler = (event) => {
    event.stopPropagation();
    const $tryBtn = $(event.target);
    const shouldOpen = !TryBtn.isSelected($tryBtn);
    TryBtn.unselectAll();
    if (shouldOpen) {
        TryBtn.select($tryBtn);
    }
};
class TryBtn {
    static get $sibling() {
        return $(`${TryBtn.cfg.siblingSelector}`);
    }
    static isSelected($btn) {
        return $btn.hasClass(TryBtn.cfg.selectedClassName);
    }
    static unselectAll() {
        swagger_wrapper_1.SwaggerWrapper.hide();
        redoc_wrapper_1.RedocWrapper.hide();
        $(TryBtn.cfg.selector).removeClass(TryBtn.cfg.selectedClassName);
    }
    static select($btn) {
        $btn.addClass(TryBtn.cfg.selectedClassName);
        redoc_wrapper_1.RedocWrapper.configureTryBox();
        const { api, method } = redoc_wrapper_1.RedocWrapper.getCurrentApiInfo();
        swagger_wrapper_1.SwaggerWrapper.selectApiSection(api, method);
        redoc_wrapper_1.RedocWrapper.$tryItBoxContainer.append(swagger_wrapper_1.SwaggerWrapper.$box);
        swagger_wrapper_1.SwaggerWrapper.show();
        redoc_wrapper_1.RedocWrapper.fixScrollPosition();
    }
    static get $selected() {
        return $(`${TryBtn.cfg.selectedSelector}`);
    }
    static get $btn() {
        return $(`.${TryBtn.cfg.className}`);
    }
    static init() {
        const $tryBtn = $(`<button class="${TryBtn.cfg.className}">${TryBtn.cfg.text}</button>`);
        $tryBtn.click(tryClickHandler);
        TryBtn.$sibling.after($tryBtn);
    }
}
exports.TryBtn = TryBtn;
