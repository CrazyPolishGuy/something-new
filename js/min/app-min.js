$(document).foundation();var menu=document.getElementById("big-button"),block=document.getElementById("the-menu");menu.addEventListener("click",function(){menu.classList.contains("open-menu")?(menu.classList.remove("open-menu"),block.classList.remove("open-menu"),document.getElementById("top-2").style.fill="#000",document.getElementById("top-2").style.transition="all 10s ease",document.getElementById("mid-2").style.fill="#000",document.getElementById("dow-2").style.fill="#000",document.getElementById("mid-3").style.fill="#000",document.getElementById("mid-1").style.fill="#000",document.getElementById("mid-1").style.fill="#000",document.getElementById("top-1").style.fill="#000",document.getElementById("top-3").style.fill="#000",document.getElementById("dow-1").style.fill="#000",document.getElementById("dow-3").style.fill="#000",document.getElementById("main-button").style.transform="rotate(0deg)"):(menu.classList.add("open-menu"),block.classList.add("open-menu"),document.getElementById("top-2").style.fill="red",document.getElementById("mid-2").style.fill="red",document.getElementById("dow-2").style.fill="red",document.getElementById("mid-3").style.fill="red",document.getElementById("mid-1").style.fill="red",document.getElementById("mid-1").style.fill="red",document.getElementById("top-1").style.fill="transparent",document.getElementById("top-3").style.fill="transparent",document.getElementById("dow-1").style.fill="transparent",document.getElementById("dow-3").style.fill="transparent",document.getElementById("main-button").style.transform="rotate(45deg)")}),"document"in self&&("classList"in document.createElement("_")?!function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,l=arguments.length;for(n=0;l>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",l=t.Element[n],i=Object,s=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},r=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},d=function(t,e){if(""===e)throw new r("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new r("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,e)},m=function(t){for(var e=s.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],l=0,i=n.length;i>l;l++)this.push(n[l]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},c=m[n]=[],a=function(){return new m(this)};if(r[n]=Error[n],c.item=function(t){return this[t]||null},c.contains=function(t){return t+="",-1!==d(this,t)},c.add=function(){var t=arguments,e=0,n=t.length,l,i=!1;do l=t[e]+"",-1===d(this,l)&&(this.push(l),i=!0);while(++e<n);i&&this._updateClassName()},c.remove=function(){var t=arguments,e=0,n=t.length,l,i=!1,s;do for(l=t[e]+"",s=d(this,l);-1!==s;)this.splice(s,1),i=!0,s=d(this,l);while(++e<n);i&&this._updateClassName()},c.toggle=function(t,e){t+="";var n=this.contains(t),l=n?e!==!0&&"remove":e!==!1&&"add";return l&&this[l](t),e===!0||e===!1?e:!n},c.toString=function(){return this.join(" ")},i.defineProperty){var u={get:a,enumerable:!0,configurable:!0};try{i.defineProperty(l,e,u)}catch(f){-2146823252===f.number&&(u.enumerable=!1,i.defineProperty(l,e,u))}}else i[n].__defineGetter__&&l.__defineGetter__(e,a)}}(self));