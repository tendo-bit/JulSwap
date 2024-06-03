"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[155],{10404:(e,n,i)=>{i.d(n,{Z:()=>l});var r=i(45779),o=i(68090),s=i.n(o);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},t.apply(this,arguments)}function a(e,n){if(null==e)return{};var i,r,o=function(e,n){if(null==e)return{};var i,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=(0,r.forwardRef)((function(e,n){var i=e.color,o=void 0===i?"currentColor":i,s=e.size,c=void 0===s?24:s,l=a(e,["color","size"]);return r.createElement("svg",t({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="AlertCircle";const l=c},33882:(e,n,i)=>{i.d(n,{Z:()=>l});var r=i(45779),o=i(68090),s=i.n(o);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},t.apply(this,arguments)}function a(e,n){if(null==e)return{};var i,r,o=function(e,n){if(null==e)return{};var i,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=(0,r.forwardRef)((function(e,n){var i=e.color,o=void 0===i?"currentColor":i,s=e.size,c=void 0===s?24:s,l=a(e,["color","size"]);return r.createElement("svg",t({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("polyline",{points:"16 12 12 8 8 12"}),r.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="ArrowUpCircle";const l=c},16709:(e,n,i)=>{i.d(n,{Z:()=>r});i(45779);const r=i.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},99819:(e,n,i)=>{i.d(n,{p:()=>xe,Z:()=>je});var r=i(92936),o=i(76078),s=i(26729),t=i(61077),a=i(33932),c=i(57852),l=i(39671),d=i(6823),u=i(45779),m=i(33882),p=i(19733),x=i(10404),h=i(99454),f=i(14411),j=i(54972),y=i(2148),g=i(54703),b=i(72993),v=i(99582),C=i(16709),w=i(68707),T=i(61592),I=i.n(T),A=i(64370),k=i(27179),_=i(53286),S=i(47186);function D(e,n,i){return new o.Fraction(e,I().exponentiate(I().BigInt(10),I().BigInt(n))).toSignificant(i)}function E({rawAmount:e,symbol:n,decimals:i,sigFigs:o}){return(0,r.jsxs)(r.Fragment,{children:[D(e,i,o)," ",n]})}function N({rawAmount:e,currencyId:n,sigFigs:i=6}){const o=(0,l.U8)(n);return o?(0,r.jsx)(E,{rawAmount:e,decimals:o.decimals,sigFigs:i,symbol:o.symbol??"???"}):null}function O({info:{recipient:e,uniAmountRaw:n}}){const{ENSName:i}=(0,k.Z)(),o=i??e;return"string"===typeof n?(0,r.jsxs)(d.cC,{children:["Claim ",(0,r.jsx)(E,{rawAmount:n,symbol:"UNI",decimals:18,sigFigs:4})," for ",{name:o}]}):(0,r.jsxs)(d.cC,{children:["Claim UNI reward for ",{name:o}]})}function L(){return(0,r.jsx)(d.cC,{children:"Submit new proposal"})}function R({info:e}){var n,i,o;const s=(0,l.dQ)(e.tokenAddress);return(null===(n=w.BigNumber.from(e.amount))||void 0===n?void 0:n.eq(0))?(0,r.jsxs)(d.cC,{children:["Revoke ",{sym:null===(i=s)||void 0===i?void 0:i.symbol}]}):(0,r.jsxs)(d.cC,{children:["Approve ",{sym:null===(o=s)||void 0===o?void 0:o.symbol}]})}function P({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;if(e.reason&&e.reason.trim().length>0)switch(e.decision){case _.N.For:return(0,r.jsxs)(d.cC,{children:["Vote for proposal ",{proposalKey:n}]});case _.N.Abstain:return(0,r.jsxs)(d.cC,{children:["Vote to abstain on proposal ",{proposalKey:n}]});case _.N.Against:return(0,r.jsxs)(d.cC,{children:["Vote against proposal ",{proposalKey:n}]})}else switch(e.decision){case _.N.For:return(0,r.jsxs)(d.cC,{children:["Vote for proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case _.N.Abstain:return(0,r.jsxs)(d.cC,{children:["Vote to abstain on proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case _.N.Against:return(0,r.jsxs)(d.cC,{children:["Vote against proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']})}}function U({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,r.jsxs)(d.cC,{children:["Queue proposal ",{proposalKey:n},"."]})}function F({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,r.jsxs)(d.cC,{children:["Execute proposal ",{proposalKey:n},"."]})}function V({info:{delegatee:e}}){const{ENSName:n}=(0,k.Z)(e),i=n??e;return(0,r.jsxs)(d.cC,{children:["Delegate voting power to ",{name:i}]})}function W({info:{chainId:e,currencyAmountRaw:n,unwrapped:i}}){const o=e?(0,A.gX)(e):void 0;var s,t,a,c,l,u;return i?(0,r.jsxs)(d.cC,{children:["Unwrap"," ",(0,r.jsx)(E,{rawAmount:n,symbol:(null===(t=o)||void 0===t||null===(s=t.wrapped)||void 0===s?void 0:s.symbol)??"WETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(a=o)||void 0===a?void 0:a.symbol)??"ETH"}]}):(0,r.jsxs)(d.cC,{children:["Wrap"," ",(0,r.jsx)(E,{rawAmount:n,symbol:(null===(c=o)||void 0===c?void 0:c.symbol)??"ETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(u=o)||void 0===u||null===(l=u.wrapped)||void 0===l?void 0:l.symbol)??"WETH"}]})}function $(){return(0,r.jsx)(d.cC,{children:"Deposit liquidity"})}function z(){return(0,r.jsx)(d.cC,{children:"Withdraw deposited liquidity"})}function M({info:{baseCurrencyId:e,quoteCurrencyId:n}}){var i,o;const s=(0,l.U8)(e),t=(0,l.U8)(n);return(0,r.jsxs)(d.cC,{children:["Migrate ",{baseSymbol:null===(i=s)||void 0===i?void 0:i.symbol},"/",{quoteSymbol:null===(o=t)||void 0===o?void 0:o.symbol}," liquidity to V3"]})}function q({info:{quoteCurrencyId:e,baseCurrencyId:n}}){var i,o;const s=(0,l.U8)(n),t=(0,l.U8)(e);return(0,r.jsxs)(d.cC,{children:["Create ",{baseSymbol:null===(i=s)||void 0===i?void 0:i.symbol},"/",{quoteSymbol:null===(o=t)||void 0===o?void 0:o.symbol}," V3 pool"]})}function H({info:{currencyId0:e,currencyId1:n}}){var i,o;const s=(0,l.U8)(e),t=(0,l.U8)(n);return(0,r.jsxs)(d.cC,{children:["Collect ",{symbol0:null===(i=s)||void 0===i?void 0:i.symbol},"/",{symbol1:null===(o=t)||void 0===o?void 0:o.symbol}," fees"]})}function B({info:{baseCurrencyId:e,quoteCurrencyId:n,expectedAmountBaseRaw:i,expectedAmountQuoteRaw:o}}){return(0,r.jsxs)(d.cC,{children:["Remove"," ",(0,r.jsx)(N,{rawAmount:i,currencyId:e,sigFigs:3})," and"," ",(0,r.jsx)(N,{rawAmount:o,currencyId:n,sigFigs:3})]})}function Z({info:{createPool:e,quoteCurrencyId:n,baseCurrencyId:i}}){var o,s,t,a;const c=(0,l.U8)(i),u=(0,l.U8)(n);return e?(0,r.jsxs)(d.cC,{children:["Create pool and add ",{baseSymbol:null===(o=c)||void 0===o?void 0:o.symbol},"/",{quoteSymbol:null===(s=u)||void 0===s?void 0:s.symbol}," V3 liquidity"]}):(0,r.jsxs)(d.cC,{children:["Add ",{baseSymbol:null===(t=c)||void 0===t?void 0:t.symbol},"/",{quoteSymbol:null===(a=u)||void 0===a?void 0:a.symbol}," V3 liquidity"]})}function Q({info:{quoteCurrencyId:e,expectedAmountBaseRaw:n,expectedAmountQuoteRaw:i,baseCurrencyId:o}}){return(0,r.jsxs)(d.cC,{children:["Add ",(0,r.jsx)(N,{rawAmount:n,currencyId:o,sigFigs:3})," ","and ",(0,r.jsx)(N,{rawAmount:i,currencyId:e,sigFigs:3})," ","to Uniswap V2"]})}function K({info:e}){return(0,r.jsxs)(d.cC,{children:["Sent",(0,r.jsx)(N,{rawAmount:e.amount,currencyId:e.currencyId,sigFigs:6})," to"," ",{recipient:e.recipient}]})}function Y({info:e}){return e.tradeType===o.TradeType.EXACT_INPUT?(0,r.jsxs)(d.cC,{children:["Swap exactly"," ",(0,r.jsx)(N,{rawAmount:e.inputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for"," ",(0,r.jsx)(N,{rawAmount:e.settledOutputCurrencyAmountRaw??e.expectedOutputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]}):(0,r.jsxs)(d.cC,{children:["Swap"," ",(0,r.jsx)(N,{rawAmount:e.expectedInputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for exactly"," ",(0,r.jsx)(N,{rawAmount:e.outputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]})}function G({info:e}){switch(e.type){case S.i.ADD_LIQUIDITY_V3_POOL:return(0,r.jsx)(Z,{info:e});case S.i.ADD_LIQUIDITY_V2_POOL:return(0,r.jsx)(Q,{info:e});case S.i.CLAIM:return(0,r.jsx)(O,{info:e});case S.i.DEPOSIT_LIQUIDITY_STAKING:return(0,r.jsx)($,{});case S.i.WITHDRAW_LIQUIDITY_STAKING:return(0,r.jsx)(z,{});case S.i.SWAP:return(0,r.jsx)(Y,{info:e});case S.i.APPROVAL:return(0,r.jsx)(R,{info:e});case S.i.VOTE:return(0,r.jsx)(P,{info:e});case S.i.DELEGATE:return(0,r.jsx)(V,{info:e});case S.i.WRAP:return(0,r.jsx)(W,{info:e});case S.i.CREATE_V3_POOL:return(0,r.jsx)(q,{info:e});case S.i.MIGRATE_LIQUIDITY_V3:return(0,r.jsx)(M,{info:e});case S.i.COLLECT_FEES:return(0,r.jsx)(H,{info:e});case S.i.REMOVE_LIQUIDITY_V3:return(0,r.jsx)(B,{info:e});case S.i.QUEUE:return(0,r.jsx)(U,{info:e});case S.i.EXECUTE:return(0,r.jsx)(F,{info:e});case S.i.SUBMIT_PROPOSAL:return(0,r.jsx)(L,{});case S.i.SEND:return(0,r.jsx)(K,{info:e})}}var X=i(69780),J=i(44591),ee=i(2562),ne=i(94284);const ie=f.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__Wrapper",componentId:"sc-5616b2b8-0"})`
  height: 90px;
  width: 90px;
`,re=f.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,oe=f.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,se=f.default.circle.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__Circle",componentId:"sc-5616b2b8-1"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${re} 0.9s ease-in-out;
  animation: ${re} 0.9s ease-in-out;
`,te=f.default.polyline.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__PolyLine",componentId:"sc-5616b2b8-2"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${oe} 0.9s 0.35s ease-in-out forwards;
  animation: ${oe} 0.9s 0.35s ease-in-out forwards;
`;function ae({className:e}){const n=(0,f.useTheme)();return(0,r.jsx)(ie,{className:e,"data-testid":"animated-confirmation",children:(0,r.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,r.jsx)(se,{className:"path circle",fill:"none",stroke:n.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,r.jsx)(te,{className:"path check",fill:"none",stroke:n.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}const ce=f.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__Wrapper",componentId:"sc-ad7a7442-0"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
  padding: 16px;
`,le=(0,f.default)(J.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__BottomSection",componentId:"sc-ad7a7442-1"})`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,de=(0,f.default)(J.lg).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__ConfirmedIcon",componentId:"sc-ad7a7442-2"})`
  padding: ${({inline:e})=>e?"20px 0":"32px 0;"};
`,ue=(0,f.default)(J.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__ConfirmationModalContentWrapper",componentId:"sc-ad7a7442-3"})`
  padding-bottom: 12px;
`;function me({onDismiss:e,pendingText:n,inline:i}){return(0,r.jsx)(ce,{children:(0,r.jsxs)(J.Tz,{gap:"md",children:[!i&&(0,r.jsxs)(ne.m0,{children:[(0,r.jsx)("div",{}),(0,r.jsx)(j.Tw,{onClick:e})]}),(0,r.jsx)(de,{inline:i,children:(0,r.jsx)(j._1,{src:C.Z,alt:"loader",size:i?"40px":"90px"})}),(0,r.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,r.jsx)(j.Tv.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,r.jsx)(d.cC,{children:"Waiting for confirmation"})}),(0,r.jsx)(j.Tv.SubHeader,{color:"neutral1",textAlign:"center",children:n}),(0,r.jsx)(j.Tv.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,r.jsx)(d.cC,{children:"Confirm this transaction in your wallet"})})]})]})})}function pe({onDismiss:e,chainId:n,hash:i,currencyToAdd:t,inline:a}){var c,x;const h=(0,f.useTheme)(),{connector:y}=(0,s.G)(),b=null===(c=t)||void 0===c?void 0:c.wrapped,v=(null===(x=(0,l.J3)(b))||void 0===x?void 0:x.logoUrl)??"",[C,w]=(0,u.useState)(),T=(0,u.useCallback)((()=>{var e;(null===(e=b)||void 0===e?void 0:e.symbol)&&y.watchAsset&&y.watchAsset({address:b.address,symbol:b.symbol,decimals:b.decimals,image:v}).then((()=>w(!0))).catch((()=>w(!1)))}),[y,v,b]),I=n===o.ChainId.MAINNET?d.t`View on  Etherscan`:d.t`View on Block Explorer`;return(0,r.jsx)(ce,{children:(0,r.jsxs)(J.Tz,{children:[!a&&(0,r.jsxs)(ne.m0,{children:[(0,r.jsx)("div",{}),(0,r.jsx)(j.Tw,{onClick:e})]}),(0,r.jsx)(de,{inline:a,children:(0,r.jsx)(m.Z,{strokeWidth:1,size:a?"40px":"75px",color:h.accent1})}),(0,r.jsxs)(ue,{gap:"md",justify:"center",children:[(0,r.jsx)(j.Tv.MediumHeader,{textAlign:"center",children:(0,r.jsx)(d.cC,{children:"Transaction submitted"})}),t&&y.watchAsset&&(0,r.jsx)(X.Sy,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:T,children:C?(0,r.jsxs)(ne.DA,{children:[(0,r.jsxs)(d.cC,{children:["Added ",{sym:t.symbol}," "]}),(0,r.jsx)(p.Z,{size:"16px",stroke:h.success,style:{marginLeft:"6px"}})]}):(0,r.jsx)(ne.DA,{children:(0,r.jsxs)(d.cC,{children:["Add ",{sym:t.symbol}]})})}),(0,r.jsx)(X.DF,{onClick:e,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,r.jsx)(j.Tv.HeadlineSmall,{color:h.deprecated_accentTextLightPrimary,children:a?(0,r.jsx)(d.cC,{children:"Return"}):(0,r.jsx)(d.cC,{children:"Close"})})}),n&&i&&(0,r.jsx)(j.dL,{href:(0,g.E)(n,i,g.r.TRANSACTION),children:(0,r.jsx)(j.Tv.Link,{color:h.accent1,children:I})})]})]})})}function xe({title:e,bottomContent:n,onDismiss:i,topContent:o,headerContent:s}){var t;return(0,r.jsxs)(ce,{children:[(0,r.jsxs)(J.Tz,{gap:"sm",children:[(0,r.jsxs)(ne.ZP,{children:[null===(t=s)||void 0===t?void 0:t(),(0,r.jsx)(ne.ZP,{justify:"center",marginLeft:"24px",children:(0,r.jsx)(j.Tv.SubHeader,{children:e})}),(0,r.jsx)(j.Tw,{onClick:i,"data-testid":"confirmation-close-icon"})]}),o()]}),n&&(0,r.jsx)(le,{gap:"16px",children:n()})]})}const he=(0,f.default)(t.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__StyledL2Badge",componentId:"sc-ad7a7442-4"})`
  padding: 6px 8px;
`;function fe({onDismiss:e,chainId:n,hash:i,pendingText:o,inline:s}){var t;const l=(0,f.useTheme)(),u=(0,h.kF)(i),m=u&&(0,h.qy)(u),p=(null===(t=u)||void 0===t?void 0:t.status)===v.LND.Confirmed,y=m&&u.confirmedTime?(u.confirmedTime-u.addedTime)/1e3:void 0,b=c.T_[n];return(0,r.jsx)(ce,{children:(0,r.jsxs)(J.Tz,{children:[!s&&(0,r.jsxs)(ne.m0,{mb:"16px",children:[(0,r.jsx)(he,{children:(0,r.jsxs)(ne.DA,{gap:"sm",children:[(0,r.jsx)(a.E,{chainId:n}),(0,r.jsx)(j.Tv.SubHeaderSmall,{children:b.label})]})}),(0,r.jsx)(j.Tw,{onClick:e})]}),(0,r.jsx)(de,{inline:s,children:m?p?(0,r.jsx)(ae,{}):(0,r.jsx)(x.Z,{strokeWidth:1,size:s?"40px":"90px",color:l.critical}):(0,r.jsx)(j._1,{src:C.Z,alt:"loader",size:s?"40px":"90px"})}),(0,r.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,r.jsx)(j.Tv.SubHeaderLarge,{textAlign:"center",children:i?m?p?(0,r.jsx)(d.cC,{children:"Success"}):(0,r.jsx)(d.cC,{children:"Error"}):(0,r.jsx)(d.cC,{children:"Transaction submitted"}):(0,r.jsx)(d.cC,{children:"Confirm transaction in wallet"})}),(0,r.jsx)(j.Tv.BodySecondary,{textAlign:"center",children:u?(0,r.jsx)(G,{info:u.info}):o}),n&&i?(0,r.jsx)(j.dL,{href:(0,g.E)(n,i,g.r.TRANSACTION),children:(0,r.jsx)(j.Tv.SubHeaderSmall,{color:l.accent1,children:(0,r.jsx)(d.cC,{children:"View on Explorer"})})}):(0,r.jsx)("div",{style:{height:"17px"}}),(0,r.jsx)(j.Tv.SubHeaderSmall,{color:l.neutral3,marginTop:"20px",children:y?(0,r.jsxs)("div",{children:[(0,r.jsx)(d.cC,{children:"Transaction completed in "}),(0,r.jsxs)("span",{style:{fontWeight:535,marginLeft:"4px",color:l.neutral1},children:[y," seconds \ud83c\udf89"]})]}):(0,r.jsx)("div",{style:{height:"24px"}})}),(0,r.jsx)(X.DF,{onClick:e,style:{margin:"4px 0 0 0"},children:s?(0,r.jsx)(d.cC,{children:"Return"}):(0,r.jsx)(d.cC,{children:"Close"})})]})]})})}function je({isOpen:e,onDismiss:n,attemptingTxn:i,hash:o,pendingText:s,reviewContent:t,currencyToAdd:a}){const l=(0,b.x)(),d=(0,c.Nb)(l);return l&&d?(0,r.jsx)(ee.Z,{isOpen:e,$scrollOverlay:!0,onDismiss:n,maxHeight:90,children:(0,y.p)(l)&&(o||i)?(0,r.jsx)(fe,{chainId:l,hash:o,onDismiss:n,pendingText:s}):i?(0,r.jsx)(me,{onDismiss:n,pendingText:s}):o?(0,r.jsx)(pe,{chainId:l,hash:o,onDismiss:n,currencyToAdd:a}):t()}):null}},40926:(e,n,i)=>{i.d(n,{DC:()=>a,ER:()=>c,bb:()=>l,im:()=>t,pr:()=>d});var r=i(32546),o=i(22953),s=i(14411);const t=s.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,a=(0,s.default)(o.xv).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,c=s.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,l=s.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,d=(0,s.default)(r.pr).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},53286:(e,n,i)=>{var r;i.d(n,{N:()=>r}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(r||(r={}))}}]);
//# sourceMappingURL=155.0ed77de8.chunk.js.map