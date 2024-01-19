import type { Node, Data, DataNodes, DataEdges } from './shared';

function getId(id: string) {
  return id || '$';
}

function convertNodeToData(node: Node): Data {
  const data = { nodes: [] as DataNodes, edges: [] as DataEdges };
  const stack = [node] as Node[];
  while (stack.length > 0) {
    const { id: rawId, label, childNodes, seniority } = stack.shift() as Node;
    const id = getId(rawId);
    data.nodes.push({ label, id, seniority });
    if (childNodes?.length > 0) {
      childNodes.forEach((child) => {
        data.edges.push({ source: id, target: child.id });
        stack.push(child);
      });
    }
  }
  return data;
}

export { convertNodeToData };
