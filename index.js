'use strict';
const macosVersion = require('macos-version');
const execa = require('execa');

module.exports = () => Promise.resolve().then(() => {
	macosVersion.assertGreaterThanOrEqualTo('10.11');
	return execa.stdout('./.build/release/main', {cwd: __dirname}).then(x => x === 'true');
});
