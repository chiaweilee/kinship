// @ts-ignore
import relationship from './relationship.dist.js';
import type { RelationType } from '../kinship/shared.js';

relationship.setMode('default', {});

const getRelationship = (type: RelationType) => {
  return relationship.data?.[type]?.[0];
};

const getTypeFromRelationship = (text: string): string | void => {
  for (const key in relationship.data) {
    if (/^[a-z]+$/i.test(key) && relationship.data[key].includes(text)) {
      return key;
    }
  }
};

const getRelationshipFromChain = (...chain: any[]): string =>
  relationship({ text: chain.filter(Boolean).join('的') })?.[0];

const getRelationshipChain = (text: string) => relationship({ text, type: 'chain' })?.[0];

export { getRelationshipFromChain, getRelationshipChain, getTypeFromRelationship, getRelationship };
