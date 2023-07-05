export interface StyleMatcherOptions {

  informationContainerTargetSelector?: string;
  schemeContainerTargetSelector?: string;
  modelsContainerTargetSelector?: string;

  inputTargetSelector?: string;
  selectTargetSelector?: string;
  textAreaTargetSelector?: string;
  paragraphTargetSelector?: string;
  executeBtnTargetSelector?: string;

  responseContainerTargetSelector?: string;
  responseTitleTargetSelector?: string;
  responseHeaderTargetSelector?: string;
  responseTableTargetSelector?: string;
  responseWrapperTargetSelector?: string;
  responseWrapperResultTargetSelector?: string;
  responseMicrolightTargetSelector?: string;
  responseCodeTargetSelector?: string;
  responseClipboardTargetSelector?: string;
  responseClipboardBtnTargetSelector?: string;
  responseCurlClipboardTargetSelector?: string;
  responseDownloadTargetSelector?: string;

  serverResponseHeaderTargetSelector?: string;
  serverResponseStatusTargetSelector?: string;
  serverResponseDescriptionTargetSelector?: string;
  serverResponseSubHeaderTargetSelector?: string;

  clearBtnTargetSelector?: string;

  operationTagTargetSelector?: string;
  operationHeaderContainerTargetSelector?: string;
  operationHeaderTargetSelector?: string;
  operationHeaderDecorationTargetSelector?: string;
  operationTryOutTargetSelector?: string;

  descriptionContainerTargetSelector?: string;
  summaryTargetSelector?: string;

  modalHeaderContainerTargetSelector?: string;
  modalHeaderTargetSelector?: string;
  modalTitleTargetSelector?: string;
  modalTitleCodeTargetSelector?: string;
  modalLabelTargetSelector?: string;
  modalCodeTargetSelector?: string;
  modalBtnTargetSelector?: string;

  parametersTableContainerTargetSelector?: string;
  parametersHeadTargetSelector?: string;
  parameterNameFieldTargetSelector?: string;
  parameterTypeFieldTargetSelector?: string;
  parameterDeprecatedTargetSelector?: string;
  parameterSourceTargetSelector?: string;
  parameterRequiredMarkerTargetSelector?: string;
  parameterRequiredTargetSelector?: string;

  apiContentSourceSelector?: string;
  inputSourceSelector?: string;
  codeSourceSelector?: string;
  codeBoxSourceSelector?: string;
  dataSectionSourceSelector?: string;
  fieldSourceSelector?: string;
  requiredFieldSourceSelector?: string;
  fieldMarkerSourceSelector?: string;
  sanSerifFontSourceSelector?: string;
  alternativeMonospaceFontSourceSelector?: string;
  alternativeSansSerifSourceSelector?: string;
  h2SourceSelector?: string;
  h3SourceSelector?: string;
  h5SourceSelector?: string;
  labelSourceSelector?: string;
  typeSourceSelector?: string;
  btnSourceSelector?: string;
  defaultBorderColorSelector?: string;
  authBtnSourceSelector?: string;
  httpVerbSourceSelector?: string;
  tryItOutEnabled: boolean;
  url: string;
}