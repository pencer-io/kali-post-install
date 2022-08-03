// Mozilla User Preferences
// To change a preference value, you can either:
// - modify it via the UI (e.g. via about:config in the browser); or
// - set it within a user.js file in your profile (create it if it doesn't exist).
//
// Profile folder location on different systems:
// Windows: C:\Users\<username>\AppData\Roaming\Mozilla\Firefox\Profiles\xxxxxxxx.default
// Mac OS X: Users/<username>/Library/Application Support/Firefox/Profiles/xxxxxxxx.default
// Linux: /home/<username>/.mozilla/firefox/xxxxxxxx.default

// Get rid of FireFox spam in BurpSuite
user_pref("accessibility.force_disabled", 1);
user_pref("accessibility.typeaheadfind.flashBar", 0);
user_pref("app.normandy.first_run", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.auto", false);
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.doorhanger", false);
user_pref("browser.feeds.showFirstRunUI", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "https://localhost");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "https://localhost");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryURL", "https://localhost'");
user_pref("browser.safebrowsing.provider.google.gethashURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google.lists", "https://localhost");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google.reportURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google.updateURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.reportURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.updateURL", "https://localhost");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://localhost");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "995795774646");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "https://localhost");
user_pref("browser.safebrowsing.reportPhishURL", "https://localhost");
user_pref("browser.search.geoSpecificDefaults.url", "https://localhost");
user_pref("browser.search.searchEnginesURL", "https://localhost");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.search.update.interval", 995795774646);
user_pref("browser.startup.page", 0);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("captivedetect.maxRetryCount", 0);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.manifest.uri", "https://localhost");
user_pref("extensions.update.enabled", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("security.ssl.errorReporting.url", "https://localhost");
user_pref("security.OCSP.enabled", 0);
user_pref("services.settings.server", "https://localhost");
user_pref("services.sync.nextSync", 0);
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.passwords.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Disable Pocket
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.pocket.enabled", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Some other good changes for pentest //

// Make fullscreen warning go away
user_pref("full-screen-api.warning.timeout", 0);

// Set "When Firefox starts" to blank page
user_pref("browser.startup.page", 0);

// Disable new tab page ads and preload
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.introShown", true);

// Don't warn when opening about:config
user_pref("general.warnOnAboutConfig", false);

// Don't trim HTTP/HTTPS off of URLs in the address bar
user_pref("browser.urlbar.trimURLs", false);

// Select all text when clicking once in the URL bar
user_pref("browser.urlbar.clickSelectsAll", true);

// Disable social networking site info exchange
user_pref("social.directories", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");

// Disable retrieval of safebrowsing lists
user_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);

// Disable reporting of crash information
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("breakpad.reportURL", "");

// Safebrowsing sends a hash of your url to retrieve a list of partial matches.
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
