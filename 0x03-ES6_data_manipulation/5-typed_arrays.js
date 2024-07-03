export default function createInt8TypedArray(length, position, value) {
  const bufferOne = new ArrayBuffer(length);
  const bufferTwo = new Int8Array(bufferOne);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  bufferTwo[position] = value;
  return bufferOne;
}
