define("urlAppend",function(require,b,c){var d=function(a,b){var c=a.k,d=a.v,e=/^[a-z0-9\_\-\%\.\!\|]+$/i;return c&&d&&e.test(c)&&e.test(d)?b?"&"+c+"="+d:"?"+c+"="+d:""};c.exports=function(a){var i,j,b=a.url||"",c="",e=b.indexOf("#"),f=a.kvs||[],g=Object.prototype.toString.call(a.kvs),h="";if("[object Array]"===g)for(i=0,j=f.length;j>i;++i)h+=d(f[i],0==i?b.indexOf("?")>-1:1);else"[object Object]"===g&&(h+=d(f,b.indexOf("?")>-1));return e>-1&&(c=b.substring(e,b.length),b=b.substring(0,e)),h=b+h+c},window.$&&($.urlAppend=d)});