"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4583],{34583:(e,n,o)=>{o.r(n),o.d(n,{default:()=>gn});var i=o(92936),t=o(76078),a=o(26729),l=o(5985),r=o(47583),s=o(98961),d=o(79833),c=o(55575),u=o(26431),p=o(67968),h=o(71805),m=o(64370),v=o(18569),x=o(39671),f=o(97341),j=o(76110),k=o(6823),y=o(76568),C=o(76437),g=o(45779),T=o(51578),w=o(6282),b=o(14411),I=o(38004),N=o(57852),D=o(13446),B=o(25160);function M(e,n,o,i){const t=(0,N.ht)(n)?(0,N.bt)({chainId:n}).assetRepoNetworkName??"ethereum":"ethereum",a=(0,D.UJ)(e);return n&&(0,m.NL)(n)&&e===(0,m.gX)(n).wrapped.address?B.Z:a?`https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/${t}/assets/${a}/logo.png`:i??void 0}var P=o(94284),_=o(35607),S=o(60847),V=o(95564),$=o(75748),A=o(99582),E=o(42183),L=o(70559);const F=20;var U=o(64505);const W=[S.Oz.Transactions];function Z({chainId:e,referenceToken:n}){const o=(0,U.Dv)(S.AY),a=(0,U.Dv)(S.$E),l=(0,g.useMemo)((()=>({sortBy:o,sortDirection:a?v.N9.Asc:v.N9.Desc})),[a,o]),{pools:r,loading:s,errorV2:d,errorV3:c,loadMore:u}=function(e,n,o){var i,a,l,r;const s=(0,L.ye)(E.TP.V2Explore),{loading:d,error:c,data:u,fetchMore:p}=(0,A.p71)({variables:{first:F,tokenAddress:e,chain:(0,N.tq)({chainId:o,withFallback:!0})}}),{loading:h,error:m,data:v,fetchMore:x}=(0,A.wMB)({variables:{first:F,tokenAddress:e,chain:(0,N.tq)({chainId:o,withFallback:!0})},skip:!o||o!==t.ChainId.MAINNET&&!s}),f=d||h,j=(0,g.useRef)(!1),k=(0,g.useRef)(!1),y=(0,g.useRef)(F),C=(0,g.useCallback)((({onComplete:e})=>{var n,i,a,l,r,d,c,h;j.current||k.current&&(o===t.ChainId.MAINNET||s)||(j.current=!0,k.current=!0,y.current+=F,p({variables:{cursor:null===(l=u)||void 0===l||null===(a=l.topV3Pools)||void 0===a||null===(i=a[u.topV3Pools.length-1])||void 0===i||null===(n=i.totalLiquidity)||void 0===n?void 0:n.value},updateQuery:(n,{fetchMoreResult:i})=>{var a;if(!i||!n||!Object.keys(n).length)return n;k.current&&(o===t.ChainId.MAINNET||s)||null===(a=e)||void 0===a||a();const l={topV3Pools:[...(n.topV3Pools??[]).slice(),...(i.topV3Pools??[]).slice()]};return j.current=!1,l}}),(o===t.ChainId.MAINNET||s)&&x({variables:{cursor:null===(h=v)||void 0===h||null===(c=h.topV2Pairs)||void 0===c||null===(d=c[v.topV2Pairs.length-1])||void 0===d||null===(r=d.totalLiquidity)||void 0===r?void 0:r.value},updateQuery:(n,{fetchMoreResult:o})=>{var i;if(!o||!n||!Object.keys(n).length)return n;j.current||null===(i=e)||void 0===i||i();const t={topV2Pairs:[...(n.topV2Pairs??[]).slice(),...(o.topV2Pairs??[]).slice()]};return k.current=!1,t}}))}),[o,null===(i=v)||void 0===i?void 0:i.topV2Pairs,null===(a=u)||void 0===a?void 0:a.topV3Pools,x,p,s]);return(0,g.useMemo)((()=>{var e,o,i,t;const a=(null===(o=u)||void 0===o||null===(e=o.topV3Pools)||void 0===e?void 0:e.map((e=>{var n,o,i,t,a;return{hash:e.address,token0:e.token0,token1:e.token1,txCount:e.txCount,tvl:null===(n=e.totalLiquidity)||void 0===n?void 0:n.value,volume24h:null===(o=e.volume24h)||void 0===o?void 0:o.value,volumeWeek:null===(i=e.volumeWeek)||void 0===i?void 0:i.value,oneDayApr:(0,$.zl)(null===(t=e.volume24h)||void 0===t?void 0:t.value,null===(a=e.totalLiquidity)||void 0===a?void 0:a.value,e.feeTier),feeTier:e.feeTier,protocolVersion:e.protocolVersion}})))??[],l=(null===(t=v)||void 0===t||null===(i=t.topV2Pairs)||void 0===i?void 0:i.map((e=>{var n,o,i,t,a;return{hash:e.address,token0:e.token0,token1:e.token1,txCount:e.txCount,tvl:null===(n=e.totalLiquidity)||void 0===n?void 0:n.value,volume24h:null===(o=e.volume24h)||void 0===o?void 0:o.value,volumeWeek:null===(i=e.volumeWeek)||void 0===i?void 0:i.value,oneDayApr:(0,$.zl)(null===(t=e.volume24h)||void 0===t?void 0:t.value,null===(a=e.totalLiquidity)||void 0===a?void 0:a.value,$.y9),feeTier:$.y9,protocolVersion:e.protocolVersion}})))??[],r=(0,$.s$)([...a,...l],n).slice(0,y.current);return{loading:f,errorV2:m,errorV3:c,pools:r,loadMore:C}}),[null===(l=v)||void 0===l?void 0:l.topV2Pairs,null===(r=u)||void 0===r?void 0:r.topV3Pools,m,c,C,f,n])}(n.address,l,e),p=d&&c?new _.cA({errorMessage:`Could not retrieve V2 and V3 Pools for token ${n.address} on chain: ${e}`}):void 0,h=s&&!r.length;(0,V.cn)({chainId:e,errorV3:c,errorV2:d});const m=(0,U.oC)(S.AY),x=(0,U.oC)(S.$E);return(0,g.useEffect)((()=>{m(),x()}),[x,m]),(0,i.jsx)("div",{"data-testid":`tdp-pools-table-${n.address.toLowerCase()}`,children:(0,i.jsx)(S.NE,{pools:r,loading:h,error:p,chainId:e,maxHeight:600,hiddenColumns:W,loadMore:u})})}var O,R=o(54972),q=o(73705),z=o(66789),H=o(53083),G=o(57144),Q=o(23388);!function(e){e.BUY="Buy",e.SELL="Sell"}(O||(O={}));const Y=25;var X=o(63945),J=o(95685),K=o(66136),ee=o(54703);const ne=(0,b.default)(R.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\tables\\TransactionsTable__StyledSwapAmount",componentId:"sc-42ab2e91-0"})`
  display: inline-block;
  ${R.cw}
  max-width: 75px;
`,oe=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\tables\\TransactionsTable__TableWrapper",componentId:"sc-42ab2e91-1"})`
  min-height: 158px;
`;function ie({chainId:e,referenceToken:n}){const o=(0,J.XB)(),{formatNumber:a,formatFiatPrice:l}=(0,K.Gb)(),[r,s]=(0,g.useReducer)((e=>!e),!1),[d,c]=(0,g.useState)([O.BUY,O.SELL]),[u]=(0,g.useState)({sortBy:X.AI.Timestamp,sortDirection:X.N9.Desc}),{transactions:p,loading:h,loadMore:m,errorV2:x,errorV3:f}=function(e,n,o=[O.BUY,O.SELL]){var i,a,l,r,s,d,c,u;const p=(0,L.ye)(E.TP.V2Explore),{data:h,loading:m,fetchMore:v,error:x}=(0,A.KfE)({variables:{address:e.toLowerCase(),chain:(0,N.tq)({chainId:n,withFallback:!0}),first:Y}}),{data:f,loading:j,error:k,fetchMore:y}=(0,A.t5Z)({variables:{address:e.toLowerCase(),first:Y,chain:(0,N.tq)({chainId:n})},skip:n!==t.ChainId.MAINNET&&!p}),C=(0,g.useRef)(!1),T=(0,g.useRef)(!1),w=(0,g.useRef)(Y),b=(0,g.useCallback)((({onComplete:e})=>{var o,i,a,l,r,s,d,c,u,m;C.current||T.current&&(n===t.ChainId.MAINNET||p)||(C.current=!0,T.current=!0,w.current+=Y,v({variables:{cursor:null===(r=h)||void 0===r||null===(l=r.token)||void 0===l||null===(a=l.v3Transactions)||void 0===a||null===(o=a[(null===(i=h.token)||void 0===i?void 0:i.v3Transactions.length)-1])||void 0===o?void 0:o.timestamp},updateQuery:(o,{fetchMoreResult:i})=>{var a,l,r,s,d,c,u;if(!i)return o;T.current&&(n===t.ChainId.MAINNET||p)||null===(a=e)||void 0===a||a();const h={token:{...o.token,id:(null===(r=o)||void 0===r||null===(l=r.token)||void 0===l?void 0:l.id)??"",chain:(null===(d=o)||void 0===d||null===(s=d.token)||void 0===s?void 0:s.chain)??A.qop.Ethereum,v3Transactions:[...(null===(c=o.token)||void 0===c?void 0:c.v3Transactions)??[],...(null===(u=i.token)||void 0===u?void 0:u.v3Transactions)??[]]}};return C.current=!1,h}}),(n===t.ChainId.MAINNET||p)&&y({variables:{cursor:null===(m=f)||void 0===m||null===(u=m.token)||void 0===u||null===(c=u.v2Transactions)||void 0===c||null===(s=c[(null===(d=f.token)||void 0===d?void 0:d.v2Transactions.length)-1])||void 0===s?void 0:s.timestamp},updateQuery:(n,{fetchMoreResult:o})=>{var i,t,a,l,r,s,d;if(!o)return n;C.current||null===(i=e)||void 0===i||i();const c={token:{...n.token,id:(null===(a=n)||void 0===a||null===(t=a.token)||void 0===t?void 0:t.id)??"",chain:(null===(r=n)||void 0===r||null===(l=r.token)||void 0===l?void 0:l.chain)??A.qop.Ethereum,v2Transactions:[...(null===(s=n.token)||void 0===s?void 0:s.v2Transactions)??[],...(null===(d=o.token)||void 0===d?void 0:d.v2Transactions)??[]]}};return T.current=!1,c}}))}),[n,null===(a=f)||void 0===a||null===(i=a.token)||void 0===i?void 0:i.v2Transactions,null===(r=h)||void 0===r||null===(l=r.token)||void 0===l?void 0:l.v3Transactions,y,v,p]),I=(0,g.useMemo)((()=>{var n,i,t,a,l,r;return[...(null===(t=h)||void 0===t||null===(i=t.token)||void 0===i||null===(n=i.v3Transactions)||void 0===n?void 0:n.filter((n=>{var i;if(!n)return!1;const t=(null===(i=(parseFloat(n.token0Quantity)<0?n.token0:n.token1).address)||void 0===i?void 0:i.toLowerCase())===e.toLowerCase();return n.type===A.uGm.Swap&&o.includes(t?O.SELL:O.BUY)})))??[],...(null===(r=f)||void 0===r||null===(l=r.token)||void 0===l||null===(a=l.v2Transactions)||void 0===a?void 0:a.filter((n=>{var i;if(!n)return!1;const t=(null===(i=(parseFloat(n.token0Quantity)<0?n.token0:n.token1).address)||void 0===i?void 0:i.toLowerCase())===e.toLowerCase();return n.type===A.uGm.Swap&&o.includes(t?O.SELL:O.BUY)})))??[]].sort(((e,n)=>{var o,i,t;return(null===(o=e)||void 0===o?void 0:o.timestamp)&&(null===(i=n)||void 0===i?void 0:i.timestamp)?n.timestamp-e.timestamp:null===(null===(t=e)||void 0===t?void 0:t.timestamp)?-1:1})).slice(0,w.current)}),[e,null===(d=f)||void 0===d||null===(s=d.token)||void 0===s?void 0:s.v2Transactions,null===(u=h)||void 0===u||null===(c=u.token)||void 0===c?void 0:c.v3Transactions,o]);return(0,g.useMemo)((()=>({transactions:I,loading:m||j,loadMore:b,errorV2:k,errorV3:x})),[I,m,j,b,k,x])}(n.address,e,d),j=x&&f?new _.cA({errorMessage:`Could not retrieve V2 and V3 Transactions for token: ${n.address} on chain: ${e}`}):void 0,y=h&&!p.length;(0,V.cn)({chainId:e,errorV3:f,errorV2:x});const C=(0,v.vR)(e,n),T=(0,g.useMemo)((()=>p.map((e=>{const n={address:e.token0.address,symbol:e.token0.symbol,amount:parseFloat(e.token0Quantity),token:e.token0},o={address:e.token1.address,symbol:e.token1.symbol,amount:parseFloat(e.token1Quantity),token:e.token1},i=parseFloat(e.token0Quantity)>0;return{hash:e.hash,timestamp:e.timestamp,input:i?n:o,output:i?o:n,usdValue:e.usdValue.value,makerAddress:e.account}}))),[p]),w=y||!!j,b=(0,g.useMemo)((()=>{const t=(0,q.Cl)();return[t.accessor((e=>e),{id:"timestamp",header:()=>(0,i.jsx)(H.b,{minWidth:120,justifyContent:"flex-start",grow:!0,children:(0,i.jsxs)(P.ZP,{gap:"xs",children:[u.sortBy===X.AI.Timestamp&&(0,i.jsx)(Q.iX,{direction:u.sortDirection}),(0,i.jsx)(Q.Hu,{$active:u.sortBy===X.AI.Timestamp,children:(0,i.jsx)(k.cC,{children:"Time"})})]})}),cell:n=>{var o,t,a,l;return(0,i.jsx)(H.b,{loading:w,minWidth:120,justifyContent:"flex-start",grow:!0,children:(0,i.jsx)(Q._q,{timestamp:Number(null===(o=(t=n).getValue)||void 0===o?void 0:o.call(t).timestamp),link:(0,ee.E)(e,null===(a=(l=n).getValue)||void 0===a?void 0:a.call(l).hash,ee.r.TRANSACTION)})})}}),t.accessor((e=>e.output.address),{id:"swap-type",header:()=>(0,i.jsx)(H.b,{minWidth:75,justifyContent:"flex-start",grow:!0,children:(0,i.jsxs)(Q.j4,{modalOpen:r,onClick:s,children:[(0,i.jsx)(G.w,{allFilters:Object.values(O),activeFilter:d,setFilters:c,isOpen:r,toggleFilterModal:s}),(0,i.jsx)(R.Tv.BodySecondary,{children:(0,i.jsx)(k.cC,{children:"Type"})})]})}),cell:e=>{var o,t;const a=String(null===(o=(t=e).getValue)||void 0===o?void 0:o.call(t)).toLowerCase()===n.address.toLowerCase();return(0,i.jsx)(H.b,{loading:w,minWidth:75,justifyContent:"flex-start",grow:!0,children:(0,i.jsx)(R.Tv.BodyPrimary,{color:a?"success":"critical",children:a?(0,i.jsx)(k.cC,{children:"Buy"}):(0,i.jsx)(k.cC,{children:"Sell"})})})}}),t.accessor((e=>{var o;return(null===(o=e.input.address)||void 0===o?void 0:o.toLowerCase())===n.address.toLowerCase()?e.input.amount:e.output.amount}),{id:"reference-amount",header:()=>(0,i.jsx)(H.b,{minWidth:100,justifyContent:"flex-end",children:(0,i.jsxs)(R.Tv.BodySecondary,{children:["$",C.symbol]})}),cell:e=>{var n,o;return(0,i.jsx)(H.b,{loading:w,minWidth:100,justifyContent:"flex-end",children:(0,i.jsx)(R.Tv.BodyPrimary,{children:a({input:Math.abs(null===(n=(o=e).getValue)||void 0===n?void 0:n.call(o))||0})})})}}),t.accessor((e=>{var o;const t=(null===(o=e.input.address)||void 0===o?void 0:o.toLowerCase())===n.address.toLowerCase()?e.output:e.input;return(0,i.jsxs)(P.ZP,{gap:"8px",justify:"flex-end",children:[(0,i.jsx)(ne,{children:a({input:Math.abs(t.amount)||0})}),(0,i.jsx)(Q.Jn,{token:t.token})]})}),{id:"non-reference-amount",header:()=>(0,i.jsx)(H.b,{minWidth:160,justifyContent:"flex-end",children:(0,i.jsx)(R.Tv.BodySecondary,{children:(0,i.jsx)(k.cC,{children:"For"})})}),cell:e=>{var n,o;return(0,i.jsx)(H.b,{loading:w,minWidth:160,justifyContent:"flex-end",children:null===(n=(o=e).getValue)||void 0===n?void 0:n.call(o)})}}),t.accessor((e=>e.usdValue),{id:"fiat-value",header:()=>(0,i.jsx)(H.b,{minWidth:125,justifyContent:"flex-end",children:(0,i.jsxs)(P.ZP,{gap:"xs",justify:"flex-end",children:[u.sortBy===X.AI.AmountUsd&&(0,i.jsx)(Q.iX,{direction:u.sortDirection}),(0,i.jsx)(Q.Hu,{$active:u.sortBy===X.AI.AmountUsd,children:o})]})}),cell:e=>{var n,o;return(0,i.jsx)(H.b,{loading:w,minWidth:125,justifyContent:"flex-end",children:(0,i.jsx)(R.Tv.BodyPrimary,{children:l({price:null===(n=(o=e).getValue)||void 0===n?void 0:n.call(o)})})})}}),t.accessor((e=>e.makerAddress),{id:"maker-address",header:()=>(0,i.jsx)(H.b,{minWidth:150,justifyContent:"flex-end",children:(0,i.jsx)(R.Tv.BodySecondary,{children:(0,i.jsx)(k.cC,{children:"Wallet"})})}),cell:n=>{var o,t,a,l;return(0,i.jsx)(H.b,{loading:w,minWidth:150,justifyContent:"flex-end",children:(0,i.jsx)(Q.Bq,{href:(0,ee.E)(e,null===(o=(t=n).getValue)||void 0===o?void 0:o.call(t),ee.r.ADDRESS),children:(0,D.Xn)(null===(a=(l=n).getValue)||void 0===a?void 0:a.call(l))})})}})]}),[u.sortBy,u.sortDirection,w,e,r,d,n.address,C.symbol,a,o,l]);return(0,i.jsx)(oe,{children:(0,i.jsx)(z.i,{columns:b,data:T,loading:y,error:j,loadMore:m,maxHeight:600})})}const te=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ActivitySection__Container",componentId:"sc-7afc6c41-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
`,ae=(0,b.default)(R.Tv.HeadlineMedium).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ActivitySection__Tab",componentId:"sc-7afc6c41-1"})`
  cursor: pointer;
  color: ${({isActive:e,theme:n})=>e?n.neutral1:n.neutral2};
  ${R.iV};
`;var le;function re(){const{wrapped:e,chainId:n}=(0,C.U)().currency,[o,t]=(0,g.useState)(le.Txs);return e?(0,i.jsxs)(te,{"data-testid":"token-details-activity-section",children:[(0,i.jsxs)(P.ZP,{gap:"24px",marginBottom:"24px",id:"activity-header",children:[(0,i.jsx)(ae,{isActive:o===le.Txs,onClick:()=>t(le.Txs),children:(0,i.jsx)(k.cC,{children:"Transactions"})}),(0,i.jsx)(ae,{isActive:o===le.Pools,onClick:()=>t(le.Pools),children:(0,i.jsx)(k.cC,{children:"Pools"})})]}),o===le.Txs&&(0,i.jsx)(ie,{chainId:n,referenceToken:e}),o===le.Pools&&(0,i.jsx)(Z,{chainId:n,referenceToken:e})]}):null}!function(e){e[e.Txs=0]="Txs",e[e.Pools=1]="Pools"}(le||(le={}));var se=o(47236);const de=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalancesCard",componentId:"sc-54204908-0"})`
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: fit-content;
  width: 100%;

  // 768 hardcoded to match NFT-redesign navbar breakpoints
  // src/nft/css/sprinkles.css.ts
  // change to match theme breakpoints when this navbar is updated
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,ce=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceSection",componentId:"sc-54204908-1"})`
  height: fit-content;
  width: 100%;
`,ue=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceRow",componentId:"sc-54204908-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`,pe=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceItem",componentId:"sc-54204908-3"})`
  display: flex;
  align-items: center;
`,he=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceAmountsContainer",componentId:"sc-54204908-4"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 12px;
`,me=({currency:e,chainId:n=t.ChainId.MAINNET,gqlBalance:o,onClick:a})=>{var l,r,s,d,c;const{formatNumber:u}=(0,K.Gb)(),p=(0,g.useMemo)((()=>[e]),[e]),h=u({input:null===(l=o)||void 0===l?void 0:l.quantity,type:K.sw.TokenNonTx}),m=u({input:null===(s=o)||void 0===s||null===(r=s.denominatedValue)||void 0===r?void 0:r.value,type:K.sw.PortfolioBalance});return(0,i.jsxs)(ue,{onClick:a,children:[(0,i.jsx)(se.V,{currencies:p,chainId:n,images:[null===(c=o)||void 0===c||null===(d=c.tokenProjectMarket)||void 0===d?void 0:d.tokenProject.logoUrl],size:32}),(0,i.jsxs)(he,{children:[(0,i.jsx)(pe,{children:(0,i.jsx)(R.Tv.BodyPrimary,{children:m})}),(0,i.jsx)(pe,{children:(0,i.jsx)(R.Tv.BodySecondary,{children:h})})]})]})},ve=({pageChainBalance:e})=>{var n;if(!e||!e.token)return null;const o=(0,v.Pc)(e.token);return(0,i.jsxs)(ce,{children:[(0,i.jsx)(R.Tv.HeadlineSmall,{color:"neutral1",children:(0,i.jsx)(k.cC,{children:"Your balance"})}),(0,i.jsx)(me,{currency:o,chainId:null===(n=o)||void 0===n?void 0:n.chainId,gqlBalance:e})]})},xe=({otherChainBalances:e,hasPageChainBalance:n})=>{const o=(0,w.s0)();return e.length?(0,i.jsxs)(ce,{children:[n?(0,i.jsx)(R.Tv.SubHeaderSmall,{children:(0,i.jsx)(k.cC,{children:"On other networks"})}):(0,i.jsx)(R.Tv.HeadlineSmall,{children:(0,i.jsx)(k.cC,{children:"Balance on other networks"})}),e.map((e=>{const n=e.token&&(0,v.Pc)(e.token),a=(e.token&&(0,v.Tz)(e.token.chain))??t.ChainId.MAINNET;return(0,i.jsx)(me,{currency:n,chainId:a,gqlBalance:e,onClick:()=>{var n,i;return o((0,v.dG)({address:null===(n=e.token)||void 0===n?void 0:n.address,chain:(null===(i=e.token)||void 0===i?void 0:i.chain)??A.qop.Ethereum}))}},e.id)}))]}):null};function fe(){var e;const{account:n}=(0,a.G)(),{currencyChain:o,multiChainMap:t}=(0,C.U)(),l=null===(e=t[o])||void 0===e?void 0:e.balance,r=[];for(const[i,a]of Object.entries(t)){var s;i!==o&&void 0!==(null===(s=a)||void 0===s?void 0:s.balance)&&r.push(a.balance)}const d=l||Boolean(r.length);return n&&d?(0,i.jsxs)(de,{children:[(0,i.jsx)(ve,{pageChainBalance:l}),(0,i.jsx)(xe,{otherChainBalances:r,hasPageChainBalance:!!l})]}):null}var je=o(62587);const ke=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__Wrapper",componentId:"sc-fcfa31a9-0"})`
  align-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral2};
  display: none;
  flex-direction: row;
  font-weight: 535;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  position: fixed;
  z-index: ${je.k.sticky};
  border-radius: 20px;
  bottom: 56px;
  margin: 8px;
  padding: 12px 32px;
  width: calc(100vw - 16px);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: flex;
  }
`,ye=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-fcfa31a9-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 20px;
  line-height: 20px;
  display: flex;
  gap: 8px;
`,Ce=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__Balance",componentId:"sc-fcfa31a9-2"})`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,ge=b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-fcfa31a9-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`,Te=(0,b.default)(R.Tv.Caption).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__FiatValue",componentId:"sc-fcfa31a9-4"})`
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,we=(0,b.default)(R.m_).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__SwapButton",componentId:"sc-fcfa31a9-5"})`
  background-color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: 22px;
  color: ${({theme:e})=>e.neutralContrast};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 535;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function be(){var e,n,o,t;const{currency:l,multiChainMap:r,currencyChain:s}=(0,C.U)(),d=(0,N.Jw)(l.chainId),c=null===(e=r[s])||void 0===e?void 0:e.balance,{account:u}=(0,a.G)(),{formatNumber:p}=(0,K.Gb)(),h=p({input:null===(n=c)||void 0===n?void 0:n.quantity,type:K.sw.TokenNonTx}),v=p({input:null===(t=c)||void 0===t||null===(o=t.denominatedValue)||void 0===o?void 0:o.value,type:K.sw.PortfolioBalance}),x=(0,N.tq)({chainId:d})??"";return(0,i.jsxs)(ke,{children:[Boolean(u&&c)&&(0,i.jsxs)(ge,{children:[(0,i.jsx)(k.cC,{children:"Your balance"}),(0,i.jsxs)(Ce,{children:[(0,i.jsxs)(ye,{children:[h," ",l.symbol]}),(0,i.jsx)(Te,{children:v})]})]}),(0,i.jsx)(we,{to:`/swap?chain=${x}&outputCurrency=${l.isNative?m.dt:l.address}`,children:(0,i.jsx)(k.cC,{children:"Swap"})})]})}var Ie=o(44591),Ne=o(18124),De=o(88890),Be=o(68291),Me=o(6239),Pe=o(41886),_e=o(86059),Se=o(50333),Ve=o(18034),$e=o(94191);const Ae=(0,b.default)(Ie.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenInfoSection",componentId:"sc-7ae57a64-0"})`
  gap: 16px;
  width: 100%;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    gap: 24px;
  }
`,Ee=(0,b.default)(R.Tv.HeadlineSmall).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDescription__InfoSectionHeader",componentId:"sc-7ae57a64-1"})`
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    font-size: 28px !important;
    line-height: 36px !important;
  }
`,Le=(0,b.default)(P.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenNameRow",componentId:"sc-7ae57a64-2"})`
  gap: 8px;
  width: 100%;
`,Fe=(0,b.default)(Le).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenButtonRow",componentId:"sc-7ae57a64-3"})`
  flex-wrap: wrap;
`,Ue=(0,b.default)(P.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenInfoButton",componentId:"sc-7ae57a64-4"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({theme:e})=>e.neutral1};
  background-color: ${({theme:e})=>e.surface2};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${R.iV}
`,We=(0,b.default)(R.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenDescriptionContainer",componentId:"sc-7ae57a64-5"})`
  ${R.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,Ze=b.default.p.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-7ae57a64-6"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,Oe=200;function Re(){var e,n;const{address:o,currency:a,tokenQuery:l}=(0,C.U)(),{neutral2:r}=(0,b.useTheme)(),{description:s,homepageUrl:d,twitterName:c}=(null===(n=l.data)||void 0===n||null===(e=n.token)||void 0===e?void 0:e.project)??{},u=(0,ee.E)(a.chainId,o,a.isNative?ee.r.NATIVE:ee.r.TOKEN),[p,h]=(0,Se.Z)(),m=(0,g.useCallback)((()=>{h(o)}),[o,h]),[v,x]=(0,g.useReducer)((e=>!e),!0),f=(0,Pe.Nt)(s??"",Oe),j=!!s&&s.length>Oe,y=j&&v,{inputTax:T,outputTax:w}=(0,Ve.j)(o,o),{formatPercent:I}=(0,K.Gb)(),{sellFeeString:N,buyFeeString:B}={sellFeeString:I(T),buyFeeString:I(w)},M=Boolean(parseFloat(N))||Boolean(parseFloat(w.toFixed(2))),P=N===B;return(0,i.jsxs)(Ae,{"data-testid":"token-details-info-section",children:[(0,i.jsx)(Ee,{children:(0,i.jsx)(k.cC,{children:"Info"})}),(0,i.jsxs)(Fe,{"data-testid":"token-details-info-links",children:[!a.isNative&&(0,i.jsx)(_e.ZP,{placement:"bottom",size:_e.Oz.Max,show:p,text:k.t`Copied`,children:(0,i.jsxs)(Ue,{onClick:m,children:[(0,i.jsx)($e.Z,{width:"18px",height:"18px",color:r}),(0,D.Xn)(a.address)]})}),(0,i.jsx)(R.dL,{href:u,children:(0,i.jsxs)(Ue,{children:[(0,i.jsx)(Ne.P,{width:"18px",height:"18px",fill:r}),a.chainId===t.ChainId.MAINNET?(0,i.jsx)(k.cC,{children:"Etherscan"}):(0,i.jsx)(k.cC,{children:"Explorer"})]})}),d&&(0,i.jsx)(R.dL,{href:d,children:(0,i.jsxs)(Ue,{children:[(0,i.jsx)(De.T,{width:"18px",height:"18px",fill:r}),(0,i.jsx)(k.cC,{children:"Website"})]})}),c&&(0,i.jsx)(R.dL,{href:`https://x.com/${c}`,children:(0,i.jsxs)(Ue,{children:[(0,i.jsx)(Be.E,{width:"18px",height:"18px",fill:r}),(0,i.jsx)(k.cC,{children:"Twitter"})]})})]}),(0,i.jsxs)(We,{children:[!s&&(0,i.jsx)(Pe.aZ,{children:(0,i.jsx)(k.cC,{children:"No token information available"})}),s&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ze,{"data-testid":"token-description-full",$visible:!y,children:s}),(0,i.jsx)(Ze,{"data-testid":"token-description-truncated",$visible:y,children:f})]}),j&&(0,i.jsx)(Pe.ou,{onClick:x,"data-testid":"token-description-show-more-button",children:v?(0,i.jsx)(k.cC,{children:"Show more"}):(0,i.jsx)(k.cC,{children:"Hide"})})]}),M&&(0,i.jsx)(_e.ud,{placement:"left",size:_e.Oz.Small,text:(0,i.jsx)(R.Tv.Caption,{color:"neutral2",children:(0,i.jsx)(Me.gE,{})}),children:(0,i.jsx)(Ie.ZP,{gap:"sm",children:P?(0,i.jsxs)(R.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,i.jsx)(k.cC,{children:"fee:"}),"\xa0",N]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(R.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,i.jsx)(k.cC,{children:"buy fee:"}),"\xa0",B]})," ",(0,i.jsxs)(R.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,i.jsx)(k.cC,{children:"sell fee:"}),"\xa0",N]})," "]})})})]})}var qe=o(75495);const ze=(0,b.default)(Pe.Hr).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\index__DividerLine",componentId:"sc-a751adda-0"})`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    opacity: 0;
    margin-bottom: 0;
  }
`;function He(){const{address:e,currency:n,currencyChain:o}=(0,C.U)();return(0,i.jsxs)(s.zG,{"aria-label":"breadcrumb-nav",children:[(0,i.jsxs)(s.yY,{to:`/explore/${o.toLowerCase()}`,children:[(0,i.jsx)(k.cC,{children:"Explore"})," ",(0,i.jsx)(T.Z,{size:14})]}),(0,i.jsxs)(s.yY,{to:`/explore/tokens/${o.toLowerCase()}`,children:[(0,i.jsx)(k.cC,{children:"Tokens"})," ",(0,i.jsx)(T.Z,{size:14})]}),(0,i.jsx)(s.f3,{address:e,currency:n})]})}function Ge(e){return e?e.isToken?e.address:m.dt:""}function Qe(){var e;const{address:n,currency:o,currencyChain:l,warning:r}=(0,C.U)(),s=(0,a.G)().chainId??t.ChainId.MAINNET,u=(0,w.s0)(),p=(0,g.useCallback)((e=>{const o=Ge(e.inputCurrency),i=Ge(e.outputCurrency);if((0,I.K)(o,n)||(0,I.K)(i,n))return;const t=e.outputCurrency??e.inputCurrency;if(!t)return;const a=M(t.wrapped.address,t.chainId,t.isNative),r=(0,v.dG)({address:t.isNative?null:t.address,chain:l,inputAddress:e.inputCurrency&&e.inputCurrency!==t?o:null});u(r,{state:{preloadedLogoSrc:a}})}),[n,l,u]),h=function(){const{currency:e}=(0,C.U)(),n=(0,j.Z)(),o=(0,g.useMemo)((()=>"string"===typeof n.inputCurrency?n.inputCurrency:void 0),[n]);return(0,x.U8)(o,e.chainId)}(),[m,f]=(0,g.useState)(!1),[k,T]=(0,g.useState)(),b=(0,g.useCallback)((e=>{var n;null===(n=k)||void 0===n||n.resolve(e),T(void 0)}),[k,T]),N=!1===(null===(e=r)||void 0===e?void 0:e.canProceed);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{pointerEvents:N?"none":"auto"},onClick:()=>N&&f(!0),children:(0,i.jsx)(y.HY,{syncTabToUrl:!1,chainId:o.chainId,initialInputCurrency:h,initialOutputCurrency:o,onCurrencyChange:p,disableTokenInputs:o.chainId!==s,compact:!0})}),r&&(0,i.jsx)(d.Z,{tokenAddress:n,warning:r}),(0,i.jsx)(c.Z,{isOpen:m||!!k,token0:o.isToken?o:void 0,onContinue:()=>b(!0),onBlocked:()=>{f(!1)},onCancel:()=>b(!1),showCancel:!0})]})}function Ye({children:e}){const{address:n,currency:o}=(0,C.U)();return(0,i.jsx)(r.fM,{page:l.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:n,tokenSymbol:o.symbol,tokenName:o.name,chainId:o.chainId},shouldLogImpression:!0,children:e})}function Xe(){var e;const{address:n,currency:o,tokenQuery:t}=(0,C.U)(),a=null===(e=t.data)||void 0===e?void 0:e.token,{lg:l}=(0,f.eI)();return(0,i.jsx)(Ye,{children:(0,i.jsxs)(p.Gy,{children:[(0,i.jsxs)(p.WQ,{children:[(0,i.jsx)(He,{}),(0,i.jsx)(p.Pn,{"data-testid":"token-info-container",children:(0,i.jsx)(qe.F,{})}),(0,i.jsx)(u.ZP,{}),(0,i.jsx)(h.ZP,{chainId:o.chainId,address:n,tokenQueryData:a}),(0,i.jsx)(ze,{}),(0,i.jsx)(re,{})]}),(0,i.jsxs)(p.QN,{children:[l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Qe,{}),(0,i.jsx)(fe,{})]}),(0,i.jsx)(Re,{})]}),(0,i.jsx)(be,{})]})})}var Je,Ke=o(69780),en=o(78857),nn=o(72993);function on(){return on=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},on.apply(this,arguments)}function tn(e,n){let{title:o,titleId:i,...t}=e;return g.createElement("svg",on({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":i},t),o?g.createElement("title",{id:i},o):null,Je||(Je=g.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const an=g.forwardRef(tn),ln=(o.p,b.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-2d96f332-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`),rn=b.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\InvalidTokenDetails__InvalidDetailsText",componentId:"sc-2d96f332-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,sn=(0,b.default)(Ke.DF).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\InvalidTokenDetails__TokenExploreButton",componentId:"sc-2d96f332-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function dn({pageChainId:e,isInvalidAddress:n}){const o=(0,nn.x)(),t=(0,N.Nb)(o),a=(0,N.Nb)(e),l=(0,w.s0)(),r=(0,en.Z)(),s=!n&&e===o,d=t?N.T_[o].label:void 0;return(0,i.jsxs)(ln,{children:[(0,i.jsx)(an,{}),n||s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(rn,{children:(0,i.jsx)(k.cC,{children:"This token doesn't exist"})}),(0,i.jsx)(sn,{onClick:()=>l("/tokens"),children:(0,i.jsx)(R.Tv.SubHeader,{children:(0,i.jsx)(k.cC,{children:"Explore tokens"})})})]}):(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsx)(rn,{children:(0,i.jsxs)(k.cC,{children:["This token doesn't exist on ",{connectedChainLabel:d}]})}),(0,i.jsx)(sn,{onClick:()=>r(e),children:(0,i.jsx)(R.Tv.SubHeader,{children:(0,i.jsxs)(k.cC,{children:["Switch to ",{label:a?N.T_[e].label:""}]})})})]})]})}var cn=o(80149),un=o(93741),pn=o(3359),hn=o(37018),mn=o(437),vn=o(76885),xn=o(66869),fn=o(88940);const jn=(e,n)=>{var o,i;const a=null===(o=e)||void 0===o?void 0:o.name,l=null===(i=e)||void 0===i?void 0:i.symbol,r=k.t`Buy and sell on Uniswap`;if(!a&&!l)return r;const s=n&&n!==t.ChainId.MAINNET?` on ${N.T_[n].label}`:"";return!a&&l?`${l}${s}: ${r}`:a&&!l?`${a}${s}: ${r}`:`${a} (${l})${s}: ${r}`},kn=(e,n)=>{var o,i,a,l,r,s;return`Buy, sell, and swap ${(null===(o=e)||void 0===o?void 0:o.name)&&(null===(i=e)||void 0===i?void 0:i.symbol)?`${null===(a=e)||void 0===a?void 0:a.name} (${null===(l=e)||void 0===l?void 0:l.symbol})`:(null===(r=e)||void 0===r?void 0:r.name)??(null===(s=e)||void 0===s?void 0:s.symbol)??"tokens"}${n&&n!==t.ChainId.MAINNET?` on ${N.T_[n].label}`:""}. Real-time prices, charts, transaction data, and more.`};function yn(e,n,o,i){var a;const l=(0,nn.x)()??t.ChainId.MAINNET,r=(0,g.useMemo)((()=>{var n;return i?(0,m.gX)(o):(null===(n=e.data)||void 0===n?void 0:n.token)?(0,v.Pc)(e.data.token):void 0}),[i,o,null===(a=e.data)||void 0===a?void 0:a.token]),s=Boolean(r)||o!==l,d=function(e,n,o){var i;const t=(0,x.U8)(o?void 0:e,n);return o||!e||t&&(null===(i=t)||void 0===i?void 0:i.symbol)===m.eu?void 0:t}(n,o,s);return{currency:r??d,currencyWasFetchedOnChain:!r}}function Cn(){var e,n,o,i,t;const{tokenAddress:a}=(0,w.UO)();if(!a)throw new Error("Invalid token details route: token address URL param is undefined");const l=(0,v.L7)((0,N.WN)(),{fallbackToEthereum:!0}),r=a===m.dt,s=r?(0,fn.P)(l.backendChain.chain):a,d=(0,A.mZB)({variables:{address:s,chain:l.backendChain.chain},errorPolicy:"all"}),c=(0,u.Gn)(s,l.backendChain.chain),p=function(e){var n,o,i,t;const{data:a}=(0,un.vv)();return(0,g.useMemo)((()=>{var n,o,i,t,l,r;const s=null===(i=a)||void 0===i||null===(o=i.portfolios)||void 0===o||null===(n=o[0])||void 0===n?void 0:n.tokenBalances,d=null===(r=e.data)||void 0===r||null===(l=r.token)||void 0===l||null===(t=l.project)||void 0===t?void 0:t.tokens;return d?d.reduce(((e,n)=>{if(n){var o;e[n.chain]||(e[n.chain]={});const i=e[n.chain]??{};i.address=n.address,i.balance=null===(o=s)||void 0===o?void 0:o.find((e=>{var o,i;return(null===(i=e)||void 0===i||null===(o=i.token)||void 0===o?void 0:o.id)===n.id})),e[n.chain]=i}return e}),{}):{}}),[null===(n=a)||void 0===n?void 0:n.portfolios,null===(t=e.data)||void 0===t||null===(i=t.token)||void 0===i||null===(o=i.project)||void 0===o?void 0:o.tokens])}(d),{currency:h,currencyWasFetchedOnChain:x}=yn(d,a,l.id,r),f=(0,cn.Xp)(a,l.id),j=(0,b.useTheme)(),{preloadedLogoSrc:k}=(0,w.TH)().state??{},y=(null===(o=d.data)||void 0===o||null===(n=o.token)||void 0===n||null===(e=n.project)||void 0===e?void 0:e.logoUrl)??k,C=(0,pn.H)(y,null===(t=d.data)||void 0===t||null===(i=t.token)||void 0===i?void 0:i.name,j.surface2).tokenColor??void 0;return(0,g.useMemo)((()=>{var e,n;return{currency:h,currencyChain:l.backendChain.chain,currencyChainId:l.id,address:((null===(e=h)||void 0===e?void 0:e.isNative)?m.dt:null===(n=h)||void 0===n?void 0:n.address)??a,currencyWasFetchedOnChain:x,tokenQuery:d,chartState:c,warning:f,multiChainMap:p,tokenColor:C}}),[h,l.backendChain.chain,l.id,a,x,d,c,f,p,C])}function gn(){var e,n,o;const l=(0,a.G)().chainId??t.ChainId.MAINNET,r=Cn(),{tokenColor:s,address:d,currency:c,currencyChain:u,currencyChainId:h,tokenQuery:m}=r,v=null===(e=m.data)||void 0===e?void 0:e.token,x=(0,g.useMemo)((()=>{var e,n,o;return{title:(0,vn.u)(null===(e=v)||void 0===e?void 0:e.symbol,null===(n=v)||void 0===n?void 0:n.name),image:window.location.origin+"/api/image/tokens/"+u.toLowerCase()+"/"+((null===(o=c)||void 0===o?void 0:o.isNative)?(0,fn.P)(u):d),url:window.location.href,description:kn(c,h)}}),[d,c,u,h,null===(n=v)||void 0===n?void 0:n.name,null===(o=v)||void 0===o?void 0:o.symbol]),f=(0,hn.X)(x);return(0,i.jsxs)(xn.f6,{accent1:s??void 0,children:[(0,i.jsxs)(mn.Helmet,{children:[(0,i.jsx)("title",{children:jn(c,h)}),f.map(((e,n)=>(0,i.jsx)("meta",{...e},n)))]}),c?(0,i.jsx)(C.A,{contextValue:r,children:(0,i.jsx)(Xe,{})}):m.loading?(0,i.jsx)(p.lJ,{}):(0,i.jsx)(dn,{pageChainId:l,isInvalidAddress:!(0,D.UJ)(d)})]})}},76885:(e,n,o)=>{function i(e,n){return e?"Get "+e+" on Uniswap":n?"Get "+n+" on Uniswap":"View Token on Uniswap"}function t(e,n,o){return e||(n&&o?n+" #"+o:o?"Asset #"+o:"View NFT on Uniswap")}o.d(n,{H:()=>t,u:()=>i})},38004:(e,n,o)=>{function i(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}o.d(n,{K:()=>i})}}]);
//# sourceMappingURL=4583.4e44b914.chunk.js.map