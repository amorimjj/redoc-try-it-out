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
exports.RedocTryItOut = void 0;
const scripts_1 = require("./utils/loaders/scripts");
const styler_1 = require("./styler");
const swagger_wrapper_1 = require("./wrappers/swagger.wrapper");
const redoc_wrapper_1 = require("./wrappers/redoc.wrapper");
const auth_btn_1 = require("./elements/auth.btn");
const try_btn_1 = require("./elements/try.btn");
const swagger_config_1 = require("./config/swagger-config");
const redoc_try_it_out_config_1 = require("./config/redoc-try-it-out-config");
const auth_btn_config_1 = require("./config/auth-btn-config");
const try_btn_config_1 = require("./config/try-btn-config");
const style_matcher_config_1 = require("./config/style-matcher.config");
class RedocTryItOut {
    static loadDependencies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, scripts_1.loadScript)(redoc_wrapper_1.RedocWrapper.cfg.tryItDependencies.jqueryUrl);
            return (0, scripts_1.loadScript)(redoc_wrapper_1.RedocWrapper.cfg.tryItDependencies.jqueryScrollToUrl);
        });
    }
    static loadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield RedocTryItOut.loadDependencies();
            return Promise.all([
                redoc_wrapper_1.RedocWrapper.init(),
                swagger_wrapper_1.SwaggerWrapper.init()
            ]);
        });
    }
    static config(url, cfg, element) {
        redoc_wrapper_1.RedocWrapper.cfg = new redoc_try_it_out_config_1.RedocTryItOutConfig(url, cfg, element);
        if (redoc_wrapper_1.RedocWrapper.cfg.tryItOutEnabled) {
            swagger_wrapper_1.SwaggerWrapper.cfg = new swagger_config_1.SwaggerConfig(cfg.swaggerOptions || {}, url, true);
            auth_btn_1.AuthBtn.cfg = new auth_btn_config_1.AuthBtnConfig(cfg.authBtn || {});
            try_btn_1.TryBtn.cfg = new try_btn_config_1.TryBtnConfigConfig(cfg.tryBtn || {});
            styler_1.Styler.cfg = new style_matcher_config_1.StyleMatcherConfig(cfg.stylerMatcher || {}, swagger_wrapper_1.SwaggerWrapper.cfg, redoc_wrapper_1.RedocWrapper.cfg);
        }
    }
    static init(docUrl, cfg, element) {
        return __awaiter(this, void 0, void 0, function* () {
            RedocTryItOut.config(docUrl, cfg, element);
            if (redoc_wrapper_1.RedocWrapper.cfg.tryItOutEnabled) {
                yield RedocTryItOut.loadAll();
                auth_btn_1.AuthBtn.init();
                try_btn_1.TryBtn.init();
                styler_1.Styler.init();
            }
            else {
                yield redoc_wrapper_1.RedocWrapper.init();
            }
        });
    }
}
exports.RedocTryItOut = RedocTryItOut;
