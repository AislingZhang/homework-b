var express = require('express');
var router=express.Router();
var albumsDao=require('../dao/albumsDao');

router.get('/',function (req,res) {
    albumsDao.findAllAlbums(function (albums) {
        res.json(albums);
    })
});

router.post('/',function (req,res) {
    let album=req.body
    albumsDao.addAlbum(album,function (na) {
        res.json(na)
    })
})

router.delete('/:id',function (req,res) {
    let id=req.params.id;
    albumsDao.deleteAlbum(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;