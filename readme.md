
> Synchronously get the version of a binary in [semver](https://github.com/npm/node-semver) format. Modified from sindresorhus/bin-version


## Install

```
$ npm install bin-version-sync
```


## Usage

```
$ curl --version
curl 7.30.0 (x86_64-apple-darwin13.0)
```

```js
const binVersion = require('bin-version-sync');

console.log(binVersion('curl'));
//=> '7.30.0'
```

```
$ openssl version
OpenSSL 1.0.2d 9 Jul 2015
```

```js
console.log(binVersion('openssl', {args: ['version']}));
//=> '1.0.2'
```


## Related
- [bin-version] (https://github.com/sindresorhus/bin-version) - Original async version
- [bin-version-cli](https://github.com/sindresorhus/bin-version-cli) - CLI for async module
- [find-versions](https://github.com/sindresorhus/find-versions) - Find semver versions in a string


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
