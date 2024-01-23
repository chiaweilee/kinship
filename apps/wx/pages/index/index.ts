import F6 from '@antv/f6-wx'
import { init } from '@a/kinship';

Page({
  graph: null,

  data: {
    width: 0,
    height: 0,
    pixelRatio: 1,
  },

  onLoad() {
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

    this.setData({
      canvasWidth: windowWidth,
      canvasHeight: windowHeight,
      pixelRatio,
    });
  },

  handleCanvasInit(event) {
    const { canvasWidth, canvasHeight, canvasPixelRatio } = this.data;
    init(F6, {
      ...event.detail,
      width: canvasWidth * canvasPixelRatio,
      height: canvasHeight * canvasPixelRatio,
    })
  },

  handleTouch(e) {
    this.graph && this.graph.emitEvent(e.detail);
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
