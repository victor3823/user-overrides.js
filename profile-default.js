user_pref("_user.js.parrot", "Default profile: syntax error");


// 2811: Clear-on-shutdown items
user_pref("privacy.clearOnShutdown.downloads", false); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", false);   // [DEFAULT: true]

// 2812: reset default items to clear with Ctrl-Shift-Del (to match 2811)
user_pref("privacy.cpd.history", false);  // [DEFAULT: true]

// 0102: restore session on startup
user_pref("browser.startup.page", 3);

// Enable Firefox Accounts
user_pref("identity.fxaccounts.enabled", true);


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
