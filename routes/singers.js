var express = require('express');
var router=express.Router();
var singersDao=require('../dao/singersDao');

router.get('/',function (req,res) {
    singersDao.findAllSingers(function (singers) {
        res.json(singers);
    })
});

router.get('/getSingersByName', function(req, res, next) {
    let params = req.query;
    let name = params.name;
    console.log(params);
    if (name) {
        singersDao.findSingersByName(name, function (singers) {
            res.json(singers);
        })
    }
});

router.post('/',function (req,res) {
    let singer=req.body
    singersDao.addSinger(singer,function (ns) {
        res.json(ns)
    })
})

router.delete('/:id',function (req,res) {
    let id=req.params.id;
    singersDao.deleteSinger(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;