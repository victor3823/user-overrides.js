# Overrides for Arkenfox
## Prerequisites
> [!CAUTION]
> ### MANDATORY: Read the [Arkenfox wiki](https://github.com/arkenfox/user.js/wiki)
> **I am not responsible for any issues caused by not reading the wiki, 
> nor will I answer any questions that can be answered by reading it.**

## Repository structure
- `base.js` contains preferences used in all [Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles)
- `lepton.js` contains preferences relating to [Lepton](https://github.com/black7375/Firefox-UI-Fix/)
- `profiles/` contains overrides specific to each Firefox profile
(a couple of examples are included)

## How to use
These overrides are tailored to my daily usage of Firefox (and in particular, Lepton), 
so you may want to make some changes to `base.js` or add your profile-specific prefs in `profiles/`.

> [!WARNING]
> **Have you read the [Arkenfox wiki](https://github.com/arkenfox/user.js/wiki)?**
1. Clone this repository
2. Make changes to `base.js` and `profiles/` as needed
3. Run `deploy.sh`
    - This generates an override file for each profile in an `out/` directory under the repo
4. Copy each override file to the corresponding Firefox profile directory
5. Go to your profile directory and rename the newly copied override file to `user-overrides.js`
> [!IMPORTANT]
> **The override file in your profile directory MUST be named `user-overrides.js`**
6. Follow the instructions on this Arkenfox wiki page: [Apply &amp; Update &amp; Maintain](https://github.com/arkenfox/user.js/wiki/3.4-Apply-&-Update-&-Maintain)

Whenever you make changes to your overrides, repeat steps 2-6 above.
