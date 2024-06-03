"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9469],{3094:(e,n,i)=>{i.d(n,{Z:()=>d});var t=i(92936),r=i(45779);const o=i(14411).default.input.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Slider\\index__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
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
`;function d({value:e,onChange:n,min:i=0,step:d=1,max:s=100,size:l=28,...a}){const u=(0,r.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,t.jsx)(o,{size:l,...a,type:"range",value:e,style:{padding:"15px 0"},onChange:u,"aria-labelledby":"input slider",step:d,min:i,max:s})}},47848:(e,n,i)=>{i.d(n,{Z:()=>r});var t=i(45779);function r(e,n,i=100){const[r,o]=(0,t.useState)((()=>e)),d=(0,t.useRef)(),s=(0,t.useCallback)((e=>{o(e),d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{n(e),d.current=void 0}),i)}),[i,n]);return(0,t.useEffect)((()=>{d.current&&(clearTimeout(d.current),d.current=void 0),o(e)}),[e]),[r,s]}},69583:(e,n,i)=>{i.d(n,{Z:()=>s});var t=i(26729),r=i(84938),o=i(45779),d=i(7151);function s(){var e,n;const{account:i}=(0,t.G)(),s=(0,d.c5)(),l=(0,o.useMemo)((()=>[i??void 0]),[i]),a=(0,r.Wk)(s,"isArgentWallet",l,r.DB);return Boolean(null===(n=a)||void 0===n||null===(e=n.result)||void 0===e?void 0:e[0])}},56331:(e,n,i)=>{i.d(n,{p:()=>U});var t,r=i(46854),o=i(76078),d=i(61592),s=i.n(d),l=i(84938),a=i(45779),u=i(16449),c=i(590),h=i(64370),v=i(7151),m=i(69583);function g(e,n,i,t,r,o,d){try{var s=e[o](d),l=s.value}catch(a){return void i(a)}s.done?n(l):Promise.resolve(l).then(t,r)}!function(e){e[e.AMOUNT=1]="AMOUNT",e[e.ALLOWED=2]="ALLOWED"}(t||(t={}));const p=1200,x={[o.ChainId.MAINNET]:{[h.Hz.address]:{type:t.AMOUNT,name:"USD Coin",version:"2"},[h.h1.address]:{type:t.ALLOWED,name:"Dai Stablecoin",version:"1"},[h.yg[o.ChainId.MAINNET].address]:{type:t.AMOUNT,name:"Uniswap"}},[o.ChainId.GOERLI]:{[h.yg[o.ChainId.GOERLI].address]:{type:t.AMOUNT,name:"Uniswap"}},[o.ChainId.SEPOLIA]:{[h.yg[o.ChainId.SEPOLIA].address]:{type:t.AMOUNT,name:"Uniswap"}}};var C;!function(e){e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.LOADING=1]="LOADING",e[e.NOT_SIGNED=2]="NOT_SIGNED",e[e.SIGNED=3]="SIGNED"}(C||(C={}));const I=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],f=[{name:"name",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],y=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],E=[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}];function R(e,n,i,o){var d,h,R;const T=(0,c.m)(),j=(0,u.n)(),U=(null===(h=e)||void 0===h||null===(d=h.currency)||void 0===d?void 0:d.isToken)?e.currency.address:void 0,N=(0,v.N9)(U),b=(0,m.Z)(),w=(0,a.useMemo)((()=>[T.address??void 0]),[T.address]),_=(0,l.Wk)(N,"nonces",w),A=o??("connected"===T.status&&U?null===(R=x[T.chainId])||void 0===R?void 0:R[U]:void 0),[S,Y]=(0,a.useState)(null);return(0,a.useMemo)((()=>{var o,d;if(b||!e||!N||"connected"!==T.status||!i||!j||!_.valid||!U||!n||!A)return{state:C.NOT_APPLICABLE,signatureData:null,gatherPermitSignature:null};const l=null===(d=_.result)||void 0===d||null===(o=d[0])||void 0===o?void 0:o.toNumber();if(_.loading||"number"!==typeof l)return{state:C.LOADING,signatureData:null,gatherPermitSignature:null};const a=S&&S.owner===T.address&&S.deadline>=i.toNumber()&&S.tokenAddress===U&&S.nonce===l&&S.spender===n&&("allowed"in S||s().greaterThanOrEqual(s().BigInt(S.amount),e.quotient));return{state:a?C.SIGNED:C.NOT_SIGNED,signatureData:a?S:null,gatherPermitSignature:function(){var o,d=(o=function*(){const o=A.type===t.ALLOWED,d=i.toNumber()+p,s=e.quotient.toString(),a=o?{holder:T.address,spender:n,allowed:o,nonce:l,expiry:d}:{owner:T.address,spender:n,value:s,nonce:l,deadline:d},u=A.version?{name:A.name,version:A.version,verifyingContract:U,chainId:T.chainId}:{name:A.name,verifyingContract:U,chainId:T.chainId},c=JSON.stringify({types:{EIP712Domain:A.version?I:f,Permit:o?E:y},domain:u,primaryType:"Permit",message:a});return j.send("eth_signTypedData_v4",[T.address,c]).then(r.splitSignature).then((e=>{Y({v:e.v,r:e.r,s:e.s,deadline:d,...o?{allowed:o}:{amount:s},nonce:l,chainId:T.chainId,owner:T.address,spender:n,tokenAddress:U,permitType:A.type})}))},function(){var e=this,n=arguments;return new Promise((function(i,t){var r=o.apply(e,n);function d(e){g(r,i,t,d,s,"next",e)}function s(e){g(r,i,t,d,s,"throw",e)}d(void 0)}))});return function(){return d.apply(this,arguments)}}()}}),[b,e,N,T.status,T.address,T.chainId,i,j,_.valid,_.result,_.loading,U,n,A,S])}var T=i(4650);const j={version:"1",name:"Uniswap V2",type:t.AMOUNT};function U(e,n){return R(e,n,(0,T.Z)(),j)}},79469:(e,n,i)=>{i.r(n),i.d(n,{default:()=>ae});var t=i(92936),r=i(11604),o=i(5985),d=i(76078),s=i(47583),l=i(25320),a=i(26073),u=i(57852),c=i(81069),h=i(56331),v=i(6823),m=i(26522),g=i(45779),p=i(57809),x=i(4168),C=i(6282),I=i(14411),f=i(54972),y=i(47841),E=i(51001),R=i(5931),T=i(590),j=i(69780),U=i(61182),N=i(44591),b=i(74293),w=i(5967),_=i(39753),A=i(52223),S=i(94284),Y=i(3094),D=i(99819),L=i(56536),P=i(64370),k=i(39671),q=i(29025),O=i(7151),$=i(47848),B=i(4650),z=i(91458),W=i(26729),Q=i(61592),M=i.n(Q),F=i(89882),Z=i(47856),H=i(83416),G=i(41047),V=i(73720);function K(){return(0,Z.C)((e=>e.burn))}var J=i(99454),X=i(47186),ee=i(28098),ne=i(64510),ie=i(61744),te=i(17202),re=i(65118),oe=i(40926);function de(e,n,i,t,r,o,d){try{var s=e[o](d),l=s.value}catch(a){return void i(a)}s.done?n(l):Promise.resolve(l).then(t,r)}function se(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function d(e){de(o,t,r,d,s,"next",e)}function s(e){de(o,t,r,d,s,"throw",e)}d(void 0)}))}}const le=new d.Percent(50,1e4);function ae(){const e=(0,T.m)(),n=(0,u.Nb)(e.chainId),{currencyIdA:i,currencyIdB:r}=(0,C.UO)(),[o,d]=[(0,k.U8)(i)??void 0,(0,k.U8)(r)??void 0];return n&&o!==d?(0,t.jsx)(ue,{}):(0,t.jsx)(m.PositionPageUnsupportedContent,{})}function ue(){var e,n,i,u,m,Q,de,ae,ue,ce,he,ve,me,ge,pe,xe,Ce,Ie,fe,ye,Ee,Re,Te,je,Ue,Ne,be,we,_e;const Ae=(0,C.s0)(),{currencyIdA:Se,currencyIdB:Ye}=(0,C.UO)(),[De,Le]=[(0,k.U8)(Se)??void 0,(0,k.U8)(Ye)??void 0],Pe=(0,T.m)(),ke=(0,E.z)(),[qe,Oe]=(0,g.useMemo)((()=>{var e,n;return[null===(e=De)||void 0===e?void 0:e.wrapped,null===(n=Le)||void 0===n?void 0:n.wrapped]}),[De,Le]),$e=(0,I.useTheme)(),Be=(0,s.oO)(),ze=(0,l.LK)(),{independentField:We,typedValue:Qe}=K(),{pair:Me,parsedAmounts:Fe,error:Ze}=function(e,n){var i,r,o,s,l,a,u,c;const{account:h}=(0,W.G)(),{independentField:m,typedValue:g}=K(),[,p]=(0,G.Oo)(e,n),x=null===(s=(0,V.Z)(h??void 0,[null===(i=p)||void 0===i?void 0:i.liquidityToken]))||void 0===s?void 0:s[(null===(o=p)||void 0===o||null===(r=o.liquidityToken)||void 0===r?void 0:r.address)??""],[C,I]=[null===(l=e)||void 0===l?void 0:l.wrapped,null===(a=n)||void 0===a?void 0:a.wrapped],f={[z.g.CURRENCY_A]:C,[z.g.CURRENCY_B]:I,[z.g.LIQUIDITY]:null===(u=p)||void 0===u?void 0:u.liquidityToken},y=(0,H.A)(null===(c=p)||void 0===c?void 0:c.liquidityToken),E=p&&y&&x&&C&&M().greaterThanOrEqual(y.quotient,x.quotient)?d.CurrencyAmount.fromRawAmount(C,p.getLiquidityValue(C,y,x,!1).quotient):void 0,R=p&&y&&x&&I&&M().greaterThanOrEqual(y.quotient,x.quotient)?d.CurrencyAmount.fromRawAmount(I,p.getLiquidityValue(I,y,x,!1).quotient):void 0,T={[z.g.CURRENCY_A]:E,[z.g.CURRENCY_B]:R};let j=new d.Percent("0","100");if(m===z.g.LIQUIDITY_PERCENT)j=new d.Percent(g,"100");else if(m===z.g.LIQUIDITY){var U;if(null===(U=p)||void 0===U?void 0:U.liquidityToken){const e=(0,F.Z)(g,p.liquidityToken);e&&x&&!e.greaterThan(x)&&(j=new d.Percent(e.quotient,x.quotient))}}else if(f[m]){const e=(0,F.Z)(g,f[m]),n=T[m];e&&n&&!e.greaterThan(n)&&(j=new d.Percent(e.quotient,n.quotient))}const N={[z.g.LIQUIDITY_PERCENT]:j,[z.g.LIQUIDITY]:x&&j&&j.greaterThan("0")?d.CurrencyAmount.fromRawAmount(x.currency,j.multiply(x.quotient).quotient):void 0,[z.g.CURRENCY_A]:C&&j&&j.greaterThan("0")&&E?d.CurrencyAmount.fromRawAmount(C,j.multiply(E.quotient).quotient):void 0,[z.g.CURRENCY_B]:I&&j&&j.greaterThan("0")&&R?d.CurrencyAmount.fromRawAmount(I,j.multiply(R.quotient).quotient):void 0};let b;return h||(b=(0,t.jsx)(v.cC,{children:"Connect wallet"})),N[z.g.LIQUIDITY]&&N[z.g.CURRENCY_A]&&N[z.g.CURRENCY_B]||(b=b??(0,t.jsx)(v.cC,{children:"Enter an amount"})),{pair:p,parsedAmounts:N,error:b}}(De??void 0,Le??void 0),{onUserInput:He}=function(){const e=(0,Z.T)();return{onUserInput:(0,g.useCallback)(((n,i)=>{e((0,z.L)({field:n,typedValue:i}))}),[e])}}(),Ge=!Ze,[Ve,Ke]=(0,g.useState)(!1),[Je,Xe]=(0,g.useState)(!1),[en,nn]=(0,g.useState)(!1),[tn,rn]=(0,g.useState)(""),on=(0,B.n)(),dn=(0,ee.eq)(le),sn={[z.g.LIQUIDITY_PERCENT]:Fe[z.g.LIQUIDITY_PERCENT].equalTo("0")?"0":Fe[z.g.LIQUIDITY_PERCENT].lessThan(new d.Percent("1","100"))?"<1":Fe[z.g.LIQUIDITY_PERCENT].toFixed(0),[z.g.LIQUIDITY]:We===z.g.LIQUIDITY?Qe:(null===(e=Fe[z.g.LIQUIDITY])||void 0===e?void 0:e.toSignificant(6))??"",[z.g.CURRENCY_A]:We===z.g.CURRENCY_A?Qe:(null===(n=Fe[z.g.CURRENCY_A])||void 0===n?void 0:n.toSignificant(6))??"",[z.g.CURRENCY_B]:We===z.g.CURRENCY_B?Qe:(null===(i=Fe[z.g.CURRENCY_B])||void 0===i?void 0:i.toSignificant(6))??""},ln=null===(u=Fe[z.g.LIQUIDITY_PERCENT])||void 0===u?void 0:u.equalTo(new d.Percent("1")),an=(0,O.t0)(null===(Q=Me)||void 0===Q||null===(m=Q.liquidityToken)||void 0===m?void 0:m.address),un=(0,O.XF)(),{gatherPermitSignature:cn,signatureData:hn}=(0,h.p)(Fe[z.g.LIQUIDITY],null===(de=un)||void 0===de?void 0:de.address),[vn,mn]=(0,q.q)(Fe[z.g.LIQUIDITY],null===(ae=un)||void 0===ae?void 0:ae.address);function gn(){return gn=se((function*(){if(!an||!Me||!ke)throw new Error("missing dependencies");if(!Fe[z.g.LIQUIDITY])throw new Error("missing liquidity amount");if(cn)try{yield cn()}catch(Ze){var e;4001!==(null===(e=Ze)||void 0===e?void 0:e.code)&&(yield mn())}else yield mn()})),gn.apply(this,arguments)}const pn=(0,g.useCallback)(((e,n)=>He(e,n)),[He]),xn=(0,g.useCallback)((e=>pn(z.g.LIQUIDITY,e)),[pn]),Cn=(0,g.useCallback)((e=>pn(z.g.CURRENCY_A,e)),[pn]),In=(0,g.useCallback)((e=>pn(z.g.CURRENCY_B,e)),[pn]),fn=(0,J.h7)(),yn=(0,c.G)();function En(){return Rn.apply(this,arguments)}function Rn(){return Rn=se((function*(){if("connected"!==Pe.status||!ke||!un||!yn)throw new Error("missing dependencies");const{[z.g.CURRENCY_A]:e,[z.g.CURRENCY_B]:n}=Fe;if(!e||!n)throw new Error("missing currency amounts");const i={[z.g.CURRENCY_A]:(0,ie.u)(e,dn)[0],[z.g.CURRENCY_B]:(0,ie.u)(n,dn)[0]};if(!De||!Le)throw new Error("missing tokens");const t=Fe[z.g.LIQUIDITY];if(!t)throw new Error("missing liquidity amount");const d=Le.isNative,l=De.isNative||d;if(!qe||!Oe)throw new Error("could not wrap");const a=yield on();if(!a)throw new Error("could not get deadline");let u,c;if(vn===q.U.APPROVED)l?(u=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],c=[d?qe.address:Oe.address,t.quotient.toString(),i[d?z.g.CURRENCY_A:z.g.CURRENCY_B].toString(),i[d?z.g.CURRENCY_B:z.g.CURRENCY_A].toString(),Pe.address,a.toHexString()]):(u=["removeLiquidity"],c=[qe.address,Oe.address,t.quotient.toString(),i[z.g.CURRENCY_A].toString(),i[z.g.CURRENCY_B].toString(),Pe.address,a.toHexString()]);else{if(null===hn)throw new Error("Attempting to confirm without approval or a signature. Please contact support.");l?(u=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],c=[d?qe.address:Oe.address,t.quotient.toString(),i[d?z.g.CURRENCY_A:z.g.CURRENCY_B].toString(),i[d?z.g.CURRENCY_B:z.g.CURRENCY_A].toString(),Pe.address,hn.deadline,!1,hn.v,hn.r,hn.s]):(u=["removeLiquidityWithPermit"],c=[qe.address,Oe.address,t.quotient.toString(),i[z.g.CURRENCY_A].toString(),i[z.g.CURRENCY_B].toString(),Pe.address,hn.deadline,!1,hn.v,hn.r,hn.s])}const h=yield Promise.all(u.map((e=>un.estimateGas[e](...c).then((e=>(0,ne.y)(e))).catch((n=>{console.error("estimateGas failed",e,c,n)}))))),v=h.findIndex((e=>r.O$.isBigNumber(e)));if(-1===v)console.error("This transaction would fail. Please contact support.");else{const e=u[v],n=h[v];nn(!0),yield un[e](...c,{gasLimit:n}).then((e=>{var n,i;nn(!1),fn(e,{type:X.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,te.H)(De),quoteCurrencyId:(0,te.H)(Le),expectedAmountBaseRaw:(null===(n=Fe[z.g.CURRENCY_A])||void 0===n?void 0:n.quotient.toString())??"0",expectedAmountQuoteRaw:(null===(i=Fe[z.g.CURRENCY_B])||void 0===i?void 0:i.quotient.toString())??"0"}),rn(e.hash),(0,s._P)(o.vp.REMOVE_LIQUIDITY_SUBMITTED,{label:[De.symbol,Le.symbol].join("/"),...Be})})).catch((e=>{nn(!1),console.error(e)}))}})),Rn.apply(this,arguments)}function Tn(){var e,n,i,r;return(0,t.jsxs)(N.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,t.jsxs)(S.m0,{align:"flex-end",children:[(0,t.jsx)(R.xv,{fontSize:24,fontWeight:"$medium",children:null===(e=Fe[z.g.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),(0,t.jsxs)(S.DA,{gap:"4px",children:[(0,t.jsx)(w.Z,{currency:De,size:24}),(0,t.jsx)(R.xv,{fontSize:24,fontWeight:"$medium",ml:10,children:null===(n=De)||void 0===n?void 0:n.symbol})]})]}),(0,t.jsx)(S.DA,{children:(0,t.jsx)(p.Z,{size:"16",color:$e.neutral2})}),(0,t.jsxs)(S.m0,{align:"flex-end",children:[(0,t.jsx)(R.xv,{fontSize:24,fontWeight:"$medium",children:null===(i=Fe[z.g.CURRENCY_B])||void 0===i?void 0:i.toSignificant(6)}),(0,t.jsxs)(S.DA,{gap:"4px",children:[(0,t.jsx)(w.Z,{currency:Le,size:24}),(0,t.jsx)(R.xv,{fontSize:24,fontWeight:"$medium",ml:10,children:null===(r=Le)||void 0===r?void 0:r.symbol})]})]}),(0,t.jsx)(R.xv,{fontSize:12,fontStyle:"italic",color:"neutral2",textAlign:"left",pt:12,children:(0,t.jsxs)(v.cC,{children:["Output is estimated. If the price changes by more than ",{allowed:dn.toSignificant(4)},"% your transaction will revert."]})})]})}function jn(){var e,n,i,r,o,d,s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(S.m0,{children:[(0,t.jsx)(R.xv,{color:"$neutral2",fontWeight:"$medium",fontSize:16,children:(0,t.jsxs)(v.cC,{children:["UNI ",{a:null===(e=De)||void 0===e?void 0:e.symbol},"/",{b:null===(n=Le)||void 0===n?void 0:n.symbol}," Burned"]})}),(0,t.jsxs)(S.DA,{children:[(0,t.jsx)(y.ge,{currencies:[De,Le]}),(0,t.jsx)(R.xv,{fontWeight:"$medium",fontSize:16,children:null===(i=Fe[z.g.LIQUIDITY])||void 0===i?void 0:i.toSignificant(6)})]})]}),Me&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(S.m0,{children:[(0,t.jsx)(R.xv,{color:"$neutral2",fontWeight:"$medium",fontSize:16,children:(0,t.jsx)(v.cC,{children:"Price"})}),(0,t.jsxs)(R.xv,{fontWeight:"$medium",fontSize:16,color:"$neutral1",children:["1 ",null===(r=De)||void 0===r?void 0:r.symbol," = ",qe?Me.priceOf(qe).toSignificant(6):"-"," ",null===(o=Le)||void 0===o?void 0:o.symbol]})]}),(0,t.jsxs)(S.m0,{children:[(0,t.jsx)("div",{}),(0,t.jsxs)(R.xv,{fontWeight:"$medium",fontSize:16,color:"$neutral1",children:["1 ",null===(d=Le)||void 0===d?void 0:d.symbol," = ",Oe?Me.priceOf(Oe).toSignificant(6):"-"," ",null===(s=De)||void 0===s?void 0:s.symbol]})]})]}),(0,t.jsx)(j.DF,{disabled:!(vn===q.U.APPROVED||null!==hn),onClick:En,children:(0,t.jsx)(R.xv,{fontWeight:"$medium",fontSize:20,children:(0,t.jsx)(v.cC,{children:"Confirm"})})})]})}const Un=(0,t.jsxs)(v.cC,{children:["Removing ",{amtA:null===(ue=Fe[z.g.CURRENCY_A])||void 0===ue?void 0:ue.toSignificant(6)}," ",{symA:null===(ce=De)||void 0===ce?void 0:ce.symbol}," and",{amtB:null===(he=Fe[z.g.CURRENCY_B])||void 0===he?void 0:he.toSignificant(6)}," ",{symB:null===(ve=Le)||void 0===ve?void 0:ve.symbol}]}),Nn=(0,g.useCallback)((e=>{pn(z.g.LIQUIDITY_PERCENT,e.toString())}),[pn]),bn=(null===(me=De)||void 0===me?void 0:me.isNative)||(null===(ge=Le)||void 0===ge?void 0:ge.isNative),wn=Boolean("connected"===Pe.status&&P.Fl[Pe.chainId]&&(De&&(null===(pe=P.Fl[Pe.chainId])||void 0===pe?void 0:pe.equals(De))||Le&&(null===(xe=P.Fl[Pe.chainId])||void 0===xe?void 0:xe.equals(Le)))),_n=(0,g.useCallback)((e=>{Ye&&(0,te.H)(e)===Ye?Ae(`/remove/v2/${(0,te.H)(e)}/${Se}`):Ae(`/remove/v2/${(0,te.H)(e)}/${Ye}`)}),[Se,Ye,Ae]),An=(0,g.useCallback)((e=>{Se&&(0,te.H)(e)===Se?Ae(`/remove/v2/${Ye}/${(0,te.H)(e)}`):Ae(`/remove/v2/${Se}/${(0,te.H)(e)}`)}),[Se,Ye,Ae]),Sn=(0,g.useCallback)((()=>{Ke(!1),tn&&pn(z.g.LIQUIDITY_PERCENT,"0"),rn("")}),[pn,tn]),[Yn,Dn]=(0,$.Z)(Number.parseInt(Fe[z.g.LIQUIDITY_PERCENT].toFixed(0)),Nn);return yn?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(re.Z,{children:[(0,t.jsx)(_.w,{creating:!1,adding:!1,autoSlippage:le}),(0,t.jsxs)(oe.im,{children:[(0,t.jsx)(D.Z,{isOpen:Ve,onDismiss:Sn,attemptingTxn:en,hash:tn||"",reviewContent:()=>(0,t.jsx)(D.p,{title:(0,t.jsx)(v.cC,{children:"You will receive"}),onDismiss:Sn,topContent:Tn,bottomContent:jn}),pendingText:Un}),(0,t.jsxs)(N.Tz,{gap:"md",children:[(0,t.jsx)(U.Pj,{children:(0,t.jsx)(N.Tz,{gap:"10px",children:(0,t.jsx)(f.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,t.jsxs)(v.cC,{children:[(0,t.jsx)("b",{children:"Tip:"})," Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive."]})})})}),(0,t.jsx)(U.hl,{children:(0,t.jsxs)(N.Tz,{gap:"20px",children:[(0,t.jsxs)(S.m0,{children:[(0,t.jsx)(R.xv,{fontWeight:"$medium",children:(0,t.jsx)(v.cC,{children:"Remove amount"})}),(0,t.jsx)(oe.DC,{fontWeight:535,onClick:()=>{Xe(!Je)},children:Je?(0,t.jsx)(v.cC,{children:"Simple"}):(0,t.jsx)(v.cC,{children:"Detailed"})})]}),(0,t.jsx)(S.ZP,{style:{alignItems:"flex-end"},children:(0,t.jsxs)(R.xv,{fontSize:72,fontWeight:"$medium",children:[sn[z.g.LIQUIDITY_PERCENT],"%"]})}),!Je&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y.Z,{value:Yn,onChange:Dn}),(0,t.jsxs)(S.m0,{children:[(0,t.jsx)(oe.ER,{onClick:()=>pn(z.g.LIQUIDITY_PERCENT,"25"),width:"20%",children:"25%"}),(0,t.jsx)(oe.ER,{onClick:()=>pn(z.g.LIQUIDITY_PERCENT,"50"),width:"20%",children:"50%"}),(0,t.jsx)(oe.ER,{onClick:()=>pn(z.g.LIQUIDITY_PERCENT,"75"),width:"20%",children:"75%"}),(0,t.jsx)(oe.ER,{onClick:()=>pn(z.g.LIQUIDITY_PERCENT,"100"),width:"20%",children:"Max"})]})]})]})}),!Je&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N.lg,{children:(0,t.jsx)(x.Z,{size:"16",color:$e.neutral2})}),(0,t.jsx)(U.hl,{children:(0,t.jsxs)(N.Tz,{gap:"10px",children:[(0,t.jsxs)(S.m0,{children:[(0,t.jsx)(R.xv,{fontSize:24,fontWeight:"$medium",children:sn[z.g.CURRENCY_A]||"-"}),(0,t.jsxs)(S.DA,{children:[(0,t.jsx)(w.Z,{currency:De,style:{marginRight:"12px"}}),(0,t.jsx)(R.xv,{fontSize:24,fontWeight:"$medium",id:"remove-liquidity-tokena-symbol",children:null===(Ce=De)||void 0===Ce?void 0:Ce.symbol})]})]}),(0,t.jsxs)(S.m0,{children:[(0,t.jsx)(R.xv,{fontSize:24,fontWeight:"$medium",children:sn[z.g.CURRENCY_B]||"-"}),(0,t.jsxs)(S.DA,{children:[(0,t.jsx)(w.Z,{currency:Le,style:{marginRight:"12px"}}),(0,t.jsx)(R.xv,{fontSize:24,fontWeight:"$medium",id:"remove-liquidity-tokenb-symbol",children:null===(Ie=Le)||void 0===Ie?void 0:Ie.symbol})]})]}),"connected"===Pe.status&&(wn||bn)?(0,t.jsx)(S.m0,{style:{justifyContent:"flex-end"},children:bn?(0,t.jsx)(f.m_,{to:`/remove/v2/${(null===(fe=De)||void 0===fe?void 0:fe.isNative)&&P.Fl[Pe.chainId]?null===(ye=P.Fl[Pe.chainId])||void 0===ye?void 0:ye.address:Se}/${(null===(Ee=Le)||void 0===Ee?void 0:Ee.isNative)&&P.Fl[Pe.chainId]?null===(Re=P.Fl[Pe.chainId])||void 0===Re?void 0:Re.address:Ye}`,children:"Receive WETH"}):wn?(0,t.jsx)(f.m_,{to:`/remove/v2/${De&&(null===(Te=P.Fl[Pe.chainId])||void 0===Te?void 0:Te.equals(De))?"ETH":Se}/${Le&&(null===(je=P.Fl[Pe.chainId])||void 0===je?void 0:je.equals(Le))?"ETH":Ye}`,children:"Receive ETH"}):null}):null]})})]}),Je&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.Z,{value:sn[z.g.LIQUIDITY],onUserInput:xn,onMax:()=>{pn(z.g.LIQUIDITY_PERCENT,"100")},showMaxButton:!ln,currency:null===(Ue=Me)||void 0===Ue?void 0:Ue.liquidityToken,pair:Me,id:"liquidity-amount"}),(0,t.jsx)(N.lg,{children:(0,t.jsx)(x.Z,{size:"16",color:$e.neutral2})}),(0,t.jsx)(b.Z,{hideBalance:!0,value:sn[z.g.CURRENCY_A],onUserInput:Cn,onMax:()=>pn(z.g.LIQUIDITY_PERCENT,"100"),showMaxButton:!ln,currency:De,label:"Output",onCurrencySelect:_n,id:"remove-liquidity-tokena"}),(0,t.jsx)(N.lg,{children:(0,t.jsx)(p.Z,{size:"16",color:$e.neutral2})}),(0,t.jsx)(b.Z,{hideBalance:!0,value:sn[z.g.CURRENCY_B],onUserInput:In,onMax:()=>pn(z.g.LIQUIDITY_PERCENT,"100"),showMaxButton:!ln,currency:Le,label:"Output",onCurrencySelect:An,id:"remove-liquidity-tokenb"})]}),Me&&(0,t.jsxs)("div",{style:{padding:"10px 20px"},children:[(0,t.jsxs)(S.m0,{children:[(0,t.jsx)(v.cC,{children:"Price:"}),(0,t.jsxs)("div",{children:["1 ",null===(Ne=De)||void 0===Ne?void 0:Ne.symbol," = ",qe?Me.priceOf(qe).toSignificant(6):"-"," ",null===(be=Le)||void 0===be?void 0:be.symbol]})]}),(0,t.jsxs)(S.m0,{children:[(0,t.jsx)("div",{}),(0,t.jsxs)("div",{children:["1 ",null===(we=Le)||void 0===we?void 0:we.symbol," = ",Oe?Me.priceOf(Oe).toSignificant(6):"-"," ",null===(_e=De)||void 0===_e?void 0:_e.symbol]})]})]}),(0,t.jsx)("div",{style:{position:"relative"},children:"connected"!==Pe.status?(0,t.jsx)(s.M8,{events:[o.TM.onClick],name:o.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:o.xo.CONNECT_WALLET_BUTTON,children:(0,t.jsx)(j.Sy,{onClick:ze,children:(0,t.jsx)(v.cC,{children:"Connect wallet"})})}):(0,t.jsxs)(S.m0,{children:[(0,t.jsx)(j.gn,{onClick:function(){return gn.apply(this,arguments)},confirmed:vn===q.U.APPROVED||null!==hn,disabled:vn!==q.U.NOT_APPROVED||null!==hn,mr:"0.5rem",fontWeight:535,fontSize:16,children:vn===q.U.PENDING?(0,t.jsx)(L.bb,{children:(0,t.jsx)(v.cC,{children:"Approving"})}):vn===q.U.APPROVED||null!==hn?(0,t.jsx)(v.cC,{children:"Approved"}):(0,t.jsx)(v.cC,{children:"Approve"})}),(0,t.jsx)(j.Kd,{onClick:()=>{Ke(!0)},disabled:!Ge||null===hn&&vn!==q.U.APPROVED,error:!Ge&&!!Fe[z.g.CURRENCY_A]&&!!Fe[z.g.CURRENCY_B],children:(0,t.jsx)(R.xv,{fontSize:16,fontWeight:"$medium",children:Ze||(0,t.jsx)(v.cC,{children:"Remove"})})})]})})]})]})]}),Me?(0,t.jsx)(N.Tz,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:(0,t.jsx)(A.WP,{showUnwrapped:wn,pair:Me})}):null]}):(0,t.jsx)(a.A,{})}}}]);
//# sourceMappingURL=9469.e7f088f0.chunk.js.map