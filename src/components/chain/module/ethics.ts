import type { Node, RelationType } from './shared';

const rules = {
  // prevent sb from having fathers, mothers, husbands or wives
  onlyOneOf: ['f', 'm', 'h', 'w'],
};

const notOnlyOneOf = (node: Node, type: RelationType) =>
  !!node.childNodes.find((n) => n.type === type);

export const ethicsCheck = (node: Node, type: RelationType): boolean => {
  if (rules?.onlyOneOf?.includes(type)) {
    if (notOnlyOneOf(node, type)) return false;
  }

  return true;
};
