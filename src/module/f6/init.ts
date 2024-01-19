import F6 from '@antv/f6-wx/src/index';
import { convertNodeToData, createNode } from '@/module/kinship';
import { graphBaseConfig } from './constants';

function init({ ctx, renderer, width, height }) {
  const graph = new F6.Graph({
    container: null,
    renderer: renderer,
    context: ctx,
    width,
    height,
    ...graphBaseConfig,
  });

  const node = createNode(0);
  const motherNode = node.appendChild('m');
  const fatherNode = node.appendChild('f');
  motherNode.appendChild('m').appendChild('ob');
  fatherNode.appendChild('ob').appendChild('d').appendChild('s');
  fatherNode.appendChild('ob').appendChild('lb').appendChild('d');
  node.appendChild('ob').appendChild('s').appendChild('s');
  node.appendChild('s').appendChild('d').appendChild('s');
  const data = convertNodeToData(node);

  console.log('data', data);

  graph.data(data); // 读取 Step 2 中的数据源到图上
  graph.render(); // 渲染图
}

export { init };
