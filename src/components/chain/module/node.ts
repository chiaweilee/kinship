import type { Node, Gender, RelationType } from './shared';
import { getRelationship, getRelationshipFromChain } from './relationship';
import { ethicsCheck } from './ethics';

const createChildNode = (type: RelationType, parentNode: Node): Node => {
  const node: Node = {
    type,
    title: getRelationshipFromChain(parentNode.title, getRelationship(type)),
    parentNodes: [parentNode],
    childNodes: [],
    appendChild: (childType: RelationType) => {
      if (ethicsCheck(node, childType) === false) return node;
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
    appendChild: (childType: RelationType) => {
      if (ethicsCheck(node, childType) === false) return node;
      node.childNodes.push(createChildNode(childType, node));
      return node;
    },
  };
  return node;
};
