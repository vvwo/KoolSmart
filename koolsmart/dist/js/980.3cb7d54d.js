"use strict";(self["webpackChunkxiaolou"]=self["webpackChunkxiaolou"]||[]).push([[980],{9980:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("el-row",{staticClass:"panel"},[e("el-col",{staticClass:"sub-panel",attrs:{span:7}},[e("div",{staticClass:"title"},[e("div",[t._v("视角设计")])]),e("div",{staticClass:"viewpoint-content"},[e("div",{staticClass:"viewpoint-card"},[e("el-card",{staticClass:"viewpoint-image",attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[e("div",{staticClass:"new-item",on:{click:t.handleCreateViewpointBtnClick}},[e("el-button",{staticClass:"basic-btn",attrs:{size:"small",circle:"",icon:"el-icon-plus"}}),e("div",{staticClass:"text"},[e("p",[t._v("创建新视角")])])],1)])],1),t._l(t.viewpoints,(function(i){return e("div",{key:i.path,staticClass:"viewpoint-card"},[e("i",{staticClass:"el-icon-delete",on:{click:()=>{t.handleViewpointDeleteBtnClick(i)}}}),e("el-card",{staticClass:"viewpoint-image",attrs:{"body-style":{padding:"0px"},shadow:"hover"},nativeOn:{click:function(e){return t.handleViewpointCardClick(i)}}},[e("el-image",{attrs:{fit:"cover",src:i.backgroundUrl}})],1),e("div",[t._v(t._s(i.name))])],1)}))],2)]),e("el-col",{staticClass:"right-panel",attrs:{span:17}},[e("el-empty",{attrs:{description:"请在左边编辑/创建视角"}}),e("el-button",{staticClass:"publish-btn",on:{click:t.handlePublishBtnClick}},[t._v("预览发布")])],1)],1)],1)},n=[],o=(i(560),i(3247)),a=i(1273),c={name:"ViewpointDesignView",components:{},data(){return{viewpoints:[],createSceneModeFlag:!1,newSceneModeName:"",isShow:!0}},computed:{},created(){this.viewpoints=this.$store.state.projectStore.selectedProject.viewpoints,a.log(this.viewpoints)},methods:{handleViewpointDeleteBtnClick(t){this.$confirm("你想要删除这个视角配置吗?","Prompt",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((e=>{const i=this.$store.state.projectStore.selectedProject;i.viewpoints=i.viewpoints.filter((e=>e.id!==t.id)),this.$store.commit("projectStore/setSelectedProject",i),this.viewpoints=i.viewpoints}),(t=>{}))},handleCreateViewpointBtnClick(){const t={id:(0,o.Z)(),name:"新建视角",backgroundUrl:"",entities:[]};this.$store.commit("viewpointStore/setEditViewpoint",t),this.$router.push("/project/viewpoint-design/edit")},handleViewpointCardClick(t){this.$store.commit("viewpointStore/setEditViewpoint",t),this.$router.push("/project/viewpoint-design/edit")},handlePublishBtnClick(){this.$router.push("/project/publish")}}},l=c,r=i(1001),p=(0,r.Z)(l,s,n,!1,null,"93f48afc",null),d=p.exports},3247:function(t,e,i){function s(){let t=(new Date).getTime()+Math.floor(1e7*Math.random());return t.toString()}i.d(e,{Z:function(){return s}})}}]);
//# sourceMappingURL=980.3cb7d54d.js.map