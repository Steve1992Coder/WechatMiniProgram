// miniprogram/pages/photoShow/photoShow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getImageList();
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

  },
  getImageList(){
    let that = this;
    wx.cloud.database().collection('imagelist').get({
      success(res){
        console.log(res)
        that.setData({
          dataList:res.data
        })
      }
    })
  },
  delPhoto(event){
    let that = this;
    let id = event.currentTarget.dataset.id;
    wx.showModal({
      title: '删除！',
      content: '确定删除嘛？',
      success(res){
        if(res.confirm){
          console.log("点击确认")
          wx.cloud.database()
            .collection('imagelist')
            .doc(id)//对那一条数据
            .remove({
              success(res) {
                console.log("delSuccess", res)
                that.getImageList();
              }
            })
        }else{
          console.log("点击了取消按钮")
        }
      }
    })
    
  },
  savePhoto(){
    let that = this;
    wx.cloud.database().collection('imagelist').get({
      success(res){
        console.log(res)
        that.setData({
          dataList:res.data
        })
      }
    })
  }
})