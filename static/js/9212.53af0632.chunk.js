"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9212],{73499:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(92936),o=n(6823),r=n(30335),s=n(57221),a=n(14411),l=n(86059);const d=a.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Badge\\RangeBadge__BadgeWrapper",componentId:"sc-52eeb7ae-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,c=a.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Badge\\RangeBadge__BadgeText",componentId:"sc-52eeb7ae-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=a.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Badge\\RangeBadge__ActiveDot",componentId:"sc-52eeb7ae-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=a.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Badge\\RangeBadge__LabelText",componentId:"sc-52eeb7ae-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:t}){const n=(0,a.useTheme)();return(0,i.jsx)(d,{children:e?(0,i.jsx)(l.ud,{text:(0,i.jsx)(o.cC,{children:"Your position has 0 liquidity, and is not earning fees."}),children:(0,i.jsxs)(p,{color:n.neutral2,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{children:"Closed"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})}):t?(0,i.jsx)(l.ud,{text:(0,i.jsx)(o.cC,{children:"The price of this pool is within your selected range. Your position is currently earning fees."}),children:(0,i.jsxs)(p,{color:n.success,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{children:"In range"})}),(0,i.jsx)(u,{})]})}):(0,i.jsx)(l.ud,{text:(0,i.jsx)(o.cC,{children:"The price of this pool is outside of your selected range. Your position is not currently earning fees."}),children:(0,i.jsxs)(p,{color:n.deprecated_accentWarning,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{children:"Out of range"})}),(0,i.jsx)(s.Z,{width:12,height:12})]})})})}},23116:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(92936),o=n(86059),r=n(45779);const s=n(14411).default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\HoverInlineText\\index__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,a=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:a=!1,fontSize:l,textColor:d,link:c,...u})=>{const[p,m]=(0,r.useState)(!1);return e?e.length>t?(0,i.jsx)(o.ZP,{text:e,show:p,children:(0,i.jsx)(s,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:n,adjustSize:a,textColor:d,link:c,fontSize:l,...u,children:" "+e.slice(0,t-1)+"..."})}):(0,i.jsx)(s,{margin:n,adjustSize:a,link:c,fontSize:l,textColor:d,...u,children:e}):(0,i.jsx)("span",{})}},90652:(e,t,n)=>{n.d(t,{N:()=>A,Z:()=>E});var i=n(92936),o=n(76078),r=n(21651),s=n(73499),a=n(23116),l=n(63415),d=n(94284),c=n(39671),u=n(57899),p=n(55660),m=n(6823),x=n(45779),h=n(43454),f=n(31744),g=n(14411),j=n(66869),w=n(54972),I=n(66136),v=n(5347),y=n(47841),_=n(64370);const k=(0,g.default)(h.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionListItem\\index__LinkRow",componentId:"sc-597d0797-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${j.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,S=g.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionListItem\\index__DataLineItem",componentId:"sc-597d0797-1"})`
  font-size: 14px;
`,b=(0,g.default)(S).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionListItem\\index__RangeLineItem",componentId:"sc-597d0797-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,T=g.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionListItem\\index__DoubleArrow",componentId:"sc-597d0797-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,L=(0,g.default)(w.Tv.BodySmall).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionListItem\\index__RangeText",componentId:"sc-597d0797-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,C=(0,g.default)(w.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionListItem\\index__FeeTierText",componentId:"sc-597d0797-5"})`
  margin-left: 8px !important;
  line-height: 12px;
  color: ${({theme:e})=>e.neutral3};
`,P=(0,g.default)(w.Tv.BodySmall).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionListItem\\index__ExtentsText",componentId:"sc-597d0797-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,N=g.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionListItem\\index__PrimaryPositionIdData",componentId:"sc-597d0797-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function A(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([_.h1,_.Hz,_.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(_.Fl),_.ML].some((e=>e&&e.equals(n)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function E({token0:e,token1:t,tokenId:n,fee:h,liquidity:g,tickLower:j,tickUpper:_}){var S,E,D,M,O,R,X;const{formatDelta:q,formatTickPrice:B}=(0,I.Gb)(),$=(0,c.dQ)(e),U=(0,c.dQ)(t),z=$?(0,v.B)($):void 0,Z=U?(0,v.B)(U):void 0,[,G]=(0,p.AI)(z??void 0,Z??void 0,h),V=(0,x.useMemo)((()=>{if(G)return new r.Position({pool:G,liquidity:g.toString(),tickLower:j,tickUpper:_})}),[g,G,j,_]),W=(0,u.Z)(h,j,_),{priceLower:Y,priceUpper:F,quote:K,base:Q}=A(V),H=K&&(0,v.B)(K),J=Q&&(0,v.B)(Q),ee=!!G&&(G.tickCurrent<j||G.tickCurrent>=_),te="/pools/"+n,ne=null===(S=g)||void 0===S?void 0:S.eq(0);return(0,i.jsxs)(k,{to:te,children:[(0,i.jsxs)(d.m0,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(y.ge,{currencies:[J,H],size:18}),(0,i.jsxs)(w.Tv.SubHeader,{children:["\xa0",null===(E=H)||void 0===E?void 0:E.symbol,"\xa0/\xa0",null===(D=J)||void 0===D?void 0:D.symbol]}),(0,i.jsx)(C,{children:q(parseFloat(new o.Percent(h,1e6).toSignificant()))})]}),(0,i.jsx)(s.Z,{removed:ne,inRange:!ee})]}),Y&&F?(0,i.jsxs)(b,{children:[(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(m.cC,{children:"Min: "})}),(0,i.jsxs)("span",{children:[B({price:Y,atLimit:W,direction:f.Mb.LOWER})," "]}),(0,i.jsxs)(m.cC,{children:[(0,i.jsx)(a.Z,{text:null===(M=H)||void 0===M?void 0:M.symbol})," per ",(0,i.jsx)(a.Z,{text:(null===(O=J)||void 0===O?void 0:O.symbol)??""})]})]})," ",(0,i.jsxs)(w.Pw,{children:[(0,i.jsx)(T,{children:"\u2194"})," "]}),(0,i.jsxs)(w.Z,{children:[(0,i.jsx)(T,{children:"\u2194"})," "]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(m.cC,{children:"Max:"})}),(0,i.jsxs)("span",{children:[B({price:F,atLimit:W,direction:f.Mb.UPPER})," "]}),(0,i.jsxs)(m.cC,{children:[(0,i.jsx)(a.Z,{text:null===(R=H)||void 0===R?void 0:R.symbol})," per"," ",(0,i.jsx)(a.Z,{maxCharacters:10,text:null===(X=J)||void 0===X?void 0:X.symbol})]})]})]}):(0,i.jsx)(l.ZP,{})]})}},57899:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(21651),o=n(45779),r=n(31744);function s(e,t,n){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,t,n])}},55660:(e,t,n)=>{n.d(t,{$o:()=>w,AI:()=>j,Oh:()=>g,tK:()=>f});var i=n(51371),o=n(76078),r=n(87270),s=n(21651),a=n(21891),l=n(61592),d=n.n(l),c=n(84938),u=n(45779),p=n(72993);function m(e,t,n,i,o,r,s){try{var a=e[r](s),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,o)}const x=new i.vU(r.Mt);let h=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:r}=n,a=`${e}:${o}:${r}:${i.toString()}`,l=this.addresses.find((e=>e.key===a));if(l)return l.address;const d={key:a,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(d),d.address}static getPool(e,t,n,i,o,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find((s=>s.token0===e&&s.token1===t&&s.fee===n&&d().EQ(s.sqrtRatioX96,i)&&d().EQ(s.liquidity,o)&&s.tickCurrent===r));if(a)return a;const l=new s.Pool(e,t,n,i,o,r);return this.pools.unshift(l),l}};var f;function g(e){const t=(0,p.x)(),n=(0,u.useMemo)((()=>t?e.map((([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,o=t.wrapped;if(i.equals(o))return;return i.sortsBefore(o)?[i,o,n]:[o,i,n]}})):new Array(e.length)),[t,e]),i=(0,u.useMemo)((()=>{const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return e?n.map((t=>t&&h.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]),r=(0,c._Y)(i,x,"slot0"),s=(0,c._Y)(i,x,"liquidity");return(0,u.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[f.INVALID,null];const[o,a,l]=i;if(!r[t])return[f.INVALID,null];const{result:d,loading:c,valid:u}=r[t];if(!s[t])return[f.INVALID,null];const{result:p,loading:m,valid:x}=s[t];if(!i||!u||!x)return[f.INVALID,null];if(c||m)return[f.LOADING,null];if(!d||!p)return[f.NOT_EXISTS,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[f.NOT_EXISTS,null];try{const e=h.getPool(o,a,l,d.sqrtPriceX96,p[0],d.tick);return[f.EXISTS,e]}catch(g){return console.error("Error when constructing the pool",g),[f.NOT_EXISTS,null]}}))),[s,e,r,n])}function j(e,t,n){return g((0,u.useMemo)((()=>[[e,t,n]]),[e,t,n]))[0]}function w(e,t,n,i){const l=(0,u.useRef)([f.LOADING,null]),d=e&&t&&n?h.getPoolAddress(o.V3_CORE_FACTORY_ADDRESSES[i],e,t,n):void 0,c=(0,u.useMemo)((()=>d?{[i]:d}:{}),[i,d]),p=(0,a.SO)(c,r.Mt)[i];return(0,u.useEffect)((()=>{function i(){var o;return o=function*(){try{if(!e||!t||!n||!d||!p)return void(l.current=[f.INVALID,null]);const i=yield p.slot0(),o=yield p.liquidity();l.current=[f.NOT_EXISTS,null];const r=new s.Pool(e,t,n,i.sqrtPriceX96.toString(),o.toString(),i.tick);l.current=[f.EXISTS,r]}catch(i){l.current=[f.INVALID,null]}},i=function(){var e=this,t=arguments;return new Promise((function(n,i){var r=o.apply(e,t);function s(e){m(r,n,i,s,a,"next",e)}function a(e){m(r,n,i,s,a,"throw",e)}s(void 0)}))},i.apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[p,n,d,e,t]),l.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(f||(f={}))},40413:(e,t,n)=>{n.d(t,{W:()=>d,n:()=>l});var i=n(11604),o=n(84938),r=n(45779),s=n(7151);function a(e){var t;const n=(0,s.GL)(),a=(0,r.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),l=(0,o.es)(n,"positions",a),d=(0,r.useMemo)((()=>l.some((({loading:e})=>e))),[l]),c=(0,r.useMemo)((()=>l.some((({error:e})=>e))),[l]),u=(0,r.useMemo)((()=>{if(!d&&!c&&e)return l.map(((t,n)=>{const i=e[n],o=t.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[d,c,l,e]);return{loading:d,positions:null===(t=u)||void 0===t?void 0:t.map(((e,t)=>({...e,tokenId:a[t][0]})))}}function l(e){var t;const n=a(e?[e]:void 0);return{loading:n.loading,position:null===(t=n.positions)||void 0===t?void 0:t[0]}}function d(e){var t,n;const l=(0,s.GL)(),{loading:d,result:c}=(0,o.Wk)(l,"balanceOf",[e??void 0]),u=null===(n=c)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toNumber(),p=(0,r.useMemo)((()=>{if(u&&e){const t=[];for(let n=0;n<u;n++)t.push([e,n]);return t}return[]}),[e,u]),m=(0,o.es)(l,"tokenOfOwnerByIndex",p),x=(0,r.useMemo)((()=>m.some((({loading:e})=>e))),[m]),h=(0,r.useMemo)((()=>e?m.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,m]),{positions:f,loading:g}=a(h);return{loading:x||d||g,positions:f}}}}]);
//# sourceMappingURL=9212.53af0632.chunk.js.map