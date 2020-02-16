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

function deleteAlbum(id,callback) {
    albumsModel.findByIdAndRemove(id,function (err) {
        if(!err) callback({})
    })
}
module.exports={addAlbum,findAllAlbums,deleteAlbum}