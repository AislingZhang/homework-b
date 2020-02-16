const mongoose=require('mongoose')

let usersModel=mongoose.model("users")

function addUser(user, callback) {

    usersModel.create(user, function (err, newUser) {
        if (!err) {
            callback({
                code: 0, // 0 表示成功，1表示失败
                user: newUser.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: err
            })
        }
    })
}




function findUser(userInfo, callback) {
    usersModel.findOne({username: userInfo.username, password: userInfo.password}).exec(function (err, user) {
        if (!err) {
            callback({
                code: 0, // 0 表示成功，1表示失败
                user: user
            })
        } else {
            callback({
                code: 1,
                msg: err
            })
        }
    })
}

function findUserById(id, callback) {
    usersModel.findOne({"_id": id}).exec(function (err, user) {
        if (!err) {
            callback({
                code: 0, // 0 表示成功，1表示失败
                user: user
            })
        } else {
            callback({
                code: 1,
                msg: err
            })
        }
    })
}

//
function findAllUsers(callback) {
    usersModel.find({}).exec(function (err,users) {
        if(!err) callback(users)
    })
}
//
// function deleteSinger(id,callback) {
//     singersModel.findByIdAndRemove(id,function (err) {
//         if(!err) callback({})
//     })
//}
module.exports={addUser,findUser,findAllUsers}