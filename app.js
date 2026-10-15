// app.js
App({
  onLaunch: function (options) {
    console.log('小程序启动', options);
  },

  onShow: function (options) {
    console.log('小程序显示', options);
  },

  onHide: function () {
    console.log('小程序隐藏');
  },

  onError: function (msg) {
    console.error('小程序错误', msg);
  },

  globalData: {
    userInfo: null
  }
});