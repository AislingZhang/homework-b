(function(e){function t(t){for(var o,i,a=t[0],l=t[1],u=t[2],c=0,h=[];c<a.length;c++)i=a[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"da1e6e15"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=i(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},2881:function(e,t,n){},"32e0":function(e,t,n){"use strict";var o=n("2881"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),a={},l=Object(i["a"])(a,r,s,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},b=f,g=(n("32e0"),Object(i["a"])(b,d,p,!1,null,"0b11c2c6",null)),v=g.exports,_={name:"home",components:{HelloWorld:v}},k=_,w=Object(i["a"])(k,m,h,!1,null,null,null),y=w.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("Mocha测试代码")]),n("pre",[e._v("    const mongoose=require('mongoose')\n    require('../model')\n    let bookDao=require('../dao/BookDao');\n    const assert=require('assert')\n\n    describe(\"测试BookDao\",function () {\n    before(function () {\n    mongoose.connect('mongodb://39.99.192.85:27017/demo01',function (err) {\n\n    })\n    })\n    after(function () {\n    mongoose.disconnect()\n    })\n\n    it(\"测试添加一张唱片\",function (done) {\n    let book={album_id: \"3751222\", album_name: \"测试唱片\"}\n    bookDao.addBook(book,function (nb) {\n\n    assert.ok(nb._id!=null)\n    done()\n    })\n    })\n    it('测试查询所有唱片',function (done) {\n    bookDao.findAllBooks(function (books) {\n    assert.ok(books.length>0)\n    books.forEach(book=>console.log(book._id))\n    done()\n    })\n    })\n    it(\"测试删除唱片\",function (done) {\n    bookDao.deleteBook(\"5e1683b9ccec4914dc8d2fdc\",function ({}) {\n    console.log({})\n    done()\n    })\n    })\n\n\n    })\n        ")])])}],x={name:"mocha"},$=x,S=Object(i["a"])($,C,j,!1,null,"78eeb623",null),E=S.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("音乐接口测试代码")]),n("pre",[e._v('   GET http://39.99.192.85:3000/books\n   Accept: application/json\n\n    ###\n\n    POST http://39.99.192.85:3000/books\n    Content-Type: application/json\n\n    {\n      "album_id": 3751333,\n      "album_name": "测试唱片9",\n      "price": 888\n    }\n\n    ###\n\n    DELETE http://39.99.192.85:3000/books/5e1693d6a54cb3155c1aa8af\n    Accept: application/json\n\n    ###\n\n        ')])])}],O={name:"mocha"},D=O,F=Object(i["a"])(D,T,V,!1,null,"b00073f8",null),M=F.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center",valign:"center"}},[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/albumsManager"}},[e._v("音乐专辑管理")]),e._v("| "),n("router-link",{attrs:{to:"/singersManager"}},[e._v("歌手管理")])],1),n("router-view")],1),n("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("span",[e._v("这是一段信息")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"添加唱片",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.album}},[n("el-form-item",{attrs:{label:"唱片ID"}},[n("el-input",{attrs:{type:"number",placeholder:"请输入编号"},model:{value:e.album.album_id,callback:function(t){e.$set(e.album,"album_id",t)},expression:"album.album_id"}})],1),n("el-form-item",{attrs:{label:"唱片名称"}},[n("el-input",{attrs:{placeholder:"请输入唱片名称"},model:{value:e.album.album_name,callback:function(t){e.$set(e.album,"album_name",t)},expression:"album.album_name"}})],1),n("el-form-item",{attrs:{label:"唱片价格"}},[n("el-input",{attrs:{type:"number",placeholder:"请输入价格"},model:{value:e.album.price,callback:function(t){e.$set(e.album,"price",e._n(t))},expression:"album.price"}})],1),n("el-form-item",{attrs:{label:"发行时间"}},[n("el-input",{attrs:{placeholder:"请输入发行时间"},model:{value:e.album.public_time,callback:function(t){e.$set(e.album,"public_time",t)},expression:"album.public_time"}})],1),n("el-form-item",{attrs:{label:"发行周"}},[n("el-input",{attrs:{type:"number",placeholder:"请输入周期"},model:{value:e.album.week,callback:function(t){e.$set(e.album,"week",e._n(t))},expression:"album.week"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addAlbum(),e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1),n("h1",[e._v("音乐专辑管理")]),n("div",{staticClass:"search-box"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.album}},[n("el-form-item",{attrs:{label:""}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入完整唱片名"},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}},[n("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.searchAlbums},slot:"append"})],1)],1)],1)],1),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加专辑")]),n("el-button",{attrs:{type:"text"},on:{click:e.initAlbums}},[e._v("初始化唱片数据")]),n("el-table",{staticStyle:{width:"80%"},attrs:{data:e.albums}},[n("el-table-column",{attrs:{prop:"album_id",label:"唱片ID",width:"180"}}),n("el-table-column",{attrs:{prop:"album_name",label:"唱片名称",width:"300"}}),n("el-table-column",{attrs:{prop:"price",label:"唱片价格",width:"180"}}),n("el-table-column",{attrs:{prop:"week",label:"发行周期",width:"180"}}),n("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.deleteAlbum(t)}}},[e._v("删除")])]}}])})],1)],1)},P=[],I=(n("c740"),n("13d5"),n("a434"),{name:"albumsManger",created:function(){var e=this;fetch(this.url,{type:"GET"}).then((function(e){return e.json()})).then((function(t){return e.albums=t}))},data:function(){return{url:"http://localhost:3000/albums",maxId:2,album:{album_id:"",album_name:"",price:"",public_time:"",week:""},dialogVisible:!1,dialogFormVisible:!1,searchContent:"",albums:[]}},methods:{deleteAlbum:function(e){var t=this,n=e.row;fetch(this.url+"/"+n._id,{method:"DELETE"}).then((function(e){return e.json()})).then((function(){var e=t.albums.findIndex((function(e){return e._id==n._id}));t.albums.splice(e,1)}))},addAlbum:function(){var e=this;fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.album)}).then((function(e){return e.json()})).then((function(t){return e.albums.push(t)}))},searchAlbums:function(){var e=this,t="";t=this.searchContent?"/getAlbumsByName/?name="+this.searchContent:"/",fetch(this.url+t).then((function(e){return e.json()})).then((function(t){e.albums=t,e.showSingersResults=!0}))},initAlbums:function(){var e=this;this.$confirm("确定要初始化专辑数据吗","专辑数据初始化",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){fetch(e.url+"/init",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){0==t.code?(e.albums=t.albums,e.$message({showClose:!0,message:t.msg,type:"success"})):e.$message({showClose:!0,message:t.msg,type:"error"})}))})).catch((function(){console.log("init cancel")}))},handleClose:function(){console.log(123)}},computed:{priceTotal:function(){return this.albums.reduce((function(e,t){return e+t.price}),0)}}}),B=I,L=Object(i["a"])(B,A,P,!1,null,"50fd85f5",null),N=L.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center",valign:"center"}},[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/albumsManager"}},[e._v("音乐专辑管理")]),e._v("| "),n("router-link",{attrs:{to:"/singersManager"}},[e._v("歌手管理")])],1),n("router-view")],1),n("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("span",[e._v("这是一段信息")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"添加歌手",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.singer}},[n("el-form-item",{attrs:{label:"歌手ID"}},[n("el-input",{attrs:{type:"number",placeholder:"请输入id,7位数字"},model:{value:e.singer.singer_id,callback:function(t){e.$set(e.singer,"singer_id",t)},expression:"singer.singer_id"}})],1),n("el-form-item",{attrs:{label:"歌手名字"}},[n("el-input",{attrs:{placeholder:"请输入歌手名"},model:{value:e.singer.singer_name,callback:function(t){e.$set(e.singer,"singer_name",t)},expression:"singer.singer_name"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addSinger(),e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1),n("h1",[e._v("歌手管理")]),n("div",{staticClass:"search-box"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.singer}},[n("el-form-item",{attrs:{label:""}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入歌手名"},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}},[n("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.searchSingers},slot:"append"})],1)],1)],1)],1),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加歌手")]),n("el-button",{attrs:{type:"text"},on:{click:e.initSingers}},[e._v("初始化歌手数据")]),n("el-table",{staticStyle:{width:"50%"},attrs:{data:e.singers,"max-height":"500",align:"center",valign:"center"}},[n("el-table-column",{attrs:{prop:"singer_id",label:"歌手ID",width:"180"}}),n("el-table-column",{attrs:{prop:"singer_name",label:"歌手姓名",width:"300"}}),n("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.deleteSinger(t)}}},[e._v("删除")])]}}])})],1)],1)},J=[],q={name:"singersManger",created:function(){var e=this;fetch(this.url,{type:"GET"}).then((function(e){return e.json()})).then((function(t){return e.singers=t}))},data:function(){return{url:"http://localhost:3000/singers",maxId:2,singer:{singer_id:"",singer_name:""},dialogVisible:!1,dialogFormVisible:!1,searchContent:"",singers:[]}},methods:{deleteSinger:function(e){var t=this,n=e.row;fetch(this.url+"/"+n._id,{method:"DELETE"}).then((function(e){return e.json()})).then((function(){var e=t.singers.findIndex((function(e){return e._id==n._id}));t.singers.splice(e,1)}))},searchSingers:function(){var e=this,t="";t=this.searchContent?"/getSingersByName/?name="+this.searchContent:"/",fetch(this.url+t).then((function(e){return e.json()})).then((function(t){e.singers=t,e.showSingersResults=!0}))},addSinger:function(){var e=this;fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.singer)}).then((function(e){return e.json()})).then((function(t){return e.singers.push(t)}))},initSingers:function(){var e=this;this.$confirm("确定要初始化歌手数据吗","歌手数据初始化",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){fetch(e.url+"/init",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){0==t.code?(e.singers=t.singers,e.$message({showClose:!0,message:t.msg,type:"success"})):e.$message({showClose:!0,message:t.msg,type:"error"})}))})).catch((function(){console.log("init cancel")}))},handleClose:function(){console.log(123)}},computed:{priceTotal:function(){return this.singers.reduce((function(e,t){return e+t.price}),0)}}},z=q,R=Object(i["a"])(z,G,J,!1,null,"11ba468a",null),W=R.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center",valign:"center"}},[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/albums"}},[e._v("音乐专辑查询")]),e._v("| "),n("router-link",{attrs:{to:"/singers"}},[e._v("歌手查询")])],1),n("router-view")],1),n("h1",[e._v("音乐专辑查询")]),n("div",{staticClass:"search-box"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.album}},[n("el-form-item",{attrs:{label:""}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入完整唱片名"},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}},[n("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.searchAlbums},slot:"append"})],1)],1)],1)],1),n("el-table",{staticStyle:{width:"80%"},attrs:{data:e.albums}},[n("el-table-column",{attrs:{prop:"album_id",label:"唱片ID",width:"180"}}),n("el-table-column",{attrs:{prop:"album_name",label:"唱片名称",width:"300"}}),n("el-table-column",{attrs:{prop:"price",label:"唱片价格",width:"180"}}),n("el-table-column",{attrs:{prop:"week",label:"发行周期",width:"180"}})],1)],1)},U=[],Y={name:"albumsManger",created:function(){var e=this;fetch(this.url,{type:"GET"}).then((function(e){return e.json()})).then((function(t){return e.albums=t}))},data:function(){return{url:"http://localhost:3000/albums",maxId:2,album:{album_id:"",album_name:"",price:"",public_time:"",week:""},dialogVisible:!1,dialogFormVisible:!1,searchContent:"",albums:[]}},methods:{searchAlbums:function(){var e=this,t="";t=this.searchContent?"/getAlbumsByName/?name="+this.searchContent:"/",fetch(this.url+t).then((function(e){return e.json()})).then((function(t){e.albums=t,e.showSingersResults=!0}))},handleClose:function(){console.log(123)}},computed:{priceTotal:function(){return this.albums.reduce((function(e,t){return e+t.price}),0)}}},K=Y,Q=Object(i["a"])(K,H,U,!1,null,"34712223",null),X=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center",valign:"center"}},[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/albums"}},[e._v("音乐专辑查询")]),e._v("| "),n("router-link",{attrs:{to:"/singers"}},[e._v("歌手查询")])],1),n("router-view")],1),n("h1",[e._v("歌手查询")]),n("div",{staticClass:"search-box"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.singer}},[n("el-form-item",{attrs:{label:""}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入歌手名"},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}},[n("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.searchSingers},slot:"append"})],1)],1)],1)],1),n("el-table",{staticStyle:{width:"80%"},attrs:{data:e.singers}},[n("el-table-column",{attrs:{prop:"singer_id",label:"歌手ID",width:"180"}}),n("el-table-column",{attrs:{prop:"singer_name",label:"歌手姓名",width:"300"}})],1)],1)},ee=[],te={name:"singersManger",created:function(){var e=this;fetch(this.url,{type:"GET"}).then((function(e){return e.json()})).then((function(t){return e.singers=t}))},data:function(){return{url:"http://localhost:3000/singers",maxId:2,singer:{singer_id:"",singer_name:""},dialogVisible:!1,dialogFormVisible:!1,searchContent:"",singers:[]}},methods:{deleteSinger:function(e){var t=this,n=e.row;fetch(this.url+"/"+n._id,{method:"DELETE"}).then((function(e){return e.json()})).then((function(){var e=t.singers.findIndex((function(e){return e._id==n._id}));t.singers.splice(e,1)}))},searchSingers:function(){var e=this,t="";t=this.searchContent?"/getSingersByName/?name="+this.searchContent:"/",fetch(this.url+t).then((function(e){return e.json()})).then((function(t){e.singers=t,e.showSingersResults=!0}))},addSinger:function(){var e=this;fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.singer)}).then((function(e){return e.json()})).then((function(t){return e.singers.push(t)}))},handleClose:function(){console.log(123)}},computed:{priceTotal:function(){return this.singers.reduce((function(e,t){return e+t.price}),0)}}},ne=te,oe=Object(i["a"])(ne,Z,ee,!1,null,"07e12dc9",null),re=oe.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center",valign:"center"}},[n("el-dialog",{attrs:{title:"注册",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.user}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{placeholder:"请输入密码",clearable:"","show-password":""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),n("el-form-item",{attrs:{label:"确认密码"}},[n("el-input",{attrs:{placeholder:"请再次输入输入密码",clearable:"","show-password":""},model:{value:e.user.password2,callback:function(t){e.$set(e.user,"password2",t)},expression:"user.password2"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addUser()}}},[e._v("确 定")])],1)],1),n("h1",[e._v("登录")]),n("div",{staticClass:"search-box"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.user}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.user.username1,callback:function(t){e.$set(e.user,"username1",t)},expression:"user.username1"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.user.password1,callback:function(t){e.$set(e.user,"password1",t)},expression:"user.password1"}})],1),n("el-form-item",{attrs:{label:""}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.login()}}},[e._v("登录")])],1)],1)],1),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("注册用户")])],1)},ie=[],ae={name:"singersManger",created:function(){var e=this;fetch(this.url,{type:"GET"}).then((function(e){return e.json()})).then((function(t){return e.singers=t}))},data:function(){return{url:"http://localhost:3000/users",maxId:2,user:{username:"",password:""},dialogVisible:!1,dialogFormVisible:!1,password2:""}},methods:{showLoginDialog:function(){this.dialogFormVisible=!0},hideDialog:function(){this.dialogFormVisible=!1},login:function(){var e=this;this.$message({showClose:!0,message:"登录成功",type:"success"}),setTimeout((function(){e.$router.push({path:"/albums"})}),2e3)},addUser:function(){var e=this;return this.user.username?this.user.password?this.user.password2?this.user.password!==this.user.password2?(this.$message({showClose:!0,message:"两次输入的密码不一致",type:"error"}),void this.showLoginDialog()):void fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.user)}).then((function(e){return e.json()})).then((function(t){0==t.code&&(e.hideDialog(),e.$message({message:"注册成功",type:"success"}))})):(this.$message({showClose:!0,message:"请确认密码",type:"error"}),void this.showLoginDialog()):(this.$message({showClose:!0,message:"密码不能为空",type:"error"}),void this.showLoginDialog()):(this.$message({showClose:!0,message:"用户名不能为空",type:"error"}),void this.showLoginDialog())},handleClose:function(){console.log(123)}}},le=ae,ue=Object(i["a"])(le,se,ie,!1,null,"b7b3b0fc",null),ce=ue.exports;o["default"].use(c["a"]);var me=[{path:"/albumsManager",name:"albumsManager",component:N},{path:"/",name:"login",component:ce},{path:"/singers",name:"singers",component:re},{path:"/albums",name:"albums",component:X},{path:"/admin",name:"admin",component:N},{path:"/singersManager",name:"singersManager",component:W},{path:"/httptest",name:"httptest",component:M},{path:"/mocha",name:"mocha",component:E},{path:"/home",name:"home",component:y},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],he=new c["a"]({mode:"hash",base:"/",routes:me}),de=he,pe=n("5c96"),fe=n.n(pe);n("0fae");o["default"].config.productionTip=!1,o["default"].use(fe.a),new o["default"]({router:de,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1eef8f10.js.map