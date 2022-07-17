// components/scrollable-section/index.ts
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'isolated'
  },
  properties: {
    title: {
      type: String,
      value: '默认列表'
    },
    moreLabel: {
      type: String,
      value: '更多'
    },
    hideMore: {
      type: Boolean,
      value: false
    },
    itemWidth: {
      type: Number,
      value: 290
    },
    itemCount: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
