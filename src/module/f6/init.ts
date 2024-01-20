import F6 from '@antv/f6-wx/src/index';
import data from './data';
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

  graph.data(data);
  graph.render();
}

export { init };
