import test from 'ava';
import isCameraOn from './index.js';

test('main', async t => {
	const isOn = await isCameraOn();
	t.is(typeof isOn, 'boolean');
	console.log(`Camera is ${isOn ? 'on' : 'off'}`);
});
