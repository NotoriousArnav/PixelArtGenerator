webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},n=a("VU/8")({name:"App"},r,!1,null,null,null).exports,i=a("/ocq"),s=a("Xxa5"),l=a.n(s),c=a("exGp"),u=a.n(c),p=a("mtWM"),d={name:"HelloWorld",data:function(){return{prompt:"Penguin eating apple",hfAPIKey:"",showAPIKey:!1,imageData:null,isLoading:!1,mainColor:null,mainTextColor:"black",palette:null,buttonStyle:{backgroundColor:"buttonface",color:"buttontext"},loadingStyle:{backgroundColor:"rgba(255, 255, 255, 0.5)"}}},created:function(){var e=["Astronaut riding a horse","Colorful sunset over the mountains","Underwater cityscape","Mystical forest with fireflies","Galaxy far, far away","Enchanted forest at twilight","City skyline with neon lights","Majestic dragon in a hidden cave","Underwater coral reef paradise","Steampunk airship above the clouds","Vibrant festival in a magical realm","Haunted castle on a moonlit hill","Ancient ruins in a dense jungle","Epic space battle among the stars","Time-traveling adventurer's journey"],t=Math.floor(Math.random()*e.length);this.prompt=e[t],this.fetchImage(),this.grabColors()},methods:{toggleAPIKeyVisibility:function(){this.showAPIKey=!this.showAPIKey},grabColors:function(){var e=new ColorThief,t=document.querySelector("img");if(t){var a=e.getColor(t),o=e.getPalette(t,8);this.mainColor="rgb("+a[0]+", "+a[1]+", "+a[2]+")",this.mainBackgrundColor="rgba("+a[0]+", "+a[1]+", "+a[2]+", 0.5)",this.palette=o.map(function(e){return"rgb("+e[0]+", "+e[1]+", "+e[2]+")"}),this.buttonStyle.backgroundColor=this.mainColor,this.buttonStyle.color=this.getContrastColor(this.mainColor),this.mainTextColor=this.getContrastColor(this.mainColor),this.loadingStyle.backgroundColor="rgba("+a[0]+", "+a[1]+", "+a[2]+", 0.5)"}},getContrastColor:function(e){return(299*parseInt(e.slice(4,7),10)+587*parseInt(e.slice(9,12),10)+114*parseInt(e.slice(14,17),10))/1e3>128?"black":"white"},generateRandomPrompt:function(){var e=["Astronaut riding a horse","Colorful sunset over the mountains","Underwater cityscape","Mystical forest with fireflies","Galaxy far, far away"],t=Math.floor(Math.random()*e.length);this.prompt=e[t]},fetchImage:function(){var e=this;return u()(l.a.mark(function t(){var a,o,r,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,a={inputs:e.prompt},t.prev=2,t.next=5,p.a.post("https://api-inference.huggingface.co/models/nerijs/pixel-art-xl",a,{headers:{Authorization:"Bearer "+e.hfAPIKey,"Content-Type":"application/json"},responseType:"blob"});case 5:o=t.sent,r=o.data,n=new Blob([r],{type:o.headers["content-type"]}),e.imageData=URL.createObjectURL(n),document.body.style.backgroundImage="url("+e.imageData+")",document.body.style.backdropFilter="blur(10px)",console.log(r),e.isLoading=!1,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.error("Error fetching image:",t.t0);case 18:case"end":return t.stop()}},t,e,[[2,15]])}))()},downloadImage:function(){var e=document.createElement("a");e.href=this.imageData,e.download="generated-image.png",e.click()}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"m-4 p-2 hello"},[a("h1",{staticClass:"text-4xl",style:{color:e.mainTextColor}},[e._v("Pixel Art Generator")]),e._v(" "),a("div",{staticClass:"sm:grid sm:grid-cols-10"},[e.imageData?a("img",{staticClass:"text-center items-center p-2 col-span-4",attrs:{src:e.imageData},on:{load:e.grabColors}}):e._e(),e._v(" "),a("div",{staticClass:"col-span-6 p-2"},[a("span",{style:{color:e.mainTextColor}},[e._v("Prompt: ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.prompt,expression:"prompt"}],staticClass:"w-full py-2 px-1 border-2",attrs:{type:"text",placeholder:"Enter a prompt"},domProps:{value:e.prompt},on:{input:function(t){t.target.composing||(e.prompt=t.target.value)}}}),e._v(" "),a("br"),e._v(" "),a("span",{style:{color:e.mainTextColor}},[e._v("HuggingFace API Key: ")]),e._v(" "),"checkbox"==(e.showAPIKey?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.hfAPIKey,expression:"hfAPIKey"}],staticClass:"w-full py-2 px-1 border-2",attrs:{placeholder:"Enter a Valid HuggingFace API Key",type:"checkbox"},domProps:{checked:Array.isArray(e.hfAPIKey)?e._i(e.hfAPIKey,null)>-1:e.hfAPIKey},on:{change:function(t){var a=e.hfAPIKey,o=t.target,r=!!o.checked;if(Array.isArray(a)){var n=e._i(a,null);o.checked?n<0&&(e.hfAPIKey=a.concat([null])):n>-1&&(e.hfAPIKey=a.slice(0,n).concat(a.slice(n+1)))}else e.hfAPIKey=r}}}):"radio"==(e.showAPIKey?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.hfAPIKey,expression:"hfAPIKey"}],staticClass:"w-full py-2 px-1 border-2",attrs:{placeholder:"Enter a Valid HuggingFace API Key",type:"radio"},domProps:{checked:e._q(e.hfAPIKey,null)},on:{change:function(t){e.hfAPIKey=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.hfAPIKey,expression:"hfAPIKey"}],staticClass:"w-full py-2 px-1 border-2",attrs:{placeholder:"Enter a Valid HuggingFace API Key",type:e.showAPIKey?"text":"password"},domProps:{value:e.hfAPIKey},on:{input:function(t){t.target.composing||(e.hfAPIKey=t.target.value)}}}),e._v(" "),a("button",{staticClass:"py-2 px-1 rounded transition-all",style:e.buttonStyle,on:{click:e.toggleAPIKeyVisibility}},[e._v("\n      "+e._s(e.showAPIKey?"Hide Key":"Show Key")+"\n    ")]),e._v(" "),a("br"),e._v(" "),a("button",{staticClass:"py-2 px-1 rounded transition-all",style:e.buttonStyle,on:{click:e.fetchImage}},[e._v("Image Gen")]),e._v(" "),a("button",{staticClass:"py-2 px-1 rounded transition-all",style:e.buttonStyle,on:{click:e.downloadImage}},[e._v("Image Download")]),e._v(" "),a("button",{staticClass:"py-2 px-1 rounded transition-all",style:e.buttonStyle,on:{click:e.generateRandomPrompt}},[e._v("Random Prompt")]),e._v(" "),a("br"),e._v(" "),e.isLoading?a("div",{staticClass:"loading-container",style:e.loadingStyle},[a("p",{style:{backgroundColor:e.mainBackgrundColor,color:e.mainTextColor}},[e._v("Loading...")])]):e._e(),e._v(" "),a("hr",{staticClass:"p-2"}),e._v(" "),a("div",[e.mainColor?a("div",{},[a("p",{staticClass:"p-4 rounded-md mb-4",style:{backgroundColor:e.mainBackgrundColor,color:e.mainTextColor}},[e._v("Main Color: "+e._s(e.mainColor))])]):e._e()]),e._v(" "),a("hr",{staticClass:"p-2"}),e._v(" "),a("p",{staticClass:"bg-gray-200 p-4 rounded-md mb-4 text-gray-700",style:{backgroundColor:e.mainBackgrundColor,color:e.mainTextColor}},[e._v("\n    The image generation model utilized in this application is StableDiffusion, available through the HuggingFace repository. You can explore this powerful model by visiting the HuggingFace repository at "),a("a",{staticClass:"text-blue-500 hover:underline transition-all",attrs:{href:"https://huggingface.co/nerijs/pixel-art-xl"}},[e._v("https://huggingface.co/nerijs/pixel-art-xl")]),e._v(" or simply by searching for 'nerijs/pixel-art-xl.' Be sure to check out these resources to discover more about the model and its capabilities.\n")]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"p-4 rounded-md mb-4",style:{backgroundColor:e.mainBackgrundColor,color:e.mainTextColor}},[a("p",{staticClass:"text-lg font-semibold"},[e._v("Author:")]),e._v(" "),e._m(0),e._v(" "),a("p",{staticClass:"text-lg font-semibold mt-4"},[e._v("Project:")]),e._v(" "),e._m(1)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{staticClass:"hover:underline hover:text-blue-500 transition-all",attrs:{href:"https://github.com/NotoriousArnav",target:"_blank"}},[this._v("github.com/NotoriousArnav")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Made with "),t("span",{staticClass:"text-red-500"},[this._v("❤")]),this._v(" using Vue.js and HuggingFace")])}]},g=a("VU/8")(d,h,!1,null,null,null).exports;o.a.use(i.a);var m=new i.a({routes:[{path:"/",name:"HelloWorld",component:g}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:m,components:{App:n},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.44a4e467f401e16c5d33.js.map