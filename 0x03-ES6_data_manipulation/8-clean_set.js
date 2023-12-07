export default function cleanSet(set, startString) {
  if (!startString || instanceof(startString, String) {
    return '';
  }
  return [...set].filter((ele) => ele.startsWith(startString))
    .map((ele) => ele.slice(startString.length))
    .join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 6));
