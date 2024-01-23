import type { Node, Gender, RelationType } from './shared';
import { getRelationship, getRelationshipFromChain } from '../relationship/relationship';
import { getRelationSeniority } from './seniority';
import { ethicsCheck } from './ethics';

function BaseNode() {
  this.id = '';
  this.type = '';
  this.seniority = 0;
  this.parentNodes = [];
  this.childNodes = [];
  this.appendChild = function (childType: RelationType): Node | void {
    // check is target node exist, then return directly.
    const existNode = this.childNodes.find(({ type }) => type === childType);
    if (!!existNode) return existNode;
    // ethics check
    if (ethicsCheck(this, childType)) {
      const node = createChildNode(childType, this);
      this.childNodes.push(node);
      return node;
    }
  };
}

const createChildNode = (type: RelationType, parentNode: Node): Node => {
  const node = new BaseNode() as Node;
  node.id = [parentNode.id, type].filter(Boolean).join('.');
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
