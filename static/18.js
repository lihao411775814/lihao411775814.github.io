webpackJsonp([18],{471:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={title:"二维码",data:function(){return{ok:!0,imgpath:"",hasClick:!1,items:{}}},props:{show:{type:Boolean,default:!1},advertpath:"",timeout:{type:Number,default:0},msg:""},methods:{print:function(t){this.hasClick||(this.hasClick=!0,this.$parent.doprint())},back:function(){this.hasClick||(this.hasClick=!0,this.$parent.back("tomain"))}}}},920:function(t,e){t.exports=' <modal :show.sync=show v-ref:modal big backdrop=false> <header slot=modal-header class=modal-header> <div class=auto> <h5 style="text-align: right" class=modal-title> <span style="color: red">{{timeout}}</span></h5> <h4 style="font-size:2;font-weight: bolder;text-align: center" class=modal-title> {{msg}}</h4> <div class="row text-center"> <button type=button class="btn btn-primary" @click=print()> 打印退出</button> <button type=button class="btn btn-info" @click=back()>直接退出</button> </div> </div> </header> <article slot=modal-body class=modal-body> <div style="text-align: center"> <img class=img-responsive :src=advertpath @click=close() alt=""/> </div> </article> <footer slot=modal-footer class=modal-footer> </footer> </modal> '},1044:function(t,e,o){var s,a,i={};s=o(471),a=o(920),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default);var l="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(l.template=a),l.computed||(l.computed={}),Object.keys(i).forEach(function(t){var e=i[t];l.computed[t]=function(){return e}})}});
//# sourceMappingURL=18.js.map