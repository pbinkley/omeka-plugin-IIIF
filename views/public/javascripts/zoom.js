var k,p=this;
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function s(a){return"string"==typeof a}var t="closure_uid_"+(1E9*Math.random()>>>0),u=0;var v=Array.prototype,w=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(s(a))return s(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},aa=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var g=a.length,d=[],e=0,f=s(a)?a.split(""):a,h=0;h<g;h++)if(h in f){var m=f[h];b.call(c,m,h,a)&&(d[e++]=m)}return d};function x(a,b){var c=w(a,b);0<=c&&v.splice.call(a,c,1)}
function y(a,b,c){return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)};var z,A,B,C;function D(){return p.navigator?p.navigator.userAgent:null}C=B=A=z=!1;var E;if(E=D()){var ba=p.navigator;z=0==E.lastIndexOf("Opera",0);A=!z&&(-1!=E.indexOf("MSIE")||-1!=E.indexOf("Trident"));B=!z&&-1!=E.indexOf("WebKit");C=!z&&!B&&!A&&"Gecko"==ba.product}var F=z,G=A,H=C,I=B,ca=p.navigator,da=-1!=(ca&&ca.platform||"").indexOf("Mac");function ea(){var a=p.document;return a?a.documentMode:void 0}var J;
a:{var K="",L;if(F&&p.opera)var M=p.opera.version,K="function"==typeof M?M():M;else if(H?L=/rv\:([^\);]+)(\)|;)/:G?L=/\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/:I&&(L=/WebKit\/(\S+)/),L)var fa=L.exec(D()),K=fa?fa[1]:"";if(G){var ga=ea();if(ga>parseFloat(K)){J=String(ga);break a}}J=K}var ha={};
function N(a){var b;if(!(b=ha[a])){b=0;for(var c=String(J).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(c.length,g.length),e=0;0==b&&e<d;e++){var f=c[e]||"",h=g[e]||"",m=RegExp("(\\d*)(\\D*)","g"),q=RegExp("(\\d*)(\\D*)","g");do{var n=m.exec(f)||["","",""],l=q.exec(h)||["","",""];if(0==n[0].length&&0==l[0].length)break;b=((0==n[1].length?0:parseInt(n[1],10))<(0==l[1].length?0:parseInt(l[1],10))?-1:(0==n[1].length?0:parseInt(n[1],
10))>(0==l[1].length?0:parseInt(l[1],10))?1:0)||((0==n[2].length)<(0==l[2].length)?-1:(0==n[2].length)>(0==l[2].length)?1:0)||(n[2]<l[2]?-1:n[2]>l[2]?1:0)}while(0==b)}b=ha[a]=0<=b}return b}var ia=p.document,ja=ia&&G?ea()||("CSS1Compat"==ia.compatMode?parseInt(J,10):5):void 0;!H&&!G||G&&G&&9<=ja||H&&N("1.9.1");G&&N("9");function ka(a){a=a.className;return s(a)&&a.match(/\S+/g)||[]}function O(a,b){for(var c=ka(a),g=y(arguments,1),d=c,e=0;e<g.length;e++)0<=w(d,g[e])||d.push(g[e]);a.className=c.join(" ")}function la(a,b){var c=ka(a),g=y(arguments,1),c=ma(c,g);a.className=c.join(" ")}function ma(a,b){return aa(a,function(a){return!(0<=w(b,a))})};function P(a){return s(a)?document.getElementById(a):a};var na=!G||G&&9<=ja,oa=G&&!N("9");!I||N("528");H&&N("1.9b")||G&&N("8")||F&&N("9.5")||I&&N("528");H&&!N("8")||G&&N("9");function Q(a,b){this.type=a;this.currentTarget=this.target=b}Q.prototype.f=!1;Q.prototype.defaultPrevented=!1;Q.prototype.j=!0;Q.prototype.preventDefault=function(){this.defaultPrevented=!0;this.j=!1};function R(a){R[" "](a);return a}R[" "]=function(){};function S(a,b){a&&pa(this,a,b)}(function(){function a(){}a.prototype=Q.prototype;S.k=Q.prototype;S.prototype=new a})();k=S.prototype;k.target=null;k.relatedTarget=null;k.offsetX=0;k.offsetY=0;k.clientX=0;k.clientY=0;k.screenX=0;k.screenY=0;k.button=0;k.keyCode=0;k.charCode=0;k.ctrlKey=!1;k.altKey=!1;k.shiftKey=!1;k.metaKey=!1;k.i=!1;k.g=null;
function pa(a,b,c){var g=a.type=b.type;Q.call(a,g);a.target=b.target||b.srcElement;a.currentTarget=c;if(c=b.relatedTarget){if(H){var d;a:{try{R(c.nodeName);d=!0;break a}catch(e){}d=!1}d||(c=null)}}else"mouseover"==g?c=b.fromElement:"mouseout"==g&&(c=b.toElement);a.relatedTarget=c;a.offsetX=I||void 0!==b.offsetX?b.offsetX:b.layerX;a.offsetY=I||void 0!==b.offsetY?b.offsetY:b.layerY;a.clientX=void 0!==b.clientX?b.clientX:b.pageX;a.clientY=void 0!==b.clientY?b.clientY:b.pageY;a.screenX=b.screenX||0;a.screenY=
b.screenY||0;a.button=b.button;a.keyCode=b.keyCode||0;a.charCode=b.charCode||("keypress"==g?b.keyCode:0);a.ctrlKey=b.ctrlKey;a.altKey=b.altKey;a.shiftKey=b.shiftKey;a.metaKey=b.metaKey;a.i=da?b.metaKey:b.ctrlKey;a.state=b.state;a.g=b;b.defaultPrevented&&a.preventDefault();delete a.f}k.preventDefault=function(){S.k.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,oa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var qa="closure_listenable_"+(1E6*Math.random()|0),ra=0;function sa(a,b,c,g,d,e){this.b=a;this.h=b;this.src=c;this.type=g;this.capture=!!d;this.e=e;this.key=++ra;this.c=this.d=!1};var ta={},T={},U={},V={};
function W(a,b,c,g,d){if("array"==r(b))for(var e=0;e<b.length;e++)W(a,b[e],c,g,d);else if(c=ua(c),a&&a[qa])a.l(b,c,g,d);else a:{if(!b)throw Error("Invalid event type");g=!!g;var f=T;b in f||(f[b]={a:0});f=f[b];g in f||(f[g]={a:0},f.a++);var f=f[g],e=a[t]||(a[t]=++u),h;if(f[e]){h=f[e];for(var m=0;m<h.length;m++)if(f=h[m],f.b==c&&f.e==d){if(f.c)break;h[m].d=!1;break a}}else h=f[e]=[],f.a++;m=va();f=new sa(c,m,a,b,g,d);f.d=!1;m.src=a;m.b=f;h.push(f);U[e]||(U[e]=[]);U[e].push(f);a.addEventListener?a.addEventListener(b,
m,g):a.attachEvent(b in V?V[b]:V[b]="on"+b,m);ta[f.key]=f}}function va(){var a=wa,b=na?function(c){return a.call(b.src,b.b,c)}:function(c){c=a.call(b.src,b.b,c);if(!c)return c};return b}function xa(a,b,c){var g=1;b=b[t]||(b[t]=++u);if(a[b]){a=a[b];b=a.length;if(0<b){for(var d=Array(b),e=0;e<b;e++)d[e]=a[e];a=d}else a=[];for(b=0;b<a.length;b++)(d=a[b])&&!d.c&&(g&=!1!==X(d,c))}return Boolean(g)}
function X(a,b){var c=a.b,g=a.e||a.src;if(a.d&&"number"!=typeof a&&a&&!a.c){var d=a.src;if(d&&d[qa])d.n(a);else{var e=a.type,f=a.h,h=a.capture;d.removeEventListener?d.removeEventListener(e,f,h):d.detachEvent&&d.detachEvent(e in V?V[e]:V[e]="on"+e,f);d=d[t]||(d[t]=++u);U[d]&&(f=U[d],x(f,a),0==f.length&&delete U[d]);a.c=!0;a.b=null;a.h=null;a.src=null;a.e=null;if(f=T[e][h][d])x(f,a),0==f.length&&(delete T[e][h][d],T[e][h].a--),0==T[e][h].a&&(delete T[e][h],T[e].a--),0==T[e].a&&delete T[e];delete ta[a.key]}}return c.call(g,
b)}
function wa(a,b){if(a.c)return!0;var c=a.type,g=T;if(!(c in g))return!0;var g=g[c],d,e;if(!na){if(!(c=b))a:{for(var c=["window","event"],f=p;d=c.shift();)if(null!=f[d])f=f[d];else{c=null;break a}c=f}d=c;c=!0 in g;f=!1 in g;if(c){if(0>d.keyCode||void 0!=d.returnValue)return!0;a:{var h=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(m){h=!0}if(h||void 0==d.returnValue)d.returnValue=!0}}h=new S;pa(h,d,this);d=!0;try{if(c){for(var q=[],n=h.currentTarget;n;n=n.parentNode)q.push(n);e=g[!0];for(var l=q.length-
1;!h.f&&0<=l;l--)h.currentTarget=q[l],d&=xa(e,q[l],h);if(f)for(e=g[!1],l=0;!h.f&&l<q.length;l++)h.currentTarget=q[l],d&=xa(e,q[l],h)}else d=X(a,h)}finally{q&&(q.length=0)}return d}g=new S(b,this);return d=X(a,g)}var ya="__closure_events_fn_"+(1E9*Math.random()>>>0);function ua(a){return"function"==r(a)?a:a[ya]||(a[ya]=function(b){return a.handleEvent(b)})};function za(a,b,c){var g=P(b);g.innerHTML='\x3cdiv id\x3d"toolbar" class\x3d"toolbar"\x3e\x3cdiv id\x3d"zoom-in" href\x3d"#zoom-in" title\x3d"Zoom in"\x3e\x3ci class\x3d"icon-zoom-in"\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv id\x3d"zoom-out" href\x3d"#zoom-out" title\x3d"Zoom out"\x3e\x3ci class\x3d"icon-zoom-out"\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv id\x3d"navigation"\x3e\x3cdiv id\x3d"previous" href\x3d"#previous-page" title\x3d"Previous page"\x3ePREV\x3c/div\x3e\x3cdiv id\x3d"next" href\x3d"#next-page" title\x3d"Next page"\x3eNEXT\x3c/div\x3e\x3c/navigation\x3e\x3c/div\x3e\x3cdiv id\x3d"close"\x3e\x3ci class\x3d"icon-close"\x3e\x3c/i\x3eClose Zoom\x3c/div\x3e'+
g.innerHTML;if(0!=c.length){this.m=OpenSeadragon({id:b,zoomInButton:"zoom-in",zoomOutButton:"zoom-out",homeButton:"home",nextButton:"next",fullPageButton:"full-page",previousButton:"previous",minZoomImageRatio:0.2,maxZoomPixelRatio:5,sequenceMode:!0,tileSources:c,navPrevNextWrap:!0});a=P(a);var d=P(b),e=P("toolbar"),f=P("close");a.style.cursor="pointer";W(a,"click",function(){O(d,"visible");O(f,"visible");O(e,"visible")},!1,this);W(f,"click",function(){la(d,"visible");la(f,"visible")},!1,this)}}
var Y=["zoom"],Z=p;Y[0]in Z||!Z.execScript||Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)Y.length||void 0===za?Z=Z[$]?Z[$]:Z[$]={}:Z[$]=za;
