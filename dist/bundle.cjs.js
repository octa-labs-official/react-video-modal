"use strict";var r=require("react/jsx-runtime"),e=require("react");function t(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var n=t(require("react-player")),o=function(){return o=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},o.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;module.exports=function(t){var i=t.playerProps,u=e.useState(!1),s=u[0],a=u[1];return r.jsxs("div",{children:[r.jsx("button",{onClick:function(){return a(!0)},children:"Open Video"}),s&&r.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3,background:"rgba(0, 0, 0, 0.8)",padding:"40px",borderRadius:"8px"},children:[r.jsx("button",{onClick:function(){return a(!1)},style:{position:"absolute",right:"10px",top:"10px",fontSize:"24px",background:"none",border:"none",color:"white",cursor:"pointer"},children:"X"}),r.jsx(n.default,o({},i))]})]})};
//# sourceMappingURL=bundle.cjs.js.map
