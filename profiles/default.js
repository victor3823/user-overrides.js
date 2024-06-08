user_pref("_user.js.parrot", "Default profile: syntax error");


/* override recipe: enable session restore ***/
user_pref("browser.startup.page", 3); // 0102
user_pref("browser.privatebrowsing.autostart", false); // 0110 required if you had it set as true
  // user_pref("browser.sessionstore.privacy_level", 0); // 1003 optional to restore cookies/formdata
user_pref("privacy.clearOnShutdown.history", false); // 2811
user_pref("privacy.clearOnShutdown.downloads", false); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false); // [FF128+] [DEFAULT: true]
user_pref("privacy.cpd.history", false); // 2820 optional to match when you use Ctrl-Shift-Del
user_pref("privacy.clearHistory.historyFormDataAndDownloads", false);
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", false);

// Enable Firefox Accounts
user_pref("identity.fxaccounts.enabled", true);


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
