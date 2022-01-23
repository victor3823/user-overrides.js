user_pref("_user.js.parrot", "Default profile: syntax error");


// 2811: Clear-on-shutdown items
user_pref("privacy.clearOnShutdown.downloads", false); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", false);   // [DEFAULT: true]

// 2812: reset default items to clear with Ctrl-Shift-Del (to match 2811)
user_pref("privacy.cpd.history", false);  // [DEFAULT: true]

// 0102: restore session on startup
user_pref("browser.startup.page", 3);

/* 1603: CROSS ORIGIN: control when to send a referer
 * 0=always (default), 1=only if base domains match, 2=only if hosts match
 * NOTE: Use Smart Referer for more granular control */
user_pref("network.http.referer.XOriginPolicy", 0);

// Enable Firefox Accounts
user_pref("identity.fxaccounts.enabled", true);


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
