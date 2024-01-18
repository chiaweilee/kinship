import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import F6 from '@antv/f6-wx/src/index';
import './index.less';

const data = {
  // 点集
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      x: 100, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node2', // String，该节点存在则必须，节点的唯一标识
      x: 300, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
  ],
  // 边集
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
    console.log('handleInit');
    const { ctx, renderer } = event.detail;

    const graph = new F6.Graph({
      container: null,
      renderer: renderer || 'mini', // `mini` or `mini-native`
      context: ctx,
      width: 800,
      height: 500,
    });
    graph.data(data); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图
  };

  return (
    <View>
      <Text>Hello world!</Text>
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
