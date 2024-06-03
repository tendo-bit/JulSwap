"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5773],{47411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>qo});var i=n(92936),o=n(5985),s=n(26729),a=n(47583),l=n(25320),r=n(69780),c=n(27179),d=n(6823),p=n(3464),m=n(44591),u=n(94284),x=n(32682),f=n(24509),h=n(89882),g=n(60040),w=n(70518),j=n(45779),b=n(63194),v=n(57221),y=n(14411),C=n(66869),_=n(54972),P=n(62587),S=n(66136);const N=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ModalWrapper",componentId:"sc-65f8923b-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${P.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${C.j$.sm}px) {
    width: 100%;
  }
`,I=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-65f8923b-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,k=(0,y.default)(b.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIcon",componentId:"sc-65f8923b-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,D=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__HazardIconWrap",componentId:"sc-65f8923b-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,T=(0,y.default)(r.DF).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ContinueButton",componentId:"sc-65f8923b-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,$=y.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__EditListings",componentId:"sc-65f8923b-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,R=({listingsBelowFloor:e,closeModal:t,startListing:n})=>{const o=(0,y.useTheme)(),{formatDelta:s}=(0,S.Gb)();return(0,i.jsxs)(g.h,{children:[(0,i.jsxs)(N,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(k,{width:24,height:24,onClick:t})," "]}),(0,i.jsx)(D,{children:(0,i.jsx)(v.Z,{height:90,width:90,color:o.critical})}),(0,i.jsx)(_.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,i.jsx)(d.cC,{children:"Low listing price"})}),(0,i.jsxs)(_.Tv.BodyPrimary,{textAlign:"center",children:[(0,i.jsx)(d.CN,{value:1!==e.length?2:1,one:(0,d.t)("One NFT is listed {{delta}} ",{delta:s(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}),other:(0,d.t)("{{count}} NFTs are listed significantly ",{count:e.length})}),"\xa0",(0,i.jsx)(d.cC,{children:"below the collection\u2019s floor price. Are you sure you want to continue?"})]}),(0,i.jsx)(T,{onClick:e=>{e.preventDefault(),e.stopPropagation(),n(),t()},children:(0,i.jsx)(d.cC,{children:"Continue"})}),(0,i.jsx)($,{onClick:t,children:(0,i.jsx)(d.cC,{children:"Edit listings"})})]}),(0,i.jsx)(w.a,{onClick:t})]})};var M=n(79132),E=n(97341),L=n(35797),F=n(63490),A=n.n(F);const O=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\shared__RemoveIconWrap",componentId:"sc-e1e0e3a1-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,B=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\shared__TitleRow",componentId:"sc-e1e0e3a1-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var Z,W;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(Z||(Z={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(W||(W={}));const G="0x59728544B08AB483533076417FbBB2fD0B17CE3a",H="0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051",z="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",X="0x1e0049783f008a0085193e00003d00cd54003c71",V="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",Y={[z]:X},q=1e4;function U(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){U(s,i,o,a,l,"next",e)}function l(e){U(s,i,o,a,l,"throw",e)}a(void 0)}))}}const K="0xf849de01b080adc3a814fabe1e2087475cf2e354",Q="0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779",ee=function(){var e=J((function*(e){const t=JSON.stringify(e),n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),o=setTimeout((()=>n.abort()),6e4);try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(s){return!1}finally{clearTimeout(o)}}));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=J((function*(e,t){var n,i,o,s;const a=`https://temp.gateway.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,l=yield fetch(a,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}});return null===(s=yield l.json())||void 0===s||null===(o=s.data)||void 0===o||null===(i=o.data)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.id}));return function(t,n){return e.apply(this,arguments)}}();var ne=n(47263),ie=n(11604),oe=n(7937),se=n(66284),ae=n(5540),le=n(56079),re=n(13820);function ce(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}const de=function(){var e,t=(e=function*(e){const t=yield fetch("https://temp.gateway.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(yield t.json()).success}catch(n){return!1}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){ce(s,i,o,a,l,"next",e)}function l(e){ce(s,i,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();function pe(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}function me(){var e;return e=function*(e){const t=e?JSON.stringify(e):void 0,n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),o=setTimeout((()=>n.abort()),A()("60s"));try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(s){return!1}finally{clearTimeout(o)}},me=function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){pe(s,i,o,a,l,"next",e)}function l(e){pe(s,i,o,a,l,"throw",e)}a(void 0)}))},me.apply(this,arguments)}var ue=n(23399),xe=n(98282),fe=n(99582),he=n(31042),ge=n(46854),we=n(73116),je=n(6412),be=n(30012);function ve(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}const ye="tuple(uint256 price, bytes data)",Ce=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${ye}[]`],_e=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${ye}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,Pe=function(){var e,t=(e=function*(e,t){const n=he.$.encode(Ce,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),i=(0,je.keccak256)(n),o=yield e.send("personal_sign",[i,t.user]);t.r=`0x${o.slice(2,66)}`,t.s=`0x${o.slice(66,130)}`,t.v=parseInt(o.slice(130,132),16),Se(t)},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){ve(s,i,o,a,l,"next",e)}function l(e){ve(s,i,o,a,l,"throw",e)}a(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Se=e=>{e.v<27&&(e.v=e.v+27)},Ne=e=>he.$.encode([_e],[e]),Ie=(e,t,n,i=fe.hgB.Erc721)=>({salt:(()=>{const e=ie.O$.from((0,be.O)(16)).toHexString();return(0,ge.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:i===fe.hgB.Erc721?1:2,deadline:t,currency:we.d,dataMask:"0x",items:n.map((e=>{return{price:e.price,data:(t=e.tokens,he.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1});function ke(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}function De(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){ke(s,i,o,a,l,"next",e)}function l(e){ke(s,i,o,a,l,"throw",e)}a(void 0)}))}}const Te=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],$e=(e,t)=>({amount:e,recipient:t}),Re=(e,t,n)=>{var i,o,s,a;const l=(null===(i=e)||void 0===i?void 0:i.basisPoints)??0,r=100*((null===(o=Te.find((e=>"OpenSea"===e.name)))||void 0===o?void 0:o.fee)??0),c=q-l-r,d=t.mul(ie.O$.from(l)).div(ie.O$.from(q)).toString(),p=t.mul(ie.O$.from(c)).div(ie.O$.from(q)).toString(),m=t.mul(ie.O$.from(r)).div(ie.O$.from(q)).toString();return{sellerFee:$e(p,n),creatorFee:l>0?$e(d,(null===(a=e)||void 0===a||null===(s=a.asset_contract)||void 0===s?void 0:s.payout_address)??""):void 0,openSeaFee:r?$e(m,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};function Me(){return(Me=De((function*(e,t,n,i,o=fe.hgB.Erc721){const s=new oe.Contract(t,o===fe.hgB.Erc721?xe:ue,n),a=yield n.getAddress();try{if(yield s.isApprovedForAll(a,e))return void i(ne.Sb.APPROVED);i(ne.Sb.SIGNING);const t=yield s.setApprovalForAll(e,!0);i(ne.Sb.PENDING);1===(yield t.wait()).status?i(ne.Sb.APPROVED):i(ne.Sb.FAILED)}catch(l){4001===l.code?i(ne.Sb.REJECTED):i(ne.Sb.FAILED)}}))).apply(this,arguments)}function Ee(){return Ee=De((function*(e,t,n,i,o=0,s){var a,l;const r=new ae.A(i,{conduitKeyToConduit:Y,overrides:{defaultConduitKey:z},seaportVersion:"1.5"}),c=yield n.getAddress(),d=null===(l=t.newListings)||void 0===l||null===(a=l.find((t=>t.marketplace.name===e.name)))||void 0===a?void 0:a.price;if(!d||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,se.parseEther)(`${d}`),{sellerFee:n,creatorFee:i,openSeaFee:o}=Re(t,e,c),a=[n,i,o].filter((e=>void 0!==e)),{executeAllActions:l}=yield r.createOrder({offer:[{itemType:t.asset_contract.tokenType===fe.hgB.Erc721?le.ItemType.ERC721:le.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:a,endTime:t.expirationTime.toString(),zone:re.r_,allowPartialFills:!0},c),p={...yield l(),protocol_address:V};s(ne.Sb.PENDING);const m=yield function(e){return me.apply(this,arguments)}(p);return s(m?ne.Sb.APPROVED:ne.Sb.FAILED),m}catch(p){return 4001===p.code?s(ne.Sb.REJECTED):s(ne.Sb.FAILED),!1}case"LooksRare":{const e=L.Xg[L.HL.MAINNET],i=Math.round(Date.now()/1e3),a={isOrderAsk:!0,signer:c,collection:t.asset_contract.address,price:(0,se.parseEther)(d.toString()),tokenId:ie.O$.from(t.tokenId),amount:ie.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:ie.O$.from(o),startTime:ie.O$.from(i),endTime:ie.O$.from(t.expirationTime),minPercentageToAsk:ie.O$.from(1e4).sub(ie.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const l=yield(0,L.tI)(n,L.HL.MAINNET,a,G);s(ne.Sb.PENDING);const r={signature:l,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:c,isOrderAsk:!0,nonce:o,amount:1,price:(0,se.parseEther)(d.toString()).toString(),startTime:i,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=yield de(r);return s(p?ne.Sb.APPROVED:ne.Sb.FAILED),p}catch(p){return 4001===p.code?s(ne.Sb.REJECTED):s(ne.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,se.parseEther)(d.toString()),tokens:[{token:t.asset_contract.address,tokenId:ie.O$.from(t.tokenId),amount:1}]},n=Ie(c,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=yield te(t.asset_contract.address,t.tokenId);yield Pe(i,n);const o={order:Ne(n),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};s(ne.Sb.PENDING);const a=yield ee(o);return s(a?ne.Sb.APPROVED:ne.Sb.FAILED),a}catch(p){return 4001===p.code?s(ne.Sb.REJECTED):s(ne.Sb.FAILED),!1}}default:return!1}})),Ee.apply(this,arguments)}function Le(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}function Fe(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){Le(s,i,o,a,l,"next",e)}function l(e){Le(s,i,o,a,l,"throw",e)}a(void 0)}))}}function Ae(e,t,n){return Oe.apply(this,arguments)}function Oe(){return Oe=Fe((function*(e,t,n){const i=()=>Ae(e,t,n);n(e,ne.Sb.SIGNING,i);const{marketplace:o,collectionAddress:s,nftStandard:a}=e,l=L.Xg[L.HL.MAINNET],r="OpenSea"===o.name?X:"LooksRare"===o.name?e.nftStandard===fe.hgB.Erc721?G:H:"X2Y2"===o.name?e.nftStandard===fe.hgB.Erc721?K:Q:l.TRANSFER_MANAGER_ERC721;s&&(yield function(e,t,n,i){return Me.apply(this,arguments)}(r,s,t,(t=>n(e,t,i)),a))})),Oe.apply(this,arguments)}function Be(e,t,n,i,o,s){return Ze.apply(this,arguments)}function Ze(){return Ze=Fe((function*(e,t,n,i,o,s){const a=i(),l=()=>Be(e,t,n,i,o,s);s(e,ne.Sb.SIGNING,l);const{asset:r,marketplace:c}=e,d=yield function(e,t,n,i){return Ee.apply(this,arguments)}(c,r,t,n,a,(t=>s(e,t,l)));d&&"LooksRare"===e.marketplace.name&&o(a+1)})),Ze.apply(this,arguments)}const We=e=>{const t=e.reduce(((e,t)=>{var n;if(null===(n=t.newListings)||void 0===n?void 0:n.length){var i;const n=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),o=n.marketplace.fee+("LooksRare"===n.marketplace.name?50:(null===(i=t)||void 0===i?void 0:i.basisPoints)??0)/100;return e+(n.price??0)-(n.price??0)*(o/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function Ge(){const e=(0,M.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:n}=(0,M.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,j.useEffect)((()=>{const[i,o]=(e=>{const t=[],n=[];return e.forEach((e=>{var i;null===(i=e.marketplaces)||void 0===i||i.forEach((i=>{var o,s;const a={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:ne.Sb.DEFINED,asset:e,marketplace:i,price:null===(s=e.newListings)||void 0===s||null===(o=s.find((e=>e.marketplace.name===i.name)))||void 0===o?void 0:o.price};if(n.push(a),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===i.name))){const n={image:e.asset_contract.image_url,name:e.asset_contract.name,status:ne.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:i,nftStandard:e.asset_contract.tokenType};t.push(n)}}))})),[t,n]})(e);t(o),n(i)}),[e,n,t])}const He=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),ze=(0,y.default)(r.Yd).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListingButton__StyledListingButton",componentId:"sc-5bb07f22-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${C.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,Xe=({onClick:e})=>{const{sellAssets:t,showResolveIssues:n,toggleShowResolveIssues:o,issues:s,setIssues:a}=(0,M.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:o})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:o}))),[l,r]=(0,j.useState)(!1),c=(0,E.dD)(),[p,m]=(0,j.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:i,listingsMissingPrice:s,listingsBelowFloor:l,listingsAboveSellOrderFloor:r}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<A()("60s")))),n=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>A()("180d"))),i=[],o=[],s=[];for(const l of e)if(l.newListings)for(const e of l.newListings){var a;e.price?e.price<.8*((null===(a=l)||void 0===a?void 0:a.floorPrice)??0)&&!e.overrideFloorPrice?o.push([l,e]):l.floor_sell_order_price&&e.price>=l.floor_sell_order_price&&l.asset_contract.tokenType!==fe.hgB.Erc1155&&s.push([l,e]):i.push([l,e])}return{missingExpiration:t,overMaxExpiration:n,listingsMissingPrice:i,listingsBelowFloor:o,listingsAboveSellOrderFloor:s}})(t),c=Number(e)+Number(i)+s.length+r.length;return a(c),!c&&n&&o(),(e||i||r.length)&&!n&&o(),[s,l]}),[t,a,n,o]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ze,{onClick:()=>{s?!n&&o():m.length?r(!0):e()},missingPrices:!!p.length,showResolveIssues:n,children:n?(0,i.jsx)(d.CN,{value:1!==s?2:1,one:d.t`Resolve issue`,other:(0,d.t)("Resolve {{issues}} issues",{issues:s})}):p.length&&!c?(0,i.jsx)(d.cC,{children:"Set prices to continue"}):(0,i.jsx)(d.cC,{children:"Start listing"})}),l&&(0,i.jsx)(R,{listingsBelowFloor:m,closeModal:()=>r(!1),startListing:e})]})};var Ve=n(21926),Ye=n(51001),qe=n(590),Ue=n(16449),Je=n(68588),Ke=n(86059),Qe=n(58690),et=n(81205),tt=n(76623),nt=n(55874),it=n(63415),ot=n(78129),st=n(7797),at=n(50901),lt=n(62652);const rt=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentColumn",componentId:"sc-426ef8e9-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,lt.jb)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,ct=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentRowWrapper",componentId:"sc-426ef8e9-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,dt=y.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__CollectionIcon",componentId:"sc-426ef8e9-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,pt=y.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__AssetIcon",componentId:"sc-426ef8e9-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,mt=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__MarketplaceIcon",componentId:"sc-426ef8e9-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,ut=(0,y.default)(_.Tv.SubHeaderSmall).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentName",componentId:"sc-426ef8e9-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,xt=y.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ProceedText",componentId:"sc-426ef8e9-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,ft=y.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__FailedText",componentId:"sc-426ef8e9-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,ht=(0,y.default)(Qe.SA).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__StyledVerifiedIcon",componentId:"sc-426ef8e9-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,gt=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__IconWrapper",componentId:"sc-426ef8e9-9"})`
  margin-left: auto;
  margin-right: 0px;
`,wt=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ButtonRow",componentId:"sc-426ef8e9-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,jt=y.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,bt=y.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RemoveButton",componentId:"sc-426ef8e9-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${jt}
`,vt=y.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RetryButton",componentId:"sc-426ef8e9-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${jt}
`,yt=({row:e,isCollectionApprovalSection:t,removeRow:n})=>{const o=(0,y.useTheme)(),s=(0,j.useRef)(),a=e.status===ne.Sb.FAILED||e.status===ne.Sb.REJECTED;return(0,j.useEffect)((()=>{var t;e.status===ne.Sb.SIGNING&&(null===(t=s.current)||void 0===t||t.scroll)}),[e.status]),(0,i.jsxs)(rt,{failed:a,children:[(0,i.jsxs)(ct,{active:e.status===ne.Sb.SIGNING||e.status===ne.Sb.APPROVED,failed:a,ref:s,children:[t?(0,i.jsx)(dt,{src:e.image}):(0,i.jsx)(pt,{src:e.image}),(0,i.jsx)(mt,{children:(0,ot.Dp)(e.marketplace.name,"24")}),(0,i.jsx)(ut,{children:e.name}),t&&e.isVerified&&(0,i.jsx)(ht,{}),(0,i.jsx)(gt,{children:e.status===ne.Sb.DEFINED||e.status===ne.Sb.PENDING?(0,i.jsx)(it.ZP,{height:"14px",width:"14px",stroke:e.status===ne.Sb.PENDING?o.accent1:o.neutral3}):e.status===ne.Sb.SIGNING?(0,i.jsx)(xt,{children:(0,i.jsx)(d.cC,{children:"Proceed in wallet"})}):e.status===ne.Sb.APPROVED?(0,i.jsx)(st.Z,{height:"20",width:"20",stroke:o.success}):a&&(0,i.jsxs)(u.ZP,{children:[(0,i.jsx)(at.Z,{height:"20",width:"20",color:o.critical}),(0,i.jsx)(ft,{children:e.status===ne.Sb.FAILED?(0,i.jsx)(d.cC,{children:"Failed"}):(0,i.jsx)(d.cC,{children:"Rejected"})})]})})]}),a&&(0,i.jsxs)(wt,{justify:"space-between",children:[(0,i.jsx)(bt,{onClick:()=>n(e),children:(0,i.jsx)(d.cC,{children:"Remove"})}),(0,i.jsx)(vt,{onClick:e.callback,children:(0,i.jsx)(d.cC,{children:"Retry"})})]})]})},Ct=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionHeader",componentId:"sc-9f98a7d2-0"})`
  justify-content: space-between;
`,_t=(0,y.default)(_.Tv.SubHeader).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionTitle",componentId:"sc-9f98a7d2-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:n})=>n?e.success:t?e.neutral1:e.neutral2};
`,Pt=(0,y.default)(Qe.g8).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionArrow",componentId:"sc-9f98a7d2-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${nt.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,St=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionBody",componentId:"sc-9f98a7d2-3"})`
  border-left: 1.5px solid ${tt.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Je.Zl}
`,Nt=(0,y.default)(et.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__StyledInfoIcon",componentId:"sc-9f98a7d2-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,It=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__ContentRowContainer",componentId:"sc-9f98a7d2-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var kt;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(kt||(kt={}));const Dt=({sectionType:e,active:t,content:n,toggleSection:o})=>{const s=(0,y.useTheme)(),a=(0,M.Pc)((e=>e.sellAssets)),l=(0,M.Pc)((e=>e.removeAssetMarketplace)),r=(0,j.useMemo)((()=>!n.some((e=>e.status!==ne.Sb.APPROVED))),[n]),c=0===e,p=(0,j.useMemo)((()=>{if(c){const e=n.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[n,c]),x=e=>{if(c){const t=e;for(const e of a)e.asset_contract.address===t.collectionAddress&&l(e,t.marketplace)}else{const t=e;l(t.asset,t.marketplace)}};return(0,i.jsxs)(m.ZP,{children:[(0,i.jsxs)(Ct,{children:[(0,i.jsxs)(u.ZP,{children:[t||r?(0,i.jsx)(Qe.bT,{fill:r?s.success:s.accent1}):(0,i.jsx)(Qe.rD,{}),(0,i.jsx)(_t,{active:t,marginLeft:"12px",approved:r,children:c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.cC,{children:"Approve"}),"\xa0",(0,i.jsx)(d.CN,{value:p??1,one:d.t`collection`,other:d.t`collections`})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.cC,{children:"Sign"})," \xa0",n.length,"\xa0"," ",(0,i.jsx)(d.CN,{value:n.length,one:d.t`listing`,other:d.t`listings`})]})})]}),(0,i.jsx)(Pt,{active:t,secondaryColor:t?s.neutral1:s.neutral2,onClick:o})]}),t&&(0,i.jsxs)(St,{children:[c&&(0,i.jsxs)(u.ZP,{height:"16px",marginBottom:"16px",children:[(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,i.jsx)(d.cC,{children:"Why is a transaction required?"})}),(0,i.jsx)(Ke.ud,{text:(0,i.jsx)(d.cC,{children:"Listing an NFT requires a one-time marketplace approval for each NFT collection."}),children:(0,i.jsx)(Nt,{})})]}),(0,i.jsx)(It,{children:n.map((e=>{var t;return(0,i.jsx)(yt,{row:e,removeRow:x,isCollectionApprovalSection:c},(null===(t=e)||void 0===t?void 0:t.name)??e.marketplace.name)}))})]})]})};var Tt=n(81339),$t=n(72993);const Rt=y.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImage",componentId:"sc-d37f541-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,Mt=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImageWrapper",componentId:"sc-d37f541-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Je.Zl}
`,Et=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ProceedsColumn",componentId:"sc-d37f541-2"})`
  text-align: right;
`,Lt=y.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${C.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,Ft=y.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ReturnButton",componentId:"sc-d37f541-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Lt}
`,At=y.default.a.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetButton",componentId:"sc-d37f541-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${Lt}
`,Ot=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetRow",componentId:"sc-d37f541-5"})`
  justify-content: center;
  gap: 4px;
`,Bt=({overlayClick:e})=>{const t=(0,y.useTheme)(),{formatNumberOrString:n}=(0,S.Gb)(),o=(0,M.Pc)((e=>e.sellAssets)),s=(0,$t.x)(),a=(0,f.Z)(s),{formatCurrencyAmount:l}=(0,S.Gb)(),r=(0,j.useMemo)((()=>We(o)),[o]),c=(0,h.Z)(r.toString(),a),p=(0,x.sq)(c);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(B,{children:[(0,i.jsxs)(_.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,i.jsx)(d.cC,{children:"Successfully listed"}),"\xa0",o.length>1?` ${o.length} `:"","NFT",(0,ot._6)(o.length),"!"]}),(0,i.jsx)(b.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,i.jsx)(Mt,{children:o.map((e=>{var t,n,s;return(0,i.jsx)(Rt,{src:e.imageUrl,numImages:o.length},(null===(n=e)||void 0===n||null===(t=n.asset_contract)||void 0===t?void 0:t.address)??""+(null===(s=e)||void 0===s?void 0:s.tokenId))}))}),(0,i.jsxs)(u.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,i.jsx)(_.Tv.SubHeader,{children:(0,i.jsx)(d.cC,{children:"Proceeds if sold"})}),(0,i.jsxs)(Et,{children:[(0,i.jsxs)(_.Tv.SubHeader,{children:[n({input:r,type:S.sw.NFTToken})," ETH"]}),p&&(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:l({amount:p,type:S.sw.FiatTokenPrice})})]})]}),(0,i.jsxs)(u.ZP,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,i.jsx)(Ft,{onClick:()=>window.location.reload(),children:(0,i.jsx)(d.cC,{children:"Return to My NFTs"})}),(0,i.jsx)(At,{href:(0,ot.FX)(o),target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(Ot,{children:[(0,i.jsx)(Tt.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,i.jsx)(d.cC,{children:"Share on Twitter"})]})})]})]})};function Zt(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}const Wt=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModal__ListModalWrapper",componentId:"sc-77ec682c-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${P.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${C.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Gt=({overlayClick:e})=>{var t;const n=(0,qe.m)(),s=(0,Ue.n)(),l=null===(t=s)||void 0===t?void 0:t.getSigner(),r=(0,a.oO)({modal:o.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,S.Gb)(),p=(0,M.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:m,setLooksRareNonce:u,getLooksRareNonce:v,collectionsRequiringApproval:y,listings:C}=(0,M.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:o})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:o}))),P=(0,j.useMemo)((()=>We(p)),[p]),[N,I]=(0,j.useReducer)((e=>e===kt.APPROVE?kt.SIGN:kt.APPROVE),kt.APPROVE),k=(0,f.Z)(n.chainId),D=(0,h.Z)(P.toString(),k),T=c({amount:(0,x.sq)(D),type:S.sw.FiatTokenPrice}),$=(0,j.useMemo)((()=>y.every((e=>e.status===ne.Sb.APPROVED))),[y]),R=(0,j.useMemo)((()=>C.every((e=>e.status===ne.Sb.APPROVED))),[C]),E=function(){var e,t=(e=function*(){if(l&&s){for(const e of C)yield Be(e,l,s,v,u,m);(0,a._P)(o.Yz.NFT_LISTING_COMPLETED,{signatures_approved:C.filter((e=>e.status===ne.Sb.APPROVED)),list_quantity:C.length,usd_value:T,...r})}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){Zt(s,i,o,a,l,"next",e)}function l(e){Zt(s,i,o,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,j.useEffect)((()=>{$&&(E(),N===kt.APPROVE&&I())}),[$]);const L=(0,j.useCallback)((()=>{R?window.location.reload():e()}),[R,e]);return(0,j.useEffect)((()=>{!C.length&&L()}),[C,L]),(0,i.jsxs)(g.h,{children:[(0,i.jsx)(a.fM,{modal:o.KO.NFT_LISTING,children:(0,i.jsx)(Wt,{children:R?(0,i.jsx)(Bt,{overlayClick:L}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(B,{children:[(0,i.jsx)(_.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)(d.cC,{children:"List NFTs"})}),(0,i.jsx)(b.Z,{size:24,cursor:"pointer",onClick:L})]}),(0,i.jsx)(Dt,{sectionType:kt.APPROVE,active:N===kt.APPROVE,content:y,toggleSection:I}),(0,i.jsx)(Dt,{sectionType:kt.SIGN,active:N===kt.SIGN,content:C,toggleSection:I})]})})}),(0,i.jsx)(w.a,{onClick:L})]})};var Ht=n(30520),zt=n(86082);const Xt=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Dropdown__DropdownWrapper",componentId:"sc-2f0c6b6d-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,Vt=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\Dropdown__DropdownRow",componentId:"sc-2f0c6b6d-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Yt=({dropDownOptions:e,width:t})=>{const n=(0,y.useTheme)();return(0,i.jsx)(Xt,{$width:t,children:e.map((e=>(0,i.jsxs)(Vt,{onClick:e.onClick,children:[(0,i.jsx)(_.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,i.jsx)(st.Z,{height:20,width:20,color:n.accent1})]},e.displayText)))})};var qt=n(95684),Ut=n(43562),Jt=n(87175),Kt=n(68113),Qt=n(37246);const en=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__PriceTextInputWrapper",componentId:"sc-5ff07694-0"})`
  gap: 12px;
  position: relative;
`,tn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__InputWrapper",componentId:"sc-5ff07694-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,nn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__CurrencyWrapper",componentId:"sc-5ff07694-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,on=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__GlobalPriceIcon",componentId:"sc-5ff07694-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,sn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningRow",componentId:"sc-5ff07694-4"})`
  gap: 4px;
`,an=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningMessage",componentId:"sc-5ff07694-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${C.j$.md}px) {
    right: unset;
  }
`,ln=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningAction",componentId:"sc-5ff07694-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,rn=e=>{let t=(0,i.jsx)(i.Fragment,{});switch(e){case W.BELOW_FLOOR:t=(0,i.jsx)(d.cC,{children:"below floor price."});break;case W.ALREADY_LISTED:t=(0,i.jsx)(d.cC,{children:"Already listed at"})}return t},cn=({listPrice:e,setListPrice:t,isGlobalPrice:n,setGlobalOverride:o,globalOverride:s,asset:a})=>{var l;const{formatNumberOrString:r,formatDelta:c}=(0,S.Gb)(),[p,m]=(0,j.useState)(W.NONE),u=(0,M.Pc)((e=>e.removeSellAsset)),x=(0,M.Pc)((e=>e.showResolveIssues)),f=(0,j.useRef)(),h=(0,y.useTheme)(),g=100*(1-(e??0)/(a.floorPrice??0)),w=x&&!e||p===W.ALREADY_LISTED||p===W.BELOW_FLOOR&&g>=20?tt.O9.red400:p===W.BELOW_FLOOR?h.deprecated_accentWarning:n||e?h.accent1:h.neutral2;return function(e,t,n,i){var o;(0,j.useEffect)((()=>{var o;e(W.NONE);const s=i??0;t.current.value=`${s}`,s<((null===(o=n)||void 0===o?void 0:o.floorPrice)??0)&&s>0?e(W.BELOW_FLOOR):n.floor_sell_order_price&&s>=n.floor_sell_order_price&&n.asset_contract.tokenType!==fe.hgB.Erc1155&&e(W.ALREADY_LISTED)}),[n.asset_contract.tokenType,null===(o=n)||void 0===o?void 0:o.floorPrice,n.floor_sell_order_price,t,i,e])}(m,f,a,e),(0,i.jsxs)(en,{children:[(0,i.jsxs)(tn,{borderColor:w,children:[(0,i.jsx)(Jt.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:f,onChange:n=>{if(!e&&n.target.value.includes(".")&&0===parseFloat(n.target.value))return;const i=parseFloat(n.target.value);t(isNaN(i)?void 0:i)}}),(0,i.jsx)(nn,{listPrice:e,children:"\xa0ETH"}),(n||s)&&(0,i.jsx)(on,{onClick:()=>o(!s),children:s?(0,i.jsx)(Qe.We,{}):(0,i.jsx)(Qt.Z,{size:20,color:w})})]}),(0,i.jsx)(an,{$color:w,children:p!==W.NONE&&(0,i.jsxs)(sn,{children:[(0,i.jsx)(v.Z,{height:16,width:16,color:w}),(0,i.jsxs)("span",{children:[p===W.BELOW_FLOOR&&`${c(g)} `,rn(p),"\xa0",p===W.ALREADY_LISTED&&`${r({input:(null===(l=a)||void 0===l?void 0:l.floor_sell_order_price)??0,type:S.sw.NFTToken})} ETH`]}),(0,i.jsx)(ln,{onClick:()=>{p===W.ALREADY_LISTED&&u(a),m(W.NONE)},children:p===W.BELOW_FLOOR?(0,i.jsx)(d.cC,{children:"Dismiss"}):(0,i.jsx)(d.cC,{children:"Remove item"})})]})})]})},dn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeeWrap",componentId:"sc-237f4af-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,pn=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__RoyaltyContainer",componentId:"sc-237f4af-1"})`
  gap: 12px;
  padding: 4px 0px;
`,mn=y.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,un=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MarketIcon",componentId:"sc-237f4af-2"})`
  border-radius: 4px;
  ${mn}
`,xn=y.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__CollectionIcon",componentId:"sc-237f4af-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${mn}
`,fn=(0,y.default)(_.Tv.BodySmall).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeePercent",componentId:"sc-237f4af-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,hn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MaxFeeContainer",componentId:"sc-237f4af-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,gn=({selectedMarkets:e,asset:t,fees:n})=>{var o;const{formatNumberOrString:s,formatDelta:a}=(0,S.Gb)(),l=Math.max(...e.map((e=>He(e,t)??0)));return(0,i.jsxs)(pn,{children:[e.map((e=>{var n;return(0,i.jsxs)(dn,{children:[(0,i.jsxs)(u.ZP,{children:[(0,i.jsx)(un,{children:(0,ot.Dp)(e.name,"16")}),(0,i.jsxs)(_.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,i.jsx)(d.cC,{children:"fee"})]})]}),(0,i.jsx)(fn,{children:a(e.fee)})]},(null===(n=t.collection)||void 0===n?void 0:n.address)??""+t.tokenId+e.name+"fee")})),(0,i.jsxs)(dn,{children:[(0,i.jsxs)(u.ZP,{children:[(0,i.jsx)(xn,{src:null===(o=t.collection)||void 0===o?void 0:o.imageUrl}),(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,i.jsx)(d.cC,{children:"Max creator royalties"})})]}),(0,i.jsxs)(fn,{children:[l,"%"]})]}),(0,i.jsxs)(hn,{children:[(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"16px",children:(0,i.jsx)(d.cC,{children:"Max fees"})}),(0,i.jsxs)(_.Tv.BodySmall,{lineHeight:"16px",color:n?"neutral1":"neutral2",children:[n?s({input:n,type:S.sw.NFTToken}):"-"," ETH"]})]})]})},wn=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__LastPriceInfo",componentId:"sc-691ca3bd-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${C.j$.lg}px) {
    display: flex;
  }
`,jn=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FloorPriceInfo",componentId:"sc-691ca3bd-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,bn=(0,y.default)(O).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-691ca3bd-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,vn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconsWrapper",componentId:"sc-691ca3bd-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${C.j$.sm}px) {
    display: none;
  }
`,yn=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconWrapper",componentId:"sc-691ca3bd-4"})`
  position: relative;
  cursor: pointer;
`,Cn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIcon",componentId:"sc-691ca3bd-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,_n=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-691ca3bd-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${C.j$.sm}px) {
    display: none;
  }
`,Pn=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeColumnWrapper",componentId:"sc-691ca3bd-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,Sn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeWrapper",componentId:"sc-691ca3bd-8"})`
  width: min-content;
  white-space: nowrap;
`,Nn=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__ReturnColumn",componentId:"sc-691ca3bd-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,In=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:n,selectedMarkets:o,removeMarket:s,asset:a,expandMarketplaceRows:l,toggleExpandMarketplaceRows:r,rowHovered:c})=>{const{formatNumberOrString:p,formatDelta:m}=(0,S.Gb)(),x=(0,M.Pc)((e=>e.setAssetListPrice)),f=(0,M.Pc)((e=>e.removeAssetMarketplace)),[h,g]=(0,j.useReducer)((e=>!e),!1),[w,b]=(0,j.useReducer)((e=>!e),!1),[v,y]=(0,j.useState)((()=>{var e,t;return null===(t=a.newListings)||void 0===t||null===(e=t.find((e=>{var t;return l?e.marketplace.name===(null===(t=o)||void 0===t?void 0:t[0].name):!!e.price})))||void 0===e?void 0:e.price})),[C,P]=(0,j.useState)(!1),N=e===Z.SAME_PRICE&&!C,I=N?t:v,k=(0,j.useCallback)((e=>{N?n(e):y(e);for(const t of o)x(a,e,t)}),[a,o,x,n,N]),D=(0,j.useMemo)((()=>{let e=0;for(const t of o){const n=He(t,a)+t.fee;e=Math.max(n,e)}return e}),[a,o]),T=I&&I*D/100,$=I&&T&&I-T;return function(e,t,n,i,o){(0,j.useEffect)((()=>{let s;e?(i||t(o),s=o):s=i,n(s)}),[e])}(C,y,k,v,t),function(e,t,n,i,o,s,a){(0,j.useEffect)((()=>{var l;a===Z.FLOOR_PRICE?(t(null===(l=e)||void 0===l?void 0:l.floorPrice),n(e.floorPrice)):a===Z.LAST_PRICE?(t(e.lastPrice),n(e.lastPrice)):a===Z.SAME_PRICE&&(o&&!s?n(o):t(s)),i(!1)}),[a])}(a,y,n,P,v,t,e),(0,j.useEffect)((()=>{N&&k(t)}),[t]),(0,i.jsxs)(u.ZP,{onMouseEnter:b,onMouseLeave:b,children:[(0,i.jsx)(jn,{children:(0,i.jsx)(_.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:p({input:a.floorPrice,type:S.sw.NFTToken})+a.floorPrice?" ETH":""})}),(0,i.jsx)(wn,{children:(0,i.jsx)(_.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:a.lastPrice?`${p({input:a.lastPrice,type:S.sw.NFTToken})} ETH`:"-"})}),(0,i.jsxs)(u.ZP,{flex:"2",children:[(l||o.length>1)&&(0,i.jsx)(vn,{onMouseEnter:g,onMouseLeave:g,children:o.map(((e,t)=>{var n;return(0,i.jsxs)(yn,{onClick:t=>{t.stopPropagation(),f(a,e),s&&s()},children:[(0,i.jsx)(Cn,{index:t,children:(0,ot.Dp)(e.name,"20")}),(0,i.jsx)(bn,{hovered:h&&(l??!1),children:(0,i.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+(null===(n=a.collection)||void 0===n?void 0:n.address)+a.tokenId)}))}),(0,i.jsx)(cn,{listPrice:I,setListPrice:k,isGlobalPrice:N,setGlobalOverride:P,globalOverride:C,asset:a}),c&&(l&&w||o.length>1)&&(0,i.jsx)(_n,{onClick:r,children:l?(0,i.jsx)(Qe.fJ,{}):(0,i.jsx)(Qe.nG,{})})]}),(0,i.jsx)(Pn,{children:(0,i.jsx)(Ke.ud,{text:(0,i.jsx)(gn,{selectedMarkets:o,asset:a,fees:T}),placement:"left",children:(0,i.jsx)(Sn,{children:(0,i.jsx)(_.Tv.BodyPrimary,{color:"neutral2",children:D>0?`${m(D)}${o.length>1?d.t`max`:""}`:"--%"})})})}),(0,i.jsx)(Nn,{children:(0,i.jsx)(kn,{ethPrice:$})})]})},kn=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,S.Gb)(),n=(0,Ut.$)();return(0,i.jsx)(u.ZP,{width:"100%",justify:"flex-end",children:(0,i.jsx)(_.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,i.jsxs)(m.ZP,{children:[(0,i.jsxs)("span",{children:[t({input:e,type:S.sw.NFTToken})," ETH"]}),(0,i.jsx)(_.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*n,type:S.sw.FiatNFTToken})})]}):"- ETH"})})},Dn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTListRowWrapper",componentId:"sc-18902c6d-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Tn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__RemoveIconContainer",componentId:"sc-18902c6d-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${C.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,$n=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTInfoWrapper",componentId:"sc-18902c6d-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 1.5;
  }
`,Rn=y.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTImage",componentId:"sc-18902c6d-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,Mn=y.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,En=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__TokenInfoWrapper",componentId:"sc-18902c6d-4"})`
  margin-right: 8px;
  min-width: 0px;
`,Ln=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__TokenName",componentId:"sc-18902c6d-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${Mn}
`,Fn=(0,y.default)(_.Tv.BodySmall).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__CollectionName",componentId:"sc-18902c6d-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${Mn};
`,An=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__MarketPlaceRowWrapper",componentId:"sc-18902c6d-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 3;
  }
`,On=({asset:e,globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:s})=>{var a;const[l,r]=(0,j.useReducer)((e=>!e),!1),c=(0,M.Pc)((e=>e.removeSellAsset)),[d,p]=(0,j.useState)([]),[m,u]=(0,j.useReducer)((e=>!e),!1),x=(0,y.useTheme)();return(0,j.useEffect)((()=>{p(JSON.parse(JSON.stringify(s)))}),[s]),(0,i.jsxs)(Dn,{onMouseEnter:()=>{!m&&u()},onMouseLeave:()=>{m&&u()},children:[(0,i.jsx)(Tn,{children:m&&(0,i.jsx)(qt.Z,{size:20,color:x.neutral2,cursor:"pointer",onClick:()=>{c(e)}})}),(0,i.jsxs)($n,{children:[(0,i.jsx)(Rn,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,i.jsxs)(En,{children:[(0,i.jsx)(Ln,{children:e.name?e.name:`#${e.tokenId}`}),(0,i.jsxs)(Fn,{children:[null===(a=e.collection)||void 0===a?void 0:a.name,e.collectionIsVerified&&(0,i.jsx)(Qe.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,i.jsx)(An,{children:l&&d.length>1?d.map((s=>(0,i.jsx)(In,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:[s],removeMarket:()=>p(d.filter((e=>e.name!==s.name))),asset:e,expandMarketplaceRows:l,rowHovered:m,toggleExpandMarketplaceRows:r},e.name+s.name))):(0,i.jsx)(In,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:d,asset:e,rowHovered:m,toggleExpandMarketplaceRows:r})})]})},Bn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__TableHeader",componentId:"sc-9c60707-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${C.j$.sm}px) {
    padding-left: 48px;
  }
`,Zn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__NFTHeader",componentId:"sc-9c60707-1"})`
  flex: 2;

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 1.5;
  }
`,Wn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__PriceHeaders",componentId:"sc-9c60707-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 3;
  }
`,Gn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__LastPriceHeader",componentId:"sc-9c60707-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${C.j$.lg}px) {
    display: flex;
  }
`,Hn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FloorPriceHeader",componentId:"sc-9c60707-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,zn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-9c60707-5"})`
  flex: 2;
  gap: 4px;
`,Xn=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPromptContainer",componentId:"sc-9c60707-6"})`
  position: relative;
  @media screen and (max-width: ${C.j$.sm}px) {
    display: none;
  }
`,Vn=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPrompt",componentId:"sc-9c60707-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Yn=(0,y.default)(zt.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownChevron",componentId:"sc-9c60707-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,qn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownContainer",componentId:"sc-9c60707-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,Un=y.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,Jn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FeeHeader",componentId:"sc-9c60707-10"})`
  flex: 1;
  ${Un}
`,Kn=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__UserReceivesHeader",componentId:"sc-9c60707-11"})`
  flex: 1.5;
  ${Un}
`,Qn=y.default.hr.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__RowDivider",componentId:"sc-9c60707-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,ei=({selectedMarkets:e})=>{const t=(0,M.Pc)((e=>e.sellAssets)),[n,o]=(0,j.useState)(Z.CUSTOM),[s,a]=(0,j.useState)(),[l,r]=(0,j.useReducer)((e=>!e),!1),c=(0,j.useRef)(null);(0,Ht.t)(c,l?r:void 0);const p=(0,j.useMemo)((()=>[{displayText:"Custom",isSelected:n===Z.CUSTOM,onClick:()=>{o(Z.CUSTOM),r()}},{displayText:"Floor price",isSelected:n===Z.FLOOR_PRICE,onClick:()=>{o(Z.FLOOR_PRICE),r()}},{displayText:"Last price",isSelected:n===Z.LAST_PRICE,onClick:()=>{o(Z.LAST_PRICE),r()}},{displayText:"Same price",isSelected:n===Z.SAME_PRICE,onClick:()=>{o(Z.SAME_PRICE),r()}}]),[n]);let u;switch(n){case Z.CUSTOM:u=(0,i.jsx)(d.cC,{children:"Custom"});break;case Z.FLOOR_PRICE:u=(0,i.jsx)(d.cC,{children:"Floor price"});break;case Z.LAST_PRICE:u=(0,i.jsx)(d.cC,{children:"Last price"});break;case Z.SAME_PRICE:u=(0,i.jsx)(d.cC,{children:"Same price"})}return(0,i.jsxs)(m.ZP,{children:[(0,i.jsxs)(Bn,{children:[(0,i.jsx)(Zn,{children:(0,i.jsx)(d.cC,{children:"NFT"})}),(0,i.jsxs)(Wn,{children:[(0,i.jsx)(Hn,{children:(0,i.jsx)(d.cC,{children:"Floor"})}),(0,i.jsx)(Gn,{children:(0,i.jsx)(d.cC,{children:"Last"})}),(0,i.jsxs)(zn,{ref:c,children:[(0,i.jsx)(d.cC,{children:"Price"}),(0,i.jsxs)(Xn,{children:[(0,i.jsxs)(Vn,{onClick:r,children:[u," ",(0,i.jsx)(Yn,{isOpen:l})]}),l&&(0,i.jsx)(qn,{children:(0,i.jsx)(Yt,{dropDownOptions:p,width:200})})]})]}),(0,i.jsx)(Jn,{children:(0,i.jsx)(d.cC,{children:"Fees"})}),(0,i.jsx)(Kn,{children:(0,i.jsx)(d.cC,{children:"You receive"})})]})]}),t.map((o=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(On,{asset:o,globalPriceMethod:n,globalPrice:s,setGlobalPrice:a,selectedMarkets:e}),t.indexOf(o)<t.length-1&&(0,i.jsx)(Qn,{})]})))]})};var ti=n(90090),ni=n(15288),ii=n(4256),oi=n(27389);const si=(0,y.default)(ni.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-45ca7e4-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,ai=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__FeeText",componentId:"sc-45ca7e4-1"})`
  color: ${({theme:e})=>e.neutral2};
`,li=(0,y.default)(ni.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-45ca7e4-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${ti.T1}) {
    width: 220px;
  }
`,ri=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-45ca7e4-3"})`
  display: flex;
`,ci=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketIcon",componentId:"sc-45ca7e4-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,di=(0,y.default)(Qe.g8).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__Chevron",componentId:"sc-45ca7e4-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,pi=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-45ca7e4-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,mi=(0,y.default)(ni.sg).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-45ca7e4-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${P.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,ui=({setSelectedMarkets:e,selectedMarkets:t})=>{const[n,o]=(0,j.useReducer)((e=>!e),!1),s=(0,j.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),a=(0,j.useRef)(null);return(0,Ht.t)(a,(()=>n&&o())),(0,i.jsxs)(pi,{ref:a,children:[(0,i.jsxs)(li,{className:Kt.km,onClick:o,children:[(0,i.jsxs)(ri,{children:[t.map(((e,n)=>(0,i.jsx)(ci,{totalSelected:t.length,index:n,children:(0,ot.Dp)(e.name,"20")},n))),s]}),(0,i.jsx)(di,{isOpen:n,secondaryColor:oi.Z4.colors.neutral1})]}),(0,i.jsx)(mi,{isOpen:n,children:Te.map((n=>(({market:e,setSelectedMarkets:t,selectedMarkets:n})=>{const o=n.includes(e),[s,a]=(0,j.useReducer)((e=>!e),!1),l=()=>{1===n.length&&o||t(o?n.filter((t=>t!==e)):[...n,e])};return(0,i.jsxs)(si,{onMouseEnter:a,onMouseLeave:a,onClick:l,children:[(0,i.jsxs)(ni.X2,{gap:"12",onClick:l,children:[(0,ot.Dp)(e.name,"24"),(0,i.jsxs)(ni.sg,{children:[(0,i.jsx)(_.Tv.BodyPrimary,{children:e.name}),(0,i.jsxs)(ai,{className:Kt.VJ,children:[e.fee,"% fee"]})]})]}),(0,i.jsx)(ii.X,{hovered:s,checked:o,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,i.jsx)("span",{})})]})})({market:n,setSelectedMarkets:e,selectedMarkets:t})))})]})},xi=(0,y.default)(ni.sg).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__ModalWrapper",componentId:"sc-89e097db-0"})`
  gap: 4px;
  position: relative;
`,fi=(0,y.default)(ni.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__InputWrapper",componentId:"sc-89e097db-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,hi=(0,y.default)(ni.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownPrompt",componentId:"sc-89e097db-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,gi=(0,y.default)(zt.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownChevron",componentId:"sc-89e097db-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,wi=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownContainer",componentId:"sc-89e097db-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${P.k.dropdown};
`,ji=(0,y.default)(ni.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__ErrorMessage",componentId:"sc-89e097db-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,bi=(0,y.default)(v.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__WarningIcon",componentId:"sc-89e097db-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var vi,yi;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(vi||(vi={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(yi||(yi={}));const Ci=()=>{const[e,t]=(0,j.useState)(vi.day),[n,o]=(0,j.useState)("7"),[s,a]=(0,j.useState)(yi.valid),l=(0,M.Pc)((e=>e.setGlobalExpiration)),[r,c]=(0,j.useReducer)((e=>!e),!1),p=(0,j.useRef)(null);(0,Ht.t)(p,r?c:void 0);const m=(0,j.useMemo)((()=>[{displayText:"hours",isSelected:e===vi.hour,onClick:()=>{t(vi.hour),c()}},{displayText:"days",isSelected:e===vi.day,onClick:()=>{t(vi.day),c()}},{displayText:"weeks",isSelected:e===vi.week,onClick:()=>{t(vi.week),c()}},{displayText:"months",isSelected:e===vi.month,onClick:()=>{t(vi.month),c()}}]),[e]);let u;switch(e){case vi.hour:u=(0,i.jsx)(d.CN,{value:+n,one:d.t`hour`,other:d.t`hours`});break;case vi.day:u=(0,i.jsx)(d.CN,{value:+n,one:d.t`day`,other:d.t`days`});break;case vi.week:u=(0,i.jsx)(d.CN,{value:+n,one:d.t`week`,other:d.t`weeks`});break;case vi.month:u=(0,i.jsx)(d.CN,{value:+n,one:d.t`month`,other:d.t`months`})}return(0,j.useEffect)((()=>{const t=_i(parseFloat(n),e);1e3*t-Date.now()<A()("60s")||isNaN(t)?a(yi.empty):1e3*t-Date.now()>A()("180d")?a(yi.overMax):a(yi.valid),l(t)}),[n,e,l]),(0,i.jsxs)(xi,{ref:p,children:[(0,i.jsxs)(fi,{isInvalid:s!==yi.valid,children:[(0,i.jsx)(Jt.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},value:n,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{o(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,i.jsxs)(hi,{onClick:c,children:[u," ",(0,i.jsx)(gi,{isOpen:r})]}),r&&(0,i.jsx)(wi,{children:(0,i.jsx)(Yt,{dropDownOptions:m,width:125})})]}),s!==yi.valid&&(0,i.jsxs)(ji,{className:Kt.VJ,children:[" ",(0,i.jsx)(bi,{})," ",s===yi.overMax?"Maximum 6 months":"Set duration"]})]})},_i=(e,t)=>Math.round((Date.now()+A()("1h")*(()=>{switch(t){case vi.hour:return 1;case vi.day:return 24;case vi.week:return 168;default:return 720}})()*e)/1e3);function Pi(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}const Si=(0,y.default)(m.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ListingHeader",componentId:"sc-9e8b1cc2-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${C.j$.xs}px) {
    gap: 4px;
  }
`,Ni=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ArrowContainer",componentId:"sc-9e8b1cc2-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${C.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,Ii=(0,y.default)(Ve.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__BackArrow",componentId:"sc-9e8b1cc2-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${C.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,ki=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__TitleWrapper",componentId:"sc-9e8b1cc2-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${C.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,Di=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ButtonsWrapper",componentId:"sc-9e8b1cc2-4"})`
  gap: 12px;
  width: min-content;
`,Ti=y.default.section.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__MarketWrap",componentId:"sc-9e8b1cc2-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,$i=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ListingHeaderRow",componentId:"sc-9e8b1cc2-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${C.j$.sm}px) {
    padding-left: 40px;
  }
`,Ri=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__GridWrapper",componentId:"sc-9e8b1cc2-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,Mi=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__FloatingConfirmationBar",componentId:"sc-9e8b1cc2-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${P.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${C.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${C.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,Ei=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__Overlay",componentId:"sc-9e8b1cc2-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,Li=(0,y.default)(_.Tv.SubHeader).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__UsdValue",componentId:"sc-9e8b1cc2-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${C.j$.lg}px) {
    display: flex;
  }
`,Fi=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ProceedsAndButtonWrapper",componentId:"sc-9e8b1cc2-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${C.j$.sm}px) {
    gap: 20px;
  }
`,Ai=(0,y.default)(u.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ProceedsWrapper",componentId:"sc-9e8b1cc2-12"})`
  width: min-content;
  gap: 16px;
`,Oi=y.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__EthValueWrapper",componentId:"sc-9e8b1cc2-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${C.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Bi=()=>{const{formatNumberOrString:e}=(0,S.Gb)(),{setProfilePageState:t}=(0,M.aO)(),n=(0,qe.m)(),s=(0,Ye.z)(),l=(0,E.dD)(),r=(0,a.oO)({modal:o.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,S.Gb)(),{setGlobalMarketplaces:p,sellAssets:g,issues:w}=(0,M.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:n})=>({setGlobalMarketplaces:e,sellAssets:t,issues:n}))),{listings:b,collectionsRequiringApproval:v,setCollectionStatusAndCallback:y}=(0,M.zM)((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n}))),C=(0,j.useMemo)((()=>We(g)),[g]),P=(0,f.Z)(n.chainId),N=(0,h.Z)(C.toString(),P),I=(0,x.sq)(N),k=c({amount:I,type:S.sw.FiatTokenPrice}),[D,T]=(0,j.useReducer)((e=>!e),!1),[$,R]=(0,j.useState)([Te[0]]);Ge(),(0,j.useEffect)((()=>{p($)}),[$,p]);const L={collection_addresses:g.map((e=>e.asset_contract.address)),token_ids:g.map((e=>e.tokenId)),marketplaces:Array.from(new Set(b.map((e=>e.marketplace.name)))),list_quantity:b.length,usd_value:k,...r},F=function(){var e,t=(e=function*(){if(s){(0,a._P)(o.Yz.NFT_SELL_START_LISTING,{...L});for(const t of v)(e=t.status)!==ne.Sb.PAUSED&&e!==ne.Sb.APPROVED&&(l?yield Ae(t,s,y):Ae(t,s,y));var e}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){Pi(s,i,o,a,l,"next",e)}function l(e){Pi(s,i,o,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),A=l?(0,i.jsx)(_.Tv.SubHeader,{children:(0,i.jsx)(d.cC,{children:"Receive"})}):(0,i.jsx)(_.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)(d.cC,{children:"You receive"})});return(0,i.jsxs)(m.ZP,{children:[(0,i.jsxs)(Ti,{children:[(0,i.jsxs)(Si,{children:[(0,i.jsxs)(u.ZP,{children:[(0,i.jsx)(Ni,{children:(0,i.jsx)(Ii,{onClick:()=>t(ne.HA.VIEWING)})}),(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,i.jsx)(d.cC,{children:"My NFTs"})})]}),(0,i.jsxs)($i,{children:[(0,i.jsx)(ki,{children:(0,i.jsx)(d.cC,{children:"Sell NFTs"})}),(0,i.jsxs)(Di,{children:[(0,i.jsx)(ui,{setSelectedMarkets:R,selectedMarkets:$}),(0,i.jsx)(Ci,{})]})]})]}),(0,i.jsx)(Ri,{children:(0,i.jsx)(ei,{selectedMarkets:$})})]}),(0,i.jsxs)(Mi,{issues:!!w,children:[A,(0,i.jsxs)(Fi,{children:[(0,i.jsxs)(Ai,{children:[(0,i.jsxs)(Oi,{totalEthListingValue:!!C,children:[C>0?e({input:C,type:S.sw.NFTToken}):"-"," ","ETH"]}),!!I&&(0,i.jsx)(Li,{children:k})]}),(0,i.jsx)(Xe,{onClick:()=>{T(),F()}})]})]}),(0,i.jsx)(Ei,{}),D&&(0,i.jsx)(Gt,{overlayClick:T})]})};var Zi=n(44952),Wi=n(95040),Gi=n(71291),Hi=n(34385),zi=n(48714),Xi=n(52873),Vi=n(82743),Yi=(n(69640),n(76907)),qi=n(1285),Ui=n(43328),Ji=n(84820),Ki=n(15511);n(49484);const Qi=(0,y.default)(ni.sg).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__ItemsContainer",componentId:"sc-436ea750-0"})`
  ${Je.Zl}
  height: 100vh;
`,eo=(0,y.default)(Vi.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__LongLoadingBubble",componentId:"sc-436ea750-1"})`
  min-height: 15px;
  width: 75%;
`,to=(0,y.default)(Vi.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__SmallLoadingBubble",componentId:"sc-436ea750-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,no=(0,y.default)(ni.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__MobileMenuHeader",componentId:"sc-436ea750-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,io=({style:e})=>(0,i.jsxs)(ni.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,i.jsxs)(ni.X2,{display:"flex",flex:"1",children:[(0,i.jsx)(to,{}),(0,i.jsx)(eo,{})]}),(0,i.jsx)(Wi.n,{as:"span",borderColor:"surface3",className:"rgw6ez453 rgw6ezq9 rgw6ez80l rgw6ez19f rgw6ez12f rgw6ez7zp rgw6ez89d","aria-hidden":"true"})]}),oo=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,walletCollections:o})=>{const s=(0,M.Pr)((e=>e.collectionFilters)),a=(0,M.Pr)((e=>e.setCollectionFilters)),[l,r]=(0,M.wx)(),c=(0,E.dD)(),{sidebarX:d}=(0,Yi.q_)({sidebarX:l?0:-360,config:{duration:nt.Kd.medium,easing:Yi.Z5.easeOutSine}}),p=(0,j.useMemo)((()=>{var e;return o&&(null===(e=o)||void 0===e?void 0:e.length)>=Fo||n}),[o,n]);return(0,i.jsx)(Wi.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:l?"flex":"none",style:{transform:c?void 0:d.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,i.jsxs)(Wi.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[c&&(0,i.jsxs)(no,{children:[(0,i.jsx)(_.Tv.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(Qe.DX,{height:28,width:28,fill:oi.Z4.colors.neutral1,onClick:()=>r(!1)})]}),(0,i.jsx)(so,{collections:o,collectionFilters:s,setCollectionFilters:a,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,hideSearch:p})]})})},so=({collections:e,collectionFilters:t,setCollectionFilters:n,fetchNextPage:o,hasNextPage:s,isFetchingNextPage:a,hideSearch:l})=>{const[r,c]=(0,j.useState)(""),[d,p]=(0,j.useState)(e);(0,j.useEffect)((()=>{if(r){const t=e.filter((e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(r.toLowerCase())}));p(t)}else p(e)}),[r,e]);const m=(0,j.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),u=s?d.length+1:d.length,x=a?Ki.Z:o,f=(0,j.useCallback)((e=>!s||e<d.length),[d.length,s]),h=(0,j.useCallback)((({index:e,style:o})=>!(!!d&&d[e])||a?(0,i.jsx)(io,{style:o},e):(0,i.jsx)(lo,{style:o,collection:d[e],collectionFilters:t,setCollectionFilters:n},m(e,d))),[d,a,m,t,n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Wi.n,{className:Kt.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,i.jsx)(Wi.n,{paddingBottom:"12",borderRadius:"8",children:(0,i.jsxs)(ni.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!l&&(0,i.jsx)(ao,{collectionSearchText:r,setCollectionSearchText:c}),(0,i.jsx)(Qi,{children:(0,i.jsx)(qi.ZP,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(Ji.Z,{isItemLoaded:f,itemCount:u,loadMoreItems:x,children:({onItemsRendered:t,ref:n})=>(0,i.jsx)(Ui.t7,{height:e,width:"100%",itemCount:u,itemSize:44,onItemsRendered:t,itemKey:m,ref:n,children:h})})})})]})})]})},ao=({collectionSearchText:e,setCollectionSearchText:t})=>(0,i.jsx)(Jt.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),lo=({collection:e,collectionFilters:t,setCollectionFilters:n,style:o})=>{const[s,a]=(0,j.useState)(!1),[l,r]=(0,j.useReducer)((e=>!e),!1),c=(0,j.useCallback)((e=>t.some((t=>t===e))),[t]),d=()=>{a(!s),n(e.address)};return(0,i.jsxs)(ni.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...o},maxHeight:"44",as:"li",onMouseEnter:r,onMouseLeave:r,onClick:d,children:[(0,i.jsxs)(ni.X2,{children:[(0,i.jsx)(Wi.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsxs)(Wi.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,i.jsx)(ii.X,{checked:c(e.address),hovered:l,onChange:d,children:(0,i.jsx)(Wi.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var ro,co=n(40976),po=n(10581),mo=n(31915),uo=n(61049);function xo(e,t,n,i,o,s,a){try{var l=e[s](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(i,o)}function fo(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){xo(s,i,o,a,l,"next",e)}function l(e){xo(s,i,o,a,l,"throw",e)}a(void 0)}))}}!function(e){e[e.SHORT=5e3]="SHORT",e[e.MEDIUM=15e3]="MEDIUM",e[e.LONG=6e4]="LONG"}(ro||(ro={}));const ho=function(){var e=fo((function*({params:e}){let t=!1;if(!e)return[];for(const o of Object.values(e))void 0===o&&(t=!0);if(t)return[];const n=yield fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),i=yield n.json();return i?i.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]}));return function(t){return e.apply(this,arguments)}}();var go=n(41218),wo=n(23173);const jo=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-a6ba35bc-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,bo=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-a6ba35bc-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,vo=(0,y.default)(bo).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-a6ba35bc-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,yo=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-a6ba35bc-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,Co=(0,y.default)(bo).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-a6ba35bc-4"})`
  justify-content: space-between;
`,_o=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-a6ba35bc-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,Po=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-a6ba35bc-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,So=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-a6ba35bc-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,No=()=>(0,i.jsx)(Wi.n,{width:"full",className:Hi.P,children:Array.from(Array(Lo),((e,t)=>(0,i.jsx)(So,{className:wo.S},t)))}),Io=()=>(0,i.jsxs)(jo,{children:[(0,i.jsx)(vo,{children:(0,i.jsx)(yo,{className:wo.S})}),(0,i.jsxs)(Co,{children:[(0,i.jsx)(_o,{className:wo.S}),(0,i.jsx)(Po,{className:wo.S})]}),(0,i.jsx)(No,{})]});var ko=n(2798),Do=n(42601),To=n(6282);const $o=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,hideDetails:s})=>{const l=(0,M.Pc)((e=>e.sellAssets)),r=(0,M.Pc)((e=>e.selectSellAsset)),c=(0,M.Pc)((e=>e.removeSellAsset)),p=(0,M.cP)((e=>e.bagExpanded)),m=(0,M.cP)((e=>e.toggleBag)),u=(0,E.dD)(),x=(0,To.s0)(),f=(0,j.useMemo)((()=>l.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,l]),h=(0,a.oO)(),g=t=>{t?c(e):(r(e),(0,a._P)(o.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...h})),p||l.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||u||m()},w=e.susFlag,b=(0,j.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,i.jsx)(Qe.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,i.jsx)(d.cC,{children:"Remove from bag"}),notSelectedInfo:(0,i.jsx)(d.cC,{children:"List for sale"}),disabledInfo:(0,i.jsx)(d.cC,{children:"Unavailable for listing"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,i.jsx)(ko.y,{asset:e,display:b,isSelected:f,isDisabled:Boolean(w),selectAsset:()=>g(!1),unselectAsset:()=>g(!0),onButtonClick:()=>g(f),onCardClick:()=>{s||x((0,Do.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"nft-profile-asset"})},Ro=(0,y.default)(ni.sg).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__ProfilePageColumn",componentId:"sc-9fbd9c13-0"})`
  ${co.bc}
`,Mo=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__ProfileHeader",componentId:"sc-9fbd9c13-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,Eo=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__EmptyStateContainer",componentId:"sc-9fbd9c13-2"})`
  margin-top: 164px;
`,Lo=25,Fo=300,Ao=()=>{const{address:e}=(0,M.tM)(),t=(0,M.Pr)((e=>e.walletCollections)),n=(0,M.Pr)((e=>e.setWalletCollections)),{resetSellAssets:o}=(0,M.Pc)((({reset:e})=>({resetSellAssets:e}))),s=(0,M.Pc)((e=>e.sellAssets)),a=(0,M.cP)((e=>e.toggleBag)),[l,r]=(0,M.wx)(),c=(0,E.dD)(),{data:d,fetchNextPage:p,hasNextPage:m,isFetchingNextPage:u,isSuccess:x}=(0,mo.N)(function(e){return(0,uo.t)({queryKey:["ownerCollections",{address:e}],queryFn:function(){var t=fo((function*({pageParam:t}){const n={asset_owner:e,offset:""+t*Fo,limit:`${Fo}`};return{data:yield ho(n),nextPage:t+1}}));return function(e){return t.apply(this,arguments)}}(),initialPageParam:0,getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:ro.MEDIUM})}(e)),f=(0,j.useMemo)((()=>{var e;return x?null===(e=d)||void 0===e?void 0:e.pages.map((e=>e.data)).flat():null}),[x,d]);return(0,j.useEffect)((()=>{f&&n(f)}),[f,n]),(0,i.jsxs)(Ro,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Mo,{children:"My NFTs"}),(0,i.jsxs)(ni.X2,{alignItems:"flex-start",position:"relative",children:[(0,i.jsx)(oo,{fetchNextPage:p,hasNextPage:m,isFetchingNextPage:u,walletCollections:t}),(!c||!l)&&(0,i.jsx)(j.Suspense,{fallback:(0,i.jsx)(Io,{}),children:(0,i.jsx)(Oo,{walletCollections:t,isFiltersExpanded:l,setFiltersExpanded:r})})]})]}),s.length>0&&(0,i.jsxs)(ni.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Kt.v4,children:[s.length," NFT",1===s.length?"":"s",(0,i.jsx)(Wi.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:o,lineHeight:"16",children:"Clear"}),(0,i.jsx)(Wi.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:a,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},Oo=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:n})=>{var o,s,a,l,r;const{address:c}=(0,M.tM)(),d=(0,M.Pr)((e=>e.setCollectionFilters)),p=(0,M.Pr)((e=>e.collectionFilters)),m=(0,M.Pr)((e=>e.clearCollectionFilters)),u=(0,M.cP)((e=>e.bagExpanded)),[x,f]=(0,j.useState)(),h=(0,E.dD)(),g=(0,M.Pc)((e=>e.sellAssets)),{walletAssets:w,loading:b,hasNext:v,loadMore:y}=(0,Zi.b)(c,p,[],Lo),{gridX:C}=(0,Yi.q_)({gridX:t?300:-16,config:{duration:250,easing:Yi.Z5.easeOutSine}});return b?(0,i.jsx)(Io,{}):(0,i.jsx)(ni.sg,{width:"full",children:0===(null===(o=w)||void 0===o?void 0:o.length)?(0,i.jsx)(Eo,{children:(0,i.jsx)(go.f,{})}):(0,i.jsxs)(Wi.x,{flexShrink:"0",position:h&&u?"fixed":"static",style:{transform:C.to((e=>`translate(${Number(e)-(!h&&t?300:-16)}px)`))},paddingY:"20",children:[(0,i.jsx)(ni.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,i.jsx)(zi.L,{isMobile:h,isFiltersExpanded:t,onClick:()=>n(!t)})}),(0,i.jsx)(ni.X2,{children:(0,i.jsx)(Bo,{collections:e,collectionFilters:p,setCollectionFilters:d,clearCollectionFilters:m})}),(0,i.jsx)(po.Z,{next:y,hasMore:v??!1,loader:Boolean(v&&(null===(s=w)||void 0===s?void 0:s.length))&&(0,i.jsx)(Gi.p,{count:Lo}),dataLength:(null===(a=w)||void 0===a?void 0:a.length)??0,className:(null===(l=w)||void 0===l?void 0:l.length)?Hi.P:void 0,style:{overflow:"unset"},children:(null===(r=w)||void 0===r?void 0:r.length)?w.map(((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)($o,{asset:e,mediaShouldBePlaying:e.tokenId===x,setCurrentTokenPlayingMedia:f,hideDetails:g.length>0})},t))):null})]})})},Bo=({collections:e,collectionFilters:t,setCollectionFilters:n,clearCollectionFilters:o})=>{var s,a;const l=t=>{var n;return null===(n=e)||void 0===n?void 0:n.find((e=>e.address===t))},r=(0,j.useCallback)((()=>o()),[o]);return(0,i.jsxs)(ni.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(null===(s=t)||void 0===s?void 0:s.length)&&t.map(((e,t)=>(0,i.jsx)(Zo,{collection:l(e),setCollectionFilters:n},`CollectionFilterItem-${e}-${t}`))),Boolean(null===(a=t)||void 0===a?void 0:a.length)&&(0,i.jsx)(Xi.v,{onClick:r,children:"Clear all"})]})},Zo=({collection:e,setCollectionFilters:t})=>{var n;return e?(0,i.jsxs)(ni.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,i.jsx)(Wi.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsx)(Wi.n,{marginLeft:"6",className:"_1bw5dlr8",children:null===(n=e)||void 0===n?void 0:n.name}),(0,i.jsx)(Wi.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,i.jsx)(Qe.aM,{})})]}):null};var Wo=n(437),Go=n(13446);const Ho=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\profile\\index__ProfilePageWrapper",componentId:"sc-cc3cfb91-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${C.j$.lg}px) {
    height: auto;
  }
`,zo=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\profile\\index__LoadedAccountPage",componentId:"sc-cc3cfb91-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?p.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${C.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,Xo=y.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\profile\\index__Center",componentId:"sc-cc3cfb91-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,Vo=(0,y.default)(r.DF).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\profile\\index__ConnectWalletButton",componentId:"sc-cc3cfb91-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function Yo(e,t){return e?t?(0,d.t)("{{name}}'s NFT collection on Uniswap",{name:t}):(0,d.t)("NFT collection on Uniswap - {{address}}",{address:(0,Go.Xn)(e)}):d.t`NFT collection on Uniswap`}function qo(){const e=(0,M.aO)((e=>e.state)),t=(0,M.aO)((e=>e.setProfilePageState)),n=(0,M.Pc)((e=>e.reset)),r=(0,M.Pr)((e=>e.clearCollectionFilters)),{account:p}=(0,s.G)(),{ENSName:m}=(0,c.Z)(p),u=(0,j.useRef)(p),x=(0,l.LK)();(0,j.useEffect)((()=>{u.current!==p&&(u.current=p,n(),t(ne.HA.VIEWING),r())}),[p,n,t,r]);const f=(0,M.cP)((e=>e.bagExpanded)),h=e===ne.HA.LISTING;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Wo.Helmet,{children:(0,i.jsx)("title",{children:Yo(p,m)})}),(0,i.jsx)(a.fM,{page:o.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,i.jsx)(Ho,{children:p?(0,i.jsx)(zo,{cartExpanded:f,isListingNfts:h,children:h?(0,i.jsx)(Bi,{}):(0,i.jsx)(Ao,{})}):(0,i.jsxs)(Xo,{children:[(0,i.jsx)(_.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,i.jsx)(d.cC,{children:"No items to display"})}),(0,i.jsx)(Vo,{onClick:x,children:(0,i.jsx)(_.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,i.jsx)(d.cC,{children:"Connect wallet"})})})]})})})]})}}}]);
//# sourceMappingURL=5773.5dd19705.chunk.js.map