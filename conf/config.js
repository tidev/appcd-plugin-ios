module.exports = {
	env: {
		/**
		 * An override for the `PATH` environment variable for ioslib's `xcode-select` detection.
		 * @type {String}
		 */
		path: null
	},

	executables: {
		/**
		 * Path to the `security` executable.
		 * @type {String}
		 */
		security: null,

		/**
		 * Path to the `xcode-select` executable.
		 * @type {String}
		 */
		xcodeSelect: null
	},

	provisioning: {
		/**
		 * The path to the provisioning profiles directory. Defaults to
		 * `~/Library/MobileDevice/Provisioning Profiles`.
		 * @type {String}
		 */
		path: null
	},

	simulator: {
		/**
		 * The path to the directory containing the simulator device directories. Defaults to
		 * `~/Library/Developer/CoreSimulator/Devices`.
		 * @type {String}
		 */
		devicesDir: null
	},

	xcode: {
		/**
		 * A list of paths to search for Xcode installations.
		 * @type {Array.<String>}
		 */
		searchPaths: null
	}
};
