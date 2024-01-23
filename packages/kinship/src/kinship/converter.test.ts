import { createNode } from './node';
import { convertNodeToData, getArrangement } from './converter';

describe('converter', () => {
  it('convert single node to data', () => {
    const node = createNode(1);
    const data = convertNodeToData(node);
    expect(data.edges).toEqual([]);
    expect(data.combos).toEqual([{ id: '0' }]);
    expect(data.nodes.length).toBe(1);
    expect(data.nodes[0].id).toBe('$');
    expect(data.nodes[0].comboId).toBe(0);
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
  });

  it('get arrangement', () => {
    const createList = (length): any => Array.from(new Array(length)).map(() => ({}));
    expect(getArrangement(createList(3))).toEqual([{ x: -100 }, { x: 0 }, { x: 100 }]);
    expect(getArrangement(createList(5))).toEqual([
      { x: -200 },
      { x: -100 },
      { x: 0 },
      { x: 100 },
      { x: 200 },
    ]);
    expect(getArrangement(createList(7))).toEqual([
      { x: -300 },
      { x: -200 },
      { x: -100 },
      { x: 0 },
      { x: 100 },
      { x: 200 },
      { x: 300 },
    ]);

    expect(getArrangement(createList(2))).toEqual([{ x: -50 }, { x: 50 }]);
    expect(getArrangement(createList(4))).toEqual([{ x: -150 }, { x: -50 }, { x: 50 }, { x: 150 }]);
    expect(getArrangement(createList(6))).toEqual([
      { x: -250 },
      { x: -150 },
      { x: -50 },
      { x: 50 },
      { x: 150 },
      { x: 250 },
    ]);
  });
});
