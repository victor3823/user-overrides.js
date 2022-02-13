user_pref("_arkenfox.version", "97.0");

user_pref("_user.js.parrot", "base overrides: syntax error");


/*
 * RFP SETTINGS
 */
// 4504: disable RFP letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]


/*
 * [SETUP-*] TAGS
 */
// 0211: enforce US English locale regardless of the system locale
//user_pref("javascript.use_us_english_locale", false); // [HIDDEN PREF]

// 0801: Use location bar to search
user_pref("keyword.enabled", true);

// 0807: enable live search suggestions
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// 1001: enable disk cache
user_pref("browser.cache.disk.enable", true);

// 1021: enable storing extra session data
user_pref("browser.sessionstore.privacy_level", 0);

// 1023: set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 15000);

// 1825: enable widevine CDM (Content Decryption Module)
user_pref("media.gmp-widevinecdm.visible", true);
user_pref("media.gmp-widevinecdm.enabled", true);

// 1830: enable DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", true);

/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) ***/
// 1201: Don't require safe negotiation (a warning is still shown)
user_pref("security.ssl.require_safe_negotiation", false);


/*
 * PERSONAL PREFERENCES
 */

// 0102: set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
user_pref("browser.startup.page", 1);

// 0103: set HOME+NEWWINDOW page
user_pref("browser.startup.homepage", "about:home");

// 0104: set NEWTAB page
user_pref("browser.newtabpage.enabled", true);

// 0105d: disable Activity Stream recent Highlights in the Library [FF57+]
user_pref("browser.library.activity-stream.enabled", false);

// disable autocopy default [LINUX]
user_pref("clipboard.autocopy", false); 

// 0901: disable saving passwords
user_pref("signon.rememberSignons", false);

// 2404: enable clipboard commands (cut/copy) from "non-privileged" content [FF41+]
user_pref("dom.allow_cut_copy", true);

// Disable smooth scrolling
user_pref("general.smoothScroll", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Disable Firefox Accounts
user_pref("identity.fxaccounts.enabled", false);

// Disable "what's new"
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); 


/*
 * THEMING 
 */

// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Proton Enabled #127
user_pref("browser.proton.enabled", true);

// Proton Tooltip
user_pref("browser.proton.places-tooltip.enabled", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Color Mix - 88 Above
user_pref("layout.css.color-mix.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// about:home Search Bar - 89 Above
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// Browser Theme Based Scheme - Will be activate 95 Above
// user_pref("layout.css.prefers-color-scheme.content-override", 3);

// ** Useful Options ***********************************************************
// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

// Draw in Titlebar
// user_pref("browser.tabs.drawInTitlebar", true);
// user_pref("browser.tabs.inTitlebar",        1); // Nightly, 96 Above

user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
