(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2d47"],{"267d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",{attrs:{type:"card"}},[n("p",{staticClass:"d2-mt-0"},[e._v("在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存")]),n("el-input",{attrs:{placeholder:"input here"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("p",[e._v("关闭标签页")]),n("el-button-group",[n("el-button",{on:{click:e.handleCloseCurrent}},[n("d2-icon",{attrs:{name:"times"}}),e._v(" 当前 ")],1),n("el-button",{on:{click:e.handleCloseLeft}},[n("d2-icon",{attrs:{name:"arrow-left"}}),e._v(" 左侧 ")],1),n("el-button",{on:{click:e.handleCloseRight}},[e._v(" 右侧 "),n("d2-icon",{attrs:{name:"arrow-right"}})],1),n("el-button",{on:{click:e.handleCloseOther}},[e._v(" 其它 "),n("d2-icon",{attrs:{name:"times"}})],1),n("el-button",{on:{click:e.closeAll}},[e._v(" 全部 "),n("d2-icon",{attrs:{name:"times-circle"}})],1)],1),n("p",[e._v("刷新")]),n("el-button-group",[n("el-button",{on:{click:e.handleCleanCacheAndRefreshCurrent}},[n("d2-icon",{attrs:{name:"refresh"}}),e._v(" 清空当前页缓存并刷新 ")],1),n("el-button",{on:{click:e.handleCleanCacheAndRefreshAll}},[n("d2-icon",{attrs:{name:"refresh"}}),e._v(" 清空所有缓存并刷新 ")],1)],1)],1)},r=[],l=(n("b0c0"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),o=n("5530"),c=n("5880"),s={name:"demo-playground-store-page",data:function(){return{value:""}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["mapMutations"])("d2admin/page",["keepAliveRemove","keepAliveClean"])),Object(c["mapActions"])("d2admin/page",["close","closeLeft","closeRight","closeOther","closeAll"])),{},{handleCloseCurrent:function(){this.close({tagName:this.$route.fullPath})},handleCloseLeft:function(){this.closeLeft({tagName:this.$route.fullPath})},handleCloseRight:function(){this.closeRight({tagName:this.$route.fullPath})},handleCloseOther:function(){this.closeOther({tagName:this.$route.fullPath})},handleCleanCacheAndRefreshCurrent:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.keepAliveRemove(e.$route.name),t.next=3,e.$nextTick();case 3:e.$router.replace("/refresh");case 4:case"end":return t.stop()}}),t)})))()},handleCleanCacheAndRefreshAll:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.keepAliveClean(),t.next=3,e.$nextTick();case 3:e.$router.replace("/refresh");case 4:case"end":return t.stop()}}),t)})))()}})},i=s,u=n("2877"),h=function(e){e.options.__source="src/views/demo/playground/store/page/index.vue"},d=h,f=Object(u["a"])(i,a,r,!1,null,null,null);"function"===typeof d&&d(f);t["default"]=f.exports}}]);