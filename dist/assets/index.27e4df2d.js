import{b as C,aP as j,bw as G,_ as z,bx as $,f as L,c as U,a0 as B,p as D,by as l,a2 as u,bz as F,bA as E,n as I,ab as T,am as S}from"./index.db1e60aa.js";const V=(t,...n)=>{},w=new Map,q=(t,n)=>{w.set(t,n)},W=t=>{window.scroll({top:w.get(t)||0,behavior:"smooth"}),V("recoverScroll",t,w.get(t))};let H=!0,d;function N(t,n,r="replaceState"){let o=r==="location"?location.href:location.hash;if(!o.includes("?"))o=`${o}?${t}=${n}`;else if(!o.includes(t))o=`${o}&${t}=${n}`;else{const h=`(\\?|&|#)${t}([^&|^#]*)(&|$|#)`;o=o.replace(new RegExp(h),"$1"+t+"="+n+"$3")}r==="location"&&(location.href=o),r==="pushState"&&history.pushState({},"",o),r==="replaceState"&&history.replaceState({},"",o)}function O(t){for(var n=window.location.search.substring(1),r=n.split("&"),o=0;o<r.length;o++){var h=r[o].split("=");if(h[0]==t)return h[1]}return""}const v={};let i=1;const x=()=>i,J=()=>{const t=$();i=1,t.type==="pagination"&&N("page",1),console.log("resetGlobalPage",i)},K=()=>{const{pathname:t,to:n}=C(),[,r]=j(e=>G(e,z())),o=$();o.type==="pagination"&&O("page")&&(i=parseInt(O("page")));const[,h]=j(e=>{const s={index:e==null?void 0:e.index,size:e==null?void 0:e.size};return L(e==null?void 0:e.path,z(),s.index,s.size,e==null?void 0:e.force,new U.CancelToken(function(c){d=c}))}),m=(e,s=!0,a=!1)=>{a&&(e=D(t(),e)),s?v[e]=!0:delete v[e]};let g=!1;const P=(e,s,a)=>{d==null||d(),g=s!=null?s:!1,b(""),v[e]?p(e,i,void 0,void 0,a):y(e)},y=async e=>{l.setState(u.FetchingObj);const s=await r(e);F(s,a=>{var c;l.setObj(a),l.setProvider(a.provider),a.is_dir?(m(e),p(e,i)):(l.setReadme(a.readme),l.setHeader(a.header),l.setRelated((c=a.related)!=null?c:[]),l.setRawUrl(a.raw_url),l.setState(u.File))},b)},p=async(e,s,a,c=!1,_)=>{a||(a=o.size),a!==void 0&&o.type==="all"&&(a=void 0),i=s!=null?s:1,l.setState(c?u.FetchingMore:u.FetchingObjs);const A=await h({path:e,index:s,size:a,force:_});F(A,f=>{var M;c?E(f.content):(l.setObjs((M=f.content)!=null?M:[]),l.setTotal(f.total)),l.setReadme(f.readme),l.setHeader(f.header),l.setWrite(f.write),l.setProvider(f.provider),l.setState(u.Folder),c&&(s!=null?s:1)>1||W(e)},b)},b=(e,s)=>{if(s===403)l.setState(u.NeedPassword),g&&I.error(e);else{if(H&&e.endsWith("object not found")){H=!1,n(t().replace(T().base_path,""));return}l.setErr(e)}},R=(e,s,a=!1)=>{p(t(),e,s,a)};return{handlePathChange:P,setPathAs:m,refresh:(e,s)=>{P(t(),e,s)},pageChange:R,loadMore:()=>{R(i+1,void 0,!0)},allLoaded:()=>i>=Math.ceil(B.total/o.size)}};function X(t){return S({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 10h3l-4-4-4 4h3v4h2v-4z"/>'},t)}function Y(t){return S({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM13 13h3l-4-4-4 4h3v4h2v-4z"/>'},t)}function Z(t){return S({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"/>'},t)}export{Z as R,J as a,Y as b,X as c,N as d,x as g,q as r,K as u};
