"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2612],{13901:(e,n,l)=>{l.d(n,{K:()=>o});var a=l(45779),i=l(99582);function t(e,n){var l,a,i,t,o,r,s,d,c,p,m,u,x,h,f,g,v,b,w,j,C,y,_,k,T,N,$,I,S,D,H,z,P,F,E,V,B,X,L,M,O;const G=null===(a=e)||void 0===a||null===(l=a.markets)||void 0===l?void 0:l[0];if(!n&&!(null===(o=e)||void 0===o||null===(t=o.nftContracts)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.address))return{};const R={};var A;(null===(r=e)||void 0===r?void 0:r.traits)&&(null===(A=e)||void 0===A||A.traits.forEach((e=>{e.name&&e.stats&&(R[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:n??(null===(c=e)||void 0===c||null===(d=c.nftContracts)||void 0===d||null===(s=d[0])||void 0===s?void 0:s.address)??"",isVerified:null===(p=e)||void 0===p?void 0:p.isVerified,name:null===(m=e)||void 0===m?void 0:m.name,description:null===(u=e)||void 0===u?void 0:u.description,standard:null===(f=e)||void 0===f||null===(h=f.nftContracts)||void 0===h||null===(x=h[0])||void 0===x?void 0:x.standard,bannerImageUrl:null===(v=e)||void 0===v||null===(g=v.bannerImage)||void 0===g?void 0:g.url,stats:{num_owners:null===(b=G)||void 0===b?void 0:b.owners,floor_price:null===(j=G)||void 0===j||null===(w=j.floorPrice)||void 0===w?void 0:w.value,one_day_volume:null===(y=G)||void 0===y||null===(C=y.volume)||void 0===C?void 0:C.value,one_day_change:null===(k=G)||void 0===k||null===(_=k.volumePercentChange)||void 0===_?void 0:_.value,one_day_floor_change:null===(N=G)||void 0===N||null===(T=N.floorPricePercentChange)||void 0===T?void 0:T.value,banner_image_url:null===(I=e)||void 0===I||null===($=I.bannerImage)||void 0===$?void 0:$.url,total_supply:null===(S=e)||void 0===S?void 0:S.numAssets,total_listings:null===(H=G)||void 0===H||null===(D=H.listings)||void 0===D?void 0:D.value,total_volume:null===(P=G)||void 0===P||null===(z=P.totalVolume)||void 0===z?void 0:z.value},traits:R,marketplaceCount:null===(E=G)||void 0===E||null===(F=E.marketplaces)||void 0===F?void 0:F.map((e=>{var n;return{marketplace:(null===(n=e.marketplace)||void 0===n?void 0:n.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(B=e)||void 0===B||null===(V=B.image)||void 0===V?void 0:V.url)??"",twitterUrl:null===(X=e)||void 0===X?void 0:X.twitterName,instagram:null===(L=e)||void 0===L?void 0:L.instagramName,discordUrl:null===(M=e)||void 0===M?void 0:M.discordUrl,externalUrl:null===(O=e)||void 0===O?void 0:O.homepageUrl,rarityVerified:!1}}function o(e,n){var l,o,r,s;const{data:d,loading:c}=(0,i.aG9)({variables:{addresses:e},skip:n}),p=null===(s=d)||void 0===s||null===(r=s.nftCollections)||void 0===r||null===(o=r.edges)||void 0===o||null===(l=o[0])||void 0===l?void 0:l.node;return(0,a.useMemo)((()=>({data:t(p,e),loading:c})),[e,c,p])}},82612:(e,n,l)=>{l.r(n),l.d(n,{default:()=>an});var a=l(92936),i=l(5985),t=l(47583),o=l(45779),r=l(99582);function s(e,n){var l,a;const{data:i,loading:t,error:s}=(0,r.FH2)({variables:{size:e,timePeriod:n}}),d=(0,o.useMemo)((()=>{var e,n,l;return null===(l=i)||void 0===l||null===(n=l.topCollections)||void 0===n||null===(e=n.edges)||void 0===e?void 0:e.map((e=>{var n,l,a,i,t,o,r,s,d,c,p,m,u,x,h,f,g,v,b,w,j,C,y,_,k,T,N,$,I,S,D,H;const z=null===(n=e)||void 0===n?void 0:n.node;return{name:z.name,address:null===(a=z.nftContracts)||void 0===a||null===(l=a[0])||void 0===l?void 0:l.address,imageUrl:null===(i=z.image)||void 0===i?void 0:i.url,bannerImageUrl:null===(t=z.bannerImage)||void 0===t?void 0:t.url,isVerified:z.isVerified,volume:null===(s=z.markets)||void 0===s||null===(r=s[0])||void 0===r||null===(o=r.volume)||void 0===o?void 0:o.value,volumeChange:null===(p=z.markets)||void 0===p||null===(c=p[0])||void 0===c||null===(d=c.volumePercentChange)||void 0===d?void 0:d.value,floor:null===(x=z.markets)||void 0===x||null===(u=x[0])||void 0===u||null===(m=u.floorPrice)||void 0===m?void 0:m.value,floorChange:null===(g=z.markets)||void 0===g||null===(f=g[0])||void 0===f||null===(h=f.floorPricePercentChange)||void 0===h?void 0:h.value,marketCap:null===(w=z.markets)||void 0===w||null===(b=w[0])||void 0===b||null===(v=b.totalVolume)||void 0===v?void 0:v.value,percentListed:((null===(y=z.markets)||void 0===y||null===(C=y[0])||void 0===C||null===(j=C.listings)||void 0===j?void 0:j.value)??0)/((null===(k=z.nftContracts)||void 0===k||null===(_=k[0])||void 0===_?void 0:_.totalSupply)??1),owners:null===(N=z.markets)||void 0===N||null===(T=N[0])||void 0===T?void 0:T.owners,sales:null===(S=z.markets)||void 0===S||null===(I=S[0])||void 0===I||null===($=I.sales)||void 0===$?void 0:$.value,totalSupply:null===(H=z.nftContracts)||void 0===H||null===(D=H[0])||void 0===D?void 0:D.totalSupply}}))}),[null===(a=i)||void 0===a||null===(l=a.topCollections)||void 0===l?void 0:l.edges]);return{data:d,loading:t,error:s}}var d=l(78129),c=l(6282),p=l(14411),m=l(58690),u=l(76907);function x(e,n,l,a,i,t,o){try{var r=e[t](o),s=r.value}catch(d){return void l(d)}r.done?n(s):Promise.resolve(s).then(a,i)}function h(e){return function(){var n=this,l=arguments;return new Promise((function(a,i){var t=e.apply(n,l);function o(e){x(t,a,i,o,r,"next",e)}function r(e){x(t,a,i,o,r,"throw",e)}o(void 0)}))}}const f=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselContainer",componentId:"sc-718aa339-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,g=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselCardContainer",componentId:"sc-718aa339-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,v=(0,p.default)(u.a.div).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselItemCard",componentId:"sc-718aa339-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,b=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselItemIcon",componentId:"sc-718aa339-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,w=800,j=({children:e,activeIndex:n,toggleNextSlide:l})=>{const i=(0,o.useCallback)(((n,l=e.length)=>(0,d.ef)(n,l)),[e]),t=(0,o.useCallback)(((e,n,l)=>(0,d.E)(e,n,l,i)),[i]),[r,s]=(0,u.bY)(e.length,(n=>({x:(n<e.length-1?n:-1)*w}))),c=(0,o.useRef)([0,1]),p=(0,o.useCallback)(((n,l)=>{const a=i(Math.floor(n/w)%e.length),o=l<0?e.length-2:1;s((i=>{const r=t(i,a,o),s=t(i,c.current[0],c.current[1]),p=(0,d.Z1)(a,o,r,e.length,n);return{x:-n%(w*e.length)+w*p,immediate:l<0?s>r:s<r,config:{tension:250,friction:30}}})),c.current=[a,o]}),[i,t,s,e.length]),x=(0,o.useRef)(0);(0,o.useEffect)((()=>{p(n*w,x.current)}),[n,p]);const j=(0,o.useCallback)((e=>{x.current=e,l(e)}),[l]);return(0,o.useEffect)((()=>{const e=setInterval(h((function*(){j(1)})),7e3);return()=>{clearInterval(e)}}),[j,n]),(0,a.jsxs)(f,{children:[(0,a.jsx)(b,{onClick:()=>j(-1),children:(0,a.jsx)(m.wy,{width:"16px",height:"16px"})}),(0,a.jsx)(g,{children:r.map((({x:n},l)=>(0,a.jsx)(v,{style:{x:n},children:e[l]},l)))}),(0,a.jsx)(b,{onClick:()=>j(1),children:(0,a.jsx)(m.XC,{width:"16px",height:"16px"})})]})},C=({children:e})=>(0,a.jsx)(j,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var y=l(32546),_=l(82743),k=l(13901),T=l(47263),N=l(68798),$=l(66136);const I=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CarouselCardBorder",componentId:"sc-a2f657bb-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,S=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardHeaderContainer",componentId:"sc-a2f657bb-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,D=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCardHeaderContainer",componentId:"sc-a2f657bb-2"})`
  position: relative;
  animation: ${y.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,H=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardHeaderColumn",componentId:"sc-a2f657bb-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,z=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__IconContainer",componentId:"sc-a2f657bb-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,P=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionNameContainer",componentId:"sc-a2f657bb-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,F=(0,p.default)(_.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionNameContainer",componentId:"sc-a2f657bb-6"})`
  width: 50%;
`,E=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__HeaderOverlay",componentId:"sc-a2f657bb-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,V=p.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionImage",componentId:"sc-a2f657bb-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,B=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionImage",componentId:"sc-a2f657bb-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${y.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,X=(0,p.default)(_.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingTableElement",componentId:"sc-a2f657bb-10"})`
  width: 50px;
`,L=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__TableElement",componentId:"sc-a2f657bb-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,M=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__FirstColumnTextWrapper",componentId:"sc-a2f657bb-12"})``,O=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardBottomContainer",componentId:"sc-a2f657bb-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,G=p.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__MarketplaceIcon",componentId:"sc-a2f657bb-14"})`
  width: 20px;
  height: 20px;
`,R=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CarouselCardContainer",componentId:"sc-a2f657bb-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${L}:nth-child(3n-1), ${X}:nth-child(3n-1) {
    justify-self: center;
  }

  ${L}:nth-child(3n), ${X}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${M} {
      display: none;
    }
    ${L} {
      justify-self: left !important;
    }
    ${H} {
      padding: 0 20px;
    }
  }
`,A=({marketplace:e,floorInEth:n,listings:l})=>{const{formatNumberOrString:i}=(0,$.Gb)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(L,{children:[(0,a.jsx)(G,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,a.jsx)(M,{children:(0,a.jsx)(N.T.BodySmall,{color:"neutral2",children:e})})]}),(0,a.jsx)(L,{children:(0,a.jsx)(N.T.BodySmall,{color:"neutral2",children:Number(n)>0?`${i({input:n,type:$.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,a.jsx)(L,{children:(0,a.jsx)(N.T.BodySmall,{color:"neutral2",children:Number(l)>0?l:"None"})})]})},U=[T.Fz.Opensea,T.Fz.X2Y2,T.Fz.LooksRare],W={[T.Fz.Opensea]:"OpenSea",[T.Fz.X2Y2]:"X2Y2",[T.Fz.LooksRare]:"LooksRare"},Y=({collection:e,onClick:n})=>{var l;const{data:i,loading:t}=(0,k.K)(e.address??""),{formatNumber:o}=(0,$.Gb)();return t?(0,a.jsx)(J,{}):(0,a.jsx)(I,{children:(0,a.jsxs)(R,{onClick:n,children:[(0,a.jsx)(q,{collection:e}),(0,a.jsx)(O,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(L,{children:[(0,a.jsx)(m.pD,{width:"20",height:"20"}),(0,a.jsx)(M,{children:(0,a.jsx)(N.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,a.jsx)(L,{children:e.floor&&(0,a.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[o({input:e.floor,type:$.sw.NFTToken})," ETH Floor"]})}),(0,a.jsx)(L,{children:(0,a.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(l=i.marketplaceCount)||void 0===l?void 0:l.reduce(((e,n)=>e+n.count),0)," Listings"]})}),U.map((n=>{var l;const t=null===(l=i.marketplaceCount)||void 0===l?void 0:l.find((e=>e.marketplace===n));return t?(0,a.jsx)(A,{marketplace:W[n],listings:t.count,floorInEth:t.floorPrice},`CarouselCard-key-${e.address}-${t.marketplace}`):null}))]})})]})})},K=()=>(0,a.jsx)(a.Fragment,{children:[...Array(12)].map((e=>(0,a.jsx)(X,{},e)))}),Z=(0,p.default)(N.T.MediumHeader).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionName",componentId:"sc-a2f657bb-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,q=({collection:e})=>(0,a.jsxs)(S,{src:e.bannerImageUrl??"",children:[(0,a.jsxs)(H,{children:[(0,a.jsx)(V,{src:e.imageUrl}),(0,a.jsxs)(P,{children:[(0,a.jsx)(Z,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,a.jsx)(z,{children:(0,a.jsx)(m.SA,{width:"24px",height:"24px"})})]})]}),(0,a.jsx)(E,{})]}),J=({collection:e})=>(0,a.jsx)(I,{children:(0,a.jsxs)(R,{children:[e?(0,a.jsx)(q,{collection:e}):(0,a.jsxs)(D,{children:[(0,a.jsxs)(H,{children:[(0,a.jsx)(B,{}),(0,a.jsx)(F,{})]}),(0,a.jsx)(E,{})]}),(0,a.jsx)(O,{children:(0,a.jsx)(K,{})})]})}),Q=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Banner__BannerContainer",componentId:"sc-714be4ba-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,ee=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Banner__BannerMainArea",componentId:"sc-714be4ba-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ne=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Banner__HeaderContainer",componentId:"sc-714be4ba-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,le=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],ae=()=>{const e=(0,c.s0)(),{data:n}=s(5+le.length,r._uu.Day),l=(0,o.useMemo)((()=>{var e;return null===(e=n)||void 0===e?void 0:e.filter((e=>e.address&&!le.includes(e.address))).slice(0,5)}),[n]),[i,t]=(0,o.useState)(0),p=(0,o.useCallback)((e=>{l&&t((n=>(0,d.ef)(n+e,l.length)))}),[l]);return(0,a.jsx)(Q,{children:(0,a.jsxs)(ee,{children:[(0,a.jsxs)(ne,{children:["Better prices. ",(0,a.jsx)("br",{}),"More listings."]}),l?(0,a.jsx)(j,{activeIndex:i,toggleNextSlide:p,children:l.map((n=>(0,a.jsx)(Y,{collection:n,onClick:()=>e(`/nfts/collection/${n.address}`)},n.address)))}):(0,a.jsx)(C,{children:(0,a.jsx)(J,{})})]})})};var ie=l(68588),te=l(79132),oe=l(54972),re=l(66284),se=l(19478),de=l(97341);l(69640),l(49484);const ce=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedText",componentId:"sc-4eb0bc9a-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,pe=(0,p.default)(ce).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__CollectionNameContainer",componentId:"sc-4eb0bc9a-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,me=(0,p.default)(ce).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__CollectionName",componentId:"sc-4eb0bc9a-2"})`
  margin-left: 8px;
`,ue=(0,p.default)(oe.Tv.SubHeader).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeader",componentId:"sc-4eb0bc9a-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,xe=(0,p.default)(oe.Tv.SubHeaderSmall).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeaderSmall",componentId:"sc-4eb0bc9a-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,he=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__RoundedImage",componentId:"sc-4eb0bc9a-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:n})=>e?`url(${e})`:n.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,fe=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__ChangeCellContainer",componentId:"sc-4eb0bc9a-6"})`
  display: flex;
  color: ${({theme:e,change:n})=>n>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ge=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__EthContainer",componentId:"sc-4eb0bc9a-7"})`
  display: flex;
  justify-content: flex-end;
`,ve=({value:e})=>{const n=(0,de.dD)();return(0,a.jsxs)(pe,{children:[(0,a.jsx)(he,{src:e.logo}),(0,a.jsx)(me,{children:n?(0,a.jsx)(xe,{children:e.name}):(0,a.jsx)(ue,{children:e.name})}),e.isVerified&&(0,a.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,a.jsx)(m.SA,{})})]})},be=({value:e})=>{const{formatNumberOrString:n}=(0,$.Gb)();return(0,a.jsx)("span",{children:e.value?n({input:e.value,type:$.sw.NFTCollectionStats}):"-"})},we=(e,n,l,a)=>e===T.VG.ETH?l:a&&l?a*(n?parseFloat((0,re.formatEther)(l)):l):void 0,je=({value:e,denomination:n,usdPrice:l})=>{const{formatNumberOrString:i}=(0,$.Gb)(),t=we(n,!1,e,l),o=n===T.VG.ETH,r=i({input:t,type:o?$.sw.NFTToken:$.sw.FiatTokenStats})+(o?" ETH":""),s=(0,de.dD)()?oe.Tv.BodySmall:oe.Tv.BodyPrimary;return(0,a.jsx)(ge,{children:(0,a.jsx)(s,{children:e?r:"-"})})},Ce=({value:e})=>(0,a.jsx)(oe.Tv.BodyPrimary,{children:e}),ye=({value:e,denomination:n,usdPrice:l})=>{const{formatNumberOrString:i}=(0,$.Gb)(),t=we(n,!1,e,l),o=n===T.VG.ETH,r=i({input:t,type:o?$.sw.WholeNumber:$.sw.FiatTokenStats})+(o?" ETH":"");return(0,a.jsx)(ge,{children:(0,a.jsx)(oe.Tv.BodyPrimary,{children:r})})},_e=({change:e,children:n})=>{const l=(0,de.dD)()?oe.Tv.BodySmall:oe.Tv.BodyPrimary;return(0,a.jsxs)(fe,{change:e??0,children:[(0,a.jsx)(se.Kx,{delta:e}),(0,a.jsx)(l,{color:"currentColor",children:n||`${e?Math.abs(Math.round(e)):0}%`})]})};var ke=l(98643),Te=l(91527),Ne=l(40403),$e=l(72993),Ie=l(95040),Se="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",De="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",He="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",ze="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const Pe=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Table__RankCellContainer",componentId:"sc-d8f49df3-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Fe=p.default.tr.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledRow",componentId:"sc-d8f49df3-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ee=p.default.tr.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledLoadingRow",componentId:"sc-d8f49df3-2"})`
  height: 80px;
`,Ve=p.default.th.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledHeader",componentId:"sc-d8f49df3-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.click};`}
  }
`,Be=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledLoadingHolder",componentId:"sc-d8f49df3-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Xe=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledCollectionNameHolder",componentId:"sc-d8f49df3-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Le=(0,p.default)(_.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledImageHolder",componentId:"sc-d8f49df3-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Me=(0,p.default)(_.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledRankHolder",componentId:"sc-d8f49df3-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Oe=10;function Ge({columns:e,data:n,smallHiddenColumns:l,mediumHiddenColumns:r,largeHiddenColumns:s,...d}){const m=(0,p.useTheme)(),u=(0,$e.x)(),{width:x}=(0,de.iP)(),h=(0,de.dD)(),{getTableProps:f,getTableBodyProps:g,headerGroups:v,rows:b,prepareRow:w,setHiddenColumns:j,visibleColumns:C}=(0,Ne.useTable)({columns:e,data:n,initialState:{sortBy:[{desc:!0,id:Ae.Volume}]},...d},Ne.useSortBy),y=(0,c.s0)();return(0,o.useEffect)((()=>{x&&(x<=m.breakpoint.sm?j(l):x<=m.breakpoint.md?j(r):x<=m.breakpoint.lg?j(s):j([]))}),[x,j,e,l,r,s,m.breakpoint]),0===n.length?(0,a.jsx)(Re,{headerGroups:v,visibleColumns:C,...f()}):(0,a.jsxs)("table",{...f(),className:De,children:[(0,a.jsx)("thead",{className:ze,children:v.map((e=>(0,o.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,o.createElement)(Ve,{className:He,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?h?"16px":"52px":0},disabled:e.disableSortBy,key:n,children:[(0,a.jsx)(Ie.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(Te.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,a.jsx)(ke.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,a.jsx)(Ie.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...g(),children:b.map(((e,n)=>(w(e),(0,a.jsx)(t.M8,{events:[i.TM.onClick],name:i.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:i.xo.NFT_TRENDING_ROW,children:(0,o.createElement)(Fe,{...e.getRowProps(),key:e.id,onClick:()=>y(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,l)=>(0,o.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:l,style:{maxWidth:0===l?h?"240px":"360px":"160px"}},0===l?(0,a.jsxs)(Pe,{children:[!h&&(0,a.jsx)(oe.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell")))))},n))))})]})}function Re({headerGroups:e,visibleColumns:n,...l}){return(0,a.jsxs)("table",{...l,className:De,children:[(0,a.jsx)("thead",{className:ze,children:e.map((e=>(0,o.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,o.createElement)(Ve,{className:He,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n,children:[(0,a.jsx)(Ie.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(Te.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,a.jsx)(ke.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,a.jsx)(Ie.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...l,children:[...Array(Oe)].map(((e,l)=>(0,a.jsx)(Ee,{children:[...Array(n.length)].map(((e,n)=>(0,a.jsx)("td",{className:Se,children:0===n?(0,a.jsxs)(Xe,{children:[(0,a.jsx)(Me,{}),(0,a.jsx)(Le,{}),(0,a.jsx)(_.X,{})]}):(0,a.jsx)(Be,{children:(0,a.jsx)(_.X,{})})},n)))},l)))})]})}var Ae;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Ae||(Ae={}));const Ue=(e,n)=>e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1,We=({data:e,timePeriod:n})=>{const l=(0,o.useMemo)((()=>(e,n)=>Ue(e.original.floor.value,n.original.floor.value)),[]),i=(0,o.useMemo)((()=>(e,n)=>Ue(e.original.floor.change,n.original.floor.change)),[]),t=(0,o.useMemo)((()=>(e,n)=>Ue(e.original.volume.value,n.original.volume.value)),[]),r=(0,o.useMemo)((()=>(e,n)=>Ue(e.original.volume.change,n.original.volume.change)),[]),s=(0,o.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:ve,disableSortBy:!0},{id:Ae.Floor,Header:Ae.Floor,accessor:({floor:e})=>e.value,sortType:l,Cell:function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(je,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==T.XH.AllTime&&(0,a.jsx)(oe.SF,{children:(0,a.jsx)(_e,{change:e.row.original.floor.change})})]})}},{id:Ae.FloorChange,Header:Ae.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:n===T.XH.AllTime,sortType:i,Cell:function(e){return n===T.XH.AllTime?(0,a.jsx)(Ce,{value:"-"}):(0,a.jsx)(_e,{change:e.row.original.floor.change})}},{id:Ae.Volume,Header:Ae.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:t,Cell:function(e){return(0,a.jsx)(ye,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Ae.VolumeChange,Header:Ae.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:n===T.XH.AllTime,sortType:r,Cell:function(e){const{change:l}=e.row.original.volume;return n===T.XH.AllTime?(0,a.jsx)(Ce,{value:"-"}):l&&l>=9999?(0,a.jsxs)(_e,{change:l,children:[">9999","%"]}):(0,a.jsx)(_e,{change:l})}},{id:Ae.Items,Header:Ae.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(be,{value:{value:e.row.original.totalSupply}})}},{Header:Ae.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(be,{value:e.row.original.owners})}}]),[i,l,r,t,n]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Ge,{smallHiddenColumns:[Ae.Items,Ae.FloorChange,Ae.Volume,Ae.VolumeChange,Ae.Owners],mediumHiddenColumns:[Ae.Items,Ae.FloorChange,Ae.VolumeChange,Ae.Owners],largeHiddenColumns:[Ae.Items,Ae.Owners],data:e,columns:s})})},Ye=[{label:"1D",value:T.XH.OneDay},{label:"1W",value:T.XH.SevenDays},{label:"1M",value:T.XH.ThirtyDays},{label:"All",value:T.XH.AllTime}],Ke=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__ExploreContainer",componentId:"sc-56133655-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ze=p.default.h1.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__StyledHeader",componentId:"sc-56133655-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,qe=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__FiltersRow",componentId:"sc-56133655-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Je=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__Filter",componentId:"sc-56133655-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,Qe=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__Selector",componentId:"sc-56133655-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:n})=>e?n.surface3:"none"};
  cursor: pointer;

  ${ie.cR}
`,en=(0,p.default)(oe.Tv.SubHeader).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__StyledSelectorText",componentId:"sc-56133655-5"})`
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
`;const nn=()=>{const{formatterLocalCurrency:e}=(0,$.h2)(),[n,l]=(0,o.useState)(T.XH.OneDay),[i,t]=(0,o.useState)(!0),{data:d,loading:c}=s(100,function(e){switch(e){case T.XH.OneDay:return r._uu.Day;case T.XH.SevenDays:return r._uu.Week;case T.XH.ThirtyDays:return r._uu.Month;case T.XH.AllTime:return r._uu.Max;default:return r._uu.Day}}(n)),p=(0,te.$N)(),m=(0,o.useMemo)((()=>!c&&d?d.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:i?T.VG.ETH:T.VG.USD,usdPrice:p}))):[]),[d,c,i,p]);return(0,a.jsxs)(Ke,{children:[(0,a.jsx)(Ze,{children:"Trending NFT collections"}),(0,a.jsxs)(qe,{children:[(0,a.jsx)(Je,{children:Ye.map((e=>(0,a.jsx)(Qe,{active:e.value===n,onClick:()=>l(e.value),children:(0,a.jsx)(en,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)))}),(0,a.jsxs)(Je,{onClick:()=>t(!i),children:[(0,a.jsx)(Qe,{active:i,children:(0,a.jsx)(en,{lineHeight:"20px",active:i,children:"ETH"})}),(0,a.jsx)(Qe,{active:!i,children:(0,a.jsx)(en,{lineHeight:"20px",active:!i,children:e})})]})]}),(0,a.jsx)(We,{data:m,timePeriod:n})]})},ln=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\explore\\index__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,an=()=>{const e=(0,te.cP)((e=>e.setBagExpanded));return(0,o.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.fM,{page:i.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,a.jsxs)(ln,{children:[(0,a.jsx)(ae,{}),(0,a.jsx)(nn,{})]})})})}}}]);
//# sourceMappingURL=2612.15e75d83.chunk.js.map