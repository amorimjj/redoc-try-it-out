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
exports.RedocWrapper = void 0;
const try_btn_1 = require("../elements/try.btn");
const scripts_1 = require("../utils/loaders/scripts");
class RedocWrapper {
    static get $operationBox() {
        return try_btn_1.TryBtn.$selected.parents(RedocWrapper.cfg.operationBoxSelector);
    }
    static get $apiInfoContainer() {
        return try_btn_1.TryBtn.$selected.parent();
    }
    static get apiContainer() {
        return RedocWrapper.$apiInfoContainer.parent();
    }
    static get $tryItBoxContainer() {
        const $tryItBox = $(RedocWrapper.cfg.tryItBoxSelector);
        return $tryItBox.length ? $tryItBox : $(`<div id="${RedocWrapper.cfg.tryItBoxContainerId}"></div>`);
    }
    static moveTryApiContainer() {
        RedocWrapper.apiContainer.after(RedocWrapper.$tryItBoxContainer);
    }
    static get domElement() {
        if (RedocWrapper.cfg.element) {
            return RedocWrapper.cfg.element;
        }
        const $element = $(`<div id="${RedocWrapper.cfg.containerId}"></div>`);
        $('body').append($element);
        return $element[0];
    }
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, scripts_1.loadScript)(RedocWrapper.cfg.bundleUrl);
            const promise = new Promise((resolve, reject) => {
                Redoc.init(RedocWrapper.cfg.docUrl, RedocWrapper.cfg.options, RedocWrapper.domElement, (e) => e ? reject(e) : resolve());
            });
            return promise;
        });
    }
    static configureTryBox() {
        RedocWrapper.$operationBox.addClass(RedocWrapper.cfg.selectedOperationClass);
        RedocWrapper.moveTryApiContainer();
    }
    static hide() {
        RedocWrapper.$operationBox.removeClass(RedocWrapper.cfg.selectedOperationClass);
    }
    static fixScrollPosition() {
        $('body').scrollTo(RedocWrapper.$operationBox);
    }
    static getCurrentApiInfo() {
        const rawApiInfo = RedocWrapper.$apiInfoContainer.text().replace(try_btn_1.TryBtn.cfg.text, '').trim();
        const match = rawApiInfo.match(/(\w+)(.*)/);
        const [, method, api] = match;
        return { api, method };
    }
}
exports.RedocWrapper = RedocWrapper;
