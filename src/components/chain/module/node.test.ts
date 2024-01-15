import { createNode } from './node';

describe('node', () => {
  it('createNode', () => {
    const node = createNode(1);
    expect(node.gender).toBe(1);
    expect(node.parentNodes).toEqual([]);
    expect(node.childNodes).toEqual([]);
  });

  it('appendChild', () => {
    const node = createNode(1);
    node.appendChild('f');
    expect(node.gender).toBe(1);
    expect(node.parentNodes).toEqual([]);
    expect(node.childNodes.length).toBe(1);
    const childNode = node.childNodes[0];
    expect(childNode.title).toBe('爸爸');
    expect(childNode.type).toBe('f');
    expect(childNode.parentNodes).toEqual([]);
    expect(childNode.childNodes).toEqual([]);
    childNode.appendChild('m');
    expect(childNode.childNodes.length).toBe(1);
    const nextNode = childNode.childNodes[0];
    expect(nextNode.title).toBe('奶奶');
    expect(nextNode.type).toBe('m');
    expect(nextNode.parentNodes).toEqual([]);
    expect(nextNode.childNodes).toEqual([]);
  });
});
