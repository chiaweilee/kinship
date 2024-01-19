import type { Node, Gender, RelationType } from './shared';
import { getRelationship, getRelationshipFromChain } from './relationship';
import { getRelationSeniority } from './seniority';
import { ethicsCheck } from './ethics';

function BaseNode() {
  this.type = '';
  this.seniority = 0;
  this.parentNodes = [];
  this.childNodes = [];
  this.appendChild = function (childType: RelationType) {
    if (ethicsCheck(this, childType)) {
      this.childNodes.push(createChildNode(childType, this));
    }
    return this;
  };
}

const createChildNode = (type: RelationType, parentNode: Node): Node => {
  const node = new BaseNode() as Node;
  node.type = type;
  node.parentNodes = [parentNode];
  node.label = getRelationshipFromChain(parentNode.label, getRelationship(type));
  node.seniority = getRelationSeniority(parentNode.seniority, type);
  return node;
};

const createNode = (gender: Gender): Node => {
  const node = new BaseNode() as Node;
  node.gender = gender;
  node.label = getRelationship(node.type);
  return node;
};

export { createNode };