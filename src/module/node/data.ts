import type { Node, Data, DataNodes, DataEdges } from './shared';

function convertNodeToData(node: Node): Data {
  const data = { nodes: [] as DataNodes, edges: [] as DataEdges };
  const stack = [node] as Node[];
  while (stack.length > 0) {
    const { label, childNodes } = stack.shift() as Node;
    data.nodes.push({ label, id: label });
    if (childNodes?.length > 0) {
      childNodes.forEach((child) => {
        data.edges.push({ source: label, target: child.label });
        stack.push(child);
      });
    }
  }
  return data;
}

export { convertNodeToData };
