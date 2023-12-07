export default function hasValuesFromArray(set, arr) {
  return every((element) => set.has(element));
}
