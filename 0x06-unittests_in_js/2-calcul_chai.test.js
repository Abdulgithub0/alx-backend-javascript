const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai.js");

describe('Test cases for CalculateNumber when type === SUM', () => {
	it('test calculateNumber int and float args', () => {
	   expect(calculateNumber('SUM', 10.7, 11)).to.equal(22);
	});

	it('test calculateNumber int and float args', () => {
	   expect(calculateNumber('SUM', 10, 11)).to.equal(21);
	});

	it('test calculateNumber float and float args', () => {
	   expect(calculateNumber('SUM', 2.5, 3.5)).to.equal(7);
	});
});

describe('Test cases for CalculateNumber when type === SUBTRACT', () => {
	it('test for float and int args', () => {
	   expect(calculateNumber('SUBTRACT', 10.7, 11)).to.equal(0);
	});

	it('test for int and int args', () => {
	   expect(calculateNumber('SUBTRACT', 10, 11)).to.equal(-1);
	 });

	it('test for float and float args', () => {
	   expect(calculateNumber('SUBTRACT', 4.5, 3.5)).to.equal(1);
	})
});

describe('test calculateNumber when type == DIVIDE', () => {
	it('test for float and float args', () => {
	   expect(calculateNumber('DIVIDE', 11.5, 2.5)).to.equal(4);
	 });

	it('test for int and it args',  () => {
	   expect(calculateNumber('DIVIDE', 16, 8)).to.equal(2);
	});

	it('test for float and 7', () => {
	   expect(calculateNumber('DIVIDE', 20.9, 7)).to.equal(3);
	})
	it('test for divisibility by zero', () => {
	   expect(calculateNumber('DIVIDE', 100, 0)).to.equal('Error');
	})
})
