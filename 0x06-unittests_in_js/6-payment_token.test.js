const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('a test suite for  getPaymentTokenFromAPI', () => {
   it('test getPaymentTokenFromAPI when arg is true', (done) => {
      getPaymentTokenFromAPI(true)
      .then(result => {
         expect(result.data).to.be.equal('Successful response from the API');
	 done();
      })
      .catch( error=> { done(error)});
      });
})
