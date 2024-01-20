import type { Node, Data, DataNodes, DataEdges } from './shared';

function getId(id: string) {
  return id || '$';
}

function getY(seniority: number) {
  return seniority * 200;
}

function convertNodeToData(node: Node): Data {
  const nodes: DataNodes = [];
  const edges: DataEdges = [];
  const combos = new Set();
  const stack = [node] as Node[];
  while (stack.length > 0) {
    const { id: rawId, label, childNodes, seniority } = stack.shift() as Node;
    const id = getId(rawId);
    // create combos
    const comboId = String(seniority);
    if (combos[seniority] === undefined) combos.add(comboId);
    // create nodes
    nodes.push({ label, id, comboId, y: getY(seniority) });
    // create edges
    if (childNodes?.length > 0) {
      childNodes.forEach((child) => {
        edges.push({ source: id, target: child.id });
        stack.push(child);
      });
    }
  }
  return {
    nodes,
    edges,
    combos: [...combos].map((id) => ({ id })),
  };
}

export { convertNodeToData };
