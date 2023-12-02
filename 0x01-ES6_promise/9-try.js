export default function guardrail(mathFunction) {
  const queue = [];
  try {
    let res = mathFunction();
    queue.push(res);
  }
  catch(err) {
    queue.push(err.toString());
  }
  finally {
    (queue.push('Guardrail was processed'));
  }
  return queue;
}
