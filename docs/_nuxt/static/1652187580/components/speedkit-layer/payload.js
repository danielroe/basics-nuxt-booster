__NUXT_JSONP__("/components/speedkit-layer", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ){return {data:[{document:{slug:aj,description:"",title:"SpeedkitLayer",position:30,category:"Components",solutions:["reduced bandwidth","weak hardware","unsupported browser"],hideLayerFeatures:["Closing mechanics does not require javascript."],toc:[{id:ax,depth:L,text:ay},{id:az,depth:L,text:aA},{id:aB,depth:L,text:aC},{id:aD,depth:L,text:V},{id:ak,depth:L,text:aE}],body:{type:"root",children:[{type:b,tag:s,props:{},children:[{type:a,value:"If the SpeedkitLayer is implemented, the javascript initialisation is automatically monitored. If one of the events\n"},{type:b,tag:aF,props:{":items":"solutions",type:aG},children:[]},{type:a,value:"\noccurs, the process is paused and only continued or cancelled after a user interaction in the layer."}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"The layer is placed once in the layout (e.g. "},{type:b,tag:i,props:{},children:[{type:a,value:"layouts\u002Fdefault.vue"}]},{type:a,value:").\nThe included SpeedkitLayer serves as a wrapper and must be filled according to the "},{type:b,tag:M,props:{to:"\u002Fcomponents\u002Fspeedkit-layer#template"},children:[{type:a,value:ak}]},{type:a,value:", see "},{type:b,tag:G,props:{href:"https:\u002F\u002Fgithub.com\u002FGrabarzUndPartner\u002Fnuxt-speedkit\u002Fblob\u002Fmain\u002Fexample\u002Fcomponents\u002FInfoLayer.vue",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"example component"}]},{type:a,value:v}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"The content contains messages and buttons that are displayed in the respective event.\nMessages and buttons are defined with an "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:", these are set to "},{type:b,tag:i,props:{},children:[{type:a,value:al}]},{type:a,value:" by default via CSS."}]},{type:a,value:h},{type:b,tag:am,props:{},children:[{type:a,value:h},{type:b,tag:w,props:{},children:[{type:a,value:aH},{type:b,tag:i,props:{},children:[{type:a,value:N}]},{type:a,value:" for message"}]},{type:a,value:h},{type:b,tag:w,props:{},children:[{type:a,value:aH},{type:b,tag:i,props:{},children:[{type:a,value:W}]},{type:a,value:" for button"}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:aI,props:{},children:[{type:a,value:"\nFor the closing mechanism of the layer, see \n"},{type:b,tag:M,props:{to:aJ},children:[{type:a,value:V}]},{type:a,value:aK}]},{type:a,value:h},{type:b,tag:O,props:{id:ax},children:[{type:b,tag:G,props:{href:"#messages",ariaHidden:x,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:ay}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"The messages are elements that are displayed for the relevant events."}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"Initially, all IDs are set to "},{type:b,tag:i,props:{},children:[{type:a,value:al}]},{type:a,value:", so no message is visible."},{type:b,tag:an,props:{},children:[]},{type:a,value:"\nWhen an event is triggered, the relevant message is displayed via the ID using the style attribute "},{type:b,tag:i,props:{},children:[{type:a,value:aL}]},{type:a,value:v}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:ao,props:{},children:[{type:b,tag:ap,props:{},children:[{type:b,tag:u,props:{},children:[{type:b,tag:C,props:{},children:[{type:a,value:aM}]},{type:b,tag:C,props:{},children:[{type:a,value:aq}]}]}]},{type:b,tag:ar,props:{},children:[{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aN}]}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"Javascript is disabled."}]}]},{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:N}]}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"User Browser is not supported by "},{type:b,tag:M,props:{to:"\u002Foptions#browsersupport"},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Browserslist"}]}]},{type:a,value:v}]}]},{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aO}]}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"User hardware (number of processor & RAM) are not sufficient."}]}]},{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aP}]}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"Connection speed is too low."}]}]}]}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:b,tag:as,props:{},children:[{type:a,value:aQ}]}]},{type:a,value:h},{type:b,tag:y,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- initial --\u003E"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- active --\u003E"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I,aU,aV]},children:[{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"display"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:au}]},{type:a,value:" block"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:O,props:{id:az},children:[{type:b,tag:G,props:{href:"#buttons",ariaHidden:x,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:aA}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"The buttons are interaction elements for the user with which he can make his choice at the relevant event."}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"Initially, all IDs except for "},{type:b,tag:i,props:{},children:[{type:a,value:"nuxt-speedkit-button-nojs"}]},{type:a,value:" are set to "},{type:b,tag:i,props:{},children:[{type:a,value:al}]},{type:a,value:".\nWhen an event is triggered, the relevant button is displayed via the ID using the style attribute "},{type:b,tag:i,props:{},children:[{type:a,value:aL}]},{type:a,value:v}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:ao,props:{},children:[{type:b,tag:ap,props:{},children:[{type:b,tag:u,props:{},children:[{type:b,tag:C,props:{},children:[{type:a,value:aM}]},{type:b,tag:C,props:{},children:[{type:a,value:aq}]}]}]},{type:b,tag:ar,props:{},children:[{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aW}]}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"Visible when javascript is disabled, needed so that the user can hide the layer. Requires the "},{type:b,tag:M,props:{to:aJ},children:[{type:a,value:V}]},{type:a,value:" implementation."}]}]},{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:av}]}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"Is used to offer the user the possibility to visit the page only with activated fonts. Other initialisations of the Javascript and loading of the pictures are prevented."}]}]},{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:W}]}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"Activates all features. The initialisation of the JavaScript is started, images are loaded."}]}]}]}]},{type:a,value:h},{type:b,tag:aI,props:{type:aG},children:[{type:a,value:"\nIt is recommended to register an \n"},{type:b,tag:as,props:{},children:[{type:a,value:"Inline Click-Event"}]},{type:a,value:"\n for the buttons \n"},{type:b,tag:i,props:{},children:[{type:a,value:"nuxt-speedkit__button__init-font"}]},{type:a,value:"\n and \n"},{type:b,tag:i,props:{},children:[{type:a,value:"nuxt-speedkit__button__init-app"}]},{type:a,value:aK},{type:b,tag:an,props:{},children:[]},{type:a,value:h},{type:b,tag:an,props:{},children:[]},{type:a,value:"\nMore information under \n"},{type:b,tag:M,props:{to:"\u002Fcomponents\u002Fspeedkit-layer#force-app-initialization-or-font-load"},children:[{type:a,value:"Force App initialization or Font load"}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:O,props:{id:aB},children:[{type:b,tag:G,props:{href:"#force-initialization-app-font",ariaHidden:x,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:aC}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"For Unsupported-Browser and Insufficient Hardware events, an "},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:" event must also be set with the "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:v}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"In the event, the global variable "},{type:b,tag:i,props:{},children:[{type:a,value:T}]},{type:a,value:" or "},{type:b,tag:i,props:{},children:[{type:a,value:T}]},{type:a,value:" must be set to "},{type:b,tag:i,props:{},children:[{type:a,value:x}]},{type:a,value:v}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"These are needed if the user has already reacted before the initial Javascript has been loaded. After the javascript has been successfully loaded, the app is automatically initialised."}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:ao,props:{},children:[{type:b,tag:ap,props:{},children:[{type:b,tag:u,props:{},children:[{type:b,tag:C,props:{},children:[{type:a,value:"Variable"}]},{type:b,tag:C,props:{},children:[{type:a,value:"Type"}]},{type:b,tag:C,props:{},children:[{type:a,value:aq}]},{type:b,tag:C,props:{},children:[{type:a,value:"Default"}]}]}]},{type:b,tag:ar,props:{},children:[{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:T}]}]},{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aX}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"If set, only the fonts are initialised."}]},{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aY}]}]}]},{type:b,tag:u,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aw}]}]},{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aX}]}]},{type:b,tag:m,props:{},children:[{type:a,value:"If set, initialisation continues after the javascript has been fully loaded."}]},{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aY}]}]}]}]}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:b,tag:as,props:{},children:[{type:a,value:aQ}]}]},{type:a,value:h},{type:b,tag:y,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:z}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I,$,aa]},children:[{type:b,tag:c,props:{className:[d,ab,ac]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:T}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:z}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I,$,aa]},children:[{type:b,tag:c,props:{className:[d,ab,ac]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:aw}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:O,props:{id:aD},children:[{type:b,tag:G,props:{href:"#hide-layer",ariaHidden:x,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:V}]},{type:a,value:h},{type:b,tag:y,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:J}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n  Close Layer\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:s,props:{},children:[{type:a,value:"The layer can be closed via a "},{type:b,tag:i,props:{},children:[{type:a,value:ah}]},{type:a,value:" attribute with the "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:i,props:{},children:[{type:a,value:ai}]},{type:a,value:v}]},{type:a,value:h},{type:b,tag:aF,props:{":items":"hideLayerFeatures"},children:[{type:a,value:h}]},{type:a,value:h},{type:b,tag:O,props:{id:ak},children:[{type:b,tag:G,props:{href:"#template",ariaHidden:x,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:aE}]},{type:a,value:h},{type:b,tag:y,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"Sorry, but you will have a limited user experience due to a…"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:am}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I,aU,aV]},children:[{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"padding"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:au}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"list-style"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:au}]},{type:a,value:" none"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- Displayed when javascript is disabled. --\u003E"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:w}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        disabled javascript\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- Displayed when browser does not support. --\u003E"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:w}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        outdated browser\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- Displayed when user hardware is not sufficient. --\u003E"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:w}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        outdated device\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- Displayed when connection is too slow. --\u003E"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:w}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        slow connection\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- Button to hide the layer with no javascript --\u003E"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:z}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:J}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        Apply without js\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- Button for use without javascript and with fonts --\u003E"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:z}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I,$,aa]},children:[{type:b,tag:c,props:{className:[d,ab,ac]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:T}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:J}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        Apply with Fonts\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C!-- Button for activate javascript by bad connection or browser support --\u003E"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:z}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I,$,aa]},children:[{type:b,tag:c,props:{className:[d,ab,ac]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:aw}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n      Apply with all Features\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:h}]}]}]}]},dir:"\u002Fen\u002Fcomponents",path:"\u002Fen\u002Fcomponents\u002Fspeedkit-layer",extension:".md",createdAt:"2022-05-10T12:58:55.756Z",updatedAt:"2022-05-10T12:58:55.760Z",to:"\u002Fcomponents\u002Fspeedkit-layer"},prev:{title:"v-font",path:"\u002Fen\u002Fdirectives\u002Fv-font",to:"\u002Fdirectives\u002Fv-font"},next:{title:"LoadingSpinner",path:"\u002Fen\u002Fclasses\u002Floading-spinner",to:"\u002Fclasses\u002Floading-spinner"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","tag","\"","\n","code","\u003E"," ","=","td","attr-name","attr-value","attr-equals","\u003C","\u003C\u002F","p","id","tr",".","li","true","div","button","\n      ","comment","th","nobr",";","\n  ","a","special-attr","value","label","\n    ",2,"nuxt-link","nuxt-speedkit-message-unsupported-browser","h2",-1,"icon","icon-link","onclick","__NUXT_SPEEDKIT_FONT_INIT__","\n\n    ","Hide Layer","nuxt-speedkit-button-init-app","nuxt-content-highlight","pre","language-html","line-numbers","javascript","language-javascript","dom","variable","window","property-access","operator","boolean","for","nuxt-speedkit-layer-close","speedkit-layer","template","display: none;","ul","br","table","thead","Description","tbody","strong","property",":","nuxt-speedkit-button-init-font","__NUXT_SPEEDKIT_AUTO_INIT__","messages","Messages","buttons","Buttons","force-initialization-app-font","Force initialization (App, Font)","hide-layer","Template","list","info","e.g. ","alert","\u002Fcomponents\u002Fspeedkit-layer#hide-layer","\n.\n","display: block;","ID","nuxt-speedkit-message-nojs","nuxt-speedkit-message-outdated-device","nuxt-speedkit-message-slow-connection","Example","\n  Your browser is not supported!\n","\n\n","style","css","language-css","nuxt-speedkit-button-init-nojs","Boolean","false","…")));