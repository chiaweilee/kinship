export const graphBaseConfig = {
  fitView: true,
  modes: {
    default: [
      {
        type: 'click-select',
        multiple: false,
        shouldBegin: (e) => {
          console.log('shouldBegin', e);
          return true;
        },
        shouldUpdate: (e) => {
          console.log('shouldUpdate', e);
          return true;
        },
      },
    ],
  },
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
    type: 'line',
    style: {
      endArrow: true,
      startArrow: false,
    },
  },
  defaultCombo: {
    type: 'rect',
    style: {
      // lineWidth: 0,
    },
  },
};
