import data from './data';
import { graphBaseConfig } from './constants';

function init(F6: any, options: any) {
  const { ctx, renderer, width, height, pixelRatio } = options;
  const graph = new F6.Graph({
    container: null,
    renderer,
    context: ctx,
    width,
    height,
    pixelRatio,
    ...graphBaseConfig,
  });

  graph.data(data);
  graph.render();

  graph.on('nodeselectchange', (e) => {
    // 当前操作的 item
    console.log(e.target);
    // 当前操作后，所有被选中的 items 集合
    console.log(e.selectedItems);
  });

  return graph;
}

export { init };
