(this.webpackJsonpjcalculator=this.webpackJsonpjcalculator||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(4),l=a.n(i),u=(a(9),a(10),a(2)),c="",r=a(0),o=function(e){var t=e.setDisplayValue,a=e.setCurrentValue,n=e.setOperation;return Object(r.jsx)("button",{className:"button operation",onClick:function(){t(0),a(0),n(c)},children:"AC"})},j=function(e){var t=e.setDisplayValue,a=e.displayValueAsString;return Object(r.jsx)("button",{className:"button operation",onClick:function(){-1===a.indexOf(".")&&t(a+c+".")},children:","})},b=function(e){var t=e.setCurrentValue,a=e.setWaitingValue,n=e.displayValue,s=e.currentValue,i=e.operation,l=e.waitingValue,u=e.displayResult,o=e.setOperation;return Object(r.jsx)("button",{className:"button operation",onClick:function(){l||(i!==c?(u(),"/"===i&&t(s/n),a(!0)):t(n),a(!0)),o("/")},children:Object(r.jsx)("i",{className:"fas fa-divide"})})},p=function(e){var t=e.displayResult;return Object(r.jsx)("button",{className:"button operation",onClick:t,children:Object(r.jsx)("i",{className:"fas fa-equals"})})},d=function(e){var t=e.setCurrentValue,a=e.setWaitingValue,n=e.displayValue,s=e.currentValue,i=e.operation,l=e.displayResult,u=e.waitingValue,o=e.setOperation;return Object(r.jsx)("button",{className:"button operation",onClick:function(){u||(i!==c?(l(),"-"===i&&t(s-n),a(!0)):t(n),a(!0)),o("-")},children:Object(r.jsx)("i",{className:"fas fa-minus"})})},O=function(e){var t=e.setCurrentValue,a=e.displayValue,n=e.setWaitingValue,s=e.currentValue,i=e.operation,l=e.waitingValue,u=e.displayResult,o=e.setOperation;return Object(r.jsx)("button",{className:"button operation",onClick:function(){l||(i!==c?(u(),"*"===i&&t(s*a),n(!0)):t(a),n(!0)),o("*")},children:Object(r.jsx)("i",{className:"fas fa-times"})})},V=function(e){var t=e.displayValue,a=e.setWaitingValue,n=e.setDisplayValue,s=e.currentValue,i=e.checkResultLength;return Object(r.jsx)("button",{className:"button operation",onClick:function(){n(i(0===s?t/100:t*s/100)),a(!0)},children:Object(r.jsx)("i",{className:"fas fa-percentage"})})},x=function(e){var t=e.displayValue,a=e.setWaitingValue,n=e.setCurrentValue,s=e.waitingValue,i=e.operation,l=e.displayResult,u=e.setOperation,o=e.displayValueAsNumber,j=e.currentValueAsNumber;return Object(r.jsx)("button",{className:"button operation",onClick:function(){s||(i!==c?(l(),"+"===i&&n(j+o),a(!0)):n(t),a(!0)),u("+")},children:Object(r.jsx)("i",{className:"fas fa-plus"})})},f=function(e){var t=e.displayValue,a=e.setDisplayValue,n=e.checkResultLength;return Object(r.jsx)("button",{className:"button operation",onClick:function(){a(n(-1*t))},children:"\xb1"})},h=function(e){var t=e.setDisplayValue,a=e.displayValue,n=e.waitingValue,s=e.setWaitingValue,i=e.setCurrentValue,l=e.currentValue,u=e.operation,h=e.setOperation,y=Number(l),m=Number(a),g=String(a),N=function(e){0===a||n?(t(e),s(!1)):g.length<13&&t(g+e)},C=function(e){var t=String(e);return t.length>13?t.slice(0,12)+"e":e},k=function(e){t(C(e)),i(e),s(!0),h(c)},v=function(){switch(u){case"+":k(m+y);break;case"-":k(l-a);break;case"*":k(l*a);break;case"/":k(l/a);break;case"%":k(l*a)}};return Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(o,{setDisplayValue:t,setCurrentValue:i,setOperation:h}),Object(r.jsx)(f,{displayValue:a,setDisplayValue:t,checkResultLength:C}),Object(r.jsx)(V,{displayValue:a,setWaitingValue:s,currentValue:l,setDisplayValue:t,checkResultLength:C}),Object(r.jsx)(b,{displayValue:a,setWaitingValue:s,setCurrentValue:i,currentValue:l,operation:u,waitingValue:n,displayResult:v,setOperation:h}),Object(r.jsx)("button",{onClick:function(){return N(7)},children:" 7 "}),Object(r.jsx)("button",{onClick:function(){return N(8)},children:" 8 "}),Object(r.jsx)("button",{onClick:function(){return N(9)},children:" 9 "}),Object(r.jsx)(O,{displayValue:a,setWaitingValue:s,setCurrentValue:i,currentValue:l,operation:u,waitingValue:n,displayResult:v,setOperation:h}),Object(r.jsx)("button",{onClick:function(){return N(4)},children:" 4 "}),Object(r.jsx)("button",{onClick:function(){return N(5)},children:" 5 "}),Object(r.jsx)("button",{onClick:function(){return N(6)},children:" 6 "}),Object(r.jsx)(d,{displayValue:a,setWaitingValue:s,setCurrentValue:i,currentValue:l,operation:u,waitingValue:n,displayResult:v,setOperation:h}),Object(r.jsx)("button",{onClick:function(){return N(1)},children:" 1 "}),Object(r.jsx)("button",{onClick:function(){return N(2)},children:" 2 "}),Object(r.jsx)("button",{onClick:function(){return N(3)},children:" 3 "}),Object(r.jsx)(x,{displayValue:a,setWaitingValue:s,setCurrentValue:i,operation:u,waitingValue:n,displayResult:v,setOperation:h,currentValueAsNumber:y,displayValueAsNumber:m}),Object(r.jsx)("button",{onClick:function(){return N(0)},children:" 0 "}),Object(r.jsx)(j,{setDisplayValue:t,displayValueAsString:g}),Object(r.jsx)(p,{displayResult:v})]})},y=function(e){var t=e.displayValue;return Object(r.jsx)("div",{className:"display",children:t})},m=function(){return Object(r.jsx)("div",{className:"logo",children:"JCalculator"})},g=function(){return Object(r.jsxs)("div",{className:"solar-battery",children:[Object(r.jsx)("span",{className:"solar-cell"}),Object(r.jsx)("span",{className:"solar-cell"}),Object(r.jsx)("span",{className:"solar-cell"}),Object(r.jsx)("span",{className:"solar-cell"})]})},N=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(0),l=Object(u.a)(i,2),o=l[0],j=l[1],b=Object(n.useState)(!1),p=Object(u.a)(b,2),d=p[0],O=p[1],V=Object(n.useState)(c),x=Object(u.a)(V,2),f=x[0],N=x[1];return Object(r.jsx)("div",{className:"main-view",children:Object(r.jsxs)("div",{className:"calculator-body",children:[Object(r.jsxs)("div",{className:"upper-section",children:[Object(r.jsx)(g,{}),Object(r.jsx)(m,{})]}),Object(r.jsx)("div",{className:"middle-section",children:Object(r.jsx)(y,{displayValue:a})}),Object(r.jsx)("div",{className:"bottom-section",children:Object(r.jsx)(h,{setDisplayValue:s,displayValue:a,waitingValue:d,setWaitingValue:O,setCurrentValue:j,currentValue:o,operation:f,setOperation:N})})]})})};var C=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(N,{})})};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0d8b3cbd.chunk.js.map