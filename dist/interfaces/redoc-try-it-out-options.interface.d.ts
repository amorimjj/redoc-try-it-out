import { AuthBtnOptions } from './auth-btn-options.interface';
import { SwaggerOptions } from './swagger-options.interface';
import { TryBtnOptions } from './try-btn-options.interface';
import { StyleMatcherOptions } from './style-matcher-options.interface';
export interface RedocOptions {
    disableSearch?: boolean;
    expandDefaultServerVariables?: boolean;
    expandResponses?: boolean;
    generatedPayloadSamplesMaxDepth?: number;
    maxDisplayedEnumValues?: number;
    hideDownloadButton?: boolean;
    hideHostname?: boolean;
    hideLoading?: boolean;
    hideSchemaPattern?: boolean;
    hideSingleRequestSampleTab?: boolean;
    expandSingleSchemaField?: boolean;
    jsonSampleExpandLevel?: number;
    hideSchemaTitles?: boolean;
    simpleOneOfTypeLabel?: boolean;
    lazyRendering?: boolean;
    menuToggle?: boolean;
    nativeScrollbars?: boolean;
    noAutoAuth?: boolean;
    onlyRequiredInSamples?: boolean;
    pathInMiddlePanel?: boolean;
    requiredPropsFirst?: boolean;
    scrollYOffset?: number | string;
    selector?: string;
    function?: () => number;
    showExtensions?: boolean | Array<string>;
    sortPropsAlphabetically?: boolean;
    payloadSampleIdx?: number;
    theme?: ThemOptions;
    untrustedSpec?: boolean;
}
export interface ThemOptions {
    spacing?: {
        unit?: number;
        sectionHorizontal?: number;
        sectionVertical?: number;
    };
    breakpoints?: {
        small?: string;
        medium?: string;
        large?: string;
    };
    colors?: {
        tonalOffset?: number;
    };
    typography?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeightRegular?: number;
        fontWeightBold?: number;
        fontWeightLight?: number;
        fontFamily?: string;
        smoothing?: string;
        optimizeSpeed?: boolean;
        headings?: {
            fontFamily?: string;
            fontWeight?: number;
            lineHeight?: string;
        };
        code?: {
            fontSize?: string;
            fontFamily?: string;
            lineHeight?: number;
            fontWeight?: number;
            color?: string;
            backgroundColor?: string;
            wrap?: boolean;
        };
        links?: {
            color?: string;
            visited?: string;
            hover?: string;
        };
    };
    menu?: {
        width?: string;
        backgroundColor?: string;
        textColor?: string;
        activeTextColor?: string;
        groupItems?: {
            textTransform?: string;
        };
        level1Items?: {
            textTransform?: string;
        };
        arrow?: {
            size?: string;
            color?: string;
        };
    };
    logo?: {
        maxHeight?: string;
        maxWidth?: string;
        gutter?: string;
    };
    rightPanel?: {
        backgroundColor?: string;
        width?: string;
        textColor?: string;
    };
}
export interface DependenciesVersions {
    'jquery': string;
    'jqueryScrollTo': string;
}
export interface RedocTryItOutOptions extends RedocOptions {
    redocVersion?: string;
    tryItOutEnabled?: boolean;
    tryItBoxContainerId?: string;
    containerId?: string;
    operationBoxSelector?: string;
    selectedOperationClass?: string;
    dependenciesVersions?: DependenciesVersions;
    authBtn?: AuthBtnOptions;
    tryBtn?: TryBtnOptions;
    swaggerOptions?: SwaggerOptions;
    stylerMatcher?: StyleMatcherOptions;
}
