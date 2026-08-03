"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleBuilder = void 0;
class Style {
    constructor(parent) {
        this.properties = {};
        this.parent = parent;
    }
    add(selector) {
        return this.parent.add(selector);
    }
    style(style) {
        Object.entries(style).forEach(([property, value]) => this.properties[property] = `${property}: ${value}`);
        return this;
    }
    absolute() {
        return this.style({ position: 'absolute' });
    }
    relative() {
        return this.style({ position: 'relative' });
    }
    hidden() {
        return this.style({ visibility: 'hidden' });
    }
    visible() {
        return this.style({ visibility: 'visible' });
    }
    noWidth() {
        return this.style({ width: 0 });
    }
    noHeight() {
        return this.style({ height: 0 });
    }
    noCursor() {
        return this.style({ cursor: 'none' });
    }
    noTop() {
        return this.style({ top: 0 });
    }
    noLeft() {
        return this.style({ left: 0 });
    }
    noPadding() {
        return this.style({ padding: 0 });
    }
    noOverflow() {
        return this.style({ overflow: 'hidden' });
    }
    noDisplay() {
        return this.style({ display: 'none' });
    }
    cloneStyles($source, attributes, forceOverride) {
        const important = forceOverride ? '!important' : '';
        attributes = Array.isArray(attributes) ? attributes : [attributes];
        attributes.forEach(atrribute => this.style({ [atrribute]: `${$source.css(atrribute)} ${important}` }));
        return this;
    }
    cloneFont($source, forceOverride) {
        return this.cloneStyles($source, ['font-family', 'font-size', 'font-weight', 'line-height', 'color'], forceOverride);
    }
    cloneBorder($source, forceOverride) {
        return this.cloneStyles($source, ['border-top', 'border-right', 'border-left', 'border-bottom'], forceOverride);
    }
    resetBorder() {
        return this.style({ border: 0, 'border-radius': 0, 'box-shadow': 'none' });
    }
    toString() {
        return Object.values(this.properties).join(';');
    }
}
class StyleBuilder {
    constructor() {
        this.selectors = {};
    }
    toString() {
        let style = '';
        Object.entries(this.selectors).forEach(([selector, styles]) => {
            style += `${selector} { ${styles} }`;
        });
        return style;
    }
    add(selector) {
        if (!this.selectors[selector]) {
            this.selectors[selector] = new Style(this);
        }
        return this.selectors[selector];
    }
    static add(selector) {
        if (!StyleBuilder.selectorsBuilder.selectors[selector]) {
            StyleBuilder.selectorsBuilder.selectors[selector] = new Style(StyleBuilder.selectorsBuilder);
        }
        return StyleBuilder.selectorsBuilder.selectors[selector];
    }
    static addMediaSelector(selector) {
        if (!StyleBuilder.mediaSelectorsBuilder[selector]) {
            StyleBuilder.mediaSelectorsBuilder[selector] = new StyleBuilder();
        }
        return StyleBuilder.mediaSelectorsBuilder[selector];
    }
    static toString() {
        let media = '';
        Object.entries(StyleBuilder.mediaSelectorsBuilder).forEach(([selector, selectors]) => {
            media += `${selector} { ${selectors} }`;
        });
        return `${media} ${StyleBuilder.selectorsBuilder}`;
    }
}
exports.StyleBuilder = StyleBuilder;
StyleBuilder.selectorsBuilder = new StyleBuilder();
StyleBuilder.mediaSelectorsBuilder = {};
