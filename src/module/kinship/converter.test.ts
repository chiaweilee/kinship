import { createNode } from './node';
import { convertNodeToData } from './converter';

describe('data', () => {
  it('convert single node to data', () => {
    const node = createNode(1);
    const data = convertNodeToData(node);
    expect(data.edges).toEqual([]);
    expect(data.combos).toEqual([{ id: '0' }]);
    expect(data.nodes.length).toBe(1);
    expect(data.nodes[0].id).toBe('$');
    expect(data.nodes[0].comboId).toBe('0');
  });

  it('convert nodes to data', () => {
    const node = createNode(1);
    const fatherNode = node.appendChild('f');
    node.appendChild('ob');
    node.appendChild('s');
    const uncleNode = fatherNode.appendChild('ob');
    uncleNode.appendChild('d');
    const data = convertNodeToData(node);
    expect(data.edges).toEqual([
      {
        source: '$',
        target: 'f',
      },
      {
        source: '$',
        target: 'ob',
      },
      {
        source: '$',
        target: 's',
      },
      {
        source: 'f',
        target: 'f.ob',
      },
      {
        source: 'f.ob',
        target: 'f.ob.d',
      },
    ]);
    expect(data.combos).toEqual([
      {
        id: '0',
      },
      {
        id: '1',
      },
      {
        id: '-1',
      },
    ]);
    expect(data.nodes.length).toBe(6);
    expect(data.nodes[0].id).toBe('$');
    expect(data.nodes[0].comboId).toBe('0');
    expect(data.nodes[1].id).toBe('f');
    expect(data.nodes[1].comboId).toBe('1');
    expect(data.nodes[2].id).toBe('ob');
    expect(data.nodes[2].comboId).toBe('0');
    expect(data.nodes[3].id).toBe('s');
    expect(data.nodes[3].comboId).toBe('-1');
    expect(data.nodes[4].id).toBe('f.ob');
    expect(data.nodes[4].comboId).toBe('1');
    expect(data.nodes[5].id).toBe('f.ob.d');
    expect(data.nodes[5].comboId).toBe('0');
  });
});
