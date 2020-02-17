const mongoose=require('mongoose')
require('../model')
let albumsDao=require('../dao/albumsDao');
let singersDao=require('../dao/singersDao');
let usersDao=require('../dao/usersDao')
const assert=require('assert')


describe("测试singersDao、albumsDao、userDao",function () {
    before(function () {
        mongoose.connect('mongodb://47.92.235.190:27017/demo01',function (err) {
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

    it("测试据名字查找歌手",function (done) {
        let name = 'lily';
        singersDao.findSingersByName(name, function (res) {
            assert.ok(res);
            res.forEach(res=>console.log(res._id))
            done();
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

    it("测试初始化歌手数据",function (done) {

        singersDao.initSingersData(function (res) {
            assert.ok(res.code == 0);
            done();
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

    it("测试据名字查找唱片",function (done) {
        let name = '123';
        albumsDao.findAlbumsByName(name, function (res) {
            assert.ok(res);
            res.forEach(res=>console.log(res._id))
            done();
        })
    })



    it("测试删除唱片",function (done) {
        albumsDao.deleteAlbum("5e1683b9ccec4914dc8d2fdc",function ({}) {
            console.log({})
            done()
        })
    })

    it("测试初始化专辑数据",function (done) {

        albumsDao.initAlbumsData(function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })



    // it("测试添加用户",function (done) {
    //     let user={user_id: "1", user_name: "zhanglin1",password:"123456"}
    //     usersDao.addUser(user,function (nu) {
    //         assert.ok(nu._id!=null)
    //         done()
    //     })
    // })

    it("测试查询用户+密码",function (done) {
        let user={username:'zhanglin',password: 123456};
        usersDao.findUser(user, function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })

    it("测试添加用户",function (done) {
        let user={user_id:10,username:'aisling',password: '123456'};
        usersDao.addUser(user, function (res) {
            assert.ok(res.code == 0);
            done();
        })
    })

})

