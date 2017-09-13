'use strict';
const path = require('path');
const macosVersion = require('macos-version');
const execa = require('execa');

const bin = path.join(__dirname, 'main');

module.exports = async () => {
	macosVersion.assertGreaterThanOrEqualTo('10.11');
	return (await execa.stdout(bin)) === 'true';
};
