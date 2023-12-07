export default function hasValuesFromArray(set, arr) {
  const checker = arr.filter((element) => set.has(element));
  return checker.length === arr.length;
}
