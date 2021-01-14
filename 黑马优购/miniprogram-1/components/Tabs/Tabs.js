// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
     tabs:[
      {
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
     ] ,
     tabsIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handelTabs(e){
      const {index} = e.currentTarget.dataset
      this.setData({
        tabsIndex:index
      })
      this.triggerEvent("tabsItemChange",{index});
      },
  }
})
