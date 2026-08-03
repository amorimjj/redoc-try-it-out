"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styler = void 0;
const style_builder_1 = require("./utils/style-builder");
const swagger_wrapper_1 = require("./wrappers/swagger.wrapper");
const try_btn_1 = require("./elements/try.btn");
const auth_btn_1 = require("./elements/auth.btn");
class Styler {
    static update() {
        if (!Styler.sheetAddedOnDocument) {
            document.body.appendChild(Styler.sheet);
        }
        Styler.sheet.innerHTML = style_builder_1.StyleBuilder.toString();
    }
    static authApplies() {
        style_builder_1.StyleBuilder
            .add(swagger_wrapper_1.SwaggerWrapper.cfg.shownAuthModalSelector)
            .hidden()
            .style({ height: 'auto', left: 0, top: 0, width: 'auto' })
            .add(swagger_wrapper_1.SwaggerWrapper.cfg.authorizeModalSelector)
            .hidden()
            .add(swagger_wrapper_1.SwaggerWrapper.cfg.openModalOverlaySelector)
            .visible()
            .add(swagger_wrapper_1.SwaggerWrapper.cfg.openAuthorizeModalSelector)
            .visible()
            .style({ width: 'auto', height: 'auto' });
        auth_btn_1.AuthBtn.$element.addClass(Styler.cfg.authBtnClassesSource);
    }
    static tryBtnApplies() {
        style_builder_1.StyleBuilder
            .add(try_btn_1.TryBtn.cfg.selector)
            .resetBorder()
            .cloneBorder(Styler.cfg.$authBtnSource)
            .cloneFont(Styler.cfg.$httpVerbSource)
            .cloneStyles(Styler.cfg.$httpVerbSource, ['padding'])
            .cloneStyles(Styler.cfg.$authBtnSource, ['color'])
            .style({ 'background-color': Styler.cfg.defaultBackgroundColor, 'margin-left': '2px', 'cursor': 'pointer' });
    }
    static inputApplies() {
        style_builder_1.StyleBuilder
            .add(Styler.cfg.inputTargetSelector)
            .cloneBorder(Styler.cfg.$inputSource)
            .cloneStyles(Styler.cfg.$inputSource, ['color', 'font-size'])
            .style({ 'border-radius': 0 });
    }
    static modalApplies() {
        style_builder_1.StyleBuilder
            .add(Styler.cfg.modalHeaderTargetSelector)
            .cloneFont(Styler.cfg.$h2Source)
            .add(Styler.cfg.modalLabelTargetSelector)
            .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.modalTitleTargetSelector)
            .cloneFont(Styler.cfg.$h3Source)
            .add(Styler.cfg.modalTitleCodeTargetSelector)
            .cloneStyles(Styler.cfg.$labelSource, 'font-size')
            .add(Styler.cfg.modalCodeTargetSelector)
            .cloneFont(Styler.cfg.$h3Source)
            .cloneStyles(Styler.cfg.$alternativeMonospaceFontSource, 'font-family')
            .add(Styler.cfg.modalTargetSelector)
            .style({ 'background-color': 'white', 'border-radius': '0' })
            .add(Styler.cfg.modalBtnTargetSelector)
            .cloneStyles(Styler.cfg.$sanSerifFontSource, 'font-family')
            .style({ 'border-radius': 0 })
            .add(Styler.cfg.modalHeaderContainerTargetSelector)
            .style({ 'border-color': Styler.cfg.defaultBorderColor });
    }
    static tryItBoxApplies() {
        style_builder_1.StyleBuilder
            .add(Styler.cfg.operationSectionTargetSelector)
            .hidden()
            .noHeight()
            .add(Styler.cfg.openedOperationSectionSelector)
            .visible()
            .style({ 'height': 'initial' });
        style_builder_1.StyleBuilder
            .add(Styler.cfg.openedOperationContainerSelector)
            .style({ 'display': 'block' });
        style_builder_1.StyleBuilder
            .add(Styler.cfg.operationContainerTargetSelector)
            .cloneStyles(Styler.cfg.$dataSectionSource, 'padding')
            .resetBorder()
            .add(Styler.cfg.operationContainerTargetSelector)
            .resetBorder()
            .style({ 'background-color': Styler.cfg.defaultBackgroundColor })
            .add(Styler.cfg.selectTargetSelector)
            .cloneFont(Styler.cfg.$inputSource)
            .resetBorder()
            .cloneStyles(Styler.cfg.$inputSource, ['border-width', 'border-style'])
            .absolute()
            .style({
            'border-width': '1px',
            'background-color': Styler.cfg.defaultBackgroundColor,
            'border-style': 'solid',
            'padding': '0 5px',
            'margin-top': '-3%',
            'right': 0,
            'margin-right': Styler.cfg.$dataSectionSource.css('padding-right')
        })
            .add(Styler.cfg.paragraphTargetSelector)
            .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.textAreaTargetSelector)
            .resetBorder()
            .cloneFont(Styler.cfg.$alternativeMonospaceFontSource)
            .cloneBorder(Styler.cfg.$codeBoxSource)
            .cloneStyles(Styler.cfg.$codeBoxSource, ['color'])
            .cloneStyles(Styler.cfg.$codeBoxSource, ['background-color'])
            .add(Styler.cfg.descriptionContainerTargetSelector)
            .noPadding()
            .add(Styler.cfg.executeBtnTargetSelector)
            .resetBorder()
            .cloneBorder(Styler.cfg.$authBtnSource)
            .cloneFont(Styler.cfg.$authBtnSource)
            .cloneStyles(Styler.cfg.$authBtnSource, ['background-color'])
            .add(Styler.cfg.operationHeaderContainerTargetSelector)
            .cloneStyles(Styler.cfg.$h5Source, ['padding', 'margin'])
            .style({ 'box-shadow': 'none' })
            .add(Styler.cfg.operationHeaderTargetSelector)
            .cloneBorder(Styler.cfg.$h5Source)
            .cloneFont(Styler.cfg.$h5Source)
            .cloneStyles(Styler.cfg.$h5Source, 'text-transform')
            .add(Styler.cfg.responseWrapperResultTargetSelector)
            .style({ 'display': 'block' })
            .add(Styler.cfg.responseContainerTargetSelector)
            .style({ 'padding': '0 0 20px 0' })
            .add(Styler.cfg.parametersTableContainerTargetSelector)
            .noPadding()
            .add(Styler.cfg.parameterNameFieldTargetSelector)
            .cloneFont(Styler.cfg.$fieldSource)
            .style({ float: 'right', width: '60px' })
            .add(Styler.cfg.parameterRequiredTargetSelector)
            .noPadding()
            .cloneFont(Styler.cfg.$requiredFieldSource)
            .style({ 'display': 'block', 'padding-top': '4px' })
            .add(Styler.cfg.parameterTypeFieldTargetSelector)
            .cloneFont(Styler.cfg.$typeSource)
            .style({ 'margin-left': '28px' })
            .add(Styler.cfg.parameterDeprecatedTargetSelector)
            .style({ 'margin-left': '28px' })
            .add(Styler.cfg.parameterSourceTargetSelector)
            .cloneStyles(Styler.cfg.$alternativeMonospaceFontSource, 'font-family')
            .style({ 'margin-left': '28px' })
            .add(Styler.cfg.responseHeaderTargetSelector)
            .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.serverResponseHeaderTargetSelector)
            .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.serverResponseStatusTargetSelector)
            .style({ 'padding-right': '10px' })
            .cloneFont(Styler.cfg.$typeSource)
            .add(Styler.cfg.serverResponseDescriptionTargetSelector)
            .style({ 'padding-top': 0 })
            .add(Styler.cfg.serverResponseSubHeaderTargetSelector)
            .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.responseMicrolightTargetSelector)
            .cloneFont(Styler.cfg.$codeSource, true)
            .cloneStyles(Styler.cfg.$codeBoxSource, 'background-color', true)
            .resetBorder()
            .add(Styler.cfg.responseCodeTargetSelector)
            .cloneFont(Styler.cfg.$codeSource, true)
            .cloneStyles(Styler.cfg.$codeBoxSource, 'background-color', true)
            .resetBorder()
            .add(`${Styler.cfg.responseClipboardBtnTargetSelector}:before`)
            .cloneFont(Styler.cfg.$btnSource)
            .style({ 'content': '"Copy"', 'display': 'block' })
            .add(Styler.cfg.responseClipboardTargetSelector)
            .cloneBorder(Styler.cfg.$btnSource)
            .style({ 'background': 'none', 'padding': '5px', 'width': '42px' })
            .add(Styler.cfg.responseClipboardBtnTargetSelector)
            .noPadding()
            .style({ 'background-image': 'none', 'height': '21px' })
            .add(Styler.cfg.responseCurlClipboardTargetSelector)
            .style({ 'right': '10px', 'bottom': '18px' })
            .add(Styler.cfg.responseDownloadTargetSelector)
            .cloneFont(Styler.cfg.$btnSource)
            .cloneBorder(Styler.cfg.$btnSource)
            .style({ 'background': 'none' });
        try_btn_1.TryBtn.$btn.on('click', Styler.createStyleElements);
    }
    static themeMatchApplies() {
        Styler.inputApplies();
        Styler.modalApplies();
        Styler.tryItBoxApplies();
    }
    static hideDisturbingElements() {
        style_builder_1.StyleBuilder
            .add(Styler.cfg.operationTryOutTargetSelector)
            .noDisplay()
            .add(Styler.cfg.responseTableTargetSelector)
            .noDisplay()
            .add(Styler.cfg.responseWrapperTargetSelector)
            .noDisplay()
            .add(Styler.cfg.responseTitleTargetSelector)
            .noDisplay()
            .add(Styler.cfg.operationHeaderDecorationTargetSelector)
            .noDisplay()
            .add(Styler.cfg.parameterRequiredMarkerTargetSelector)
            .noDisplay()
            .add(Styler.cfg.summaryTargetSelector)
            .noDisplay()
            .add(Styler.cfg.clearBtnTargetSelector)
            .noDisplay()
            .add(Styler.cfg.parametersHeadTargetSelector)
            .noDisplay()
            .add(Styler.cfg.operationTagTargetSelector)
            .noDisplay()
            .add(Styler.cfg.operationContainerTargetSelector)
            .noDisplay()
            .add(Styler.cfg.openedInformationContainerTargetSelector)
            .noDisplay()
            .add(Styler.cfg.openedSchemeContainerTargetSelector)
            .noDisplay()
            .add(Styler.cfg.openedModelsContainerTargetSelector)
            .noDisplay();
    }
    static createStyleElements() {
        setTimeout(function () {
            const marker = Styler.cfg.$fieldMarkerSource.clone();
            marker.css('float', 'left');
            marker.insertBefore(`${Styler.cfg.parameterNameFieldTargetSelector}:first-child`);
        }, 100);
        try_btn_1.TryBtn.$selected.off('click', Styler.createStyleElements);
    }
    static init() {
        Styler.hideDisturbingElements();
        Styler.authApplies();
        Styler.tryBtnApplies();
        Styler.themeMatchApplies();
        Styler.update();
    }
    static initSwaggerWrapper() {
        style_builder_1.StyleBuilder
            .add('body')
            .relative()
            .add(swagger_wrapper_1.SwaggerWrapper.cfg.wrapperSelector)
            .noPadding()
            .add(swagger_wrapper_1.SwaggerWrapper.cfg.boxSelector)
            .relative()
            .noTop()
            .noLeft()
            .noOverflow()
            .resetBorder()
            .style({ 'border-radius': '4px', 'background-color': '#ffff', width: '100%', height: '100vh', 'z-index': 1 })
            .add(swagger_wrapper_1.SwaggerWrapper.cfg.hiddenSelector)
            .hidden()
            .noWidth()
            .noHeight()
            .noCursor()
            .add(swagger_wrapper_1.SwaggerWrapper.cfg.shownSelector)
            .visible()
            .style({ cursor: 'initial', width: 'auto', height: 'auto' });
        Styler.update();
    }
}
exports.Styler = Styler;
Styler.sheet = document.createElement('style');
