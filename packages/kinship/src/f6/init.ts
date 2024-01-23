import data from './data';
import { graphBaseConfig } from './constants';

function init(F6, { ctx, renderer, width, height }) {
  const graph = new F6.Graph({
    container: null,
    renderer,
    context: ctx,
    width,
    height,
    ...graphBaseConfig,
  });

  graph.data(data);
  graph.render();

  graph.on('nodeselectchange', (e) => {
    // 当前操作的 item
    console.log(e.target);
    // 当前操作后，所有被选中的 items 集合
    console.log(e.selectedItems);
    // 当前操作时选中(true)还是取消选中(false)
    console.log(e.select);
  });

  return graph;
}

export { init };
