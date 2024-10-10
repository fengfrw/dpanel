"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3357],{80821:function(W,b,n){n.d(b,{Z:function(){return v}});var I=n(5574),s=n.n(I),O=n(93246),_=n(54006),a=n(31418),M=n(86738),m=n(14726),C=n(83062),T=n(67294),E=n(85893);function v(i){var j=(0,T.useState)(!1),h=s()(j,2),p=h[0],o=h[1],u=a.Z.useApp(),y=(0,_.useIntl)(),l=function(){o(!0),i.action().then(function(B){if(o(!1),typeof i.onSuccess=="function"&&i.onSuccess(B),i.messageSuccess){var R="";typeof i.messageSuccess=="function"?R=i.messageSuccess(B):R=i.messageSuccess,R.indexOf(".")>-1&&(R=y.formatMessage({id:R})),i.asynced?(0,O.Rk)(u,R):(0,O.$h)(u,R)}}).catch(function(B){o(!1),typeof i.onError=="function"&&i.onError(B)})};return i.confirm?(0,E.jsx)(M.Z,{style:{width:500},title:"\u63D0\u793A",description:i.confirm,onConfirm:l,okText:"Yes",cancelText:"No",children:(0,E.jsx)(m.ZP,{disabled:i.disabled,icon:i.icon,loading:p,danger:i.danger,type:i.type,children:i.children})}):(0,E.jsx)(C.Z,{title:i.tips,children:(0,E.jsx)(m.ZP,{disabled:i.disabled,icon:i.icon,loading:p,onClick:l,danger:i.danger,type:i.type,children:i.children})})}},96042:function(W,b,n){n.d(b,{Z:function(){return T}});var I=n(97857),s=n.n(I),O=n(5574),_=n.n(O),a=n(75870),M=n(34041),m=n(67294),C=n(85893);function T(E){var v=(0,m.useState)([]),i=_()(v,2),j=i[0],h=i[1];(0,m.useEffect)(function(){(0,a.Ot)().then(function(o){o&&h(o.data.list)})},[]);var p={};return E.multiple&&(p.mode="multiple"),E.top&&(p.placement="topLeft"),(0,C.jsx)(M.Z,s()({onChange:function(u){if(E.multiple){var y=u.map(function(l){return j[l]});E.onChangeList&&E.onChangeList(y)}else E.onChange&&E.onChange(j[u])},placeholder:"\u9009\u62E9\u955C\u50CF\u4ED3\u5E93\uFF0C\u672C\u5730\u4F7F\u7528\u7559\u7A7A\u5373\u53EF",options:j.map(function(o,u){return{value:o.serverAddress,label:o.title+"("+o.serverAddress+")"}})},p))}},70977:function(W,b,n){n.r(b),n.d(b,{default:function(){return ee}});var I=n(5574),s=n.n(I),O=n(3393),_=n(43425),a=n(58638),M=n(1912),m=n(87784),C=n(40666),T=n(77171),E=n(48689),v=n(45742),i=n(38345),j=n(7529),h=n(97269),p=n(62370),o=n(5966),u=n(54006),y=n(31418),l=n(42075),K=n(96074),B=n(66309),R=n(60922),P=n(26412),Z=n(63490),L=n(67294),d=n(93246),f=n(80821),g=n(5251),r=n(93162),ie=n.n(r),Q=n(18148),k=n(75870),q=n(96042),t=n(85893);function ee(){var F,ne=(0,L.useState)(),Y=s()(ne,2),e=Y[0],te=Y[1],w=(0,u.useParams)(),z=y.Z.useApp(),H=(0,u.useIntl)(),N=(0,L.useRef)(),re=(0,L.useState)(0),X=s()(re,2),x=X[0],$=X[1],ae=(0,u.useNavigate)(),se=(0,L.useState)([]),V=s()(se,2),_e=V[0],ue=V[1];return(0,L.useEffect)(function(){w.id&&(0,O.YU)({md5:w.id}).then(function(c){te(c.data)}),(0,k.Ot)().then(function(c){c&&ue(c.data.list)})},[x]),(0,t.jsx)("div",{children:(0,t.jsxs)(i.Z,{direction:"column",ghost:!0,gutter:[0,10],children:[(0,t.jsx)(i.Z,{title:(0,t.jsx)(_.Z,{}),subTitle:"\u5E38\u7528\u64CD\u4F5C",headerBordered:!0,bordered:!0,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(f.Z,{icon:(0,t.jsx)(a.Z,{}),action:function(){var D;return(0,O.Rb)({md5:(D=e==null?void 0:e.info.Id)!==null&&D!==void 0?D:""})},onSuccess:function(D){var A=new Blob([D],{type:"application/tar"});(0,r.saveAs)(A,(e==null?void 0:e.info.Id)+".tar")},messageSuccess:"\u5BFC\u51FA\u6210\u529F",children:"\u5BFC\u51FA"}),(0,t.jsxs)(f.Z,{action:function(){var D;return(0,O.Gb)({tag:(D=e==null?void 0:e.info.RepoTags[0])!==null&&D!==void 0?D:"",type:"push",asLatest:!0})},type:"primary",messageSuccess:"image.pushed",onSuccess:function(){$(x+1)},children:[(0,t.jsx)(M.Z,{})," Push As Latest"]}),(0,t.jsx)(K.Z,{}),(0,t.jsx)(f.Z,{icon:(0,t.jsx)(m.Z,{}),danger:!0,type:"primary",action:function(){var D;return(0,Q.ao)({md5:[(D=e==null?void 0:e.info.Id)!==null&&D!==void 0?D:""],force:!0})},onSuccess:function(){ae("/image/list")},confirm:"\u662F\u5426\u8981\u505C\u6B62\u8BE5\u955C\u50CF\u4E0B\u7684\u5BB9\u5668\u5E76\u5F3A\u5236\u5220\u9664\uFF1F",messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u5F3A\u5236\u5220\u9664"})]})}),(0,t.jsx)(i.Z,{bordered:!0,title:(0,t.jsx)(C.Z,{}),subTitle:"Tag \u5217\u8868",children:(0,t.jsx)(j.Rs,{grid:{gutter:40,column:2},headerTitle:!1,metas:{content:{render:function(D,A,S){return(0,t.jsx)(B.Z,{color:"blue",children:(0,t.jsx)(R.Z.Text,{copyable:!0,children:A})},S)}},title:{render:function(D,A,S){return(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(f.Z,{action:function(){return(0,O.Gb)({tag:A,type:"push"})},messageSuccess:"image.pushed",children:[(0,t.jsx)(M.Z,{})," Push"]}),(0,t.jsxs)(f.Z,{action:function(){return(0,O.Gb)({tag:A,type:"pull"})},messageSuccess:"image.pulled",children:[(0,t.jsx)(T.Z,{})," Pull"]}),(0,t.jsx)(f.Z,{action:function(){return(0,O.Pn)({tag:A})},onSuccess:function(J){return $(x+1),!0},messageSuccess:"tag.delete",confirm:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u6807\u7B7E",children:(0,t.jsx)(E.Z,{})})]},S)}}},dataSource:e==null?void 0:e.info.RepoTags})}),(0,t.jsx)(i.Z,{bordered:!0,headerBordered:!0,title:(0,t.jsx)(C.Z,{}),subTitle:"\u65B0\u589E Tag",children:(0,t.jsxs)(h.A,{formRef:N,onFinish:function(D){return new Promise(function(A,S){var U;return(!e||!(e!=null&&e.info))&&((0,d.YZ)(z,H.formatMessage({id:"image.notFound"})),S(!0)),(0,O._U)({md5:(U=e==null?void 0:e.info.Id)!==null&&U!==void 0?U:"",tag:(D.imageRespo?D.imageRespo.serverAddress+"/":"")+D.imageTag}).then(function(J){var G;(0,d.$h)(z,H.formatMessage({id:"tag.add"}),J.data.tag),$(x+1),(G=N.current)===null||G===void 0||G.resetFields(),A(!0)})})},children:[(0,t.jsx)(p.Z,{label:"\u955C\u50CF\u4ED3\u5E93",name:"imageRespo",tooltip:(0,t.jsxs)(t.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,t.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),children:(0,t.jsx)(q.Z,{})}),(0,t.jsx)(o.Z,{fieldProps:{min:2,max:255},rules:[{required:!0}],required:!0,placeholder:"\u53EA\u80FD\u4F7F\u7528\u5C0F\u5199\u82F1\u6587\u5B57\u7B26\u3001\u6570\u5B57\u3001_\u3001-\u3001",label:"\u955C\u50CF\u540D\u79F0",name:"imageTag",tooltip:"\u4F8B\u5982: name:tag\u3001namespace/name:tag\u3001registry/namespace/name:tag"})]})}),(0,t.jsx)(i.Z,{bordered:!0,headerBordered:!0,title:(0,t.jsx)(v.Z,{}),subTitle:"\u955C\u50CF\u8BE6\u60C5",children:(0,t.jsxs)(P.Z,{labelStyle:{width:"200px"},column:1,bordered:!0,children:[(0,t.jsx)(P.Z.Item,{label:"ID",children:e==null?void 0:e.info.Id}),(0,t.jsx)(P.Z.Item,{label:"Parent",children:e==null?void 0:e.info.Parent}),(0,t.jsx)(P.Z.Item,{label:"Size",children:(0,g.FI)((F=e==null?void 0:e.info.Size)!==null&&F!==void 0?F:0)}),(0,t.jsx)(P.Z.Item,{label:"Created",children:e==null?void 0:e.info.Created}),(0,t.jsxs)(P.Z.Item,{label:"Build",children:["Docker ",e==null?void 0:e.info.DockerVersion," ",e==null?void 0:e.info.Os," ",e==null?void 0:e.info.Architecture]}),(0,t.jsx)(P.Z.Item,{label:"Labels",children:(0,t.jsx)(P.Z,{column:1,bordered:!0,children:(e==null?void 0:e.info.Config.Labels)&&Object.keys(e==null?void 0:e.info.Config.Labels).map(function(c){return(0,t.jsx)(P.Z.Item,{label:c,children:(0,t.jsx)(R.Z.Text,{style:{width:"400px"},ellipsis:{tooltip:e==null?void 0:e.info.Config.Labels[c]},children:e==null?void 0:e.info.Config.Labels[c]})},c)})})})]})}),(0,t.jsx)(i.Z,{bordered:!0,headerBordered:!0,title:(0,t.jsx)(v.Z,{}),subTitle:"Dockerfile \u8BE6\u60C5",children:(0,t.jsxs)(P.Z,{labelStyle:{width:"200px"},column:1,bordered:!0,children:[(0,t.jsx)(P.Z.Item,{label:"CMD",children:e==null?void 0:e.info.Config.Cmd}),(0,t.jsx)(P.Z.Item,{label:"ENTRYPOINT",children:e==null?void 0:e.info.Config.Entrypoint}),(0,t.jsx)(P.Z.Item,{label:"EXPOSE",children:(e==null?void 0:e.info.Config.ExposedPorts)&&Object.keys(e==null?void 0:e.info.Config.ExposedPorts).map(function(c){return(0,t.jsx)(B.Z,{color:"gray",children:c},c)})}),(0,t.jsx)(P.Z.Item,{label:"VOLUME",children:(e==null?void 0:e.info.Config.Volumes)&&Object.keys(e==null?void 0:e.info.Config.Volumes).map(function(c){return(0,t.jsx)(B.Z,{color:"gray",children:c},c)})}),(0,t.jsx)(P.Z.Item,{label:"Env",children:(0,t.jsx)(P.Z,{column:1,bordered:!0,children:(e==null?void 0:e.info.Config.Env)&&(e==null?void 0:e.info.Config.Env.map(function(c,D){var A=c.split("=");return(0,t.jsx)(P.Z.Item,{label:A[0],children:A[1]},D)}))})})]})}),(0,t.jsxs)(i.Z,{bordered:!0,headerBordered:!0,title:(0,t.jsx)(v.Z,{}),subTitle:"Layers",children:[(0,t.jsx)(Z.Z,{rowKey:"CreatedBy",dataSource:e==null?void 0:e.layer.reverse(),columns:[{title:"Layer",dataIndex:"CreatedBy",key:"CreatedBy"}]}),";"]})]})})}},3393:function(W,b,n){n.d(b,{Gb:function(){return C},Pn:function(){return i},Rb:function(){return h},YU:function(){return M},_U:function(){return E}});var I=n(15009),s=n.n(I),O=n(99289),_=n.n(O),a=n(54006);function M(o){return m.apply(this,arguments)}function m(){return m=_()(s()().mark(function o(u){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,a.request)("/api/app/image/get-detail",{method:"POST",data:u}));case 1:case"end":return l.stop()}},o)})),m.apply(this,arguments)}function C(o){return T.apply(this,arguments)}function T(){return T=_()(s()().mark(function o(u){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,a.request)("/api/app/image/tag-remote",{method:"POST",data:u}));case 1:case"end":return l.stop()}},o)})),T.apply(this,arguments)}function E(o){return v.apply(this,arguments)}function v(){return v=_()(s()().mark(function o(u){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,a.request)("/api/app/image/tag-add",{method:"POST",data:u}));case 1:case"end":return l.stop()}},o)})),v.apply(this,arguments)}function i(o){return j.apply(this,arguments)}function j(){return j=_()(s()().mark(function o(u){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,a.request)("/api/app/image/tag-delete",{method:"POST",data:u}));case 1:case"end":return l.stop()}},o)})),j.apply(this,arguments)}function h(o){return p.apply(this,arguments)}function p(){return p=_()(s()().mark(function o(u){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,a.request)("/api/app/image/export",{method:"POST",data:u,responseType:"blob"}));case 1:case"end":return l.stop()}},o)})),p.apply(this,arguments)}},18148:function(W,b,n){n.d(b,{$q:function(){return h},Fj:function(){return R},KG:function(){return M},KX:function(){return Z},T8:function(){return i},Xn:function(){return E},ao:function(){return o},c5:function(){return K},c7:function(){return y}});var I=n(15009),s=n.n(I),O=n(99289),_=n.n(O),a=n(54006);function M(d){return m.apply(this,arguments)}function m(){return m=_()(s()().mark(function d(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,a.request)("/api/app/image/get-list",{method:"POST",data:f}));case 1:case"end":return r.stop()}},d)})),m.apply(this,arguments)}function C(d){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function d(f){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,request("/api/app/log/image-build",{method:"POST",data:f});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},d)})),T.apply(this,arguments)}function E(d){return v.apply(this,arguments)}function v(){return v=_()(s()().mark(function d(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,a.request)("/api/app/image/get-list-build",{method:"POST",data:f}));case 1:case"end":return r.stop()}},d)})),v.apply(this,arguments)}function i(d){return j.apply(this,arguments)}function j(){return j=_()(s()().mark(function d(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,a.request)("/api/app/image/get-build-task",{method:"POST",data:f});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},d)})),j.apply(this,arguments)}function h(d){return p.apply(this,arguments)}function p(){return p=_()(s()().mark(function d(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,a.request)("/api/app/image/delete-build-task",{method:"POST",data:f});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},d)})),p.apply(this,arguments)}function o(d){return u.apply(this,arguments)}function u(){return u=_()(s()().mark(function d(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,a.request)("/api/app/image/image-delete",{method:"POST",data:f});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},d)})),u.apply(this,arguments)}function y(){return l.apply(this,arguments)}function l(){return l=_()(s()().mark(function d(){return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,a.request)("/api/app/image/image-prune",{method:"POST"});case 2:return g.abrupt("return",g.sent);case 3:case"end":return g.stop()}},d)})),l.apply(this,arguments)}function K(){return B.apply(this,arguments)}function B(){return B=_()(s()().mark(function d(){return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,a.request)("/api/app/image/build-prune",{method:"POST"});case 2:return g.abrupt("return",g.sent);case 3:case"end":return g.stop()}},d)})),B.apply(this,arguments)}function R(d){return P.apply(this,arguments)}function P(){return P=_()(s()().mark(function d(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,a.request)("/api/app/image/update-title",{method:"POST",data:f});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},d)})),P.apply(this,arguments)}function Z(d){return L.apply(this,arguments)}function L(){return L=_()(s()().mark(function d(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,a.request)("/api/app/image/tag-sync",{method:"POST",data:f}));case 1:case"end":return r.stop()}},d)})),L.apply(this,arguments)}},75870:function(W,b,n){n.d(b,{Ot:function(){return M},ZH:function(){return C},ix:function(){return E},t1:function(){return i}});var I=n(15009),s=n.n(I),O=n(99289),_=n.n(O),a=n(54006);function M(h){return m.apply(this,arguments)}function m(){return m=_()(s()().mark(function h(p){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,a.request)("/api/common/registry/get-list",{method:"POST",data:p}));case 1:case"end":return u.stop()}},h)})),m.apply(this,arguments)}function C(h){return T.apply(this,arguments)}function T(){return T=_()(s()().mark(function h(p){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,a.request)("/api/common/registry/create",{method:"POST",data:p}));case 1:case"end":return u.stop()}},h)})),T.apply(this,arguments)}function E(h){return v.apply(this,arguments)}function v(){return v=_()(s()().mark(function h(p){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,a.request)("/api/common/registry/delete",{method:"POST",data:p}));case 1:case"end":return u.stop()}},h)})),v.apply(this,arguments)}function i(h){return j.apply(this,arguments)}function j(){return j=_()(s()().mark(function h(p){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,a.request)("/api/common/registry/get-detail",{method:"POST",data:p}));case 1:case"end":return u.stop()}},h)})),j.apply(this,arguments)}},5251:function(W,b,n){n.d(b,{FI:function(){return s},ZM:function(){return O}});function I(_){return _.trim()}function s(_){var a="";_<.1*1024?a=_.toFixed(2)+"B":_<.1*1024*1024?a=(_/1024).toFixed(2)+"KB":_<1*1024*1024*1024?a=(_/(1024*1024)).toFixed(2)+"MB":a=(_/(1024*1024*1024)).toFixed(2)+"GB";var M=a+"",m=M.indexOf("."),C=M.substr(m+1,2);return C=="00"?M.substring(0,m)+M.substr(m+3,2):a}function O(_){if(_){var a=new Date(_),M=a.getFullYear()+"-",m=(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-",C=(a.getDate()<10?"0"+a.getDate():a.getDate())+" ",T=(a.getHours()<10?"0"+a.getHours():a.getHours())+":",E=(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())+":",v=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();return M+m+C+T+E+v}}}}]);
