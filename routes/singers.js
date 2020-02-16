var express = require('express');
var router=express.Router();
var singersDao=require('../dao/singersDao');

router.get('/',function (req,res) {
    singersDao.findAllSingers(function (singers) {
        res.json(singers);
    })
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