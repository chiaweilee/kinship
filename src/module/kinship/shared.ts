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
  seniority: number;
}>;

export type DataEdges = Array<{
  source: string;
  target: string;
}>;

export interface Data {
  nodes: DataNodes;
  edges: DataEdges;
}

export type RelationType = '' | 'f' | 'm' | 'h' | 'w' | 's' | 'd' | 'ob' | 'lb' | 'os' | 'ls';

export type Gender = 1 | 0;
