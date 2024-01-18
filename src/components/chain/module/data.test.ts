import { createNode } from './node';
import { convertNodeToData } from './data';

describe('data', () => {
  it('convert single node to data', () => {
    const node = createNode(1);
    const data = convertNodeToData(node);
    expect(data).toEqual({ edges: [], nodes: [{ id: '自己', label: '自己' }] });
  });

  it('convert nodes to data', () => {
    const node = createNode(1);
    node.appendChild('f');
    node.appendChild('ob');
    node.appendChild('s');
    node.childNodes[0].appendChild('ob');
    node.childNodes[0].childNodes[0].appendChild('d');
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
        { id: '自己', label: '自己' },
        { id: '爸爸', label: '爸爸' },
        { id: '哥哥', label: '哥哥' },
        { id: '儿子', label: '儿子' },
        { id: '伯父', label: '伯父' },
        { id: '堂姐', label: '堂姐' },
      ],
    });
  });
});
