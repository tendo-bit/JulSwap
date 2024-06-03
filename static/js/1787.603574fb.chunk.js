"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1787],{27279:(e,t,n)=>{n.d(t,{r:()=>s});var i,o,r,a=n(45779);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}function l(e,t){let{title:n,titleId:l,...s}=e;return a.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},s),n?a.createElement("title",{id:l},n):null,i||(i=a.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=a.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=a.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const s=a.forwardRef(l);n.p},17889:(e,t,n)=>{n.d(t,{q:()=>i,v:()=>v});var i,o=n(92936),r=n(45779),a=n(43454),d=n(14411),l=n(54972),s=n(27279),c=n(30520),p=n(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(i||(i={}));const u=(0,d.default)(s.r).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__StyledMenuIcon",componentId:"sc-6640503f-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,m=d.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__StyledMenu",componentId:"sc-6640503f-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,x=d.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__MenuFlyout",componentId:"sc-6640503f-2"})`
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

  ${({flyoutAlignment:e=i.RIGHT})=>e===i.RIGHT?d.css`
          right: 0rem;
        `:d.css`
          left: 0rem;
        `};
`,h=(0,d.default)(l.dL).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__MenuItem",componentId:"sc-6640503f-3"})`
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
`,f=(0,d.default)(a.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__InternalMenuItem",componentId:"sc-6640503f-4"})`
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
`,g=(0,d.default)(h).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Menu\\index__ExternalMenuItem",componentId:"sc-6640503f-5"})`
  width: max-content;
  text-decoration: none;
`,v=({modal:e,flyoutAlignment:t=i.RIGHT,ToggleUI:n,menuItems:a,...d})=>{const l=(0,r.useRef)(),s=(0,p.Wt)(e),h=(0,p.xk)(e);(0,c.t)(l,s?h:void 0);const v=n||u;return(0,o.jsxs)(m,{ref:l,...d,children:[(0,o.jsx)(v,{onClick:h}),s&&(0,o.jsx)(x,{flyoutAlignment:t,onClick:h,children:a.map((({content:e,link:t,external:n},i)=>n?(0,o.jsx)(g,{href:t,children:e},i):(0,o.jsx)(f,{to:t,children:e},i)))})]})}},75512:(e,t,n)=>{n.d(t,{p:()=>j});var i=n(92936),o=n(69780);const r=e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var a=n(17889),d=n(6823),l=n(86082),s=n(1356),c=n(29021),p=n(14411),u=n(54972),m=n(99582);const x=p.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\shared__PoolVersionItem",componentId:"sc-6b54c76f-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,h=(0,p.default)(o.Ux).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\shared__PoolOptionsButton",componentId:"sc-6b54c76f-1"})`
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

  ${({$isOpen:e})=>e&&p.css`
      background-color: ${({theme:e})=>e.surface1};
      border: ${({theme:e})=>`1.5px solid ${e.neutral3}`};
    `}
`,f=(0,p.default)(l.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\shared__StyledChevron",componentId:"sc-6b54c76f-2"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,g={[m.Qeo.V3]:{content:(0,i.jsxs)(x,{children:[(0,i.jsx)(r,{width:"20px",height:"20px"}),(0,i.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(d.cC,{children:"v3 pools"})})]}),link:"/pool",external:!1},[m.Qeo.V2]:{content:(0,i.jsxs)(x,{children:[(0,i.jsx)(r,{width:"20px",height:"20px"}),(0,i.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(d.cC,{children:"v2 pools"})})]}),link:"/pools/v2",external:!1}},v={[m.Qeo.V3]:d.t`v3`,[m.Qeo.V2]:d.t`v2`};function j({protocolVersion:e}){const t=(0,s.Wt)(c.Lk.POOL_VERSION);return(0,i.jsx)(a.v,{modal:c.Lk.POOL_VERSION,menuItems:[g[e===m.Qeo.V3?m.Qeo.V2:m.Qeo.V3]],flyoutAlignment:a.q.LEFT,ToggleUI:n=>(0,i.jsxs)(h,{...n,$isOpen:t,children:[(0,i.jsx)(u.Tv.BodyPrimary,{color:"neutral2",children:v[e]}),(0,i.jsx)(f,{$isOpen:t})]})})}},91787:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var i=n(92936),o=n(5985),r=n(26729),a=n(47583),d=n(26073),l=n(81069),s=n(6823),c=n(61592),p=n.n(c),u=n(75512),m=n(45779),x=n(74928),h=n(43454),f=n(22953),g=n(14411),v=n(54972),j=n(99582),w=n(69780),y=n(61182),C=n(44591),b=n(52223),k=n(94284),_=n(10672),I=n(82731),A=n(56536),T=n(13820),R=n(41047),M=n(73720),P=n(51371),D=n(4570),B=n(76078),L=n(12972),N=n(8545),$=n(84938),q=n(64370);const E=new P.vU(D.Mt),V={1:[{tokens:[q.Fl[B.ChainId.MAINNET],q.h1],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[q.Fl[B.ChainId.MAINNET],q.Hz],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[q.Fl[B.ChainId.MAINNET],q.AA],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[q.Fl[B.ChainId.MAINNET],q.ML],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var O=n(28098);const F=(0,g.default)(C.Tz).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\v2__PageWrapper",componentId:"sc-31fafcc5-0"})`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,H=(0,g.default)(I.I8).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\v2__LPFeeExplainer",componentId:"sc-31fafcc5-1"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,S=(0,g.default)(k.DA).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\v2__ButtonRow",componentId:"sc-31fafcc5-2"})`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,W=(0,g.default)(w.DF).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\v2__ResponsiveButtonPrimary",componentId:"sc-31fafcc5-3"})`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,Z=(0,g.default)(w.PL).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\v2__ResponsiveButtonSecondary",componentId:"sc-31fafcc5-4"})`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,z=g.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\v2__EmptyProposals",componentId:"sc-31fafcc5-5"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,U=(0,g.default)(v.Tv.H1Small).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\pages\\Pool\\v2__Header",componentId:"sc-31fafcc5-6"})`
  margin-top: 8px;
  justify-self: flex-start;
  font-weight: 535;
`;function G(){var e,t,n,c,P,D;const G=(0,g.useTheme)(),{account:Q}=(0,r.G)(),Y=(0,l.G)();let J=(0,O.B3)();Y||(J=[]);const K=(0,m.useMemo)((()=>J.map((e=>({liquidityToken:(0,O.Ce)(e),tokens:e})))),[J]),X=(0,m.useMemo)((()=>K.map((e=>e.liquidityToken))),[K]),[ee,te]=(0,M.v2)(Q??void 0,X),ne=(0,m.useMemo)((()=>K.filter((({liquidityToken:e})=>{var t;return null===(t=ee[e.address])||void 0===t?void 0:t.greaterThan("0")}))),[K,ee]),ie=(0,R.OY)(ne.map((({tokens:e})=>e))),oe=te||(null===(e=ie)||void 0===e?void 0:e.length)<ne.length||(null===(t=ie)||void 0===t?void 0:t.some((e=>!e))),re=ie.map((([,e])=>e)).filter((e=>Boolean(e))),ae=function(e){const{chainId:t,account:n}=(0,r.G)(),i=(0,N.Z)($.DB),o=(0,m.useMemo)((()=>{var n;return t?(null===(n=V[t])||void 0===n?void 0:n.filter((t=>void 0===e||null!==e&&e.involvesToken(t.tokens[0])&&e.involvesToken(t.tokens[1]))))??[]:[]}),[t,e]),a=t?q.yg[t]:void 0,d=(0,m.useMemo)((()=>o.map((({stakingRewardAddress:e})=>e))),[o]),l=(0,m.useMemo)((()=>[n??void 0]),[n]),s=(0,$._Y)(d,E,"balanceOf",l),c=(0,$._Y)(d,E,"earned",l),u=(0,$._Y)(d,E,"totalSupply"),x=(0,$._Y)(d,E,"rewardRate",void 0,$.DB),h=(0,$._Y)(d,E,"periodFinish",void 0,$.DB);return(0,m.useMemo)((()=>t&&a?d.reduce(((e,t,n)=>{var r,d;const l=s[n],m=c[n],f=u[n],g=x[n],v=h[n];if(!(null===(r=l)||void 0===r?void 0:r.loading)&&!(null===(d=m)||void 0===d?void 0:d.loading)&&f&&!f.loading&&g&&!g.loading&&v&&!v.loading){var j,w,y,C,b,k,_,I,A,T;if((null===(j=l)||void 0===j?void 0:j.error)||(null===(w=m)||void 0===w?void 0:w.error)||f.error||g.error||v.error)return console.error("Failed to load staking rewards info"),e;const r=o[n].tokens,d=new L.Pair(B.CurrencyAmount.fromRawAmount(r[0],"0"),B.CurrencyAmount.fromRawAmount(r[1],"0")),s=B.CurrencyAmount.fromRawAmount(d.liquidityToken,p().BigInt((null===(C=l)||void 0===C||null===(y=C.result)||void 0===y?void 0:y[0])??0)),c=B.CurrencyAmount.fromRawAmount(d.liquidityToken,p().BigInt(null===(b=f.result)||void 0===b?void 0:b[0])),u=B.CurrencyAmount.fromRawAmount(a,p().BigInt(null===(k=g.result)||void 0===k?void 0:k[0])),x=(e,t,n)=>B.CurrencyAmount.fromRawAmount(a,p().greaterThan(t.quotient,p().BigInt(0))?p().divide(p().multiply(n.quotient,e.quotient),t.quotient):p().BigInt(0)),h=x(s,c,u),R=null===(I=v.result)||void 0===I||null===(_=I[0])||void 0===_?void 0:_.toNumber(),M=1e3*R,P=!R||!i||R>i.toNumber();e.push({stakingRewardAddress:t,tokens:o[n].tokens,periodFinish:M>0?new Date(M):void 0,earnedAmount:B.CurrencyAmount.fromRawAmount(a,p().BigInt((null===(T=m)||void 0===T||null===(A=T.result)||void 0===A?void 0:A[0])??0)),rewardRate:h,totalRewardRate:u,stakedAmount:s,totalStakedAmount:c,getHypotheticalRewardRate:x,active:P})}return e}),[]):[]),[s,t,i,c,o,h,x,d,u,a])}(),de=null===(n=ae)||void 0===n?void 0:n.filter((e=>p().greaterThan(e.stakedAmount.quotient,T.iV))),le=(0,R.OY)(null===(c=de)||void 0===c?void 0:c.map((e=>e.tokens))),se=re.filter((e=>{var t;return 0===(null===(t=le)||void 0===t?void 0:t.map((e=>e[1])).filter((t=>{var n;return(null===(n=t)||void 0===n?void 0:n.liquidityToken.address)===e.liquidityToken.address})).length)}));return(0,i.jsx)(a.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(F,{children:[(0,i.jsxs)(H,{children:[(0,i.jsx)(I.sq,{}),(0,i.jsx)(I.RF,{}),(0,i.jsx)(I.uO,{children:(0,i.jsxs)(C.Tz,{gap:"md",children:[(0,i.jsx)(k.m0,{children:(0,i.jsx)(v.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(s.cC,{children:"Liquidity provider rewards"})})}),(0,i.jsx)(k.m0,{children:(0,i.jsx)(v.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(s.cC,{children:"Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."})})}),(0,i.jsx)(v.dL,{style:{color:G.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,i.jsx)(v.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(s.cC,{children:"Read more about providing liquidity"})})})]})}),(0,i.jsx)(I.sq,{}),(0,i.jsx)(I.RF,{})]}),Y?(0,i.jsx)(C.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(C.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(k.ZP,{gap:"md",justify:"space-between",style:{marginTop:"1rem"},padding:"0",children:[(0,i.jsxs)(k.ZP,{gap:"md",width:"content",children:[(0,i.jsx)(v.Pw,{children:(0,i.jsx)(U,{children:(0,i.jsx)(s.cC,{children:"Your V2 liquidity"})})}),(0,i.jsx)(u.p,{protocolVersion:j.Qeo.V2})]}),(0,i.jsxs)(S,{children:[(0,i.jsx)(Z,{as:h.rU,padding:"6px 8px",to:"/add/v2/ETH",children:(0,i.jsx)(s.cC,{children:"Create a pair"})}),(0,i.jsx)(W,{id:"find-pool-button",as:h.rU,to:"/pools/v2/find",padding:"6px 8px",children:(0,i.jsx)(f.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(s.cC,{children:"Import pool"})})}),(0,i.jsx)(W,{id:"join-pool-button",as:h.rU,to:"/add/v2/ETH",padding:"6px 8px",children:(0,i.jsx)(f.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(s.cC,{children:"Add V2 liquidity"})})})]})]}),Q?oe?(0,i.jsx)(z,{children:(0,i.jsx)(v.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(A.bb,{children:(0,i.jsx)(s.cC,{children:"Loading"})})})}):(null===(P=re)||void 0===P?void 0:P.length)>0||(null===(D=le)||void 0===D?void 0:D.length)>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w.PL,{children:(0,i.jsx)(k.m0,{children:(0,i.jsxs)(s.cC,{children:[(0,i.jsx)(v.dL,{href:"https://v2.info.uniswap.org/account/"+Q,children:"Account analytics and accrued fees"}),(0,i.jsx)("span",{children:" \u2197 "})]})})}),se.map((e=>(0,i.jsx)(b.ZP,{pair:e},e.liquidityToken.address))),le.map(((e,t)=>e[1]&&(0,i.jsx)(b.ZP,{pair:e[1],stakedBalance:de[t].stakedAmount},de[t].stakingRewardAddress))),(0,i.jsx)(k.DA,{justify:"center",style:{width:"100%"},children:(0,i.jsxs)(w.JU,{as:h.rU,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,i.jsx)(x.Z,{size:16,style:{marginRight:"8px"}}),(0,i.jsx)(s.cC,{children:"Migrate liquidity to V3"})]})})]}):(0,i.jsx)(z,{children:(0,i.jsx)(v.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(s.cC,{children:"No liquidity found."})})}):(0,i.jsx)(y.ZP,{padding:"40px",children:(0,i.jsx)(v.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(s.cC,{children:"Connect to a wallet to view your liquidity."})})})]})}):(0,i.jsx)(d.A,{})]}),(0,i.jsx)(_.c,{})]})})}}}]);
//# sourceMappingURL=1787.603574fb.chunk.js.map