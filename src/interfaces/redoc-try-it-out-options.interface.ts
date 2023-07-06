import { AuthBtnOptions } from './auth-btn-options.interface';
import { SwaggerOptions } from './swagger-options.interface';
import { TryBtnOptions } from './try-btn-options.interface';
import { StyleMatcherOptions } from './style-matcher-options.interface';

export interface RedocOptions {

  /** disable search indexing and search box */
  disableSearch?: boolean;
  /** enable expanding default server variables, default false.*/
  expandDefaultServerVariables?: boolean;
  /** specify which responses to expand by default by response codes.
   * Values should be passed as comma-separated list without spaces e.g. expandResponses="200,201".
   * Special value "all" expands all responses by default.
   * Be careful: this option can slow-down documentation rendering time.
   **/
  expandResponses?: boolean;
  /** set the maximum render depth for JSON payload samples (responses and request body). The default value is 10.*/
  generatedPayloadSamplesMaxDepth?: number;
  /** display only specified number of enum values. hide rest values under spoiler. */
  maxDisplayedEnumValues?: number;
  /** do not show "Download" spec button. THIS DOESN'T MAKE YOUR SPEC PRIVATE, it just hides the button. */
  hideDownloadButton?: boolean;
  /** if set, the protocol and hostname is not shown in the operation definition. */
  hideHostname?: boolean;
  /** do not show loading animation. Useful for small docs. */
  hideLoading?: boolean;
  /** if set, the pattern is not shown in the schema. */
  hideSchemaPattern?: boolean;
  /** do not show the request sample tab for requests with only one sample. */
  hideSingleRequestSampleTab?: boolean;
  /** automatically expand single field in a schema */
  expandSingleSchemaField?: boolean;
  /** set the default expand level for JSON payload samples (responses and request body).
   * Special value "all" expands all levels.
   * The default value is 2.
   **/
  jsonSampleExpandLevel?: number;
  /** do not display schema title next to to the type */
  hideSchemaTitles?: boolean;
  /** show only unique oneOf types in the label without titles */
  simpleOneOfTypeLabel?: boolean;
  /** Not implemented yet if set, enables lazy rendering mode in ReDoc.
   * This mode is useful for APIs with big number of operations (e.g. > 50).
   * In this mode ReDoc shows initial screen ASAP and then renders the rest
   * operations asynchronously while showing progress bar on the top.
   * Check out the demo for the example.
   **/
  lazyRendering?: boolean;
  /** if true clicking second time on expanded menu item will collapse it, default true. */
  menuToggle?: boolean;
  /** use native scrollbar for sidemenu instead of perfect-scroll (scrolling performance optimization for big specs). */
  nativeScrollbars?: boolean;
  /** do not inject Authentication section automatically. */
  noAutoAuth?: boolean;
  /** shows only required fields in request samples. */
  onlyRequiredInSamples?: boolean;
  /** show path link and HTTP verb in the middle panel instead of the right one. */
  pathInMiddlePanel?: boolean;
  /** show required properties first ordered in the same order as in required array. */
  requiredPropsFirst?: boolean;
  /** If set, specifies a vertical scroll-offset.
   * This is often useful when there are fixed positioned elements at the top of the page, such as navbars, headers etc;
   * scrollYOffset can be specified in various ways: number: A fixed number of pixels to be used as offset.
   **/
  scrollYOffset?: number|string;
  /** selector of the element to be used for specifying the offset.
   * The distance from the top of the page to the element's bottom will be used as offset.
   **/
  selector?: string;
  /** A getter function. Must return a number representing the offset (in pixels). */
  function?: () => number;
  /** show vendor extensions ("x-" fields).
   * Extensions used by ReDoc are ignored. Can be boolean or an array of string with names of extensions to display.
   **/
  showExtensions?: boolean|Array<string>;
  /** sort properties alphabetically. */
  sortPropsAlphabetically?: boolean;
  /** if set, payload sample will be inserted at this index or last. Indexes start from 0.*/
  payloadSampleIdx?: number;
  /** ReDoc theme. For details check theme docs. */
  theme?: ThemOptions;
  /** if set, the spec is considered untrusted and all HTML/markdown is sanitized to prevent XSS.
   * Disabled by default for performance reasons. Enable this option if you work with untrusted user data!
   **/
  untrustedSpec?: boolean;
}

export interface ThemOptions {

  spacing?: {
    /** main spacing unit used in autocomputed theme values later - default 5 */
    unit?: number,
    /** Horizontal section padding. COMPUTED: spacing.unit * 8 */
    sectionHorizontal?: number,
    /** Horizontal section padding. COMPUTED: spacing.unit * 8 */
    sectionVertical?: number
  };

  /** breakpoints for switching three/two and mobile view layouts */
  breakpoints?: {
    /** '50rem' */
    small?: string,
    /** '85rem' */
    medium?: string,
    /** '105rem' */
    large?: string
  }

  colors?: {
    /** default tonal offset used in computations - default 0.3 */
    tonalOffset?: number
  }

  typography?: {
    /** '14px' */
    fontSize?: string,
    /** '1.5em' */
    lineHeight?: string,
    /** 400 */
    fontWeightRegular?: number,
    /** 600 */
    fontWeightBold?: number,
    /** 300 */
    fontWeightLight?: number,
    /** 'Roboto, sans-serif' */
    fontFamily?: string,
    /** 'antialiased' */
    smoothing?: string,
    /** true */
    optimizeSpeed?: boolean

    headings?: {
      /** 'Montserrat, sans-serif' */
      fontFamily?: string,
      /** 400 */
      fontWeight?: number,
      /** '1.6em' */
      lineHeight?: string
    }

    /** inline code styling */
    code?: {
      /** '13px' */
      fontSize?: string,
      /** 'Courier, monospace' */
      fontFamily?: string,
      /** COMPUTED: typography.lineHeight */
      lineHeight?: number,
      /** COMPUTED: typography.fontWeightRegular */
      fontWeight?: number,
      /** '#e53935' */
      color?: string,
      /** 'rgba(38, 50, 56, 0.05)' */
      backgroundColor?: string,
      /** whether to break word for inline blocks (otherwise they can overflow) - default: false */
      wrap?: boolean
    }

    links?: {
      /** COMPUTED: colors.primary.main */
      color?: string,
      /** COMPUTED: typography.links.color */
      visited?: string,
      /** COMPUTED: lighten(0.2 typography.links.color) */
      hover?: string
    }
  }

  menu?: {
    /** '260px' */
    width?: string,
    /** '#fafafa' */
    backgroundColor?: string,
    /** '#333333' */
    textColor?: string,
    /** COMPUTED: theme.menu.textColor (if set by user) or theme.colors.primary.main */
    activeTextColor?: string,

    /** Group headings */
    groupItems?: { //
      /** 'uppercase' */
      textTransform?: string,
    }

    /** Level 1 items like tags or section 1st level items */
    level1Items?: {
      /** 'none' */
      textTransform?: string
    }

    /** menu arrow */
    arrow?: {
      /** '1.5em' */
      size?: string,
      /** COMPUTED: theme.menu.textColor */
      color?: string
    }
  }

  logo?: {
    /** COMPUTED: menu.width */
    maxHeight?: string,
    /** COMPUTED: menu.width */
    maxWidth?: string,
    /** logo image padding - default: '2px' */
    gutter?: string
  }

  rightPanel?: {
    /** '#263238' */
    backgroundColor?: string,
    /** '40%' */
    width?: string,
    /** '#ffffff' */
    textColor?: string
  }
}

export interface DependenciesVersions {
  'jquery': string;
  'jqueryScrollTo': string;
}

export interface RedocTryItOutOptions extends RedocOptions {
  redocScriptUrl?: string;
  tryItOutEnabled?: boolean;
  tryItBoxContainerId?: string;
  containerId?: string;
  operationBoxSelector?: string;
  selectedOperationClass?: string;
  dependenciesVersions?: DependenciesVersions;
  authBtn?: AuthBtnOptions;
  tryBtn? : TryBtnOptions;
  swaggerOptions?: SwaggerOptions;
  stylerMatcher?: StyleMatcherOptions;
}
