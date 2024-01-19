import { createNode } from './node';

describe('node', () => {
  it('create node', () => {
    const node = createNode(1);
    expect(node.gender).toBe(1);
    expect(node.label).toBe('自己');
    expect(node.seniority).toBe(0);
    expect(node.parentNodes).toEqual([]);
    expect(node.childNodes).toEqual([]);
  });

  it('append children', () => {
    const node = createNode(1);
    expect(node.gender).toBe(1);
    expect(node.seniority).toBe(0);
    expect(node.parentNodes).toEqual([]);
    const fatherNode = node.appendChild('f');
    expect(fatherNode.label).toBe('爸爸');
    expect(fatherNode.type).toBe('f');
    expect(fatherNode.seniority).toBe(1);
    expect(fatherNode.parentNodes.length).toBe(1);
    expect(fatherNode.parentNodes[0].gender).toBe(1);
    expect(fatherNode.childNodes).toEqual([]);
    const grandmotherNode = fatherNode.appendChild('m');
    expect(grandmotherNode.seniority).toBe(2);
    expect(grandmotherNode.label).toBe('奶奶');
    expect(grandmotherNode.type).toBe('m');
    expect(grandmotherNode.parentNodes.length).toBe(1);
    expect(grandmotherNode.parentNodes[0].label).toBe('爸爸');
    expect(grandmotherNode.childNodes).toEqual([]);
  });

  it('append existed children', () => {
    const node = createNode(1);
    node.appendChild('f');
    const fatherNode = node.appendChild('f');
    expect(node.childNodes.length).toBe(1);
    expect(fatherNode).not.toBe(undefined);
  });

  it('append ethics children', () => {
    const node = createNode(1);
    node.appendChild('f').appendChild('f');
    node.appendChild('m').appendChild('m').appendChild('m');
    node.appendChild('w').appendChild('w').appendChild('w').appendChild('w');
    node.appendChild('h').appendChild('h').appendChild('h').appendChild('h').appendChild('h');
    expect(node.childNodes.length).toBe(4);
  });
});
