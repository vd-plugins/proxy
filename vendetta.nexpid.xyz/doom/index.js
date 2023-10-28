(function(T,e,A,ae,n,S,p,w){"use strict";var W=`<!DOCTYPE html>
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
<\/script>`,F=`* {
  background-color: transparent !important;
  overflow: hidden !important;
}
#jsbox {
  width: 100vw !important;
  height: 100vh !important;
}`;const U=n.findByStoreName("ThemeStore"),k=n.findByProps("colors","meta");n.findByProps("triggerHaptic");const H=n.findByProps("TextStyleSheet").TextStyleSheet,{View:se,Text:L,Pressable:oe}=A.General;n.findByProps("TableRow"),n.findByProps("ActionSheet")?.ActionSheet??n.find(function(t){return t.render?.name==="ActionSheet"}),n.findByProps("openLazy","hideActionSheet"),n.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),n.findByProps("ActionSheetRow")?.ActionSheetRow,n.findByName("Navigator")??n.findByProps("Navigator")?.Navigator,n.findByProps("getRenderCloseButton")?.getRenderCloseButton??n.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,n.findByProps("popModal","pushModal");const J=n.findByProps("useSearchControls"),B=n.findByProps("useSettingSearchQuery"),m=n.findByName("SettingSearchBar");n.findByProps("SvgXml"),n.findByProps("useInMainTabsExperiment","isInMainTabsExperiment");const V=n.find(function(t){return t?.WebView&&!t.default}).WebView;function X(t){return k.meta.resolveSemanticColor(U.theme,t)}Object.assign(function(t){let{searchContext:i,controls:s}=t;return e.React.createElement(e.ReactNative.ScrollView,{scrollEnabled:!1},e.React.createElement(J.default,{searchContext:i,controls:s},e.React.createElement(m,null)))},{useAdvancedSearch:function(t){const i=B.useSettingSearchQuery(),s=J.useSearchControls(t,!1,function(){});return e.React.useEffect(function(){return function(){B.setSettingSearchQuery(""),B.setIsSettingSearchActive(!1)}},[]),[i,s]}});var j;(function(t){function i(o){let{children:l,onPress:f}=o;return e.React.createElement(y,{variant:"text-md/bold",onPress:f},l)}t.Bold=i;function s(o){let{children:l,onPress:f}=o;return e.React.createElement(L,{style:{textDecorationLine:"underline"},onPress:f},l)}t.Underline=s})(j||(j={}));function y(t){let{variant:i,lineClamp:s,color:o,align:l,style:f,onPress:a,getChildren:h,children:r,liveUpdate:v}=t;const[I,E]=e.React.useReducer(function(b){return~b},0);return e.React.useEffect(function(){if(!v)return;const b=new Date().setMilliseconds(1e3);let C,P;return P=setTimeout(function(){E(),C=setInterval(E,1e3)},b-Date.now()),function(){clearTimeout(P),clearInterval(C)}},[]),e.React.createElement(L,{style:[i?H[i]:{},o?{color:X(S.semanticColors[o])}:{},l?{textAlign:l}:{},f??{}],numberOfLines:s,onPress:a},h?.()??r)}function $(t){let{onPress:i,onLongPress:s,icon:o,style:l,destructive:f,color:a}=t;const h=e.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:S.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:S.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:S.semanticColors.TEXT_DANGER}});return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:i,onLongPress:s},e.React.createElement(e.ReactNative.Image,{style:[typeof l=="string"?l==="header"?h.headerStyleIcon:h.cardStyleIcon:l,f&&h.destructiveIcon,a&&{tintColor:a}].filter(function(r){return!!r}),source:o}))}const R=window.nativeModuleProxy.DCDFileManager??window.nativeModuleProxy.RTNFileManager,G="https://raw.githubusercontent.com/nexpid/VendettaPlugins/main/plugins/doom/assets/download/",N="vendetta/doomPlugin/",d=["doom.jsdos","js-dos.css","js-dos.js","wdosbox.js","wdosbox.wasm"],q=["application/zip","text/css","text/javascript","text/javascript","application/octet-stream"];async function K(t){return await R.fileExists(`${R.getConstants().DocumentsDirPath}/${N+t}`)}async function Q(t,i){return t=N+t,await R.writeFile("documents",e.ReactNative.Platform.select({default:t,ios:R.saveFileToGallery?t:`Documents/${t}`}),i,"utf8")}async function z(t){return await R.readFile(`${R.getConstants().DocumentsDirPath}/${N+t}`,"utf8")}const{View:O}=A.General,Y=n.findByProps("OrientationType","useOrientation");e.ReactNative.Animated.createAnimatedComponent(e.ReactNative.Pressable);function Z(){const{width:t,height:i}=e.ReactNative.Dimensions.get("window"),s=e.NavigationNative.useNavigation(),o=Y.useOrientation()===1,{width:l,height:f}=e.React.useRef({width:o?i:t,height:o?t:i}).current,[a,h]=e.React.useState(null),[r,v]=e.React.useState(null),I=r?r.length>=d.length:null,E=e.React.useRef(null);e.React.useEffect(function(){if(r===null)Promise.all(d.map(function(c){return K(c)})).then(function(c){v(c.map(function(u,g){return d[g]}).filter(function(u,g){return c[g]}))});else{const c=d.findIndex(function(x){return!r.includes(x)});if(c===-1)return;const u=d[c];E.current?.abort();const g=new AbortController;E.current=g,fetch(G+u,{signal:g.signal}).then(function(x){return x.blob().then(function(ne){const _=new FileReader;_.addEventListener("error",function(){return w.showToast(`Failed to read ${u}!`,p.getAssetIDByName("Small"))}),_.addEventListener("load",function(){const M=";base64,",re=_.result.toString().split(M),ie=`data:${q[c]};base64,${re.slice(1).join(M)}`;Q(u,ie.toString()).then(function(){return v([...r,u])}).catch(function(){return w.showToast(`Failed to save ${u}!`,p.getAssetIDByName("Small"))})}),_.readAsDataURL(ne)}).catch(function(){return w.showToast(`Failed to parse ${u}!`,p.getAssetIDByName("Small"))})}).catch(function(){return w.showToast(`Failed to download ${u}!`,p.getAssetIDByName("Small"))})}},[r]),e.React.useEffect(function(){!r||r.length<d.length||a||Promise.all(r.map(function(c){return z(c)})).then(function(c){const u=c.map(function(g,x){return[r[x],g]});h(Object.fromEntries(u))}).catch(function(){return w.showToast("Failed to fetch contents!",p.getAssetIDByName("Small"))})},[r]);const b=e.React.useRef(new e.ReactNative.Animated.Value(1)).current,C=e.React.useRef(0);e.React.useEffect(function(){C.current=setTimeout(function(){return e.ReactNative.Animated.timing(b,{toValue:.05,duration:250,easing:e.ReactNative.Easing.linear,useNativeDriver:!0}).start()},1500)},[]);const P=e.React.useRef(null);P.current=function(){!a&&!r||(h(null),v([]))};const te=s.addListener("focus",function(){te(),s.setOptions({headerRight:function(){return e.React.createElement($,{onPress:function(){return P.current()},icon:p.getAssetIDByName("ic_message_delete"),style:"header"})}})}),D=e.stylesheet.createThemedStyleSheet({container:{backgroundColor:"#000",flex:1,justifyContent:"center",alignItems:"center"},webview:{backgroundColor:S.semanticColors.BG_MOD_SUBTLE,overflow:"hidden",borderRadius:2,aspectRatio:1442.8/901.75},webviewPortrait:{height:l,transform:[{rotate:"90deg"}]},webviewLandscape:{height:"100%"},webviewUnder:{position:"absolute",left:0,top:0,width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:4,flex:1},androidRipple:{color:S.semanticColors.ANDROID_RIPPLE,cornerRadius:2147483647}});return e.React.createElement(O,{style:D.container},e.React.createElement(O,{style:[D.webview,o?D.webviewLandscape:D.webviewPortrait]},a?e.React.createElement(V,{source:{html:W.replace(/REP_WEBVIEW_CSS/g,JSON.stringify(F)).replace(/URL_JSDOS_JS/g,JSON.stringify(a["js-dos.js"]).slice(1,-1)).replace(/URL_JSDOS_CSS/g,JSON.stringify(a["js-dos.css"]).slice(1,-1)).replace(/URL_JSDOS_DOOM_LINK/g,JSON.stringify(a["doom.jsdos"])).replace(/URL_JSDOS_WDOSBOX_JS/g,JSON.stringify(a["wdosbox.js"])).replace(/URL_JSDOS_WDOSBOX_WASM/g,JSON.stringify(a["wdosbox.wasm"])),baseUrl:"https://localhost"},style:{width:"100%",height:"100%",backgroundColor:"#0000"}}):e.React.createElement(O,{style:D.webviewUnder},I===null?e.React.createElement(e.React.Fragment,null,e.React.createElement(y,{variant:"text-lg/semibold",color:"WHITE"},"Checking files...")):I?e.React.createElement(e.React.Fragment,null,e.React.createElement(y,{variant:"text-lg/semibold",color:"WHITE"},"Reading files...")):e.React.createElement(e.React.Fragment,null,e.React.createElement(y,{variant:"text-lg/semibold",color:"WHITE",align:"center"},"Downloading files (",r.length+1,"/",d.length,")",`
`,d[r.length]??"-"),e.React.createElement(y,{variant:"text-md/normal",color:"WHITE"},"This should only happen once")))))}const ee=Z;return T.settings=ee,T})({},vendetta.metro.common,vendetta.ui.components,vendetta,vendetta.metro,vendetta.ui,vendetta.ui.assets,vendetta.ui.toasts);
