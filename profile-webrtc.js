user_pref("_user.js.parrot", "WebRTC profile: syntax error");


// 2811: Clear-on-shutdown items
user_pref("privacy.clearOnShutdown.downloads", false); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", false);   // [DEFAULT: true]

// 2812: reset default items to clear with Ctrl-Shift-Del (to match 2811)
user_pref("privacy.cpd.history", false);  // [DEFAULT: true]

// 4501: Disable RFP
user_pref("privacy.resistFingerprinting", false);

// 2010: Enable WebGL (Web Graphics Library)
user_pref("webgl.disabled", false);


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
