# My overrides for the arkenfox `user.js`
## Before you start
To understand what this repo is about and how to use it, you should read the 
documentation for [arkenfox/user.js](https://github.com/arkenfox/user.js/). 
In particular, it is **essential** to read the following pages on their wiki, 
**or you WILL pay for it!**

- [Overview](https://github.com/arkenfox/user.js/wiki/1.1-Overview)
- [Backing Up](https://github.com/arkenfox/user.js/wiki/1.2-Backing-Up)
- [Implementation](https://github.com/arkenfox/user.js/wiki/1.3-Implementation)
- [Applying Your Changes](https://github.com/arkenfox/user.js/wiki/3.2-Applying-Your-Changes)
- [Updater Scripts](https://github.com/arkenfox/user.js/wiki/3.3-Updater-Scripts)

## What are these files?
`base.js` is the basis of the overrides.  

The other 3 files contain additional settings 
for [profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles)
used in different scenarios:

- `profile-default.js` saves history, restores the previous session, and enables Firefox accounts.
    - **Note: this profile clears cookies and site data on shutdown by default.**  
    - If you need cookies (to save logins etc), add an exception for each site:
        1. Visit the site in question
        2. Press Ctrl+I to bring up the "Page Info" window
        3. Click "Permissions"
        4. Allow the site to set cookies
    - Extensions like Cookie AutoDelete are [not recommended](https://github.com/arkenfox/user.js/wiki/4.1-Extensions#small_orange_diamond-dont-bother).
- `profile-unbreak.js` is for a minimal, disposable (sanitized on shutdown) profile used
to "unbreak" websites. 
- `profile-webrtc.js` has some of the protections relaxed to make WebRTC work.
It should be used for WebRTC *only*.

To make a complete `user.js` for each profile, combine the original (arkenfox) `user.js`, the base file and the profile-specific file like so:
```
cat user.js base.js profile-default.js > default-user.js
```
The resulting `default-user.js` is then a file you can copy or link into your profile directory. Make sure it is named `user.js` in the profile directory.

Feel free to modify these to suit your taste. Have fun!
