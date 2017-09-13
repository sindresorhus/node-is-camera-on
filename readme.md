# is-camera-on [![Build Status](https://travis-ci.org/sindresorhus/node-is-camera-on.svg?branch=master)](https://travis-ci.org/sindresorhus/node-is-camera-on)

> Check if the built-in Mac camera is on


## Install

```
$ npm install is-camera-on
```

Requires macOS 10.11 or later.


## Usage

```js
const isCameraOn = require('is-camera-on');

isCameraOn().then(isOn => {
	console.log(isOn);
	//=> true
});
```


## Related

- [is-camera-on-cli](https://github.com/sindresorhus/is-camera-on-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
