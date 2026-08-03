"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
    constructor(options) {
        this.options = options;
        for (const key of Object.keys(options)) {
            const option = (key in this ? key : `_${key}`);
            if (option in this) {
                this[option] = options[key];
            }
        }
    }
    get cdnUrl() {
        return 'https://cdn.jsdelivr.net/npm';
    }
}
exports.Config = Config;
