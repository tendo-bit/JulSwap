"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4075,5347],{52223:(e,i,n)=>{n.d(i,{WP:()=>$,ZP:()=>W,rG:()=>I});var t=n(92936),r=n(76078),o=n(26729),d=n(6823),a=n(61592),s=n.n(a),l=n(36399),c=n(45779),x=n(37525),u=n(86082),p=n(43454),h=n(22953),g=n(14411),m=n(54972),f=n(47841),j=n(13820),v=n(3359),y=n(83416),b=n(73720),S=n(17202),w=n(5347),C=n(69780),k=n(61182),z=n(44591),A=n(5967),T=n(94284),q=n(82731),D=n(56536);const I=(0,g.default)(T.m0).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionCard\\index__FixedHeightRow",componentId:"sc-dcf5d43e-0"})`
  height: 24px;
`,_=(0,g.default)(k.hl).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionCard\\index__StyledPositionCard",componentId:"sc-dcf5d43e-1"})`
  border: none;
  background: ${({theme:e,bgColor:i})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,l.DZ)(.8,i)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function $({pair:e,showUnwrapped:i=!1,border:n}){var a,l;const{account:x}=(0,o.G)(),u=i?e.token0:(0,w.B)(e.token0),p=i?e.token1:(0,w.B)(e.token1),[g,j]=(0,c.useState)(!1),v=(0,b.mM)(x??void 0,e.liquidityToken),S=(0,y.A)(e.liquidityToken),C=v&&S&&s().greaterThanOrEqual(S.quotient,v.quotient)?new r.Percent(v.quotient,S.quotient):void 0,[A,q]=e&&S&&v&&s().greaterThanOrEqual(S.quotient,v.quotient)?[e.getLiquidityValue(e.token0,S,v,!1),e.getLiquidityValue(e.token1,S,v,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:v&&s().greaterThan(v.quotient,s().BigInt(0))?(0,t.jsx)(k.rd,{border:n,children:(0,t.jsxs)(z.Tz,{gap:"md",children:[(0,t.jsx)(I,{children:(0,t.jsx)(T.DA,{children:(0,t.jsx)(h.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(d.cC,{children:"Your position"})})})}),(0,t.jsxs)(I,{onClick:()=>j(!g),children:[(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(f.ge,{currencies:[u,p],size:20}),(0,t.jsxs)(h.xv,{fontWeight:535,fontSize:20,children:[u.symbol,"/",p.symbol]})]}),(0,t.jsx)(T.DA,{children:(0,t.jsx)(h.xv,{fontWeight:535,fontSize:20,children:v?v.toSignificant(4):"-"})})]}),(0,t.jsxs)(z.Tz,{gap:"4px",children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your pool share:"})}),(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:C?C.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(h.xv,{fontSize:16,fontWeight:535,children:[u.symbol,":"]}),A?(0,t.jsx)(T.DA,{children:(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(a=A)||void 0===a?void 0:a.toSignificant(6)})}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(h.xv,{fontSize:16,fontWeight:535,children:[p.symbol,":"]}),q?(0,t.jsx)(T.DA,{children:(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(l=q)||void 0===l?void 0:l.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(k.hl,{children:(0,t.jsxs)(m.Tv.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2b50\ufe0f"})," ",(0,t.jsx)(d.cC,{children:"By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."})," "]})})})}function W({pair:e,border:i,stakedBalance:n}){var a,l,g,k;const{account:$}=(0,o.G)(),W=(0,w.B)(e.token0),L=(0,w.B)(e.token1),[N,R]=(0,c.useState)(!1),F=(0,b.mM)($??void 0,e.liquidityToken),E=(0,y.A)(e.liquidityToken),B=n?null===(a=F)||void 0===a?void 0:a.add(n):F,O=B&&E&&s().greaterThanOrEqual(E.quotient,B.quotient)?new r.Percent(B.quotient,E.quotient):void 0,[V,P]=e&&E&&B&&s().greaterThanOrEqual(E.quotient,B.quotient)?[e.getLiquidityValue(e.token0,E,B,!1),e.getLiquidityValue(e.token1,E,B,!1)]:[void 0,void 0],M=(0,v.r)(null===(l=e)||void 0===l?void 0:l.token0);return(0,t.jsxs)(_,{border:i,bgColor:M,children:[(0,t.jsx)(q.RF,{}),(0,t.jsxs)(z.Tz,{gap:"md",children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(T.BA,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(f.ge,{currencies:[W,L],size:20}),(0,t.jsx)(h.xv,{fontWeight:535,fontSize:20,children:W&&L?`${W.symbol}/${L.symbol}`:(0,t.jsx)(D.bb,{children:(0,t.jsx)(d.cC,{children:"Loading"})})})]}),(0,t.jsx)(T.DA,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(C.qL,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>R(!N),children:N?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.cC,{children:"Manage"}),(0,t.jsx)(x.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.cC,{children:"Manage"}),(0,t.jsx)(u.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),N&&(0,t.jsxs)(z.Tz,{gap:"sm",children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your total pool tokens:"})}),(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:B?B.toSignificant(4):"-"})]}),n&&(0,t.jsxs)(I,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Pool tokens in rewards pool:"})}),(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:n.toSignificant(4)})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(d.cC,{children:["Pooled ",{sym:W.symbol},":"]})})}),V?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(g=V)||void 0===g?void 0:g.toSignificant(6)}),(0,t.jsx)(A.Z,{size:20,style:{marginLeft:"8px"},currency:W})]}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(d.cC,{children:["Pooled ",{sym:L.symbol},":"]})})}),P?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(k=P)||void 0===k?void 0:k.toSignificant(6)}),(0,t.jsx)(A.Z,{size:20,style:{marginLeft:"8px"},currency:L})]}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your pool share:"})}),(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:O?(0,t.jsxs)(d.cC,{children:[{amt:"0.00"===O.toFixed(2)?"<0.01":O.toFixed(2)},"%"]}):"-"})]}),(0,t.jsx)(C.PL,{padding:"8px",$borderRadius:"8px",children:(0,t.jsx)(m.dL,{style:{width:"100%",textAlign:"center"},href:`https://v2.info.uniswap.org/account/${$}`,children:(0,t.jsxs)(d.cC,{children:["View accrued fees and analytics",(0,t.jsx)("span",{style:{fontSize:"11px"},children:"\u2197"})]})})}),F&&s().greaterThan(F.quotient,j.iV)&&(0,t.jsxs)(T.m0,{marginTop:"10px",children:[(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:p.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(d.cC,{children:"Migrate"})}),(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:p.rU,to:`/add/v2/${(0,S.H)(W)}/${(0,S.H)(L)}`,width:"32%",children:(0,t.jsx)(d.cC,{children:"Add"})}),(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:p.rU,width:"32%",to:`/remove/v2/${(0,S.H)(W)}/${(0,S.H)(L)}`,children:(0,t.jsx)(d.cC,{children:"Remove"})})]}),n&&s().greaterThan(n.quotient,j.iV)&&(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:p.rU,to:`/uni/${(0,S.H)(W)}/${(0,S.H)(L)}`,width:"100%",children:(0,t.jsx)(d.cC,{children:"Manage liquidity in rewards pool"})})]})]})]})}},26073:(e,i,n)=>{n.d(i,{A:()=>l});var t=n(92936),r=n(44591),o=n(6823),d=n(14411),a=n(54972);const s=d.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\V2Unsupported\\index__TextWrapper",componentId:"sc-5efcffe7-0"})`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function l(){return(0,t.jsx)(r.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(r.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(s,{children:(0,t.jsx)(a.Tv.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(o.cC,{children:"Uniswap V2 is not available on this network."})})})})})}},82731:(e,i,n)=>{n.d(i,{SS:()=>p,sq:()=>l,MN:()=>c,RF:()=>x,uO:()=>u,I8:()=>s});var t=n(14411);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",d=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var a=n(44591);const s=(0,t.default)(a.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=t.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=t.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${d});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,x=t.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,u=(0,t.default)(a.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,p=t.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},81069:(e,i,n)=>{n.d(i,{G:()=>a});var t=n(57852),r=n(42183),o=n(70559),d=n(590);function a(){const{chainId:e}=(0,d.m)(),i=(0,o.ye)(r.TP.V2Everywhere);return e&&(i&&t.Ep.includes(e)||t.$6.includes(e))}},83416:(e,i,n)=>{n.d(i,{A:()=>a});var t=n(76078),r=n(84938),o=n(45779),d=n(7151);function a(e){var i,n,a,s;const l=(0,d.Ib)((null===(i=e)||void 0===i?void 0:i.isToken)?e.address:void 0,!1),c=null===(s=(0,r.Wk)(l,"totalSupply"))||void 0===s||null===(a=s.result)||void 0===a||null===(n=a[0])||void 0===n?void 0:n.toString();return(0,o.useMemo)((()=>{var i;return(null===(i=e)||void 0===i?void 0:i.isToken)&&c?t.CurrencyAmount.fromRawAmount(e,c):void 0}),[e,c])}},41047:(e,i,n)=>{n.d(i,{OY:()=>x,Oo:()=>u,_G:()=>c});var t=n(51371),r=n(76078),o=n(40148),d=n(12972),a=n(84938),s=n(45779);const l=new t.vU(o.abi);var c;function x(e){const i=(0,s.useMemo)((()=>e.map((([e,i])=>{var n,t;return[null===(n=e)||void 0===n?void 0:n.wrapped,null===(t=i)||void 0===t?void 0:t.wrapped]}))),[e]),n=(0,s.useMemo)((()=>i.map((([e,i])=>e&&i&&e.chainId===i.chainId&&!e.equals(i)&&r.V2_FACTORY_ADDRESSES[e.chainId]?(0,d.computePairAddress)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:i}):void 0))),[i]),t=(0,a._Y)(n,l,"getReserves");return(0,s.useMemo)((()=>t.map(((e,n)=>{const{result:t,loading:o}=e,a=i[n][0],s=i[n][1];if(o)return[c.LOADING,null];if(!a||!s||a.equals(s))return[c.INVALID,null];if(!t)return[c.NOT_EXISTS,null];const{reserve0:l,reserve1:x}=t,[u,p]=a.sortsBefore(s)?[a,s]:[s,a];return[c.EXISTS,new d.Pair(r.CurrencyAmount.fromRawAmount(u,l.toString()),r.CurrencyAmount.fromRawAmount(p,x.toString()))]}))),[t,i])}function u(e,i){return x((0,s.useMemo)((()=>[[e,i]]),[e,i]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(c||(c={}))},5347:(e,i,n)=>{n.d(i,{B:()=>r});var t=n(64370);function r(e){var i;return e.isNative?e:(null===(i=t.Fl[e.chainId])||void 0===i?void 0:i.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=4075.f8d361a9.chunk.js.map