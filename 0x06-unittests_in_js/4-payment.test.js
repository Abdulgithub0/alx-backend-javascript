const sendPaymentRequestApi = require('./4-payment');
const Utils = require('./utils.js');
const expect = require('chai').expect;
const sinon = require('sinon');

const consoleSpy = sinon.spy(console, 'log');
const calNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);

describe('Stub on Util.calculateNumber method', () => {
   it('Testing if calculateNumber return 10 ', () => {
      expect(calNumStub('SUM', 100, 20)).to.equal(10);
   });
   
   sendPaymentRequestApi(25, 45)
   it('Testing if calculateNumber alway return 10',  () => {
      expect(calNumStub.alwaysReturned(10)).to.be.true;
   });

   it('Testing if calculateNumber is called SUM, 25 and 45', () => {
       expect(calNumStub.withArgs('SUM', 25, 45).calledOnce).to.be.true;
   });

   it('Testing if console.log was called', () => {
      expect(consoleSpy.withArgs('The total is: 10').calledOnce).to.be.true;
   });
   calNumStub.restore();
   consoleSpy.restore();
})
