user_pref("_user.js.parrot", "WebRTC profile: syntax error");


// 2802: Save history
user_pref("privacy.sanitize.sanitizeOnShutdown", false);

/* 2801: save cookies
 * 0=keep until they expire (default), 2=keep until you close Firefox
 */
user_pref("network.cookie.lifetimePolicy", 0);

// 4501: Disable RFP
user_pref("privacy.resistFingerprinting", false);

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


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
