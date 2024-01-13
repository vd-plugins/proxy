(function(T,n,e,S,p,L,w){"use strict";const W=n.findByStoreName("ThemeStore");n.findByProps("triggerHaptic");const A=n.findByProps("colors","unsafe_rawColors"),U=A?.internal??A?.meta,m=n.findByProps("TextStyleSheet").TextStyleSheet,{View:ie,Text:M,Pressable:se}=L.General;n.findByProps("TableRow"),n.findByProps("ActionSheet")?.ActionSheet??n.find(function(t){return t.render?.name==="ActionSheet"}),n.findByProps("openLazy","hideActionSheet"),n.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),n.findByProps("ActionSheetRow")?.ActionSheetRow,n.findByName("Navigator")??n.findByProps("Navigator")?.Navigator,n.findByProps("getRenderCloseButton")?.getRenderCloseButton??n.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,n.findByProps("popModal","pushModal");const J=n.findByProps("useSearchControls"),C=n.findByProps("useSettingSearchQuery"),k=n.findByName("SettingSearchBar");n.findByProps("SvgXml"),n.findByProps("useInMainTabsExperiment","isInMainTabsExperiment");const H=n.find(function(t){return t?.WebView&&!t.default}).WebView;n.findByProps("Button","SegmentedControl");function V(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W.theme;return U.resolveSemanticColor(a,t)}Object.assign(function(t){let{searchContext:a,controls:s}=t;return e.React.createElement(e.ReactNative.ScrollView,{scrollEnabled:!1},e.React.createElement(J.default,{searchContext:a,controls:s},e.React.createElement(k,null)))},{useAdvancedSearch:function(t){const a=C.useSettingSearchQuery(),s=J.useSearchControls(t,!1,function(){});return e.React.useEffect(function(){return function(){C.setSettingSearchQuery(""),C.setIsSettingSearchActive(!1)}},[]),[a,s]}});const R=window.nativeModuleProxy.DCDFileManager??window.nativeModuleProxy.RTNFileManager;window.nativeModuleProxy.BundleUpdaterManager,window.nativeModuleProxy.MMKVManager,window.nativeModuleProxy.DCDSoundManager;var j;(function(t){function a(o){let{children:l,onPress:i}=o;return e.React.createElement(y,{variant:"text-md/bold",onPress:i},l)}t.Bold=a;function s(o){let{children:l,onPress:i}=o;return e.React.createElement(M,{style:{textDecorationLine:"underline"},onPress:i},l)}t.Underline=s})(j||(j={}));function y(t){let{variant:a,lineClamp:s,color:o,align:l,style:i,onPress:h,getChildren:r,children:g,liveUpdate:x}=t;const[N,D]=e.React.useReducer(function(v){return~v},0);return e.React.useEffect(function(){if(!x)return;const v=new Date().setMilliseconds(1e3);let b;const I=setTimeout(function(){D(),b=setInterval(D,1e3)},v-Date.now());return function(){clearTimeout(I),clearInterval(b)}},[]),e.React.createElement(M,{style:[a?m[a]:{},o?{color:V(S.semanticColors[o])}:{},l?{textAlign:l}:{},i??{}],numberOfLines:s,onPress:h},r?.()??g)}function X(t){let{onPress:a,onLongPress:s,icon:o,style:l,destructive:i,color:h}=t;const r=e.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:S.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:S.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:S.semanticColors.TEXT_DANGER}});return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:a,onLongPress:s},e.React.createElement(e.ReactNative.Image,{style:[typeof l=="string"?l==="header"?r.headerStyleIcon:r.cardStyleIcon:l,i&&r.destructiveIcon,h&&{tintColor:h}].filter(function(g){return!!g}),source:o}))}var $=`* {
  background-color: transparent !important;
  overflow: hidden !important;
}
#jsbox {
  width: 100vw !important;
  height: 100vh !important;
}`,G=`<!doctype html>
<html>
  <head>
    <script src="URL_JSDOS_JS"><\/script>
    <link rel="stylesheet" href="URL_JSDOS_CSS" />
  </head>
  <body>
    <div id="jsbox" />
  </body>
</html>
<script>
  const cache_wdosboxJs = URL_JSDOS_WDOSBOX_JS;

  const RealXMLHttpRequest = window.XMLHttpRequest;
  window.XMLHttpRequest = class FakeXMLHttpRequest extends RealXMLHttpRequest {
    open(method, url) {
      if (url === "wdosbox.js") return super.open(method, cache_wdosboxJs);
      else if (url === "wdosbox.wasm")
        return super.open(method, URL_JSDOS_WDOSBOX_WASM);
      else return super.open(method, url);
    }
  };

  const RealWorker = window.Worker;
  window.Worker = class FakeWorker extends RealWorker {
    constructor(url) {
      if (url === "wdosbox.js") return super(cache_wdosboxJs);
      else super(url);
    }
  };
<\/script>
<script>
  const element = document.createElement("style");
  element.appendChild(document.createTextNode(REP_WEBVIEW_CSS));
  document.head.appendChild(element);
<\/script>
<script>
  Dos(document.getElementById("jsbox"), {
    style: "none",
    noSideBar: true,
    noFullscreen: true,
    noSocialLinks: true,
  }).run(URL_JSDOS_DOOM_LINK);
<\/script>`;const q="https://raw.githubusercontent.com/nexpid/VendettaPlugins/main/plugins/doom/assets/download/",_="vendetta/doomPlugin/",d=["doom.jsdos","js-dos.css","js-dos.js","wdosbox.js","wdosbox.wasm"],z=["application/zip","text/css","text/javascript","text/javascript","application/octet-stream"];async function K(t){return await R.fileExists(`${R.getConstants().DocumentsDirPath}/${_+t}`)}async function Q(t,a){return t=_+t,await R.writeFile("documents",e.ReactNative.Platform.select({default:t,ios:R.saveFileToGallery?t:`Documents/${t}`}),a,"utf8")}async function Y(t){return await R.readFile(`${R.getConstants().DocumentsDirPath}/${_+t}`,"utf8")}const{View:O}=L.General,Z=n.findByProps("OrientationType","useOrientation");function ee(){const{width:t,height:a}=e.ReactNative.Dimensions.get("window"),s=e.NavigationNative.useNavigation(),o=Z.useOrientation()===1,{width:l}=e.React.useRef({width:o?a:t,height:o?t:a}).current,[i,h]=e.React.useState(null),[r,g]=e.React.useState(null),x=r?r.length>=d.length:null,N=e.React.useRef(null);e.React.useEffect(function(){if(r===null)Promise.all(d.map(function(c){return K(c)})).then(function(c){g(c.map(function(u,f){return d[f]}).filter(function(u,f){return c[f]}))});else{const c=d.findIndex(function(P){return!r.includes(P)});if(c===-1)return;const u=d[c];N.current?.abort();const f=new AbortController;N.current=f,fetch(q+u,{signal:f.signal}).then(function(P){return P.blob().then(function(ne){const B=new FileReader;B.addEventListener("error",function(){return w.showToast(`Failed to read ${u}!`,p.getAssetIDByName("Small"))}),B.addEventListener("load",function(){const F=";base64,",re=B.result.toString().split(F),ae=`data:${z[c]};base64,${re.slice(1).join(F)}`;Q(u,ae.toString()).then(function(){return g([...r,u])}).catch(function(){return w.showToast(`Failed to save ${u}!`,p.getAssetIDByName("Small"))})}),B.readAsDataURL(ne)}).catch(function(){return w.showToast(`Failed to parse ${u}!`,p.getAssetIDByName("Small"))})}).catch(function(){return w.showToast(`Failed to download ${u}!`,p.getAssetIDByName("Small"))})}},[r]),e.React.useEffect(function(){!r||r.length<d.length||i||Promise.all(r.map(function(c){return Y(c)})).then(function(c){const u=c.map(function(f,P){return[r[P],f]});h(Object.fromEntries(u))}).catch(function(){return w.showToast("Failed to fetch contents!",p.getAssetIDByName("Small"))})},[r]);const D=e.React.useRef(new e.ReactNative.Animated.Value(1)).current,v=e.React.useRef(0);e.React.useEffect(function(){v.current=setTimeout(function(){return e.ReactNative.Animated.timing(D,{toValue:.05,duration:250,easing:e.ReactNative.Easing.linear,useNativeDriver:!0}).start()},1500)},[]);const b=e.React.useRef(null);b.current=function(){!i&&!r||(h(null),g([]))};const I=s.addListener("focus",function(){I(),s.setOptions({headerRight:function(){return e.React.createElement(X,{onPress:function(){return b.current()},icon:p.getAssetIDByName("ic_message_delete"),style:"header"})}})}),E=e.stylesheet.createThemedStyleSheet({container:{backgroundColor:"#000",flex:1,justifyContent:"center",alignItems:"center"},webview:{backgroundColor:S.semanticColors.BG_MOD_SUBTLE,overflow:"hidden",borderRadius:2,aspectRatio:1442.8/901.75},webviewPortrait:{height:l,transform:[{rotate:"90deg"}]},webviewLandscape:{height:"100%"},webviewUnder:{position:"absolute",left:0,top:0,width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:4,flex:1},androidRipple:{color:S.semanticColors.ANDROID_RIPPLE,cornerRadius:2147483647}});return e.React.createElement(O,{style:E.container},e.React.createElement(O,{style:[E.webview,o?E.webviewLandscape:E.webviewPortrait]},i?e.React.createElement(H,{source:{html:G.replace(/REP_WEBVIEW_CSS/g,JSON.stringify($)).replace(/URL_JSDOS_JS/g,JSON.stringify(i["js-dos.js"]).slice(1,-1)).replace(/URL_JSDOS_CSS/g,JSON.stringify(i["js-dos.css"]).slice(1,-1)).replace(/URL_JSDOS_DOOM_LINK/g,JSON.stringify(i["doom.jsdos"])).replace(/URL_JSDOS_WDOSBOX_JS/g,JSON.stringify(i["wdosbox.js"])).replace(/URL_JSDOS_WDOSBOX_WASM/g,JSON.stringify(i["wdosbox.wasm"])),baseUrl:"https://localhost"},style:{width:"100%",height:"100%",backgroundColor:"#0000"}}):e.React.createElement(O,{style:E.webviewUnder},x===null?e.React.createElement(e.React.Fragment,null,e.React.createElement(y,{variant:"text-lg/semibold",color:"WHITE"},"Checking files...")):x?e.React.createElement(e.React.Fragment,null,e.React.createElement(y,{variant:"text-lg/semibold",color:"WHITE"},"Reading files...")):e.React.createElement(e.React.Fragment,null,e.React.createElement(y,{variant:"text-lg/semibold",color:"WHITE",align:"center"},"Downloading files (",r.length+1,"/",d.length,")",`
`,d[r.length]??"-"),e.React.createElement(y,{variant:"text-md/normal",color:"WHITE"},"This should only happen once")))))}const te=ee;return T.settings=te,T})({},vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts);
