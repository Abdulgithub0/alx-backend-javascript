const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('Assert test for calculateNumber', () => {
	it('Test cases when args are floats', ()=> {
		assert.equal(calculateNumber(10.1, 2.5), 13);
		assert.equal(calculateNumber(1.9, 3.99), 6);
		assert.equal(calculateNumber(17.5, 21.7), 40);
	});
	it('Test cases when args are either int or float', ()=> {
		assert.equal(calculateNumber(10, 2.5), 13);
		assert.equal(calculateNumber(1.9, 3), 5);
		assert.equal(calculateNumber(17, 21.7), 39);
	});
	it('Test cases when args are int', ()=> {
		assert.equal(calculateNumber(10, 2), 12);
		assert.equal(calculateNumber(1, 3), 4);
		assert.equal(calculateNumber(17, 21), 38);
	});
})
