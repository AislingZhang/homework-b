const mongoose=require('mongoose')
require('../model')
let albumsDao=require('../dao/albumsDao');
let singersDao=require('../dao/singersDao');
let usersDao=require('../dao/usersDao')
const assert=require('assert')


describe("测试singersDao、albumsDao、userDao",function () {
    before(function () {
        mongoose.connect('mongodb://localhost/demo01',function (err) {
        })
    })
    after(function () {
        mongoose.disconnect()
    })

    it("测试添加一位歌手",function (done) {
        // this.timeout(10000)
        let singer={singer_id: "008", singer_name: "test"}
        singersDao.addSinger(singer,function (ns) {
            assert.ok(ns._id!=null)
            done()
        })

    })

    it('测试查询所有歌手',function (done) {
        singersDao.findAllSingers(function (singers) {
            assert.ok(singers.length>0)
            singers.forEach(singer=>console.log(singer._id))
            done()
        })
    })
    it("测试删除歌手",function (done) {
        singersDao.deleteSinger("5e47ddaab0a13c757c4635ce",function ({}) {
            console.log({})
            done()
        })
    })

    it("测试添加唱片",function (done) {
        let album={album_id: "3751222", album_name: "测试唱片1111"}
        albumsDao.addAlbum(album,function (na) {
            assert.ok(na._id!=null)
            done()
        })
    })

    it('测试查询所有唱片',function (done) {
        albumsDao.findAllAlbums(function (albums) {
            assert.ok(albums.length>0)
            albums.forEach(book=>console.log(book._id))
            done()
        })
    })
    it("测试删除唱片",function (done) {
        albumsDao.deleteAlbum("5e1683b9ccec4914dc8d2fdc",function ({}) {
            console.log({})
            done()
        })
    })

    it("测试添加用户",function (done) {
        let user={user_id: "1", user_name: "zhanglin1",password:"123456"}
        usersDao.addUser(user,function (nu) {
            assert.ok(nu._id!=null)
            done()
        })
    })

    it("测试查询用户+密码",function (done) {
        let user={username:'zhanglin',password: 123456};
        usersDao.findUser(user, function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })

})

