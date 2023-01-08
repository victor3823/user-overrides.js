user_pref("_arkenfox.version", "108");

user_pref("_user.js.parrot", "base overrides: syntax error");


/*
 * RFP SETTINGS
 */
// 4504: disable RFP letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]


/*
 * [SETUP-*] TAGS
 */
// 0801: Use location bar to search
user_pref("keyword.enabled", true);

// 1001: enable disk cache
user_pref("browser.cache.disk.enable", true);

// 1021: enable storing extra session data
user_pref("browser.sessionstore.privacy_level", 0);

// 1825: enable widevine CDM (Content Decryption Module)
user_pref("media.gmp-widevinecdm.visible", true);
user_pref("media.gmp-widevinecdm.enabled", true);

// 1830: enable DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", true);

/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) ***/
// 1201: Don't require safe negotiation (a warning is still shown)
user_pref("security.ssl.require_safe_negotiation", false);


/*
 * Disable JIT
 */
/* 5504: disable asm.js [FF22+]
 * [1] http://asmjs.org/
 * [2] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=asm.js
 * [3] https://rh0dev.github.io/blog/2017/the-return-of-the-jit/ ***/
user_pref("javascript.options.asmjs", false);
/* 5505: disable Ion and baseline JIT to harden against JS exploits
 * [NOTE] When both Ion and JIT are disabled, and trustedprincipals
 * is enabled, then Ion can still be used by extensions (1599226)
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+jit
 * [2] https://microsoftedge.github.io/edgevr/posts/Super-Duper-Secure-Mode/ ***/
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
/* 5506: disable WebAssembly [FF52+]
 * Vulnerabilities [1] have increasingly been found, including those known and fixed
 * in native programs years ago [2]. WASM has powerful low-level access, making
 * certain attacks (brute-force) and vulnerabilities more possible
 * [STATS] ~0.2% of websites, about half of which are for crytopmining / malvertising [2][3]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=wasm
 * [2] https://spectrum.ieee.org/tech-talk/telecom/security/more-worries-over-the-security-of-web-assembly
 * [3] https://www.zdnet.com/article/half-of-the-websites-using-webassembly-use-it-for-malicious-purposes ***/
user_pref("javascript.options.wasm", false);


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

/* 5017: disable Form Autofill
 * If .supportedCountries includes your region (browser.search.region) and .supported
 * is "detect" (default), then the UI will show. Stored data is not secure, uses JSON
 * [NOTE] Heuristics controls Form Autofill on forms without @autocomplete attributes
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]

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


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
