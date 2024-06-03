"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7663],{13901:(e,t,n)=>{n.d(t,{K:()=>r});var i=n(45779),a=n(99582);function o(e,t){var n,i,a,o,r,s,l,d,c,p,m,u,g,h,x,f,w,v,j,b,y,C,_,k,T,I,N,S,z,P,$,E,R,M,F,D,B,A,L,H,O;const Y=null===(i=e)||void 0===i||null===(n=i.markets)||void 0===n?void 0:n[0];if(!t&&!(null===(r=e)||void 0===r||null===(o=r.nftContracts)||void 0===o||null===(a=o[0])||void 0===a?void 0:a.address))return{};const U={};var X;(null===(s=e)||void 0===s?void 0:s.traits)&&(null===(X=e)||void 0===X||X.traits.forEach((e=>{e.name&&e.stats&&(U[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:t??(null===(c=e)||void 0===c||null===(d=c.nftContracts)||void 0===d||null===(l=d[0])||void 0===l?void 0:l.address)??"",isVerified:null===(p=e)||void 0===p?void 0:p.isVerified,name:null===(m=e)||void 0===m?void 0:m.name,description:null===(u=e)||void 0===u?void 0:u.description,standard:null===(x=e)||void 0===x||null===(h=x.nftContracts)||void 0===h||null===(g=h[0])||void 0===g?void 0:g.standard,bannerImageUrl:null===(w=e)||void 0===w||null===(f=w.bannerImage)||void 0===f?void 0:f.url,stats:{num_owners:null===(v=Y)||void 0===v?void 0:v.owners,floor_price:null===(b=Y)||void 0===b||null===(j=b.floorPrice)||void 0===j?void 0:j.value,one_day_volume:null===(C=Y)||void 0===C||null===(y=C.volume)||void 0===y?void 0:y.value,one_day_change:null===(k=Y)||void 0===k||null===(_=k.volumePercentChange)||void 0===_?void 0:_.value,one_day_floor_change:null===(I=Y)||void 0===I||null===(T=I.floorPricePercentChange)||void 0===T?void 0:T.value,banner_image_url:null===(S=e)||void 0===S||null===(N=S.bannerImage)||void 0===N?void 0:N.url,total_supply:null===(z=e)||void 0===z?void 0:z.numAssets,total_listings:null===($=Y)||void 0===$||null===(P=$.listings)||void 0===P?void 0:P.value,total_volume:null===(R=Y)||void 0===R||null===(E=R.totalVolume)||void 0===E?void 0:E.value},traits:U,marketplaceCount:null===(F=Y)||void 0===F||null===(M=F.marketplaces)||void 0===M?void 0:M.map((e=>{var t;return{marketplace:(null===(t=e.marketplace)||void 0===t?void 0:t.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(B=e)||void 0===B||null===(D=B.image)||void 0===D?void 0:D.url)??"",twitterUrl:null===(A=e)||void 0===A?void 0:A.twitterName,instagram:null===(L=e)||void 0===L?void 0:L.instagramName,discordUrl:null===(H=e)||void 0===H?void 0:H.discordUrl,externalUrl:null===(O=e)||void 0===O?void 0:O.homepageUrl,rarityVerified:!1}}function r(e,t){var n,r,s,l;const{data:d,loading:c}=(0,a.aG9)({variables:{addresses:e},skip:t}),p=null===(l=d)||void 0===l||null===(s=l.nftCollections)||void 0===s||null===(r=s.edges)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.node;return(0,i.useMemo)((()=>({data:o(p,e),loading:c})),[e,c,p])}},27011:(e,t,n)=>{n.r(t),n.d(t,{BannerWrapper:()=>jn,CollectionBannerLoading:()=>hn,default:()=>In});var i=n(92936),a=n(5985),o=n(47583),r=n(44591),s=n(68588),l=n(94284),d=n(82743),c=n(13901),p=n(97341),m=n(6823),u=n(3464),g=n(95040),h=n(15288),x=n(68113),f=n(79132),w=n(52384),v=n(78129),j=n(66136);n(69640),n(49484);const b=()=>{const e=(0,f.cP)((e=>e.itemsInBag)),t=(0,f.cP)((e=>e.toggleBag)),n=(0,w.P)(),a=(0,w.B)(),{formatEther:o,formatNumberOrString:r}=(0,j.Gb)(),s=e.length>0;return(0,i.jsxs)(h.X2,{display:{sm:s?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,i.jsxs)(h.X2,{gap:"8",children:[(0,i.jsx)(g.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,i.jsx)(g.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,i.jsxs)(h.sg,{children:[(0,i.jsx)(g.n,{className:x.d1,fontWeight:"medium",children:(0,v.t)(e.length,"NFT")}),(0,i.jsxs)(h.X2,{gap:"8",children:[(0,i.jsxs)(g.n,{className:x.d1,children:[`${o({input:n.toString(),type:j.sw.NFTToken})}`," ETH"]}),(0,i.jsx)(g.n,{color:"neutral2",className:x.Km,children:r({input:a,type:j.sw.FiatNFTToken})})]})]})]}),(0,i.jsx)(g.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var y=n(35842),C=n(14411),_=(n(45814),"_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf"),k="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9";const T=(0,C.default)(h.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\ActivitySwitcher__BaseActivityContainer",componentId:"sc-12fe17f6-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,I=new Array(2).fill(null).map(((e,t)=>(0,i.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),N=({showActivity:e,toggleActivity:t})=>{const n=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,i.jsx)(T,{gap:"24",marginBottom:"16",children:n?I:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.n,{as:"button",className:e?_:k,onClick:()=>e&&t(),children:"Items"}),(0,i.jsx)(o.M8,{events:[a.TM.onClick],element:a.xo.NFT_ACTIVITY_TAB,name:a.Yz.NFT_ACTIVITY_SELECTED,children:(0,i.jsx)(g.n,{as:"button",className:e?k:_,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var S=n(11604),z=n(66284),P=n(21989),$=n(9604),E=n(84662),R=n(2798),M=n(62293),F=n(45779);const D=({asset:e,isMobile:t,mediaShouldBePlaying:n,setCurrentTokenPlayingMedia:r,uniformAspectRatio:s,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c})=>{var p,u;const{formatEther:g}=(0,j.Gb)(),h=(0,f.cP)((e=>e.bagManuallyClosed)),x=(0,f.cP)((e=>e.addAssetsToBag)),w=(0,f.cP)((e=>e.removeAssetsFromBag)),v=(0,f.cP)((e=>e.itemsInBag)),b=(0,f.cP)((e=>e.bagExpanded)),y=(0,f.cP)((e=>e.setBagExpanded)),C=(0,o.oO)({page:a.yJ.NFT_COLLECTION_PAGE}),{isSelected:_}=(0,F.useMemo)((()=>({isSelected:v.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,v]),k=e.notForSale||S.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),T=(null===(u=e)||void 0===u||null===(p=u.rarity)||void 0===p?void 0:p.providers)?e.rarity.providers[0]:void 0,I=(0,F.useCallback)((()=>{var n;S.O$.from((null===(n=e.priceInfo)||void 0===n?void 0:n.ETHPrice)??0).gt(0)&&(x([e]),b||t||h||y({bagExpanded:!0}),(0,o._P)(a.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...C}))}),[x,e,b,h,t,y,C]),N=(0,F.useCallback)((()=>{w([e])}),[e,w]),z=(0,F.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,i.jsx)(M.yT,{}):null,primaryInfoRight:e.rarity&&T?(0,i.jsx)(M.SD,{provider:T}):null,secondaryInfo:k?"":`${g({input:e.priceInfo.ETHPrice,type:j.sw.NFTToken})} ETH`,selectedInfo:(0,i.jsx)(m.cC,{children:"Remove from bag"}),notSelectedInfo:(0,i.jsx)(m.cC,{children:"Add to bag"}),disabledInfo:(0,i.jsx)(m.cC,{children:"Not listed"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,g,k,T]);return(0,i.jsx)(R.y,{asset:e,display:z,isSelected:_,isDisabled:Boolean(e.notForSale),selectAsset:I,unselectAsset:N,mediaShouldBePlaying:n,uniformAspectRatio:s,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:r,testId:"nft-collection-asset"})};var B,A=n(34385),L=n(30520),H=n(58690),O=n(27389),Y="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",U="_10b1b4vc",X="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",W="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",Z="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",V="_10b1b4v2",K=n(12461),G=n(12294),q=n(47832);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(B||(B={}));const J=(0,G.Ue)()((0,q.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,n)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:n}})))}})),{name:"useTraitsOpen"}));var Q=n(54972),ee=n(4256);const te=(0,C.default)(h.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\MarketplaceSelect__FilterItemWrapper",componentId:"sc-94e770fe-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,ne=(0,C.default)(h.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\MarketplaceSelect__MarketNameWrapper",componentId:"sc-94e770fe-1"})`
  gap: 10px;
`,ie={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},ae=({title:e,element:t,onClick:n})=>(0,i.jsxs)(te,{onClick:n,children:[(0,i.jsx)(Q.Tv.BodyPrimary,{children:e}),(0,i.jsx)(Q.Tv.SubHeaderSmall,{children:t})]}),oe=({title:e,value:t,addMarket:n,removeMarket:r,isMarketSelected:s,count:l})=>{const[d,c]=(0,F.useState)(!1),[p,m]=(0,F.useReducer)((e=>!e),!1);(0,F.useEffect)((()=>{c(s)}),[s]);const u=e=>{e.preventDefault(),d?(r(t),c(!1)):(n(t),c(!0)),(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.MARKETPLACE})},h=(0,i.jsx)(ee.X,{checked:d,hovered:p,onChange:u,children:(0,i.jsx)(g.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),x=(0,i.jsxs)(ne,{children:[(0,v.Dp)(e,"16"),e]});return(0,i.jsx)("div",{onMouseEnter:m,onMouseLeave:m,children:(0,i.jsx)(ae,{title:x,element:h,onClick:u})},t)},re=({title:e,items:t,onClick:n,isOpen:a})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.n,{className:X,opacity:a?"1":"0"}),(0,i.jsxs)(g.n,{as:"details",className:(0,P.default)(x.Nf,!a&&V),open:a,borderRadius:a?"0":"12",children:[(0,i.jsxs)(g.n,{as:"summary",className:`${Z} ${V}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:n,children:[e,(0,i.jsx)(g.n,{display:"flex",alignItems:"center",children:(0,i.jsx)(g.n,{className:Y,style:{transform:`rotate(${a?0:180}deg)`},children:(0,i.jsx)(H.g8,{className:U})})})]}),(0,i.jsx)(h.sg,{className:W,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),se=()=>{const{addMarket:e,removeMarket:t,markets:n,marketCount:a}=(0,K.PY)((({markets:e,marketCount:t,removeMarket:n,addMarket:i})=>({markets:e,marketCount:t,removeMarket:n,addMarket:i}))),[o,r]=(0,F.useState)(!!n.length),s=J((e=>e.setTraitsOpen)),l=(0,F.useMemo)((()=>Object.entries(ie).map((([o,r])=>{var s;return(0,i.jsx)(oe,{title:r,value:o,count:(null===(s=a)||void 0===s?void 0:s[o])||0,addMarket:e,removeMarket:t,isMarketSelected:n.includes(o)},o)}))),[e,a,t,n]);return(0,i.jsx)(re,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),r(!o),s(B.MARKPLACE_INDEX,!o)},isOpen:o})};var le=n(7797);const de=(0,C.default)(le.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\common\\SortDropdown\\FilterSortDropdown__CheckIcon",componentId:"sc-c4c806a4-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,ce=({sortDropDownOptions:e})=>{const[t,n]=(0,F.useState)(!1),a=e=>{e.preventDefault(),n(!t)},o=e.map((e=>(0,i.jsx)(pe,{dropDownOption:e,parentOnClick:a},e.displayText)));return(0,i.jsx)(re,{title:"Sort by",items:o,onClick:a,isOpen:t})},pe=({dropDownOption:e,parentOnClick:t})=>{const n=(0,f.PY)((e=>e.sortBy)),a=void 0!==e.sortBy&&n===e.sortBy?(0,i.jsx)(de,{}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)(ae,{title:e.displayText,element:a,onClick:n=>{n.preventDefault(),t(n),e.onClick()}})},me=({dropDownOptions:e,inFilters:t,mini:n,miniPrompt:a,top:o,left:r})=>{const s=(0,f.PY)((e=>e.sortBy)),[l,d]=(0,F.useReducer)((e=>!e),!1),[c,p]=(0,F.useReducer)((e=>!e),!1),[m,u]=(0,F.useState)(s),w=(0,f.Iv)((e=>e.isCollectionStatsLoading)),[v,j]=(0,F.useState)(0);(0,F.useEffect)((()=>{u(s)}),[s]);const b=(0,F.useRef)(null);(0,L.t)(b,(()=>l&&d())),(0,F.useEffect)((()=>j(0)),[e]);const y=(0,F.useMemo)((()=>e[m].reverseOnClick||e[m].reverseIndex),[m,e]),C=w?220:t?"full":n?"min":v||"300px";return(0,i.jsxs)(g.n,{ref:b,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:C},children:[(0,i.jsx)(g.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:n?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":n?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:w?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,P.default)(l&&!n&&"_12q7kth0"),children:!w&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&y&&(0,i.jsxs)(h.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[m].reverseOnClick){var n,i;null===(n=(i=e[m]).reverseOnClick)||void 0===n||n.call(i),p()}else{const t=e[m].reverseIndex??1;e[t-1].onClick(),u(t-1)}},children:[e[m].reverseOnClick&&(c?(0,i.jsx)(H.iB,{}):(0,i.jsx)(H.L7,{})),e[m].reverseIndex&&(m>(e[m].reverseIndex??1)-1?(0,i.jsx)(H.iB,{}):(0,i.jsx)(H.L7,{}))]}),(0,i.jsx)(g.n,{marginLeft:y?"4":"0",marginRight:n?"2":"0",color:"neutral1",className:x.km,children:n?a:l?"Sort by":e[m].displayText})]}),(0,i.jsx)(H.g8,{secondaryColor:n?O.Z4.colors.neutral1:void 0,secondaryWidth:n?"20":void 0,secondaryHeight:n?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,i.jsx)(g.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:n?void 0:"0",borderTopRightRadius:n?void 0:"0",overflowY:"hidden",transition:"250",display:l||!v?"block":"none",visibility:v?"visible":"hidden",marginTop:n?"12":"0",className:(0,P.default)(!n&&"_12q7kth1"),style:{top:o?`${o}px`:"inherit",left:t?"16px":r?`${r}px`:"inherit"},children:v?l&&e.map(((t,a)=>(0,i.jsx)(ue,{option:t,index:a,mini:n,onClick:()=>{e[a].onClick(),u(a),d(),c&&p()}},a))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,i.jsx)(ge,{option:e,index:t,setMaxWidth:j},t)))})]})},ue=({option:e,index:t,onClick:n,mini:a})=>(0,i.jsx)(g.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:a?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:n,cursor:"pointer",children:(0,i.jsx)(g.n,{marginLeft:"8",className:x.km,children:e.displayText})},t),ge=({option:e,index:t,setMaxWidth:n})=>{const a=(0,F.useRef)(null);return(0,F.useLayoutEffect)((()=>{a&&a.current&&n(Math.ceil(a.current.getBoundingClientRect().width)+52)})),(0,i.jsx)(g.n,{position:"absolute",ref:a,children:(0,i.jsx)(ue,{option:e,index:t})},t)};var he=n(23173),xe=n(11734);const fe=(0,G.Ue)()((0,q.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var we=n(47263);const ve="undefined"!==typeof window;const je=()=>{var e;const t=!!ve&&window.innerWidth<O.AV.sm?"nft-anchor-mobile":"nft-anchor";null===(e=window.document.getElementById(t))||void 0===e||e.scrollIntoView({behavior:"smooth"})};var be=n(18806);const ye=e=>{const t={...e};for(const i in t){const e=t[i],n=f.initialCollectionFilterState[i];JSON.stringify(e)===JSON.stringify(n)&&delete t[i]}t.all!==f.initialCollectionFilterState.buyNow&&delete t.all;const n=f.i9[f.initialCollectionFilterState.sortBy];return t.sort===n&&delete t.sort,t},Ce=(e,t)=>{const n={...e};["traits","markets"].forEach((e=>{n[e]||(n[e]=[]),n[e]&&"string"===typeof n[e]&&(n[e]=[n[e]])}));try{const{buyNow:e,search:i}=f.initialCollectionFilterState;if(Object.entries(f.i9).forEach((([e,t])=>{t===n.sort&&(n.sortBy=Number(e))})),n.buyNow=!(void 0===n.all?!e:n.all),n.search=void 0===n.search?i:String(n.search),2===n.traits.length){const[e,t]=n.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(n.traits=[`${e},${t}`])}n.traits=n.traits.map((e=>{const n=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[i,a]=n.split(","),o=t.traits&&t.traits[i].find((e=>e.trait_value===a));return o??{trait_type:i,trait_value:a,trait_count:0}}))}catch(i){n.traits=[]}return n};var _e=n(10581),ke=n(6282),Te=n(99582),Ie=n(72993),Ne=n(71291),Se=n(52873),ze=(n(13570),n(4105));const Pe=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepContainer",componentId:"sc-1dd1b80c-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,$e=(0,C.default)(ze.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__StyledSlider",componentId:"sc-1dd1b80c-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Ee=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepLeftmostContainer",componentId:"sc-1dd1b80c-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Re=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepRightmostContainer",componentId:"sc-1dd1b80c-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Me=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepHeaderContainer",componentId:"sc-1dd1b80c-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Fe=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepSubContainer",componentId:"sc-1dd1b80c-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,De=C.default.input.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__InputContainer",componentId:"sc-1dd1b80c-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,Be=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__ToggleContainer",componentId:"sc-1dd1b80c-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,Ae=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__ToggleSwitch",componentId:"sc-1dd1b80c-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,Le=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__NftDisplayContainer",componentId:"sc-1dd1b80c-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,He=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\Sweep__NftHolder",componentId:"sc-1dd1b80c-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,Oe=RegExp("^(0|[1-9][0-9]*)$"),Ye=RegExp("^\\d*\\.?\\d{0,2}$"),Ue=({nfts:e})=>(0,i.jsx)(Le,{children:[...Array(3)].map(((t,n)=>(0,i.jsx)(He,{index:n,src:e.length-1>=n?e[e.length-1-n].smallImageUrl:void 0},n)))}),Xe=({contractAddress:e,minPrice:t,maxPrice:n})=>{var a;const o=(0,C.useTheme)(),{formatEther:r}=(0,j.Gb)(),[s,l]=(0,F.useReducer)((e=>!e),!0),[d,c]=(0,F.useState)(""),p=(0,f.cP)((e=>e.addAssetsToBag)),u=(0,f.cP)((e=>e.removeAssetsFromBag)),g=(0,f.cP)((e=>e.itemsInBag)),h=(0,f.cP)((e=>e.lockSweepItems)),x=(0,f.cP)((e=>e.setBagExpanded)),w=(0,f.PY)((e=>e.traits)),b=(0,f.PY)((e=>e.markets)),y=Ze(e,"others",t,n),_=Ze(e,we.Fz.Sudoswap,t,n),k=Ze(e,we.Fz.NFTX,t,n),T=Ze(e,we.Fz.NFT20,t,n),{data:I}=(0,$.he)(y),{data:N}=(0,$.he)(_),{data:P}=(0,$.he)(k),{data:E}=(0,$.he)(T),{sortedAssets:R,sortedAssetsTotalEth:M}=(0,F.useMemo)((()=>{var e,t,n,i;if(!I&&!N&&!P&&!E)return{sortedAssets:void 0,sortedAssetsTotalEth:S.O$.from(0)};let a=0,o=0,r=[];N&&(r=[...r,...N]),P&&(r=[...r,...P]),E&&(r=[...r,...E]);const s=r.filter((e=>e.marketplace===we.Fz.Sudoswap&&!e.susFlag));r.forEach((e=>{if(!e.susFlag)if(e.marketplace===we.Fz.Sudoswap){const t=(0,v.Pu)(e,s.filter((t=>(0,v.zA)(e,t))).findIndex((t=>t.tokenId===e.tokenId)));e.priceInfo.ETHPrice=t??"0"}else{const t=e.marketplace===we.Fz.NFTX,n=(0,v.Pu)(e,t?a:o);S.O$.from(n).gt(0)&&(t?a++:o++),e.priceInfo.ETHPrice=n}})),r=I?I.concat(r):r,r.sort(((e,t)=>S.O$.from(e.priceInfo.ETHPrice).gt(S.O$.from(t.priceInfo.ETHPrice))?1:-1));let l=r.filter((e=>S.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return l=l.slice(0,Math.max((null===(e=I)||void 0===e?void 0:e.length)??0,(null===(t=N)||void 0===t?void 0:t.length)??0,(null===(n=P)||void 0===n?void 0:n.length)??0,(null===(i=E)||void 0===i?void 0:i.length)??0)),{sortedAssets:l,sortedAssetsTotalEth:l.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0))}}),[I,N,P,E]),{sweepItemsInBag:D,sweepEthPrice:B}=(0,F.useMemo)((()=>{const t=g.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),n=t.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:n}}),[g,e]);(0,F.useEffect)((()=>{0===D.length&&c("")}),[D]),(0,F.useEffect)((()=>{h(e)}),[e,w,b,t,n,h]);const A=e=>{if(R)if(s)0===D.length&&e>0&&x({bagExpanded:!0}),D.length<e?p(R.slice(D.length,e),!0):u(D.slice(e,D.length),!0),c(e<1?"":e.toString());else{const t=(0,z.parseEther)(e.toString());if(B.lte(t)){let e=D.length,n=B;const i=[];for(;e<R.length&&n.add(S.O$.from(R[e].priceInfo.ETHPrice)).lte(t);)i.push(R[e]),n=n.add(S.O$.from(R[e].priceInfo.ETHPrice)),e++;i.length>0&&(0===D.length&&x({bagExpanded:!0}),p(i,!0))}else{let e=D.length-1,n=B;const i=[];for(;e>=0&&n.gt(t);)i.push(D[e]),n=n.sub(S.O$.from(D[e].priceInfo.ETHPrice)),e--;i.length>0&&u(i,!0)}c(0===e?"":e.toFixed(2))}};return(0,i.jsxs)(Pe,{"data-testid":"nft-sweep-slider",children:[(0,i.jsxs)(Ee,{children:[(0,i.jsx)(Me,{children:(0,i.jsx)(Q.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,i.jsx)(m.cC,{children:"Sweep"})})}),(0,i.jsxs)(Fe,{children:[(0,i.jsx)($e,{defaultValue:0,min:0,max:s?(null===(a=R)||void 0===a?void 0:a.length)??0:parseFloat((0,z.formatEther)(M).toString()),value:s?D.length:parseFloat((0,z.formatEther)(B.toString())),step:s?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${o.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${o.surface3}`},onChange:e=>{"number"===typeof e&&R&&(s?(Math.floor(e)!==Math.floor(""!==d?parseFloat(d):0)&&A(Math.floor(e)),c(e<1?"":e.toString())):(A(e),c(0===e?"":e.toFixed(2))))}}),(0,i.jsx)(De,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:s&&""!==d?Math.floor(parseFloat(d)):d,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(A(0),c("")):(s&&Oe.test(t)||!s&&Ye.test(t))&&(A(parseFloat(t)),c(t))}}),(0,i.jsxs)(Be,{onClick:()=>{c(""),u(D),l()},children:[(0,i.jsx)(Ae,{active:s,children:"Items"}),(0,i.jsx)(Ae,{active:!s,children:"ETH"})]})]})]}),(0,i.jsxs)(Re,{children:[(0,i.jsx)(Q.Tv.SubHeader,{"font-size":"14px",children:`${r({input:B.toString(),type:j.sw.NFTToken})} ETH`}),(0,i.jsx)(Ue,{nfts:D})]})]})},We=[we.Fz.Opensea,we.Fz.X2Y2,we.Fz.LooksRare];function Ze(e,t,n,i){const a=(0,f.PY)((e=>e.traits)),o=(0,f.PY)((e=>e.markets)),r=!!o.length;return(0,F.useMemo)((()=>{if(r){if("others"===t){const t=o.filter((e=>!(0,we.g7)(e)));return t.length>0?{contractAddress:e,traits:a,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!o.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case we.Fz.Sudoswap:case we.Fz.NFTX:case we.Fz.NFT20:return{contractAddress:e,traits:a,markets:[t],price:{low:n,high:i,symbol:"ETH"}};case"others":return{contractAddress:e,traits:a,markets:We,price:{low:n,high:i,symbol:"ETH"}}}}),[e,r,t,o,i,n,a])}const Ve=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\TraitChip__TraitChipWrap",componentId:"sc-29602959-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ke=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\TraitChip__CrossIconWrap",componentId:"sc-29602959-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,Ge=({onClick:e,value:t})=>(0,i.jsxs)(Ve,{children:[(0,i.jsx)("span",{children:t}),(0,i.jsx)(Ke,{onClick:e,children:(0,i.jsx)(H.aM,{cursor:"pointer"})})]}),qe=new Map,Je=C.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,Qe=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ActionsContainer",componentId:"sc-667c8a6-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Je}
`,et=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ActionsSubContainer",componentId:"sc-667c8a6-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,tt=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SortDropdownContainer",componentId:"sc-667c8a6-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,nt=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__EmptyCollectionWrapper",componentId:"sc-667c8a6-3"})`
  display: block;
  text-align: center;
`,it=C.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ViewFullCollection",componentId:"sc-667c8a6-4"})`
  ${s.cR}
`,at=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__InfiniteScrollWrapper",componentId:"sc-667c8a6-5"})`
  ${Je}
`,ot=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SweepButton",componentId:"sc-667c8a6-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:n})=>e&&!t?n.deprecated_accentTextLightPrimary:n.neutral1};
  background: ${({theme:e,toggled:t,disabled:n})=>!n&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,rt=(0,C.default)(Q.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SweepText",componentId:"sc-667c8a6-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,st=(0,C.default)(h.X2).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__MarketNameWrapper",componentId:"sc-667c8a6-8"})`
  gap: 8px;
`,lt=({height:e})=>(0,i.jsx)(g.n,{width:"full",className:A.P,children:(0,i.jsx)(Ne.p,{height:e})}),dt=()=>(0,i.jsx)(at,{children:(0,i.jsxs)(h.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,i.jsxs)(h.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,i.jsx)(g.n,{className:he.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,i.jsx)(g.n,{className:he.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,i.jsx)(g.n,{className:he.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,i.jsx)(lt,{})]})}),ct=(e,t)=>{const n=[{displayText:"Price: Low to High",onClick:()=>e(f.hn.LowToHigh),reverseIndex:2,sortBy:f.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(f.hn.HighToLow),reverseIndex:1,sortBy:f.hn.HighToLow}];return t?n.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(f.hn.RareToCommon),reverseIndex:4,sortBy:f.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(f.hn.CommonToRare),reverseIndex:3,sortBy:f.hn.CommonToRare}]):n},pt=({contractAddress:e,collectionStats:t,rarityVerified:n})=>{var r,s,l,d,c;const m=(0,Ie.x)(),u=(0,f.PY)((e=>e.traits)),w=(0,f.PY)((e=>e.minPrice)),j=(0,f.PY)((e=>e.maxPrice)),b=(0,f.PY)((e=>e.markets)),y=(0,f.PY)((e=>e.sortBy)),C=(0,f.PY)((e=>e.search)),_=(0,f.PY)((e=>e.setMarketCount)),k=(0,f.PY)((e=>e.setSortBy)),T=(0,f.PY)((e=>e.buyNow)),I=fe((e=>e.setPriceRangeLow)),N=fe((e=>e.priceRangeLow)),R=fe((e=>e.priceRangeHigh)),M=fe((e=>e.setPriceRangeHigh)),B=fe((e=>e.setPrevMinMax)),L=(0,xe.I)((e=>e.setIsCollectionNftsLoading)),O=(0,f.PY)((e=>e.removeTrait)),Y=(0,f.PY)((e=>e.removeMarket)),U=(0,f.PY)((e=>e.reset)),X=(0,f.PY)((e=>e.setMinPrice)),W=(0,f.PY)((e=>e.setMaxPrice)),Z=(0,f.PY)((e=>e.setHasRarity)),V=(0,f.cP)((e=>e.toggleBag)),K=(0,f.cP)((e=>e.bagExpanded)),G=(0,f.cP)((e=>e.itemsInBag)),q=(0,E.Z)(w,500),J=(0,E.Z)(j,500),Q=(0,E.Z)(C,500),[ee,te]=(0,F.useState)(we.Yp.unset),[ne,ae]=(0,F.useState)(),[oe,re]=(0,F.useState)(!1),se={address:e,orderBy:f.AZ[y].field,asc:f.AZ[y].asc,filter:{listed:T,marketplaces:b.length>0?b.map((e=>e.toUpperCase())):void 0,maxPrice:J?(0,z.parseEther)(J.toString()).toString():void 0,minPrice:q?(0,z.parseEther)(q.toString()).toString():void 0,tokenSearchQuery:Q,traits:u.length>0?u.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:$.iQ},{data:le,loading:de,hasNext:ce,loadMore:pe}=(0,$.gP)(se),ue=(0,F.useCallback)((e=>{const t=G.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===we.Fz.Sudoswap){const n=G.filter((t=>(0,v.zA)(e,t.asset)));return t?n.findIndex((t=>t.asset.tokenId===e.tokenId)):n.length}return t?G.filter((t=>(0,v.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):G.filter((t=>(0,v.H8)(e,t.asset))).length}),[G]),ge=(0,F.useCallback)((e=>(0,v.Pu)(e,ue(e))),[ue]),he=(0,F.useMemo)((()=>{if(!le||!le.some((e=>e.marketplace&&(0,we.g7)(e.marketplace))))return le;const e=[...le];return e.forEach((e=>e.marketplace&&(0,we.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=ge(e)??"0"))),y!==f.hn.HighToLow&&y!==f.hn.LowToHigh||e.sort(((e,t)=>{var n,i;const a=S.O$.from((null===(n=e.priceInfo)||void 0===n?void 0:n.ETHPrice)??0),o=S.O$.from((null===(i=t.priceInfo)||void 0===i?void 0:i.ETHPrice)??0);if(a.gt(0)&&o.lte(0))return-1;if(o.gt(0)&&a.lte(0))return 1;const r=a.sub(o);return r.gt(0)?y===f.hn.LowToHigh?1:-1:r.lt(0)?y===f.hn.LowToHigh?-1:1:0})),e}),[le,y,ge]),[ve,ze]=(0,F.useState)(),[Pe,$e]=(0,f.wx)(),Ee=(0,F.useRef)(null),Re=(0,p.dD)(),Me=(0,p.eI)();(0,F.useEffect)((()=>{L(de)}),[de,L]);const Fe=(0,F.useMemo)((()=>{var e;const n=(0,v.oY)(qe,null===(e=t)||void 0===e?void 0:e.address,he)??!1;return Z(n),n}),[t.address,he,Z]),De=(0,F.useMemo)((()=>ct(k,Fe)),[Fe,k]);(0,F.useEffect)((()=>(re(!1),()=>{f.PY.setState(f.initialCollectionFilterState)})),[e]);const Be=(0,F.useMemo)((()=>he?he.map((e=>(0,i.jsx)(D,{asset:e,isMobile:Re,mediaShouldBePlaying:e.tokenId===ve,setCurrentTokenPlayingMedia:ze,rarityVerified:n,uniformAspectRatio:ee,setUniformAspectRatio:te,renderedHeight:ne,setRenderedHeight:ae},e.address+e.tokenId))):null),[he,Re,ve,n,ee,ne]),Ae=he&&he.length>0,Le=Ae&&he[0]&&(null===(r=he[0])||void 0===r?void 0:r.tokenType)===Te.hgB.Erc1155,He=(0,F.useMemo)((()=>q&&J?`Price: ${q} - ${J} ETH`:q?`Min. Price: ${q} ETH`:J?`Max Price: ${J} ETH`:void 0),[q,J]);(0,F.useEffect)((()=>{var e,n;const i={};null===(n=t)||void 0===n||null===(e=n.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{i[e]=t})),_(i),Ee.current=f.PY.getState()}),[null===(s=t)||void 0===s?void 0:s.marketplaceCount,_]);const Oe=(0,ke.TH)();(0,F.useEffect)((()=>{var e;if(null===(e=t)||void 0===e?void 0:e.traits){const e=((e,t)=>{if(!e.search)return;const n=be.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return Ce(n,t)})(Oe,t);requestAnimationFrame((()=>{e&&f.PY.setState(e)})),f.PY.subscribe((e=>{JSON.stringify(Ee.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((n=>{switch(n){case"traits":{const n=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=n;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=f.i9[e.sortBy];break;default:t[n]=e[n]}}));const n=ye(t),i=window.location.href.split("?")[0],a=be.stringify(n,{arrayFormat:"comma"});window.history.replaceState({},"",`${i}${a&&`?${a}`}`)})(e),Ee.current=e)}))}}),[Oe]),(0,F.useEffect)((()=>{te(we.Yp.unset),ae(void 0)}),[e]),(0,F.useEffect)((()=>{var e;if(t&&(null===(e=t.stats)||void 0===e?void 0:e.floor_price)){var n,i;const e=null===(n=t.stats)||void 0===n?void 0:n.floor_price,o=10*(null===(i=t.stats)||void 0===i?void 0:i.floor_price);var a;if(""===N)I(null===(a=e)||void 0===a?void 0:a.toFixed(2));""===R&&M(o.toFixed(2))}}),[t,N,R,M,I]);const Ye=(0,F.useCallback)((()=>{Le||(oe||(je(),K||Re||V()),re(!oe))}),[K,Le,Re,oe,V]),Ue=(0,F.useCallback)((()=>{U(),B([0,100]),je()}),[U,B]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,i.jsxs)(Qe,{children:[(0,i.jsxs)(et,{children:[(0,i.jsx)(o.M8,{events:[a.TM.onClick],element:a.xo.NFT_FILTER_BUTTON,name:a.Yz.NFT_FILTER_OPENED,shouldLogImpression:!Pe,properties:{collection_address:e,chain_id:m},children:(0,i.jsx)(Dt.L,{isMobile:Re,isFiltersExpanded:Pe,collectionCount:(null===(d=he)||void 0===d||null===(l=d[0])||void 0===l?void 0:l.totalCount)??0,onClick:()=>{K&&!Me.xl&&V(),$e(!Pe)}})}),(0,i.jsx)(tt,{isFiltersExpanded:Pe,children:(0,i.jsx)(me,{dropDownOptions:De})}),(0,i.jsx)(mt,{})]}),!Le&&(0,i.jsxs)(ot,{toggled:oe,disabled:Le,className:x.km,onClick:Ye,"data-testid":"nft-sweep-button",children:[(0,i.jsx)(H.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,i.jsx)(rt,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,i.jsxs)(at,{children:[oe&&(0,i.jsx)(Xe,{contractAddress:e,minPrice:q,maxPrice:J}),(0,i.jsxs)(h.X2,{paddingTop:b.length||u.length||He?"12":"0",gap:"8",flexWrap:"wrap",children:[b.map((e=>(0,i.jsx)(Ge,{value:(0,i.jsxs)(st,{children:[(0,v.Dp)(e,"16"),ie[e]]}),onClick:()=>{je(),Y(e)}},e))),u.map((e=>(0,i.jsx)(Ge,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,v._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{je(),O(e)}},e.trait_value))),He&&(0,i.jsx)(Ge,{value:He,onClick:()=>{je(),X(""),W(""),B([0,100])}}),Boolean(u.length||b.length||He)&&(0,i.jsx)(Se.v,{onClick:Ue,children:"Clear All"})]})]})]}),(0,i.jsx)(at,{children:de?(0,i.jsx)(lt,{height:ne}):(0,i.jsx)(_e.Z,{next:pe,hasMore:ce??!1,loader:Boolean(ce&&Ae)&&(0,i.jsx)(Ne.p,{}),dataLength:(null===(c=he)||void 0===c?void 0:c.length)??0,style:{overflow:"unset"},className:Ae?A.P:void 0,children:Ae?Be:(0,i.jsx)(h.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,i.jsxs)(nt,{children:[(0,i.jsx)("p",{className:x.Es,children:"No NFTS found"}),(0,i.jsx)(g.n,{onClick:U,type:"button",className:(0,P.default)(x.Km,x.km),color:"accent1",cursor:"pointer",children:(0,i.jsx)(it,{children:"View full collection"})})]})})})})]})};const mt=()=>{const e=(0,K.PY)((e=>e.setSearch)),t=(0,K.PY)((e=>e.search)),n=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,i.jsx)(g.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:n?"":"Search by name",className:(0,P.default)(n&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var ut=n(19478);const gt=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var ht=n(35339),xt=n.n(ht),ft="_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf",wt="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",vt="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha";const jt=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__PercentChange",componentId:"sc-11fce3a4-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,bt=C.default.h1.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionNameText",componentId:"sc-11fce3a4-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,yt=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionNameTextLoading",componentId:"sc-11fce3a4-2"})`
  ${he.S}
  height: 32px;
  width: 236px;
`,Ct=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-11fce3a4-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,_t=({children:e,href:t})=>(0,i.jsx)(g.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),kt=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:n})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ct,{onClick:n,children:t?(0,i.jsx)(H.DX,{width:"28",height:"28",fill:O.Z4.colors.neutral2}):(0,i.jsx)(H.ws,{width:"28",height:"20",fill:O.Z4.colors.neutral2})}),t&&(0,i.jsxs)(h.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,i.jsx)(_t,{href:e.discordUrl,children:(0,i.jsx)(g.n,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(H.D7,{width:28,height:28,color:O.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,i.jsx)(_t,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(g.n,{margin:"auto",paddingTop:"6",children:(0,i.jsx)(H.Zm,{fill:O.Z4.colors.neutral2,color:O.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,i.jsx)(_t,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(g.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,i.jsx)(H.yu,{fill:O.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,i.jsx)(_t,{href:e.externalUrl,children:(0,i.jsx)(g.n,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(H.O1,{fill:O.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),Tt=({children:e,href:t})=>(0,i.jsx)(h.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),It=({collectionStats:e,name:t,isVerified:n,isMobile:a,collectionSocialsIsOpen:o,toggleCollectionSocials:r})=>{const s=(0,xe.I)((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(h.X2,{justifyContent:"space-between",children:[(0,i.jsxs)(h.X2,{minWidth:"0",children:[s?(0,i.jsx)(yt,{}):(0,i.jsx)(bt,{isVerified:n,className:a?x.td:x.Es,children:t}),n&&(0,i.jsx)(H.SA,{style:{width:"32px",height:"32px"}}),(0,i.jsxs)(h.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,i.jsx)(Tt,{href:e.discordUrl??"",children:(0,i.jsx)(H.D7,{fill:O.Z4.colors.neutral2,color:O.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,i.jsx)(Tt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(H.Zm,{fill:O.Z4.colors.neutral2,color:O.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,i.jsx)(Tt,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(H.yu,{fill:O.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,i.jsx)(Tt,{href:e.externalUrl??"",children:(0,i.jsx)(H.O1,{fill:O.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),a&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,i.jsx)(kt,{collectionStats:e,collectionSocialsIsOpen:o,toggleCollectionSocials:r})]})},Nt=C.default.p.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionDescriptionText",componentId:"sc-11fce3a4-4"})`
  vertical-align: top;
  text-overflow: ellipsis;
  margin: 0;

  ${({readMore:e})=>e?C.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:C.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,St=C.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__ReadMore",componentId:"sc-11fce3a4-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,zt=()=>(0,i.jsx)(g.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),Pt=({description:e})=>{const[t,n]=(0,F.useState)(!1),[a,o]=(0,F.useReducer)((e=>!e),!1),r=(0,F.useRef)(null),s=(0,F.useRef)(null),l=(0,xe.I)((e=>e.isCollectionStatsLoading)),d=(0,p.dD)();return(0,F.useEffect)((()=>{var e;r&&s&&r.current&&s.current&&(s.current.getBoundingClientRect().width>=(null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect().width)-112||s.current.getBoundingClientRect().width>=590)?n(!0):n(!1)}),[s,r,l,e]),l?(0,i.jsx)(zt,{}):(0,i.jsxs)(g.n,{ref:r,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,i.jsx)(Nt,{readMore:a,ref:s,className:d?x.Km:x.d1,children:(0,i.jsx)(xt(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,i.jsxs)(St,{className:d?x.Km:x.d1,onClick:o,children:["show ",a?"less":"more"]})]})},$t=({children:e,label:t,shouldHide:n})=>(0,i.jsxs)(g.n,{display:n?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,i.jsx)(Q.Tv.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,i.jsx)(g.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),Et=e=>new Array(e?3:5).fill(null).map(((t,n)=>(0,i.jsxs)(g.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,i.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,i.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${n}`))),Rt=({stats:e,isMobile:t,...n})=>{var a,o,r,s,l,d,c,m,u,g,x,w,v,b;const{formatNumberOrString:y,formatDelta:C}=(0,j.Gb)(),_=(null===(o=e)||void 0===o||null===(a=o.stats)||void 0===a?void 0:a.total_supply)?gt((e.stats.num_owners??0)/e.stats.total_supply*100):0,k=e.stats?y({input:e.stats.total_supply??0,type:j.sw.NFTCollectionStats}):0,T=(null===(s=e)||void 0===s||null===(r=s.stats)||void 0===r?void 0:r.total_supply)?gt((e.stats.total_listings??0)/e.stats.total_supply*100):0,I=(0,xe.I)((e=>e.isCollectionStatsLoading)),N=y({input:Number(null===(l=e.stats)||void 0===l?void 0:l.total_volume)??0,type:j.sw.NFTCollectionStats}),S=y({input:(null===(d=e.stats)||void 0===d?void 0:d.floor_price)??0,type:j.sw.NFTTokenFloorPrice}),z=C(Math.round(Math.abs((null===(m=e)||void 0===m||null===(c=m.stats)||void 0===c?void 0:c.one_day_floor_change)??0))),P=(0,f.cP)((e=>e.bagExpanded)),$=(0,p.eI)(),E=t||!$.lg&&P;return(0,i.jsx)(h.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...n,children:I?Et(t??!1):(0,i.jsxs)(i.Fragment,{children:[(null===(u=e.stats)||void 0===u?void 0:u.floor_price)?(0,i.jsxs)($t,{label:"Global floor",shouldHide:!1,children:[S," ETH"]}):null,void 0!==(null===(g=e.stats)||void 0===g?void 0:g.one_day_floor_change)?(0,i.jsx)($t,{label:"Floor 24H",shouldHide:!1,children:(0,i.jsxs)(jt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,i.jsx)(ut.Kx,{delta:null===(w=e)||void 0===w||null===(x=w.stats)||void 0===x?void 0:x.one_day_floor_change}),z]})}):null,(null===(v=e.stats)||void 0===v?void 0:v.total_volume)?(0,i.jsxs)($t,{label:"Total volume",shouldHide:!1,children:[N," ETH"]}):null,k?(0,i.jsx)($t,{label:"Items",shouldHide:t??!1,children:k}):null,_&&e.standard!==we.iv.ERC1155?(0,i.jsxs)($t,{label:"Unique owners",shouldHide:E??!1,children:[_,"%"]}):null,(null===(b=e.stats)||void 0===b?void 0:b.total_listings)&&e.standard!==we.iv.ERC1155?(0,i.jsxs)($t,{label:"Listed",shouldHide:E??!1,children:[T,"%"]}):null]})})},Mt=({isMobile:e})=>(0,i.jsxs)(h.sg,{position:"relative",width:"full",children:[(0,i.jsx)(g.n,{className:wt}),(0,i.jsx)(g.n,{className:ft}),(0,i.jsxs)(g.n,{className:vt,children:[(0,i.jsx)(g.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zt,{}),(0,i.jsx)(h.X2,{gap:"60",marginTop:"20",children:Et(!1)})]})]}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zt,{}),(0,i.jsx)(h.X2,{gap:"20",marginTop:"20",children:Et(!0)})]})]}),Ft=({stats:e,isMobile:t})=>{const[n,a]=(0,F.useReducer)((e=>!e),!1),o=(0,xe.I)((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(g.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?n?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[o&&(0,i.jsx)(g.n,{as:"div",borderRadius:"round",position:"absolute",className:wt}),(0,i.jsx)(g.n,{as:o?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:o?ft:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,i.jsxs)(g.n,{className:vt,children:[(0,i.jsx)(It,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:n,toggleCollectionSocials:a}),(e.description||o)&&!t&&(0,i.jsx)(Pt,{description:e.description??""}),(0,i.jsx)(Rt,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||o)&&t&&(0,i.jsx)(Pt,{description:e.description??""}),(0,i.jsx)("div",{id:"nft-anchor-mobile"}),(0,i.jsx)(Rt,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var Dt=n(48714),Bt=n(87175),At=n(3638),Lt="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Ht=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\TraitsHeader__ChildreMobileWrapper",componentId:"sc-646f1a63-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Ot=e=>{const{children:t,index:n,title:a}=e,[o,r]=(0,F.useState)(!1),s=J((e=>e.traitsOpen)),l=J((e=>e.setTraitsOpen)),d=(0,p.dD)(),c=void 0!==n&&s[n-1],m=n!==B.TRAIT_START_INDEX;return(0,F.useEffect)((()=>{void 0!==n&&l(n,o)}),[o,n,l]),(0,i.jsxs)(i.Fragment,{children:[m&&(0,i.jsx)(g.n,{className:(0,P.default)(x.Nf,!o&&V,X),opacity:!c&&o&&0!==n?"1":"0",marginTop:c?"0":"8"}),(0,i.jsxs)(g.n,{as:"details",className:(0,P.default)(x.Nf,!o&&V),open:o,children:[(0,i.jsxs)(g.n,{as:"summary",className:`${Z} ${V}`,onClick:e=>{e.preventDefault(),r(!o)},children:[a,(0,i.jsxs)(g.n,{display:"flex",alignItems:"center",children:[(0,i.jsx)(g.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,i.jsx)(g.n,{className:Y,style:{transform:`rotate(${o?0:180}deg)`},children:(0,i.jsx)(H.g8,{className:U})})]})]}),(0,i.jsx)(Ht,{isMobile:d,children:t})]})]})},Yt=(0,C.default)(ze.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\PriceRange__StyledSlider",componentId:"sc-7655689-0"})`
  cursor: pointer;
`,Ut=()=>{const[e,t]=(0,F.useState)(""),n=(0,K.PY)((e=>e.setMinPrice)),r=(0,K.PY)((e=>e.setMaxPrice)),s=(0,K.PY)((e=>e.minPrice)),l=(0,K.PY)((e=>e.maxPrice)),d=fe((e=>e.priceRangeLow)),c=fe((e=>e.priceRangeHigh)),p=fe((e=>e.setPriceRangeLow)),m=fe((e=>e.setPriceRangeHigh)),u=fe((e=>e.prevMinMax)),f=fe((e=>e.setPrevMinMax)),w=(0,C.useTheme)(),v=(0,ke.TH)();(0,F.useEffect)((()=>{n(""),r(""),p(""),m("")}),[v.pathname,n,r,p,m]);const j=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},b=n=>{n.currentTarget.placeholder=e,t(""),(s||l)&&(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.PRICE_RANGE})};return(0,i.jsxs)(Ot,{title:"Price range",index:B.PRICE_RANGE_INDEX,children:[(0,i.jsxs)(h.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,i.jsx)(h.X2,{position:"relative",children:(0,i.jsx)(Bt.A,{style:{width:"126px"},className:Lt,placeholder:d,onChange:e=>{const[,t]=u;if(e.currentTarget.value){const n=parseInt(e.currentTarget.value)-parseInt(d),i=Math.floor(n/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)>=parseInt(l)?f([t,t]):f([i,t])}else f([0,t]);n(e.currentTarget.value.toString()),je()},onFocus:j,value:s,onBlur:b})}),(0,i.jsx)(g.n,{className:x.d1,children:"to"}),(0,i.jsx)(h.X2,{position:"relative",children:(0,i.jsx)(Bt.A,{style:{width:"126px"},className:Lt,placeholder:c,value:l,onChange:e=>{const[t]=u;if(e.currentTarget.value){const n=parseInt(c)-parseInt(e.currentTarget.value),i=Math.floor(100-n/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)<=parseInt(s)?f([t,t]):f([t,i])}else f([t,100]);r(e.currentTarget.value),je()},onFocus:j,onBlur:b})})]}),(0,i.jsx)(h.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,i.jsx)(Yt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:u,trackStyle:{top:"3px",height:"8px",background:`${w.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:At.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${w.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,i]=e,a=parseFloat(c.replace(/,/g,"")),o=parseFloat(d.replace(/,/g,"")),s=a-o,l=a-(100-i)/100*s;n((t/100*s+o).toFixed(2).toString()),r(l.toFixed(2).toString()),0===t&&n(""),100===i&&r(""),f(e)}})})]})};var Xt=n(86473),Wt=n(40848),Zt=n(1285),Vt=n(43328);const Kt=({trait:e,addTrait:t,removeTrait:n,isTraitSelected:r,style:s})=>{const[l,d]=(0,F.useState)(!1),[c,p]=(0,F.useState)(!1),m=()=>p(!c),u=(0,K.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:f,trait_value:w,trait_type:v}=(0,K.PY)((e=>e.showFullTraitName));(0,F.useEffect)((()=>{d(r)}),[r]);const j=i=>{i.preventDefault(),je(),l?(n(e),d(!1)):(t(e),d(!0)),(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.TRAIT})},b=f&&v===e.trait_type&&w===e.trait_value;return(0,i.jsxs)(h.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${x.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...s},maxHeight:"44",onMouseEnter:m,onMouseLeave:m,onClick:j,children:[(0,i.jsx)(g.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:b?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&u({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>u({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Wt._)(Number(e.trait_value))}`:e.trait_value}),(0,i.jsx)(ee.X,{checked:l,hovered:c,onChange:j,children:(0,i.jsx)(g.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!b&&e.trait_count})})]},e.trait_value)},Gt=({traits:e,type:t,index:n})=>{const a=(0,K.PY)((e=>e.addTrait)),o=(0,K.PY)((e=>e.removeTrait)),r=(0,K.PY)((e=>e.traits)),[s,l]=(0,F.useState)(""),d=(0,E.Z)(s,300),c=(0,F.useMemo)((()=>e.filter((e=>{var t;return null===(t=e.trait_value)||void 0===t?void 0:t.toString().toLowerCase().includes(d.toLowerCase())}))),[d,e]),p=(0,F.useCallback)((function({data:e,index:t,style:n}){const s=e[t],l=r.find((({trait_type:e,trait_value:t})=>e===s.trait_type&&String(t)===String(s.trait_value)));return(0,i.jsx)(Kt,{style:n,isTraitSelected:!!l,trait:s,addTrait:a,removeTrait:o})}),[r,a,o]),m=(0,F.useCallback)(((e,t)=>{const n=t[e];return`${n.trait_type}_${n.trait_value}_${e}`}),[]);return e.length?(0,i.jsxs)(Ot,{index:n,numTraits:e.length,title:t,children:[(0,i.jsx)(Bt.I,{value:s,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,i.jsx)(h.sg,{className:W,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,i.jsx)(Zt.ZP,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(Vt.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:m,children:({index:e,style:t,data:n})=>(0,i.jsx)(p,{style:t,data:n,index:e},m(e,n))})})})]}):null},qt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:n}=(0,f.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),a=(0,f.PY)((e=>e.setSortBy)),o=(0,f.PY)((e=>e.hasRarity)),[r,s]=(0,F.useReducer)((e=>!e),!1),l=()=>{n(!t)},d=(0,F.useMemo)((()=>ct(a,o??!1)),[o,a]);return(0,i.jsxs)(g.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,i.jsx)(h.X2,{width:"full",justifyContent:"space-between"}),(0,i.jsxs)(h.sg,{marginTop:"8",children:[(0,i.jsxs)(h.X2,{justifyContent:"space-between",className:`${Z} ${V}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:s,onMouseLeave:s,children:[(0,i.jsx)(g.n,{"data-testid":"nft-collection-filter-buy-now",className:x.v4,children:"Buy now"}),(0,i.jsx)(ee.X,{hovered:r,checked:t,onClick:l,children:(0,i.jsx)("span",{})})]}),Xt.tq&&(0,i.jsx)(ce,{sortDropDownOptions:d}),(0,i.jsx)(se,{}),(0,i.jsx)(Ut,{}),Object.entries(e).length>0&&(0,i.jsx)(g.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,i.jsx)(h.sg,{children:Object.entries(e).map((([e,t],n)=>(0,i.jsx)(Gt,{type:e,traits:t,index:n+B.TRAIT_START_INDEX},e)))})]})]})};var Jt=n(40976);const Qt=(0,C.default)(r.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-e3ffcf95-0"})`
  ${Jt.bc}
`,en=(0,C.default)(r.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__StyledColumn",componentId:"sc-e3ffcf95-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${u.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${u.zD+16}px)`:"100%"};
  }
`,tn=(0,C.default)(l.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__StyledRow",componentId:"sc-e3ffcf95-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,nn=()=>{const e=(0,f.cP)((e=>e.bagExpanded)),t=(0,p.dD)();return(0,i.jsxs)(en,{isBagExpanded:e,children:[(0,i.jsx)(jn,{children:(0,i.jsx)(hn,{})}),(0,i.jsxs)(Qt,{children:[(0,i.jsx)(Mt,{isMobile:t}),(0,i.jsx)(tn,{children:I})]}),(0,i.jsx)(dt,{})]})};var an=n(32207),on=n(57221);const rn=(0,C.default)(r.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\UnavailableCollectionPage__Container",componentId:"sc-e20f133d-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,sn=(0,C.default)(Q.dL).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\collection\\UnavailableCollectionPage__StyledExternalLink",componentId:"sc-e20f133d-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function ln({isBlocked:e}){const t=(0,C.useTheme)();return e?(0,i.jsxs)(rn,{children:[(0,i.jsx)(on.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,i.jsx)(Q.Tv.HeadlineMedium,{children:(0,i.jsx)(m.cC,{children:"This collection is blocked"})}),(0,i.jsx)(Q.m_,{to:"/nfts",children:(0,i.jsx)(m.cC,{children:"Return to NFT Explore"})}),(0,i.jsx)(sn,{href:an.c.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,i.jsx)(m.cC,{children:"Learn why"})})]}):(0,i.jsxs)(rn,{children:[(0,i.jsx)(Q.Tv.HeadlineMedium,{children:(0,i.jsx)(m.cC,{children:"No collection assets exist at this address"})}),(0,i.jsx)(Q.m_,{to:"/nfts",children:(0,i.jsx)(m.cC,{children:"Return to NFT Explore"})})]})}var dn=n(37018),cn=n(437),pn=n(76907),mn=n(55874),un=n(62587);const gn={},hn=(0,C.default)(d.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionBannerLoading",componentId:"sc-7a210954-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,xn=(0,C.default)(r.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionContainer",componentId:"sc-7a210954-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,fn=(0,pn.q)(xn),wn=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionAssetsContainer",componentId:"sc-7a210954-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,vn=(0,pn.q)(wn),jn=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__BannerWrapper",componentId:"sc-7a210954-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,bn=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__Banner",componentId:"sc-7a210954-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,yn=(0,C.default)(r.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionDescriptionSection",componentId:"sc-7a210954-5"})`
  ${Jt.bc}
`,Cn=C.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__FiltersContainer",componentId:"sc-7a210954-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${un.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,_n=(0,C.default)(l.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__MobileFilterHeader",componentId:"sc-7a210954-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,kn=(0,C.default)(l.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionDisplaySection",componentId:"sc-7a210954-8"})`
  align-items: flex-start;
  position: relative;
`,Tn=C.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\collection\\index__IconWrapper",componentId:"sc-7a210954-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${s.cR}
`,In=()=>{var e,t,n,r,s,l;const{contractAddress:d}=(0,ke.UO)(),g=(0,p.dD)(),[h,x]=(0,f.wx)(),{pathname:w}=(0,ke.TH)(),j=(0,ke.s0)(),C=w.includes("/activity"),_=(0,f.PY)((e=>e.setMarketCount)),k=(0,f.cP)((e=>e.bagExpanded)),T=(0,f.cP)((e=>e.setBagExpanded)),I=(0,Ie.x)(),S=(0,p.eI)(),{data:z,loading:P}=(0,c.K)(d),{CollectionContainerWidthChange:$}=(0,pn.q_)({CollectionContainerWidthChange:k&&!g?(S.xxxl?u.zD:u.ZI)+16:0,config:{duration:mn.Kd.medium,easing:pn.Z5.easeOutSine}}),{gridWidthOffset:E}=(0,pn.q_)({gridWidthOffset:h&&!g?332:0,config:{duration:mn.Kd.medium,easing:pn.Z5.easeOutSine}}),R=(0,F.useMemo)((()=>({title:z.name+" on Uniswap",image:window.location.origin+"/api/image/nfts/collection/"+d,url:window.location.href,description:z.description})),[z.description,z.name,d]),M=(0,dn.X)(R);if((0,F.useEffect)((()=>{var e,t;const n={};null===(t=z)||void 0===t||null===(e=t.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{n[e]=t})),_(n)}),[null===(e=z)||void 0===e?void 0:e.marketplaceCount,_]),(0,F.useEffect)((()=>{k&&h&&!S.xl&&x(!1)}),[k,h,S,x]),(0,F.useEffect)((()=>{T({bagExpanded:!1,manualClose:!1})}),[]),P)return(0,i.jsx)(nn,{});if(!z.name)return(0,i.jsx)(ln,{});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(cn.Helmet,{children:[(0,i.jsx)("title",{children:(0,m.t)("{{name}} | Explore and buy on Uniswap",{name:z.name})}),M.map(((e,t)=>(0,i.jsx)("meta",{...e},t)))]}),(0,i.jsx)(o.fM,{page:a.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:d,chain_id:I,is_activity_view:C},shouldLogImpression:!0,children:(0,i.jsx)(fn,{style:{width:$.to((e=>`calc(100% - ${e}px)`))},children:d&&!v._P.includes(d)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(jn,{children:(0,i.jsx)(bn,{src:(null===(t=z)||void 0===t?void 0:t.bannerImageUrl)?`${z.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,i.jsxs)(yn,{children:[z&&(0,i.jsx)(Ft,{stats:z,isMobile:g}),(0,i.jsx)("div",{id:"nft-anchor"}),(0,i.jsx)(N,{showActivity:C,toggleActivity:()=>{h&&x(!1),j(C?`/nfts/collection/${d}`:`/nfts/collection/${d}/activity`)}})]}),(0,i.jsxs)(kn,{children:[(0,i.jsx)(Cn,{isMobile:g,isFiltersExpanded:h,children:h&&(0,i.jsxs)(i.Fragment,{children:[g&&(0,i.jsxs)(_n,{children:[(0,i.jsx)(Q.Tv.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(Tn,{onClick:()=>x(!1),children:(0,i.jsx)(H.BW,{})})]}),(0,i.jsx)(qt,{traitsByGroup:(null===(n=z)||void 0===n?void 0:n.traits)??gn})]})}),(0,i.jsx)(vn,{hideUnderneath:g&&(h||k),style:{transform:E.to((e=>`translate(${e}px)`)),width:E.to((e=>`calc(100% - ${e}px)`))},children:C?d&&(0,i.jsx)(y.cS,{contractAddress:d,rarityVerified:(null===(r=z)||void 0===r?void 0:r.rarityVerified)??!1,collectionName:(null===(s=z)||void 0===s?void 0:s.name)??"",chainId:I}):d&&z&&(0,i.jsx)(F.Suspense,{fallback:(0,i.jsx)(dt,{}),children:(0,i.jsx)(pt,{collectionStats:z,contractAddress:d,rarityVerified:null===(l=z)||void 0===l?void 0:l.rarityVerified})})})]})]}):(0,i.jsx)(ln,{isBlocked:!0})})}),(0,i.jsx)(b,{})]})}}}]);
//# sourceMappingURL=7663.d7d034ab.chunk.js.map