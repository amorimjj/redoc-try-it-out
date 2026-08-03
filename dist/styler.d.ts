import { StyleMatcherConfig } from './config/style-matcher.config';
export declare class Styler {
    static cfg: StyleMatcherConfig;
    private static sheet;
    private static sheetAddedOnDocument;
    private static update;
    private static authApplies;
    private static tryBtnApplies;
    private static inputApplies;
    private static modalApplies;
    private static tryItBoxApplies;
    private static themeMatchApplies;
    private static hideDisturbingElements;
    static createStyleElements(): void;
    static init(): void;
    static initSwaggerWrapper(): void;
}
