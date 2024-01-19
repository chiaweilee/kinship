import { useState } from 'react';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import F6 from '@antv/f6-wx/src/index';
import { createNode, convertNodeToData } from '@/module/kinship';
import { graphBaseConfig } from '@/constants';
import './index.less';

export default function Index() {
  const [canvasWidth, $canvasWidth] = useState(0);
  const [canvasHeight, $canvasHeight] = useState(0);
  const [canvasPixelRatio, $canvasPixelRatio] = useState(0);

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
      width: canvasWidth * canvasPixelRatio,
      height: canvasHeight * canvasPixelRatio,
      ...graphBaseConfig,
    });

    const node = createNode(0);
    const fatherNode = node.appendChild('f');
    node.appendChild('ob');
    node.appendChild('s');
    const uncleNode = fatherNode.appendChild('ob');
    uncleNode.appendChild('d');
    const data = convertNodeToData(node);

    graph.data(data); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图
  };

  return (
    <View>
      {/* @ts-ignore */}
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
