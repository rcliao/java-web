/*eslint-env node, mocha */
const assert = require('chai').assert;

const math = require('../src/math');

describe('hello math', function() {
	it('should be able to do math addition', function() {
		assert.equal(math.add(1, 2), 3);
	});
});
