const util = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
   console.log(`The total is: ${util.calculateNumber('SUM', totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestToApi;
