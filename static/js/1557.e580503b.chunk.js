"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1557,2001],{57809:(e,i,t)=>{t.d(i,{Z:()=>r});var o=t(45779),n=t(68090),l=t.n(n);function a(){return a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function s(e,i){if(null==e)return{};var t,o,n=function(e,i){if(null==e)return{};var t,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=(0,o.forwardRef)((function(e,i){var t=e.color,n=void 0===t?"currentColor":t,l=e.size,d=void 0===l?24:l,r=s(e,["color","size"]);return o.createElement("svg",a({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));d.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},d.displayName="Plus";const r=d},25321:(e,i,t)=>{t.d(i,{l:()=>m,u:()=>h});var o=t(29531),n=t(74365),l=t(52364),a=t(49256),s=t(10105),d=t(76078),r=t(57852),c=t(25873);const u=new o.u({uri:r.V_[d.ChainId.MAINNET]}),p=new n.i(((e,i)=>{const t=c.ZP.getState().application.chainId;return e.setContext((()=>({uri:(0,r.ht)(t)&&r.V_[t]?r.V_[t]:r.V_[d.ChainId.MAINNET]}))),i(e)})),m=new l.f({cache:new a.h,link:(0,s.z)(p,u)}),h=Object.fromEntries(Object.entries(r.V_).map((([e,i])=>[e,new l.f({cache:new a.h,uri:i})])))},36813:(e,i,t)=>{t.d(i,{K:()=>k});var o=t(76078),n=t(21651),l=t(26729),a=t(63945),s=t(61592),d=t.n(s),r=t(63490),c=t.n(r),u=t(45779);const p=8;function m(e,i,t,o,l,a){let s={...t},r=[];for(let c=l+(a?1:-1);a?c<o.length:c>=0;a?c++:c--){const t=Number(o[c].tick),l=(0,n.tickToPrice)(e,i,t),u={liquidityActive:s.liquidityActive,tick:t,liquidityNet:d().BigInt(o[c].liquidityNet),price0:l.toFixed(p),sdkPrice:l};a?u.liquidityActive=d().add(s.liquidityActive,d().BigInt(o[c].liquidityNet)):!a&&d().notEqual(s.liquidityNet,d().BigInt(0))&&(u.liquidityActive=d().subtract(s.liquidityActive,s.liquidityNet)),r.push(u),s=u}return a||(r=r.reverse()),r}var h=t(25321),v=t(55660);const x=8,f=(e,i)=>e&&i?Math.floor(e/n.TICK_SPACINGS[i])*n.TICK_SPACINGS[i]:void 0;const g=1e3;function j(e,i,t,l){var s,d;const[r,p]=(0,u.useState)(0),[m,v]=(0,u.useState)([]),{data:x,error:f,loading:j}=function(e,i,t,l=0,s){var d,r,u;const p=h.u[s],m=e&&i&&t?n.Pool.getAddress(null===(d=e)||void 0===d?void 0:d.wrapped,null===(r=i)||void 0===r?void 0:r.wrapped,t,void 0,s?o.V3_CORE_FACTORY_ADDRESSES[s]:void 0):void 0;return(0,a.K_)({variables:{poolAddress:null===(u=m)||void 0===u?void 0:u.toLowerCase(),skip:l},skip:!m,pollInterval:c()("30s"),client:p})}(e,i,t,r,l);return(0,u.useEffect)((()=>{var e;(null===(e=x)||void 0===e?void 0:e.ticks.length)&&(v((e=>[...e,...x.ticks])),x.ticks.length===g&&p((e=>e+g)))}),[null===(s=x)||void 0===s?void 0:s.ticks]),{isLoading:j||(null===(d=x)||void 0===d?void 0:d.ticks.length)===g,error:f,ticks:m}}function k(e,i,t,a){var s,r,c,p,h;const g=(0,l.G)().chainId??o.ChainId.MAINNET,k=(0,v.$o)(null===(s=e)||void 0===s?void 0:s.wrapped,null===(r=i)||void 0===r?void 0:r.wrapped,t,a??g),y=null===(c=k[1])||void 0===c?void 0:c.liquidity,w=null===(p=k[1])||void 0===p?void 0:p.sqrtRatioX96,P=null===(h=k[1])||void 0===h?void 0:h.tickCurrent,b=(0,u.useMemo)((()=>f(P,t)),[P,t]),{isLoading:T,error:I,ticks:C}=j(e,i,t,a??g);return(0,u.useMemo)((()=>{var t,o,l;if(!e||!i||void 0===b||k[0]!==v.tK.EXISTS||!C||0===C.length||T)return{isLoading:T||k[0]===v.tK.LOADING,error:I,activeTick:b,data:void 0};const a=null===(t=e)||void 0===t?void 0:t.wrapped,s=null===(o=i)||void 0===o?void 0:o.wrapped,r=C.findIndex((({tick:e})=>e>b))-1;if(r<0)return console.error("TickData pivot not found"),{isLoading:T,error:I,activeTick:b,data:void 0};const c=(0,n.tickToPrice)(a,s,b),u={liquidityActive:d().BigInt((null===(l=k[1])||void 0===l?void 0:l.liquidity)??0),tick:b,liquidityNet:Number(C[r].tick)===b?d().BigInt(C[r].liquidityNet):d().BigInt(0),price0:c.toFixed(x),sdkPrice:c},p=m(a,s,u,C,r,!0),h=m(a,s,u,C,r,!1).concat(u).concat(p);return{isLoading:T,error:I,currentTick:P,activeTick:b,liquidity:y,sqrtPriceX96:w,data:h}}),[e,i,b,k,C,T,I,P,y,w])}},55660:(e,i,t)=>{t.d(i,{$o:()=>j,AI:()=>g,Oh:()=>f,tK:()=>x});var o=t(51371),n=t(76078),l=t(87270),a=t(21651),s=t(21891),d=t(61592),r=t.n(d),c=t(84938),u=t(45779),p=t(72993);function m(e,i,t,o,n,l,a){try{var s=e[l](a),d=s.value}catch(r){return void t(r)}s.done?i(d):Promise.resolve(d).then(o,n)}const h=new o.vU(l.Mt);let v=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,i,t,o){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:n}=i,{address:l}=t,s=`${e}:${n}:${l}:${o.toString()}`,d=this.addresses.find((e=>e.key===s));if(d)return d.address;const r={key:s,address:(0,a.computePoolAddress)({factoryAddress:e,tokenA:i,tokenB:t,fee:o})};return this.addresses.unshift(r),r.address}static getPool(e,i,t,o,n,l){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const s=this.pools.find((a=>a.token0===e&&a.token1===i&&a.fee===t&&r().EQ(a.sqrtRatioX96,o)&&r().EQ(a.liquidity,n)&&a.tickCurrent===l));if(s)return s;const d=new a.Pool(e,i,t,o,n,l);return this.pools.unshift(d),d}};var x;function f(e){const i=(0,p.x)(),t=(0,u.useMemo)((()=>i?e.map((([e,i,t])=>{if(e&&i&&t){const o=e.wrapped,n=i.wrapped;if(o.equals(n))return;return o.sortsBefore(n)?[o,n,t]:[n,o,t]}})):new Array(e.length)),[i,e]),o=(0,u.useMemo)((()=>{const e=i&&n.V3_CORE_FACTORY_ADDRESSES[i];return e?t.map((i=>i&&v.getPoolAddress(e,...i))):new Array(t.length)}),[i,t]),l=(0,c._Y)(o,h,"slot0"),a=(0,c._Y)(o,h,"liquidity");return(0,u.useMemo)((()=>e.map(((e,i)=>{const o=t[i];if(!o)return[x.INVALID,null];const[n,s,d]=o;if(!l[i])return[x.INVALID,null];const{result:r,loading:c,valid:u}=l[i];if(!a[i])return[x.INVALID,null];const{result:p,loading:m,valid:h}=a[i];if(!o||!u||!h)return[x.INVALID,null];if(c||m)return[x.LOADING,null];if(!r||!p)return[x.NOT_EXISTS,null];if(!r.sqrtPriceX96||r.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=v.getPool(n,s,d,r.sqrtPriceX96,p[0],r.tick);return[x.EXISTS,e]}catch(f){return console.error("Error when constructing the pool",f),[x.NOT_EXISTS,null]}}))),[a,e,l,t])}function g(e,i,t){return f((0,u.useMemo)((()=>[[e,i,t]]),[e,i,t]))[0]}function j(e,i,t,o){const d=(0,u.useRef)([x.LOADING,null]),r=e&&i&&t?v.getPoolAddress(n.V3_CORE_FACTORY_ADDRESSES[o],e,i,t):void 0,c=(0,u.useMemo)((()=>r?{[o]:r}:{}),[o,r]),p=(0,s.SO)(c,l.Mt)[o];return(0,u.useEffect)((()=>{function o(){var n;return n=function*(){try{if(!e||!i||!t||!r||!p)return void(d.current=[x.INVALID,null]);const o=yield p.slot0(),n=yield p.liquidity();d.current=[x.NOT_EXISTS,null];const l=new a.Pool(e,i,t,o.sqrtPriceX96.toString(),n.toString(),o.tick);d.current=[x.EXISTS,l]}catch(o){d.current=[x.INVALID,null]}},o=function(){var e=this,i=arguments;return new Promise((function(t,o){var l=n.apply(e,i);function a(e){m(l,t,o,a,s,"next",e)}function s(e){m(l,t,o,a,s,"throw",e)}a(void 0)}))},o.apply(this,arguments)}!function(){o.apply(this,arguments)}()}),[p,t,r,e,i]),d.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},46012:(e,i,t)=>{t.r(i),t.d(i,{default:()=>j});var o=t(92936),n=t(5985),l=t(47583),a=t(69780),s=t(97341),d=t(6823),r=t(43454),c=t(14411),u=t(54972),p=t(65075);const m=t.p+"static/media/404-page-dark.f24684e761633ae99402.png",h=t.p+"static/media/404-page-light.c448d3fd36de14609aba.png",v=c.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\NotFound\\index__Image",componentId:"sc-dc174370-0"})`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,x=c.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\NotFound\\index__Container",componentId:"sc-dc174370-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=(0,c.default)(x).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\NotFound\\index__Header",componentId:"sc-dc174370-2"})`
  gap: 30px;
`,g=(0,c.default)(x).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\NotFound\\index__PageWrapper",componentId:"sc-dc174370-3"})`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function j(){const e=(0,p.Gv)(),i=(0,s.dD)(),t=i?u.Tv.LargeHeader:u.Tv.Hero,c=i?u.Tv.HeadlineMedium:u.Tv.HeadlineLarge;return(0,o.jsx)(g,{children:(0,o.jsxs)(l.fM,{page:n.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,o.jsxs)(f,{children:[(0,o.jsxs)(x,{children:[(0,o.jsx)(t,{children:"404"}),(0,o.jsx)(c,{color:"neutral2",children:(0,o.jsx)(d.cC,{children:"Page not found!"})})]}),(0,o.jsx)(v,{src:e?m:h,alt:"Liluni"})]}),(0,o.jsx)(a.Hm,{as:r.rU,to:"/",children:(0,o.jsx)(d.cC,{children:"Oops, take me back to Swap"})})]})})}},75963:(e,i,t)=>{t.r(i),t.d(i,{default:()=>zt});var o=t(92936),n=t(5985),l=t(47583),a=t(44591),s=t(76078),d=t(21651),r=t(70060),c=t(74118),u=t(68707),p=t(36813),m=t(61592),h=t.n(m),v=t(45779),x=t(66136),f=t(69632),g=t(55810);class j{_data=null;_options;constructor(e){this._options=e,this._options.hoveredTick=e.activeTick}draw(e,i){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,i)))}update(e,i){this._data=e,this._options={...this._options,...i}}_drawImpl(e,i){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;const t=e.context,o=this._data.bars.map((e=>({x:e.x,y:i(e.originalData.liquidity)??0,tick:e.originalData.tick})));(0,g.XV)(o,this._data.barSpacing,e.horizontalPixelRatio,this._data.visibleRange.from,this._data.visibleRange.to);const n=i(0)??0;t.fillStyle=this._options.tokenAColor;for(let l=this._data.visibleRange.from;l<this._data.visibleRange.to;l++){const i=o[l],a=i.column,s=this._options.activeTick===i.tick,d=this._options.hoveredTick===i.tick;if(!a)return;const r=Math.min(Math.max(e.horizontalPixelRatio,a.right-a.left),this._data.barSpacing*e.horizontalPixelRatio),c=.3*r,u=r-2*c,p=(0,g.n1)(n,i.y,e.verticalPixelRatio);if(d){const e=.3*t.canvas.height,i=t.canvas.height-e;t.fillStyle=this._options.highlightColor,t.beginPath(),t.roundRect(a.left+c,e,u,i,8),t.fill(),t.globalAlpha=1}else t.globalAlpha=.4;if(s?t.fillStyle=this._options.tokenBColor:void 0===this._options.activeTick?t.fillStyle=this._options.color??"white":this._options.activeTick>i.tick?t.fillStyle=this._options.tokenBColor:this._options.activeTick<i.tick&&(t.fillStyle=this._options.tokenAColor),t.beginPath(),t.roundRect(a.left+c,p.position,u,p.length,8),t.fill(),t.globalAlpha=1,s&&this._options.activeTickProgress){t.globalCompositeOperation="source-atop";const e=p.length*this._options.activeTickProgress,i=p.position+(p.length-e);t.fillStyle=this._options.tokenAColor,t.beginPath(),t.fillRect(a.left,i,r,e),t.globalCompositeOperation="source-over"}}}}class k{_renderer;_tokenAColor;_tokenBColor;_highlightColor;constructor(e){this._tokenAColor=e.tokenAColor,this._renderer=new j(e),this._tokenBColor=e.tokenBColor,this._highlightColor=e.highlightColor}priceValueBuilder(e){return[0,e.liquidity]}isWhitespace(e){return!e.liquidity}renderer(){return this._renderer}update(e,i){this._renderer.update(e,i)}defaultOptions(){return{...f.Qb,tokenAColor:this._tokenAColor,tokenBColor:this._tokenBColor,highlightColor:this._highlightColor}}}function y(e,i,t,o,n,l,a){try{var s=e[l](a),d=s.value}catch(r){return void t(r)}s.done?i(d):Promise.resolve(d).then(o,n)}function w(e){return function(){var i=this,t=arguments;return new Promise((function(o,n){var l=e.apply(i,t);function a(e){y(l,o,n,a,s,"next",e)}function s(e){y(l,o,n,a,s,"throw",e)}a(void 0)}))}}class P extends c.B{series;activeTick;constructor(e,i){super(e,i),this.series=this.api.addCustomSeries(new k(i)),this.series.setData(this.data),this.updateOptions(i),this.fitContent()}updateOptions(e){super.updateOptions(e,{localization:{locale:e.locale},rightPriceScale:{visible:!1,borderVisible:!1,scaleMargins:{top:.35,bottom:0},autoScale:!0},timeScale:{visible:!1,fixLeftEdge:!0,fixRightEdge:!0,borderVisible:!1},crosshair:{horzLine:{visible:!1,labelVisible:!1},vertLine:{visible:!1,labelVisible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}}});const{data:i,activeTick:t}=e;this.activeTick=t,this.data!==i&&(this.data=i,this.series.setData(i),this.fitContent()),this.series.applyOptions({priceFormat:{type:"volume"},priceLineVisible:!1,lastValueVisible:!1}),this.series.applyOptions(e)}onSeriesHover(e){var i;super.onSeriesHover(e);const t={hoveredTick:(null===(i=e)||void 0===i?void 0:i.item.tick)??this.activeTick};this.series.applyOptions(t)}activeTickIndex(){return this.data.findIndex((e=>e.tick===this.activeTick))}fitContent(){const e=this.data.length,i=this.data.findIndex((e=>e.tick===this.activeTick)),t=-1!==i?i:e/2;this.api.timeScale().setVisibleLogicalRange({from:Math.max(t-50,0),to:Math.min(t+50,this.data.length)})}}const b=u.BigNumber.from(2).pow(128).sub(1);function T(e){return s.CurrencyAmount.fromRawAmount(e,b.toString())}function I(){return(I=w((function*(e,i,t,o,n){if(n.currentTick&&n.sqrtPriceX96&&n.liquidity)try{const l=h().greaterThan(o.liquidityNet,h().BigInt(0))?o.liquidityNet:h().multiply(o.liquidityNet,h().BigInt("-1")),a=[{index:o.tick,liquidityGross:l,liquidityNet:h().multiply(o.liquidityNet,h().BigInt("-1"))},{index:o.tick+d.TICK_SPACINGS[t],liquidityGross:l,liquidityNet:o.liquidityNet}],s=new d.Pool(e,i,t,n.sqrtPriceX96,o.liquidityActive,n.currentTick,a),r=d.TickMath.getSqrtRatioAtTick(a[0].index),c=(yield s.getOutputAmount(T(e),r))[0],u=parseFloat(o.sdkPrice.invert().quote(c).toExact()),p=d.TickMath.getSqrtRatioAtTick(a[1].index),m=(yield s.getOutputAmount(T(i),p))[0];return{amount0Locked:u,amount1Locked:parseFloat(o.sdkPrice.quote(m).toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function C(e,i,t,o){return D.apply(this,arguments)}function D(){return(D=w((function*(e,i,t,o){try{const n=d.TICK_SPACINGS[t],l=h().greaterThan(o.liquidityNet,h().BigInt(0))?o.liquidityNet:h().multiply(o.liquidityNet,h().BigInt("-1")),a=d.TickMath.getSqrtRatioAtTick(o.tick),r=[{index:o.tick,liquidityGross:l,liquidityNet:h().multiply(o.liquidityNet,h().BigInt("-1"))},{index:o.tick+d.TICK_SPACINGS[t],liquidityGross:l,liquidityNet:o.liquidityNet}],c=new d.Pool(e,i,Number(t),a,o.liquidityActive,o.tick,r),u=d.TickMath.getSqrtRatioAtTick(o.tick-n),p=s.CurrencyAmount.fromRawAmount(e,b.toString()),m=(yield c.getOutputAmount(p,u))[0],v=parseFloat(o.sdkPrice.invert().quote(m).toExact());return{amount0Locked:v,amount1Locked:parseFloat(m.toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function _({tokenA:e,tokenB:i,feeTier:t,isReversed:o,chainId:n}){const{formatNumber:l,formatPrice:a}=(0,x.Gb)(),s=(0,p.K)(e,i,t,n),[r,c]=(0,v.useState)();return(0,v.useEffect)((()=>{function n(){return n=w((function*(){var n;const l=s.data;if(!l)return;let r,u;const p=[];for(let c=0;c<l.length;c++){const n=l[c],m=o?1e3*c:1e3*(l.length-c),h=s.activeTick===n.tick;let v=n.sdkPrice,f=n.sdkPrice.invert();h&&s.activeTick&&s.currentTick&&(u=c,r=(s.currentTick-n.tick)/d.TICK_SPACINGS[t],v=(0,d.tickToPrice)(e,i,n.tick),f=v.invert());const{amount0Locked:g,amount1Locked:j}=yield C(e,i,t,n);p.push({tick:n.tick,liquidity:parseFloat(n.liquidityActive.toString()),price0:a({price:v,type:x.sw.SwapDetailsAmount}),price1:a({price:f,type:x.sw.SwapDetailsAmount}),time:m,amount0Locked:g,amount1Locked:j})}null===(n=p)||void 0===n||n.map(((e,i)=>{i>0&&(p[i-1].amount0Locked=e.amount0Locked,p[i-1].amount1Locked=e.amount1Locked)}));const m=void 0!==u?p[u]:void 0;if(void 0!==u&&m){const o=yield function(e,i,t,o,n){return I.apply(this,arguments)}(e,i,t,l[u],s);p[u]={...m,...o}}o||p.reverse(),c({barData:p.filter((e=>e.liquidity>0)),activeRangeData:m,activeRangePercentage:r})})),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[s,e,i,l,a,o,t]),{tickData:r,activeTick:s.activeTick,loading:s.isLoading||!r}}var S=t(7392),N=t(95757),$=t(6992),A=t(24997),L=t(68310),E=t(13382),B=t(26431),R=t(90511),M=t(90471),O=t(67968),V=t(53950),q=t(18569),F=t(32682),Z=t(6823),X=t(64505),U=t(14411),H=t(54972),z=t(55874),W=t(99582);const G=356,Q=[L.oX.VOLUME,L.oX.PRICE,L.oX.LIQUIDITY],Y=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__TimePeriodSelectorContainer",componentId:"sc-c659df50-0"})`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,K=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__ChartTypeSelectorContainer",componentId:"sc-c659df50-1"})`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,J=(0,U.default)(c.k).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__StyledChart",componentId:"sc-c659df50-2"})`
  height: ${G}px;
`,ee=({chartType:e,onChartTypeChange:i})=>(0,o.jsx)(K,{children:(0,o.jsx)(R.W,{options:Q,currentChartType:e,onSelectOption:i})});function ie(e,i,t,o,n,l){var a;const[s,d]=(0,v.useState)(q.XH.DAY),[r,c]=(0,v.useState)(L.oX.VOLUME),u=l===W.Qeo.V3,p={address:(null===(a=e)||void 0===a?void 0:a.address)??"",chain:n,duration:(0,q.uw)(s),isV3:u},m=function(e,i,t,o,n){var l,a,s;const{data:d,loading:r}=(0,W.TNW)({variables:e});return(0,v.useMemo)((()=>{var e,l,a;const{priceHistory:s}=(null===(e=d)||void 0===e?void 0:e.v2Pair)??(null===(l=d)||void 0===l?void 0:l.v3Pool)??{},c=n?t:o,u=(null===(a=s)||void 0===a?void 0:a.filter((e=>null!==e)).map((e=>{var t,o,n,l;const a=(null===(t=i)||void 0===t?void 0:t.token0.address)===(null===(o=c)||void 0===o?void 0:o.address.toLowerCase())?null===(n=e)||void 0===n?void 0:n.token0Price:null===(l=e)||void 0===l?void 0:l.token1Price;return{time:e.timestamp,value:a,open:a,high:a,low:a,close:a}})))??[],p=r||!s?M.x1.INVALID:M.x1.VALID;return{chartType:L.oX.PRICE,entries:u,loading:r,dataQuality:p}}),[null===(l=d)||void 0===l?void 0:l.v2Pair,null===(a=d)||void 0===a?void 0:a.v3Pool,n,r,null===(s=i)||void 0===s?void 0:s.token0.address,t,o])}(p,e,i,t,o),h=function(e){var i,t;const{data:o,loading:n}=(0,W.hzq)({variables:e});return(0,v.useMemo)((()=>{var i,t,l;const{historicalVolume:a}=(null===(i=o)||void 0===i?void 0:i.v2Pair)??(null===(t=o)||void 0===t?void 0:t.v3Pool)??{},s=(null===(l=a)||void 0===l?void 0:l.filter((e=>null!==e)).map(M.Yz))??[],d=(0,M.q6)(s,L.oX.VOLUME,e.duration);return{chartType:L.oX.VOLUME,entries:s,loading:n,dataQuality:d}}),[null===(i=o)||void 0===i?void 0:i.v2Pair,null===(t=o)||void 0===t?void 0:t.v3Pool,n,e.duration])}(p);return(0,v.useMemo)((()=>{const e=(()=>{switch(r){case L.oX.PRICE:return m;case L.oX.VOLUME:return h;case L.oX.LIQUIDITY:return{chartType:L.oX.LIQUIDITY,entries:[],loading:!1,dataQuality:M.x1.VALID}}})();return{timePeriod:s,setTimePeriod:d,setChartType:c,activeQuery:e}}),[r,h,m,s])}function te(e){var i,t,n,l,a,d;const[r,c]=[(null===(i=e.poolData)||void 0===i?void 0:i.token0)&&(0,q.Pc)(e.poolData.token0),(null===(t=e.poolData)||void 0===t?void 0:t.token1)&&(0,q.Pc)(e.poolData.token1)],{setChartType:u,timePeriod:p,setTimePeriod:m,activeQuery:h}=ie(e.poolData,null===(n=r)||void 0===n?void 0:n.wrapped,null===(l=c)||void 0===l?void 0:l.wrapped,e.isReversed,e.chain??W.qop.Ethereum,(null===(a=e.poolData)||void 0===a?void 0:a.protocolVersion)??W.Qeo.V3),x=(0,X.Dv)($.N),f=e.loading||h.chartType!==L.oX.LIQUIDITY&&(null===(d=h)||void 0===d?void 0:d.loading),g=(()=>{if(!r||!c||!e.poolData||!e.chain)return(0,o.jsx)(S.M,{type:h.chartType,height:G});const i={...e,feeTier:Number(e.poolData.feeTier),height:G,timePeriod:p,tokenA:r.wrapped,tokenB:c.wrapped,chainId:(0,q.Tz)(e.chain)??s.ChainId.MAINNET};if(h.chartType===L.oX.LIQUIDITY)return(0,o.jsx)(re,{...i});if(h.dataQuality===M.x1.INVALID||!r||!c){const e=f?void 0:(0,o.jsx)(Z.cC,{children:"Unable to display historical data for the current pool."});return(0,o.jsx)(S.M,{type:h.chartType,height:G,errorText:e})}const t=h.dataQuality===M.x1.STALE;switch(h.chartType){case L.oX.PRICE:return(0,o.jsx)(le,{...i,data:h.entries,stale:t});case L.oX.VOLUME:return(0,o.jsx)(A.x,{...i,data:h.entries,stale:t})}})(),j=(0,v.useMemo)((()=>h.chartType===L.oX.PRICE?B.Bz.filter((e=>e.value!==V._u.HOUR)):B.Bz),[h.chartType]);return(0,o.jsxs)("div",{"data-testid":"pdp-chart-container",children:[g,(0,o.jsxs)(B.Os,{children:[(0,o.jsx)(ee,{chartType:h.chartType,onChartTypeChange:u}),h.chartType!==L.oX.LIQUIDITY&&(0,o.jsx)(Y,{children:(0,o.jsx)(E.Z,{options:j,currentSelected:V.rD[p],onSelectOption:e=>{const i=(0,V.Wz)(e);var t;i===p?null===(t=x)||void 0===t||t():m(i)}})})]})]})}const oe=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__PriceDisplayContainer",componentId:"sc-c659df50-3"})`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`,ne=(0,U.default)(H.Tv.HeadlineMedium).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__ChartPriceText",componentId:"sc-c659df50-4"})`
  ${H.cw}
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;function le({tokenA:e,tokenB:i,isReversed:t,data:n,stale:l}){const{formatCurrencyAmount:a,formatPrice:d}=(0,x.Gb)(),[c,u]=t?[i,e]:[e,i],p=(0,v.useMemo)((()=>({data:n,stale:l,type:L.E4.LINE})),[n,l]),m=(0,F.ZP)(c),h=n[n.length-1];return(0,o.jsx)(J,{Model:N.r4,params:p,children:e=>{var i;const t=e??h,l=Math.floor((t.value??t.close)*10**u.decimals),p=(0,o.jsxs)(oe,{children:[(0,o.jsx)(ne,{children:`1 ${c.symbol} = ${a({amount:s.CurrencyAmount.fromRawAmount(u,l)})} \n            ${u.symbol}`}),(0,o.jsx)(ne,{color:"neutral2",children:m?"("+d({price:m})+")":""})]});return(0,o.jsx)(r._,{value:p,additionalFields:(0,o.jsx)(N.Tg,{startingPrice:n[0],endingPrice:t}),valueFormatterType:x.sw.FiatTokenPrice,time:null===(i=e)||void 0===i?void 0:i.time})}})}const ae=(0,U.default)(H.Tv.H1Medium).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__FadeInHeading",componentId:"sc-c659df50-5"})`
  ${z.Sj};
  line-height: 32px;
`,se=(0,U.default)(H.Tv.SubHeader).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__FadeInSubheader",componentId:"sc-c659df50-6"})`
  ${z.Sj}
`;function de({data:e,tokenADescriptor:i,tokenBDescriptor:t,currentTick:n}){const{formatNumber:l}=(0,x.Gb)();if(!n)return null;const a=e.tick>=n?l({input:e.amount0Locked,type:x.sw.TokenQuantityStats}):0,s=e.tick<=n?l({input:e.amount1Locked,type:x.sw.TokenQuantityStats}):0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(H.Tv.BodySmall,{children:(0,Z.t)("{{token}} liquidity: {{name}}",{token:i,name:a})}),(0,o.jsx)(H.Tv.BodySmall,{children:(0,Z.t)("{{token}} liquidity: {{name}}",{token:t,name:s})})]})}function re({tokenA:e,tokenB:i,feeTier:t,isReversed:n,chainId:l}){const a=e.symbol??e.name??Z.t`Token A`,s=i.symbol??i.name??Z.t`Token B`,{tickData:c,activeTick:u,loading:p}=_({tokenA:e,tokenB:i,feeTier:t,isReversed:n,chainId:l}),m=(0,U.useTheme)(),h=(0,v.useMemo)((()=>{var e,i;return{data:(null===(e=c)||void 0===e?void 0:e.barData)??[],tokenAColor:n?m.token1:m.token0,tokenBColor:n?m.token0:m.token1,highlightColor:m.surface3,activeTick:u,activeTickProgress:null===(i=c)||void 0===i?void 0:i.activeRangePercentage}}),[u,n,m,c]);return p?(0,o.jsx)(O.sT,{}):(0,o.jsx)(J,{Model:P,params:h,TooltipBody:t!==d.FeeAmount.LOWEST?({data:e})=>{var i,t;return(0,o.jsx)(de,{data:e,tokenADescriptor:a,tokenBDescriptor:s,currentTick:null===(t=c)||void 0===t||null===(i=t.activeRangeData)||void 0===i?void 0:i.tick})}:void 0,children:e=>{var i,t,n;const l=e??(null===(i=c)||void 0===i?void 0:i.activeRangeData),d=(0,o.jsxs)("div",{children:[(0,o.jsx)(ae,{children:`1 ${a} = ${null===(t=l)||void 0===t?void 0:t.price0} ${s}`}),(0,o.jsx)(ae,{children:`1 ${s} = ${null===(n=l)||void 0===n?void 0:n.price1} ${a}`}),l&&l.tick===u&&(0,o.jsx)(se,{color:"neutral2",paddingTop:"4px",children:(0,o.jsx)(Z.cC,{children:"Active tick range"})})]});return(0,o.jsx)(r._,{value:d})}})}var ce=t(98961),ue=t(3167),pe=t(18124),me=t(5319),he=t(23532),ve=t(5967),xe=t(94284),fe=t(22717),ge=t(75495),je=t(41886),ke=t(82743),ye=t(13820),we=t(64370),Pe=t(97341),be=t(30520),Te=t(51578),Ie=t(48111),Ce=t(43454),De=t(13446),_e=t(54703),Se=t(47841),Ne=t(57852);const $e=(0,U.default)(ke.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\shared__DetailBubble",componentId:"sc-43d66019-0"})`
  height: ${({$height:e})=>e?`${e}px`:"16px"};
  width: ${({$width:e})=>e?`${e}px`:"80px"};
`,Ae=(0,U.default)(ke.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\shared__SmallDetailBubble",componentId:"sc-43d66019-1"})`
  height: 20px;
  width: 20px;
  border-radius: 100px;
`,Le=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__HeaderContainer",componentId:"sc-52c374d6-0"})`
  display: flex;
  justify-content: space-between;
  align-items: 'flex-start';
  width: 100%;
  ${z.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,Ee=(0,U.default)(H.Tv.LabelMicro).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__Badge",componentId:"sc-52c374d6-1"})`
  background: ${({theme:e})=>e.surface2};
  padding: 2px 6px;
  border-radius: 4px;
`,Be=(0,U.default)(he.o).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__ToggleReverseArrows",componentId:"sc-52c374d6-2"})`
  ${H.iV}
  fill: ${({theme:e})=>e.neutral2};
`,Re=(0,U.default)(ke.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__IconBubble",componentId:"sc-52c374d6-3"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;function Me({chainId:e,poolAddress:i,token0:t,token1:n,loading:l}){var a,s;const d=(0,Ne.tq)({chainId:e,withFallback:!0}),r=`/explore/${d.toLowerCase()}`,c=`/explore/pools/${d.toLowerCase()}`;return(0,o.jsxs)(ce.zG,{"aria-label":"breadcrumb-nav",children:[(0,o.jsxs)(ce.yY,{to:r,children:[(0,o.jsx)(Z.cC,{children:"Explore"})," ",(0,o.jsx)(Te.Z,{size:14})]}),(0,o.jsxs)(ce.yY,{to:c,children:[(0,o.jsx)(Z.cC,{children:"Pools"})," ",(0,o.jsx)(Te.Z,{size:14})]}),l||!i?(0,o.jsx)($e,{$width:200}):(0,o.jsx)(ce.f3,{address:i,poolName:`${null===(a=t)||void 0===a?void 0:a.symbol} / ${null===(s=n)||void 0===s?void 0:s.symbol}`})]})}const Oe=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__StyledPoolDetailsTitle",componentId:"sc-52c374d6-4"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: max-content;
  align-items: center;
`,Ve=(0,U.default)(H.Tv.HeadlineMedium).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__PoolName",componentId:"sc-52c374d6-5"})`
  font-size: 24px !important;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 18px !important;
    line-height: 24px !important;
  }
`,qe=({token0:e,token1:i,chainId:t,feeTier:n,protocolVersion:l,toggleReversed:a})=>{var d,r,c,u;const{formatPercent:p}=(0,x.Gb)(),m=n&&p(new s.Percent(n,100*ye.PM));return(0,o.jsxs)(Oe,{children:[(0,o.jsx)("div",{children:(0,o.jsxs)(Ve,{children:[(0,o.jsx)(He,{to:(0,q.dG)({address:null===(d=e)||void 0===d?void 0:d.address,chain:(0,Ne.tq)({chainId:t,withFallback:!0})}),children:null===(r=e)||void 0===r?void 0:r.symbol}),"\xa0/\xa0",(0,o.jsx)(He,{to:(0,q.dG)({address:null===(c=i)||void 0===c?void 0:c.address,chain:(0,Ne.tq)({chainId:t,withFallback:!0})}),children:null===(u=i)||void 0===u?void 0:u.symbol})]})}),l===W.Qeo.V2&&(0,o.jsx)(Ee,{children:"v2"}),!!m&&(0,o.jsx)(Ee,{children:m}),(0,o.jsx)(Be,{"data-testid":"toggle-tokens-reverse-arrows",onClick:a})]})},Fe=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__ContractsDropdownRowContainer",componentId:"sc-52c374d6-6"})`
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 8px;
  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Ze=({address:e,chainId:i,tokens:t})=>{var n;const l=(0,U.useTheme)(),a=t[0]&&(0,q.Pc)(t[0]),s=2===t.length,d=s&&t[1]?[a,(0,q.Pc)(t[1])]:[a],r=e===we.dt,c=i&&e&&(0,_e.E)(i,e,r?_e.r.NATIVE:s?_e.r.ADDRESS:_e.r.TOKEN);return i&&c?(0,o.jsx)(ge.B,{href:c,children:(0,o.jsxs)(Fe,{children:[(0,o.jsxs)(xe.ZP,{gap:"sm",children:[s?(0,o.jsx)(Se.io,{chainId:i,currencies:d,size:24}):(0,o.jsx)(ve.Z,{currency:a,size:24}),(0,o.jsx)(H.Tv.BodyPrimary,{children:s?(0,o.jsx)(Z.cC,{children:"Pool"}):null===(n=t[0])||void 0===n?void 0:n.symbol}),(0,o.jsx)(H.Tv.BodySecondary,{children:(0,De.Xn)(e)})]}),(0,o.jsx)(Ie.Z,{size:"16px",stroke:l.neutral2})]})}):(0,o.jsx)(Fe,{children:(0,o.jsx)($e,{$width:117})})},Xe=U.css`
  ${je.jF}
  min-width: 235px;
  border-radius: 16px;
  ${H.cw}
`,Ue=({chainId:e,poolAddress:i,poolName:t,token0:n,token1:l})=>{var a,d;const r=(0,U.useTheme)(),[c,u]=(0,v.useReducer)((e=>!e),!1),p=(0,v.useRef)(null);return(0,be.t)(p,c?u:void 0),(0,o.jsxs)(xe.ZP,{width:"max-content",justify:"flex-end",gap:"sm",children:[(0,o.jsx)("div",{style:{position:"relative"},ref:p,children:(0,o.jsx)(ue.ud,{isOpen:c,toggleOpen:u,menuLabel:e===s.ChainId.MAINNET?(0,o.jsx)(pe.P,{width:"18px",height:"18px",fill:r.neutral1}):(0,o.jsx)(me.J,{width:"18px",height:"18px",fill:r.neutral1}),internalMenuItems:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ze,{address:i,chainId:e,tokens:[n,l]}),(0,o.jsx)(Ze,{address:null===(a=n)||void 0===a?void 0:a.address,chainId:e,tokens:[n]}),(0,o.jsx)(Ze,{address:null===(d=l)||void 0===d?void 0:d.address,chainId:e,tokens:[l]})]}),tooltipText:Z.t`Explorers`,hideChevron:!0,buttonCss:je.TX,menuFlyoutCss:Xe})}),(0,o.jsx)(fe.Z,{name:t})]})},He=(0,U.default)(Ce.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__StyledLink",componentId:"sc-52c374d6-7"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${H.iV}
`;function ze({chainId:e,poolAddress:i,token0:t,token1:n,feeTier:l,protocolVersion:s,toggleReversed:d,loading:r}){var c,u;const p=!(0,Pe.eI)().sm,m=`${null===(c=t)||void 0===c?void 0:c.symbol} / ${null===(u=n)||void 0===u?void 0:u.symbol}`,h=(0,v.useMemo)((()=>t&&n?[(0,q.Pc)(t),(0,q.Pc)(n)]:[]),[t,n]);return r?(0,o.jsx)(Le,{"data-testid":"pdp-header-loading-skeleton",children:p?(0,o.jsxs)(a.ZP,{gap:"sm",style:{width:"100%"},children:[(0,o.jsx)(Re,{}),(0,o.jsx)($e,{$height:40,$width:137})]}):(0,o.jsxs)(xe.ZP,{gap:"sm",children:[(0,o.jsx)(Re,{}),(0,o.jsx)($e,{$height:40,$width:137})]})}):(0,o.jsx)(Le,{children:p?(0,o.jsxs)(a.ZP,{gap:"sm",style:{width:"100%"},children:[(0,o.jsxs)(xe.ZP,{gap:"md",justify:"space-between",children:[e&&(0,o.jsx)(Se.io,{"data-testid":"double-token-logo",chainId:e,currencies:h}),(0,o.jsx)(Ue,{chainId:e,poolAddress:i,poolName:m,token0:t,token1:n})]}),(0,o.jsx)(qe,{token0:t,token1:n,chainId:e,feeTier:l,protocolVersion:s,toggleReversed:d})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(xe.ZP,{gap:"md",children:[e&&(0,o.jsx)(Se.io,{"data-testid":"double-token-logo",chainId:e,currencies:h}),(0,o.jsx)(qe,{token0:t,token1:n,chainId:e,feeTier:l,protocolVersion:s,toggleReversed:d})]}),(0,o.jsx)(Ue,{chainId:e,poolAddress:i,poolName:m,token0:t,token1:n})]})})}var We=t(86059),Ge=t(50333),Qe=t(94191),Ye=t(6282),Ke=t(66869);const Je=(0,U.default)(H.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__TokenName",componentId:"sc-523b89fa-0"})`
  display: none;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.xs}px) {
    display: block;
  }
  ${H.cw}
`,ei=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__TokenTextWrapper",componentId:"sc-523b89fa-1"})`
  gap: 8px;
  margin-right: 12px;
  ${H.cw}
  ${({isClickable:e})=>e&&H.iV}
`,ii=(0,U.default)(H.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__SymbolText",componentId:"sc-523b89fa-2"})`
  flex-shrink: 0;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.xs}px) {
    color: ${({theme:e})=>e.neutral2};
  }
`,ti=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__CopyAddress",componentId:"sc-523b89fa-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${H.iV}
`,oi=(0,U.default)(Qe.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__StyledCopyIcon",componentId:"sc-523b89fa-4"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,ni=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__ExplorerWrapper",componentId:"sc-523b89fa-5"})`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${H.iV}
`,li=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__ButtonsRow",componentId:"sc-523b89fa-6"})`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function ai({address:e,chainId:i,tokens:t,loading:n}){var l,a,d,r,c,u,p;const m=(0,U.useTheme)(),h=e===we.dt,x=t[0]&&(0,q.Pc)(t[0]),[f,g]=(0,Ge.Z)(),j=(0,v.useCallback)((()=>{const i=(0,De.UJ)(e);i&&g(i)}),[e,g]),k=2===t.length,y=k&&t[1]?[x,(0,q.Pc)(t[1])]:[x],w=e&&i&&(0,_e.E)(i,e,h?_e.r.NATIVE:k?_e.r.ADDRESS:_e.r.TOKEN),P=(0,Ye.s0)(),b=(0,Ne.tq)({chainId:i,withFallback:!0}),T=(0,v.useCallback)((()=>{var e;k||P((0,q.dG)({address:null===(e=t[0])||void 0===e?void 0:e.address,chain:b}))}),[P,t,k,b]),[I,C]=(0,v.useState)(!1),D=(0,v.useCallback)((e=>{if(e){e.clientWidth<e.scrollWidth&&C((e=>e?"both":"start"))}}),[I]);return!n&&e&&i?(0,o.jsxs)(xe.ZP,{align:"space-between",children:[(0,o.jsxs)(ei,{"data-testid":k?`pdp-pool-logo-${null===(l=t[0])||void 0===l?void 0:l.symbol}-${null===(a=t[1])||void 0===a?void 0:a.symbol}`:`pdp-token-logo-${null===(d=t[0])||void 0===d?void 0:d.symbol}`,isClickable:!k,onClick:T,ref:D,children:[k?(0,o.jsx)(Se.io,{chainId:i,currencies:y,size:20}):(0,o.jsx)(ve.Z,{currency:x,size:20}),(0,o.jsx)(Je,{children:k?(0,o.jsx)(Z.cC,{children:"Pool"}):null===(r=t[0])||void 0===r?void 0:r.name}),(0,o.jsx)(ii,{children:k?`${null===(c=t[0])||void 0===c?void 0:c.symbol} / ${null===(u=t[1])||void 0===u?void 0:u.symbol}`:(0,o.jsxs)(xe.ZP,{gap:"4px",children:[null===(p=t[0])||void 0===p?void 0:p.symbol," ",(0,o.jsx)(Te.Z,{size:16,color:m.neutral2})]})})]}),(0,o.jsxs)(li,{children:[!h&&(0,o.jsx)(We.ZP,{placement:"bottom",size:We.Oz.Max,show:f,text:Z.t`Copied`,children:(0,o.jsxs)(ti,{"data-testid":`copy-address-${e}`,onClick:j,children:[(0,De.Xn)(e,I?2:void 0,"both"===I?2:void 0),(0,o.jsx)(oi,{})]})}),w&&(0,o.jsx)(H.dL,{href:w,"data-testid":`explorer-url-${w}`,children:(0,o.jsx)(ni,{children:i===s.ChainId.MAINNET?(0,o.jsx)(pe.P,{width:"16px",height:"16px",fill:m.neutral1}):(0,o.jsx)(me.J,{width:"16px",height:"16px",fill:m.neutral1})})})]})]}):(0,o.jsxs)(xe.ZP,{gap:"8px",padding:"6px 0px",children:[(0,o.jsx)(Ae,{}),(0,o.jsx)($e,{$width:117})]})}var si=t(19478),di=t(39671),ri=t(22953);const ci=(0,U.default)(ri.xv).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__HeaderText",componentId:"sc-2836d701-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${Ke.j$.lg}px) {
    width: 100%;
  }
`,ui=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatsWrapper",componentId:"sc-2836d701-1"})`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,pi=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatItemColumn",componentId:"sc-2836d701-2"})`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${Ke.j$.sm}px) {
    min-width: 150px;
  }
`,mi=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-2836d701-3"})`
  justify-content: space-between;

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: column;
  }
`,hi=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__PoolBalanceTokenNamesContainer",componentId:"sc-2836d701-4"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${Ke.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,vi=(0,U.default)(Ce.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StyledLink",componentId:"sc-2836d701-5"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${H.iV}
`,xi=U.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,fi=U.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,gi=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__BalanceChartSide",componentId:"sc-2836d701-6"})`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?xi:fi}
`,ji=(0,U.default)(ke.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatSectionBubble",componentId:"sc-2836d701-7"})`
  width: 180px;
  height: 40px;
`,ki=(0,U.default)(ke.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatHeaderBubble",componentId:"sc-2836d701-8"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,yi=({token:e,chainId:i})=>{var t;const n=(0,Pe.eI)().lg,{formatNumber:l}=(0,x.Gb)(),a=i?(0,q.vR)(i,e):e,s=(null===(t=a)||void 0===t?void 0:t.address)===we.dt&&i?(0,we.gX)(i):e.currency;return(0,o.jsxs)(hi,{children:[!n&&(0,o.jsx)(ve.Z,{currency:s,size:20,style:{marginRight:"8px"}}),l({input:e.tvl,type:x.sw.TokenQuantityStats}),"\xa0",(0,o.jsxs)(vi,{to:(0,q.dG)({address:a.address,chain:(0,Ne.tq)({chainId:i,withFallback:!0})}),children:[n&&(0,o.jsx)(ve.Z,{currency:s,size:16,style:{marginRight:"4px",marginLeft:"4px"}}),a.symbol]})]})};function wi({poolData:e,isReversed:i,chainId:t,loading:n}){var l,s,d,r,c,u,p,m;const h=(0,Pe.eI)().lg,x=(0,U.useTheme)(),f=(0,di.U8)(null===(s=e)||void 0===s||null===(l=s.token0)||void 0===l?void 0:l.address,t),g=(0,di.U8)(null===(r=e)||void 0===r||null===(d=r.token1)||void 0===d?void 0:d.address,t),[j,k]=(0,v.useMemo)((()=>{if(e&&e.tvlToken0&&e.token0Price&&e.tvlToken1&&e.token1Price){var t,o,n,l,a,s,d,r,c,u,p,m,h,v;const x=(null===(t=e)||void 0===t?void 0:t.tvlToken0)*(null===(o=e)||void 0===o?void 0:o.token0Price)+(null===(n=e)||void 0===n?void 0:n.tvlToken1)*(null===(l=e)||void 0===l?void 0:l.token1Price),j={...null===(a=e)||void 0===a?void 0:a.token0,price:null===(s=e)||void 0===s?void 0:s.token0Price,tvl:null===(d=e)||void 0===d?void 0:d.tvlToken0,percent:(null===(r=e)||void 0===r?void 0:r.tvlToken0)*(null===(c=e)||void 0===c?void 0:c.token0Price)/x,currency:f},k={...null===(u=e)||void 0===u?void 0:u.token1,price:null===(p=e)||void 0===p?void 0:p.token1Price,tvl:null===(m=e)||void 0===m?void 0:m.tvlToken1,percent:(null===(h=e)||void 0===h?void 0:h.tvlToken1)*(null===(v=e)||void 0===v?void 0:v.token1Price)/x,currency:g};return i?[k,j]:[j,k]}return[void 0,void 0]}),[f,g,i,e]);return!n&&j&&k&&e?(0,o.jsxs)(ui,{loaded:!0,children:[(0,o.jsx)(ci,{children:(0,o.jsx)(Z.cC,{children:"Stats"})}),(0,o.jsxs)(pi,{children:[(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(Z.cC,{children:"Pool balances"})}),(0,o.jsxs)(mi,{children:[(0,o.jsx)(yi,{token:j,chainId:t}),(0,o.jsx)(yi,{token:k,chainId:t})]}),h&&(0,o.jsxs)(xe.ZP,{"data-testid":"pool-balance-chart",children:[(0,o.jsx)(gi,{percent:j.percent,$color:x.token0,isLeft:!0}),(0,o.jsx)(gi,{percent:k.percent,$color:x.token1,isLeft:!1})]})]}),(null===(c=e)||void 0===c?void 0:c.tvlUSD)&&(0,o.jsx)(Ti,{title:(0,o.jsx)(Z.cC,{children:"TVL"}),value:e.tvlUSD,delta:e.tvlUSDChange}),void 0!==(null===(u=e)||void 0===u?void 0:u.volumeUSD24H)&&(0,o.jsx)(Ti,{title:(0,o.jsx)(Z.cC,{children:"24H volume"}),value:e.volumeUSD24H,delta:e.volumeUSD24HChange}),void 0!==(null===(p=e)||void 0===p?void 0:p.volumeUSD24H)&&void 0!==(null===(m=e)||void 0===m?void 0:m.feeTier)&&(0,o.jsx)(Ti,{title:(0,o.jsx)(Z.cC,{children:"24H fees"}),value:e.volumeUSD24H*(e.feeTier/1e6)})]}):(0,o.jsxs)(ui,{children:[(0,o.jsx)(ci,{children:(0,o.jsx)(ki,{})}),Array.from({length:4}).map(((e,i)=>(0,o.jsxs)(a.ZP,{gap:"md",children:[(0,o.jsx)($e,{}),(0,o.jsx)(ji,{})]},`loading-info-row-${i}`)))]})}const Pi=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatsTextContainer",componentId:"sc-2836d701-9"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,bi=(0,U.default)(ri.xv).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatItemText",componentId:"sc-2836d701-10"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${Ke.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function Ti({title:e,value:i,delta:t}){const{formatNumber:n,formatDelta:l}=(0,x.Gb)();return(0,o.jsxs)(pi,{children:[(0,o.jsx)(H.Tv.BodySecondary,{children:e}),(0,o.jsxs)(Pi,{children:[(0,o.jsx)(bi,{children:n({input:i,type:x.sw.FiatTokenStats})}),!!t&&(0,o.jsxs)(xe.ZP,{width:"max-content",padding:"4px 0px",children:[(0,o.jsx)(si.Kx,{delta:t}),(0,o.jsx)(H.Tv.BodySecondary,{children:l(t)})]})]})]})}var Ii=t(26729),Ci=t(56708),Di=t(91216),_i=t(69924),Si=t(56536),Ni=t(79833),$i=t(80149),Ai=t(93741),Li=t(83102),Ei=t(76568),Bi=t(63194),Ri=t(57809),Mi=t(62652),Oi=t(62587),Vi=t(17202);function qi(e,i,t,o,n,l,a){try{var s=e[l](a),d=s.value}catch(r){return void t(r)}s.done?i(d):Promise.resolve(d).then(o,n)}const Fi=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-df652eed-0"})`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${Ke.j$.lg}px) {
    gap: 8px;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 8px;
    width: calc(100% - 16px);
    background: ${({theme:e})=>e.surface1};
    padding: 12px 32px;
    border: 1px solid ${({theme:e})=>e.surface3};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    & > :first-child {
      margin-right: auto;
    }
    z-index: ${Oi.k.sticky};
  }
  @media (max-width: ${Ke.j$.md}px) {
    bottom: 56px;
  }
`,Zi=U.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__PoolButton",componentId:"sc-df652eed-1"})`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({$open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,$open:i})=>i?e.neutral1:e.accent1};
  background-color: ${({theme:e,$open:i})=>i?e.surface1:(0,Mi.jb)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,$open:i})=>i&&`1px solid ${e.surface3}`};
  ${H.iV}
  @media (max-width: ${Ke.j$.lg}px) {
    width: ${({$fixedWidth:e})=>e&&"120px"};
  }
  @media (max-width: ${Ke.j$.sm}px) {
    display: ${({$hideOnMobile:e})=>e&&"none"};
    width: ${({$fixedWidth:e})=>!e&&"100%"};
  }
`,Xi=(0,U.default)(he.o).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__SwapIcon",componentId:"sc-df652eed-2"})`
  fill: ${({theme:e})=>e.accent1};
  rotate: 90deg;
`,Ui=(0,U.default)(ke.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__ButtonBubble",componentId:"sc-df652eed-3"})`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,Hi=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__SwapModalWrapper",componentId:"sc-df652eed-4"})`
  z-index: 0;
  gap: 24px;
  visibility: ${({open:e})=>e?"visible":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${Si.R0} {
    &:before {
      background-color: unset;
    }
  }

  // Need to override the default visibility to properly hide
  ${_i.Vt} {
    visibility: ${({open:e})=>e?"visible":"hidden"};
  }

  @media (max-width: ${Ke.j$.lg}px) {
    position: fixed;
    width: calc(100% - 16px);
    padding: 0px 12px 12px;
    border-radius: 24px;
    max-width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${Oi.k.fixed};
    background: ${({theme:e})=>e.surface1};
    transition: ${({theme:e})=>`opacity ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  }
`,zi=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__MobileBalance",componentId:"sc-df652eed-5"})`
  gap: 2px;
  display: none;
  @media (max-width: ${Ke.j$.lg}px) {
    display: flex;
  }
`;function Wi({chainId:e,token0:i,token1:t,feeTier:n,loading:l}){var s,d,r,c,u,p,m,h,f,g;const{chainId:j,account:k}=(0,Ii.G)(),{positions:y}=(0,Di.Z)(k??"",e?[e]:void 0),w=y&&function(e,i,t,o){var n;return null===(n=e)||void 0===n?void 0:n.find((e=>{var n,l,a,s,d,r,c,u,p;return((null===(n=e)||void 0===n?void 0:n.details.token0.toLowerCase())===(null===(l=i)||void 0===l?void 0:l.address)||(null===(a=e)||void 0===a?void 0:a.details.token0.toLowerCase())===(null===(s=t)||void 0===s?void 0:s.address))&&((null===(d=e)||void 0===d?void 0:d.details.token1.toLowerCase())===(null===(r=i)||void 0===r?void 0:r.address)||(null===(c=e)||void 0===c?void 0:c.details.token1.toLowerCase())===(null===(u=t)||void 0===u?void 0:u.address))&&(null===(p=e)||void 0===p?void 0:p.details.fee)==o&&!e.closed}))}(y,i,t,n),P=null===(s=w)||void 0===s?void 0:s.details.tokenId,b=(0,Li.o)(),T=(0,Ye.s0)(),I=i&&(0,q.Pc)(i),C=t&&(0,q.Pc)(t),{data:D}=(0,Ai.vv)(),{balance0:_,balance1:S,balance0Fiat:N,balance1Fiat:$}=(0,v.useMemo)((()=>{var o,n,l,a,s,d,r,c,u,p,m,h;const v=null===(a=D)||void 0===a||null===(l=a.portfolios)||void 0===l||null===(n=l[0])||void 0===n||null===(o=n.tokenBalances)||void 0===o?void 0:o.filter((i=>{var t,o;return(null===(o=i)||void 0===o||null===(t=o.token)||void 0===t?void 0:t.chain)===(0,Ne.tq)({chainId:e,withFallback:!0})})),x=null===(s=v)||void 0===s?void 0:s.find((e=>{var t,o,n;return(null===(o=e)||void 0===o||null===(t=o.token)||void 0===t?void 0:t.address)===(null===(n=i)||void 0===n?void 0:n.address)})),f=null===(d=v)||void 0===d?void 0:d.find((e=>{var i,o,n;return(null===(o=e)||void 0===o||null===(i=o.token)||void 0===i?void 0:i.address)===(null===(n=t)||void 0===n?void 0:n.address)}));return{balance0:(null===(r=x)||void 0===r?void 0:r.quantity)??0,balance1:(null===(c=f)||void 0===c?void 0:c.quantity)??0,balance0Fiat:(null===(p=x)||void 0===p||null===(u=p.denominatedValue)||void 0===u?void 0:u.value)??0,balance1Fiat:(null===(h=f)||void 0===h||null===(m=h.denominatedValue)||void 0===m?void 0:m.value)??0}}),[null===(d=D)||void 0===d?void 0:d.portfolios,e,null===(r=i)||void 0===r?void 0:r.address,null===(c=t)||void 0===c?void 0:c.address]),{formatNumber:A}=(0,x.Gb)(),L=A({input:_,type:x.sw.TokenNonTx}),E=A({input:S,type:x.sw.TokenNonTx}),B=N+$,R=A({input:B,type:x.sw.PortfolioBalance}),M=function(){var i,t=(i=function*(){I&&C&&(j!==e&&e&&(yield b(e)),T(`/add/${(0,Vi.H)(I)}/${(0,Vi.H)(C)}/${n}${P?`/${P}`:""}`))},function(){var e=this,t=arguments;return new Promise((function(o,n){var l=i.apply(e,t);function a(e){qi(l,o,n,a,s,"next",e)}function s(e){qi(l,o,n,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),[O,V]=(0,v.useReducer)((e=>!e),!1),F=(0,Pe.eI)(),X=F.lg,U=!F.sm,z=(0,$i.Xp)(null===(u=i)||void 0===u?void 0:u.address,e),W=(0,$i.Xp)(null===(p=t)||void 0===p?void 0:p.address,e),G=(0,$i.em)(z,W);return!l&&I&&C?(0,o.jsxs)(a.ZP,{gap:"lg",children:[(0,o.jsxs)(Fi,{children:[k&&(0,o.jsxs)(zi,{children:[(0,o.jsx)(H.Tv.SubHeaderSmall,{children:(0,o.jsx)(Z.cC,{children:"Your balances"})}),(0,o.jsxs)(xe.ZP,{gap:"8px",children:[(0,o.jsxs)(H.Tv.HeadlineSmall,{children:[L," ",I.symbol]}),(0,o.jsx)(H.Tv.HeadlineSmall,{color:"neutral3",children:"|"}),(0,o.jsxs)(H.Tv.HeadlineSmall,{children:[E," ",C.symbol]}),Boolean(B)&&!U&&(0,o.jsxs)(H.Tv.Caption,{children:["(",R,")"]})]})]}),(0,o.jsx)(Zi,{onClick:V,$open:O,$fixedWidth:Boolean(k),"data-testid":`pool-details-${O?"close":"swap"}-button`,children:O?(0,o.jsxs)(o.Fragment,{children:[X&&(0,o.jsx)(Bi.Z,{size:20}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(Z.cC,{children:"Close"})})]}):(0,o.jsxs)(o.Fragment,{children:[X&&(0,o.jsx)(Xi,{}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(Z.cC,{children:"Swap"})})]})}),(0,o.jsxs)(Zi,{onClick:M,"data-testid":"pool-details-add-liquidity-button",$fixedWidth:Boolean(k),$hideOnMobile:!0,children:[X&&(0,o.jsx)(Ri.Z,{size:20}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(Z.cC,{children:"Add liquidity"})})]})]}),(0,o.jsxs)(Hi,{open:O,"data-testid":"pool-details-swap-modal",children:[(0,o.jsx)(Ei.HY,{syncTabToUrl:!1,chainId:e,initialInputCurrency:I,initialOutputCurrency:C,compact:!0,disableTokenInputs:e!==j}),Boolean(G)&&(0,o.jsx)(Ni.Z,{tokenAddress:(G===z?null===(m=i)||void 0===m?void 0:m.address:null===(h=t)||void 0===h?void 0:h.address)??"",warning:G??$i.Jf,plural:Boolean(z&&W),tokenSymbol:G===z?null===(f=i)||void 0===f?void 0:f.symbol:null===(g=t)||void 0===g?void 0:g.symbol})]}),(0,o.jsx)(Ci.Z,{$open:O&&!X,$maxWidth:Ke.j$.lg,$zIndex:Oi.k.sticky,onClick:V})]}):(0,o.jsxs)(Fi,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,o.jsx)(zi,{children:(0,o.jsx)(Ui,{})}),(0,o.jsx)(Ui,{}),(0,o.jsx)(Ui,{})]})}const Gi=e=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,o.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,o.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,o.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var Qi=t(57221),Yi=t(31744);function Ki(e,i,t,o,n,l,a){try{var s=e[l](a),d=s.value}catch(r){return void t(r)}s.done?i(d):Promise.resolve(d).then(o,n)}function Ji(e){return function(){var i=this,t=arguments;return new Promise((function(o,n){var l=e.apply(i,t);function a(e){Ki(l,o,n,a,s,"next",e)}function s(e){Ki(l,o,n,a,s,"throw",e)}a(void 0)}))}}const et=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__PositionTableWrapper",componentId:"sc-829d8aa-0"})`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,it=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__PositionWrapper",componentId:"sc-829d8aa-1"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${H.iV}
  padding: 16px;
`,tt=(0,U.default)(H.Tv.LabelMicro).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__FeeTier",componentId:"sc-829d8aa-2"})`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,ot=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StatusWrapper",componentId:"sc-829d8aa-3"})`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color: ${({theme:e,status:i})=>i===dt.IN_RANGE?e.success:i===dt.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,nt=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__RangeWrapper",componentId:"sc-829d8aa-4"})`
  gap: 10px;

  @media screen and (max-width: ${Ke.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,lt=(0,U.default)((e=>(0,o.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})}))).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StyledDoubleArrow",componentId:"sc-829d8aa-5"})`
  @media screen and (max-width: ${Ke.j$.sm}px) {
    display: none;
  }
`,at=(0,U.default)(H.Tv.Caption).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__RangeText",componentId:"sc-829d8aa-6"})`
  width: max-content;
  white-space: nowrap;
`,st=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StyledDot",componentId:"sc-829d8aa-7"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;var dt;function rt({positionInfo:e}){const i=[(0,di.U8)(e.details.token0,e.chainId),(0,di.U8)(e.details.token1,e.chainId)],{chainId:t}=(0,Ii.G)(),n=(0,Ye.s0)(),l=(0,Li.o)(),a=(0,U.useTheme)(),{formatTickPrice:s}=(0,x.Gb)(),d=(0,v.useCallback)(Ji((function*(){t!==e.chainId&&(yield l(e.chainId)),n("/pool/"+e.details.tokenId)})),[n,e.chainId,e.details.tokenId,l,t]),r=e.inRange?dt.IN_RANGE:e.closed?dt.CLOSED:dt.OUT_OF_RANGE,c=e.position.token0PriceLower.invert(),u=e.position.token0PriceUpper.invert(),p={LOWER:0===parseFloat(u.toFixed(0)),UPPER:parseFloat(c.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,o.jsxs)(it,{onClick:d,children:[(0,o.jsxs)(xe.ZP,{gap:"8px",children:[(0,o.jsx)(Se.ge,{currencies:i,size:16}),(0,o.jsxs)(H.Tv.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,o.jsxs)(tt,{children:[e.pool.fee/ye.PM,"%"]}),(0,o.jsxs)(ot,{status:r,children:[(0,o.jsx)(H.Tv.Caption,{color:"inherit",children:r}),r===dt.IN_RANGE&&(0,o.jsx)(st,{}),r===dt.OUT_OF_RANGE&&(0,o.jsx)(Qi.Z,{size:12,color:a.deprecated_accentWarning}),r===dt.CLOSED&&(0,o.jsx)(Gi,{})]})]}),(0,o.jsxs)(nt,{children:[(0,o.jsxs)(at,{"data-testid":`position-min-${u.toFixed(0)}`,children:[(0,o.jsx)(Z.cC,{children:"Min:"}),"\xa0",s({price:u,atLimit:p,direction:Yi.Mb.LOWER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,o.jsx)(Z.cC,{children:"per"}),"\xa0",e.pool.token1.symbol]}),(0,o.jsx)(lt,{}),(0,o.jsxs)(at,{"data-testid":`position-max-${c.toFixed(0)}`,children:[(0,o.jsx)(Z.cC,{children:"Max:"}),"\xa0",s({price:c,atLimit:p,direction:Yi.Mb.UPPER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,o.jsx)(Z.cC,{children:"per"}),"\xa0",e.pool.token1.symbol]})]})]})}function ct({positions:e}){return(0,o.jsx)(et,{children:e.map(((e,i)=>(0,o.jsx)(rt,{positionInfo:e},`pool-position-${i}`)))})}!function(e){e.IN_RANGE="In range",e.OUT_OF_RANGE="Out of range",e.CLOSED="Closed"}(dt||(dt={}));var ut,pt=t(73705),mt=t(66789),ht=t(53083),vt=t(57144),xt=t(23388),ft=t(42183),gt=t(70559);!function(e){e.BUY="Buy",e.SELL="Sell",e.BURN="Burn",e.MINT="Mint"}(ut||(ut={}));const jt=25;var kt=t(63945),yt=t(95685);const wt=(0,U.default)(H.dL).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTransactionsTable__StyledExternalLink",componentId:"sc-7f8ae12c-0"})`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`,Pt=U.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTransactionsTable__TableWrapper",componentId:"sc-7f8ae12c-1"})`
  min-height: 256px;
`;var bt;!function(e){e[e.Timestamp=0]="Timestamp",e[e.Type=1]="Type",e[e.MakerAddress=2]="MakerAddress",e[e.FiatValue=3]="FiatValue",e[e.InputAmount=4]="InputAmount",e[e.OutputAmount=5]="OutputAmount"}(bt||(bt={}));const Tt={[bt.Timestamp]:120,[bt.Type]:144,[bt.MakerAddress]:100,[bt.FiatValue]:125,[bt.InputAmount]:125,[bt.OutputAmount]:125};function It(e,i){var t,o,n;if((null===(t=i)||void 0===t?void 0:t.address)===we.dt){var l;const t=(0,q.Tz)(i.chain);return t&&e.id.toLowerCase()===(null===(l=we.Fl[t])||void 0===l?void 0:l.address.toLowerCase())}return e.id.toLowerCase()===(null===(n=i)||void 0===n||null===(o=n.address)||void 0===o?void 0:o.toLowerCase())}function Ct({poolAddress:e,token0:i,token1:t,protocolVersion:n}){var l;const a=(0,q.L7)((0,Ne.WN)(),{fallbackToEthereum:!0}),d=(0,yt.XB)(),{formatNumber:r,formatFiatPrice:c}=(0,x.Gb)(),[u,p]=(0,v.useReducer)((e=>!e),!1),[m,h]=(0,v.useState)([ut.BUY,ut.SELL,ut.BURN,ut.MINT]),[f]=(0,v.useState)({sortBy:kt.ri.Timestamp,sortDirection:kt.N9.Desc}),{transactions:g,loading:j,loadMore:k,error:y}=function(e,i,t=[ut.BUY,ut.SELL,ut.BURN,ut.MINT],o,n=W.Qeo.V3,l=jt){var a,d,r,c,u;const p=(0,gt.ye)(ft.TP.V2Explore),{loading:m,error:h,data:x,fetchMore:f}=(0,W.uv5)({variables:{first:l,chain:(0,Ne.tq)({chainId:i,withFallback:!0}),address:e},skip:n!==W.Qeo.V3}),{loading:g,error:j,data:k,fetchMore:y}=(0,W.arC)({variables:{first:l,chain:(0,Ne.tq)({chainId:i,withFallback:!0}),address:e},skip:!i||n!==W.Qeo.V2||i!==s.ChainId.MAINNET&&!p}),w=(0,v.useRef)(!1),{transactions:P,loading:b,fetchMore:T,error:I}=n===W.Qeo.V3?{transactions:null===(d=x)||void 0===d||null===(a=d.v3Pool)||void 0===a?void 0:a.transactions,loading:m,fetchMore:f,error:h}:{transactions:null===(c=k)||void 0===c||null===(r=c.v2Pair)||void 0===r?void 0:r.transactions,loading:g,fetchMore:y,error:j},C=(0,v.useCallback)((({onComplete:e})=>{var i,t;w.current||(w.current=!0,T({variables:{cursor:null===(t=P)||void 0===t||null===(i=t[P.length-1])||void 0===i?void 0:i.timestamp},updateQuery:(i,{fetchMoreResult:t})=>{var o,l,a;if(!t)return i;null===(o=e)||void 0===o||o();const s=n===W.Qeo.V3?{v3Pool:{...t.v3Pool,transactions:[...(null===(l=i.v3Pool)||void 0===l?void 0:l.transactions)??[],...t.v3Pool.transactions]}}:{v2Pair:{...t.v2Pair,transactions:[...(null===(a=i.v2Pair)||void 0===a?void 0:a.transactions)??[],...t.v2Pair.transactions]}};return w.current=!1,s}}))}),[T,P,n]),D=(0,v.useMemo)((()=>{var e;return null===(e=P??[])||void 0===e?void 0:e.map((e=>{var i,n,l,a;if(!e)return;const s=(null===(n=parseFloat(e.token0Quantity)>0?e.token0:e.token1)||void 0===n||null===(i=n.address)||void 0===i?void 0:i.toLowerCase())===(null===(a=o)||void 0===a||null===(l=a.address)||void 0===l?void 0:l.toLowerCase()),d=e.type===W.uGm.Swap?s?ut.SELL:ut.BUY:e.type===W.uGm.Remove?ut.BURN:ut.MINT;return t.includes(d)?{timestamp:e.timestamp,transaction:e.hash,pool:{token0:{id:e.token0.address??"",symbol:e.token0.symbol??""},token1:{id:e.token1.address??"",symbol:e.token1.symbol??""}},maker:e.account,amount0:parseFloat(e.token0Quantity),amount1:parseFloat(e.token1Quantity),amountUSD:e.usdValue.value,type:d}:void 0})).filter((e=>void 0!==e))}),[P,t,null===(u=o)||void 0===u?void 0:u.address]);return(0,v.useMemo)((()=>({transactions:D,loading:b,loadMore:C,error:I})),[D,b,C,I])}(e,a.id,m,i,n),w=j||!!y,P=(0,v.useMemo)((()=>{const e=(0,pt.Cl)();return[e.accessor((e=>e),{id:"timestamp",header:()=>(0,o.jsx)(ht.b,{minWidth:Tt[bt.Timestamp],justifyContent:"flex-start",children:(0,o.jsxs)(xe.ZP,{gap:"4px",children:[f.sortBy===kt.ri.Timestamp&&(0,o.jsx)(xt.iX,{direction:kt.N9.Desc}),(0,o.jsx)(xt.Hu,{$active:f.sortBy===kt.ri.Timestamp,children:(0,o.jsx)(Z.cC,{children:"Time"})})]})}),cell:e=>{var i,t,n,l;return(0,o.jsx)(ht.b,{loading:w,minWidth:Tt[bt.Timestamp],justifyContent:"flex-start",children:(0,o.jsx)(xt._q,{timestamp:Number(null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t).timestamp),link:(0,_e.E)(a.id,null===(n=(l=e).getValue)||void 0===n?void 0:n.call(l).transaction,_e.r.TRANSACTION)})})}}),e.accessor((e=>{let t,n;var l;if(e.type===ut.BUY)t="success",n=(0,o.jsxs)("span",{children:[(0,o.jsx)(Z.cC,{children:"Buy"}),"\xa0",null===(l=i)||void 0===l?void 0:l.symbol]});else if(e.type===ut.SELL){var a;t="critical",n=(0,o.jsxs)("span",{children:[(0,o.jsx)(Z.cC,{children:"Sell"}),"\xa0",null===(a=i)||void 0===a?void 0:a.symbol]})}else t=e.type===ut.MINT?"success":"critical",n=e.type===ut.MINT?(0,o.jsx)(Z.cC,{children:"Add"}):(0,o.jsx)(Z.cC,{children:"Remove"});return(0,o.jsx)(H.Tv.BodyPrimary,{color:t,children:n})}),{id:"swap-type",header:()=>(0,o.jsx)(ht.b,{minWidth:Tt[bt.Type],justifyContent:"flex-start",children:(0,o.jsxs)(xt.j4,{modalOpen:u,onClick:()=>p(),children:[(0,o.jsx)(vt.w,{allFilters:Object.values(ut),activeFilter:m,setFilters:h,isOpen:u,toggleFilterModal:p}),(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(Z.cC,{children:"Type"})})]})}),cell:e=>{var i,t;return(0,o.jsx)(ht.b,{loading:w,minWidth:Tt[bt.Type],justifyContent:"flex-start",children:null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t)})}}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,o.jsx)(ht.b,{minWidth:Tt[bt.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:d})}),cell:e=>{var i,t;return(0,o.jsx)(ht.b,{loading:w,minWidth:Tt[bt.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:c({price:null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t)})})})}}),e.accessor((e=>It(e.pool.token0,i)?e.amount0:e.amount1),{id:"input-amount",header:()=>{var e;return(0,o.jsx)(ht.b,{loading:w,minWidth:Tt[bt.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:null===(e=i)||void 0===e?void 0:e.symbol})})},cell:e=>{var i,t;return(0,o.jsx)(ht.b,{loading:w,minWidth:Tt[bt.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:r({input:Math.abs((null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t))??0),type:x.sw.TokenTx})})})}}),e.accessor((e=>It(e.pool.token0,i)?e.amount1:e.amount0),{id:"output-amount",header:()=>{var e;return(0,o.jsx)(ht.b,{loading:w,minWidth:Tt[bt.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:null===(e=t)||void 0===e?void 0:e.symbol})})},cell:e=>{var i,t;return(0,o.jsx)(ht.b,{loading:w,minWidth:Tt[bt.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:r({input:Math.abs((null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t))??0),type:x.sw.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,o.jsx)(ht.b,{minWidth:Tt[bt.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(Z.cC,{children:"Wallet"})})}),cell:e=>{var i,t,n,l;return(0,o.jsx)(ht.b,{loading:w,minWidth:Tt[bt.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(wt,{href:(0,_e.E)(a.id,null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t),_e.r.ADDRESS),children:(0,o.jsx)(H.Tv.BodyPrimary,{children:(0,De.Xn)(null===(n=(l=e).getValue)||void 0===n?void 0:n.call(l),0)})})})}})]}),[d,a.id,m,u,c,r,w,f.sortBy,i,null===(l=t)||void 0===l?void 0:l.symbol]);return(0,o.jsx)(Pt,{"data-testid":"pool-details-transactions-table",children:(0,o.jsx)(mt.i,{columns:P,data:g,loading:j,error:y,loadMore:k,maxHeight:600})})}var Dt;!function(e){e.TRANSACTIONS="transactions",e.POSITIONS="positions"}(Dt||(Dt={}));const _t=(0,U.default)(H.Tv.HeadlineMedium).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTable__TableHeader",componentId:"sc-52a18a5b-0"})`
  color: ${({theme:e,active:i})=>!i&&e.neutral2};
  ${({disabled:e})=>!e&&H.iV}
  user-select: none;
`;function St({poolAddress:e,token0:i,token1:t,protocolVersion:n}){var l;const[s,r]=(0,v.useState)(Dt.TRANSACTIONS),c=(0,q.L7)((0,Ne.WN)(),{fallbackToEthereum:!0}),{account:u}=(0,Ii.G)(),{positions:p}=(0,Di.Z)(u??"",[c.id]),m=(0,v.useMemo)((()=>{var i;return(null===(i=p)||void 0===i?void 0:i.filter((i=>d.Pool.getAddress(i.pool.token0,i.pool.token1,i.pool.fee).toLowerCase()===e.toLowerCase())))??[]}),[e,p]);return(0,o.jsxs)(a.ZP,{gap:"lg",children:[(0,o.jsxs)(xe.ZP,{gap:"16px",children:[(0,o.jsx)(_t,{active:s===Dt.TRANSACTIONS,onClick:()=>r(Dt.TRANSACTIONS),disabled:!m.length,children:(0,o.jsx)(Z.cC,{children:"Transactions"})}),Boolean(m.length)&&(0,o.jsxs)(_t,{active:s===Dt.POSITIONS,onClick:()=>r(Dt.POSITIONS),children:[(0,o.jsx)(Z.cC,{children:"Positions"}),` (${null===(l=m)||void 0===l?void 0:l.length})`]})]}),s===Dt.TRANSACTIONS?(0,o.jsx)(Ct,{poolAddress:e,token0:i,token1:t,protocolVersion:n}):(0,o.jsx)(ct,{positions:m})]})}var Nt=t(75748),$t=t(63490),At=t.n($t);function Lt(e){if(!e)return;const i=(new Date).getTime(),t=(i-At()("1d"))/1e3,o=(i-At()("2d"))/1e3,n=e.filter((e=>{var i;return void 0!==(null===(i=e)||void 0===i?void 0:i.timestamp)&&e.timestamp>=t})).reduce(((e,i)=>e+i.value),0),l=e.filter((e=>{var i;return void 0!==(null===(i=e)||void 0===i?void 0:i.timestamp)&&e.timestamp>=o&&e.timestamp<t})).reduce(((e,i)=>e+i.value),0);return(n-l)/l*100}var Et=t(3359),Bt=t(46012);const Rt=e=>{var i,t;const o=null===(i=e)||void 0===i?void 0:i.token0.symbol,n=null===(t=e)||void 0===t?void 0:t.token1.symbol,l=Z.t`Buy and sell on Uniswap`;return o&&n?`${o}/${n}: ${l}`:l};var Mt=t(37018),Ot=t(437);const Vt=(0,U.default)(xe.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\PoolDetails\\index__PageWrapper",componentId:"sc-e9016f90-0"})`
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;
  align-items: flex-start;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,qt=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\PoolDetails\\index__LeftColumn",componentId:"sc-e9016f90-1"})`
  gap: 40px;
  max-width: 780px;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${Ke.j$.lg}px) {
    width: 100%;
    max-width: unset;
  }
`,Ft=U.default.hr.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\PoolDetails\\index__HR",componentId:"sc-e9016f90-2"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  width: 100%;
`,Zt=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\PoolDetails\\index__RightColumn",componentId:"sc-e9016f90-3"})`
  gap: 24px;
  width: 360px;

  @media (max-width: ${Ke.j$.lg}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
    & > *:first-child {
      margin-top: -24px;
    }
  }
`,Xt=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\PoolDetails\\index__TokenDetailsWrapper",componentId:"sc-e9016f90-4"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${Ke.j$.sm}px) {
    padding: unset;
  }
`,Ut=(0,U.default)(ri.xv).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\PoolDetails\\index__TokenDetailsHeader",componentId:"sc-e9016f90-5"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,Ht=(0,U.default)(a.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\PoolDetails\\index__LinksContainer",componentId:"sc-e9016f90-6"})`
  gap: 16px;
  width: 100%;
`;function zt(){var e,i,t,d,r,c,u,p,m,h,x,f,g,j,k,y,w,P,b,T,I,C,D,_,S,N,$,A,L,E;const{poolAddress:B}=(0,Ye.UO)(),R=(0,q.L7)((0,Ne.WN)()),{data:M,loading:O}=function(e,i){var t,o;const n=(0,gt.ye)(ft.TP.V2Explore),{loading:l,error:a,data:d}=(0,W.Bn1)({variables:{chain:(0,Ne.tq)({chainId:i,withFallback:!0}),address:e},errorPolicy:"all"}),{loading:r,error:c,data:u}=(0,W.gyz)({variables:{chain:(0,Ne.tq)({chainId:i,withFallback:!0}),address:e},skip:!i||i!==s.ChainId.MAINNET&&!n,errorPolicy:"all"});return(0,v.useMemo)((()=>{var e,t,o,p,m,h,v,x,f,g,j,k,y,w,P,b,T,I;const C=Boolean(a||c&&(i===s.ChainId.MAINNET||n)),D=Boolean(l||r&&(i===s.ChainId.MAINNET||n)),_=(null===(e=d)||void 0===e?void 0:e.v3Pool)??(null===(t=u)||void 0===t?void 0:t.v2Pair)??void 0,S=(null===(p=d)||void 0===p||null===(o=p.v3Pool)||void 0===o?void 0:o.feeTier)??Nt.y9;return{data:_?{address:_.address,txCount:_.txCount,protocolVersion:_.protocolVersion,token0:_.token0,tvlToken0:_.token0Supply,token0Price:null===(f=_.token0)||void 0===f||null===(x=f.project)||void 0===x||null===(v=x.markets)||void 0===v||null===(h=v[0])||void 0===h||null===(m=h.price)||void 0===m?void 0:m.value,token1:_.token1,tvlToken1:_.token1Supply,token1Price:null===(w=_.token1)||void 0===w||null===(y=w.project)||void 0===y||null===(k=y.markets)||void 0===k||null===(j=k[0])||void 0===j||null===(g=j.price)||void 0===g?void 0:g.value,feeTier:S,volumeUSD24H:null===(P=_.volume24h)||void 0===P?void 0:P.value,volumeUSD24HChange:Lt(null===(b=_.historicalVolume)||void 0===b?void 0:b.concat()),tvlUSD:null===(T=_.totalLiquidity)||void 0===T?void 0:T.value,tvlUSDChange:null===(I=_.totalLiquidityPercentChange24h)||void 0===I?void 0:I.value}:void 0,error:C,loading:D}}),[i,null===(t=u)||void 0===t?void 0:t.v2Pair,null===(o=d)||void 0===o?void 0:o.v3Pool,c,a,r,l,n])}((null===(e=B)||void 0===e?void 0:e.toLowerCase())??"",null===(i=R)||void 0===i?void 0:i.id),[V,F]=(0,v.useReducer)((e=>!e),!1),X=function(e,i){var t,o,n,l;return(null===(t=e)||void 0===t?void 0:t.token0)&&(null===(o=e)||void 0===o?void 0:o.token1)&&i?[(0,q.vR)(i,null===(n=e)||void 0===n?void 0:n.token0),(0,q.vR)(i,null===(l=e)||void 0===l?void 0:l.token1)]:[void 0,void 0]}(M,null===(t=R)||void 0===t?void 0:t.id),[H,z]=V?[null===(d=X)||void 0===d?void 0:d[1],null===(r=X)||void 0===r?void 0:r[0]]:X,{darkMode:G,surface2:Q,accent1:Y}=(0,U.useTheme)(),K=(0,Et.r)(H&&(0,q.Pc)(H),{backgroundColor:Q,darkMode:G}),J=(0,Et.r)(z&&(0,q.Pc)(z),{backgroundColor:Q,darkMode:G}),ee=!B||!R||!(0,De.UJ)(B),ie=!O&&!M||ee,oe=(0,v.useMemo)((()=>{var e,i,t;const o=`${null===(e=M)||void 0===e?void 0:e.token0.symbol}/${null===(i=M)||void 0===i?void 0:i.token1.symbol}`,n=(null===(t=R)||void 0===t?void 0:t.label)??"Ethereum";return{title:o,url:window.location.href,description:`Swap ${o} on ${n}. Trade tokens and provide liquidity. Real-time prices, charts, transaction data, and more.`}}),[null===(c=R)||void 0===c?void 0:c.label,null===(u=M)||void 0===u?void 0:u.token0.symbol,null===(p=M)||void 0===p?void 0:p.token1.symbol]),ne=(0,Mt.X)(oe);return ie?(0,o.jsx)(Bt.default,{}):(0,o.jsxs)(Ke.f6,{token0:K!==Y?K:void 0,token1:J!==Y?J:void 0,children:[(0,o.jsxs)(Ot.Helmet,{children:[(0,o.jsx)("title",{children:Rt(M)}),ne.map(((e,i)=>(0,o.jsx)("meta",{...e},i)))]}),(0,o.jsx)(l.fM,{page:n.yJ.POOL_DETAILS_PAGE,properties:{poolAddress:B,chainId:null===(m=R)||void 0===m?void 0:m.id,feeTier:null===(h=M)||void 0===h?void 0:h.feeTier,token0Address:null===(x=M)||void 0===x?void 0:x.token0.address,token1Address:null===(f=M)||void 0===f?void 0:f.token1.address,token0Symbol:null===(g=M)||void 0===g?void 0:g.token0.symbol,token1Symbol:null===(j=M)||void 0===j?void 0:j.token1.symbol,token0Name:null===(k=M)||void 0===k?void 0:k.token0.name,token1Name:null===(y=M)||void 0===y?void 0:y.token1.name},shouldLogImpression:!O,children:(0,o.jsxs)(Vt,{children:[(0,o.jsxs)(qt,{children:[(0,o.jsxs)(a.ZP,{gap:"20px",children:[(0,o.jsxs)(a.ZP,{children:[(0,o.jsx)(Me,{chainId:null===(w=R)||void 0===w?void 0:w.id,poolAddress:B,token0:H,token1:z,loading:O}),(0,o.jsx)(ze,{chainId:null===(P=R)||void 0===P?void 0:P.id,poolAddress:B,token0:H,token1:z,feeTier:null===(b=M)||void 0===b?void 0:b.feeTier,protocolVersion:null===(T=M)||void 0===T?void 0:T.protocolVersion,toggleReversed:F,loading:O})]}),(0,o.jsx)(te,{poolData:M,loading:O,isReversed:V,chain:null===(I=R)||void 0===I?void 0:I.backendChain.chain})]}),(0,o.jsx)(Ft,{}),(0,o.jsx)(St,{poolAddress:B,token0:H,token1:z,protocolVersion:null===(C=M)||void 0===C?void 0:C.protocolVersion})]}),(0,o.jsxs)(Zt,{children:[(0,o.jsx)(Wi,{chainId:null===(D=R)||void 0===D?void 0:D.id,token0:H,token1:z,feeTier:null===(_=M)||void 0===_?void 0:_.feeTier,loading:O}),(0,o.jsx)(wi,{poolData:M,isReversed:V,chainId:null===(S=R)||void 0===S?void 0:S.id,loading:O}),(0,o.jsxs)(Xt,{children:[(0,o.jsx)(Ut,{children:(0,o.jsx)(Z.cC,{children:"Links"})}),(0,o.jsxs)(Ht,{children:[(0,o.jsx)(ai,{address:B,chainId:null===(N=R)||void 0===N?void 0:N.id,tokens:[H,z],loading:O}),(0,o.jsx)(ai,{address:null===($=H)||void 0===$?void 0:$.address,chainId:null===(A=R)||void 0===A?void 0:A.id,tokens:[H],loading:O}),(0,o.jsx)(ai,{address:null===(L=z)||void 0===L?void 0:L.address,chainId:null===(E=R)||void 0===E?void 0:E.id,tokens:[z],loading:O})]})]})]})]})})]})}}}]);
//# sourceMappingURL=1557.e580503b.chunk.js.map