import type { Node, Gender, RelationType } from './shared';
import { getRelationship, getRelationshipFromChain } from './relationship';
import { ethicsCheck } from './ethics';

function BaseNode() {
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
  node.title = getRelationshipFromChain(parentNode.title, getRelationship(type));
  return node;
};

const createNode = (gender: Gender): Node => {
  const node = new BaseNode();
  node.gender = gender;
  node.title = getRelationship('');
  return node;
};

export { createNode };
