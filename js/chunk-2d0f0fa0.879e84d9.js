(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0fa0"],{"9f52":function(e,t,o){"use strict";o.r(t),o.d(t,"crudOptions",(function(){return i}));var i={options:{height:"100%"},viewOptions:{disabled:!1},rowHandle:{},columns:[{title:"ID",key:"id",width:90,form:{disabled:!0}},{title:"商品标题",key:"title",sortable:!0},{title:"商品代码",key:"code",search:{disabled:!1},sortable:!0},{title:"图片",key:"images",sortable:!0,type:"image-uploader",form:{component:{span:24}}},{title:"价格",key:"price",sortable:!0},{title:"库存",key:"store",sortable:!0,type:"number"},{title:"简介",key:"intro",sortable:!0,type:"text-area"},{title:"详情",key:"content",sortable:!0,type:"editor-quill",disabled:!0},{title:"自定义",key:"custom",sortable:!0,form:{component:{span:24},slot:!0}},{title:"自定义2",key:"custom2",sortable:!0,form:{component:{span:24},slot:!0}}],formGroup:{type:"collapse",accordion:!1,groups:{base:{title:"商品基础",icon:"el-icon-goods",columns:["title","code","images"]},price:{title:"库存价格",icon:"el-icon-price-tag",columns:["store","price"]},info:{title:"详情",collapsed:!1,icon:"el-icon-warning-outline",columns:["intro","content"]},custom:{title:"自定义",collapsed:!0,show:function(e){return console.log("custom context",e),"view"===e.mode},disabled:!1,icon:"el-icon-warning-outline",columns:["custom","custom2"]}}}}}}]);