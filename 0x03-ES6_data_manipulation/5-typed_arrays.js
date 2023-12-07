export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const int8view = new Int8Array(buff);
  int8view[position] = value;
  return buff;
}
