(function(C,e,P,Q,n,v,g,R){"use strict";var I=`<!DOCTYPE html>
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
    // style: "none",
    // noSideBar: true,
    // noFullscreen: true,
    // noSocialLinks: true,
  }).run(URL_JSDOS_DOOM_LINK);
<\/script>`,L=`* {
  background-color: transparent !important;
  overflow: hidden !important;
}
#jsbox {
  width: 100vw !important;
  height: 100vh !important;
}`;const m=n.findByStoreName("ThemeStore"),J=n.findByProps("colors","meta");n.findByProps("triggerHaptic");const{TextStyleSheet:U}=n.findByProps("TextStyleSheet"),{View:Y,Text:O,Pressable:Z}=P.General;n.findByProps("TableRow"),n.findByProps("ActionSheet")?.ActionSheet??n.find(function(t){return t.render?.name==="ActionSheet"}),n.findByProps("openLazy","hideActionSheet"),n.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),n.findByProps("ActionSheetRow")?.ActionSheetRow,n.findByName("Navigator")??n.findByProps("Navigator")?.Navigator,n.findByProps("getRenderCloseButton")?.getRenderCloseButton??n.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,n.findByProps("popModal","pushModal");const N=n.findByProps("useSearchControls"),_=n.findByProps("useSettingSearchQuery"),j=n.findByName("SettingSearchBar");n.findByProps("SvgXml"),n.findByProps("useInMainTabsExperiment","isInMainTabsExperiment");const F=n.find(function(t){return t?.WebView&&!t.default}).WebView;function M(t){return J.meta.resolveSemanticColor(m.theme,t)}Object.assign(function(t){let{searchContext:a,controls:l}=t;return e.React.createElement(e.ReactNative.ScrollView,{scrollEnabled:!1},e.React.createElement(N.default,{searchContext:a,controls:l},e.React.createElement(j,null)))},{useAdvancedSearch:function(t){const a=_.useSettingSearchQuery(),l=N.useSearchControls(t,!1,function(){});return e.React.useEffect(function(){return function(){_.setSettingSearchQuery(""),_.setIsSettingSearchActive(!1)}},[]),[a,l]}});var T;(function(t){function a(r){let{children:c,onPress:d}=r;return e.React.createElement(p,{variant:"text-md/bold",onPress:d},c)}t.Bold=a;function l(r){let{children:c,onPress:d}=r;return e.React.createElement(O,{style:{textDecorationLine:"underline"},onPress:d},c)}t.Underline=l})(T||(T={}));function p(t){let{variant:a,lineClamp:l,color:r,align:c,style:d,onPress:b,getChildren:y,children:E,liveUpdate:u}=t;const[s,i]=e.React.useReducer(function(o){return~o},0);return e.React.useEffect(function(){if(!u)return;const o=new Date().setMilliseconds(1e3);let f,D;return D=setTimeout(function(){i(),f=setInterval(i,1e3)},o-Date.now()),function(){clearTimeout(D),clearInterval(f)}},[]),e.React.createElement(O,{style:[a?U[a]:{},r?{color:M(v.semanticColors[r])}:{},c?{textAlign:c}:{},d??{}],numberOfLines:l,onPress:b},y?.()??E)}const S=window.nativeModuleProxy.DCDFileManager??window.nativeModuleProxy.RTNFileManager,W="https://raw.githubusercontent.com/nexpid/VendettaPlugins/main/plugins/doom/assets/download/",x="vendetta/doomPlugin/",h=["doom.jsdos","js-dos.css","js-dos.js","wdosbox.js","wdosbox.wasm"],k=["application/zip","text/css","text/javascript","text/javascript","application/octet-stream"];async function H(t){return await S.fileExists(`${S.getConstants().DocumentsDirPath}/${x+t}`)}async function V(t,a){return t=x+t,await S.writeFile("documents",e.ReactNative.Platform.select({default:t,ios:S.saveFileToGallery?t:`Documents/${t}`}),a,"utf8")}async function X(t){return await S.readFile(`${S.getConstants().DocumentsDirPath}/${x+t}`,"utf8")}const{View:w}=P.General,$=e.ReactNative.Animated.createAnimatedComponent(e.ReactNative.Pressable);function q(){const t=e.ReactNative.Dimensions.get("screen").width,[a,l]=e.React.useState(null),[r,c]=e.React.useState(null),d=r?r.length>=h.length:null,b=e.React.useRef(null);e.React.useEffect(function(){if(r===null)Promise.all(h.map(function(s){return H(s)})).then(function(s){c(s.map(function(i,o){return h[o]}).filter(function(i,o){return s[o]}))});else{const s=h.findIndex(function(f){return!r.includes(f)});if(s===-1)return;const i=h[s];b.current?.abort();const o=new AbortController;b.current=o,fetch(W+i,{signal:o.signal}).then(function(f){return f.blob().then(function(D){const B=new FileReader;B.addEventListener("error",function(){return R.showToast(`Failed to read ${i}!`,g.getAssetIDByName("Small"))}),B.addEventListener("load",function(){const A=";base64,",G=B.result.toString().split(A),K=`data:${k[s]};base64,${G.slice(1).join(A)}`;V(i,K.toString()).then(function(){return c([...r,i])}).catch(function(){return R.showToast(`Failed to save ${i}!`,g.getAssetIDByName("Small"))})}),B.readAsDataURL(D)}).catch(function(){return R.showToast(`Failed to parse ${i}!`,g.getAssetIDByName("Small"))})}).catch(function(){return R.showToast(`Failed to download ${i}!`,g.getAssetIDByName("Small"))})}},[r]),e.React.useEffect(function(){!r||r.length<h.length||a||Promise.all(r.map(function(s){return X(s)})).then(function(s){const i=s.map(function(o,f){return[r[f],o]});l(Object.fromEntries(i))}).catch(function(){return R.showToast("Failed to fetch contents!",g.getAssetIDByName("Small"))})},[r]);const y=e.React.useRef(new e.ReactNative.Animated.Value(.05)).current,E=e.React.useRef(0),u=e.stylesheet.createThemedStyleSheet({container:{backgroundColor:"#000",flex:1,justifyContent:"center",alignItems:"center"},webview:{backgroundColor:v.semanticColors.BG_MOD_SUBTLE,height:t,aspectRatio:1442.8/901.75,overflow:"hidden",borderRadius:2,transform:[{rotate:"90deg"}]},webviewUnder:{position:"absolute",left:0,top:0,width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:4,flex:1},buttonContainerMain:{position:"absolute",top:0,left:0,width:"100%"},buttonContainer:{marginHorizontal:24,marginVertical:24},button:{width:"100%",backgroundColor:v.semanticColors.BUTTON_OUTLINE_BRAND_BACKGROUND_ACTIVE,borderRadius:2147483647},androidRipple:{color:v.semanticColors.ANDROID_RIPPLE,cornerRadius:2147483647}});return e.React.createElement(w,{style:u.container},e.React.createElement(w,{style:u.webview},a?e.React.createElement(F,{source:{html:I.replace(/REP_WEBVIEW_CSS/g,JSON.stringify(L)).replace(/URL_JSDOS_JS/g,JSON.stringify(a["js-dos.js"]).slice(1,-1)).replace(/URL_JSDOS_CSS/g,JSON.stringify(a["js-dos.css"]).slice(1,-1)).replace(/URL_JSDOS_DOOM_LINK/g,JSON.stringify(a["doom.jsdos"])).replace(/URL_JSDOS_WDOSBOX_JS/g,JSON.stringify(a["wdosbox.js"])).replace(/URL_JSDOS_WDOSBOX_WASM/g,JSON.stringify(a["wdosbox.wasm"])),baseUrl:"https://localhost"},style:{width:"100%",height:"100%",backgroundColor:"#0000"}}):e.React.createElement(w,{style:u.webviewUnder},d===null?e.React.createElement(e.React.Fragment,null,e.React.createElement(p,{variant:"text-lg/semibold",color:"WHITE"},"Checking files...")):d?e.React.createElement(e.React.Fragment,null,e.React.createElement(p,{variant:"text-lg/semibold",color:"WHITE"},"Fetching files...")):e.React.createElement(e.React.Fragment,null,e.React.createElement(p,{variant:"text-lg/semibold",color:"WHITE"},"Downloading files (",r.length+1,"/",h.length,")"),e.React.createElement(p,{variant:"text-md/normal",color:"WHITE"},"This should only happen once")))),e.React.createElement(w,{style:u.buttonContainerMain},e.React.createElement(w,{style:u.buttonContainer},e.React.createElement($,{style:[u.button,{opacity:y}],android_ripple:u.androidRipple,onPressIn:function(){clearTimeout(E.current),e.ReactNative.Animated.timing(y,{toValue:1,duration:200,easing:e.ReactNative.Easing.linear,useNativeDriver:!0}).start()},onPressOut:function(){E.current=setTimeout(function(){return e.ReactNative.Animated.timing(y,{toValue:.05,duration:250,easing:e.ReactNative.Easing.linear,useNativeDriver:!0}).start()},1500)},onPress:function(){!a&&!r||(l(null),c([]))}},e.React.createElement(p,{variant:"text-md/medium",color:"BUTTON_OUTLINE_BRAND_TEXT",style:{paddingHorizontal:12,paddingVertical:10},align:"center"},"Redownload Files")))))}const z=q;return C.settings=z,C})({},vendetta.metro.common,vendetta.ui.components,vendetta,vendetta.metro,vendetta.ui,vendetta.ui.assets,vendetta.ui.toasts);
