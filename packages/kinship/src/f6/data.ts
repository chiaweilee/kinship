import { convertNodeToData, createNode } from '../kinship';

const me = createNode(0);

const mother = me.appendChild('m');
const father = me.appendChild('f');
const son = me.appendChild('s');
const daughter = me.appendChild('d');

// my mother's
mother.appendChild('f');
mother.appendChild('m');
mother.appendChild('ob');
mother.appendChild('lb');
mother.appendChild('os');
mother.appendChild('ls');

// my father's
father.appendChild('f');
father.appendChild('m');
father.appendChild('ob');
father.appendChild('lb');
father.appendChild('os');
father.appendChild('ls');

// my brothers'
me.appendChild('ob').appendChild('s');
me.appendChild('ob').appendChild('d');

// my sisters'
me.appendChild('os').appendChild('s');
me.appendChild('os').appendChild('d');

// my son's
son.appendChild('s');
son.appendChild('d');
// my daughter's
daughter.appendChild('s');
daughter.appendChild('d');

const data = convertNodeToData(me);

export default data;
