
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


    wx.getSystemInfo({
      success: function (res) {
        var window_width = res.windowWidth;
        var window_height = res.windowHeight;

        
        that.setData({
          controls: [
            {
              id: 1,
              //img background
              iconPath: '/imgs/btn_scan.png',
              position: {
                height: 100,
                width: 200,
                top: window_height - 80,
                left: window_width/2 - 100
              }
            },
          ]
        })

      },
    })



  }

})
