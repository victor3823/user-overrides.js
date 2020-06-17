user_pref("_user.js.parrot", "overrides section syntax error");


// 0412: disable SB checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.remote.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.url", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_SAFEBROWSING_API_KEY%");


/*
 * UNCOMMENT TO SAVE HISTORY
 */
// 2802: enable Firefox to clear items on shutdown
// user_pref("privacy.sanitize.sanitizeOnShutdown", false);

// 0860: disable search and form history
// user_pref("browser.formfill.enable", true);


/*
 * RFP SETTINGS
 */
// 4501: enable privacy.resistFingerprinting
// user_pref("privacy.resistFingerprinting", false);

// 4503: disable mozAddonManager Web API
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); // [HIDDEN PREF]

// 4504: enable RFP letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]


/*
 * [SETUP-*] TAGS
 */
// 0211: enforce US English locale regardless of the system locale
user_pref("javascript.use_us_english_locale", false); // [HIDDEN PREF]

// 0801: disable location bar using search
user_pref("keyword.enabled", true);

// 0807: disable live search suggestions
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// 1001: disable disk cache
user_pref("browser.cache.disk.enable", true);

// 1021: disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 0);

// 1023: set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 15000);

// 1401: disable websites choosing fonts (0=block, 1=allow)
user_pref("browser.display.use_document_fonts", 1);

/* 1604: CROSS ORIGIN: control the amount of information to send [FF52+]
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // [DEFAULT: 0]

// 1825: disable widevine CDM (Content Decryption Module)
user_pref("media.gmp-widevinecdm.visible", true);
user_pref("media.gmp-widevinecdm.enabled", true);

// 1830: disable all DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", true);

// 2302: disable service workers [FF32, FF44-compat]
user_pref("dom.serviceWorkers.enabled", true);

// 2305: disable Push Notifications [FF44+]
user_pref("dom.push.enabled", true);

// 2420: disable asm.js [FF22+]
user_pref("javascript.options.asmjs", true);

// 2422: disable WebAssembly [FF52+]
user_pref("javascript.options.wasm", true);


/*
 * OTHERS FROM https://www.privacytools.io/browsers/#about_config
 */
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);


/*
 * PERSONAL PREFERENCES
 */

// 0102: set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
user_pref("browser.startup.page", 1);

// 0103: set HOME+NEWWINDOW page
user_pref("browser.startup.homepage", "about:home");

// 0104: set NEWTAB page
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtab.preload", true);

// 0105d: disable Activity Stream recent Highlights in the Library [FF57+]
user_pref("browser.library.activity-stream.enabled", false);

// disable autocopy default [LINUX]
user_pref("clipboard.autocopy", false); 

// 0901: disable saving passwords
user_pref("signon.rememberSignons", false);

// 2031: disable autoplay of HTML5 media if you interacted with the site [FF66+]
user_pref("media.autoplay.enabled.user-gestures-needed", true);

// Force Firefox to use a GTK theme
user_pref("widget.content.gtk-theme-override", "Arc-Dark");


/*
 * PROFILE-SPECIFIC
 */
/* 1603: CROSS ORIGIN: control when to send a referer
 * 0=always (default), 1=only if base domains match, 2=only if hosts match
 * NOTE: set to 0 to "unbreak" websites, set to 2 to minimise fingerprint*/
user_pref("network.http.referer.XOriginPolicy", 0);

/* Uncomment these (replace the * with a /) and disable RFP to use WebRTC (Jitsi Meet, Discord, etc)

// 2001: disable WebRTC (Web Real-Time Communication)
user_pref("media.peerconnection.enabled", true);

// 2002: limit WebRTC IP leaks if using WebRTC
user_pref("media.peerconnection.ice.default_address_only", false);
user_pref("media.peerconnection.ice.no_host", false); // [FF51+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", false); // [FF70+]

// 2022: disable screensharing
user_pref("media.getusermedia.screensharing.enabled", true);
user_pref("media.getusermedia.browser.enabled", true);
user_pref("media.getusermedia.audiocapture.enabled", true);

// 2510: disable Web Audio API [FF51+]
user_pref("dom.webaudio.enabled", true);

// 2010: disable WebGL (Web Graphics Library)
user_pref("webgl.disabled", false);

// 2012: limit WebGL
user_pref("webgl.min_capability_mode", false);

/***/


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
