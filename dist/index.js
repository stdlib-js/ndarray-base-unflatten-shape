"use strict";var d=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var s=d(function(V,m){
var h=require('@stdlib/ndarray-base-numel/dist'),x=require('@stdlib/ndarray-base-normalize-index/dist'),S=require('@stdlib/array-base-join/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function b(e,n,t,a){var o,v,f,i,r,u;if(o=e.length,i=x(n,o-1),i<0)throw new RangeError(l('nullF8',o,n));if(v=t.length,f=h(t),f!==e[i])throw new RangeError(l("invalid argument. Product of the sizes must be equal to the size of the dimension to be unflattened. Dimension: %d. Size: %d. Value: `[%s]`.",i,e[i],S(t,", ")));for(r=0;r<i;r++)a[r]=e[r];for(u=0;r<i+v;r++)a[r]=t[u],u+=1;if(u=i+1,u<o)for(;r<o+v-1;r++)a[r]=e[u],u+=1;return a}m.exports=b
});var q=d(function(y,g){
var w=require('@stdlib/array-base-zeros/dist'),R=s();function j(e,n,t){var a=w(e.length+t.length-1);return R(e,n,t,a),a}g.exports=j
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),E=s();D(c,"assign",E);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
