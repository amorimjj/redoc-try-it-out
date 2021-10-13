interface IStyle {
    'background'?: string;
    'background-color'?: string;
    'background-image'?: string;
    'border'?: number|string;
    'border-bottom'?: number|string;
    'border-color'?:string;
    'border-left'?: number|string;
    'border-radius'?: number|string;
    'border-right'?: number|string;
    'border-style'?: 'none'|'hidden'|'dotted'|'dashed'|'solid'|'double'|'groove'|'ridge'|'inset'|'outset';
    'border-top'?: number|string;
    'border-width'?: number|string;
    'bottom'?: number|string;
    'box-shadow'?: string;
    'color'?: string;
    'content'?: string;
    'cursor'?:'initial'|'none'|'not-allowed'|'pointer';
    'display'?: string;
    'float'?: 'right'|'left'|'none'|'inherit';
    'font-family'?: string;
    'font-weight'?: number;
    'font-size'?: string;
    'height'?:number|string;
    'left'?: number|string;
    'line-height'?:string;
    'margin'?:number|string;
    'margin-left'?:number|string;
    'margin-right'?:number|string;
    'margin-top'?:number|string;
    'overflow'?: 'hidden';
    'padding'?:number|string;
    'padding-bottom'?:number|string;
    'padding-right'?:number|string;
    'padding-top'?:number|string;
    'pointer-events'?:'initial'|'none';
    'position'?: 'absolute'|'relative';
    'right'?: number|string;
    'text-transform'?: string;
    'top'?:number|string;
    'visibility'?:'hidden'|'visible';
    'width'?:number|string;
    'z-index'?:number;
}

class Style {

    private readonly parent:StyleBuilder;
    private properties: { [property: string]: string; } = {} ;

    public constructor(parent: StyleBuilder) {
        this.parent = parent;
    }

    public add(selector: string): Style {
        return this.parent.add(selector);
    }

    public style(style: IStyle): Style {
        Object.entries(style).forEach(
            ([property, value]) => this.properties[property] = `${property}: ${value}`
        );
        return this;
    }

    public absolute(): Style {
        return this.style({ position: 'absolute'});
    }

    public relative(): Style {
        return this.style({ position: 'relative'});
    }

    public hidden(): Style {
        return this.style({ visibility: 'hidden'});
    }

    public visible(): Style {
        return this.style({ visibility: 'visible'});
    }

    public noWidth(): Style {
        return this.style({ width: 0});
    }

    public noHeight(): Style {
        return this.style({ height: 0});
    }

    public noCursor(): Style {
        return this.style({ cursor: 'none'});
    }

    public noTop(): Style {
        return this.style({ top: 0});
    }

    public noLeft(): Style {
        return this.style({ left: 0});
    }

    public noPadding(): Style {
        return this.style({ padding: 0});
    }

    public noOverflow(): Style {
        return this.style({ overflow: 'hidden'});
    }

    public noDisplay(): Style {
        return this.style({ display: 'none'});
    }

    public cloneStyles($source: JQuery, attributes:string|Array<string>, forceOverride?: boolean): Style {
        const important = forceOverride ? '!important' : '';
        attributes = Array.isArray(attributes) ? attributes : [ attributes ]
        attributes.forEach(atrribute =>
            this.style({ [atrribute]: `${$source.css(atrribute)} ${important}`} )
        );
        return this;
    }

    public cloneFont($source: JQuery, forceOverride?: boolean): Style {
        return this.cloneStyles(
            $source,
            ['font-family', 'font-size', 'font-weight', 'line-height', 'color'],
            forceOverride
        )
    }

    public cloneBorder($source: JQuery, forceOverride?: boolean): Style {
        return this.cloneStyles(
            $source,
            ['border-top', 'border-right', 'border-left', 'border-bottom'],
            forceOverride
        )
    }

    public resetBorder(): Style {
        return this.style({ border:0, 'border-radius': 0, 'box-shadow': 'none' });
    }

    public toString(): string {
        return Object.values(this.properties).join(';');
    }
}

export class StyleBuilder {

    private static selectorsBuilder: StyleBuilder = new StyleBuilder();
    private static mediaSelectorsBuilder: { [media: string]: StyleBuilder } = {};

    private selectors: { [selector: string]: Style } = {};

    private constructor() {} //eslint-disable-line @typescript-eslint/no-empty-function

    private toString(): string {
        let style = '';
        Object.entries(this.selectors).forEach(([selector, styles]) => {
            style += `${selector} { ${styles} }`;
        });
        return style;
    }

    public add(selector: string): Style {
        if ( !this.selectors[selector] ) {
            this.selectors[selector] = new Style(this);
        }
        return this.selectors[selector];
    }

    public static add(selector: string): Style {
        if ( !StyleBuilder.selectorsBuilder.selectors[selector] ) {
            StyleBuilder.selectorsBuilder.selectors[selector] = new Style(StyleBuilder.selectorsBuilder);
        }
        return StyleBuilder.selectorsBuilder.selectors[selector];
    }

    public static addMediaSelector(selector: string): StyleBuilder {
        if ( !StyleBuilder.mediaSelectorsBuilder[selector] ) {
            StyleBuilder.mediaSelectorsBuilder[selector] = new StyleBuilder();
        }
        return StyleBuilder.mediaSelectorsBuilder[selector];
    }

    public static toString():string {

        let media = '';
        Object.entries(StyleBuilder.mediaSelectorsBuilder).forEach(([selector, selectors]) => {
            media += `${selector} { ${selectors} }`;
        });

        return `${media} ${StyleBuilder.selectorsBuilder}`
    }
}