"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8878],{75516:function(X,b,t){t.d(b,{Z:function(){return x}});var F=t(89035),r=t(37476),j=t(38345),s=t(97462),o=t(62370),_=t(14726),f=t(63490),w=t(78045),S=t(67294),m=t(85893);function x(u){return(0,m.jsx)(r.Y,{trigger:(0,m.jsx)(_.ZP,{type:"dashed",icon:(0,m.jsx)(F.Z,{}),children:"Console"}),submitter:!1,children:(0,m.jsxs)(j.Z,{children:[(0,m.jsx)(s.Z,{name:["entryCmd"],children:function(W){var h,T=W.entryCmd,v=T?"/bin/"+T:"/bin/sh";return(0,m.jsx)(f.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",key:"name",dataIndex:"name",ellipsis:!0},{title:"\u5DE5\u4F5C\u76EE\u5F55",key:"workDir",dataIndex:"workDir"},{title:"\u72B6\u6001",key:"status",dataIndex:"status",width:150},{title:"\u64CD\u4F5C",key:"status",width:150,render:function(P,M,c){return(0,m.jsx)(_.ZP,{target:"_blank",type:"link",href:"/console/".concat(u.container.Id,"?cmd=").concat(encodeURIComponent(v),"&workDir=").concat(encodeURIComponent(u.container.Config.WorkingDir?u.container.Config.WorkingDir:"/")),children:"\u767B\u5F55"})}}],dataSource:[{key:1,name:u.container.Id,status:u.container.State.Status,workDir:(h=u.container.Config.WorkingDir)!==null&&h!==void 0?h:"/"}],rowKey:"key",pagination:!1})}}),(0,m.jsx)(o.Z,{name:"entryCmd",label:"Shell\u73AF\u5883\uFF08\u4EC5\u505A\u9ED8\u8BA4\u73AF\u5883\uFF0C\u767B\u5F55\u540E\u53EF\u5207\u6362\u81F3\u5176\u4ED6\u73AF\u5883\uFF09",style:{marginTop:15},initialValue:"sh",children:(0,m.jsxs)(w.ZP.Group,{children:[(0,m.jsx)(w.ZP,{value:"bash",children:"/bin/bash"}),(0,m.jsx)(w.ZP,{value:"sh",children:"/bin/sh"})]})})]})})}},44771:function(X,b,t){t.d(b,{Z:function(){return o}});var F=t(34041),r=t(25449),j=t(67294),s=t(85893);function o(_){return(0,s.jsx)(r.Z,{label:_.label,name:"restart",initialValue:_.defaultValue?_.defaultValue:"on-failure",children:(0,s.jsx)(F.Z,{options:[{value:"no",label:"\u4E0D\u91CD\u542F"},{value:"on-failure",label:"\u5931\u8D25\u540E\u91CD\u542F\uFF08\u9ED8\u8BA45\u6B21\uFF09"},{value:"unless-stopped",label:"\u672A\u624B\u52A8\u505C\u6B62\u5219\u91CD\u542F"},{value:"always",label:"\u4E00\u76F4\u91CD\u542F"}]})})}},80821:function(X,b,t){t.d(b,{Z:function(){return x}});var F=t(5574),r=t.n(F),j=t(93246),s=t(54006),o=t(31418),_=t(86738),f=t(14726),w=t(83062),S=t(67294),m=t(85893);function x(u){var D=(0,S.useState)(!1),W=r()(D,2),h=W[0],T=W[1],v=o.Z.useApp(),I=(0,s.useIntl)(),P=function(){T(!0),u.action().then(function(c){if(T(!1),typeof u.onSuccess=="function"&&u.onSuccess(c),u.messageSuccess){var i="";typeof u.messageSuccess=="function"?i=u.messageSuccess(c):i=u.messageSuccess,i.indexOf(".")>-1&&(i=I.formatMessage({id:i})),u.asynced?(0,j.Rk)(v,i):(0,j.$h)(v,i)}}).catch(function(c){T(!1),typeof u.onError=="function"&&u.onError(c)})};return u.confirm?(0,m.jsx)(_.Z,{style:{width:500},title:"\u63D0\u793A",description:u.confirm,onConfirm:P,okText:"Yes",cancelText:"No",children:(0,m.jsx)(f.ZP,{disabled:u.disabled,icon:u.icon,loading:h,danger:u.danger,type:u.type,children:u.children})}):(0,m.jsx)(w.Z,{title:u.tips,children:(0,m.jsx)(f.ZP,{disabled:u.disabled,icon:u.icon,loading:h,onClick:P,danger:u.danger,type:u.type,children:u.children})})}},78498:function(X,b,t){t.d(b,{Z:function(){return _}});var F=t(25035),r=t(42075),j=t(83062),s=t(67294),o=t(85893);function _(f){return(0,o.jsxs)(r.Z,{children:[f.title,(0,o.jsx)(j.Z,{title:f.help,children:(0,o.jsx)(F.Z,{})})]})}},78451:function(X,b,t){t.d(b,{Z:function(){return j}});var F=t(67294),r=t(85893);function j(s){return(0,r.jsx)("span",{style:{wordBreak:"break-word"},children:s.content})}},42196:function(X,b,t){t.r(b),t.d(b,{default:function(){return Ne}});var F=t(15009),r=t.n(F),j=t(99289),s=t.n(j),o=t(5574),_=t.n(o),f=t(14946),w=t(29158),S=t(48689),m=t(38345),x=t(10641),u=t(42075),D=t(46464),W=t(83062),h=t(67294),T=t(80821),v=t(60335),I=t(40717),P=t(64789),M=t(14726),c=t(85265),i=t(66309),p=t(96074),O=t(67255),e=t(85893);function g(k){var Y=(0,h.useState)(!1),N=_()(Y,2),$=N[0],C=N[1];return[(0,e.jsx)(M.ZP,{icon:(0,e.jsx)(I.Z,{}),onClick:function(){return C(!0)},children:"\u52A0\u5165\u5DF2\u6709\u7F51\u7EDC"},"button"),(0,e.jsx)(c.Z,{width:800,onClose:function(){return C(!1)},open:$,title:"\u914D\u7F6E\u7F51\u7EDC",children:(0,e.jsx)(x.Z,{rowKey:"Name",columns:[{title:"\u540D\u79F0",dataIndex:"Name",render:function(n,B,z,L,E){return B.Name=="none"||B.Name=="bridge"||B.Name=="host"?(0,e.jsxs)(e.Fragment,{children:[B.Name," ",(0,e.jsx)(i.Z,{color:"blue",children:"System"})]}):(0,e.jsx)(e.Fragment,{children:n})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4 IPAM Subnet",ellipsis:!0,width:150,search:!1,dataIndex:["IPAM","Config",0,"Subnet"]},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(n,B,z,L,E){return(0,e.jsx)(u.Z,{split:(0,e.jsx)(p.Z,{type:"vertical"}),children:(0,e.jsx)(T.Z,{type:"link",action:function(){var A;return(0,f.HY)({name:B.Name,containerName:(A=k.containerName)!==null&&A!==void 0?A:"",containerAlise:(k.containerName?k.containerName:"")+".pod.dpanel.local"})},messageSuccess:"\u52A0\u5165\u7F51\u7EDC\u6210\u529F",onSuccess:function(){C(!1),k.onSuccess&&k.onSuccess()},children:(0,e.jsx)(W.Z,{title:"\u52A0\u5165",children:(0,e.jsx)(P.Z,{})})})})}}],request:function(){var K=s()(r()().mark(function n(B,z,L){var E;return r()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,f.jR)({name:B.Name});case 2:return E=A.sent,A.abrupt("return",{data:E.data.list,success:!0,total:E.data.list.length});case 4:case"end":return A.stop()}},n)}));return function(n,B,z){return K.apply(this,arguments)}}(),pagination:(0,O.O)()})},"form")]}var Z=t(78498);function Q(k){var Y=(0,h.useRef)();return(0,e.jsx)(m.Z,{title:(0,e.jsx)(w.Z,{}),subTitle:"\u5BB9\u5668\u5173\u8054\u4FE1\u606F",ghost:!0,extra:(0,e.jsx)(g,{onSuccess:function(){var $,C;!(($=Y.current)===null||$===void 0)&&$.reloadAndRest&&((C=Y.current)===null||C===void 0||C.reloadAndRest())},containerName:k.containerName}),children:(0,e.jsx)(x.Z,{scroll:{x:"max-content"},rowKey:"key",actionRef:Y,pagination:!1,options:!1,columns:[{title:"\u6240\u5C5E\u7F51\u7EDC",key:"name",dataIndex:"networkName",width:300},{title:"\u5BB9\u5668\u540D\u79F0",key:"containerName",dataIndex:"containerName"},{title:(0,e.jsx)(Z.Z,{title:"hostname",help:"\u63D0\u4F9B\u5BB9\u5668\u5185\u90E8\u8BBF\u95EE"}),key:"hostName",render:function($,C,K){return C.hostName?(0,e.jsx)(u.Z,{direction:"vertical",children:C.hostName.map(function(n){if(n)return(0,e.jsx)(D.Z.Text,{copyable:!0,keyboard:!0,children:n},n)})}):(0,e.jsx)(e.Fragment,{})}},{title:"Ip",key:"ip",render:function($,C,K,n,B){return(0,e.jsxs)(u.Z,{direction:"vertical",children:[(0,e.jsx)("span",{children:C.networkInfo.IPv4Address}),C.networkInfo.IPv6Address&&(0,e.jsx)("span",{children:C.networkInfo.IPv6Address})]})}},{title:"MAC",key:"mac",dataIndex:["networkInfo","MacAddress"]},{title:"\u64CD\u4F5C",key:"option",render:function($,C,K,n,B){return(0,e.jsx)(u.Z,{children:C.key!="bridge"&&C.key!="none"&&C.key!="host"&&C.networkName!=""&&(0,e.jsx)(W.Z,{title:"\u9000\u51FA\u7F51\u7EDC",children:(0,e.jsx)(T.Z,{confirm:"\u786E\u8BA4\u9000\u51FA\u8BE5\u7F51\u7EDC\uFF1F",type:"link",action:function(){var L;return(0,f.t9)({name:C.networkName,containerName:(L=k.containerName)!==null&&L!==void 0?L:""})},messageSuccess:"\u9000\u51FA\u6210\u529F",onSuccess:function(){var L,E;!((L=Y.current)===null||L===void 0)&&L.reloadAndRest&&((E=Y.current)===null||E===void 0||E.reloadAndRest())},children:(0,e.jsx)(S.Z,{})})})})}}],request:function(){var N=s()(r()().mark(function $(C,K,n){var B,z;return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,v.jV)({md5:k.containerName});case 2:return B=E.sent,E.next=5,(0,f._3)({name:Object.keys(B.data.info.NetworkSettings.Networks)});case 5:return z=E.sent,E.abrupt("return",{data:z.data.list,success:!0,total:z.data.list.length});case 7:case"end":return E.stop()}},$)}));return function($,C,K){return N.apply(this,arguments)}}(),search:!1,expandable:{defaultExpandAllRows:!0,expandRowByClick:!1,defaultExpandedRowKeys:["bridge"]}})})}var a=t(44771);function ce(k){return(0,e.jsx)(D.Z.Text,{copyable:!0,children:k.title})}var _e=t(62597),pe=t(93246),ve=t(43425),me=t(74842),he=t(87784),ge=t(33160),Ee=t(30159),je=t(58638),Pe=t(86548),Ie=t(57132),Ce=t(45605),De=t(238),Oe=t(32319),ye=t(16664),be=t(97269),ne=t(54006),Se=t(31418),se=t(84567),y=t(26412),xe=t(93162),Te=t(87662),Fe=t(75516),Me=t(28031),Ze=t(66659),Be=t(85576),Ae=t(63490),we=t(37476),ke=t(86615),Le=t(97462),Re=t(5966),Ue=t(2831);function We(k){var Y=Be.Z.useModal(),N=_()(Y,2),$=N[0],C=N[1],K=(0,h.useState)(),n=_()(K,2),B=n[0],z=n[1],L=(0,h.useRef)(),E="";return(0,h.useEffect)(function(){var U,A;(0,Ue.a)().then(function(J){z(J.data.dpanel.containerInfo)}),E=(U=localStorage.getItem("backupPath"))!==null&&U!==void 0?U:"",(A=L.current)===null||A===void 0||A.setFieldValue("backupPath",E)},[]),(0,e.jsxs)(e.Fragment,{children:[C,(0,e.jsxs)(we.Y,{modalProps:{forceRender:!0},formRef:L,title:"\u5907\u4EFD\u5BB9\u5668\u5B58\u50A8\u5377",trigger:(0,e.jsxs)(M.ZP,{children:[(0,e.jsx)(Ze.Z,{})," \u5907\u4EFD\u5B58\u50A8"]}),onFinish:function(){var U=s()(r()().mark(function A(J){var te,ue;return r()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return J.backupPath&&localStorage.setItem("backupPath",J.backupPath),te={containerMd5:k.container.Id,backupTargetType:J.backupTargetType,backupPath:J.backupPath},J.backupTargetType=="dpanel"&&B&&B.Mounts.map(function(q){q.Destination=="/dpanel"&&(te.backupPath=q.Type=="volume"?q.Name:te.backupPath=q.Source)}),V.next=5,(0,Me.vp)(te);case 5:return ue=V.sent,$.info({title:"\u6B63\u5728\u5907\u4EFD\u5B58\u50A8\u4E2D",content:(0,e.jsx)(m.Z,{ghost:!0,style:{paddingTop:30},children:(0,e.jsx)(Ae.Z,{columns:[{title:"\u5907\u4EFD\u6587\u4EF6",key:"backup",dataIndex:"backup",width:300,render:function(le,ae,oe){return(0,e.jsx)(D.Z.Paragraph,{ellipsis:{rows:5,expandable:!0},children:ae.backupTar})}},{title:"\u5907\u4EFD\u76EE\u5F55",key:"pathList",dataIndex:"pathList",render:function(le,ae,oe){return ae.pathList.map(function(de,d){return(0,e.jsx)("div",{children:de},d)})}}],dataSource:[{key:1,backupTar:ue.data.backupTar,pathList:ue.data.pathList}],rowKey:"key",pagination:!1})}),closable:!0,width:800}),V.abrupt("return",!0);case 8:case"end":return V.stop()}},A)}));return function(A){return U.apply(this,arguments)}}(),children:[(0,e.jsx)(ke.Z.Group,{label:"\u5907\u4EFD\u76EE\u6807\u4F4D\u7F6E",name:"backupTargetType",initialValue:"dpanel",fieldProps:{defaultValue:"dpanel"},options:[{label:"DPanel \u5907\u4EFD\u76EE\u5F55\u4E2D",value:"dpanel"},{label:"\u5BBF\u4E3B\u673A\u76EE\u5F55\u4E2D",value:"host"}]}),(0,e.jsx)(Le.Z,{name:["backupTargetType"],children:function(A){var J=A.backupTargetType;return J=="host"?(0,e.jsx)(Re.Z,{label:"\u6307\u5B9A\u5BBF\u4E3B\u673A\u76EE\u5F55",tooltip:"\u8BF7\u586B\u5199\u5BBF\u4E3B\u673A\u76EE\u5F55\uFF0C\u4E0D\u5B58\u65F6\u4F1A\u65B0\u5EFA",name:"backupPath",placeholder:"/home/backup",initialValue:"/home/backup"}):(0,e.jsxs)(e.Fragment,{children:["\u5907\u4EFD\u4F4D\u4E8E DPanel \u5BB9\u5668\u4E2D\u7684 /dpanel/backup \u8DEF\u5F84 ",(0,e.jsx)(ne.Link,{target:"_blank",to:"/app/detail/file/".concat(B==null?void 0:B.Id,"?tab=file&path=").concat(encodeURIComponent("/dpanel/backup")),children:"\u67E5\u770B"})]})}})]})]})}var fe=t(78451);function Ne(){var k,Y,N,$=(0,ne.useParams)(),C=(0,h.useState)(),K=_()(C,2),n=K[0],B=K[1],z=(0,h.useState)(1),L=_()(z,2),E=L[0],U=L[1],A=(0,ne.useNavigate)(),J=Se.Z.useApp(),te=(0,h.useRef)(),ue=(0,h.useState)({deleteImage:!1,deleteVolume:!1,deleteLink:!1}),ie=_()(ue,2),V=ie[0],q=ie[1],le=(0,h.useState)(""),ae=_()(le,2),oe=ae[0],de=ae[1];return(0,h.useEffect)(function(){var d;(0,v.jV)({md5:(d=$.id)!==null&&d!==void 0?d:""}).then(function(l){var H;l.data&&(l.data.info.HostConfig.NetworkMode=="host"&&Object.keys(l.data.info.Config.ExposedPorts).map(function(R){l.data.info.NetworkSettings.Ports[R]=[{HostIp:"0.0.0.0",HostPort:R.substring(0,R.indexOf("/"))}]}),B(l.data.info)),(H=te.current)===null||H===void 0||H.setFieldValue("restart",l.data.info.HostConfig.RestartPolicy.Name)}),(0,Te.pe)({groupName:"setting",name:"server"}).then(function(l){l.data.setting.value.serverIp&&de(l.data.setting.value.serverIp)})},[E]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(m.Z,{direction:"column",gutter:[0,10],children:[(0,e.jsx)(m.Z,{title:(0,e.jsx)(ve.Z,{}),subTitle:"\u5E38\u7528\u64CD\u4F5C",ghost:!0,children:(0,e.jsxs)(u.Z,{wrap:!0,children:[(0,e.jsx)(T.Z,{icon:(0,e.jsx)(me.Z,{}),action:function(){var l;return(0,v.IW)({md5:(l=n==null?void 0:n.Id)!==null&&l!==void 0?l:"",operate:"start"})},messageSuccess:"\u542F\u52A8\u6210\u529F",onSuccess:function(){return U(E+1)},disabled:n&&n.State.Running||n&&n.State.Paused,children:"\u542F\u52A8"}),(0,e.jsx)(T.Z,{action:function(){var l;return(0,v.IW)({md5:(l=n==null?void 0:n.Id)!==null&&l!==void 0?l:"",operate:"stop"})},messageSuccess:"\u505C\u6B62\u6210\u529F",icon:(0,e.jsx)(he.Z,{}),onSuccess:function(){return U(E+1)},disabled:n&&n.State.Dead,children:"\u505C\u6B62"}),(0,e.jsx)(T.Z,{action:function(){var l;return(0,v.IW)({md5:(l=n==null?void 0:n.Id)!==null&&l!==void 0?l:"",operate:"restart"})},messageSuccess:"\u91CD\u542F\u6210\u529F",onSuccess:function(){return U(E+1)},icon:(0,e.jsx)(ge.Z,{}),children:"\u91CD\u542F"}),(0,e.jsx)(T.Z,{action:function(){var l;return(0,v.IW)({md5:(l=n==null?void 0:n.Id)!==null&&l!==void 0?l:"",operate:"pause"})},messageSuccess:"\u6682\u505C\u6210\u529F",onSuccess:function(){return U(E+1)},icon:(0,e.jsx)(Ee.Z,{}),disabled:n&&!n.State.Running,children:"\u6682\u505C"}),(0,e.jsx)(T.Z,{action:function(){var l;return(0,v.IW)({md5:(l=n==null?void 0:n.Id)!==null&&l!==void 0?l:"",operate:"unpause"})},messageSuccess:"\u542F\u52A8\u6210\u529F",onSuccess:function(){return U(E+1)},icon:(0,e.jsx)(me.Z,{}),disabled:n&&!n.State.Paused,children:"\u6062\u590D"}),(0,e.jsx)(p.Z,{type:"vertical"}),n&&(0,e.jsx)(Fe.Z,{container:n}),(0,e.jsx)(p.Z,{type:"vertical"}),(0,e.jsx)(T.Z,{action:function(){var l;return(0,_e.Ct)({md5:(l=n==null?void 0:n.Id)!==null&&l!==void 0?l:"",deleteImage:V.deleteImage,deleteVolume:V.deleteVolume})},messageSuccess:"\u5220\u9664\u6210\u529F",danger:!0,type:"primary",icon:(0,e.jsx)(he.Z,{}),onSuccess:function(){return A("/app/list")},confirm:(0,e.jsxs)(u.Z,{style:{width:280},direction:"vertical",children:[(0,e.jsx)(D.Z.Text,{children:"\u5220\u9664\u5BB9\u5668\u540E\u65E0\u6CD5\u6062\u590D,\u786E\u8BA4\u5417\uFF1F"}),(0,e.jsx)(se.Z,{name:"deleteVolume",onChange:function(l){return q({deleteImage:V.deleteImage,deleteVolume:l.target.checked,deleteLink:V.deleteLink})},children:"\u5220\u9664\u5B58\u50A8\uFF1F"}),(0,e.jsx)(se.Z,{name:"deleteImage",onChange:function(l){return q({deleteImage:l.target.checked,deleteVolume:V.deleteVolume,deleteLink:V.deleteLink})},children:"\u5220\u9664\u955C\u50CF\uFF1F"}),(0,e.jsx)(se.Z,{name:"deleteLink",onChange:function(l){return q({deleteImage:V.deleteVolume,deleteVolume:V.deleteVolume,deleteLink:l.target.checked})},children:"\u5220\u9664\u5173\u8054\u5BB9\u5668\uFF1F"})]}),children:"\u5220\u9664"}),(0,e.jsx)(T.Z,{icon:(0,e.jsx)(je.Z,{}),action:function(){var l;return(0,v.LJ)({md5:(l=n==null?void 0:n.Id)!==null&&l!==void 0?l:""})},onSuccess:function(l){var H=new Blob([l],{type:"application/tar"});(0,xe.saveAs)(H,(n==null?void 0:n.Id)+".tar")},messageSuccess:"\u5BFC\u51FA\u6210\u529F",children:"\u5BFC\u51FA"}),n&&(0,e.jsx)(We,{container:n}),(0,e.jsx)(p.Z,{type:"vertical"}),(0,e.jsx)(ne.Link,{to:"/app/create/image?containerId=".concat(n==null?void 0:n.Id,"&op=update"),children:(0,e.jsx)(M.ZP,{type:"primary",icon:(0,e.jsx)(Pe.Z,{}),children:"\u66F4\u65B0\u5BB9\u5668"})}),(0,e.jsx)(ne.Link,{to:"/app/create/image?containerId=".concat(n==null?void 0:n.Id,"&op=copy"),children:(0,e.jsx)(M.ZP,{icon:(0,e.jsx)(Ie.Z,{}),children:"\u590D\u5236"})})]})}),(0,e.jsx)(m.Z,{title:(0,e.jsx)(Ce.Z,{}),subTitle:"\u5BB9\u5668\u72B6\u6001",ghost:!0,children:(0,e.jsxs)(y.Z,{column:1,bordered:!0,children:[(0,e.jsx)(y.Z.Item,{label:"ID",children:(0,e.jsx)(ce,{title:n==null?void 0:n.Id})}),(0,e.jsx)(y.Z.Item,{label:"\u5BB9\u5668\u540D\u79F0",children:(0,e.jsx)(D.Z.Text,{editable:{tooltip:"\u4FEE\u6539\u5BB9\u5668\u540D\u79F0",onChange:function(){var d=s()(r()().mark(function H(R){var G;return r()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:if(n!=null&&n.Id){re.next=2;break}return re.abrupt("return");case 2:return re.next=4,(0,v.eE)({md5:n.Id,name:R});case 4:G=re.sent,U(E+1),(0,pe.$h)(J,"\u4FEE\u6539\u5BB9\u5668\u540D\u79F0");case 7:case"end":return re.stop()}},H)}));function l(H){return d.apply(this,arguments)}return l}()},children:n&&n.Name})}),(0,e.jsx)(y.Z.Item,{label:(0,e.jsx)(Z.Z,{title:"\u7F51\u7EDC",help:"\u9ED8\u8BA4\u7F51\u7EDC\u53EA\u652F\u6301\u901A\u8FC7ip\u8BBF\u95EE,ip\u4F1A\u968F\u7740\u5BB9\u5668\u542F\u52A8\u505C\u6B62\u6539\u53D8.\u5982\u679C\u9700\u8981\u5728\u5BB9\u5668\u5185\u4E92\u8054,\u8BF7\u901A\u8FC7\u3010\u7F16\u8F91\u7AD9\u70B9\u3011-\u3010\u6DFB\u52A0\u5173\u8054\u3011"}),children:(n==null?void 0:n.State.Running)&&(0,e.jsxs)(y.Z,{column:1,bordered:!0,children:[n.NetworkSettings.Networks&&Object.keys(n.NetworkSettings.Networks).map(function(d,l){return(0,e.jsx)(y.Z.Item,{label:d,children:d=="host"?" Host \u7F51\u7EDC\uFF0C\u4E0E\u5BBF\u4E3B\u673A\u5171\u7528\u540C\u4E00\u7F51\u7EDC":(0,e.jsxs)(u.Z,{direction:"vertical",children:[(0,e.jsx)(ce,{title:n==null?void 0:n.NetworkSettings.Networks[d].IPAddress}),n==null?void 0:n.NetworkSettings.Networks[d].Gateway,n==null?void 0:n.NetworkSettings.Networks[d].MacAddress]})},"1")}),n.HostConfig.ExtraHosts&&(0,e.jsx)(y.Z.Item,{label:"\u5BBF\u4E3B\u673A\u7F51\u7EDC",children:(0,e.jsx)(u.Z,{direction:"vertical",children:n.HostConfig.ExtraHosts.map(function(d){return d})})},"1")]})}),(0,e.jsx)(y.Z.Item,{label:"\u72B6\u6001",children:n==null?void 0:n.State.Status}),(0,e.jsx)(y.Z.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:new Date((k=n==null?void 0:n.Created)!==null&&k!==void 0?k:"").toLocaleString()}),(0,e.jsx)(y.Z.Item,{label:"\u542F\u52A8\u65F6\u95F4",children:new Date((Y=n==null?void 0:n.State.StartedAt)!==null&&Y!==void 0?Y:"").toLocaleString()}),(0,e.jsx)(y.Z.Item,{label:"\u91CD\u542F\u7B56\u7565",children:(0,e.jsx)(be.A,{onFinish:function(){var d=s()(r()().mark(function l(H){var R;return r()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(n!=null&&n.Id){ee.next=2;break}return ee.abrupt("return");case 2:return ee.next=4,(0,v.eE)({md5:n.Id,restart:H.restart});case 4:return R=ee.sent,(0,pe.$h)(J,"\u4FEE\u6539\u91CD\u542F\u7B56\u7565\u6210\u529F"),ee.abrupt("return");case 7:case"end":return ee.stop()}},l)}));return function(l){return d.apply(this,arguments)}}(),formRef:te,children:(0,e.jsx)(a.Z,{defaultValue:n==null?void 0:n.HostConfig.RestartPolicy.Name})})})]})}),n&&n.Mounts&&n.Mounts.length>0&&(0,e.jsx)(m.Z,{title:(0,e.jsx)(De.Z,{}),subTitle:"\u6301\u4E45\u5B58\u50A8\u8BE6\u60C5",ghost:!0,children:(0,e.jsx)(y.Z,{column:1,bordered:!0,children:n==null?void 0:n.Mounts.map(function(d,l){return(0,e.jsx)(y.Z.Item,{labelStyle:{width:"30%"},label:d.Type=="volume"?(0,e.jsx)(fe.Z,{content:d.Name}):d.Source,children:(0,e.jsxs)(ne.Link,{target:"_blank",to:"/app/detail/file/".concat(n.Id,"?tab=file&path=").concat(encodeURIComponent(d.Destination)),children:[d.Destination," ",(0,e.jsx)(Oe.Z,{})]})},l)})})}),(0,e.jsx)(m.Z,{title:(0,e.jsx)(ye.Z,{}),subTitle:"\u955C\u50CF\u8BE6\u60C5",ghost:!0,children:(0,e.jsxs)(y.Z,{labelStyle:{width:"200px"},column:1,bordered:!0,children:[(0,e.jsx)(y.Z.Item,{label:"Image Tag",children:(0,e.jsx)(ne.Link,{target:"_blank",to:"/image/detail/"+(n==null?void 0:n.Image),children:n==null?void 0:n.Config.Image})}),(0,e.jsx)(y.Z.Item,{label:"Image",children:n==null?void 0:n.Image}),(0,e.jsx)(y.Z.Item,{label:"Port",children:(0,e.jsx)(u.Z,{direction:"vertical",children:(n==null?void 0:n.NetworkSettings.Ports)&&Object.keys(n.NetworkSettings.Ports).map(function(d){var l,H=(l=n==null?void 0:n.NetworkSettings.Ports[d])!==null&&l!==void 0?l:[{HostPort:null,HostIp:""}];return H.map(function(R){var G=oe;return G!=""&&G.indexOf(":")>-1&&(G="[".concat(G,"]")),G==""&&R.HostIp=="::"&&(G="[::1]"),G==""&&R.HostIp=="0.0.0.0"&&(G="127.0.0.1"),G==""&&(G=R.HostIp),(0,e.jsxs)(u.Z.Compact,{children:[(0,e.jsxs)(i.Z,{color:R.HostPort?"success":"",children:[R.HostPort?"".concat(R.HostIp,":").concat(R.HostPort," ->"):"",d]},d),R.HostPort?(0,e.jsx)("a",{href:"http://".concat(G,":").concat(R.HostPort),target:"_blank",children:(0,e.jsx)(w.Z,{})}):""]})})})})}),(0,e.jsx)(y.Z.Item,{label:"CMD",children:(n==null?void 0:n.Config.Cmd)&&(n==null?void 0:n.Config.Cmd.join(" "))}),(0,e.jsx)(y.Z.Item,{label:"ENTRYPOINT",children:n==null?void 0:n.Config.Entrypoint}),(0,e.jsx)(y.Z.Item,{label:"ENV",children:(0,e.jsx)(y.Z,{column:1,bordered:!0,children:(n==null?void 0:n.Config.Env)&&n.Config.Env.map(function(d,l){var H=d.split("=");return(0,e.jsx)(y.Z.Item,{label:H[0],children:(0,e.jsx)(fe.Z,{content:H[1]})},l)})})}),(0,e.jsx)(y.Z.Item,{label:"Labels",children:(0,e.jsx)(y.Z,{column:1,bordered:!0,children:n&&Object.keys(n.Config.Labels).map(function(d){return(0,e.jsx)(y.Z.Item,{label:d,children:(0,e.jsx)(D.Z.Text,{style:{width:"400px"},ellipsis:{tooltip:n.Config.Labels[d]},children:n.Config.Labels[d]})},d)})})})]})}),(n==null?void 0:n.Name)&&(0,e.jsx)(Q,{containerName:(N=n==null?void 0:n.Name)!==null&&N!==void 0?N:""})]})})}},28031:function(X,b,t){t.d(b,{C4:function(){return I},LK:function(){return T},OQ:function(){return M},V9:function(){return _},Yx:function(){return u},ZU:function(){return m},_U:function(){return w},gb:function(){return W},lE:function(){return O},vp:function(){return i}});var F=t(15009),r=t.n(F),j=t(99289),s=t.n(j),o=t(54006);function _(g){return f.apply(this,arguments)}function f(){return f=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/get-path-list",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),f.apply(this,arguments)}function w(g){return S.apply(this,arguments)}function S(){return S=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/export",{data:Z,method:"POST",responseType:"blob"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),S.apply(this,arguments)}function m(g){return x.apply(this,arguments)}function x(){return x=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/import",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),x.apply(this,arguments)}function u(g){return D.apply(this,arguments)}function D(){return D=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/delete",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),D.apply(this,arguments)}function W(g){return h.apply(this,arguments)}function h(){return h=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/unzip",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),h.apply(this,arguments)}function T(g){return v.apply(this,arguments)}function v(){return v=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/get-content",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),v.apply(this,arguments)}function I(g){return P.apply(this,arguments)}function P(){return P=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/import-file-content",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),P.apply(this,arguments)}function M(g){return c.apply(this,arguments)}function c(){return c=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/chmod",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),c.apply(this,arguments)}function i(g){return p.apply(this,arguments)}function p(){return p=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/volume/backup",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),p.apply(this,arguments)}function O(g){return e.apply(this,arguments)}function e(){return e=s()(r()().mark(function g(Z){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/app/explorer/get-passwd",{data:Z,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},g)})),e.apply(this,arguments)}},62597:function(X,b,t){t.d(b,{$G:function(){return _},Ct:function(){return T},Tb:function(){return m},XH:function(){return u},cl:function(){return w},iE:function(){return W},lK:function(){return M},xb:function(){return I}});var F=t(15009),r=t.n(F),j=t(99289),s=t.n(j),o=t(54006);function _(i){return f.apply(this,arguments)}function f(){return f=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/site/create-by-image",{method:"POST",data:p}));case 1:case"end":return e.stop()}},i)})),f.apply(this,arguments)}function w(i){return S.apply(this,arguments)}function S(){return S=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/site/get-list",{method:"POST",data:p}));case 1:case"end":return e.stop()}},i)})),S.apply(this,arguments)}function m(i){return x.apply(this,arguments)}function x(){return x=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.download=!1,e.next=3,(0,o.request)("/api/app/log/run",{method:"POST",data:p});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},i)})),x.apply(this,arguments)}function u(i){return D.apply(this,arguments)}function D(){return D=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.download=!0,e.next=3,(0,o.request)("/api/app/log/run",{method:"POST",data:p,responseType:"blob"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},i)})),D.apply(this,arguments)}function W(i){return h.apply(this,arguments)}function h(){return h=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/site/get-detail",{data:p,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i)})),h.apply(this,arguments)}function T(i){return v.apply(this,arguments)}function v(){return v=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/container/delete",{method:"POST",data:p}));case 1:case"end":return e.stop()}},i)})),v.apply(this,arguments)}function I(i){return P.apply(this,arguments)}function P(){return P=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/site/delete",{method:"POST",data:p}));case 1:case"end":return e.stop()}},i)})),P.apply(this,arguments)}function M(i){return c.apply(this,arguments)}function c(){return c=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/site/update-title",{method:"POST",data:p});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i)})),c.apply(this,arguments)}},2831:function(X,b,t){t.d(b,{a:function(){return _},d:function(){return w}});var F=t(15009),r=t.n(F),j=t(99289),s=t.n(j),o=t(54006);function _(){return f.apply(this,arguments)}function f(){return f=s()(r()().mark(function m(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,o.request)("/api/common/home/info",{method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},m)})),f.apply(this,arguments)}function w(){return S.apply(this,arguments)}function S(){return S=s()(r()().mark(function m(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,o.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},m)})),S.apply(this,arguments)}},14946:function(X,b,t){t.d(b,{CI:function(){return m},HY:function(){return I},IS:function(){return _},XY:function(){return W},_3:function(){return M},_x:function(){return u},jR:function(){return w},t9:function(){return T}});var F=t(15009),r=t.n(F),j=t(99289),s=t.n(j),o=t(54006);function _(i){return f.apply(this,arguments)}function f(){return f=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/network/get-detail",{method:"POST",data:p}));case 1:case"end":return e.stop()}},i)})),f.apply(this,arguments)}function w(i){return S.apply(this,arguments)}function S(){return S=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/network/get-list",{method:"POST",data:p}));case 1:case"end":return e.stop()}},i)})),S.apply(this,arguments)}function m(){return x.apply(this,arguments)}function x(){return x=s()(r()().mark(function i(){return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,o.request)("/api/app/network/prune",{method:"POST"});case 2:return O.abrupt("return",O.sent);case 3:case"end":return O.stop()}},i)})),x.apply(this,arguments)}function u(i){return D.apply(this,arguments)}function D(){return D=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/network/delete",{method:"POST",data:p});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i)})),D.apply(this,arguments)}function W(i){return h.apply(this,arguments)}function h(){return h=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/network/create",{method:"POST",data:p});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i)})),h.apply(this,arguments)}function T(i){return v.apply(this,arguments)}function v(){return v=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/network/disconnect",{method:"POST",data:p});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i)})),v.apply(this,arguments)}function I(i){return P.apply(this,arguments)}function P(){return P=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/network/connect",{method:"POST",data:p});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i)})),P.apply(this,arguments)}function M(i){return c.apply(this,arguments)}function c(){return c=s()(r()().mark(function i(p){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/network/get-container-list",{method:"POST",data:p}));case 1:case"end":return e.stop()}},i)})),c.apply(this,arguments)}},60335:function(X,b,t){t.d(b,{IE:function(){return w},IW:function(){return _},KK:function(){return W},LJ:function(){return T},eE:function(){return u},jV:function(){return m}});var F=t(15009),r=t.n(F),j=t(99289),s=t.n(j),o=t(54006);function _(I){return f.apply(this,arguments)}function f(){return f=s()(r()().mark(function I(P){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,o.request)("/api/app/container/status",{method:"POST",data:P}));case 1:case"end":return c.stop()}},I)})),f.apply(this,arguments)}function w(I){return S.apply(this,arguments)}function S(){return S=s()(r()().mark(function I(P){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,o.request)("/api/app/container/get-list",{data:P,method:"POST"}));case 1:case"end":return c.stop()}},I)})),S.apply(this,arguments)}function m(I){return x.apply(this,arguments)}function x(){return x=s()(r()().mark(function I(P){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,o.request)("/api/app/container/get-detail",{data:P,method:"POST"}));case 1:case"end":return c.stop()}},I)})),x.apply(this,arguments)}function u(I){return D.apply(this,arguments)}function D(){return D=s()(r()().mark(function I(P){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,o.request)("/api/app/container/update",{data:P,method:"POST"}));case 1:case"end":return c.stop()}},I)})),D.apply(this,arguments)}function W(){return h.apply(this,arguments)}function h(){return h=s()(r()().mark(function I(){return r()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",(0,o.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return M.stop()}},I)})),h.apply(this,arguments)}function T(I){return v.apply(this,arguments)}function v(){return v=s()(r()().mark(function I(P){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,o.request)("/api/app/container/export",{method:"POST",data:P,responseType:"blob"}));case 1:case"end":return c.stop()}},I)})),v.apply(this,arguments)}},67255:function(X,b,t){t.d(b,{O:function(){return F},j:function(){return r}});function F(){var j,s=parseInt((j=localStorage.getItem("dpanel-pagesize"))!==null&&j!==void 0?j:"0");return{showSizeChanger:!0,defaultPageSize:s!=null?s:20}}function r(j){var s="dpanel-table-column-".concat(j),o={};if(localStorage.getItem(s)){var _;o=JSON.parse((_=localStorage.getItem(s))!==null&&_!==void 0?_:"{}")}return{defaultValue:o,onChange:function(w){localStorage.setItem("dpanel-table-column-".concat(j),JSON.stringify(w))}}}}}]);
