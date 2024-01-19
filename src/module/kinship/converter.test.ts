import { createNode } from './node';
import { convertNodeToData } from './converter';

describe('data', () => {
  it('convert single node to data', () => {
    const node = createNode(1);
    const data = convertNodeToData(node);
    expect(data).toEqual({ edges: [], nodes: [{ id: '', label: '自己', seniority: 0 }] });
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
          source: '自己',
          target: '爸爸',
        },
        {
          source: '自己',
          target: '哥哥',
        },
        {
          source: '自己',
          target: '儿子',
        },
        {
          source: '爸爸',
          target: '伯父',
        },
        {
          source: '伯父',
          target: '堂姐',
        },
      ],
      nodes: [
        { id: '', label: '自己', seniority: 0 },
        { id: 'f', label: '爸爸', seniority: 1 },
        { id: 'ob', label: '哥哥', seniority: 0 },
        { id: 's', label: '儿子', seniority: -1 },
        { id: 'ob', label: '伯父', seniority: 1 },
        { id: 'd', label: '堂姐', seniority: 0 },
      ],
    });
  });
});
