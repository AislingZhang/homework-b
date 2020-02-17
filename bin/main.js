const mongoose=require('mongoose');
const http=require('http');
require('../model');
let app=require('../app');
let server=http.createServer(app);


mongoose.connect("mongodb://47.92.235.190:27017/demo01",function (err) {

    if(!err){
        console.log("mongodb已连接！")
        server.listen(3000,function (err) {
            if(!err){
                console.log("express服务器已经打开")
            }
        })
    }

})


server.on('close',function () {
    mongoose.disconnect()
})