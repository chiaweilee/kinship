import { createNode } from './node';
import { convertNodeToData } from './converter';

describe('data', () => {
  it('convert single node to data', () => {
    const node = createNode(1);
    const data = convertNodeToData(node);
    expect(data).toEqual({ edges: [], nodes: [{ id: '$', label: '自己', seniority: 0 }] });
  });

  it('convert nodes to data', () => {
    const node = createNode(1);
    const fatherNode = node.appendChild('f');
    node.appendChild('ob');
    node.appendChild('s');
    const uncleNode = fatherNode.appendChild('ob');
    uncleNode.appendChild('d');
    const data = convertNodeToData(node);
    expect(data).toEqual({
      edges: [
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
      ],
      nodes: [
        { id: '$', label: '自己', seniority: 0 },
        { id: 'f', label: '爸爸', seniority: 1 },
        { id: 'ob', label: '哥哥', seniority: 0 },
        { id: 's', label: '儿子', seniority: -1 },
        { id: 'f.ob', label: '伯父', seniority: 1 },
        { id: 'f.ob.d', label: '堂姐', seniority: 0 },
      ],
    });
  });
});
