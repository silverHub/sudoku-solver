(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(6),o=n.n(c),i=(n(13),n(2)),l=n(8),a=function(e){return new Set(e.values()).size===e.size},d=function(e,t){var n=e.row,r=e.col,s=e.block;return a(t.row(n))&&a(t.col(r))&&a(t.block(s))},u=function(e,t){var n=Object(i.a)(e,2),r=n[0],s=n[1],c=function(e){return{row:parseInt(e[0],10),col:parseInt(e[1],10),block:parseInt(e[2],10)}}(r),o=s;do{t.set(c.row,c.col,++o),t.print()}while(o<10&&!d(c,t));return 10===o?(t.set(c.row,c.col,0),[!1,null]):(t.set(c.row,c.col,o),[!0,o])},b=function(e,t,n,r){return{isSolutionFound:e,solution:t,error:n,statistics:r}},f=function(e){return e<0},h=function(e,t){return t===e},j={solve:function(e){var t=window.performance.now(),n=Object(l.a)(e.empties().entries()),r=0,s=0;try{do{s++;var c=n[r],o=u(c,e),a=Object(i.a)(o,2),d=a[0],j=a[1];d?(c[1]=j||0,r++):(c[1]=0,r--)}while(!f(r)&&!h(n.length,r));var m={elapsedTime:window.performance.now()-t,nbrOfIteration:s};return f(r)?b(!1,"",null,m):h(n.length,r)?b(!0,e.print(),null,m):b(!1,"",null,m)}catch(x){return console.log("Error",x),b(!1,"",x,null)}}},m=n(7),x=new Map,g=function(e,t){return t-1<3?e-1<3?1:e-1<6?4:7:t-1<6?e-1<3?2:e-1<6?5:8:e-1<3?3:e-1<6?6:9},p=function(e,t){return"".concat(e).concat(t).concat(g(e,t))},O=function(){for(var e=1;e<10;e++)for(var t=1;t<10;t++)x.set(p(e,t),0)},v={create:function(e){if(81!==e.length)throw new Error("Invalid sudoku");O(),Array.from(x.keys()).forEach((function(t,n){x.set(t,Number.parseInt(e.charAt(n),10))}))},createEmpty:O,print:function(){return Array.from(x.values()).join("")},log:function(){var e,t=1,n="",r=Object(m.a)(x.values());try{for(r.s();!(e=r.n()).done;){var s=e.value;t>9&&(t=1,n+="\n"),n=n+" "+s,t++}}catch(c){r.e(c)}finally{r.f()}return n},clear:function(){x.clear()},row:function(e){return new Map(Array.from(x.entries()).filter((function(t){var n=Object(i.a)(t,2),r=n[0],s=n[1];return r.charAt(0)===e.toString()&&s})))},col:function(e){return new Map(Array.from(x.entries()).filter((function(t){var n=Object(i.a)(t,2),r=n[0],s=n[1];return r.charAt(1)===e.toString()&&s})))},block:function(e){return new Map(Array.from(x.entries()).filter((function(t){var n=Object(i.a)(t,2),r=n[0],s=n[1];return r.charAt(2)===e.toString()&&s})))},empties:function(){return new Map(Array.from(x.entries()).filter((function(e){return!Object(i.a)(e,2)[1]})))},get:function(e,t){return x.get(p(e,t))},set:function(e,t,n){x.set(p(e,t),n)}},w=n(0),y=function(e){var t=e.onKeyDown,n=e.charsLeft;return e.hidden?null:Object(w.jsx)("div",{className:"md:mx-12",children:Object(w.jsxs)("div",{className:"my-6 text-center md:mr-6",children:[Object(w.jsxs)("p",{className:"font-light leading-loose select-none md:text-xl text-gray-50 text-shadow md:mb-6",id:"instructions",onClick:function(e){var n=e.target;"KBD"===n.nodeName&&t({key:n.innerText})},children:[Object(w.jsx)("span",{className:"hidden md:inline",children:"Type"}),Object(w.jsx)("span",{className:"md:hidden",children:"Click"})," ",Object(w.jsx)("kbd",{children:"0"})," for empty,",Object(w.jsx)("br",{className:"md:hidden"})," ",Object(w.jsx)("kbd",{children:"1"}),Object(w.jsx)("kbd",{children:"2"}),Object(w.jsx)("kbd",{children:"3"}),Object(w.jsx)("kbd",{children:"4"}),Object(w.jsx)("kbd",{children:"5"}),Object(w.jsx)("kbd",{children:"6"}),Object(w.jsx)("kbd",{children:"7"}),Object(w.jsx)("kbd",{children:"8"}),Object(w.jsx)("kbd",{children:"9"})," for values ",Object(w.jsx)("br",{className:"md:hidden"})," and"," ",Object(w.jsx)("kbd",{children:"Backspace"})," for delete"]}),Object(w.jsxs)("div",{className:"inline-block mt-4 ml-5 italic font-light leading-4 text-white",children:[Object(w.jsx)("span",{className:"mr-1 text-3xl font-normal",children:n}),"character left"]})]})})},k=function(){return Object(w.jsx)("h1",{className:"p-5 text-center md:mb-5 text-gray-50 ",children:Object(w.jsx)("span",{className:"text-4xl tracking-tight uppercase md:text-6xl text-shadow-md font-title",children:"Sudoku-solver"})})},N=[["EMPTY","000000000000000000000000000000000000000000000000000000000000000000000000000000000"],["EASY","390020780001000040500910306009002430600849017200030500467001050005006170000300000"],["MEDIUM","071000382000001000300008006060102430040560010800000009000000620030014000100607940"],["HARD","000004105070005903000923040809000500020050070051006000307200000000400200000560801"]],S=function(e){var t=e.onPresetSelect,n=e.selected;return Object(w.jsxs)("div",{className:"flex flex-col mb-2 text-white md:p-4 md:mb-6",children:[Object(w.jsx)("h2",{className:"mb-1 font-normal text-center md:mb-3 md:text-2xl",children:"Presets"}),Object(w.jsx)("ul",{className:"flex justify-center gap-4",onClick:function(e){var n,r;t(null===(n=e.target)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.preset)},children:N.map((function(e){var t=Object(i.a)(e,2),r=t[0],s=t[1];return Object(w.jsx)("li",{className:"p-2 text-xs font-semibold border rounded-md cursor-pointer md:text-base border-gray-50 hover:bg-white hover:text-blue-400 select-none ".concat(n===s?"bg-white text-yellow-600":""),"data-preset":s,children:r},r)}))})]})},I=function(e){var t=e.children,n=e.showBorder;return Object(w.jsx)("div",{className:" w-7 h-7 md:w-14 md:h-14 mr-0.5 mb-0.5 border-dashed ".concat(n?"border":""," border-white border-opacity-50 rounded"),children:t})},A=function(e){var t=e.children,n=e.isVisible,r=e.bg;return Object(w.jsx)("div",{className:"flex justify-center items-center h-7 md:h-14 rounded ".concat(r," ").concat(n?"bg-opacity-70":"bg-opacity-0"),children:Object(w.jsx)("span",{className:"font-semibold text-white md:text-2xl text-shadow-lg font-board",children:t})})},R=[1,2,3,4,5,6,7,8,9],E=function(e,t,n){if(e<1||e>9||t<1||t>9)return"";var r=9*(e-1);return n.slice(r,r+10)[t-1]},C=function(e){var t=e.base,n=e.solution,r=e.showResult,s=e.children;return Object(w.jsxs)("div",{className:"relative flex flex-wrap mx-auto w-sud-sm md:w-sud-bg h-sud-sm md:h-sud-bg",children:[R.map((function(e){return R.map((function(s){var c=E(e,s,t),o=r&&"0"===c&&n?E(e,s,n):c;return Object(w.jsx)(I,{showBorder:!o,children:Object(w.jsx)(A,{isVisible:!!o,bg:g(e,s)%2===0?"bg-yellow-500":"bg-yellow-600",children:o&&o.replace("0",".")})},e+s)}))})),s]})},M=function(e){var t=e.isSolving,n=e.onSolve,r=e.onReset,s=e.toggleShowResult,c=e.charsLeft,o=e.isVerified,i=e.hasResult,l=e.showResult;return Object(w.jsxs)("div",{className:"flex justify-center mt-2 space-x-2 text-xs md:text-base md:mt-4 md:space-x-4 md:h-12",children:[Object(w.jsx)("button",{disabled:t||!o,hidden:i,type:"button",className:"p-2 tracking-wider text-white bg-green-600 rounded-lg shadow-md transform transition  hover:bg-green-500 hover:-translate-y-0.5 md:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-40 disabled:transform-none disabled:bg-green-600 disabled:cursor-default",onClick:n,children:"Solve"}),Object(w.jsx)("button",{hidden:!i,type:"button",className:"p-2 tracking-wider text-white bg-green-600 rounded-lg shadow-md transform transition  hover:bg-green-500 hover:-translate-y-0.5 md:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-40 disabled:transform-none disabled:bg-green-600 disabled:cursor-default",onClick:s,children:l?"Show measurements":"Show solution"}),Object(w.jsx)("button",{type:"button",disabled:t||81===c,className:"p-2 tracking-wider text-white bg-red-500 rounded-lg transform transition  hover:bg-red-400 hover:-translate-y-0.5 shadow-md md:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-40 disabled:transform-none disabled:bg-red-500 disabled:cursor-default",onClick:r,children:"Reset"})]})},F=function(e){var t=e.isVerified,n=e.result,r=n||{},s=r.isSolutionFound,c=r.error,o=r.statistics||{},i=o.elapsedTime,l=void 0===i?0:i,a=o.nbrOfIteration;return n?Object(w.jsxs)("div",{className:"w-full h-full py-4 mx-auto text-center",children:[Object(w.jsx)("span",{className:"text-3xl font-bold text-red-400 animate-pulse",children:!1===t?"Invalid Sudoku":""}),Object(w.jsxs)("div",{hidden:!t,className:"flex flex-col justify-center h-full mx-auto text-xs md:text-2xl text-gray-50",children:[Object(w.jsx)("h3",{className:"h-16 text-2xl font-semibold md:h-36 md:text-4xl",children:s?"Solution found \ud83d\ude0a":"No solution \ud83d\ude22"}),Object(w.jsxs)("span",{hidden:!c,children:[" Error happened: ",JSON.stringify(c)]}),Object(w.jsxs)("span",{hidden:!l,children:["Elapsed time: ",l.toFixed(2)," msec"]}),Object(w.jsxs)("span",{hidden:!a,children:["Iterations: ",a]})]})]}):null},T=function(e){var t=e.show,n=e.children;return Object(w.jsx)("span",{className:"absolute inset-0 grid text-white bg-black ".concat(t?"opacity-75":"opacity-0"," transition-opacity ease-in-out duration-150 md:text-3xl place-items-center"),children:n})},B=["0","1","2","3","4","5","6","7","8","9"],D=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(!1),o=Object(i.a)(c,2),l=o[0],a=o[1],d=Object(r.useState)(""),u=Object(i.a)(d,2),b=u[0],f=u[1],h=Object(r.useState)(null),m=Object(i.a)(h,2),x=m[0],g=m[1],p=Object(r.useState)(null),O=Object(i.a)(p,2),N=O[0],I=O[1],A=Object(r.useState)(!1),R=Object(i.a)(A,2),E=R[0],D=R[1],L=81-n.length;Object(r.useEffect)((function(){81===n.length?g(n.includes("0")):g(!1)}),[n]);var P=function(){f(""),s(""),I(null),D(!1)},V=function(e){var t=e.key;if("Backspace"===t&&0!==n.length&&s(n.slice(0,n.length-1)),0===L||!B.includes(t))return null;s(n+t)};return Object(w.jsx)("div",{tabIndex:0,onKeyDown:V,className:"min-h-screen py-2 antialiased font-light min-w-min md:py-6 md:flex md:flex-col md:justify-center bg-gradient-to-b from-blue-400 to-blue-800 focus:outline-none font-base",children:Object(w.jsxs)("div",{className:"container mx-auto",children:[Object(w.jsx)(k,{}),Object(w.jsx)(S,{onPresetSelect:function(e){P(),f(e),s(e)},selected:b}),Object(w.jsx)(y,{hidden:!!N,onKeyDown:V,charsLeft:L}),Object(w.jsx)(C,{base:n,solution:(null===N||void 0===N?void 0:N.solution)||"",showResult:E,children:Object(w.jsx)(T,{show:l||!!N&&!E,children:Object(w.jsxs)(w.Fragment,{children:[l&&"Solving...",Object(w.jsx)(F,{isVerified:x,result:N})]})})}),Object(w.jsx)(M,{isSolving:l,onSolve:function(){return function(e){x&&(a(!0),v.create(e),setTimeout((function(){var e=j.solve(v);I(e),a(!1)}),150))}(n)},onReset:P,toggleShowResult:function(){return D(!E)},charsLeft:L,isVerified:x,hasResult:!!N,showResult:E})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};o.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(D,{})}),document.getElementById("root")),L()}},[[15,1,2]]]);
//# sourceMappingURL=main.ccd90e22.chunk.js.map