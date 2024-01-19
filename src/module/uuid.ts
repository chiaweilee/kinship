const hexList: any = [];
for (let i = 0; i <= 15; i++) {
  hexList[i] = i.toString(16);
}

function uuid(id: string): string {
  // @ts-ignore
  if (process.env.NODE_ENV === 'test') return id;
  if (id) id += '-';
  for (let i = 1; i <= 36; i++) {
    if (i === 9 || i === 14 || i === 19 || i === 24) {
      id += '-';
    } else if (i === 15) {
      id += 4;
    } else if (i === 20) {
      id += hexList[(Math.random() * 4) | 8];
    } else {
      id += hexList[(Math.random() * 16) | 0];
    }
  }
  return id;
}

export default uuid;
