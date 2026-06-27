"use strict";var d=function(e,n){return function(){try{return n||e((n={exports:{}}).exports,n),n.exports}catch(i){throw (n=0, i)}};};var s=d(function(V,m){
var h=require('@stdlib/ndarray-base-numel/dist'),x=require('@stdlib/ndarray-base-normalize-index/dist'),S=require('@stdlib/array-base-join/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function b(e,n,i,a){var o,v,f,t,r,u;if(o=e.length,t=x(n,o-1),t<0)throw new RangeError(l('2mzF8',o,n));if(v=i.length,f=h(i),f!==e[t])throw new RangeError(l('2mzKP',t,e[t],S(i,", ")));for(r=0;r<t;r++)a[r]=e[r];for(u=0;r<t+v;r++)a[r]=i[u],u+=1;if(u=t+1,u<o)for(;r<o+v-1;r++)a[r]=e[u],u+=1;return a}m.exports=b
});var q=d(function(y,g){
var w=require('@stdlib/array-base-zeros/dist'),R=s();function j(e,n,i){var a=w(e.length+i.length-1);return R(e,n,i,a),a}g.exports=j
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),E=s();D(c,"assign",E);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
