import { loadScript } from './utils/loaders/scripts';
import { Styler } from './styler'
import { RedocTryItOutOptions } from './interfaces/redoc-try-it-out-options.interface';
import { SwaggerWrapper } from './wrappers/swagger.wrapper';
import { RedocWrapper } from './wrappers/redoc.wrapper';
import { AuthBtn } from './elements/auth.btn';
import { TryBtn } from './elements/try.btn';
import { SwaggerConfig } from './config/swagger-config';
import { RedocTryItOutConfig } from './config/redoc-try-it-out-config';
import { AuthBtnConfig } from './config/auth-btn-config'
import { TryBtnConfigConfig } from './config/try-btn-config';
import { StyleMatcherConfig } from './config/style-matcher.config';

export class RedocTryItOut {

    private static async loadDependencies():Promise<void> {
        await loadScript(RedocWrapper.cfg.tryItDependencies.jqueryUrl);
        return loadScript(RedocWrapper.cfg.tryItDependencies.jqueryScrollToUrl);
    }

    private static async loadAll(): Promise<void[]> {
        await RedocTryItOut.loadDependencies();
        return Promise.all([
            RedocWrapper.init(),
            SwaggerWrapper.init()
        ]);
    }

    private static config(url:string, cfg:RedocTryItOutOptions, element?: HTMLElement): void {
        RedocWrapper.cfg = new RedocTryItOutConfig(url, cfg, element);

        if ( RedocWrapper.cfg.tryItOutEnabled ){
            SwaggerWrapper.cfg = new SwaggerConfig(cfg.swaggerOptions || {}, url, true);
            AuthBtn.cfg = new AuthBtnConfig({ ...cfg.authBtn, tryItOutEnabled: RedocWrapper.cfg.tryItOutEnabled } || { tryItOutEnabled: RedocWrapper.cfg.tryItOutEnabled })
            TryBtn.cfg = new TryBtnConfigConfig({ ...cfg.tryBtn, tryItOutEnabled: RedocWrapper.cfg.tryItOutEnabled } || { tryItOutEnabled: RedocWrapper.cfg.tryItOutEnabled });
            Styler.cfg = new StyleMatcherConfig({ ...cfg.stylerMatcher, url, tryItOutEnabled: RedocWrapper.cfg.tryItOutEnabled } || { url, tryItOutEnabled: RedocWrapper.cfg.tryItOutEnabled }, SwaggerWrapper.cfg, RedocWrapper.cfg);
        }
    }

    public static async init(docUrl: string, cfg: RedocTryItOutOptions, element?: HTMLElement):Promise<void> {

        RedocTryItOut.config(docUrl, cfg, element);

        if ( RedocWrapper.cfg.tryItOutEnabled ) {
            await RedocTryItOut.loadAll();
            AuthBtn.init();
            TryBtn.init();
            Styler.init();
        } else {
            await RedocTryItOut.loadDependencies();
            await RedocWrapper.init()
        }
    }
}