
Page({
  data: {
    log: 0,
    lat: 0,
    controls:[

    ]
  },
  onLoad: function () {
    var that = this;
    wx.getLocation({
      success: function(res) {
        var log = res.longitude;
        var lat = res.latitude;
        that.setData({
          log:log,
          lat:lat
        })
      },
    })
    that.setData({
      controls:[
        {
          id:1,
          iconPath:'/imgs/btn_scan.png',
          position:{
            height:100,
            width:250,
            top:400,
            left:30
          }

        }
      ]
    })


  }

})
