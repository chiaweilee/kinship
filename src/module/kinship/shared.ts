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
}>;

export type DataEdges = Array<{
  source: string;
  target: string;
}>;

export interface Data {
  nodes: DataNodes;
  edges: DataEdges;
  combos: any;
}

export type RelationType = '' | 'f' | 'm' | 'h' | 'w' | 's' | 'd' | 'ob' | 'lb' | 'os' | 'ls';

export type Gender = 1 | 0;
