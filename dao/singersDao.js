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

function deleteSinger(id,callback) {
    singersModel.findByIdAndRemove(id,function (err) {
        if(!err) callback({})
    })
}
module.exports={addSinger,findAllSingers,deleteSinger}