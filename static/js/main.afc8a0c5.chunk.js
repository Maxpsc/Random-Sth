(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,n){},152:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),s=n.n(o),i=(n(94),n(10)),c=n(11),l=n(13),u=n(12),h=n(14),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},"\u4eca\u5929\u5403\u4ec0\u4e48\u554a\uff1f")}}]),t}(a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},"Copyright \xa9 2018 PSC. All rights reserved.")}}]),t}(a.Component),b=n(87),f=n(161),m=n(162),v=n(157),g=n(160),w=n(34),C=n(159),O=n(76);function j(){}var E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleRemove=function(e){var t=n.props.data;n.props.handleChange(t.filter(function(t){return t!==e}))},n.handleInputChange=function(e){n.setState({inputValue:e.target.value})},n.handleInputConfirm=function(){var e=n.state.inputValue,t=n.props.data.slice(0);return!!e&&(t.indexOf(e)>-1?(f.a.warning("\u8fd9\u6761\u5df2\u5b58\u5728\u4e86~"),!1):(t=Object(b.a)(t).concat([e]),n.props.handleChange(t),void n.setState({inputValue:"",inputVisible:!1})))},n.showInput=function(){n.setState({inputVisible:!0},function(){n.textInput.current.focus()})},n.handleClear=function(){n.props.handleChange([]),n.props.statusChange(0),f.a.success("\u6e05\u7a7a\u6210\u529f")},n.state={inputVisible:!1,inputValue:""},n.textInput=r.a.createRef(),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.inputVisible,a=t.inputValue,o=this.props.data||[];return r.a.createElement("div",{className:"tag-group"},o.map(function(t,n){var a=t.length>8,o=r.a.createElement(m.a,{key:t,closable:!0,afterClose:function(){return e.handleRemove(t)}},a?"".concat(t.slice(0,8),"..."):t);return a?r.a.createElement(v.a,{title:t,key:n},o):o}),n&&r.a.createElement(g.a,{ref:this.textInput,type:"text",style:{width:78},value:a,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!n&&r.a.createElement(m.a,{className:"add-btn",onClick:this.showInput},r.a.createElement(w.a,{type:"plus"})),r.a.createElement(C.a,{title:"\u786e\u5b9a\u8981\u6e05\u7a7a\u5417\uff1f",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",placement:"bottom",onConfirm:this.handleClear,onCancel:j},r.a.createElement(O.a,{className:"clear-btn",shape:"circle",size:"small",icon:"delete"})))}}]),t}(a.Component),k={set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(localStorage.getItem(e))},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}};function S(e){var t=e.length;return e[parseInt(Math.random()*t)]}var y=null;n(150);var I="grow,shrink,pulse,push,pop,grow-rotate,float,sink,bob,skew-forward,skew-backward,wobble-horizontal,wobble-vertical,wobble-to-bottom-right,wobble-to-top-right,wobble-top,wobble-bottom,wobble-skew,buzz,buzz-ouy,forward,backward".split(","),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).clickHandler=function(){n.props.handleChange(1)},n.handleHover=function(){n.setState({hoverClass:S(I)})},n.state={hoverClass:S(I)},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.status,n="shuffle-btn hvr-".concat(this.state.hoverClass),a="";switch(t){case 0:n+=" default",a="\u6447\u4e00\u6447";break;case 1:n+=" loading",a="\u968f\u673a\u4e2d";break;case 2:n+=" done",a="\u518d\u6447\u4e00\u6b21"}return 1!==t&&(window.removeEventListener("devicemotion",y),function(e){var t,n,a,r=0,o=0,s=0,i=0;window.DeviceMotionEvent&&window.addEventListener("devicemotion",y,!1),y=function(c){var l=c.accelerationIncludingGravity,u=(new Date).getTime();if(u-r>10){var h=u-r;r=u,t=l.x,n=l.y,a=l.z,Math.abs(t+n+a-o-s-i)/h*1e4>4e3&&e(c),o=t,s=n,i=a}}}(function(){e.clickHandler()})),r.a.createElement("button",{className:n,onMouseEnter:this.handleHover,onClick:this.clickHandler,disabled:1===t},a)}}]),t}(a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"result"},r.a.createElement("div",{className:"result-text"},"\u7ed3\u679c\u662f~ ",r.a.createElement("span",null,this.props.data)))}}]),t}(a.Component),V=(n(152),n(154),"SELECTIONS"),z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSelectionChange=function(e){n.setState({selections:e}),k.set(V,e)},n.handleStatusChange=function(e){var t=n.state,a=t.selections,r=t.result;switch(e){case 0:r="";break;case 1:r=S(a),setTimeout(function(){n.setState({status:2,result:r})})}n.setState({status:e})},n.switchStatus=function(e){n.setState({status:e})},n.state={status:0,selections:k.get(V)||[],randomMethod:0,result:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.status,n=e.selections,a=e.result,o=n.length>1&&1!==t;return r.a.createElement("div",{className:"app"},r.a.createElement(d,null),r.a.createElement(E,{data:n,handleChange:this.handleSelectionChange,statusChange:this.handleStatusChange}),o&&r.a.createElement(N,{status:t,handleChange:this.handleStatusChange}),2===t&&r.a.createElement(x,{data:a}),r.a.createElement(p,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,n){e.exports=n(156)},94:function(e,t,n){}},[[89,2,1]]]);
//# sourceMappingURL=main.afc8a0c5.chunk.js.map