"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4455,5118],{37525:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(45779),r=t(68090),o=t.n(r);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,l=void 0===o?24:o,c=s(e,["color","size"]);return i.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("polyline",{points:"18 15 12 9 6 15"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="ChevronUp";const c=l},57809:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(45779),r=t(68090),o=t.n(r);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,l=void 0===o?24:o,c=s(e,["color","size"]);return i.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Plus";const c=l},74293:(e,n,t)=>{t.d(n,{Z:()=>M});var i=t(92936),r=t(5985),o=t(26729),a=t(47583),s=t(32546),l=t(57852),c=t(6823),d=t(36399),u=t(45779),p=t(14411),m=t(66869),h=t(54972),f=t(55874),x=t(66136),y=t(47841),b=t(93741),g=t(96326),v=t(73720),j=t(69780),w=t(5967),_=t(17706),C=t(94284),N=t(24210),I=t(19996);const k=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-2f6dc0b6-0"})`
  ${f.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,$=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-2f6dc0b6-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,O=(0,p.default)(j.Ux).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-2f6dc0b6-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,d._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,P=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-2f6dc0b6-3"})`
  ${f.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,T=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-2f6dc0b6-4"})`
  ${f.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,d._j)(.2,e.neutral2)};
  }
`,D=(0,p.default)(T).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-2f6dc0b6-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,A=p.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-2f6dc0b6-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,S=(0,p.default)(g.r).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-2f6dc0b6-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,E=p.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-2f6dc0b6-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${m.j$.sm}px) {
    font-size: 16px;
  }
`,R=p.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-2f6dc0b6-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,B=(0,p.default)(_.I).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-2f6dc0b6-10"})`
  ${s._Q};
  text-align: left;
`,z=(0,p.default)(b.Kh).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-2f6dc0b6-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function M({value:e,onUserInput:n,onMax:t,showMaxButton:d,onCurrencySelect:m,currency:f,otherCurrency:b,id:g,currencySearchFilters:j,showCurrencyAmount:_,renderBalance:T,fiatValue:M,hideBalance:U=!1,pair:W=null,hideInput:V=!1,locked:G=!1,loading:L=!1,...q}){var K,Z,F,X,H;const[Q,J]=(0,u.useState)(!1),{account:Y,chainId:ee}=(0,o.G)(),ne=(0,l.Nb)(ee),te=(0,v._h)(Y??void 0,f??void 0),ie=(0,p.useTheme)(),{formatCurrencyAmount:re}=(0,x.Gb)(),oe=(0,u.useCallback)((()=>{J(!1)}),[J]);return(0,i.jsxs)(k,{id:g,hideInput:V,...q,children:[!G&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)($,{hideInput:V,disabled:!ne,children:[(0,i.jsxs)(P,{style:V?{padding:"0",borderRadius:"8px"}:{},selected:!m,children:[!V&&(0,i.jsx)(B,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:L,maxDecimals:null===(K=f)||void 0===K?void 0:K.decimals}),(0,i.jsx)(z,{$fullWidth:V,children:(0,i.jsx)(O,{disabled:!ne,visible:void 0!==f,selected:!!f,hideInput:V,className:"open-currency-select-button",onClick:()=>{m&&J(!0)},pointerEvents:m?void 0:"none",children:(0,i.jsxs)(A,{children:[(0,i.jsxs)(C.DA,{children:[W?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(y.ge,{currencies:[W.token0,W.token1],size:24})}):f&&(0,i.jsx)(w.Z,{style:{marginRight:"0.5rem"},currency:f,size:24}),W?(0,i.jsxs)(E,{className:"pair-name-container",children:[null===(Z=W)||void 0===Z?void 0:Z.token0.symbol,":",null===(F=W)||void 0===F?void 0:F.token1.symbol]}):(0,i.jsx)(E,{className:"token-symbol-container",active:Boolean(f&&f.symbol),children:(f&&f.symbol&&f.symbol.length>20?f.symbol.slice(0,4)+"..."+f.symbol.slice(f.symbol.length-5,f.symbol.length):null===(X=f)||void 0===X?void 0:X.symbol)||(0,i.jsx)(c.cC,{children:"Select a token"})})]}),m&&(0,i.jsx)(S,{selected:!!f})]})})})]}),Boolean(!V&&!U&&f)&&(0,i.jsx)(D,{children:(0,i.jsxs)(C.m0,{children:[(0,i.jsx)(s.EG,{$loading:L,children:M&&(0,i.jsx)(I.x,{fiatValue:M})}),Y&&(0,i.jsxs)(C.DA,{style:{height:"17px"},children:[(0,i.jsx)(h.Tv.DeprecatedBody,{onClick:t,color:ie.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!U&&f&&te)&&((null===(H=T)||void 0===H?void 0:H(te))||(0,i.jsxs)(c.cC,{children:["Balance:"," ",{amount:re({amount:te,type:x.sw.TokenNonTx})}]}))}),Boolean(d&&te)&&(0,i.jsx)(a.M8,{events:[r.TM.onClick],name:r.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:r.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(R,{onClick:t,children:(0,i.jsx)(c.cC,{children:"MAX"})})})]})]})})]})}),m&&(0,i.jsx)(N.Z,{isOpen:Q,onDismiss:oe,onCurrencySelect:m,selectedCurrency:f,otherSelectedCurrency:b,showCurrencyAmount:_,currencySearchFilters:j})]})}},39753:(e,n,t)=>{t.d(n,{q:()=>w,w:()=>C});var i=t(92936),r=t(69751),o=t(6823),a=t(21926),s=t(43454),l=t(6282),c=t(22953),d=t(47856),u=t(47632),p=t(31744),m=t(14411),h=t(54972),f=t(55874),x=t(72993),y=t(94284);const b=m.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${f.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,g=(0,m.default)(s.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,m.default)(h.Tv.H1Small).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,m.default)(a.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function w({origin:e}){return(0,i.jsx)(b,{children:(0,i.jsxs)(y.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(s.rU,{to:e,children:(0,i.jsx)(j,{})}),(0,i.jsx)(v,{children:(0,i.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const _=(0,m.default)(h.Tv.H1Small).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function C({adding:e,creating:n,autoSlippage:t,children:a}){const s=(0,x.x)(),h=(0,m.useTheme)(),f=(0,d.T)(),v=(0,l.s0)();return(0,i.jsx)(b,{children:(0,i.jsxs)(y.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(g,{to:"..",onClick:n=>{n.preventDefault(),v(-1),e&&(f((0,u.dA)()),f((0,p.dA)()))},flex:a?"1":void 0,children:(0,i.jsx)(j,{stroke:h.neutral2})}),(0,i.jsx)(_,{$center:!a,children:n?(0,i.jsx)(o.cC,{children:"Create a pair"}):e?(0,i.jsx)(o.cC,{children:"Add liquidity"}):(0,i.jsx)(o.cC,{children:"Remove liquidity"})}),a&&(0,i.jsx)(c.xu,{style:{marginRight:".5rem"},children:a}),(0,i.jsx)(r.Z,{autoSlippage:t,chainId:s,hideRoutingSettings:!0})]})})}},29025:(e,n,t)=>{t.d(n,{U:()=>i,q:()=>v});var i,r=t(16790),o=t(5985),a=t(26729),s=t(47583),l=t(7151),c=t(65471),d=t(11016),u=t(45779),p=t(64510),m=t(72993);function h(e,n,t,i,r,o,a){try{var s=e[o](a),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(i,r)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function a(e){h(o,i,r,a,s,"next",e)}function s(e){h(o,i,r,a,s,"throw",e)}a(void 0)}))}}function x(e,n,t){var h,x,y;const b=(0,m.x)(),g=(null===(x=e)||void 0===x||null===(h=x.currency)||void 0===h?void 0:h.isToken)?e.currency:void 0,v=function(e,n,t){var r,o;const{account:s}=(0,a.G)(),l=(null===(o=e)||void 0===o||null===(r=o.currency)||void 0===r?void 0:r.isToken)?e.currency:void 0,{tokenAllowance:d}=(0,c.Fx)(l,s??void 0,n),p=t(l,n);return(0,u.useMemo)((()=>e&&n?e.currency.isNative?i.APPROVED:d?d.lessThan(e)?p?i.PENDING:i.NOT_APPROVED:i.APPROVED:i.UNKNOWN:i.UNKNOWN),[e,p,n,d])}(e,n,t),j=(0,l.Ib)(null===(y=g)||void 0===y?void 0:y.address),w=(0,u.useCallback)(f((function*(){function t(e){var n;console.warn(`${(null===(n=g)||void 0===n?void 0:n.symbol)||"Token"} approval failed:`,e)}if(v!==i.NOT_APPROVED)return t("approve was called unnecessarily");if(!b)return t("no chainId");if(!g)return t("no token");if(!j)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let a=!1;const l=yield j.estimateGas.approve(n,r.Bz).catch((()=>(a=!0,j.estimateGas.approve(n,e.quotient.toString()))));return j.approve(n,a?e.quotient.toString():r.Bz,{gasLimit:(0,p.y)(l)}).then((t=>{var i;const r={chain_id:b,token_symbol:null===(i=g)||void 0===i?void 0:i.symbol,token_address:(0,d.DT)(g)};return(0,s._P)(o.Je.APPROVE_TOKEN_TXN_SUBMITTED,r),{response:t,tokenAddress:g.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))})),[v,g,j,e,n,b]);return[v,w]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(i||(i={}));var y=t(99454),b=t(47186);function g(e){const n=(0,y.h7)();return(0,u.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:i,spenderAddress:r,amount:o}=e;n(t,{type:b.i.APPROVAL,tokenAddress:i,spender:r,amount:o.quotient.toString()})}}))),[n,e])}function v(e,n){const[t,i]=x(e,n,y.wB);return[t,g(i)]}},65118:(e,n,t)=>{t.d(n,{Z:()=>s,e:()=>a});var i=t(92936),r=t(14411),o=t(62587);const a=r.default.main.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
`;function s(e){return(0,i.jsx)(a,{...e})}},61744:(e,n,t)=>{t.d(n,{u:()=>r});const i=new(t(76078).Fraction)(1,1);function r(e,n){if(n.lessThan(0)||n.greaterThan(i))throw new Error("Unexpected slippage");return[e.multiply(i.subtract(n)).quotient,e.multiply(i.add(n)).quotient]}}}]);
//# sourceMappingURL=4455.ed8f29f2.chunk.js.map