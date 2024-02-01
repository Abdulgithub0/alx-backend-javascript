const sendPaymentRequestApi = require('./3-payment');
const Utils = require('./utils.js');
const expect = require('chai').expect;
const sinon = require('sinon');

//const calNumSpy = sinon.spy(Utils, 'calculateNumber');

describe('Spy on calculateNumber', () => {
   const calNumSpy = sinon.spy(Utils, 'calculateNumber');
   sendPaymentRequestApi(100, 1000);
   it('Testing if calculateNumber has been called only once', () => {
      expect(calNumSpy.calledTwice).to.be.true;
   });
   
   sendPaymentRequestApi(25, 45)
   it('Testing if calculateNumber has been called twice',  () => {
      expect(calNumSpy.calledTwice).to.be.true;
   });

   it('Testing if calculateNumber is called 100 and 1000', () => {
       expect(calNumSpy.withArgs('SUM', 100, 1000).calledOnce).to.be.true;
   });

   it('Testing if calculateNumber is called 25 and 45', () => {
      expect(calNumSpy.withArgs('SUM', 25, 45).calledOnce).to.be.true;
   });
   calNumSpy.restore();
})
