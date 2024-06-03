"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7125],{95263:e=>{var t="%[a-f0-9]{2}",n=new RegExp("("+t+")|([^%]+?)","gi"),i=new RegExp("("+t+")+","gi");function a(e,t){try{return[decodeURIComponent(e.join(""))]}catch(s){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),i=e.slice(t);return Array.prototype.concat.call([],a(n),a(i))}function s(e){try{return decodeURIComponent(e)}catch(s){for(var t=e.match(n)||[],i=1;i<t.length;i++)t=(e=a(t,i).join("")).match(n)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=i.exec(e);a;){try{n[a[0]]=decodeURIComponent(a[0])}catch(t){var o=s(a[0]);o!==a[0]&&(n[a[0]]=o)}a=i.exec(e)}n["%C2"]="\ufffd";for(var r=Object.keys(n),l=0;l<r.length;l++){var d=r[l];e=e.replace(new RegExp(d,"g"),n[d])}return e}(e)}}},67937:e=>{e.exports=function(e,t){for(var n={},i=Object.keys(e),a=Array.isArray(t),s=0;s<i.length;s++){var o=i[s],r=e[o];(a?-1!==t.indexOf(o):t(o,r,e))&&(n[o]=r)}return n}},18806:(e,t,n)=>{const i=n(8248),a=n(95263),s=n(13362),o=n(67937),r=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function c(e,t){return t.decode?a(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function m(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function x(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,i)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===i[e]&&(i[e]={}),i[e][t[1]]=n):i[e]=n};case"bracket":return(e,n,i)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==i[e]?i[e]=[].concat(i[e],n):i[e]=[n]:i[e]=n};case"colon-list-separator":return(e,n,i)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==i[e]?i[e]=[].concat(i[e],n):i[e]=[n]:i[e]=n};case"comma":case"separator":return(t,n,i)=>{const a="string"==typeof n&&n.includes(e.arrayFormatSeparator),s="string"==typeof n&&!a&&c(n,e).includes(e.arrayFormatSeparator);n=s?c(n,e):n;const o=a||s?n.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===n?n:c(n,e);i[t]=o};case"bracket-separator":return(t,n,i)=>{const a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!a)return void(i[t]=n?c(n,e):n);const s=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>c(t,e)));void 0!==i[t]?i[t]=[].concat(i[t],s):i[t]=s};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),i=Object.create(null);if("string"!=typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;for(const a of e.split("&")){if(""===a)continue;let[e,o]=s(t.decode?a.replace(/\+/g," "):a,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:c(o,t),n(c(e,t),o,i)}for(const a of Object.keys(i)){const e=i[a];if("object"==typeof e&&null!==e)for(const n of Object.keys(e))e[n]=x(e[n],t);else i[a]=x(e,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce(((e,t)=>{const n=i[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=p(n):e[t]=n,e}),Object.create(null))}t.extract=u,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],i=function(e){switch(e.arrayFormat){case"index":return t=>(n,i)=>{const a=n.length;return void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:null===i?[...n,[d(t,e),"[",a,"]"].join("")]:[...n,[d(t,e),"[",d(a,e),"]=",d(i,e)].join("")]};case"bracket":return t=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:null===i?[...n,[d(t,e),"[]"].join("")]:[...n,[d(t,e),"[]=",d(i,e)].join("")];case"colon-list-separator":return t=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:null===i?[...n,[d(t,e),":list="].join("")]:[...n,[d(t,e),":list=",d(i,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(i,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?i:(a=null===a?"":a,0===i.length?[[d(n,e),t,d(a,e)].join("")]:[[i,d(a,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:null===i?[...n,d(t,e)]:[...n,[d(t,e),"=",d(i,e)].join("")]}}(t),a={};for(const o of Object.keys(e))n(o)||(a[o]=e[o]);const s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map((n=>{const a=e[n];return void 0===a?"":null===a?d(n,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?d(n,t)+"[]":a.reduce(i(n),[]).join("&"):d(n,t)+"="+d(a,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,i]=s(e,"#");return Object.assign({url:n.split("?")[0]||"",query:f(u(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:c(i,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0,[r]:!0},n);const i=m(e.url).split("?")[0]||"",a=t.extract(e.url),s=t.parse(a,{sort:!1}),o=Object.assign(s,e.query);let l=t.stringify(o,n);l&&(l=`?${l}`);let c=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(c=`#${n[r]?d(e.fragmentIdentifier,n):e.fragmentIdentifier}`),`${i}${l}${c}`},t.pick=(e,n,i)=>{i=Object.assign({parseFragmentIdentifier:!0,[r]:!1},i);const{url:a,query:s,fragmentIdentifier:l}=t.parseUrl(e,i);return t.stringifyUrl({url:a,query:o(s,n),fragmentIdentifier:l},i)},t.exclude=(e,n,i)=>{const a=Array.isArray(n)?e=>!n.includes(e):(e,t)=>!n(e,t);return t.pick(e,a,i)}},37525:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(45779),a=n(68090),s=n.n(a);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=(0,i.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,l=void 0===s?24:s,d=r(e,["color","size"]);return i.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("polyline",{points:"18 15 12 9 6 15"}))}));l.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},l.displayName="ChevronUp";const d=l},13362:e=>{e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},8248:e=>{e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},43912:(e,t,n)=>{n.d(t,{m:()=>a});var i=n(92936);const a=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},47699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Bt});var i=n(92936),a=n(5985),s=n(47583),o=n(66284),r=n(78129),l=n(45779),d=n(99582);var c=n(6823),p=n(68588),m=n(36399),u=n(14411),x=n(54972);const f=(0,u.default)(x.dL).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Resource__ResourceLink",componentId:"sc-fcee131f-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,m._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function h({name:e,link:t}){return(0,i.jsxs)(f,{href:t,children:[e,(0,i.jsx)("sup",{children:"\u2197"})]})}var g=n(86059),j=n(74377),w=n(95040),y=n(15288),v=n(35842),C=n(27389),b="_1cf9gnw1";const _=()=>(0,i.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:C.Z4.colors.neutral2,className:b}),(0,i.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:C.Z4.colors.neutral2,className:b}),(0,i.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:C.Z4.colors.neutral2,className:b})]});var D=n(26729),N=n(43912),I=n(44952),k=n(58690),A=n(79132),$=n(47263),T=n(43454),S=n(6282),P=n(13446),O=n(66136);const F=u.css`
  :hover::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayHover};
    z-index: 0;
  }

  :active::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
    z-index: 0;
  }
`,H=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__Container",componentId:"sc-64765cb6-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,L=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BestPriceContainer",componentId:"sc-64765cb6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
`,U=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__HeaderRow",componentId:"sc-64765cb6-2"})`
  display: flex;
  justify-content: space-between;
`,E=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__PriceRow",componentId:"sc-64765cb6-3"})`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,z=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BuyNowButton",componentId:"sc-64765cb6-4"})`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:t,useAccentColor:n})=>t?e.critical:n?e.accent1:e.surface3};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${F}
`,B=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BuyNowButtonContainer",componentId:"sc-64765cb6-5"})`
  position: relative;
`,R=(0,u.default)(x.Tv.BodySecondary).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__Tertiary",componentId:"sc-64765cb6-6"})`
  color: ${({theme:e})=>e.neutral3};
`,Z=u.default.a.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__UploadLink",componentId:"sc-64765cb6-7"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${p.cR}
`,M=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__NotForSaleContainer",componentId:"sc-64765cb6-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,V=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__DiscoveryContainer",componentId:"sc-64765cb6-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,X=u.default.a.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__OwnerText",componentId:"sc-64765cb6-10"})`
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;

  ${p.cR}
`,G=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__OwnerInformationContainer",componentId:"sc-64765cb6-11"})`
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,W=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__AssetInfoContainer",componentId:"sc-64765cb6-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,q=u.default.h1.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__AssetHeader",componentId:"sc-64765cb6-13"})`
  display: -webkit-box;
  align-items: center;
  font-size: 28px;
  font-weight: 535;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.neutral1};
  margin: 0;
`,Y=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__CollectionNameContainer",componentId:"sc-64765cb6-14"})`
  display: flex;
  justify-content: space-between;
`,J=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__CollectionHeader",componentId:"sc-64765cb6-15"})`
  font-size: 16px;
  font-weight: 485;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${p.cR};
`,K=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__VerifiedIconContainer",componentId:"sc-64765cb6-16"})`
  position: relative;
`,Q=(0,u.default)(k.SA).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__StyledVerifiedIcon",componentId:"sc-64765cb6-17"})`
  position: absolute;
  top: 0px;
`,ee=(0,u.default)(T.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__DefaultLink",componentId:"sc-64765cb6-18"})`
  text-decoration: none;
`,te=(0,u.default)(x.dL).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__MarketplaceIcon",componentId:"sc-64765cb6-19"})`
  display: flex;
  align-items: center;
`,ne=({asset:e})=>{var t,n;const o=(0,S.s0)(),d=(0,A.$N)(),c=(0,A.aO)((e=>e.setProfilePageState)),p=(0,A.Pc)((e=>e.selectSellAsset)),m=(0,A.Pc)((e=>e.reset)),{formatEther:u,formatNumberOrString:f}=(0,O.Gb)(),h=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,g=(null===(t=h)||void 0===t?void 0:t.endAt)?new Date(h.endAt):void 0,j=(0,l.useMemo)((()=>d&&e.floor_sell_order_price?d*e.floor_sell_order_price:void 0),[d,e.floor_sell_order_price]),w=(0,s.oO)(),y=()=>{m(),o("/nfts/profile"),p(e),(0,s._P)(a.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...w}),c($.HA.LISTING)};return(0,i.jsxs)(L,{children:[(0,i.jsxs)(U,{children:[(0,i.jsx)(x.Tv.SubHeader,{color:"accent1",children:h?"Your Price":"List for Sale"}),h&&(0,i.jsx)(te,{href:h.marketplaceUrl,children:(0,r.Dp)(h.marketplace,"20")})]}),(0,i.jsx)(E,{children:h?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[u({input:null===(n=e.priceInfo)||void 0===n?void 0:n.ETHPrice,type:O.sw.NFTToken})," ","ETH"]}),j&&(0,i.jsx)(x.Tv.BodySecondary,{lineHeight:"24px",children:f({input:j,type:O.sw.FiatNFTToken})})]}):(0,i.jsx)(x.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Uniswap."})}),g&&(0,i.jsxs)(x.Tv.BodySecondary,{fontSize:"14px",children:["Sale ends: ",(0,r.zO)(g)]}),h?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(z,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:y,children:(0,i.jsx)(x.Tv.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,i.jsx)(z,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:y,children:(0,i.jsx)(x.Tv.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},ie=(0,u.default)(T.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__StyledLink",componentId:"sc-64765cb6-20"})`
  text-decoration: none;
  ${p.cR}
`,ae=({collectionName:e,collectionUrl:t})=>{const n=(0,u.useTheme)();return(0,i.jsx)(L,{children:(0,i.jsxs)(M,{children:[(0,i.jsx)(k.Io,{width:"79px",height:"79px",color:n.neutral3}),(0,i.jsx)(x.Tv.SubHeader,{children:"Not for sale"}),(0,i.jsxs)(V,{children:[(0,i.jsx)(x.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,i.jsx)(ie,{to:`/nfts/collection/${t}`,children:(0,i.jsx)(x.Tv.Link,{lineHeight:"20px",children:e})})]})]})})},se=({asset:e,collection:t})=>{var n,a,s;const{account:o}=(0,D.G)(),{formatEther:d,formatNumberOrString:c}=(0,O.Gb)(),p=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,m=(null===(n=p)||void 0===n?void 0:n.endAt)?new Date(p.endAt):void 0,u=(0,A.cP)((e=>e.itemsInBag)),f=(0,A.cP)((e=>e.addAssetsToBag)),h=(0,A.cP)((e=>e.removeAssetsFromBag)),g=(0,A.cP)((e=>e.toggleBag)),j=(0,A.cP)((e=>e.bagExpanded)),w=(0,A.p6)(e),y=[{address:e.address,tokenId:e.tokenId}],{walletAssets:v}=(0,I.b)(o??"",[],y,1),C=(0,l.useMemo)((()=>{var e;return null===(e=v)||void 0===e?void 0:e[0]}),[v]),{assetInBag:b}=(0,l.useMemo)((()=>({assetInBag:u.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address))})),[e,u]),_=e.ownerAddress&&!!C&&(null===(a=o)||void 0===a?void 0:a.toLowerCase())===(null===(s=e.ownerAddress)||void 0===s?void 0:s.toLowerCase()),k=p&&e.priceInfo;return(0,i.jsxs)(H,{children:[(0,i.jsxs)(W,{children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(ee,{to:`/nfts/collection/${e.address}`,children:(0,i.jsxs)(J,{children:[t.collectionName,(0,i.jsx)(K,{children:t.isVerified&&(0,i.jsx)(Q,{})})]})}),(0,i.jsx)(Z,{onClick:()=>{window.open((0,r.Lr)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,i.jsx)(N.m,{})})]}),(0,i.jsx)(q,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),_?(0,i.jsx)(ne,{asset:C}):k?(0,i.jsxs)(L,{children:[(0,i.jsxs)(U,{children:[(0,i.jsx)(x.Tv.SubHeader,{color:"accent1",children:"Best Price"}),(0,i.jsx)(te,{href:p.marketplaceUrl,children:(0,r.Dp)(p.marketplace,"20")})]}),(0,i.jsxs)(E,{children:[(0,i.jsxs)(x.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[d({input:e.priceInfo.ETHPrice,type:O.sw.NFTToken})," ETH"]}),w&&(0,i.jsx)(x.Tv.BodySecondary,{lineHeight:"24px",children:c({input:w,type:O.sw.FiatNFTToken})})]}),m&&m>new Date&&(0,i.jsxs)(R,{fontSize:"14px",children:["Sale ends: ",(0,r.zO)(m)]}),(0,i.jsx)("div",{children:(0,i.jsx)(B,{children:(0,i.jsx)(z,{assetInBag:b,margin:!0,useAccentColor:!0,onClick:()=>{b?h([e]):f([e]),b||j||g()},children:(0,i.jsx)(x.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,i.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:b?"Remove":"Add to Bag"})})})})})]}):(0,i.jsx)(ae,{collectionName:t.collectionName??"this collection",collectionUrl:e.address}),k&&(0,i.jsxs)(G,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,i.jsx)(x.Tv.BodySmall,{color:"neutral2",lineHeight:"20px",children:"Seller:"}),(0,i.jsx)(X,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,i.jsxs)("span",{children:[" ",_?"You":e.ownerAddress&&(0,P.Xn)(e.ownerAddress,2)]})})]})]})};var oe=n(59254),re=n(25290),le=n(10581),de=n(82743),ce=n(82284),pe=n(49114);const me=u.default.tr.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TR",componentId:"sc-c8e27496-0"})`
  border-bottom: ${({theme:e})=>`1px solid ${e.surface3}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,ue=u.default.th.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TH",componentId:"sc-c8e27496-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,xe=u.default.table.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__Table",componentId:"sc-c8e27496-2"})`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,fe=u.default.td.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TD",componentId:"sc-c8e27496-3"})`
  height: 56px;
  padding: 8px 0px;
  text-align: left;
  vertical-align: middle;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,he=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__PriceContainer",componentId:"sc-c8e27496-4"})`
  align-items: center;
  display: flex;
  gap: 8px;
`,ge=u.default.a.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__Link",componentId:"sc-c8e27496-5"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.cR}
`,je=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__ActivityContainer",componentId:"sc-c8e27496-6"})`
  max-height: 310px;
  overflow: auto;

  ${p.Zl}
`,we=(0,u.default)(de.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__LoadingCell",componentId:"sc-c8e27496-7"})`
  height: 20px;
  width: 80px;
`,ye=({children:e})=>(0,i.jsx)(je,{id:"activityContainer",children:(0,i.jsxs)(xe,{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)(me,{children:[(0,i.jsx)(ue,{children:(0,i.jsx)(c.cC,{children:"Event"})}),(0,i.jsx)(ue,{children:(0,i.jsx)(c.cC,{children:"Price"})}),(0,i.jsx)(ue,{children:(0,i.jsx)(c.cC,{children:"By"})}),(0,i.jsx)(ue,{children:(0,i.jsx)(c.cC,{children:"To"})}),(0,i.jsx)(ue,{children:(0,i.jsx)(c.cC,{children:"Time"})})]})}),(0,i.jsx)("tbody",{children:e})]})}),ve=({cellCount:e})=>(0,i.jsx)(me,{children:Array(e).fill(null).map(((e,t)=>(0,i.jsx)(fe,{children:(0,i.jsx)(we,{})},t)))}),Ce=({rowCount:e})=>(0,i.jsx)(ye,{children:Array(e).fill(null).map(((e,t)=>(0,i.jsx)(ve,{cellCount:5},t)))}),be=({events:e})=>{const{formatNumberOrString:t}=(0,O.Gb)();return(0,i.jsx)(ye,{children:e&&e.map(((e,n)=>{const{eventTimestamp:a,eventType:s,fromAddress:o,marketplace:l,price:d,toAddress:c,transactionHash:p}=e,m=d?t({input:parseFloat(d),type:O.sw.NFTToken}):null;return s?(0,i.jsxs)(me,{children:[(0,i.jsx)(fe,{children:(0,i.jsx)(ce.VM,{eventType:s,eventTimestamp:a,eventTransactionHash:p,eventOnly:!0})}),(0,i.jsx)(fe,{children:m&&(0,i.jsxs)(he,{children:[l&&(0,r.Dp)(l,"16"),m," ETH"]})}),(0,i.jsx)(fe,{children:o&&(0,i.jsx)(ge,{href:`https://etherscan.io/address/${o}`,target:"_blank",rel:"noopener noreferrer",children:(0,P.Xn)(o,2)})}),(0,i.jsx)(fe,{children:c&&(0,i.jsx)(ge,{href:`https://etherscan.io/address/${c}`,target:"_blank",rel:"noopener noreferrer",children:(0,P.Xn)(c,2)})}),(0,i.jsx)(fe,{children:a&&(0,pe.F)(a.toString())})]},n):null}))})};n(69640),n(49484);var _e="_1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",De=n(50333),Ne=n(94191);const Ie=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Details",componentId:"sc-d05234da-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,ke=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Header",componentId:"sc-d05234da-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
`,Ae=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Body",componentId:"sc-d05234da-2"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,$e=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Center",componentId:"sc-d05234da-3"})`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${p.cR}
`,Te=u.default.a.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__CreatorLink",componentId:"sc-d05234da-4"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.cR}
`,Se=(0,u.default)(Ne.Z).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__CopyIcon",componentId:"sc-d05234da-5"})`
  cursor: pointer;
`,Pe=({header:e,body:t})=>(0,i.jsxs)("div",{children:[(0,i.jsx)(ke,{children:e}),(0,i.jsx)(Ae,{children:t})]}),Oe=({asset:e,collection:t})=>{var n;const{formatNumber:a}=(0,O.Gb)(),{address:s,tokenId:o,tokenType:r,creator:d}=e,{totalSupply:c}=t,[,p]=(0,De.Z)(),m=(0,l.useCallback)((()=>{p(s??"")}),[s,p]);return(0,i.jsxs)(Ie,{children:[(0,i.jsx)(Pe,{header:"Contract address",body:(0,i.jsxs)($e,{onClick:m,children:[(0,P.Xn)(s,2)," ",(0,i.jsx)(Se,{size:13})]})}),(0,i.jsx)(Pe,{header:"Token ID",body:o.length>9?(u=o,`${u.substring(0,4)}...${u.substring(u.length-4,u.length)}`):o}),(0,i.jsx)(Pe,{header:"Token standard",body:r}),(0,i.jsx)(Pe,{header:"Blockchain",body:"Ethereum"}),(0,i.jsx)(Pe,{header:"Total supply",body:`${a({input:c??0,type:O.sw.WholeNumber})}`}),(0,i.jsx)(Pe,{header:"Creator",body:(null===(n=d)||void 0===n?void 0:n.address)&&(0,i.jsx)(Te,{href:`https://etherscan.io/address/${d.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,P.Xn)(d.address,2)})})]});var u};var Fe=n(37525),He=n(86082);const Le=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__Header",componentId:"sc-cc63c57f-0"})`
  display: flex;
  border-radius: ${({isOpen:e})=>e?"16px 16px 0px 0px":"16px"};
  justify-content: space-between;
  background-color: ${({theme:e})=>e.surface1};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 28px;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayHover};
  }

  &:active {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }

  transition: ${({theme:{transition:{duration:e,timing:t}}})=>u.css`background-color ${e.medium} ${t.ease}`};
`,Ue=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__PrimaryHeader",componentId:"sc-cc63c57f-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  line-height: 28px;
  font-size: 20px;
`,Ee=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__SecondaryHeader",componentId:"sc-cc63c57f-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,ze=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__SecondaryHeaderContainer",componentId:"sc-cc63c57f-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.neutral1};
`,Be=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__ContentContainer",componentId:"sc-cc63c57f-4"})`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.surface1};
`,Re=({children:e,primaryHeader:t,secondaryHeader:n,defaultOpen:a,...s})=>{const[o,r]=(0,l.useState)(!!a);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(Le,{...s,isOpen:o,onClick:()=>r(!o),children:[(0,i.jsxs)(Ue,{children:[t," ",(0,i.jsx)(Ee,{children:n})]}),(0,i.jsx)(ze,{children:o?(0,i.jsx)(Fe.Z,{}):(0,i.jsx)(He.Z,{})})]}),o&&(0,i.jsx)(Be,{children:e})]})};var Ze=n(18806);const Me=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__Grid",componentId:"sc-87c51ec6-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 780px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ve=(0,u.default)(T.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__GridItemContainer",componentId:"sc-87c51ec6-1"})`
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${p.cR}
  min-width: 0;
`,Xe=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__TraitType",componentId:"sc-87c51ec6-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,Ge=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__TraitValue",componentId:"sc-87c51ec6-3"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  display: inline-block;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,We=({trait:e,collectionAddress:t})=>{const{trait_type:n,trait_value:a}=e,s=Ze.stringify({traits:[`("${n}","${a}")`]},{arrayFormat:"comma"});return(0,i.jsxs)(Ve,{to:`/nfts/collection/${t}?${s}`,children:[(0,i.jsx)(Xe,{children:n}),(0,i.jsx)(Ge,{children:a})]})},qe=({asset:e})=>{var t;const n=(0,l.useMemo)((()=>{var t;return null===(t=e.traits)||void 0===t?void 0:t.sort(((e,t)=>e.trait_type.localeCompare(t.trait_type)))}),[e]);return(0,i.jsx)(Me,{children:null===(t=n)||void 0===t?void 0:t.map((t=>(0,i.jsx)(We,{trait:t,collectionAddress:e.address},t.trait_type)))})},Ye=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__AssetPriceDetailsContainer",componentId:"sc-de3ef274-0"})`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,Je=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__MediaContainer",componentId:"sc-de3ef274-1"})`
  display: flex;
  justify-content: center;
`,Ke=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Column",componentId:"sc-de3ef274-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,Qe=u.default.a.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__AddressTextLink",componentId:"sc-de3ef274-3"})`
  display: inline-block;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${p.cR};
`,et=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__SocialsContainer",componentId:"sc-de3ef274-4"})`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,tt=u.default.p.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__DescriptionText",componentId:"sc-de3ef274-5"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,nt=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__RarityWrap",componentId:"sc-de3ef274-6"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,it=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__EmptyActivitiesContainer",componentId:"sc-de3ef274-7"})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral1};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,at=(0,u.default)(T.rU).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Link",componentId:"sc-de3ef274-8"})`
  color: ${({theme:e})=>e.accent1};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${p.cR};
`,st=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ActivitySelectContainer",componentId:"sc-de3ef274-9"})`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${p.Zl}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,ot=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ContentNotAvailable",componentId:"sc-de3ef274-10"})`
  display: flex;
  background-color: ${({theme:e})=>e.surface1};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 450px;
  height: 450px;
`,rt=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__FilterBox",componentId:"sc-de3ef274-11"})`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e})=>e};
  font-size: 14px;
  font-weight: 535;
  line-height: 14px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  ${p.cR};
`,lt=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ByText",componentId:"sc-de3ef274-12"})`
  font-size: 14px;
  line-height: 20px;
`,dt=u.default.img.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Img",componentId:"sc-de3ef274-13"})`
  background-color: white;
`,ct=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__HoverImageContainer",componentId:"sc-de3ef274-14"})`
  display: flex;
  margin-right: 4px;
`,pt=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__HoverContainer",componentId:"sc-de3ef274-15"})`
  display: flex;
`,mt=u.default.span.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ContainerText",componentId:"sc-de3ef274-16"})`
  font-size: 14px;
`,ut=({imageUrl:e,animationUrl:t,name:n,collectionName:a,dominantColor:s})=>(0,i.jsxs)(w.n,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,i.jsx)(w.n,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:t}),(0,i.jsx)("img",{className:_e,src:e,alt:n||a,style:{"--shadow":`rgba(${s.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),xt={[$.n$.Listing]:!0,[$.n$.Sale]:!0,[$.n$.Transfer]:!1,[$.n$.CancelListing]:!1};var ft;!function(e){e.Audio="audio",e.Video="video",e.Image="image",e.Embed="embed"}(ft||(ft={}));const ht=({mediaType:e,asset:t,dominantColor:n})=>{const a={"--shadow":`rgba(${n.join(", ")}, 0.5)`};switch(e){case ft.Video:return(0,i.jsx)("video",{src:t.animationUrl,className:_e,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:a});case ft.Image:return(0,i.jsx)("img",{className:_e,src:t.imageUrl,alt:t.name||t.collectionName,style:a});case ft.Audio:return(0,i.jsx)(ut,{...t,dominantColor:n});case ft.Embed:return(0,i.jsx)("div",{className:"_1yohfdw2",children:(0,i.jsx)("iframe",{title:t.name??`${t.collectionName} #${t.tokenId}`,src:t.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",style:a,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},gt=({asset:e,collection:t})=>{var n,a,s,o,r,c,p,m;const{formatNumberOrString:u}=(0,O.Gb)(),[x]=(0,l.useState)([0,0,0]),{rarityProvider:f}=(0,l.useMemo)((()=>{var t,n,i;return e.rarity?{rarityProvider:null===(i=e)||void 0===i||null===(n=i.rarity)||void 0===n||null===(t=n.providers)||void 0===t?void 0:t.find((({provider:t})=>{var n;return t===(null===(n=e.rarity)||void 0===n?void 0:n.primaryProvider)}))}:{}}),[e.rarity]),w=(0,l.useMemo)((()=>(0,oe.F)(e.animationUrl??"")?ft.Audio:(0,re.W)(e.animationUrl??"")?ft.Video:e.animationUrl?ft.Embed:ft.Image),[e]),{address:b,tokenId:D}=e,{nftActivity:N}=(0,j.m)({activityTypes:[d.y3y.Sale],address:b,tokenId:D},1,"no-cache"),I=null===(a=N)||void 0===a||null===(n=a[0])||void 0===n?void 0:n.price,k=I?u({input:parseFloat(I),type:O.sw.NFTToken}):void 0,[A,T]=(0,l.useReducer)(v.YQ,xt),S=(0,l.useCallback)((function({eventType:e}){const t=A[e];return(0,i.jsx)(rt,{backgroundColor:t?C.gR.color.surface1:C.Z4.colors.surface3,onClick:()=>T({eventType:e}),children:e===$.n$.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[A]),{nftActivity:F,hasNext:H,loadMore:L,loading:U,error:E}=(0,j.m)({activityTypes:Object.keys(A).map((e=>e)).filter((e=>A[e])),address:b,tokenId:D},25),z=null===(r=e)||void 0===r||null===(o=r.rarity)||void 0===o||null===(s=o.providers)||void 0===s?void 0:s[0],[B,R]=(0,l.useState)(!1);return(0,i.jsxs)(Ke,{children:[(0,i.jsx)(Je,{children:void 0===e.imageUrl||B?(0,i.jsx)(ot,{children:"Content not available yet"}):w===ft.Image?(0,i.jsx)(dt,{className:_e,src:e.imageUrl,alt:e.name||t.collectionName,onError:()=>R(!0)}):(0,i.jsx)(ht,{asset:e,mediaType:w,dominantColor:x})}),(0,i.jsx)(Ye,{children:(0,i.jsx)(se,{asset:e,collection:t})}),e.traits&&(0,i.jsx)(Re,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:f&&z&&z.score?(0,i.jsx)(g.ud,{text:(0,i.jsxs)(pt,{children:[(0,i.jsx)(ct,{children:(0,i.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,i.jsx)(mt,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,i.jsxs)(nt,{children:["Rarity: ",u({input:z.score,type:O.sw.WholeNumber})]})}):null,children:(0,i.jsx)(qe,{asset:e})}),(0,i.jsx)(Re,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:k?`Last Sale: ${k} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(st,{$isHorizontalScroll:!0,children:[(0,i.jsx)(S,{eventType:$.n$.Listing}),(0,i.jsx)(S,{eventType:$.n$.Sale}),(0,i.jsx)(S,{eventType:$.n$.Transfer}),(0,i.jsx)(S,{eventType:$.n$.CancelListing})]}),U?(0,i.jsx)(Ce,{rowCount:10}):F&&F.length>0?(0,i.jsx)(le.Z,{next:L,hasMore:!!H,loader:U&&(0,i.jsx)(y.M5,{children:(0,i.jsx)(_,{})}),dataLength:(null===(c=F)||void 0===c?void 0:c.length)??0,scrollableTarget:"activityContainer",children:(0,i.jsx)(be,{events:F})}):(0,i.jsx)(i.Fragment,{children:!E&&F&&(0,i.jsxs)(it,{children:[(0,i.jsx)("div",{children:"No activities yet"}),(0,i.jsx)(at,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,i.jsx)(Re,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(lt,{children:"By "}),(null===(p=e)||void 0===p?void 0:p.creator)&&(null===(m=e.creator)||void 0===m?void 0:m.address)&&(0,i.jsx)(Qe,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,P.Xn)(e.creator.address,2)}),(0,i.jsx)(tt,{"data-testid":"nft-details-description-text",children:t.collectionDescription}),(0,i.jsxs)(et,{children:[t.externalUrl&&(0,i.jsx)(h,{name:"Website",link:`${t.externalUrl}`}),t.twitterUrl&&(0,i.jsx)(h,{name:"Twitter",link:`https://twitter.com/${t.twitterUrl}`}),t.discordUrl&&(0,i.jsx)(h,{name:"Discord",link:t.discordUrl})]})]})}),(0,i.jsx)(Re,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,i.jsx)(Oe,{asset:e,collection:t})})]})};var jt=n(44591),wt=n(63415),yt=n(40976);const vt="960px",Ct=(0,u.default)(de.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__Title",componentId:"sc-d1f2fecc-0"})`
  height: 16px;
  width: 136px;
`,bt=(0,u.default)(de.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__SubTitle",componentId:"sc-d1f2fecc-1"})`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${vt}) {
    width: 100%;
  }
`,_t=(0,u.default)(de.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__Seller",componentId:"sc-d1f2fecc-2"})`
  height: 16px;
  width: 40px;
`,Dt=(0,u.default)(de.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__SellerAddress",componentId:"sc-d1f2fecc-3"})`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,Nt=(0,u.default)(de.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__PrimaryBody",componentId:"sc-d1f2fecc-4"})`
  width: 100%;
  height: 260px;
`,It=(0,u.default)(de.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__ActivityLoader",componentId:"sc-d1f2fecc-5"})`
  width: 100%;
  height: 428px;
`,kt=(0,u.default)(jt.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__PrimaryContent",componentId:"sc-d1f2fecc-6"})`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${vt}) {
    max-width: 100%;
  }
`,At=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__LoaderContainer",componentId:"sc-d1f2fecc-7"})`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,$t=(0,u.default)(de.X).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowContainer",componentId:"sc-d1f2fecc-8"})`
  height: 180px;
  width: 360px;

  @media (max-width: ${vt}) {
    width: 100%;
  }
`,Tt=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__LoadingContainer",componentId:"sc-d1f2fecc-9"})`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${yt.bc}

  @media (max-width: ${vt}) {
    max-width: 100%;
    margin-top: 0;
  }
`,St=(0,u.default)(jt.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__StyledColumn",componentId:"sc-d1f2fecc-10"})`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${vt}) {
    max-width: 100%;
  }
`,Pt=(0,u.default)(jt.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowLoadingDesktop",componentId:"sc-d1f2fecc-11"})`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${vt}) {
    display: none;
  }
`,Ot=(0,u.default)(jt.ZP).withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowLoadingMobile",componentId:"sc-d1f2fecc-12"})`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${vt}) {
    display: flex;
  }
`,Ft=()=>{const e=(0,u.useTheme)();return(0,i.jsxs)(Tt,{children:[(0,i.jsxs)(St,{children:[(0,i.jsx)(At,{children:(0,i.jsx)(wt.ZP,{stroke:e.accent1,size:"40px"})}),(0,i.jsxs)(Ot,{children:[(0,i.jsxs)(jt.ZP,{children:[(0,i.jsx)(Ct,{}),(0,i.jsx)(bt,{})]}),(0,i.jsx)($t,{}),(0,i.jsxs)(jt.ZP,{children:[(0,i.jsx)(_t,{}),(0,i.jsx)(Dt,{})]})]}),(0,i.jsxs)(kt,{children:[(0,i.jsx)(Nt,{}),(0,i.jsx)(It,{}),(0,i.jsx)(Nt,{}),(0,i.jsx)(Nt,{})]})]}),(0,i.jsxs)(Pt,{children:[(0,i.jsxs)(jt.ZP,{children:[(0,i.jsx)(Ct,{}),(0,i.jsx)(bt,{})]}),(0,i.jsx)($t,{}),(0,i.jsxs)(jt.ZP,{children:[(0,i.jsx)(_t,{}),(0,i.jsx)(Dt,{})]})]})]})};var Ht=n(37018),Lt=n(437),Ut=n(76885);const Et=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\asset\\Asset__AssetContainer",componentId:"sc-dcb3da57-0"})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
  padding: 48px 48px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 540px) {
    padding: 20px 20px 0 20px;
  }
  @media (max-width: 420px) {
    padding: 16px 16px 0 16px;
  }
`,zt=u.default.div.withConfig({displayName:"D:\\template\\julx-main\\julx-main\\apps\\web\\src\\nft\\pages\\asset\\Asset__AssetPriceDetailsContainer",componentId:"sc-dcb3da57-1"})`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`,Bt=()=>{const{tokenId:e="",contractAddress:t=""}=(0,S.UO)(),{data:n,loading:p}=function(e,t){var n,i,a,s,c,p,m,u,x,f,h;const{data:g,loading:j}=(0,d.CVZ)({variables:{address:e,tokenId:t}}),w=null===(a=g)||void 0===a||null===(i=a.nftAssets)||void 0===i||null===(n=i.edges[0])||void 0===n?void 0:n.node,y=null===(s=w)||void 0===s?void 0:s.collection,v=null===(m=w)||void 0===m||null===(p=m.listings)||void 0===p||null===(c=p.edges[0])||void 0===c?void 0:c.node,C=(0,o.parseEther)((0,r.K3)((null===(f=v)||void 0===f||null===(x=f.price)||void 0===x||null===(u=x.value)||void 0===u?void 0:u.toString())??"0")).toString();return(0,l.useMemo)((()=>{var n,i,a,s,o,r,l,d,c,p,m,u,x,f,h,g,b,_,D,N,I,k,A,$,T,S,P,O,F,H,L,U,E,z,B,R,Z,M,V,X,G,W,q;return{data:[{id:null===(n=w)||void 0===n?void 0:n.id,address:e,notForSale:null===(null===(i=w)||void 0===i?void 0:i.listings),collectionName:null===(s=w)||void 0===s||null===(a=s.collection)||void 0===a?void 0:a.name,collectionSymbol:null===(l=w)||void 0===l||null===(r=l.collection)||void 0===r||null===(o=r.image)||void 0===o?void 0:o.url,imageUrl:null===(c=w)||void 0===c||null===(d=c.image)||void 0===d?void 0:d.url,animationUrl:null===(p=w)||void 0===p?void 0:p.animationUrl,marketplace:null===(m=v)||void 0===m?void 0:m.marketplace.toLowerCase(),name:null===(u=w)||void 0===u?void 0:u.name,priceInfo:{ETHPrice:C,baseAsset:"ETH",baseDecimals:"18",basePrice:C},susFlag:null===(x=w)||void 0===x?void 0:x.suspiciousFlag,sellorders:null===(h=w)||void 0===h||null===(f=h.listings)||void 0===f?void 0:f.edges.map((e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0}))),smallImageUrl:null===(b=w)||void 0===b||null===(g=b.smallImage)||void 0===g?void 0:g.url,tokenId:t,tokenType:null===(I=w)||void 0===I||null===(N=I.collection)||void 0===N||null===(D=N.nftContracts)||void 0===D||null===(_=D[0])||void 0===_?void 0:_.standard,collectionIsVerified:null===(A=w)||void 0===A||null===(k=A.collection)||void 0===k?void 0:k.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:null===(T=w)||void 0===T||null===($=T.rarities)||void 0===$?void 0:$.map((e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"})))},ownerAddress:null===(S=w)||void 0===S?void 0:S.ownerAddress,creator:{profile_img_url:(null===(F=w)||void 0===F||null===(O=F.creator)||void 0===O||null===(P=O.profileImage)||void 0===P?void 0:P.url)??"",address:(null===(L=w)||void 0===L||null===(H=L.creator)||void 0===H?void 0:H.address)??""},metadataUrl:(null===(U=w)||void 0===U?void 0:U.metadataUrl)??"",traits:null===(z=w)||void 0===z||null===(E=z.traits)||void 0===E?void 0:E.map((e=>({trait_type:e.name??"",trait_value:e.value??""})))},{collectionDescription:null===(B=y)||void 0===B?void 0:B.description,collectionImageUrl:null===(Z=y)||void 0===Z||null===(R=Z.image)||void 0===R?void 0:R.url,collectionName:null===(M=y)||void 0===M?void 0:M.name,isVerified:null===(V=y)||void 0===V?void 0:V.isVerified,totalSupply:null===(X=y)||void 0===X?void 0:X.numAssets,twitterUrl:null===(G=y)||void 0===G?void 0:G.twitterName,discordUrl:null===(W=y)||void 0===W?void 0:W.discordUrl,externalUrl:null===(q=y)||void 0===q?void 0:q.homepageUrl}],loading:j}}),[e,w,y,C,null===(h=v)||void 0===h?void 0:h.marketplace,j,t])}(t,e),[m,u]=n,x=(0,l.useMemo)((()=>({title:(0,Ut.H)(m.name,u.collectionName,e),image:window.location.origin+"/api/image/nfts/asset/"+t+"/"+e,url:window.location.href,description:u.collectionDescription??"View traits, trading activity, descriptions, and other details on your NFTs."})),[m.name,u.collectionDescription,u.collectionName,t,e]),f=(0,Ht.X)(x);return r._P.includes(t)?(0,i.jsx)(S.Fg,{to:"/nfts",replace:!0}):p?(0,i.jsx)(Ft,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Lt.Helmet,{children:[(0,i.jsxs)("title",{children:[m.name??""," ",m.name?"|":""," ",u.collectionName??c.t`Explore NFTs`," on Uniswap"]}),f.map(((e,t)=>(0,i.jsx)("meta",{...e},t)))]}),(0,i.jsx)(s.fM,{page:a.yJ.NFT_DETAILS_PAGE,properties:{collection_address:t,token_id:e},shouldLogImpression:!0,children:m&&u?(0,i.jsxs)(Et,{children:[(0,i.jsx)(gt,{collection:u,asset:m}),(0,i.jsx)(zt,{children:(0,i.jsx)(se,{collection:u,asset:m})})]}):null})]})}},76885:(e,t,n)=>{function i(e,t){return e?"Get "+e+" on Uniswap":t?"Get "+t+" on Uniswap":"View Token on Uniswap"}function a(e,t,n){return e||(t&&n?t+" #"+n:n?"Asset #"+n:"View NFT on Uniswap")}n.d(t,{H:()=>a,u:()=>i})}}]);
//# sourceMappingURL=7125.be076699.chunk.js.map