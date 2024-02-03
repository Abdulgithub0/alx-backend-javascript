const expect = require('chai').expect;
const request = require('request');

describe('Integration test for App.js server', () => {
   it('test for correct status code', done => {
      request('http://localhost:7865', function (error, res, body) {
         expect(res.statusCode).to.be.equal(200);
	 done();
      });
    });
    it('test for response body', done => {
       request('http://localhost:7865', function (error, res, body) {
	  expect(body).to.be.equal('Welcome to the payment system');
	  done();
       });
    });
})
