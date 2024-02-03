const expect = require('chai').expect;
const request = require('request');

describe('1st Integration test for app.js server', () => {
   it('test for correct status code', done => {
      request('http://localhost:7865', function (error, res, body) {
         expect(res.statusCode).to.equal(200);
	 done();
      });
    });
    it('test for response body', done => {
       request('http://localhost:7865', function (error, res, body) {
	  expect(body).to.equal('Welcome to the payment system');
	  done();
       });
    });
});

describe('2nd Integration test for app.js server', () => {
   it(' test url: http://localhost:7865/cart/12 - statusCode', done => {
      request('http://localhost:7865/cart/12', function (error, res, body) {
         expect(res.statusCode).to.equal(200);
	 done();
      });
    });

    it('test url http://localhost:7865/cart/100 - response body', done => {
       request('http://localhost:7865/cart/100', function (error, res, body) {
	  expect(body).to.equal('Payment methods for cart 100');
	  done();
       });
    });
 
    it('test url http://localhost:7865/cart/hello - statusCode', done => {
       request('http://localhost:7865/cart/hello', function (error, res, body) {
	  expect(res.statusCode).to.equal(404);
	  done();
       });
    });
})
