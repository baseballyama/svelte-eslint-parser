import{S as Y,i as Z,s as ee,O as x,P as U,e as R,t as ae,x as N,k as B,c as z,a as G,h as ie,y as O,d as E,m as H,b as Q,g as ne,G as y,z as V,j as re,Q as W,r as J,p as M,C as q,R as pe,n as de}from"../chunks/index-ccc6b4d6.js";import{M as X,_ as le}from"../chunks/svelte-eslint-parser-abb4ea24.js";import{A as ue,p as k}from"../chunks/json-8ab9e64b.js";function fe(p){let l,i,c,o,m,j,g,f,$,v,h,T;function A(r){p[8](r)}let w={};p[0]!==void 0&&(w.options=p[0]),o=new ue({props:w}),x.push(()=>U(o,"options",A));function P(r){p[10](r)}let L={language:"html"};p[1]!==void 0&&(L.code=p[1]),f=new X({props:L}),p[9](f),x.push(()=>U(f,"code",P)),f.$on("focusEditorText",p[11]),f.$on("changeCursorPosition",p[12]);let S={code:p[2].json,language:"json",readOnly:!0};return h=new X({props:S}),p[13](h),h.$on("focusEditorText",p[14]),h.$on("changeCursorPosition",p[15]),{c(){l=R("div"),i=R("div"),c=ae(p[3]),N(o.$$.fragment),j=B(),g=R("div"),N(f.$$.fragment),v=B(),N(h.$$.fragment),this.h()},l(r){l=z(r,"DIV",{class:!0});var _=G(l);i=z(_,"DIV",{class:!0});var b=G(i);c=ie(b,p[3]),O(o.$$.fragment,b),b.forEach(E),j=H(_),g=z(_,"DIV",{class:!0});var I=G(g);O(f.$$.fragment,I),v=H(I),O(h.$$.fragment,I),I.forEach(E),_.forEach(E),this.h()},h(){Q(i,"class","ast-tools svelte-116kuo8"),Q(g,"class","ast-explorer svelte-116kuo8"),Q(l,"class","ast-explorer-root svelte-116kuo8")},m(r,_){ne(r,l,_),y(l,i),y(i,c),V(o,i,null),y(l,j),y(l,g),V(f,g,null),y(g,v),V(h,g,null),T=!0},p(r,[_]){(!T||_&8)&&re(c,r[3]);const b={};!m&&_&1&&(m=!0,b.options=r[0],W(()=>m=!1)),o.$set(b);const I={};!$&&_&2&&($=!0,I.code=r[1],W(()=>$=!1)),f.$set(I);const C={};_&4&&(C.code=r[2].json),h.$set(C)},i(r){T||(J(o.$$.fragment,r),J(f.$$.fragment,r),J(h.$$.fragment,r),T=!0)},o(r){M(o.$$.fragment,r),M(f.$$.fragment,r),M(h.$$.fragment,r),T=!1},d(r){r&&E(l),q(o),p[9](null),q(f),p[13](null),q(h)}}}function he(p,l,i){let c={showLocations:!1},o=`<script>
    let a = 1; 
    let b = 2;
<\/script>

<input type="number" bind:value={a}>
<input type="number" bind:value={b}>

<p>{a} + {b} = {a + b}</p>`,m={},j="",g="",f,$;function v(n,e){let t;const s=Date.now();try{t=le(e).scopeManager}catch(a){i(2,m={json:JSON.stringify({message:a.message,...a}),locations:[]}),i(3,g=`${Date.now()-s}ms`);return}i(3,g=`${Date.now()-s}ms`);const d=w(n,t);i(2,m=d)}function h(n){j=n}function T(n,e){if(j!==e||!m)return;const t=n.position;if(e==="source"){const a=s(m,"sourceLoc");a&&f.setCursorPosition(a.jsonLoc)}else if(e==="json"){const a=s(m,"jsonLoc");a&&$.setCursorPosition(a.sourceLoc,{columnOffset:1})}function s(a,u){let D=a.locations.find(F=>d(F[u],t)),K;for(;D&&(K=D.locations.find(F=>d(F[u],t)));)D=K;return D}function d(a,u){return a.start.line<u.lineNumber&&u.lineNumber<a.end.line?!0:a.start.line===u.lineNumber&&u.lineNumber===a.end.line?a.start.column<=u.column&&u.column<a.end.column:a.start.line===u.lineNumber&&u.lineNumber<a.end.line?a.start.column<=u.column:a.start.line<u.lineNumber&&u.lineNumber===a.end.line?u.column<a.end.column:!1}}class A{constructor(){this.json="",this.jsonPosition={line:1,column:1},this.locations=[],this._indentOffset=0,this._stack=null}pushNode(e){this._stack={upper:this._stack,node:e,jsonLocStart:{...this.jsonPosition},locations:[]}}popNode(){const e={node:this._stack.node,sourceLoc:this._stack.node.loc,jsonLoc:{start:this._stack.jsonLocStart,end:{...this.jsonPosition}},locations:this._stack.locations};this._stack=this._stack.upper,this._stack?this._stack.locations.push(e):this.locations.push(e)}appendText(e){const t=String(e);this.json+=t;const s=t.split(`
`);return s.length>1?this.jsonPosition={line:this.jsonPosition.line+s.length-1,column:s.pop().length+1}:this.jsonPosition.column+=t.length,this}appendIndent(){return this.appendText("  ".repeat(this._indentOffset))}indent(){return this._indentOffset++,this}outdent(){return this._indentOffset--,this}}function w(n,e){const t=new A;return P(n,t,e.globalScope),t}function P(n,e,t){e.appendIndent().appendText(`{
`).indent(),e.appendIndent().appendText(`"type": "${t.type}",
`),e.appendIndent().appendText(`"variables": [
`).indent(),t.variables.forEach((s,d)=>{L(n,e,s),t.variables.length-1!==d&&e.appendText(","),e.appendText(`
`)}),e.outdent().appendIndent().appendText(`],
`),e.appendIndent().appendText(`"references": [
`).indent(),t.references.forEach((s,d)=>{S(n,e,s),t.references.length-1!==d&&e.appendText(","),e.appendText(`
`)}),e.outdent().appendIndent().appendText(`],
`),e.appendIndent().appendText(`"childScopes": [
`).indent(),t.childScopes.forEach((s,d)=>{P(n,e,s),t.childScopes.length-1!==d&&e.appendText(","),e.appendText(`
`)}),e.outdent().appendIndent().appendText(`],
`),e.appendIndent().appendText(`"through": [
`).indent(),t.through.forEach((s,d)=>{S(n,e,s),t.through.length-1!==d&&e.appendText(","),e.appendText(`
`)}),e.outdent().appendIndent().appendText(`]
`),e.outdent().appendIndent().appendText("}")}function L(n,e,t){e.appendIndent().appendText(`{
`).indent(),e.appendIndent().appendText(`"name": "${t.name}",
`),e.appendIndent().appendText(`"identifiers": [
`).indent(),t.identifiers.forEach((s,d)=>{e.appendIndent(),k(n,e,s),t.identifiers.length-1!==d&&e.appendText(","),e.appendText(`
`)}),e.outdent().appendIndent().appendText(`],
`),e.appendIndent().appendText(`"defs": [
`).indent(),t.defs.forEach((s,d)=>{e.appendIndent(),k(n,e,s),t.defs.length-1!==d&&e.appendText(","),e.appendText(`
`)}),e.outdent().appendIndent().appendText(`],
`),e.appendIndent().appendText(`"references": [
`).indent(),t.references.forEach((s,d)=>{S(n,e,s),t.references.length-1!==d&&e.appendText(","),e.appendText(`
`)}),e.outdent().appendIndent().appendText(`]
`),e.outdent().appendIndent().appendText("}")}function S(n,e,t){var s,d,a,u;e.appendIndent().appendText(`{
`).indent(),e.appendIndent().appendText('"identifier": '),k(n,e,t.identifier),e.appendText(`,
`),e.appendIndent().appendText('"from": '),k(n,e,t.from.type),e.appendText(`,
`),e.appendIndent().appendText('"resolved": '),k(n,e,(a=(d=(s=t.resolved)==null?void 0:s.defs[0])==null?void 0:d.name)!=null?a:null),e.appendText(`,
`),e.appendIndent().appendText('"init": '),k(n,e,(u=t.init)!=null?u:null),e.appendText(`
`),e.outdent().appendIndent().appendText("}")}function r(n){c=n,i(0,c)}function _(n){x[n?"unshift":"push"](()=>{$=n,i(5,$)})}function b(n){o=n,i(1,o)}const I=()=>h("source"),C=n=>T(n.detail,"source");function te(n){x[n?"unshift":"push"](()=>{f=n,i(4,f)})}const oe=()=>h("json"),se=n=>T(n.detail,"json");return p.$$.update=()=>{p.$$.dirty&3&&v(c,o)},[c,o,m,g,f,$,h,T,r,_,b,I,C,te,oe,se]}class ce extends Y{constructor(l){super(),Z(this,l,he,fe,ee,{})}}function me(p){let l,i,c;return i=new ce({}),{c(){l=B(),N(i.$$.fragment),this.h()},l(o){pe('[data-svelte="svelte-1whbk5c"]',document.head).forEach(E),l=H(o),O(i.$$.fragment,o),this.h()},h(){document.title="ScopeManager | svelte-eslint-parser"},m(o,m){ne(o,l,m),V(i,o,m),c=!0},p:de,i(o){c||(J(i.$$.fragment,o),c=!0)},o(o){M(i.$$.fragment,o),c=!1},d(o){o&&E(l),q(i,o)}}}const Ie=!0;class $e extends Y{constructor(l){super(),Z(this,l,null,me,ee,{})}}export{$e as default,Ie as prerender};
