import { useState } from 'react';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import F6 from '@antv/f6-wx/src/index';
import './index.less';

const data = {
  nodes: Array.from(new Array(30)).map((_, i) => ({ id: `node${i}`, label: `node${i}` })),
  edges: [
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node2', // String，必须，目标点 id
    },
  ],
};

export default function Index() {
  const [canvasWidth, $canvasWidth] = useState();
  const [canvasHeight, $canvasHeight] = useState();
  const [canvasPixelRatio, $canvasPixelRatio] = useState();

  useLoad(() => {
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();
    $canvasWidth(windowWidth);
    $canvasHeight(windowHeight);
    $canvasPixelRatio(pixelRatio);
  });

  const handleInit = (event) => {
    const { ctx, renderer } = event.detail;
    const graph = new F6.Graph({
      container: null,
      renderer: renderer,
      context: ctx,
      width: 800,
      height: 500,
    });
    graph.data(data); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图
  };

  return (
    <View>
      <f6-canvas
        width={canvasWidth}
        height={canvasHeight}
        pixelRatio={canvasPixelRatio}
        onOnInit={handleInit}
        bindonInit
      />
    </View>
  );
}
