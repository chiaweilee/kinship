import { useState } from 'react';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import F6 from '@antv/f6-wx/src/index';
import { createNode } from '@/components/chain/module/node';
import { convertNodeToData } from '@/components/chain/module/data';
import './index.less';

const node = createNode(0);
node.appendChild('f');
node.appendChild('ob');
node.appendChild('s');
node.childNodes[0].appendChild('ob');
node.childNodes[0].childNodes[0].appendChild('d');
const data = convertNodeToData(node);

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
