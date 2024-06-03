"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[688,5347],{13310:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(45779),o=n(68090),r=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,l=void 0===r?24:r,d=s(e,["color","size"]);return i.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));l.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},l.displayName="Inbox";const d=l},27279:(e,t,n)=>{n.d(t,{r:()=>d});var i,o,r,a=n(45779);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function l(e,t){let{title:n,titleId:l,...d}=e;return a.createElement("svg",s({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},d),n?a.createElement("title",{id:l},n):null,i||(i=a.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=a.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=a.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const d=a.forwardRef(l);n.p},17889:(e,t,n)=>{n.d(t,{q:()=>i,v:()=>j});var i,o=n(92936),r=n(45779),a=n(43454),s=n(14411),l=n(54972),d=n(27279),p=n(30520),c=n(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(i||(i={}));const m=(0,s.default)(d.r).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__StyledMenuIcon",componentId:"sc-6640503f-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,x=s.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__StyledMenu",componentId:"sc-6640503f-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,u=s.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__MenuFlyout",componentId:"sc-6640503f-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=i.RIGHT})=>e===i.RIGHT?s.css`
          right: 0rem;
        `:s.css`
          left: 0rem;
        `};
`,h=(0,s.default)(l.dL).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__MenuItem",componentId:"sc-6640503f-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,f=(0,s.default)(a.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__InternalMenuItem",componentId:"sc-6640503f-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,g=(0,s.default)(h).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__ExternalMenuItem",componentId:"sc-6640503f-5"})`
  width: max-content;
  text-decoration: none;
`,j=({modal:e,flyoutAlignment:t=i.RIGHT,ToggleUI:n,menuItems:a,...s})=>{const l=(0,r.useRef)(),d=(0,c.Wt)(e),h=(0,c.xk)(e);(0,p.t)(l,d?h:void 0);const j=n||m;return(0,o.jsxs)(x,{ref:l,...s,children:[(0,o.jsx)(j,{onClick:h}),d&&(0,o.jsx)(u,{flyoutAlignment:t,onClick:h,children:a.map((({content:e,link:t,external:n},i)=>n?(0,o.jsx)(g,{href:t,children:e},i):(0,o.jsx)(f,{to:t,children:e},i)))})]})}},81069:(e,t,n)=>{n.d(t,{G:()=>s});var i=n(57852),o=n(42183),r=n(70559),a=n(590);function s(){const{chainId:e}=(0,a.m)(),t=(0,r.ye)(o.TP.V2Everywhere);return e&&(t&&i.Ep.includes(e)||i.$6.includes(e))}},74220:(e,t,n)=>{n.r(t),n.d(t,{default:()=>je});var i=n(92936),o=n(5985),r=n(26729),a=n(47583),s=n(25320),l=n(69780),d=n(44591),p=n(17889),c=n(90652),m=n(6823),x=n(45779),u=n(14411),h=n(66869);const f=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionList\\index__DesktopHeader",componentId:"sc-14f71bf4-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${h.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,g=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionList\\index__MobileHeader",componentId:"sc-14f71bf4-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${h.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${h.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,j=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionList\\index__ToggleWrap",componentId:"sc-14f71bf4-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,w=u.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\PositionList\\index__ToggleLabel",componentId:"sc-14f71bf4-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function b({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(f,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(m.cC,{children:"Your positions"}),e&&" ("+e.length+")"]}),(0,i.jsx)(w,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,i.jsx)(m.cC,{children:"Show closed positions"}):(0,i.jsx)(m.cC,{children:"Hide closed positions"})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(m.cC,{children:"Your positions"}),(0,i.jsx)(j,{children:(0,i.jsx)(w,{onClick:()=>{t(!n)},children:n?(0,i.jsx)(m.cC,{children:"Show closed positions"}):(0,i.jsx)(m.cC,{children:"Hide closed positions"})})})]}),e.map((e=>(0,i.jsx)(c.Z,{...e},e.tokenId.toString())))]})}var y=n(94284),v=n(10672),C=n(57852),_=n(30112),k=n(81069),T=n(40413),I=n(75512),P=n(57221),O=n(13310),$=n(74928),L=n(68090),N=n.n(L);function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},D.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M=(0,x.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,a=E(e,["color","size"]);return x.createElement("svg",D({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),x.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),x.createElement("polyline",{points:"2 17 12 22 22 17"}),x.createElement("polyline",{points:"2 12 12 17 22 12"}))}));M.propTypes={color:N().string,size:N().oneOfType([N().string,N().number])},M.displayName="Layers";const z=M;function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},H.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=(0,x.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,a=B(e,["color","size"]);return x.createElement("svg",H({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),x.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),x.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));S.propTypes={color:N().string,size:N().oneOfType([N().string,N().number])},S.displayName="BookOpen";const V=S;var W=n(86082),A=n(43454),R=n(29021),Z=n(28098),U=n(54972),q=n(99582),F=n(76078),G=n(72993);const Q=u.default.section.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\CTACards__CTASection",componentId:"sc-367748bb-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,J=u.css`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};
  text-decoration: none;

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    * {
      text-decoration: none !important;
    }
  }
`,Y=(0,u.default)(U.dL).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\CTACards__CTAExternalLink",componentId:"sc-367748bb-1"})`
  ${J}
`,K=(0,u.default)(U.m_).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\CTACards__CTALink",componentId:"sc-367748bb-2"})`
  ${J}
`,X=(0,u.default)(U.Tv.DeprecatedLabel).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\CTACards__HeaderText",componentId:"sc-367748bb-3"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,ee=(0,u.default)(d.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\CTACards__ResponsiveColumn",componentId:"sc-367748bb-4"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function te(){const e=(0,G.x)(),t=C.T_[(0,C.Jw)(e)??F.ChainId.MAINNET];return(0,i.jsxs)(Q,{children:[(0,i.jsx)(Y,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,i.jsxs)(ee,{children:[(0,i.jsxs)(X,{children:[(0,i.jsx)(m.cC,{children:"Learn about providing liquidity"})," \u2197"]}),(0,i.jsx)(U.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,i.jsx)(m.cC,{children:"Check out our v3 LP walkthrough and migration guides."})})]})}),(0,i.jsx)(K,{"data-testid":"cta-poolslink",to:`/explore/pools/${t.urlParam}`,children:(0,i.jsxs)(ee,{children:[(0,i.jsxs)(X,{style:{alignSelf:"flex-start"},children:[(0,i.jsx)(m.cC,{children:"Top pools"})," \u2197"]}),(0,i.jsx)(U.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,i.jsx)(m.cC,{children:"Explore Uniswap Analytics."})})]})})]})}var ne=n(40926);const ie=(0,u.default)(d.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__PageWrapper",componentId:"sc-1cfc2685-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,oe=(0,u.default)(y.m0).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__TitleRow",componentId:"sc-1cfc2685-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,re=(0,u.default)(y.DA).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__ButtonRow",componentId:"sc-1cfc2685-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,ae=(0,u.default)(p.v).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__PoolMenu",componentId:"sc-1cfc2685-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,se=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__PoolMenuItem",componentId:"sc-1cfc2685-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,le=(0,u.default)(l.Ux).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__MoreOptionsButton",componentId:"sc-1cfc2685-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,de=(0,u.default)(U.Tv.BodyPrimary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__MoreOptionsText",componentId:"sc-1cfc2685-6"})`
  align-items: center;
  display: flex;
`,pe=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__ErrorContainer",componentId:"sc-1cfc2685-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,ce=u.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,me=(0,u.default)(P.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__NetworkIcon",componentId:"sc-1cfc2685-8"})`
  ${ce}
`,xe=(0,u.default)(O.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__InboxIcon",componentId:"sc-1cfc2685-9"})`
  ${ce}
`,ue=(0,u.default)(l.DF).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__ResponsiveButtonPrimary",componentId:"sc-1cfc2685-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,he=u.default.main.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\index__MainContentWrapper",componentId:"sc-1cfc2685-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function fe(){return(0,i.jsxs)(ne.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})}function ge(){const e=(0,u.useTheme)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ie,{children:(0,i.jsx)(d.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(d.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsx)(oe,{padding:"0",children:(0,i.jsx)(U.Tv.H1Large,{children:(0,i.jsx)(m.cC,{children:"Positions"})})}),(0,i.jsx)(he,{children:(0,i.jsx)(pe,{children:(0,i.jsxs)(U.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,i.jsx)(me,{strokeWidth:1.2}),(0,i.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,i.jsx)(m.cC,{children:"Your connected network is unsupported."})})]})})})]})})}),(0,i.jsx)(v.c,{})]})}function je(){var e;const{account:t,chainId:n}=(0,r.G)(),c=(0,C.Nb)(n),h=(0,k.G)(),f=(0,s.LK)(),g=(0,u.useTheme)(),[j,w]=(0,Z.QP)(),{positions:P,loading:O}=(0,T.W)(t),[L,N]=(null===(e=P)||void 0===e?void 0:e.reduce(((e,t)=>{var n;return e[(null===(n=t.liquidity)||void 0===n?void 0:n.isZero())?1:0].push(t),e}),[[],[]]))??[[],[]],D=(0,x.useMemo)((()=>[...L,...j?[]:N]),[N,L,j]),E=(0,_.J)(D);if(!c)return(0,i.jsx)(ge,{});const M=Boolean(!t),H=[{content:(0,i.jsxs)(se,{children:[(0,i.jsx)(m.cC,{children:"Migrate"}),(0,i.jsx)($.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,i.jsxs)(se,{children:[(0,i.jsx)(m.cC,{children:"V2 liquidity"}),(0,i.jsx)(z,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,i.jsxs)(se,{children:[(0,i.jsx)(m.cC,{children:"Learn"}),(0,i.jsx)(V,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,i.jsxs)(a.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,i.jsx)(ie,{children:(0,i.jsx)(d.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(d.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsxs)(oe,{padding:"0",children:[(0,i.jsxs)(y.ZP,{gap:"md",width:"min-content",children:[(0,i.jsx)(U.Tv.LargeHeader,{children:(0,i.jsx)(m.cC,{children:"Positions"})}),(0,i.jsx)(I.p,{protocolVersion:q.Qeo.V3})]}),(0,i.jsxs)(re,{children:[h&&(0,i.jsx)(ae,{modal:R.Lk.POOL_OVERVIEW_OPTIONS,menuItems:H,flyoutAlignment:p.q.LEFT,ToggleUI:e=>(0,i.jsx)(le,{...e,children:(0,i.jsxs)(de,{children:[(0,i.jsx)(m.cC,{children:"More"}),(0,i.jsx)(W.Z,{size:15})]})})}),(0,i.jsxs)(ue,{"data-cy":"join-pool-button",id:"join-pool-button",as:A.rU,to:"/add/ETH",children:["+ ",(0,i.jsx)(m.cC,{children:"New position"})]})]})]}),(0,i.jsx)(he,{children:O?(0,i.jsx)(fe,{}):E&&N&&E.length>0?(0,i.jsx)(b,{positions:E,setUserHideClosedPositions:w,userHideClosedPositions:j}):(0,i.jsxs)(pe,{children:[(0,i.jsxs)(U.Tv.BodyPrimary,{color:g.neutral3,textAlign:"center",children:[(0,i.jsx)(xe,{strokeWidth:1,style:{marginTop:"2em"}}),(0,i.jsx)("div",{children:(0,i.jsx)(m.cC,{children:"Your active V3 liquidity positions will appear here."})})]}),!M&&N.length>0&&(0,i.jsx)(l.oD,{style:{marginTop:".5rem"},onClick:()=>w(!j),children:(0,i.jsx)(m.cC,{children:"Show closed positions"})}),M&&(0,i.jsx)(a.M8,{events:[o.TM.onClick],name:o.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:o.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(l.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:f,children:(0,i.jsx)(m.cC,{children:"Connect a wallet"})})})]})}),(0,i.jsx)(U.Pw,{children:(0,i.jsx)(te,{})})]})})}),(0,i.jsx)(v.c,{})]})}},75512:(e,t,n)=>{n.d(t,{p:()=>w});var i=n(92936),o=n(69780);const r=e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var a=n(17889),s=n(6823),l=n(86082),d=n(1356),p=n(29021),c=n(14411),m=n(54972),x=n(99582);const u=c.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\shared__PoolVersionItem",componentId:"sc-6b54c76f-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,h=(0,c.default)(o.Ux).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\shared__PoolOptionsButton",componentId:"sc-6b54c76f-1"})`
  flex: 1 1 auto;
  padding: 6px 8px 6px 12px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  border-radius: 8px;
  gap: 6px;

  &:hover {
    background-color: ${({theme:e,$isOpen:t})=>t?e.surface1:e.surface3};
    opacity: 0.9;
  }

  ${({$isOpen:e})=>e&&c.css`
      background-color: ${({theme:e})=>e.surface1};
      border: ${({theme:e})=>`1.5px solid ${e.neutral3}`};
    `}
`,f=(0,c.default)(l.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\shared__StyledChevron",componentId:"sc-6b54c76f-2"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,g={[x.Qeo.V3]:{content:(0,i.jsxs)(u,{children:[(0,i.jsx)(r,{width:"20px",height:"20px"}),(0,i.jsx)(m.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(s.cC,{children:"v3 pools"})})]}),link:"/pool",external:!1},[x.Qeo.V2]:{content:(0,i.jsxs)(u,{children:[(0,i.jsx)(r,{width:"20px",height:"20px"}),(0,i.jsx)(m.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(s.cC,{children:"v2 pools"})})]}),link:"/pools/v2",external:!1}},j={[x.Qeo.V3]:s.t`v3`,[x.Qeo.V2]:s.t`v2`};function w({protocolVersion:e}){const t=(0,d.Wt)(p.Lk.POOL_VERSION);return(0,i.jsx)(a.v,{modal:p.Lk.POOL_VERSION,menuItems:[g[e===x.Qeo.V3?x.Qeo.V2:x.Qeo.V3]],flyoutAlignment:a.q.LEFT,ToggleUI:n=>(0,i.jsxs)(h,{...n,$isOpen:t,children:[(0,i.jsx)(m.Tv.BodyPrimary,{color:"neutral2",children:j[e]}),(0,i.jsx)(f,{$isOpen:t})]})})}},40926:(e,t,n)=>{n.d(t,{DC:()=>s,ER:()=>l,bb:()=>d,im:()=>a,pr:()=>p});var i=n(32546),o=n(22953),r=n(14411);const a=r.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,s=(0,r.default)(o.xv).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,l=r.default.button.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,d=r.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,p=(0,r.default)(i.pr).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},5347:(e,t,n)=>{n.d(t,{B:()=>o});var i=n(64370);function o(e){var t;return e.isNative?e:(null===(t=i.Fl[e.chainId])||void 0===t?void 0:t.equals(e))?(0,i.gX)(e.chainId):e}}}]);
//# sourceMappingURL=688.029f4a1f.chunk.js.map