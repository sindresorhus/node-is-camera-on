import test from 'ava';
import m from '.';

test(async t => {
	const isOn = await m();
	t.is(typeof isOn, 'boolean');
	console.log(`Camera is ${isOn ? 'on' : 'off'}`);
});
