# Developer Log

## Design

### Double Linked List

![double_linked_list](https://github.com/chiaweilee/kinship/assets/29817353/d0d5e192-8c28-4782-bb41-05872f7c7b55)

### Bubbling

![bubbling](https://github.com/chiaweilee/kinship/assets/29817353/629a323b-b242-4ac4-a483-56655e30f8c8)

## Problems during developing

### Taro

#### Bind Event

Don't use `onInit`, use `onOnInit` and `bindonInit` instead. So was `onTouchEvent`.

```jsx
<f6-canvas onOnInit={handleInit} bindonInit onOnTouchEvent={handleTouch} bindonTouchEvent />
```

related docs:

- https://f6.antv.vision/zh/docs/manual/tutorial/mini/wechat
- https://taro-docs.jd.com/docs/hybrid#react

