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

- `profile-default.js` saves history and enables Firefox accounts.
- `profile-unbreak.js` is for a disposable (sanitized on shutdown) profile used
to "unbreak" websites that rely on the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
header.
- `profile-webrtc.js` has many of the protections relaxed to make WebRTC work.
It should be used for WebRTC *only*.

To make a complete `user.js` for each profile, combine the original (arkenfox) `user.js`, the base file and the profile-specific file like so:
```
cat user.js base.js profile-default.js > default-user.js
```

Feel free to modify these to suit your taste. Have fun!
