define("remember",function(){var d,e,f,g;window.localStorage&&(d=location.protocol+"//"+location.host+location.pathname+location.search,window.onunload=function(){var a=document.body.scrollTop;localStorage[d]=a},e=parseInt(localStorage[d])||0,e&&(f=document.createElement("div"),g=document.documentElement.clientHeight||document.body.clientHeight,f.style.cssText="position:absolute; width:1px; height:1px; left:1px; top:"+(e+g-1)+"px;",document.body.appendChild(f)),document.body.scrollTop=e,delete localStorage[d])});