import type { RelationType } from './shared';

function getSeniorityGain(type: RelationType): -1 | 1 | 0 {
  switch (type) {
    case 'f':
    case 'm':
      return 1;
    case 's':
    case 'd':
      return -1;
    default:
      return 0;
  }
}

function getRelationSeniority(level: number, type: RelationType): number {
  return level + getSeniorityGain(type);
}

export { getRelationSeniority };
