import { useState } from 'react';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { init } from '@/module/f6';
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
    init({
      ctx,
      renderer,
      width: canvasWidth * canvasPixelRatio,
      height: canvasHeight * canvasPixelRatio,
    });
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
