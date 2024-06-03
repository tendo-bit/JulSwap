"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5863,5118,5347],{39753:(e,n,i)=>{i.d(n,{q:()=>w,w:()=>k});var t=i(92936),r=i(69751),o=i(6823),l=i(21926),a=i(43454),d=i(6282),s=i(22953),c=i(47856),u=i(47632),m=i(31744),p=i(14411),x=i(54972),h=i(55874),v=i(72993),f=i(94284);const g=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${h.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,p.default)(a.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,j=(0,p.default)(x.Tv.H1Small).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,p.default)(l.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function w({origin:e}){return(0,t.jsx)(g,{children:(0,t.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,t.jsx)(a.rU,{to:e,children:(0,t.jsx)(b,{})}),(0,t.jsx)(j,{children:(0,t.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const C=(0,p.default)(x.Tv.H1Small).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function k({adding:e,creating:n,autoSlippage:i,children:l}){const a=(0,v.x)(),x=(0,p.useTheme)(),h=(0,c.T)(),j=(0,d.s0)();return(0,t.jsx)(g,{children:(0,t.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,t.jsx)(y,{to:"..",onClick:n=>{n.preventDefault(),j(-1),e&&(h((0,u.dA)()),h((0,m.dA)()))},flex:l?"1":void 0,children:(0,t.jsx)(b,{stroke:x.neutral2})}),(0,t.jsx)(C,{$center:!l,children:n?(0,t.jsx)(o.cC,{children:"Create a pair"}):e?(0,t.jsx)(o.cC,{children:"Add liquidity"}):(0,t.jsx)(o.cC,{children:"Remove liquidity"})}),l&&(0,t.jsx)(s.xu,{style:{marginRight:".5rem"},children:l}),(0,t.jsx)(r.Z,{autoSlippage:i,chainId:a,hideRoutingSettings:!0})]})})}},3094:(e,n,i)=>{i.d(n,{Z:()=>l});var t=i(92936),r=i(45779);const o=i(14411).default.input.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Slider\\index__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function l({value:e,onChange:n,min:i=0,step:l=1,max:a=100,size:d=28,...s}){const c=(0,r.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,t.jsx)(o,{size:d,...s,type:"range",value:e,style:{padding:"15px 0"},onChange:c,"aria-labelledby":"input slider",step:l,min:i,max:a})}},82731:(e,n,i)=>{i.d(n,{SS:()=>p,sq:()=>s,MN:()=>c,RF:()=>u,uO:()=>m,I8:()=>d});var t=i(14411);const r=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=i.p+"static/media/noise.3c7efafc83614205bd1a.png",l=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var a=i(44591);const d=(0,t.default)(a.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,s=t.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
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
  background: url(${l});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=t.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-6a13bc9-3"})`
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
`,m=(0,t.default)(a.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,p=t.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},47848:(e,n,i)=>{i.d(n,{Z:()=>r});var t=i(45779);function r(e,n,i=100){const[r,o]=(0,t.useState)((()=>e)),l=(0,t.useRef)(),a=(0,t.useCallback)((e=>{o(e),l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n(e),l.current=void 0}),i)}),[i,n]);return(0,t.useEffect)((()=>{l.current&&(clearTimeout(l.current),l.current=void 0),o(e)}),[e]),[r,a]}},65118:(e,n,i)=>{i.d(n,{Z:()=>a,e:()=>l});var t=i(92936),r=i(14411),o=i(62587);const l=r.default.main.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function a(e){return(0,t.jsx)(l,{...e})}},32219:(e,n,i)=>{i.r(n),i.d(n,{default:()=>de});var t=i(92936),r=i(11604),o=i(5985),l=i(76078),a=i(21651),d=i(47583),s=i(73499),c=i(69780),u=i(61182),m=i(44591),p=i(47841),x=i(63415),h=i(5967),v=i(39753),f=i(94284),g=i(3094),y=i(67716),j=i(82731),b=i(57852),w=i(7151),C=i(47848),k=i(40413),$=i(6823),S=i(24509),z=i(26522),_=i(45779),I=i(6282),T=i(26729),D=i(39671),q=i(55660),A=i(42938),N=i(47856),R=i(5347),W=i(54542);function L(){return(0,N.C)((e=>e.burnV3))}var P=i(99454),Z=i(28098),E=i(54972),F=i(63420),M=i(66136),V=i(51001),B=i(4650),O=i(5931),U=i(590),G=i(99819),H=i(64370),Q=i(47186),Y=i(64510),X=i(17202),J=i(65118),K=i(40926),ee=i(22953),ne=i(14411);const ie=ne.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__Wrapper",componentId:"sc-53ad7253-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,te=(0,ne.default)(K.ER).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__SmallMaxButton",componentId:"sc-53ad7253-1"})`
  font-size: 12px;
`,re=(0,ne.default)(ee.xv).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__ResponsiveHeaderText",componentId:"sc-53ad7253-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`;function oe(e,n,i,t,r,o,l){try{var a=e[o](l),d=a.value}catch(s){return void i(s)}a.done?n(d):Promise.resolve(d).then(t,r)}function le(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function l(e){oe(o,t,r,l,a,"next",e)}function a(e){oe(o,t,r,l,a,"throw",e)}l(void 0)}))}}const ae=new l.Percent(50,1e4);function de(){const e=(0,U.m)(),n=(0,b.Nb)(e.chainId),{tokenId:i}=(0,I.UO)(),o=(0,I.TH)(),l=(0,_.useMemo)((()=>{try{return r.O$.from(i)}catch{return null}}),[i]),{position:a,loading:d}=(0,k.n)(l??void 0);return null===l||l.eq(0)?(0,t.jsx)(I.Fg,{to:{...o,pathname:"/pools"},replace:!0}):n&&(d||a)?(0,t.jsx)(se,{tokenId:l}):(0,t.jsx)(z.PositionPageUnsupportedContent,{})}function se({tokenId:e}){var n,i,r,b,z,I,K,ee,ne,oe,de,se,ce,ue,me,pe,xe,he,ve,fe,ge,ye,je,be,we,Ce,ke,$e,Se,ze,_e,Ie;const{position:Te}=(0,k.n)(e),De=(0,U.m)(),qe=(0,V.z)(),Ae=(0,d.oO)(),{formatCurrencyAmount:Ne}=(0,M.Gb)(),[Re,We]=(0,_.useState)(!1),Le=(0,S.Z)(De.chainId).wrapped.symbol,{percent:Pe}=L(),{position:Ze,liquidityPercentage:Ee,liquidityValue0:Fe,liquidityValue1:Me,feeValue0:Ve,feeValue1:Be,outOfRange:Oe,error:Ue}=function(e,n=!1){var i,r,o,d;const{account:s}=(0,T.G)(),{percent:c}=L(),u=(0,D.dQ)(null===(i=e)||void 0===i?void 0:i.token0),m=(0,D.dQ)(null===(r=e)||void 0===r?void 0:r.token1),[,p]=(0,q.AI)(u??void 0,m??void 0,null===(o=e)||void 0===o?void 0:o.fee),x=(0,_.useMemo)((()=>{var n,i,t;return p&&(null===(n=e)||void 0===n?void 0:n.liquidity)&&"number"===typeof(null===(i=e)||void 0===i?void 0:i.tickLower)&&"number"===typeof(null===(t=e)||void 0===t?void 0:t.tickUpper)?new a.Position({pool:p,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0}),[p,e]),h=new l.Percent(c,100),v=x?h.multiply(x.amount0.quotient).quotient:void 0,f=x?h.multiply(x.amount1.quotient).quotient:void 0,g=u&&v?l.CurrencyAmount.fromRawAmount(n?u:(0,R.B)(u),v):void 0,y=m&&f?l.CurrencyAmount.fromRawAmount(n?m:(0,R.B)(m),f):void 0,[j,b]=(0,A.t)(p??void 0,null===(d=e)||void 0===d?void 0:d.tokenId,n),w=!(!p||!e)&&(p.tickCurrent<e.tickLower||p.tickCurrent>e.tickUpper);let C;return s||(C=(0,t.jsx)($.cC,{children:"Connect wallet"})),0===c&&(C=C??(0,t.jsx)($.cC,{children:"Enter a percent"})),{position:x,liquidityPercentage:h,liquidityValue0:g,liquidityValue1:y,feeValue0:j,feeValue1:b,outOfRange:w,error:C}}(Te,Re),{onPercentSelect:Ge}=function(){const e=(0,N.T)();return{onPercentSelect:(0,_.useCallback)((n=>{e((0,W.o)({percent:n}))}),[e])}}(),He=null===(i=Te)||void 0===i||null===(n=i.liquidity)||void 0===n?void 0:n.eq(0),[Qe,Ye]=(0,C.Z)(Pe,Ge),Xe=(0,B.n)(),Je=(0,Z.eq)(ae),[Ke,en]=(0,_.useState)(!1),[nn,tn]=(0,_.useState)(!1),[rn,on]=(0,_.useState)(),ln=(0,P.h7)(),an=(0,w.GL)(),dn=(0,_.useCallback)(le((function*(){if(tn(!0),!an||!Fe||!Me||"connected"!==De.status||!Ze||!Ee||!qe)return;const n=yield Xe();if(!n)throw new Error("could not get deadline");const{calldata:i,value:t}=a.NonfungiblePositionManager.removeCallParameters(Ze,{tokenId:e.toString(),liquidityPercentage:Ee,slippageTolerance:Je,deadline:n.toString(),collectOptions:{expectedCurrencyOwed0:Ve??l.CurrencyAmount.fromRawAmount(Fe.currency,0),expectedCurrencyOwed1:Be??l.CurrencyAmount.fromRawAmount(Me.currency,0),recipient:De.address}}),r={to:an.address,data:i,value:t},s=yield qe.getChainId();if(De.chainId!==s)throw new F.CJ;qe.estimateGas(r).then((e=>{const n={...r,gasLimit:(0,Y.y)(e)};return qe.sendTransaction(n).then((e=>{(0,d._P)(o.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[Fe.currency.symbol,Me.currency.symbol].join("/"),...Ae}),on(e.hash),tn(!1),ln(e,{type:Q.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,X.H)(Fe.currency),quoteCurrencyId:(0,X.H)(Me.currency),expectedAmountBaseRaw:Fe.quotient.toString(),expectedAmountQuoteRaw:Me.quotient.toString()})}))})).catch((e=>{tn(!1),console.error(e)}))})),[an,Fe,Me,De.status,De.address,De.chainId,Ze,Ee,qe,Xe,e,Je,Ve,Be,Ae,ln]),sn=(0,_.useCallback)((()=>{en(!1),rn&&Ye(0),tn(!1),on("")}),[Ye,rn]),cn=(0,t.jsxs)($.cC,{children:["Removing ",{amt:null===(r=Fe)||void 0===r?void 0:r.toSignificant(6)}," ",{sym:null===(z=Fe)||void 0===z||null===(b=z.currency)||void 0===b?void 0:b.symbol}," and"," ",{amt2:null===(I=Me)||void 0===I?void 0:I.toSignificant(6)}," ",{sym2:null===(ee=Me)||void 0===ee||null===(K=ee.currency)||void 0===K?void 0:K.symbol}]});function un(){var e,n,i,r,o,l,a,d,s,u,p,x,v,g;return(0,t.jsxs)(m.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,t.jsxs)(f.m0,{align:"flex-end",children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:["Pooled ",{sym:null===(n=Fe)||void 0===n||null===(e=n.currency)||void 0===e?void 0:e.symbol},":"]})}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Fe&&Ne({amount:Fe})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(i=Fe)||void 0===i?void 0:i.currency})]})]}),(0,t.jsxs)(f.m0,{align:"flex-end",children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:["Pooled ",{sym:null===(o=Me)||void 0===o||null===(r=o.currency)||void 0===r?void 0:r.symbol},":"]})}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&Ne({amount:Me})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(l=Me)||void 0===l?void 0:l.currency})]})]}),(null===(a=Ve)||void 0===a?void 0:a.greaterThan(0))||(null===(d=Be)||void 0===d?void 0:d.greaterThan(0))?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.xv,{fontSize:12,color:"$neutral2",textAlign:"left",pt:8,children:(0,t.jsx)($.cC,{children:"You will also collect fees earned from this position."})}),(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:[{sym:null===(u=Ve)||void 0===u||null===(s=u.currency)||void 0===s?void 0:s.symbol}," Fees Earned:"]})}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ve&&Ne({amount:Ve})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(p=Ve)||void 0===p?void 0:p.currency})]})]}),(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:[{sym:null===(v=Be)||void 0===v||null===(x=v.currency)||void 0===x?void 0:x.symbol}," Fees Earned:"]})}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Be&&Ne({amount:Be})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(g=Be)||void 0===g?void 0:g.currency})]})]})]}):null,(0,t.jsx)(c.DF,{mt:"16px",onClick:dn,children:(0,t.jsx)($.cC,{children:"Remove"})})]})}const mn=Boolean((null===(ne=Fe)||void 0===ne?void 0:ne.currency)&&(null===(oe=Me)||void 0===oe?void 0:oe.currency)&&(Fe.currency.isNative||Me.currency.isNative||(null===(de=H.Fl[Fe.currency.chainId])||void 0===de?void 0:de.equals(Fe.currency.wrapped))||(null===(se=H.Fl[Me.currency.chainId])||void 0===se?void 0:se.equals(Me.currency.wrapped))));return(0,t.jsxs)(m.Tz,{children:[(0,t.jsx)(G.Z,{isOpen:Ke,onDismiss:sn,attemptingTxn:nn,hash:rn??"",reviewContent:()=>(0,t.jsx)(G.p,{title:(0,t.jsx)($.cC,{children:"Remove liquidity"}),onDismiss:sn,topContent:un}),pendingText:cn}),(0,t.jsxs)(J.Z,{$maxWidth:"unset",children:[(0,t.jsx)(v.w,{creating:!1,adding:!1,autoSlippage:ae}),(0,t.jsx)(ie,{children:Te?(0,t.jsxs)(m.Tz,{gap:"lg",children:[(0,t.jsxs)(f.m0,{children:[(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(p.ge,{currencies:[null===(ce=Fe)||void 0===ce?void 0:ce.currency,null===(ue=Me)||void 0===ue?void 0:ue.currency],size:20}),(0,t.jsx)(E.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===(pe=Fe)||void 0===pe||null===(me=pe.currency)||void 0===me?void 0:me.symbol}/${null===(he=Me)||void 0===he||null===(xe=he.currency)||void 0===xe?void 0:xe.symbol}`})]}),(0,t.jsx)(s.Z,{removed:He,inRange:!Oe})]}),(0,t.jsx)(u.hl,{children:(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsx)(E.Tv.DeprecatedMain,{fontWeight:485,children:(0,t.jsx)($.cC,{children:"Amount"})}),(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(re,{children:(0,t.jsxs)($.cC,{children:[{percentForSlider:Qe},"%"]})}),(0,t.jsxs)(f.BA,{gap:"4px",justify:"flex-end",children:[(0,t.jsx)(te,{onClick:()=>Ge(25),width:"20%",children:(0,t.jsx)($.cC,{children:"25%"})}),(0,t.jsx)(te,{onClick:()=>Ge(50),width:"20%",children:(0,t.jsx)($.cC,{children:"50%"})}),(0,t.jsx)(te,{onClick:()=>Ge(75),width:"20%",children:(0,t.jsx)($.cC,{children:"75%"})}),(0,t.jsx)(te,{onClick:()=>Ge(100),width:"20%",children:(0,t.jsx)($.cC,{children:"Max"})})]})]}),(0,t.jsx)(g.Z,{value:Qe,onChange:Ye})]})}),(0,t.jsx)(u.hl,{children:(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokena-symbol",children:(0,t.jsxs)($.cC,{children:["Pooled ",{symbol:null===(fe=Fe)||void 0===fe||null===(ve=fe.currency)||void 0===ve?void 0:ve.symbol},":"]})}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Fe&&Ne({amount:Fe})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(ge=Fe)||void 0===ge?void 0:ge.currency})]})]}),(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokenb-symbol",children:(0,t.jsxs)($.cC,{children:["Pooled ",{symbol:null===(je=Me)||void 0===je||null===(ye=je.currency)||void 0===ye?void 0:ye.symbol},":"]})}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&Ne({amount:Me})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(be=Me)||void 0===be?void 0:be.currency})]})]}),(null===(we=Ve)||void 0===we?void 0:we.greaterThan(0))||(null===(Ce=Be)||void 0===Ce?void 0:Ce.greaterThan(0))?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.SS,{}),(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:[{symbol:null===($e=Ve)||void 0===$e||null===(ke=$e.currency)||void 0===ke?void 0:ke.symbol}," Fees Earned:"]})}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ve&&Ne({amount:Ve})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Se=Ve)||void 0===Se?void 0:Se.currency})]})]}),(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:[{symbol:null===(_e=Be)||void 0===_e||null===(ze=_e.currency)||void 0===ze?void 0:ze.symbol}," Fees Earned:"]})}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Be&&Ne({amount:Be})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Ie=Be)||void 0===Ie?void 0:Ie.currency})]})]})]}):null]})}),mn&&(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(E.Tv.DeprecatedMain,{children:(0,t.jsxs)($.cC,{children:["Collect as ",{nativeWrappedSymbol:Le}]})}),(0,t.jsx)(y.Z,{id:"receive-as-weth",isActive:Re,toggle:()=>We((e=>!e))})]}),(0,t.jsx)("div",{style:{display:"flex"},children:(0,t.jsx)(m.Tz,{gap:"md",style:{flex:"1"},children:(0,t.jsx)(c.gn,{confirmed:!1,disabled:He||0===Pe||!Fe,onClick:()=>en(!0),children:He?(0,t.jsx)($.cC,{children:"Closed"}):Ue??(0,t.jsx)($.cC,{children:"Remove"})})})})]}):(0,t.jsx)(x.ZP,{})})]})]})}},5347:(e,n,i)=>{i.d(n,{B:()=>r});var t=i(64370);function r(e){var n;return e.isNative?e:(null===(n=t.Fl[e.chainId])||void 0===n?void 0:n.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=5863.9533b286.chunk.js.map