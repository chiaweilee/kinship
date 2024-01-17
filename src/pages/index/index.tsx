import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import F6 from '@antv/f6-wx/src/index';
import './index.less';

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
    const { ctx, canvas, renderer } = event.detail;
    console.log(ctx);
  };

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <f6-canvas
        width={canvasWidth}
        height={canvasHeight}
        pixelRatio={canvasPixelRatio}
        onInit={handleInit}
      />
    </View>
  );
}
