"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthBtn = void 0;
const swagger_wrapper_1 = require("../wrappers/swagger.wrapper");
const try_btn_1 = require("./try.btn");
const authCloseClickHandler = () => {
    swagger_wrapper_1.SwaggerWrapper.hideAuthModal();
};
const authClickHandler = () => {
    try_btn_1.TryBtn.unselectAll();
    swagger_wrapper_1.SwaggerWrapper.showAuthModal();
};
class AuthBtn {
    static get $element() {
        return $(`.${AuthBtn.cfg.className}`);
    }
    static init() {
        if (!swagger_wrapper_1.SwaggerWrapper.hasAuth) {
            return;
        }
        const $authBtn = $(`<div class="${AuthBtn.cfg.className}">${AuthBtn.cfg.text}</div>`);
        $authBtn.click(authClickHandler);
        $(AuthBtn.cfg.posSelector).after($authBtn);
        swagger_wrapper_1.SwaggerWrapper.onCloseAuthModal(authCloseClickHandler);
    }
}
exports.AuthBtn = AuthBtn;
