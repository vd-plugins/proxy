(function(u,h,n,s,F,a,d){"use strict";function y(r){const e=new URL(r).pathname;return e.substring(e.lastIndexOf("/")+1)}function w(r,e){const t=Math.max(...Object.values(r).map(function(f){return f.order}));return{format:e.format,src:e.src,url:e.url,width:e.width,height:e.height,order:t+1}}function G(r){const e=[];for(let t of r.embeds)t.type==="gifv"?e.push({src:t.video.url,url:t.url,width:t.thumbnail.width,height:t.thumbnail.height,format:2}):t.type==="image"&&t.url.endsWith(".gif")&&e.push({src:t.image.url,url:t.url,width:t.image.width,height:t.image.height,format:1});for(let t of r.attachments)t.url.endsWith(".gif")&&e.push({src:t.url,url:t.url,width:t.width,height:t.height,format:1});return e}const{FormRow:I,FormIcon:b}=F.Forms,l=n.findByProps("openLazy","hideActionSheet"),{addFavoriteGIF:A,removeFavoriteGIF:R}=n.findByProps("addFavoriteGIF","removeFavoriteGIF"),B=n.findByStoreName("UserSettingsProtoStore"),c=B.frecencyWithoutFetchingLatest,L=h.before("openLazy",l,function(r){const[e,t,f]=r;t==="MessageLongPressActionSheet"&&e.then(function(D){const P=h.after("default",D,function(E,$){s.React.useEffect(function(){return function(){P()}},[]);let[k,m]=$.props?.children?.props?.children?.props?.children;const g=k?.props?.message??f?.message;if(!m||!g)return;const v=G(g);if(v.length)for(let i of v){const p=c.favoriteGifs.gifs[i.src]!==void 0||c.favoriteGifs.gifs[i.url]!==void 0,o=y(i.url);m.unshift(s.React.createElement(I,{label:p?`Remove ${o} from Favorites`:`Add ${o} to Favorites`,leading:s.React.createElement(b,{style:{opacity:1},source:a.getAssetIDByName("ic_star_filled")}),onPress:function(){l.hideActionSheet(),p?(R(i.url),d.showToast(`Removed ${o} from Favorites`,a.getAssetIDByName("ic_checkmark"))):(A(w(c.favoriteGifs.gifs,i)),d.showToast(`Added ${o} to Favorites`,a.getAssetIDByName("ic_checkmark")))}}))}})})}),S=function(){return L()};return u.onUnload=S,u})({},vendetta.patcher,vendetta.metro,vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.ui.toasts);
