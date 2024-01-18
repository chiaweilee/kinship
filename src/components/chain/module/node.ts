import type { Node, Gender, RelationType } from './shared';
import { getRelationship, getRelationshipFromChain } from './relationship';
import { ethicsCheck } from './ethics';

function BaseNode() {
  this.label = '';
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
  const node = new BaseNode();
  node.type = type;
  node.parentNodes = [parentNode];
  node.label = getRelationshipFromChain(parentNode.label, getRelationship(type));
  return node;
};

const createNode = (gender: Gender): Node => {
  const node = new BaseNode();
  node.gender = gender;
  node.label = getRelationship('');
  return node;
};

export { createNode };
