// @ts-ignore
import F6 from '@antv/f6-wx'
// @ts-ignore
import { init } from '@a/kinship';

Page({
  graph: null as any,

  data: {
    canvasWidth: 0,
    canvasHeight: 0,
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

  handleCanvasInit(event: any) {
    const { canvasWidth, canvasHeight, pixelRatio } = this.data as any;
    this.graph = init(F6, {
      ...event.detail,
      width: canvasWidth,
      height: canvasHeight,
      pixelRatio,
    });
  },

  handleTouch(e) {
    this.graph && this.graph.emitEvent(e.detail);
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
