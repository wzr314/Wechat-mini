
Page({
  data: {
    log: 0,
    lat: 0,
    controls:[],
    markers:[]
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
            //repair btn
            {
              id:2,
              iconPath:'/imgs/btn_repair.png',
              position:{
                height:30,
                width:30,
                top:window_height - 60,
                left:window_width - 40
              },
              clickable:true
            },
            //pay btn
            {
              id:3,
              iconPath:'/imgs/btn_red.jpeg',
              position: {
                height: 30,
                width: 30,
                top: window_height - 100,
                left: window_width - 40
              },
              clickable: true
            },
            //reset location btn
            {
              id:4,
              iconPath:'/imgs/btn_reset.png',
              position:{
                height:30,
                width:30,
                top:window_height-60,
                left:10
              },
              clickable:true
            },
            //location pin
            {
              id:5,
              iconPath:"/imgs/location.png",
              position:{
                height: 25,
                width: 25,
                top: window_height/2 - 10,
                left: window_width/2 - 15
              }
            },
            //add bike pin
            {
              id: 6,
              iconPath: '/imgs/add.png',
              position: {
                height: 30,
                width: 30,
              },
              clickable: true
            },

          ]
        })

      },
    })
  },


//handels clicking controls 
controltap: function (e) {
    var cid = e.controlId;
    var that = this;
    console.log(cid);

    switch(cid){
      case 4: //reset location
        this.mapCtx.moveToLocation();
        break;

      case 6: 
        var bikes = that.data.markers;
        this.mapCtx.getCenterLocation({
          success: function (res) {
            var log = res.longitude
            var lat = res.latitude
            bikes.push({
              iconPath: "/imgs/bike.png",
              width: 35,
              height: 40,
              longitude: log,
              latitude: lat
            })
            // reset bike data
            that.setData({
              markers: bikes
            })
          }
        })
        break;
    }


  },


//create map context
  onReady: function(){
    this.mapCtx = wx.createMapContext("myMap"); // same as map id
  },


})
