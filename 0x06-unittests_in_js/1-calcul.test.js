const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('Test cases for CalculateNumber', () => {
	it('test calculateNumber when type === SUM', () => {
	   assert.equal(calculateNumber('SUM', 10.7, 11), 22);
	   assert.equal(calculateNumber('SUM', 10, 11), 21);
	   assert.equal(calculateNumber('SUM', 2.5, 3.5), 7);
	});

	it('test calculateNumber when type === SUBTRACT', () => {
	   assert.equal(calculateNumber('SUBTRACT', 10.7, 11), 0);
	   assert.equal(calculateNumber('SUBTRACT', 10, 11), -1);
	   assert.equal(calculateNumber('SUBTRACT', 4.5, 3.5), 1);
	});

	it('test calculateNumber when type == DIVIDE', () => {
	   assert.equal(calculateNumber('DIVIDE', 11.5, 2.5), 4);
	   assert.equal(calculateNumber('DIVIDE', 16, 8), 2);
	   assert.equal(calculateNumber('DIVIDE', 20.9, 7), 3);
	   assert.equal(calculateNumber('DIVIDE', 100, 0), 'Error');
	});
})
