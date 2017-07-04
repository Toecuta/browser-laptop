module.exports = {
  minimizeButton: '.min-btn',
  maximizeButton: '.max-btn',
  closeButton: '.close-btn',
  urlInput: '#urlInput',
  activeWebview: '.frameWrapper.isActive webview',
  activeTab: '[data-test-active-tab]',
  activeTabTitle: '[data-test-active-tab] [data-test-id="tabTitle"]',
  activeTabFavicon: '[data-test-active-tab] [data-test-favicon]',
  pinnedTabsTabs: '.pinnedTabs [data-test-id="tab"]',
  tabsTabs: '.tabs [data-test-id="tab"]',
  navigator: '#navigator',
  navigatorLoadTime: '#navigator .loadTime',
  newFrameButton: '.tabs .newFrameButton',
  tabPage: '.tabPage',
  tabPage1: '[data-tab-page="0"]',
  tabPage2: '[data-tab-page="1"]',
  closeTab: '[data-test-id="closeTabIcon"]',
  urlbarIcon: '[data-test-id="urlBarIcon"]',
  urlBarSuggestions: '.urlBarSuggestions',
  titleBar: '#titleBar',
  navigatorBookmarked: '[data-test-id="bookmarked"]',
  navigatorNotBookmarked: '[data-test-id="notBookmarked"]',
  bookmarksToolbar: '[data-test-id="bookmarksToolbar"]',
  bookmarkNameInput: '[data-test-id="bookmarkNameInput"]',
  bookmarkLocationInput: '[data-test-id="bookmarkLocationInput"]',
  notificationBar: '[data-test-id="notificationBar"]',
  errorContent: '.errorContent',
  errorUrl: '.errorUrl',
  errorText: '.errorText',
  findBar: '.findBar',
  findBarInput: '.searchStringContainer input',
  findBarMatches: '.foundResults',
  findBarMatchCase: '#caseSensitivityCheckbox',
  findBarNextButton: '[data-test-id="findBarNextButton"]',
  findBarPrevButton: '[data-test-id="findBarPrevButton"]',
  findBarClearButton: '.findClear',
  braveMenu: '.braveMenu:not(.braveShieldsDisabled)',
  braveMenuDisabled: '.braveMenu.braveShieldsDisabled',

  // braveryPanelTest.js
  braveryPanel: '[data-test-id="braveryPanel"]',
  braveryPanelCompact: '[data-test-id="braveryPanelCompact"]',
  adsBlockedStat: '[data-test-id="adsBlockedStat"]',
  httpsEverywhereStat: '[data-test-id="redirectedResourcesStat"]',
  noScriptStat: '[data-test-id="noScriptStat"]',
  fpStat: '[data-test-id="fpStat"]',
  adsBlockedControl: '[data-test-id="adsBlockedControl"]',
  showAdsOption: '[data-test-id="showAdsOption"]',
  blockAdsOption: '[data-test-id="blockAdsOption"]',
  noScriptSwitch: '[data-test-id="noScriptSwitch"]  .switchMiddle',
  cookieControl: '[data-test-id="cookieControl"]',
  allowAllCookiesOption: '[data-test-id="allowAllCookies"]',
  blockAllCookiesOption: '[data-test-id="blockAllCookies"]',
  fpSwitch: '[data-test-id="fingerprintingProtectionSwitch"] .switchMiddle',

  braveryPanelContainer: '[data-test-id="braveryPanelContainer"]',
  httpsEverywhereSwitch: '[data-test-id="httpsEverywhereSwitch"] .switchMiddle',
  safeBrowsingSwitch: '[data-test-id="safeBrowsingSwitch"] .switchMiddle',
  noScriptNavButton: '[data-test-id="noScriptButton"]',
  noScriptInfo: '.noScriptInfo',
  noScriptAllowTempButton: '[data-l10n-id="allowScriptsTemp"]',
  noScriptAllowOnceButton: '[data-l10n-id="allowScriptsOnce"]',
  noScriptAllowButton: '[data-l10n-id="allowScripts"]',
  backButton: '.topLevelStartButtons .backButton',
  forwardButton: '.topLevelStartButtons .forwardButton',
  reloadButton: '[data-test-id="reloadButton"]',
  homeButton: '[data-test-id="homeButton"]',
  clearBrowsingDataButton: '[data-test-id="clearBrowsingDataButton"]',
  clearBrowsingDataPanel: '[data-test-id="clearBrowsingDataPanel"]',
  clearDataButton: '[data-test-id="clearDataButton"]',
  securityTab: '[data-l10n-id="security"]',
  paymentsTab: '[data-l10n-id="payments"]',
  syncTab: '[data-l10n-id="sync"]',
  tabsTab: '[data-l10n-id="tabs"]',
  doneButton: '[data-l10n-id="done"]',
  homepageInput: '[data-l10n-id="homepageInput"]',
  compactBraveryPanelSwitch: '[data-test-id="compactBraveryPanelSwitch"] .switchBackground',
  syncSwitch: '.syncContainer .switchBackground',
  walletSwitch: '[data-test-id="enablePaymentsSwitch"] .switchBackground',
  addFundsButton: '[data-test2-id="addFunds"]',
  fundsSelectBox: '[data-test-id="fundsSelectBox"]',
  paymentsStatus: '[data-test-id="walletStatus"]',
  siteSettingItem: '.siteSettingItem',
  ledgerTable: '[data-test-id="ledgerTable"]',
  bitcoinDashboard: '[data-test-id="bitcoinDashboard"]',
  advancedSettingsDialog: '[data-test-id="advancedSettings"]',
  advancedSettingsButton: '[data-test-id="advancedSettingsButton"]',
  backupWallet: '[data-l10n-id="backupLedger"]',
  recoverWallet: '[data-l10n-id="recoverLedger"]',
  recoverWalletFromFileButton: '[data-l10n-id="recoverFromFile"]',
  recoveryOverlayOkButton: '[data-l10n-id="ok"]',
  saveWalletFile: '[data-l10n-id="saveRecoveryFile"]',
  balanceRecovered: '[data-l10n-id="balanceRecovered"]',
  balanceNotRecovered: '[data-l10n-id="ledgerRecoveryFailedMessage"]',
  modalCloseButton: 'button.close',
  coinbaseBuyButton: '[data-l10n-id="add"]',
  paymentQRCode: '[title="Brave wallet QR code"]',
  removeButton: '[data-l10n-id="remove"]',
  paymentHistoryButton: '[data-test-id="paymentHistoryButton"]',
  paymentsWelcomePage: '[data-test-id="paymentsMessage"]',
  autofillAddressPanel: '[data-test-id="autofillAddressPanel"]',
  autofillCreditCardPanel: '[data-test-id="autofillCreditCardPanel"]',
  allowRunInsecureContentButton: '[data-test-id="allowRunInsecureContentButton"]',
  dismissAllowRunInsecureContentButton: '[data-test-id="dismissAllowRunInsecureContentButton"]',
  denyRunInsecureContentButton: '[data-test-id="denyRunInsecureContentButton"]',
  dismissDenyRunInsecureContentButton: '[data-test-id="dismissDenyRunInsecureContentButton"]',
  tabsToolbar: '.tabsToolbar',
  hamburgerMenu: '.menuButton',
  contextMenu: '.contextMenu',
  okButton: '[data-l10n-id="ok"]',
  customFiltersInput: '[data-test-id="customFiltersInput"]',
  showAllLedger: '[data-l10n-id="showAll"]',
  // used by the MessageBox control
  msgBoxSuppress: '[data-test-id^="msgBoxTab_"] .switchMiddle',
  msgBoxSuppressTrue: '[data-test-id^="msgBoxTab_"] .switchMiddle .switchBackground.switchedOn',
  msgBoxMessage: '[data-test-id="msgBoxMessage"]',
  msgBoxTitle: '[data-test-id="msgBoxTitle"]',

  // download
  downloadBar: '.downloadsBar',
  downloadItem: '.downloadItem',
  downloadPause: '[data-test-id="pauseButton"]',
  downloadResume: '[data-test-id="resumeButton"]',
  downloadCancel: '[data-test-id="cancelButton"]',
  downloadReDownload: '[data-test-id="redownloadButton"]',
  downloadDelete: '[data-test-id="deleteButton"]',
  downloadDeleteConfirm: '[data-test-id="confirmDeleteButton"]',
  downloadRemoveFromList: '[data-test-id="downloadRemoveFromList"]',

  siteInfoDialog: '[data-test-id="siteInfoDialog"]',
  viewCertificateButton: '[data-test-id="viewCertificate"]',

  // about:preferences#tabs
  tabsPerTabPageActiveOption: '[data-test-id="tabsPerTabPageOption"][data-test-active="true"]',
  tabCloseActionActiveOption: '[data-test-id="tabCloseActionActiveOption"][data-test-active="true"]'
}
