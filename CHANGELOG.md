# v1.4.0 (Jun 6, 2019)

 * Updated config to remove redundant `ios` namespace.
 * chore: Switched `prepare` script to `prepack`.

# v1.3.0 (Mar 29, 2019)

 * Upgraded to Gulp 4.
 * Update dependencies
 * Fixed lint warnings.
 * Updated filesystem watching to use new `appcd.fs.watch()` and `appcd.fs.unwatch()` to optimize
   subscriptions. [(DAEMON-253)](https://jira.appcelerator.org/browse/DAEMON-253)

# v1.2.0 (Oct 25, 2018)

 * Moved to `@appcd` scope
 * Update dependencies
 * Add Daemon 2.x support

# v1.1.1 (Aug 6, 2018)

 * Updated to ioslib@2.2.3 which adds workaround for sim runtimes that have a bad version number in
   the runtime's `profile.plist` [(DAEMON-259)](https://jira.appcelerator.org/browse/DAEMON-259).
 * Added watch to the global Xcode license file to re-detect Xcodes when changed.

# v1.1.0 (Apr 9, 2018)

 * Removed `appcd-*` dependencies and locked down the appcd version in the `package.json`.
   [(DAEMON-208)](https://jira.appcelerator.org/browse/DAEMON-208)
 * Fixed URLs in `package.json`.
 * Updated npm dependencies.

# v1.0.1 (Dec 15, 2017)

 * Fixed scope issue where this.data was not resolving.
   [(DAEMON-211)](https://jira.appcelerator.org/browse/DAEMON-211)
 * Updated ioslib to fix [DAEMON-209](https://jira.appcelerator.org/browse/DAEMON-209).
 * Updated npm dependencies.

# v1.0.0 (Dec 5, 2017)

 * Initial release.
