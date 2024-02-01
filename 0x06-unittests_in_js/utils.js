const Utils = {
   calculateNumber(type, a, b) {
      a = Math.round(a);
      b = Math.round(b);
      if (type === 'SUM') return a + b;
      else if (type === 'SUBTRACT') return a - b;
      else if (type === 'DIVIDE' && b !== 0) return a / b;
      else if (type == 'DIVIDE' && b === 0) return 'Error'
   },
};

module.exports = Utils;
