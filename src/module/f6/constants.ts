export const graphBaseConfig = {
  fitView: true,
  defaultNode: {
    type: 'rect',
    size: 50,
    style: {
      fill: '#bae637',
      stroke: '#eaff8f',
      lineWidth: 5,
      radius: 10,
    },
    labelCfg: {
      style: {
        fill: '#9254de',
        fontSize: 18,
      },
    },
  },
  defaultEdge: {
    // type: 'hvh',
    style: {
      endArrow: true,
      startArrow: false,
    },
  },
  defaultCombo: {
    type: 'rect',
  }
};
