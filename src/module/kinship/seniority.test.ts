import { getRelationSeniority } from './seniority';

describe('level', () => {
  it('get relation level', () => {
    expect(getRelationSeniority(0, 'f')).toBe(1);
    expect(getRelationSeniority(0, 'm')).toBe(1);
    expect(getRelationSeniority(0, 's')).toBe(-1);
    expect(getRelationSeniority(0, 'd')).toBe(-1);
    expect(getRelationSeniority(0, 'ob')).toBe(0);
  });
});
