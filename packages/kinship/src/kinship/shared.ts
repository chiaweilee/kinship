export interface Node {
  id: string;
  gender?: Gender;
  type: RelationType;
  label: string;
  seniority: number;
  parentNodes: any[];
  childNodes: any[];
  appendChild: (type: RelationType) => Node;
}

export type DataNodes = Array<{
  id: string;
  label: string;
  comboId: string;
  x?: number;
  y?: number;
  style?: object;
  size?: number | [number, number];
}>;

export type DataEdges = Array<{
  source: string;
  target: string;
}>;

export type DataCombos = Array<{
  id: string;
}>;

export interface Data {
  nodes: DataNodes;
  edges: DataEdges;
  combos?: DataCombos;
}

export type RelationType = '' | 'f' | 'm' | 'h' | 'w' | 's' | 'd' | 'ob' | 'lb' | 'os' | 'ls';

export type Gender = 1 | 0;
