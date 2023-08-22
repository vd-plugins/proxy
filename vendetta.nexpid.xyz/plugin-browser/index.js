(function(b,t,o,R,Z,y,d,N,P,B,E,ee,te,w){"use strict";const ne=d.findByStoreName("ThemeStore"),re=d.findByProps("colors","meta"),{TextStyleSheet:ie}=d.findByProps("TextStyleSheet"),{View:Ce,Text:k,Pressable:_e}=R.General;d.find(function(e){return e.render?.name==="ActionSheet"}),d.findByProps("openLazy","hideActionSheet"),d.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),d.findByName("Navigator"),d.findByProps("getRenderCloseButton"),d.findByProps("popModal","pushModal");function ae(e){return re.meta.resolveSemanticColor(ne.theme,e)}var M;(function(e){function n(a){let{children:i,onPress:c}=a;return t.React.createElement(m,{variant:"text-md/bold",onPress:c},i)}e.Bold=n;function r(a){let{children:i,onPress:c}=a;return t.React.createElement(k,{style:{textDecorationLine:"underline"},onPress:c},i)}e.Underline=r})(M||(M={}));function m(e){let{variant:n,lineClamp:r,color:a,align:i,style:c,onPress:l,getChildren:g,children:f,liveUpdate:s}=e;const[u,h]=t.React.useReducer(function(p){return~p},0);return t.React.useEffect(function(){if(!s)return;const p=new Date().setMilliseconds(1e3);let S,I;return I=setTimeout(function(){h(),S=setInterval(h,1e3)},p-Date.now()),function(){clearTimeout(I),clearInterval(S)}},[]),t.React.createElement(k,{style:[n?ie[n]:{},a?{color:ae(N.semanticColors[a])}:{},i?{textAlign:i}:{},c??{}],numberOfLines:r,onPress:l},g?.()??f)}function L(e){let{onPress:n,onLongPress:r,icon:a,style:i,destructive:c}=e;const l=t.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:N.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:N.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:N.semanticColors.TEXT_DANGER}});return t.React.createElement(t.ReactNative.TouchableOpacity,{onPress:n,onLongPress:r},t.React.createElement(t.ReactNative.Image,{style:[typeof i=="string"?i==="header"?l.headerStyleIcon:l.cardStyleIcon:i,c&&l.destructiveIcon].filter(function(g){return!!g}),source:a}))}let A={};function D(){return!Object.keys(A)[0]||!_.pluginCache?.[0]?[]:Object.entries(A).map(function(e){let[n,r]=e;return _.pluginCache?.includes(n)?B.plugins.plugins[n]&&B.plugins.plugins[n].manifest.hash!==r?[n,"update"]:void 0:[n,"new"]}).filter(function(e){return!!e})}function se(){_.pluginCache=Object.keys(A)}async function j(){const e=await(await P.safeFetch(F,{cache:"no-store"})).json();A=Object.fromEntries(e.map(function(n){return[`https://vd-plugins.github.io/proxy/${n.vendetta.original}`,n.hash]}))}function ce(){const e=setInterval(j,6e5);return j(),function(){return clearInterval(e)}}const{FormRow:x}=R.Forms,O=t.stylesheet.createThemedStyleSheet({card:{backgroundColor:N.semanticColors.BACKGROUND_SECONDARY,borderRadius:5},header:{padding:0,backgroundColor:N.semanticColors.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"}});function oe(e){return t.React.createElement(t.ReactNative.View,{style:[O.card,{marginBottom:10}]},t.React.createElement(x,{style:O.header,label:e.headerLabel,leading:e.headerIcon&&t.React.createElement(x.Icon,{source:e.headerIcon})}),t.React.createElement(x,{label:e.descriptionLabel,trailing:t.React.createElement(t.ReactNative.View,{style:O.actions},e.actions?.map(function(n){let{icon:r,onPress:a,onLongPress:i,destructive:c}=n;return t.React.createElement(L,{icon:r,onPress:a,onLongPress:i,style:"card",destructive:c??!1})}))}))}const{View:V}=R.General,H=t.stylesheet.createThemedStyleSheet({main:{marginRight:16,flexGrow:0},content:{backgroundColor:N.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND,borderRadius:16,marginLeft:8,paddingHorizontal:8}});function Y(e){let{text:n,marginLeft:r}=e;return React.createElement(V,{style:[H.main,r?{marginLeft:16,marginRight:0}:{}]},React.createElement(V,{style:H.content},React.createElement(m,{variant:"eyebrow",color:"TEXT_NORMAL"},n)))}const{showUserProfile:z}=d.findByProps("showUserProfile"),{fetchProfile:K}=d.findByProps("fetchProfile"),$=d.findByStoreName("UserStore");function le(e){let{userId:n,color:r,loadUsername:a,children:i}=e;const[c,l]=t.React.useState(!1);return t.React.useEffect(function(){return!c&&a&&($.getUser(n)?l($.getUser(n).username):K(n).then(function(g){return l(g.user.username)}))},[a]),t.React.createElement(m,{variant:"text-md/bold",color:r??"TEXT_NORMAL",onPress:function(){return $.getUser(n)?z({userId:n}):K(n).then(function(){return z({userId:n})})}},a?`@${c??"..."}`:i)}function ue(e){return e.endsWith("/")?e:e+"/"}const C={origin:/^([^/]+)\/(.*)/,multiplePluginGitio:/^(.*?)(?=\.)\.github\.io\/(.*?)(?=\/)\/(.*)/,singlePluginGitio:/^(.*?)(?=\.)\.github\.io\/(.*)/,githubReleases:/^github\.com\/(.*?)(?=\/)\/(.*?)(?=\/)\/releases/},X={"vendetta.nexpid.xyz":function(e){return`https://github.com/nexpid/VendettaPlugins/tree/master/plugins/${e.join("/")}`},"vendetta.sdh.gay":function(e){return`https://github.com/sdhhhhh/vd-repo/tree/master/plugins/${e.join("/")}`},"plugins.obamabot.me":function(e){return`https://github.com/WolfPlugs/${e[0]}/tree/master/${e.slice(1).join("/")}`},"mugman.catvibers.me":function(e){return`https://github.com/mugman174/${e[0]}/tree/master/plugins/${e.slice(1).join("/")}`}};function de(e){const n=e.match(C.multiplePluginGitio);if(n?.[0])return`https://github.com/${n[1]}/${n[2]}/tree/master/plugins/${n[3]}`;const r=e.match(C.singlePluginGitio)??e.match(C.githubReleases);if(r?.[0])return`https://github.com/${r[1]}/${r[2]}`;const[a,i,c]=e.match(C.origin);if(X[i])return X[i](c.split("/"))}async function fe(e){const n=e.enabled;for(let r=0;r<2;r++)n&&E.stopPlugin(e.id,!1),await E.fetchPlugin(e.id),n&&await E.startPlugin(e.id)}const G=Symbol.for("vendetta.storage.emitter"),ge=!!E.plugins[G]&&!!ee.themes[G];function he(e){const[n,r]=t.React.useState(!!E.plugins[e]),a=E.plugins[G],i=function(){return r(!!E.plugins[e])};return t.React.useEffect(function(){return a.on("SET",i),a.on("DEL",i),function(){a.off("SET",i),a.off("DEL",i)}}),n}const{View:pe}=R.General;function Re(e){let{item:n,index:r,changes:a}=e;const i=ue(`https://vd-plugins.github.io/proxy/${n.vendetta.original}`),c=he(i),l=a.find(function(s){return s[0]===i}),g=de(n.vendetta.original),f=[];return g&&f.push({icon:o.getAssetIDByName("img_account_sync_github_white"),onPress:function(){return t.url.openURL(g)},onLongPress:function(){t.clipboard.setString(g),y.showToast("Copied GitHub link",o.getAssetIDByName("toast_copy_link"))}}),t.React.createElement(t.React.Fragment,null,t.React.createElement(oe,{index:r,headerLabel:t.React.createElement(pe,{style:{flexDirection:"row"}},l&&t.React.createElement(Y,{text:l[1]==="new"?"New":"Upd"}),t.React.createElement(m,{variant:"text-md/semibold",color:"HEADER_PRIMARY"},n.name,n.authors[0]&&" by ",...n.authors.map(function(s,u,h){return t.React.createElement(t.React.Fragment,null,t.React.createElement(le,{userId:s.id,color:"TEXT_LINK"},s.name),u!==h.length-1&&", ")}))),headerIcon:o.getAssetIDByName(n.vendetta.icon),descriptionLabel:n.description,actions:i.includes("plugin-browser")?f:c?[E.plugins[i]?.manifest.hash!==n.hash&&{icon:o.getAssetIDByName("ic_sync_24px"),onPress:function(){fe(i).then(function(){return y.showToast(`Successfully updated ${n.name}`,o.getAssetIDByName("ic_sync_24px"))}).catch(function(){return y.showToast(`Failed to update ${n.name}!`,o.getAssetIDByName("Small"))})}},{icon:o.getAssetIDByName("ic_message_delete"),destructive:!0,onPress:async function(){try{E.removePlugin(i),y.showToast(`Successfully deleted ${n.name}`,o.getAssetIDByName("ic_message_delete"))}catch{y.showToast(`Failed to delete ${n.name}!`,o.getAssetIDByName("Small"))}},onLongPress:function(){t.clipboard.setString(n.vendetta.original),y.showToast("Copied unproxied link",o.getAssetIDByName("toast_copy_link"))}},...f].filter(function(s){return!!s}):[{icon:o.getAssetIDByName("ic_download_24px"),onPress:async function(){E.installPlugin(i,!0).then(function(){y.showToast(`Successfully installed ${n.name}`,o.getAssetIDByName("toast_image_saved"))}).catch(function(s){return y.showToast(s?.message??`Failed to install ${n.name}!`,o.getAssetIDByName("Small"))})},onLongPress:function(){t.clipboard.setString(n.vendetta.original),y.showToast("Copied unproxied link",o.getAssetIDByName("toast_copy_link"))}},...f]}))}const{showSimpleActionSheet:ye}=d.findByProps("showSimpleActionSheet"),{View:Ee}=R.General;var v;(function(e){e.Newest="Newest",e.Oldest="Oldest",e.Alphabetical="Alphabetical",e.ReverseAlphabetical="Reverse Alphabetical"})(v||(v={}));let W,q;function J(){const e=t.NavigationNative.useNavigation();if(!ge)return te.showConfirmationAlert({title:"Can't use",content:"You must reinstall Vendetta first in order for Plugin Browser to function properly",confirmText:"Dismiss",confirmColor:"brand",onConfirm:function(){},isDismissable:!0}),e.goBack(),null;const[n]=t.React.useState(D()),[r,a]=t.React.useState(v.Newest),[i,c]=t.React.useState(),[l,g]=t.React.useState("");if(t.React.useEffect(function(){g(""),a(v.Newest)},[]),t.React.useEffect(function(){se()},[]),t.React.useEffect(function(){i||P.safeFetch(F,{cache:"no-store"}).then(function(s){return s.json().then(function(u){return c(u)}).catch(function(){return y.showToast("Failed to parse plugins",o.getAssetIDByName("Small"))})}).catch(function(){return y.showToast("Failed to fetch plugins",o.getAssetIDByName("Small"))})},[i]),W=function(){return i&&c(void 0)},q=function(){return i&&ye({key:"CardOverflow",options:Object.values(v).map(function(s){return{label:s,onPress:function(){return a(s)}}})})},e.addListener("focus",function(){e.setOptions({title:"Plugin Browser",headerRight:function(){return t.React.createElement(Ee,{style:{flexDirection:"row-reverse"}},t.React.createElement(L,{onPress:function(){return W?.()},icon:o.getAssetIDByName("ic_sync_24px"),style:"header"}),t.React.createElement(L,{onPress:function(){return q?.()},icon:o.getAssetIDByName("ic_filter"),style:"header"}))}})}),!i)return t.React.createElement(t.ReactNative.ActivityIndicator,{size:"large",style:{flex:1}});let f=i.filter(function(s){return s.name?.toLowerCase().includes(l)||s.authors?.some(function(u){return u.name?.toLowerCase().includes(l)})||s.description?.toLowerCase().includes(l)});return[v.Alphabetical,v.ReverseAlphabetical].includes(r)&&(f=f.sort(function(s,u){return s.name<u.name?-1:s.name>u.name?1:0})),[v.ReverseAlphabetical,v.Newest].includes(r)&&f.reverse(),t.React.createElement(t.ReactNative.FlatList,{ListHeaderComponent:t.React.createElement(R.Search,{style:{marginBottom:10},onChangeText:function(s){return g(s.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:f,renderItem:function(s){let{item:u,index:h}=s;return t.React.createElement(R.ErrorBoundary,null,t.React.createElement(Re,{item:u,index:h,changes:n}))},removeClippedSubviews:!0})}const{FormRow:U}=R.Forms;function Se(e){let{changes:n}=e;const r=t.NavigationNative.useNavigation();return React.createElement(R.ErrorBoundary,null,React.createElement(U,{label:React.createElement(m,{variant:"text-md/semibold",color:"HEADER_PRIMARY"},"Plugin Browser",n?React.createElement(Y,{text:n.toString(),marginLeft:!0}):React.createElement(React.Fragment,null)),leading:React.createElement(U.Icon,{source:o.getAssetIDByName("ic_search_items_24px")}),trailing:U.Arrow,onPress:function(){return r.push("VendettaCustomPage",{render:J})}}))}const{FormSection:ve}=R.Forms,Ne=d.findByName("getScreens"),Ie=d.findByName("UserSettingsOverviewWrapper",!1),Te=d.findByName("SettingsOverviewScreen",!1),T=d.findByProps("SETTING_RELATIONSHIPS","SETTING_RENDERER_CONFIGS"),be=d.findByProps("getSettingTitleConfig"),Pe=t.stylesheet.createThemedStyleSheet({container:{flex:1,backgroundColor:N.semanticColors.BACKGROUND_MOBILE_PRIMARY}});function me(e,n,r){const a=[],i=w.after("default",Ie,function(c,l){i();const g=P.findInReactTree(l.props.children,function(f){return f.type&&f.type.name==="UserSettingsOverview"});a.push(w.after("render",g.type.prototype,function(f,s){let{props:{children:u}}=s;const h=[t.i18n.Messages.BILLING_SETTINGS,t.i18n.Messages.PREMIUM_SETTINGS];u=P.findInReactTree(u,function(S){return S.children[1].type===ve}).children;const p=u.findIndex(function(S){return h.includes(S?.props.label)});e()&&u.splice(p===-1?4:p,0,n())}))},!0);if(a.push(i),Ne&&r){const c=`VENDETTA_PLUGIN_${t.lodash.snakeCase(r.key).toUpperCase()}`;a.push(w.after("default",Te,function(u,h){const p=h.props.sections,S=p.findIndex(function(I){return I.title==="Vendetta"});if(p[S]&&e()){const I={...p[S]};I.settings=[...I.settings,c],p[S]=I}})),a.push(w.after("getSettingTitleConfig",be,function(u,h){return{...h,...Object.fromEntries([[c,typeof r.title=="function"?r.title():r.title]])}}));const l=r.page.render,g=t.React.memo(function(u){let{navigation:h}=u;const p=h.addListener("focus",function(){p(),h.setOptions(P.without(r.page,"noErrorBoundary","render"))});return t.React.createElement(t.ReactNative.View,{style:Pe.container},r.page.noErrorBoundary?t.React.createElement(l,null):t.React.createElement(R.ErrorBoundary,null,t.React.createElement(l,null)))}),f=T.SETTING_RELATIONSHIPS;T.SETTING_RELATIONSHIPS={...f,...Object.fromEntries([[c,null]])};const s=T.SETTING_RENDERER_CONFIGS;T.SETTING_RENDERER_CONFIGS={...s,...Object.fromEntries([[c,{type:"route",icon:r.icon,screen:{route:`VendettaPlugin${t.lodash.chain(r.key).camelCase().upperFirst().value()}`,getComponent:function(){return g}}}]])},a.push(function(){T.SETTING_RELATIONSHIPS=f,T.SETTING_RENDERER_CONFIGS=s})}return function(){return a.forEach(function(c){return c()})}}function we(){let e=[];return e.push(me(function(){return!0},function(){return React.createElement(Se,{changes:D().filter(function(n){return n[1]==="new"}).length})},{key:B.plugin.manifest.name,icon:o.getAssetIDByName("ic_search_items_24px"),title:function(){const n=D().filter(function(r){return r[1]==="new"}).length;return`Plugin Browser${n?` (+${n})`:""}`},page:{render:J}})),e.push(ce()),function(){return e.forEach(function(n){return n()})}}const F="https://vd-plugins.github.io/proxy/plugins-full.json",_=Z.storage;let Q;var Ae={onLoad:function(){return Q=we()},onUnload:function(){return Q?.()}};return b.default=Ae,b.pluginsURL=F,b.vstorage=_,Object.defineProperty(b,"__esModule",{value:!0}),b})({},vendetta.metro.common,vendetta.ui.assets,vendetta.ui.components,vendetta.plugin,vendetta.ui.toasts,vendetta.metro,vendetta.ui,vendetta.utils,vendetta,vendetta.plugins,vendetta.themes,vendetta.ui.alerts,vendetta.patcher);
