import { useState } from 'react';
import { View } from '@tarojs/components';
import { useLoad, useUnload } from '@tarojs/taro';
import { init } from '@/module/f6';
import './index.less';

export default function Index() {
  const [graph, $graph] = useState(null) as any;
  const [canvasWidth, $canvasWidth] = useState(0);
  const [canvasHeight, $canvasHeight] = useState(0);
  const [canvasPixelRatio, $canvasPixelRatio] = useState(0);

  useLoad(() => {
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();
    $canvasWidth(windowWidth);
    $canvasHeight(windowHeight);
    $canvasPixelRatio(pixelRatio);
  });

  useUnload(() => {
    graph?.destroy();
  });

  const handleInit = (event) => {
    $graph(
      init({
        ...event.detail,
        width: canvasWidth * canvasPixelRatio,
        height: canvasHeight * canvasPixelRatio,
      })
    );
  };

  const handleTouch = (event) => {
    graph?.emitEvent(event.detail);
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
        onOnTouchEvent={handleTouch}
        bindonTouchEvent
      />
    </View>
  );
}
