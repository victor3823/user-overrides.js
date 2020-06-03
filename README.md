# My overrides for `ghacks-user.js`
## Before you start
To understand what this repo is about and how to use it, you should read the 
documentation for [`ghacks-user.js`](https://github.com/ghacksuserjs/ghacks-user.js). 
In particular, it is **essential** to read the following pages on their wiki, 
**or you WILL pay for it!**:

- [Overview](https://github.com/ghacksuserjs/ghacks-user.js/wiki/1.1-Overview)
- [Backing Up](https://github.com/ghacksuserjs/ghacks-user.js/wiki/1.2-Backing-Up)
- [Implementation](https://github.com/ghacksuserjs/ghacks-user.js/wiki/1.3-Implementation)
- [Applying Your Changes](https://github.com/ghacksuserjs/ghacks-user.js/wiki/3.2-Applying-Your-Changes)
- [Updater Scripts](https://github.com/ghacksuserjs/ghacks-user.js/wiki/3.3-Updater-Scripts)

## What are these files?
Assuming you have read the documentation linked above, there are 3 files here, 
for [profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles)
used in different scenarios:

- `default-overrides.js` is for your daily browsing. It saves history and has (fairly)
strong privacy & security protections.
- `unbreak-overrides.js` is for a disposable (sanitized on shutdown) profile used
to "unbreak" websites that rely on the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
header.
- `webrtc-overrides.js` has many of the protections relaxed to make WebRTC work.
It should be used for WebRTC *only*.

Feel free to modify these to suit your taste. Have fun!
