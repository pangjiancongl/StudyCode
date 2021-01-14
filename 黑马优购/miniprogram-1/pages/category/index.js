// 请求
import { request } from "../../request/index.js";
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面数据
    categoryList: [],
        // 被点击的左侧的菜单
        currentIndex: 0,
         // 右侧内容的滚动条距离顶部的距离
    scrollTop: 0
  },

  getCategory(){
    request({ url: "/categories" })
    .then(result => {
      this.setData({
        categoryList: result
      })
    })
  },
  handleItemTap(e){
    const { index } = e.currentTarget.dataset;


    this.setData({
      currentIndex: index,
      // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
     scrollTop: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategory()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})