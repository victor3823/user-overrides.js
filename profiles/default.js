user_pref("_user.js.parrot", "Default profile: syntax error");


/* override recipe: enable session restore ***/
user_pref("browser.startup.page", 3); // 0102
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false); // 2811 FF128+
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false); // 2812 FF136+

// 2820 optional to match when you use settings>Cookies and Site Data>Clear Data
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", false); // FF128+
user_pref("privacy.clearSiteData.browsingHistoryAndDownloads", false); // 2821 FF136+

// 2830 optional to match when you use Ctrl-Shift-Del (settings>History>Custom Settings>Clear History)
user_pref("privacy.clearHistory.historyFormDataAndDownloads", false); // FF128+
user_pref("privacy.clearHistory.browsingHistoryAndDownloads", false); // 2831 FF136+


/* RFPTargets (FPP overrides) */
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.pbmode", false);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.overrides", "+AllTargets,-CSSPrefersColorScheme,-FontVisibilityRestrictGenerics,-JSLocale,-WebGLRenderCapability");


// Enable Firefox Accounts
user_pref("identity.fxaccounts.enabled", true);


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
