const mongoose=require('mongoose')

let albumsModel=mongoose.model("albums")

function addAlbum(album,callback) {
    let a=  albumsModel.create(album,function (err,newAlbumDoc) {
        if(!err)
        {
            callback(newAlbumDoc.toObject())
        }
    })
}

function findAllAlbums(callback) {
    albumsModel.find({}).exec(function (err,albums) {
        if(!err) callback(albums)
    })
}

function findAlbumsByName(name, callback) {
    albumsModel.find({album_name: name}).exec(function (err, albums) {
        if (!err) {
            callback(albums);
        }
    })
}

function deleteAlbum(id,callback) {
    albumsModel.findByIdAndRemove(id,function (err) {
        if(!err) callback({})
    })
}

function initAlbumsData(callback) {
    let initData = [
        {
            album_id: "3000001",
            album_name: "简单爱",
            public_time: "2017-12-11",
            week: 100,
            price: 100,
            singers: [
                {
                    singer_id: "265",
                    singer_name: "周杰伦"
                }
            ]
        },
        {
            album_id: "3000002",
            album_name: "浮躁",
            public_time: "2017-12-08",
            week: 60,
            price: 105,
            singers: [
                {
                    singer_id: "941206",
                    singer_name: "王菲"
                }
            ]
        }
    ];
    albumsModel.deleteMany({}, function (err) {
        if (!err) {
            // 重新插入新数据
            albumsModel.insertMany(initData, function (err, albums) {
                if (!err) {
                    callback({
                        code: 0,
                        albums: albums,
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

module.exports={addAlbum,findAllAlbums,deleteAlbum,findAlbumsByName,initAlbumsData}