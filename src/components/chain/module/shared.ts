export interface Node {
  gender?: Gender;
  type?: RelationType;
  title?: string;
  parentNodes: any[];
  childNodes: any[];
  appendChild: (type: RelationType) => Node;
}
export type RelationType = '' | 'f' | 'm' | 'h' | 'w' | 's' | 'd' | 'ob' | 'lb' | 'os' | 'ls';
export type Gender = 1 | 0;
