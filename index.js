'use strict';
const execa = require('execa');
const findVersions = require('find-versions');

module.exports = (binary, options = {}) => {
	try {
		const result = execa.sync(binary, options.args || ['--version']);
		return findVersions(result.stdout || result.stderr, {loose: true})[0];
	}	catch (error) {
		if (error.code === 'ENOENT') {
			error.message = `Couldn't find the \`${binary}\` binary. Make sure it's installed and in your $PATH`;
		}
		throw error;
	}
};
