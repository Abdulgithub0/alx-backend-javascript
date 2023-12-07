export default function updateUniqueItems(mapItems) {
  try {
    for (const [k, v] of mapItems) {
      if (v === 1) {
        mapItems.set(k, 100);
      }
    }
  } catch (err) {
    throw new Error('Cannot process');
  }
}
