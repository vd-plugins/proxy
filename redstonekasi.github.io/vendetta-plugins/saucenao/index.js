(function(o,e,l,i,d,u,t,g){"use strict";const{FormRow:p}=l.Forms,h=i.findByName("Icon"),v=i.findByProps("openLazy","hideActionSheet"),{openURL:f}=i.findByProps("openURL","openDeeplink"),y=e.React.createElement(h,{source:u.getAssetIDByName("search")}),s={saucenao:{name:"SauceNAO",url:"https://saucenao.com/search.php?url=%s",default:!0},tracemoe:{name:"trace.moe",url:"https://trace.moe/?url=%s",default:!0},iqdb:{name:"IQDB",url:"https://iqdb.org/?url=%s"},imgops:{name:"ImgOps",url:"https://imgops.com/%s"},tineye:{name:"TinEye",url:"https://tineye.com/search?url=%s"},google:{name:"Google Images",url:"https://www.google.com/searchbyimage?image_url=%s&safe=off"},yandex:{name:"Yandex Images",url:"https://yandex.com/images/search?rpt=imageview&url=%s"}},R=()=>{t.storage.services??={};for(const[a,r]of Object.entries(s))t.storage.services[a]??=r.default??!1},b=d.before("openLazy",v,([a,r])=>{r==="MediaShareActionSheet"&&a.then(F=>{const L=d.after("default",F,([{syncer:m}],A)=>{e.React.useEffect(()=>void L(),[]);let n=m.sources[m.index.value];Array.isArray(n)&&(n=n[0]);const B=n.sourceURI??n.uri;A.props.children.props.children.push(...Object.keys(s).filter(c=>t.storage.services[c]).map(c=>e.React.createElement(p,{leading:y,label:s[c].name,onPress:()=>f(s[c].url.replace("%s",B))})))})})}),{FormSection:I,FormDivider:S,FormRadioRow:w}=l.Forms,E=()=>(g.useProxy(t.storage),e.React.createElement(e.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},e.React.createElement(I,{title:"Services"},e.React.createElement(e.ReactNative.FlatList,{data:Object.entries(t.storage.services),ItemSeparatorComponent:S,renderItem:({item:[a,r]})=>e.React.createElement(w,{label:s[a].name,selected:r,onPress:()=>void(t.storage.services[a]=!t.storage.services[a])})}))));return o.onLoad=R,o.onUnload=b,o.settings=E,o})({},vendetta.metro.common,vendetta.ui.components,vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.plugin,vendetta.storage);
