import { request } from "../../request/index.js";
// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentIndex:0,

  // 数据
  goodsList:""
  },
        // 接口要的参数
        queryParams:{
          query:"",
          cid:"",
          pagenum:1,
          pagesize:10
        },
          // 总页数
  totalPages:1,
  handleTabsItemChange(e){
    this.setData({
      contentIndex:e.detail.index
    })
  },
 getGoodsList(){
 request({ url: "/goods/search",
    data:this.queryParams })
    .then(result => {
      this.setData({
        // 拼接了数组
        goodsList:[...this.data.goodsList,...result.goods]
      })
      this.totalPages = Math.ceil(result.total/this.queryParams.pagesize)
          // 关闭下拉刷新的窗口 
    wx.stopPullDownRefresh();
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.queryParams.cid = options.cid || ""
    this.getGoodsList()
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
        // 1 重置数组
        this.setData({
          goodsList:[]
        })
        // 2 重置页码
        this.queryParams.pagenum=1;
        // 3 发送请求
        this.getGoodsList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     //  1 判断还有没有下一页数据
     if(this.queryParams.pagenum>=this.totalPages){
      wx.showToast({
        title: '数据已经到底',
        icon: 'none'
      })
        
    }else{
      // 还有下一页数据
      this.queryParams.pagenum++;
      this.getGoodsList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})