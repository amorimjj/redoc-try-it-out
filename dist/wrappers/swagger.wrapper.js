"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerWrapper = void 0;
const styles_1 = require("../utils/loaders/styles");
const scripts_1 = require("../utils/loaders/scripts");
const styler_1 = require("../styler");
class SwaggerWrapper {
    static get $box() {
        return $(`${SwaggerWrapper.cfg.boxSelector}`);
    }
    static get $authorizeBtn() {
        return $(`${SwaggerWrapper.cfg.authorizeBtnSelector}`);
    }
    static get $authorizeModalCloseTriggers() {
        return $(`${SwaggerWrapper.cfg.authorizeDoneBtnSelector}, ${SwaggerWrapper.cfg.authorizeModalCloseBtnSelector}`);
    }
    static operationSummarySelector(method, api) {
        return SwaggerWrapper.cfg.operationSummaryPatternSelector.replace(/(.*)({method})(.*)({api})(.*)/, `$1${method}$3${api}$5`);
    }
    static get $selectedContainerElements() {
        return $(`.${SwaggerWrapper.cfg.selectedOperationContainerClass}`);
    }
    static get hasAuth() {
        return !!SwaggerWrapper.$authorizeBtn.length;
    }
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            styler_1.Styler.initSwaggerWrapper();
            (0, styles_1.loadStylesheet)(SwaggerWrapper.cfg.cssUrl);
            yield (0, scripts_1.loadScript)(SwaggerWrapper.cfg.bundleUrl);
            $('body').append(`<div id="${SwaggerWrapper.cfg.id}" class="${SwaggerWrapper.cfg.hideClass}"></div>`);
            SwaggerUIBundle(SwaggerWrapper.cfg);
            return SwaggerWrapper.cfg.onCompletePromise;
        });
    }
    static hide() {
        SwaggerWrapper.$box.attr('class', SwaggerWrapper.cfg.hideClass);
        SwaggerWrapper.$selectedContainerElements.removeClass(SwaggerWrapper.cfg.selectedOperationContainerClass);
        $('body').append(SwaggerWrapper.$box);
    }
    static show() {
        SwaggerWrapper.$box.attr('class', SwaggerWrapper.cfg.showClass);
    }
    static showAuthModal() {
        SwaggerWrapper.$box.attr('class', SwaggerWrapper.cfg.authModalClass);
        SwaggerWrapper.$authorizeBtn.click();
    }
    static hideAuthModal() {
        SwaggerWrapper.hide();
    }
    static onCloseAuthModal(event) {
        SwaggerWrapper.$authorizeModalCloseTriggers.click(event);
    }
    static selectApiSection(api, method) {
        const $apiDom = $(SwaggerWrapper.operationSummarySelector(method, api));
        const $operationContainer = $apiDom.parents(SwaggerWrapper.cfg.operationContainerSelector);
        const $operationSection = $operationContainer.parents(SwaggerWrapper.cfg.operationSectionContainerSelector);
        if (!$operationContainer.data('clicked')) {
            $apiDom.click();
        }
        $operationContainer.data('clicked', true);
        $operationContainer.addClass(SwaggerWrapper.cfg.selectedOperationContainerClass);
        $operationSection.addClass(SwaggerWrapper.cfg.selectedOperationContainerClass);
    }
}
exports.SwaggerWrapper = SwaggerWrapper;
