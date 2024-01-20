import { convertNodeToData, createNode } from '@/module/kinship';

const me = createNode(0);

const mother = me.appendChild('m');
mother.appendChild('f');
mother.appendChild('m');
mother.appendChild('ob');
mother.appendChild('lb');
mother.appendChild('os');
mother.appendChild('ls');

const father = me.appendChild('f');
father.appendChild('f');
father.appendChild('m');
father.appendChild('ob');
father.appendChild('lb');
father.appendChild('os');
father.appendChild('ls');

me.appendChild('ob').appendChild('s');
me.appendChild('ob').appendChild('d');
me.appendChild('os').appendChild('s');
me.appendChild('os').appendChild('d');

const son = me.appendChild('s');
son.appendChild('s');
son.appendChild('d');
const daughter = me.appendChild('d');
daughter.appendChild('s');
daughter.appendChild('d');

const data = convertNodeToData(me);

export default data;
