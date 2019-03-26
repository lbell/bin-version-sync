import test from 'ava';
import binVersion from '.';

const reVersion = /\d+\.\d+\.\d+/;

test('does-not-exist', t => {
	t.throws(() => binVersion('does-not-exist'));
});

test('curl', t => {
	t.regex(binVersion('curl'), reVersion);
});

test('npm', t => {
	t.regex(binVersion('npm'), reVersion);
});

test('openssl', t => {
	t.regex(binVersion('openssl', {args: ['version']}), reVersion);
});

test('php', t => {
	t.is(binVersion('./fixture/php.js'), '7.0.0');
});
