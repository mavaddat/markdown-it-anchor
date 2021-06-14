var e=!1,n={false:"push",true:"unshift",after:"push",before:"unshift"};function t(t,r,a,i){var l;if(!e){var o="Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#todo-anchor-or-file";process&&process.emitWarning?process.emitWarning(o):console.warn(o),e=!0}var c=[Object.assign(new a.Token("link_open","a",1),{attrs:[].concat(r.permalinkClass?[["class",r.permalinkClass]]:[],[["href",r.permalinkHref(t,a)]],Object.entries(r.permalinkAttrs(t,a)))}),Object.assign(new a.Token("html_block","",0),{content:r.permalinkSymbol}),new a.Token("link_close","a",-1)];r.permalinkSpace&&a.tokens[i+1].children[n[r.permalinkBefore]](Object.assign(new a.Token("text","",0),{content:" "})),(l=a.tokens[i+1].children)[n[r.permalinkBefore]].apply(l,c)}function r(e){return"#"+e}function a(e){return{}}var i={class:"header-anchor",symbol:"#",renderHref:r,renderAttrs:a};function l(e){function n(t){return t=Object.assign({},n.defaults,t),function(n,r,a,i){return e(n,t,r,a,i)}}return n.defaults=Object.assign({},i),n}var o=l(function(e,t,r,a,i){var l,o=[Object.assign(new a.Token("link_open","a",1),{attrs:[].concat(t.class?[["class",t.class]]:[],[["href",t.renderHref(e,a)],["aria-hidden","true"]],Object.entries(t.renderAttrs(e,a)))}),Object.assign(new a.Token("text","",0),{content:t.symbol}),new a.Token("link_close","a",-1)];t.space&&a.tokens[i+1].children[n[t.placement]](Object.assign(new a.Token("text","",0),{content:" "})),(l=a.tokens[i+1].children)[n[t.placement]].apply(l,o)});Object.assign(o.defaults,{space:!0,placement:"after"});var c=l(function(e,n,t,r,a){var i=[Object.assign(new r.Token("link_open","a",1),{attrs:[].concat(n.class?[["class",n.class]]:[],[["href",n.renderHref(e,r)]],Object.entries(n.renderAttrs(e,r)))})].concat(r.tokens[a+1].children,[new r.Token("link_close","a",-1)]);r.tokens[a+1]=Object.assign(new r.Token("inline","",0),{children:i})}),s=l(function(e,t,r,a,i){var l;if(!["visually-hidden","aria-label","aria-describedby","aria-labelledby"].includes(t.style))throw new Error("`permalink.linkAfterHeader` called with unknown style option `"+t.style+"`");if(!["aria-describedby","aria-labelledby"].includes(t.style)&&!t.assistiveText)throw new Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `"+t.style+"` style");if("visually-hidden"===t.style&&!t.visuallyHiddenClass)throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");var o=a.tokens[i+1].children.filter(function(e){return"text"===e.type||"code_inline"===e.type}).reduce(function(e,n){return e+n.content},""),c=[],s=[];t.class&&s.push(["class",t.class]),s.push(["href",t.renderHref(e,a)]),s.push.apply(s,Object.entries(t.renderAttrs(e,a))),"visually-hidden"===t.style?(c.push(Object.assign(new a.Token("span_open","span",1),{attrs:[["class",t.visuallyHiddenClass]]}),Object.assign(new a.Token("text","",0),{content:t.assistiveText(o)}),new a.Token("span_close","span",-1)),t.space&&c[n[t.placement]](Object.assign(new a.Token("text","",0),{content:" "})),c[n[t.placement]](Object.assign(new a.Token("span_open","span",1),{attrs:[["aria-hidden","true"]]}),Object.assign(new a.Token("text","",0),{content:t.symbol}),new a.Token("span_close","span",-1))):c.push(Object.assign(new a.Token("text","",0),{content:t.symbol})),"aria-label"===t.style?s.push(["aria-label",t.assistiveText(o)]):["aria-describedby","aria-labelledby"].includes(t.style)&&s.push([t.style,e]);var u=[Object.assign(new a.Token("link_open","a",1),{attrs:s})].concat(c,[new a.Token("link_close","a",-1)]);(l=a.tokens).splice.apply(l,[i+3,0].concat(u))});function u(e,n,t,r){var a=e,i=r;if(t&&Object.prototype.hasOwnProperty.call(n,a))throw new Error("User defined `id` attribute `"+e+"` is not unique. Please fix it in your Markdown to continue.");for(;Object.prototype.hasOwnProperty.call(n,a);)a=e+"-"+i,i+=1;return n[a]=!0,a}function d(e,n){n=Object.assign({},d.defaults,n),e.core.ruler.push("anchor",function(e){var r,a={},i=e.tokens,l=Array.isArray(n.level)?(r=n.level,function(e){return r.includes(e)}):function(e){return function(n){return n>=e}}(n.level);i.forEach(function(r,o){if("heading_open"===r.type&&l(Number(r.tag.substr(1)))){var c=i[o+1].children.filter(function(e){return"text"===e.type||"code_inline"===e.type}).reduce(function(e,n){return e+n.content},""),s=r.attrGet("id");s=null==s?u(n.slugify(c),a,!1,n.uniqueSlugStartIndex):u(s,a,!0,n.uniqueSlugStartIndex),r.attrSet("id",s),r.attrSet("tabindex","-1"),"function"==typeof n.permalink?n.permalink(s,n,e,o):(n.permalink||n.renderPermalink&&n.renderPermalink!==t)&&n.renderPermalink(s,n,e,o),n.callback&&n.callback(r,{slug:s,title:c})}})})}Object.assign(s.defaults,{style:"visually-hidden",space:!0,placement:"after"}),d.permalink={__proto__:null,legacy:t,renderHref:r,renderAttrs:a,makePermalink:l,ariaHidden:o,headerLink:c,linkAfterHeader:s},d.defaults={level:1,slugify:function(e){return encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g,"-"))},uniqueSlugStartIndex:1,permalink:!1,renderPermalink:t,permalinkClass:o.defaults.class,permalinkSpace:o.defaults.space,permalinkSymbol:"¶",permalinkBefore:"before"===o.defaults.placement,permalinkHref:o.defaults.renderHref,permalinkAttrs:o.defaults.renderAttrs},module.exports=d;
//# sourceMappingURL=markdownItAnchor.js.map
