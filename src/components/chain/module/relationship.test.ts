import { getRelationshipChain, getRelationshipFromChain, getRelationship, getTypeFromRelationship } from './relationship';

describe('relationship', () => {
  it('getRelationshipFromChain', () => {
    expect(getRelationshipFromChain('妈妈', '妈妈', '哥哥')).toBe('舅外公');
  });

  it('getRelationshipChain', () => {
    expect(getRelationshipChain('舅公')).toBe('爸爸的妈妈的兄弟');
  });

  it('getRelationship', () => {
    expect(getRelationship('f')).toBe('爸爸');
  });

  it('getTypeFromRelationship', () => {
    expect(getTypeFromRelationship('爸爸')).toBe('f');
    expect(getTypeFromRelationship('未知')).toBe(undefined);
  });
});
