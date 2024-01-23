import { orderBy } from './utils';

describe('utils', () => {
  it('orderBy', () => {
    expect(orderBy([{ t: 1 }, { t: 2 }, { t: 3 }], 't', [2, 1, 3])).toEqual([
      { t: 2 },
      { t: 1 },
      { t: 3 },
    ]);
  });
});
