import { orderBy } from '../utils';
import type { Node, Data, DataNodes, DataEdges, DataCombos, RelationType } from './shared';

function getId(id: string) {
  return id || '$';
}

function getY(seniority: number) {
  return seniority * 100;
}

function getX(rawX: number) {
  return rawX * 50;
}

function getOrder(seniority: string) {
  switch (seniority) {
    case '-2':
      return ['f.f', 'f.m', 'm.f', 'm.m'];
    case '-1':
      return ['f.ls', 'f.os', 'f.lb', 'f.ob', 'f', 'm', 'm.ob', 'm.lb', 'm.os', 'm.ls'];
    case '0':
      return ['lb', 'ob', '$', 'os', 'ls'];
    case '1':
      return ['lb.s', 'lb.d', 'ob.s', 'ob.d', 's', 'd', 'os.s', 'os.d', 'ls.s', 'ls.d'];
    case '2':
      return ['s.s', 's.d', 'd.s', 'd.d'];
    default:
      console.warn('[getOrder] unhandled seniority:', seniority);
      return [];
  }
}

export function getArrangement(nodes: Node[], seniority: string): Node[] {
  const even = nodes.length % 2 === 0;
  const half = Math.floor(nodes.length / 2);
  const ordered = orderBy(nodes, 'id', getOrder(seniority));
  ordered.forEach((n, i) => {
    n.x = even ? getX(i - half + 0.5) : getX(i - half);
  });
  return ordered;
}

function getProps(type: RelationType): any {
  switch (type) {
    default:
      return {};
  }
}

function getCombos(combos): DataCombos {
  return Object.keys(combos).map((id) => ({ id }));
}

function getNodes(combos): DataNodes {
  const nodes: DataNodes = [];
  for (const seniority in combos) {
    const combo = combos[seniority];
    getArrangement(combo, seniority).forEach((n: any) => {
      nodes.push(n);
    });
  }
  return nodes;
}

function convertNodeToData(node: Node): Data {
  const combos: { [key: number]: Node[] } = {};
  const edges: DataEdges = [];
  const stack = [node] as Node[];
  while (stack.length > 0) {
    const { id: rawId, type, label, childNodes, seniority } = stack.shift() as Node;
    const id = getId(rawId);
    // create combos
    if (combos[seniority] === undefined) combos[seniority] = [];
    // create nodes
    combos[seniority].push({
      ...getProps(type),
      label,
      id,
      comboId: seniority,
      y: getY(seniority),
    });
    // create edges
    if (childNodes?.length > 0) {
      childNodes.forEach((child) => {
        edges.push({ source: id, target: child.id });
        stack.push(child);
      });
    }
  }
  return {
    nodes: getNodes(combos),
    edges,
    combos: getCombos(combos),
  };
}

export { convertNodeToData };
