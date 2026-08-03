"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryBtnConfigConfig = void 0;
const config_1 = require("./config");
class TryBtnConfigConfig extends config_1.Config {
    constructor() {
        super(...arguments);
        this.siblingSelector = '.http-verb';
        this.text = 'TRY OUT';
        this.className = 'tryBtn';
        this.selectedClassName = 'selected';
    }
    get selector() {
        return `.${this.className}`;
    }
    get selectedSelector() {
        return `${this.selector}.${this.selectedClassName}`;
    }
}
exports.TryBtnConfigConfig = TryBtnConfigConfig;
