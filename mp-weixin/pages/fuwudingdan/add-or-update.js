(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fuwudingdan/add-or-update"],{"412d":function(n,e,t){"use strict";var u=t("6a6a"),i=t.n(u);i.a},4787:function(n,e,t){"use strict";t.r(e);var u=t("a5a5"),i=t("e82d");for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);t("412d");var a,o=t("f0c5"),s=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"589694ce",null,!1,u["a"],a);e["default"]=s.exports},"646a":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(t("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,u,i,r,a){try{var o=n[r](a),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(u,i)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(u,i){var a=n.apply(e,t);function o(n){r(a,u,i,o,s,"next",n)}function s(n){r(a,u,i,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("1558"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{fuwudanhao:"",fuwubiaoti:"",fuwuleixing:"",fuwuxiangqing:"",fuwujine:"",fuwutupian:"",zhanghao:"",zhiyuanhao:"",xingming:"",userid:""},user:{},ro:{fuwudanhao:!1,fuwubiaoti:!1,fuwuleixing:!1,fuwuxiangqing:!1,fuwujine:!1,fuwutupian:!1,zhanghao:!1,zhiyuanhao:!1,xingming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=a(u.default.mark((function e(t){var i,r,a,o;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=n.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(r=e.sent,this.user=r.data,this.ruleForm.zhiyuanhao=this.user.zhiyuanhao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=15;break}return this.ruleForm.id=t.id,e.next=13,this.$api.info("fuwudingdan",this.ruleForm.id);case 13:r=e.sent,this.ruleForm=r.data;case 15:if(!t.cross){e.next=62;break}a=n.getStorageSync("crossObj"),e.t0=u.default.keys(a);case 18:if((e.t1=e.t0()).done){e.next=62;break}if(o=e.t1.value,"fuwudanhao"!=o){e.next=24;break}return this.ruleForm.fuwudanhao=a[o],this.ro.fuwudanhao=!0,e.abrupt("continue",18);case 24:if("fuwubiaoti"!=o){e.next=28;break}return this.ruleForm.fuwubiaoti=a[o],this.ro.fuwubiaoti=!0,e.abrupt("continue",18);case 28:if("fuwuleixing"!=o){e.next=32;break}return this.ruleForm.fuwuleixing=a[o],this.ro.fuwuleixing=!0,e.abrupt("continue",18);case 32:if("fuwuxiangqing"!=o){e.next=36;break}return this.ruleForm.fuwuxiangqing=a[o],this.ro.fuwuxiangqing=!0,e.abrupt("continue",18);case 36:if("fuwujine"!=o){e.next=40;break}return this.ruleForm.fuwujine=a[o],this.ro.fuwujine=!0,e.abrupt("continue",18);case 40:if("fuwutupian"!=o){e.next=44;break}return this.ruleForm.fuwutupian=a[o],this.ro.fuwutupian=!0,e.abrupt("continue",18);case 44:if("zhanghao"!=o){e.next=48;break}return this.ruleForm.zhanghao=a[o],this.ro.zhanghao=!0,e.abrupt("continue",18);case 48:if("zhiyuanhao"!=o){e.next=52;break}return this.ruleForm.zhiyuanhao=a[o],this.ro.zhiyuanhao=!0,e.abrupt("continue",18);case 52:if("xingming"!=o){e.next=56;break}return this.ruleForm.xingming=a[o],this.ro.xingming=!0,e.abrupt("continue",18);case 56:if("userid"!=o){e.next=60;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,e.abrupt("continue",18);case 60:e.next=18;break;case 62:this.styleChange();case 63:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fuwutupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.fuwutupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=a(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("fuwudingdan",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("fuwudingdan",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),u=e.getMonth()+1,i=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),u=u>9?u:"0"+u,i=i>9?i:"0"+i,"".concat(t,"-").concat(u,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},"6a6a":function(n,e,t){},a5a5:function(n,e,t){"use strict";var u,i=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return u}))},d7ba:function(n,e,t){"use strict";(function(n){t("656c"),t("921b");u(t("66fd"));var e=u(t("4787"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},e82d:function(n,e,t){"use strict";t.r(e);var u=t("646a"),i=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,(function(){return u[n]}))}(r);e["default"]=i.a}},[["d7ba","common/runtime","common/vendor"]]]);