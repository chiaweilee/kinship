import { createNode } from './node';

describe('node', () => {
  it('create node', () => {
    const node = createNode(1);
    expect(node.gender).toBe(1);
    expect(node.parentNodes).toEqual([]);
    expect(node.childNodes).toEqual([]);
  });

  it('append children', () => {
    const node = createNode(1);
    node.appendChild('f');
    expect(node.gender).toBe(1);
    expect(node.parentNodes).toEqual([]);
    expect(node.childNodes.length).toBe(1);
    const childNode = node.childNodes[0];
    expect(childNode.title).toBe('爸爸');
    expect(childNode.type).toBe('f');
    expect(childNode.parentNodes.length).toBe(1);
    expect(childNode.parentNodes[0].gender).toBe(1);
    expect(childNode.childNodes).toEqual([]);
    childNode.appendChild('m');
    expect(childNode.childNodes.length).toBe(1);
    const nextNode = childNode.childNodes[0];
    expect(nextNode.title).toBe('奶奶');
    expect(nextNode.type).toBe('m');
    expect(nextNode.parentNodes.length).toBe(1);
    expect(nextNode.parentNodes[0].title).toBe('爸爸');
    expect(nextNode.childNodes).toEqual([]);
  });
  
  it('append ethics children', () => {
    const node = createNode(1);
    node.appendChild('f');
    node.appendChild('f');
    node.appendChild('m');
    node.appendChild('m');
    node.appendChild('w');
    node.appendChild('w');
    node.appendChild('h');
    node.appendChild('h');
    expect(node.childNodes.length).toBe(4);
  });
});
