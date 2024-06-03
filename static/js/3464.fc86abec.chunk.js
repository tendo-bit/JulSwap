"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3464],{3464:(e,t,n)=>{n.d(t,{ZI:()=>_t,zD:()=>bt,ZP:()=>yt});var s=n(92936),a=n(5985),r=n(47583),i=n(54690),o=n(6823),l=n(95040),c=n(15288),d=n(66284),u=n(76078),p=n(26729),m=n(25320),g=n(44591),x=n(63415),h=n(5967),f=n(94284),I=n(24210),N=n(82743),A=n(86059),T=n(57852),C=n(41390),_=n(99582);var b=n(39671),v=n(2802),w=n(32682),j=n(83102),E=n(68566),y=n(89882),P=n(64538),k=n(52384),O=n(5670),R=n(78635),S=n(45779),L=n(32115),B=n(91325);var D=n(47263),z=n(78129),F=n(59036),U=n(25408);function G(e,t,n){const{hasPriceAdjustment:s,updatedAssets:a}=(0,F.$)(e,t),r=s&&n,{unchanged:i,priceChanged:o,unavailable:l}=(0,U.K)(a),c=a.length>0,d=o.length>0,u=l.length>0,p=d||u,m=function(e,t,n){return[...e.map((e=>({asset:e,status:D.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:D.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:D.ZJ.REVIEWED})))]}(l,o,i),g=function(e,t,n,s){return e?t?n?D.s.IN_REVIEW:D.s.CONFIRM_REVIEW:s?D.s.CONFIRM_QUOTE:D.s.CONFIRMING_IN_WALLET:D.s.ADDING_TO_BAG}(c,p,d,r);return{newBagItems:m,nextBagStatus:g}}function H(e){return{action:D.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function M(e,t){const n=e.route?e.route.map(H):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var W=n(51001),$=n(27009),V=n(32027);function Z(e,t,n,s,a,r,i){try{var o=e[r](i),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(s,a)}function q(){const e=(0,W.z)(),t=(0,$.p)((e=>e.sendTransaction)),n=(0,V.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:a,reset:r}=(0,P.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,S.useCallback)(function(){var i,o=(i=function*(i,o,l=!1){if(!e)return;const c=yield t(e,o,i,l);c&&(s(!1),n(c),a({bagExpanded:!1}),r())},function(){var e=this,t=arguments;return new Promise((function(n,s){var a=i.apply(e,t);function r(e){Z(a,n,s,r,o,"next",e)}function o(e){Z(a,n,s,r,o,"throw",e)}r(void 0)}))});return function(e,t){return o.apply(this,arguments)}}(),[e,r,t,a,s,n])}var K=n(47832),X=n(92532);const Y=(0,n(92490).F)()((0,K.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),X.X);function J(e,t,n,s,a,r,i){try{var o=e[r](i),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(s,a)}function Q(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var r=e.apply(t,n);function i(e){J(r,s,a,i,o,"next",e)}function o(e){J(r,s,a,i,o,"throw",e)}i(void 0)}))}}function ee(){const{account:e}=(0,p.G)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:a,isLocked:r,setLocked:i,setItemsInBag:o}=(0,P.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:a,setLocked:r,setItemsInBag:i})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:a,setLocked:r,setItemsInBag:i}))),l=Y((e=>e.tokenTradeInput)),c=(0,S.useMemo)((()=>(0,z.G7)(t)),[t]),[d]=(0,_.yoq)(),u=q(),m=(0,S.useCallback)((()=>{s&&a(!1),!r&&i(!0),n(D.s.FETCHING_ROUTE)}),[r,s,i,n,a]);return(0,S.useCallback)(Q((function*(){m(),d({variables:{senderAddress:e||"",nftTrades:(0,z.hI)(c),tokenTrades:l||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(D.s.ADDING_TO_BAG),void i(!1);const t=function(e){return e.filter((e=>e.status!==D.ZJ.UNAVAILABLE)).map((e=>e.asset))}(c),s=!!l,{route:a,routeResponse:r}=M(e.nftRoute,s),{newBagItems:d,nextBagStatus:p}=G(t,a,s);if(o(d),n(p),p===D.s.CONFIRMING_IN_WALLET)return u(r,t,s),void i(!0);i(!1)}})})),[e,d,c,u,m,i,n,o,l])}var te=n(92650);function ne(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function se(e,t,n){const s=Y((e=>e.setTokenTradeInput)),a=(0,B.pG)(e)&&e.routes,r=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,i=!!n&&!!t;(0,S.useEffect)((()=>{if(!a||!r||!i)return void s(void 0);const o=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:l,v2TokenTradeRouteInputs:c,v3TokenTradeRouteInputs:d}=function(e){const t=[],n=[],s=[],a=e.swaps;for(const r of a)r.route.protocol===te.Protocol.MIXED?t.push(ne(r)):r.route.protocol===te.Protocol.V2?n.push(ne(r)):s.push(ne(r));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:l,tradeType:_.NSL.ExactOutput,v2Routes:c,v3Routes:d},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:o,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,i,r,a,s,e])}var ae=n(14411),re=n(66136),ie=n(2721);var oe,le=n(43827),ce=n(57221),de=n(86082),ue=n(54972);function pe(e,t,n,a,r){const i={handleClick:()=>{},buttonText:(0,s.jsx)(o.cC,{children:"Something went wrong"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[oe.WALLET_NOT_CONNECTED]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(o.cC,{children:"Connect wallet"})},[oe.NOT_SUPPORTED_CHAIN]:{...i,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(o.cC,{children:"Switch networks"}),disabled:!1,warningText:(0,s.jsx)(o.cC,{children:"Wrong network"})},[oe.INSUFFICIENT_BALANCE]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Pay"}),warningText:(0,s.jsx)(o.cC,{children:"Insufficient funds"})},[oe.ERROR]:{...i,warningText:(0,s.jsx)(o.cC,{children:"Something went wrong. Please try again."})},[oe.IN_WALLET_CONFIRMATION]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Proceed in wallet"})},[oe.PROCESSING_TRANSACTION]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Transaction pending"})},[oe.FETCHING_TOKEN_ROUTE]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Fetching route"})},[oe.INVALID_TOKEN_ROUTE]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Pay"})},[oe.NO_TOKEN_ROUTE_FOUND]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Insufficient liquidity"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(o.cC,{children:"Insufficient pool liquidity to complete transaction"})},[oe.LOADING_ALLOWANCE]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Loading allowance"})},[oe.IN_WALLET_ALLOWANCE_APPROVAL]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Approve in your wallet"})},[oe.PROCESSING_APPROVAL]:{...i,buttonText:(0,s.jsx)(o.cC,{children:"Approval pending"})},[oe.REQUIRE_APPROVAL]:{...i,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(o.cC,{children:"An approval is needed to use this token. "}),buttonText:(0,s.jsx)(o.cC,{children:"Approve"})},[oe.CONFIRM_UPDATED_PRICE]:{...i,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(o.cC,{children:"Price updated"}),buttonText:(0,s.jsx)(o.cC,{children:"Pay"})},[oe.PRICE_IMPACT_HIGH]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonColor:r?r.priceImpactSeverity.color:i.buttonColor,helperText:(0,s.jsx)(o.cC,{children:"Price impact warning"}),helperTextColor:r?r.priceImpactSeverity.color:i.helperTextColor,buttonText:(0,s.jsx)(o.cC,{children:"Pay Anyway"})},[oe.PAY]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(o.cC,{children:"Pay"}),helperText:a?(0,s.jsx)(o.cC,{children:"Refunds for unavailable items will be given in ETH"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(oe||(oe={}));const me=ae.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FooterContainer",componentId:"sc-358ea9ad-0"})`
  padding: 0px 12px;
`,ge=ae.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__Footer",componentId:"sc-358ea9ad-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,xe=(0,ae.default)(g.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FooterHeader",componentId:"sc-358ea9ad-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,he=(0,ae.default)(f.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__CurrencyRow",componentId:"sc-358ea9ad-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,fe=(0,ae.default)(g.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__TotalColumn",componentId:"sc-358ea9ad-4"})`
  text-align: end;
  overflow: hidden;
`,Ie=(0,ae.default)(ce.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__WarningIcon",componentId:"sc-358ea9ad-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,Ne=(0,ae.default)(ue.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__WarningText",componentId:"sc-358ea9ad-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,Ae=(0,ae.default)(ue.Tv.BodySmall).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__HelperText",componentId:"sc-358ea9ad-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,Te=(0,ae.default)(f.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__CurrencyInput",componentId:"sc-358ea9ad-8"})`
  gap: 8px;
  cursor: pointer;
`,Ce=ae.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__ActionButton",componentId:"sc-358ea9ad-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,_e=(0,ae.default)(N.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FiatLoadingBubble",componentId:"sc-358ea9ad-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,be=(0,ae.default)(f.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__PriceImpactContainer",componentId:"sc-358ea9ad-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,ve=(0,ae.default)(f.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__PriceImpactRow",componentId:"sc-358ea9ad-12"})`
  align-items: center;
  gap: 8px;
`,we=(0,ae.default)(ue.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__ValueText",componentId:"sc-358ea9ad-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,je=({color:e,children:t})=>t?(0,s.jsxs)(Ne,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(Ie,{}),t]}):null,Ee=({children:e,color:t})=>e?(0,s.jsx)(Ae,{lineHeight:"16px",$color:t,children:e}):null,ye={onlyShowCurrenciesWithBalance:!0},Pe=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:a,trade:r})=>{var i;const{formatEther:l,formatNumberOrString:c}=(0,re.Gb)();var d;return e?a!==L.qx.LOADING||r?(0,s.jsx)(we,{color:a===L.qx.LOADING?"neutral3":"neutral1",children:c({input:null===(i=r)||void 0===i?void 0:i.inputAmount.toExact(),type:re.sw.NFTToken})}):(0,s.jsx)(ue.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(o.cC,{children:"Fetching price..."})}):(0,s.jsxs)(ue.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[l({input:t.toString(),type:re.sw.NFTToken}),"\xa0",(null===(d=n)||void 0===d?void 0:d.symbol)??"ETH"]})},ke=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:a})=>{var r;const{formatNumberOrString:i}=(0,re.Gb)();return e?(0,s.jsxs)(be,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(A.ud,{text:o.t`The estimated difference between the USD values of input and output amounts.`,children:(0,s.jsxs)(ve,{children:[(0,s.jsx)(ce.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(ue.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",t.displayPercentage(),")"]})]})})}),(0,s.jsx)(ue.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${i({input:null===(r=e)||void 0===r?void 0:r.toExact(),type:re.sw.FiatNFTToken})}`})]}):!a||n!==L.qx.INVALID&&n!==L.qx.NO_ROUTE_FOUND?(0,s.jsx)(_e,{}):null},Oe=[D.s.FETCHING_ROUTE,D.s.CONFIRMING_IN_WALLET,D.s.FETCHING_FINAL_ROUTE,D.s.PROCESSING_TRANSACTION],Re=({setModalIsOpen:e,eventProperties:t})=>{var n,i,l,c;const f=(0,m.LK)(),N=(0,ae.useTheme)(),{account:A,chainId:z}=(0,p.G)(),F=(0,T.Nb)(z),U=Boolean(A&&z),G=(0,k.P)(),{inputCurrency:H}=Y((({inputCurrency:e})=>({inputCurrency:e}))),M=Y((e=>e.setInputCurrency)),W=(0,b.U8)("ETH"),V=(0,E.mM)(A??void 0,H&&H.isToken?H:void 0),{isLocked:Z,bagStatus:q,setBagExpanded:K,setBagStatus:X}=(0,P.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[J,Q]=(0,S.useState)(!1),te=Oe.includes(q),ne=H??W,ce=!!H&&z===u.ChainId.MAINNET,{universalRouterAddress:Ie,universalRouterAddressIsLoading:Ne}=function(){var e,t;const{data:n,loading:s}=(0,_.Z6i)({fetchPolicy:"no-cache"});return{universalRouterAddress:null===(t=n)||void 0===t||null===(e=t.nftRoute)||void 0===e?void 0:e.toAddress,universalRouterAddressIsLoading:s}}();!function(e){const t=(0,$.p)((e=>e.state)),n=(0,$.p)((e=>e.setState)),s=(0,S.useRef)(t),{setBagStatus:a,setLocked:r}=(0,P.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,S.useEffect)((()=>{$.p.subscribe((e=>s.current=e.state))}),[]),(0,S.useEffect)((()=>{s.current===D.c$.Confirming&&a(D.s.PROCESSING_TRANSACTION),s.current!==D.c$.Denied&&s.current!==D.c$.Invalid||(s.current===D.c$.Invalid?a(D.s.WARNING):a(D.s.CONFIRM_REVIEW),n(D.c$.New),r(!1),e(!1))}),[r,a,e,n,s.current])}(e);const Ae=ee(),_e=(0,S.useMemo)((()=>(0,y.Z)((0,d.formatEther)(G.toString()),W??void 0)),[W,G]),{state:be,trade:ve,maximumAmountIn:we,allowedSlippage:Re}=function(e,t){const{state:n,trade:s}=(0,R.C)(u.TradeType.EXACT_OUTPUT,t,e??void 0,L.R5.API),a=(0,O.Z)((0,B.pG)(s)?s:void 0),r=(0,S.useMemo)((()=>{var e,t;const n=null===(e=s)||void 0===e?void 0:e.maximumAmountIn(a);return(null===(t=n)||void 0===t?void 0:t.currency.isToken)?n:void 0}),[a,s]);return(0,S.useMemo)((()=>({state:n,trade:s,maximumAmountIn:r,allowedSlippage:a})),[a,r,n,s])}(ce?H:void 0,_e),Se=(0,v.Z)(we,function(e,t){if(e)return e===u.ChainId.MAINNET?t??(0,C.UNIVERSAL_ROUTER_ADDRESS)(e):(0,C.UNIVERSAL_ROUTER_ADDRESS)(e)}(F?z:void 0,Ie),L.d7.Classic),Le=Se.state===v.K.LOADING||Ne;se(ve,Se,Re);const Be=function(e){const t=(0,ae.useTheme)(),{formatPercent:n}=(0,re.Gb)();return(0,S.useMemo)((()=>{const s=e?(0,ie.QW)(e):void 0,a=s?(0,ie.BK)(s):void 0,r="error"===a?t.critical:"warning"===a?t.deprecated_accentWarning:void 0;return s&&a&&r?{priceImpactSeverity:{type:a,color:r},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(ve),De=(0,w.sq)(null===(n=ve)||void 0===n?void 0:n.inputAmount),ze=(0,w.sq)(_e),Fe=ce?De:ze,{balance:Ue}=(0,le.t)(),Ge=(0,S.useMemo)((()=>{if(U&&z===u.ChainId.MAINNET){if(H){var e;const t=null===(e=ve)||void 0===e?void 0:e.inputAmount;if(!V||!t)return;return!V.lessThan(t)}return(0,d.parseEther)(Ue).gte(G)}}),[U,z,H,Ue,G,null===(i=ve)||void 0===i?void 0:i.inputAmount,V]);(0,S.useEffect)((()=>{X(D.s.ADDING_TO_BAG)}),[H,X]);const He=(0,j.o)(),{buttonText:Me,buttonTextColor:We,disabled:$e,warningText:Ve,warningTextColor:Ze,helperText:qe,helperTextColor:Ke,handleClick:Xe,buttonColor:Ye}=(0,S.useMemo)((()=>{if(U&&z!==u.ChainId.MAINNET){const e=()=>He(u.ChainId.MAINNET);return pe(oe.NOT_SUPPORTED_CHAIN,N,e)}if(!1===Ge)return pe(oe.INSUFFICIENT_BALANCE,N);if(q===D.s.WARNING)return pe(oe.ERROR,N);if(!U){const e=()=>{f(),K({bagExpanded:!1})};return pe(oe.WALLET_NOT_CONNECTED,N,e)}if(q===D.s.FETCHING_FINAL_ROUTE||q===D.s.CONFIRMING_IN_WALLET)return pe(oe.IN_WALLET_CONFIRMATION,N);if(q===D.s.PROCESSING_TRANSACTION)return pe(oe.PROCESSING_TRANSACTION,N);if(ce&&be!==L.qx.VALID)return be===L.qx.INVALID?pe(oe.INVALID_TOKEN_ROUTE,N):be===L.qx.NO_ROUTE_FOUND?pe(oe.NO_TOKEN_ROUTE_FOUND,N):pe(oe.FETCHING_TOKEN_ROUTE,N);const e=Se.state===v.K.REQUIRED,t=()=>e&&Se.approveAndPermit();return Le?pe(oe.LOADING_ALLOWANCE,N,t):e?Se.isApprovalPending?pe(oe.IN_WALLET_ALLOWANCE_APPROVAL,N,t):Se.isApprovalLoading?pe(oe.PROCESSING_APPROVAL,N,t):pe(oe.REQUIRE_APPROVAL,N,t):q===D.s.CONFIRM_QUOTE?pe(oe.CONFIRM_UPDATED_PRICE,N,Ae):Be&&"error"===Be.priceImpactSeverity.type?pe(oe.PRICE_IMPACT_HIGH,N,Ae,ce,Be):pe(oe.PAY,N,Ae,ce)}),[U,z,Ge,q,ce,be,Le,Se,Be,N,Ae,He,f,K]),Je={usd_value:null===(l=Fe)||void 0===l?void 0:l.toExact(),using_erc20:!!H,...t};return(0,s.jsxs)(me,{children:[(0,s.jsxs)(ge,{children:[(0,s.jsxs)(xe,{gap:"xs",children:[(0,s.jsxs)(he,{children:[(0,s.jsx)(g.ZP,{gap:"xs",children:F&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ue.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{children:"Pay with"})}),(0,s.jsxs)(Te,{onClick:()=>{Z||(Q(!0),(0,r._P)(a.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(h.Z,{currency:ne,size:24}),(0,s.jsx)(ue.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:null===(c=ne)||void 0===c?void 0:c.symbol}),(0,s.jsx)(de.Z,{size:20,color:N.neutral2})]})]})}),(0,s.jsxs)(fe,{gap:"xs",children:[(0,s.jsx)(ue.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{children:"Total"})}),(0,s.jsx)(Pe,{usingPayWithAnyToken:ce,totalEthPrice:G,activeCurrency:ne,tradeState:be,trade:ve})]})]}),(0,s.jsx)(ke,{usdcValue:Fe,priceImpact:Be,tradeState:be,usingPayWithAnyToken:ce})]}),(0,s.jsxs)(r.M8,{events:[a.TM.onClick],name:a.Yz.NFT_BUY_BAG_PAY,element:a.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Je},shouldLogImpression:U&&!$e,children:[(0,s.jsx)(je,{color:Ze,children:Ve}),(0,s.jsx)(Ee,{color:Ke,children:qe}),(0,s.jsxs)(Ce,{"data-testid":"nft-buy-button",onClick:Xe,disabled:$e||te,$backgroundColor:Ye,$color:We,children:[te&&(0,s.jsx)(x.ZP,{size:"20px",stroke:"white"}),Me]})]})]}),(0,s.jsx)(I.Z,{isOpen:J,onDismiss:()=>Q(!1),onCurrencySelect:e=>{M(e.isNative?void 0:e),e.isToken&&(0,r._P)(a.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:ne??void 0,currencySearchFilters:ye})]})};var Se=n(60040),Le=n(70518),Be=n(79132),De=n(62587),ze=n(97341),Fe=(n(69640),n(11604)),Ue=n(21989),Ge=n(69780);const He=ae.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Me=ae.default.circle.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${He} linear;
  animation: ${He} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,We=()=>(0,s.jsx)(l.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(Me,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var $e=n(62293),Ve=n(58690),Ze=n(68113),qe=n(23173),Ke=n(43454),Xe=(n(49484),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),Ye="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",Je="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",Qe="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",et="_1kuawc7",tt="rgw6ez3xr";const nt=(0,ae.default)(Ge.UH).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,st=(0,ae.default)(Ge.UH).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,at=ae.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,rt=({onClick:e})=>(0,s.jsx)(at,{onClick:e,children:(0,s.jsx)(Ve.Xv,{})}),it=()=>(0,s.jsx)(l.n,{position:"relative",background:"loadingBackground",className:Je,children:(0,s.jsxs)(l.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),ot=({asset:e,usdPrice:t,removeAsset:n,showRemove:a,grayscale:r,isMobile:i})=>{const{formatEther:o,formatNumberOrString:u}=(0,re.Gb)(),[p,m]=(0,S.useState)(!1),[g,x]=(0,S.useState)(!e.smallImageUrl),[h,f]=(0,S.useState)(!1),I=(0,S.useCallback)((()=>f(!0)),[]),N=(0,S.useCallback)((()=>f(!1)),[]),A=Boolean(a&&h&&!i),T=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,C=o({input:T,type:re.sw.NFTToken}),_=u({input:t?parseFloat((0,d.formatEther)(T))*t:t,type:re.sw.FiatNFTToken}),b=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(Ke.rU,{to:(0,z.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(c.X2,{className:Ye,onMouseEnter:I,onMouseLeave:N,children:[(0,s.jsxs)(l.n,{position:"relative",display:"flex",children:[a&&i&&(0,s.jsx)(rt,{onClick:b}),!g&&(0,s.jsx)(l.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,Ue.default)(Je,r&&!h&&et),onLoad:()=>{m(!0)},onError:()=>{x(!0)},visibility:p?"visible":"hidden"}),!p&&(0,s.jsx)(l.n,{position:"absolute",className:`${Je} ${qe.L}`}),g&&(0,s.jsx)(it,{})]}),(0,s.jsxs)(c.sg,{overflow:"hidden",width:"full",color:r?"neutral2":"neutral1",children:[(0,s.jsxs)(c.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(l.n,{className:Xe,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)($e.yT,{})]}),(0,s.jsxs)(c.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(l.n,{className:Qe,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(Ve.SA,{className:tt})]})]}),A&&(0,s.jsx)(nt,{onClick:b,emphasis:Ge.eI.medium,size:Ge.qE.medium,children:"Remove"}),(!A||i)&&(0,s.jsxs)(c.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(l.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[C,"\xa0ETH"]}),(0,s.jsx)(l.n,{className:Qe,children:_})]})]})})},lt=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:a,isMobile:r})=>{var i;const{formatEther:o}=(0,re.Gb)(),d=Fe.O$.from(null===(i=e.updatedPriceInfo)||void 0===i?void 0:i.ETHPrice).gt(Fe.O$.from(e.priceInfo.ETHPrice)),u=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),p=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(c.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:a?"surface3":"transparent",children:[(0,s.jsxs)(c.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[d?(0,s.jsx)(Ve.PH,{}):(0,s.jsx)(Ve.HE,{}),(0,s.jsx)(l.n,{children:`Price ${d?"increased":"decreased"} from ${o({input:e.priceInfo.ETHPrice,type:re.sw.NFTToken})} ETH`})]}),(0,s.jsx)(l.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(ot,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:r})}),(0,s.jsxs)(c.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(st,{onClick:u,emphasis:Ge.eI.medium,size:Ge.qE.small,children:"Remove"}),(0,s.jsx)(st,{onClick:p,emphasis:Ge.eI.high,size:Ge.qE.small,children:"Keep"})]})]})},ct=({assets:e})=>(0,s.jsx)(c.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(l.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:et},`${e.address}-${e.tokenId}`)))}),dt=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:a,setDidOpenUnavailableAssets:r,isMobile:i})=>{const[o,l]=(0,S.useReducer)((e=>!e),!1),[d,u]=(0,S.useState)(8);if((0,S.useEffect)((()=>{if(!d)return void(a||(n(),r(!1)));const e=setInterval((()=>{u(d-1)}),1e3);return()=>clearInterval(e)}),[d,n,a,r]),!e||0===e.length)return null;const p=e.length>1,m=o||!p;return(0,s.jsx)(c.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,s.jsxs)(c.sg,{children:[(0,s.jsxs)(c.X2,{justifyContent:"space-between",marginBottom:m?"12":"0",cursor:p?"pointer":"default",onClick:()=>{p&&(!a&&r(!0),l())},children:[(0,s.jsxs)(c.X2,{gap:"12",color:"neutral2",className:Ze.Km,children:[!m&&(0,s.jsx)(ct,{assets:e.slice(0,5)}),"No longer available"]}),p&&(0,s.jsx)(c.X2,{color:"neutral2",children:o?(0,s.jsx)(Ve.X_,{}):(0,s.jsx)(Ve.Xs,{})}),!a&&(0,s.jsxs)(c.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(We,{}),(0,s.jsx)(Ve.Nb,{})]})]}),(0,s.jsx)(c.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:m&&e.map((e=>(0,s.jsx)(ot,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:i},e.id)))})]})})},ut=()=>{const e=(0,Be.cP)((e=>e.bagStatus)),t=(0,Be.cP)((e=>e.setBagStatus)),n=(0,Be.cP)((e=>e.markAssetAsReviewed)),i=(0,Be.cP)((e=>e.didOpenUnavailableAssets)),o=(0,Be.cP)((e=>e.setDidOpenUnavailableAssets)),l=(0,Be.cP)((e=>e.itemsInBag)),d=(0,Be.cP)((e=>e.setItemsInBag)),u=(0,Be.cP)((e=>e.removeAssetsFromBag)),p=(0,ze.dD)(),m=(0,S.useMemo)((()=>(0,z.G7)(l)),[l]),g=(0,Be.$N)(),{unchangedAssets:x,priceChangedAssets:h,unavailableAssets:f,availableItems:I}=(0,S.useMemo)((()=>({unchangedAssets:m.filter((e=>e.status===D.ZJ.ADDED_TO_BAG||e.status===D.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:m.filter((e=>e.status===D.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:m.filter((e=>e.status===D.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:m.filter((e=>e.status!==D.ZJ.UNAVAILABLE))})),[m]);return(0,S.useEffect)((()=>{const n=h.length>0,s=m.length>0;n&&(0,r._P)(a.Yz.NFT_BUY_BAG_CHANGED,{usd_value:g,bag_quantity:m,...(0,z.Hj)(h)}),e!==D.s.IN_REVIEW||n||t(s?D.s.CONFIRM_REVIEW:D.s.ADDING_TO_BAG),e!==D.s.CONFIRM_REVIEW||s||t(D.s.ADDING_TO_BAG)}),[e,m,h,t,g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.sg,{display:h.length>0||f.length>0?"flex":"none",children:[f.length>0&&(0,s.jsx)(r.fM,{name:a.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:g,bag_quantity:m.length,...(0,z.Hj)(f)},shouldLogImpression:!0,children:(0,s.jsx)(dt,{assets:f,usdPrice:g,clearUnavailableAssets:()=>d(I),didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:o,isMobile:p})}),h.map(((e,t)=>(0,s.jsx)(lt,{asset:e,usdPrice:g,markAssetAsReviewed:n,top:0===t&&0===f.length,isMobile:p},e.id)))]}),(0,s.jsx)(c.sg,{children:x.slice(0).reverse().map((e=>(0,s.jsx)(ot,{asset:e,usdPrice:g,removeAsset:u,showRemove:!0,isMobile:p},e.id)))})]})};var pt=n(68588);const mt=(0,ae.default)(ue.oD).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagHeader__ClearButton",componentId:"sc-6b7a6dca-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,gt=ae.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagHeader__IconWrapper",componentId:"sc-6b7a6dca-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${pt.cR}
`,xt=ae.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagHeader__CounterDot",componentId:"sc-6b7a6dca-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,ht=ae.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\BagHeader__Wrapper",componentId:"sc-6b7a6dca-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,ft=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:a})=>{const r=(0,S.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(ht,{children:[(0,s.jsx)(ue.Tv.HeadlineSmall,{children:a?(0,s.jsx)(o.cC,{children:"Sell"}):(0,s.jsx)(o.cC,{children:"Bag"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(xt,{sizing:r,children:e}),(0,s.jsx)(mt,{onClick:n,children:(0,s.jsx)(o.cC,{children:"Clear all"})})]}),(0,s.jsx)(gt,{onClick:t,children:(0,s.jsx)(Ve.BW,{"data-testid":"nft-bag-close-icon"})})]})};var It=n(27389);const Nt=(0,ae.default)(c.sg).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`,At=()=>{const e=(0,i.e5)();return(0,s.jsxs)(Nt,{children:[(0,s.jsx)(c.M5,{children:e?(0,s.jsx)(Ve.JP,{color:It.Z4.colors.neutral3}):(0,s.jsx)(Ve.Ln,{color:It.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(c.M5,{"data-testid":"nft-no-nfts-selected",className:Ze.v4,children:"No NFTs selected"}):(0,s.jsxs)(c.sg,{gap:"16",children:[(0,s.jsx)(c.M5,{"data-testid":"nft-empty-bag",className:Ze.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(c.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},Tt=({asset:e})=>{const t=(0,Be.Pc)((e=>e.removeSellAsset)),n=(0,ze.dD)(),[a,r]=(0,S.useState)(!1),i=()=>r(!a),o=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(c.X2,{className:Ye,onMouseEnter:i,onMouseLeave:i,children:[(0,s.jsxs)(l.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(rt,{onClick:o}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Je})]}),(0,s.jsxs)(c.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(c.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(l.n,{className:Xe,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(c.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(l.n,{className:Qe,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(Ve.SA,{className:tt})]})]}),a&&!n&&(0,s.jsx)(nt,{onClick:o,emphasis:Ge.eI.medium,size:Ge.qE.medium,children:"Remove"})]})},Ct=()=>{const e=(0,Be.Pc)((e=>e.sellAssets));return(0,s.jsx)(c.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(Tt,{asset:e},t))):null})},_t=320,bt=360,vt=ae.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\Bag__BagContainer",componentId:"sc-f9dd5313-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${_t}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?De.k.modalOverTooltip:De.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${bt}px;
  }
`,wt=ae.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\Bag__DetailsPageBackground",componentId:"sc-f9dd5313-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,jt=ae.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\bag\\Bag__ContinueButton",componentId:"sc-f9dd5313-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Et=({top:e,show:t})=>(0,s.jsx)(l.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"}),yt=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Be.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Be.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:l,bagIsLocked:d,reset:u,bagExpanded:p,toggleBag:m,setBagExpanded:g}=(0,Be.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:x}=(0,Be.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),h=(0,i.e5)(),f=(0,i._3)(),I=(0,i.GZ)(),N=(0,ze.dD)(),A=(0,S.useMemo)((()=>(0,z.G7)(x)),[x]),[T,C]=(0,S.useState)(!1),{userCanScroll:_,scrollRef:b,scrollProgress:v,scrollHandler:w}=(0,Be.uh)(),j=(0,S.useCallback)((()=>{g({bagExpanded:!1,manualClose:!0})}),[g]);(0,S.useEffect)((()=>{d&&!T&&C(!0)}),[d,T]);const E=A.length>0,y=A.length>0,P=t.length>0,k=Boolean(!h&&!y&&l===D.s.ADDING_TO_BAG||h&&!P),O=(0,S.useMemo)((()=>({...(0,z.Hj)(A.map((e=>e.asset)))})),[A]);return p&&I?(0,s.jsxs)(Se.h,{children:[(0,s.jsxs)(vt,{"data-testid":"nft-bag",raiseZIndex:N||T,isProfilePage:h,children:[(0,s.jsx)(ft,{numberOfAssets:h?t.length:A.length,closeBag:j,resetFlow:h?e:u,isProfilePage:h}),k&&(0,s.jsx)(At,{}),(0,s.jsx)(Et,{top:!0,show:_&&v>0}),(0,s.jsx)(c.sg,{ref:b,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:w,gap:"12",children:h?(0,s.jsx)(Ct,{}):(0,s.jsx)(ut,{})}),E&&!h&&(0,s.jsx)(Re,{setModalIsOpen:C,eventProperties:O}),P&&h&&(0,s.jsx)(jt,{onClick:()=>{m(),n(D.HA.LISTING),(0,r._P)(a.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(o.cC,{children:"Continue"})})]}),f?(0,s.jsx)(wt,{onClick:m}):T&&(0,s.jsx)(Le.a,{onClick:()=>d?void 0:C(!1)})]}):null}},70518:(e,t,n)=>{n.d(t,{a:()=>o,U:()=>i});var s=n(92936),a=n(15511),r=n(95040);n(69640);const i=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},o=({onClick:e=a.Z})=>(0,s.jsx)(r.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},52384:(e,t,n)=>{n.d(t,{B:()=>p,P:()=>u});var s=n(11604),a=n(66284),r=n(39671),i=n(32682),o=n(89882),l=n(47263),c=n(45779),d=n(64538);function u(){const e=(0,d.c)((e=>e.itemsInBag));return(0,c.useMemo)((()=>e.reduce(((e,t)=>t.status!==l.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,r.U8)("ETH"),n=(0,c.useMemo)((()=>(0,o.Z)((0,a.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,i.sq)(n);return(0,c.useMemo)((()=>{var e;return null===(e=s)||void 0===e?void 0:e.toExact()}),[s])}}}]);
//# sourceMappingURL=3464.fc86abec.chunk.js.map