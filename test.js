import test from 'ava';
import isCameraOn from '.';

test('main', async t => {
	const isOn = await isCameraOn();
	t.is(typeof isOn, 'boolean');
	console.log(`Camera is ${isOn ? 'on' : 'off'}`);
});
