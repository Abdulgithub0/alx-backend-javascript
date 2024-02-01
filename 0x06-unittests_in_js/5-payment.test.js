const expect = require('chai').expect;
const sinon = require('sinon');

const sendPaymentApiToRequest = require('./5-payment.js');
let consoleSpy; 

describe('Hook testing', () => {
   beforeEach(() => {
      consoleSpy = sinon.spy(console, 'log');
   });

   afterEach(() => {
      expect(consoleSpy.calledOnce).to.be.true;
      consoleSpy.restore();
   });

   it('Verify that the console is logging the string The total is: 120', () => {
      sendPaymentApiToRequest(100, 20);
      expect(consoleSpy.withArgs('The total is: 120').called).to.be.true;
   });

   it('Verify that the console is logging the string "The total is: 120"', () => {
      sendPaymentApiToRequest(10, 10);
      expect(consoleSpy.withArgs('The total is: 20').called).to.be.true;
    });

})
