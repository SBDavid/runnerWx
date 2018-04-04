console.info(wx.getFriendCloudStorage);

wx.getFriendCloudStorage({
    success: function(e) {
        console.info(e);
    }
})