import type { Gender, RelationType } from './shared';
import { getRelationship, getRelationshipFromChain } from './relationship';

interface Node {
  gender?: Gender;
  type?: RelationType;
  title?: string;
  parentNodes: any[];
  childNodes: any[];
  appendChild: (type: RelationType) => Node;
}

const createChildNode = (type: RelationType, parentNode: Node): Node => {
  const node: Node = {
    type,
    title: getRelationshipFromChain(parentNode.title, getRelationship(type)),
    parentNodes: [parentNode],
    childNodes: [],
    appendChild: (childType: RelationType) => {
      node.childNodes.push(createChildNode(childType, node));
      return node;
    },
  };
  return node;
};

export const createNode = (gender: Gender): Node => {
  const node: Node = {
    gender,
    parentNodes: [],
    childNodes: [],
    appendChild: (type: RelationType) => {
      node.childNodes.push(createChildNode(type, node));
      return node;
    },
  };
  return node;
};
