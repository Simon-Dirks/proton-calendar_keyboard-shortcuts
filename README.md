# Proton Calendar - Basic keyboard shortcuts (Firefox add-on)

<a rel="noreferrer noopener" href="https://addons.mozilla.org/en-US/firefox/addon/proton-calendar-shortcuts/"><img alt="Firefox Add-ons" src="firefox-addon-badge.svg" width="150"></a>

### Navigation

- `n`: Next
- `p`: Previous
- `t`: Today

### Views

- `d`: Day view
- `w`: Week view
- `m`: Month view

## Dev build

1. Install `web-ext` (`npm install --global web-ext`)
2. Update version in `manifest.json`
3. Run `web-ext build`
4. Open `about:debugging#/runtime/this-firefox` in Firefox
5. Click "Load Temporary Add-on" and select the generated build zip.
