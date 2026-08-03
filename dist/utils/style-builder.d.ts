/// <reference types="jquery" />
/// <reference types="jquery.scrollto" />
interface IStyle {
    'background'?: string;
    'background-color'?: string;
    'background-image'?: string;
    'border'?: number | string;
    'border-bottom'?: number | string;
    'border-color'?: string;
    'border-left'?: number | string;
    'border-radius'?: number | string;
    'border-right'?: number | string;
    'border-style'?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
    'border-top'?: number | string;
    'border-width'?: number | string;
    'bottom'?: number | string;
    'box-shadow'?: string;
    'color'?: string;
    'content'?: string;
    'cursor'?: 'initial' | 'none' | 'not-allowed' | 'pointer';
    'display'?: string;
    'float'?: 'right' | 'left' | 'none' | 'inherit';
    'font-family'?: string;
    'font-weight'?: number;
    'font-size'?: string;
    'height'?: number | string;
    'left'?: number | string;
    'line-height'?: string;
    'margin'?: number | string;
    'margin-left'?: number | string;
    'margin-right'?: number | string;
    'margin-top'?: number | string;
    'overflow'?: 'hidden';
    'padding'?: number | string;
    'padding-bottom'?: number | string;
    'padding-right'?: number | string;
    'padding-top'?: number | string;
    'pointer-events'?: 'initial' | 'none';
    'position'?: 'absolute' | 'relative';
    'right'?: number | string;
    'text-transform'?: string;
    'top'?: number | string;
    'visibility'?: 'hidden' | 'visible';
    'width'?: number | string;
    'z-index'?: number;
}
declare class Style {
    private readonly parent;
    private properties;
    constructor(parent: StyleBuilder);
    add(selector: string): Style;
    style(style: IStyle): Style;
    absolute(): Style;
    relative(): Style;
    hidden(): Style;
    visible(): Style;
    noWidth(): Style;
    noHeight(): Style;
    noCursor(): Style;
    noTop(): Style;
    noLeft(): Style;
    noPadding(): Style;
    noOverflow(): Style;
    noDisplay(): Style;
    cloneStyles($source: JQuery, attributes: string | Array<string>, forceOverride?: boolean): Style;
    cloneFont($source: JQuery, forceOverride?: boolean): Style;
    cloneBorder($source: JQuery, forceOverride?: boolean): Style;
    resetBorder(): Style;
    toString(): string;
}
export declare class StyleBuilder {
    private static selectorsBuilder;
    private static mediaSelectorsBuilder;
    private selectors;
    private constructor();
    private toString;
    add(selector: string): Style;
    static add(selector: string): Style;
    static addMediaSelector(selector: string): StyleBuilder;
    static toString(): string;
}
export {};
