'use strict';
const path = require('path');
const macosVersion = require('macos-version');
const execa = require('execa');

const bin = path.join(__dirname, 'main');

module.exports = () => Promise.resolve().then(() => {
	macosVersion.assertGreaterThanOrEqualTo('10.11');
	return execa.stdout(bin).then(x => x === 'true');
});
