import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {assertMacOSVersionGreaterThanOrEqualTo} from 'macos-version';
import execa from 'execa';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const binaryPath = path.join(__dirname, 'main');

export default async function isCameraOn() {
	assertMacOSVersionGreaterThanOrEqualTo('10.11');
	const {stdout} = await execa(binaryPath);
	return stdout === 'true';
}
