const mongoose=require('mongoose')

let singersModel=mongoose.model("singers")

function addSinger(singer,callback) {
    let a=  singersModel.create(singer,function (err,newSingerDoc) {
        if(!err)
        {
            callback(newSingerDoc.toObject())
        }
    })
}

function findAllSingers(callback) {
    singersModel.find({}).exec(function (err,singers) {
        if(!err) callback(singers)
    })
}

function findSingersByName(name, callback) {
    singersModel.find({singer_name: name}).exec(function (err, singers) {
        if (!err) {
            callback(singers);
        }
    })
}

function deleteSinger(id,callback) {
    singersModel.findByIdAndRemove(id,function (err) {
        if(!err) callback({})
    })
}

function initSingersData(callback) {
    let initData = [{singer_id: "1", singer_name: "王菲"},{singer_id: "2", singer_name: "周杰伦"}];
    singersModel.deleteMany({}, function (err) {
        if (!err) {
            // 重新插入新数据
            singersModel.insertMany(initData, function (err, singers) {
                if (!err) {
                    callback({
                        code: 0,
                        singers: singers,
                        msg: '初始化数据成功'
                    })
                } else {
                    callback({
                        code: 1,
                        msg: '初始化数据失败'
                    })
                }
            })
        } else {
            callback({
                code: 1,
                msg: '初始化数据失败'
            })
        }
    })
}


module.exports={addSinger,findAllSingers,deleteSinger,findSingersByName,initSingersData}