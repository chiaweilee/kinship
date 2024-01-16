import { createNode } from './node';
import { ethicsCheck } from './ethics';

describe('ethics', () => {
  it('ethicsCheck passed', () => {
    const node = createNode(1);
    node.appendChild('s');
    node.appendChild('d');
    node.appendChild('f');
    expect(ethicsCheck(node, 'm')).toBe(true);
  });

  it('ethicsCheck failed - fathers', () => {
    const node = createNode(1);
    node.appendChild('f');
    expect(ethicsCheck(node, 'f')).toBe(false);
  });

  it('ethicsCheck failed - mothers', () => {
    const node = createNode(1);
    node.appendChild('m');
    expect(ethicsCheck(node, 'm')).toBe(false);
  });

  it('ethicsCheck failed - husbands', () => {
    const node = createNode(1);
    node.appendChild('h');
    expect(ethicsCheck(node, 'h')).toBe(false);
  });

  it('ethicsCheck failed - wives', () => {
    const node = createNode(1);
    node.appendChild('w');
    expect(ethicsCheck(node, 'w')).toBe(false);
  });
});
