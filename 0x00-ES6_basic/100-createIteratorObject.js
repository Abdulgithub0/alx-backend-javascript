export default function createIteratorObject(report) {
  const iter = [];
  for (const ite of Object.values(report.allEmployees)) {
    iter.push(...ite);
  }
  return iter;
}
