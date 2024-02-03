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
});

const available_payment = { payment_methods: { credit_cards: true, paypal: false}};

describe('Test suite for /available_payments endpoint', () => {
   it('test for -  statusCode, response body', done => {
      request('http://localhost:7865/available_payments', function (error, res, body) {
         expect(res.statusCode).to.be.equal(200);
	 expect(JSON.parse(res.body)).to.deep.equal(available_payment);
	 done();
      });
    });
    it('test for response body', done => {
       request('http://localhost:7865/available_payments', function (error, res, body) {
	  expect(JSON.parse(body).payment_methods.credit_cards).to.be.true;
	  done();
       });
    });
});

describe('Test suite for /login endpoint', () => {
   it('test for - statusCode, body value', done => {
      const req_obj = {url: 'http://localhost:7865/login', method: 'POST', json: {userName: 'Abdulsamad'}}
      request(req_obj, function (error, res, body) {
         expect(res.statusCode).to.be.equal(200);
	 expect(body).to.equal('Welcome Abdulsamad');
	 done();
      });
    });
})
