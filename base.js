user_pref("_arkenfox.version", "99.0");

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

// ** Theme Related Options ****************************************************
// == Theme Distribution Settings ==============================================
user_pref("userChrome.tab.connect_to_window",          true); // Original, Photon
user_pref("userChrome.tab.color_like_toolbar",         true); // Original, Photon

user_pref("userChrome.tab.lepton_like_padding",        true); // Original
// user_pref("userChrome.tab.photon_like_padding",     true); // Photon

user_pref("userChrome.tab.dynamic_separtor",           true); // Original, Proton
// user_pref("userChrome.tab.static_separator",        true); // Photon

user_pref("userChrome.tab.newtab_button_like_tab",     true); // Original
// user_pref("userChrome.tab.newtab_button_smaller",   true); // Photon
// user_pref("userChrome.tab.newtab_button_proton",    true); // Proton

user_pref("userChrome.icon.panel_full",                true); // Original, Proton
// user_pref("userChrome.icon.panel_photon",           true); // Photon
// user_pref("userChrome.icon.panel_sparse",           true); // Just option

// Original Only
user_pref("userChrome.tab.box_shadow",                 true);
user_pref("userChrome.tab.bottom_rounded_corner",      true);

// Photon Only
// user_pref("userChrome.tab.photon_like_contextline", true);
// user_pref("userChrome.rounding.square_tab",         true);

// == Theme Compatibility Settings =============================================
// user_pref("userChrome.compatibility.covered_header_image", true);
// user_pref("userChrome.compatibility.panel_cutoff",         true);
// user_pref("userChrome.compatibility.navbar_top_border",    true);
// user_pref("userChrome.compatibility.dynamic_separator",    true); // Need dynamic_seperator

// user_pref("userChrome.compatiblity.os.linux_non_native_titlebar_button", true);

// == Theme Custom Settings ====================================================
// -- User Chrome --------------------------------------------------------------
// user_pref("userChrome.decoration.disable_panel_animate",    true);
// user_pref("userChrome.decoration.disable_sidebar_animate",  true);

// user_pref("userChrome.theme.proton_color.dark_blue_accent", true);

// user_pref("userChrome.rounding.square_button",              true);
// user_pref("userChrome.rounding.square_panel",               true);
// user_pref("userChrome.rounding.square_panelitem",           true);
// user_pref("userChrome.rounding.square_menupopup",           true);
// user_pref("userChrome.rounding.square_menuitem",            true);
// user_pref("userChrome.rounding.square_field",               true);
// user_pref("userChrome.rounding.square_checklabel",          true);

// user_pref("userChrome.padding.first_tab",                   true);
// user_pref("userChrome.padding.drag_space",                  true);

// user_pref("userChrome.padding.menu_compact",                true);
// user_pref("userChrome.padding.urlView_expanding",           true);
// user_pref("userChrome.padding.urlView_result",              true);
// user_pref("userChrome.padding.panel_header",                true);

// user_pref("userChrome.urlView.move_icon_to_left",           true);
// user_pref("userChrome.urlView.go_button_when_typing",       true);
// user_pref("userChrome.urlView.always_show_page_actions",    true);

// user_pref("userChrome.tab.on_bottom",                       true);
// user_pref("userChrome.tab.on_bottom.above_bookmark",        true); // Need on_bottom
// user_pref("userChrome.tab.on_bottom.menubar_on_top",        true); // Need on_bottom
// user_pref("userChrome.tab.always_show_tab_icon",            true);
// user_pref("userChrome.tab.close_button_at_pinned",          true);
// user_pref("userChrome.tab.close_button_at_hover.always",    true); // Need close_button_at_hover
// user_pref("userChrome.tab.sound_show_label",                true); // Need remove sound_hide_label
// user_pref("userChrome.tab.centered_label",                  true);

// user_pref("userChrome.panel.remove_strip",                  true);
// user_pref("userChrome.panel.full_width_separator",          true);
// user_pref("userChrome.panel.full_width_padding",            true);

// user_pref("userChrome.icon.account_image_to_right",         true);
// user_pref("userChrome.icon.account_label_to_right",         true);

// -- User Content -------------------------------------------------------------
// user_pref("userContent.player.ui.twoline",                  true);

// user_pref("userContent.page.proton_color.dark_blue_accent", true);
// user_pref("userContent.page.proton_color.system_accent",    true);

// == Theme Default Settings ===================================================
// -- User Chrome --------------------------------------------------------------
user_pref("userChrome.compatibility.theme",       true);
user_pref("userChrome.compatibility.os",          true);

user_pref("userChrome.theme.built_in_contrast",   true);
user_pref("userChrome.theme.system_default",      true);
user_pref("userChrome.theme.proton_color",        true);
user_pref("userChrome.theme.proton_chrome",       true); // Need proton_color
user_pref("userChrome.theme.fully_color",         true); // Need proton_color
user_pref("userChrome.theme.fully_dark",          true); // Need proton_color

user_pref("userChrome.decoration.cursor",         true);
user_pref("userChrome.decoration.field_border",   true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate",        true);

user_pref("userChrome.padding.tabbar_width",      true);
user_pref("userChrome.padding.tabbar_height",     true);
user_pref("userChrome.padding.toolbar_button",    true);
user_pref("userChrome.padding.navbar_width",      true);
user_pref("userChrome.padding.urlbar",            true);
user_pref("userChrome.padding.bookmarkbar",       true);
user_pref("userChrome.padding.infobar",           true);
user_pref("userChrome.padding.menu",              true);
user_pref("userChrome.padding.bookmark_menu",     true);
user_pref("userChrome.padding.global_menubar",    true);
user_pref("userChrome.padding.panel",             true);
user_pref("userChrome.padding.popup_panel",       true);

user_pref("userChrome.tab.multi_selected",        true);
user_pref("userChrome.tab.unloaded",              true);
user_pref("userChrome.tab.letters_cleary",        true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_hide_label",      true);
user_pref("userChrome.tab.sound_with_favicons",   true);
user_pref("userChrome.tab.pip",                   true);
user_pref("userChrome.tab.container",             true);
user_pref("userChrome.tab.crashed",               true);

user_pref("userChrome.fullscreen.overlap",        true);

user_pref("userChrome.icon.library",              true);
user_pref("userChrome.icon.panel",                true);
user_pref("userChrome.icon.menu",                 true);
user_pref("userChrome.icon.context_menu",         true);
user_pref("userChrome.icon.global_menu",          true);
user_pref("userChrome.icon.global_menubar",       true);

// -- User Content -------------------------------------------------------------
user_pref("userContent.player.ui",             true);
user_pref("userContent.player.icon",           true);
user_pref("userContent.player.noaudio",        true);
user_pref("userContent.player.size",           true);
user_pref("userContent.player.click_to_play",  true);
user_pref("userContent.player.animate",        true);

user_pref("userContent.newTab.field_border",   true);
user_pref("userContent.newTab.full_icon",      true);
user_pref("userContent.newTab.animate",        true);
user_pref("userContent.newTab.pocket_to_last", true);
user_pref("userContent.newTab.searchbar",      true);

user_pref("userContent.page.illustration",     true);
user_pref("userContent.page.proton_color",     true);
user_pref("userContent.page.dark_mode",        true); // Need proton_color
user_pref("userContent.page.proton",           true); // Need proton_color

// ** Useful Options ***********************************************************
// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

// Draw in Titlebar
// user_pref("browser.tabs.drawInTitlebar", true);
// user_pref("browser.tabs.inTitlebar",        1); // Nightly, 96 Above

user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
