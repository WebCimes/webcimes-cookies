var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};
/*! js-cookie v3.0.5 | MIT */
function o(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)e[i]=o[i]}return e}e.d(t,{C:()=>s});var i=function e(t,i){function s(e,s,n){if("undefined"!=typeof document){"number"==typeof(n=o({},i,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var r in n)n[r]&&(c+="; "+r,!0!==n[r]&&(c+="="+n[r].split(";")[0]));return document.cookie=e+"="+t.write(s,e)+c}}return Object.create({set:s,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var o=document.cookie?document.cookie.split("; "):[],i={},s=0;s<o.length;s++){var n=o[s].split("="),c=n.slice(1).join("=");try{var r=decodeURIComponent(n[0]);if(i[r]=t.read(c,r),e===r)break}catch(e){}}return e?i[e]:i}},remove:function(e,t){s(e,"",o({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,o({},this.attributes,t))},withConverter:function(t){return e(o({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});class s{cookies;options;preferences=[];defaultTexts={en:{title:"Cookies",description:"We use cookies to ensure the operation of the site, personalize our content, and offer a better experience.<br><br>By clicking OK or by activating an option in the preferences, you agree to use the cookies.",buttonAccept:"Accept",buttonRefuse:"Refuse",buttonPreferences:"Preferences",buttonBack:"Back",preferenceAccept:"Accept",preferenceRefuse:"Refuse"},fr:{title:"Les cookies",description:"Nous utilisons des cookies afin de garantir le fonctionnement du site, personnaliser notre contenu, ainsi que proposer une meilleure expérience.<br><br>En cliquant sur OK ou en activant une option dans les préférences, vous acceptez d'utiliser les cookies.",buttonAccept:"Accepter",buttonRefuse:"Refuser",buttonPreferences:"Préférences",buttonBack:"Retour",preferenceAccept:"Accepter",preferenceRefuse:"Refuser"},es:{title:"Cookies",description:"Utilizamos cookies para garantizar el funcionamiento del sitio, personalizar nuestro contenido y ofrecer una mejor experiencia.<br><br>Al hacer clic en Aceptar o al activar una opción en las preferencias, acepta el uso de cookies.",buttonAccept:"Aceptar",buttonRefuse:"Rechazar",buttonPreferences:"Preferencias",buttonBack:"Volver",preferenceAccept:"Aceptar",preferenceRefuse:"Rechazar"},de:{title:"Cookies",description:"Wir verwenden Cookies, um den Betrieb der Website zu gewährleisten, unseren Inhalt zu personalisieren und ein besseres Erlebnis zu bieten.<br><br>Durch Klicken auf OK oder durch Aktivieren einer Option in den Einstellungen stimmen Sie der Verwendung von Cookies zu.",buttonAccept:"Akzeptieren",buttonRefuse:"Ablehnen",buttonPreferences:"Einstellungen",buttonBack:"Zurück",preferenceAccept:"Akzeptieren",preferenceRefuse:"Ablehnen"},it:{title:"Cookies",description:"Utilizziamo i cookie per garantire il funzionamento del sito, personalizzare i nostri contenuti e offrire una migliore esperienza.<br><br>Cliccando su OK o attivando un'opzione nelle preferenze, accetti di utilizzare i cookie.",buttonAccept:"Accetta",buttonRefuse:"Rifiuta",buttonPreferences:"Preferenze",buttonBack:"Indietro",preferenceAccept:"Accetta",preferenceRefuse:"Rifiuta"},pt:{title:"Cookies",description:"Utilizamos cookies para garantir o funcionamento do site, personalizar nosso conteúdo e oferecer uma melhor experiência.<br><br>Ao clicar em OK ou ao ativar uma opção nas preferências, você concorda em usar os cookies.",buttonAccept:"Aceitar",buttonRefuse:"Recusar",buttonPreferences:"Preferências",buttonBack:"Voltar",preferenceAccept:"Aceitar",preferenceRefuse:"Recusar"},nl:{title:"Cookies",description:"We gebruiken cookies om de werking van de site te garanderen, onze inhoud te personaliseren en een betere ervaring te bieden.<br><br>Door op OK te klikken of een optie in de voorkeuren te activeren, gaat u akkoord met het gebruik van cookies.",buttonAccept:"Accepteren",buttonRefuse:"Weigeren",buttonPreferences:"Voorkeuren",buttonBack:"Terug",preferenceAccept:"Accepteren",preferenceRefuse:"Weigeren"},ru:{title:"Cookies",description:"Мы используем файлы cookie для обеспечения работы сайта, персонализации нашего контента и предоставления лучшего опыта.<br><br>Нажимая ОК или активируя опцию в настройках, вы соглашаетесь на использование файлов cookie.",buttonAccept:"Принять",buttonRefuse:"Отказать",buttonPreferences:"Настройки",buttonBack:"Назад",preferenceAccept:"Принять",preferenceRefuse:"Отказать"}};constructor(e,t){const o={wrapperElement:document.querySelector("body"),language:"en",defaultTexts:this.defaultTexts.en,cookiesSettings:{consentCookieName:"cookies_consent",preferencesCookieName:"cookies_preferences",expiration:365,path:"/",domain:window.location.hostname,secure:!0,sameSite:"Lax"}};e.language&&this.defaultTexts[e.language]&&(o.defaultTexts=this.defaultTexts[e.language]),e.defaultTexts&&(e.defaultTexts={...o.defaultTexts,...e.defaultTexts}),this.options={...o,...e},this.preferences=t,this.init()}getHtmlElements(e){let t=[];return e instanceof NodeList&&(t=[...Array.from(e)]),e instanceof HTMLElement&&(t=[e]),"string"==typeof e&&(t=[...Array.from(document.querySelectorAll(e))]),t}getHtmlElement(e){let t=null;return e instanceof HTMLElement&&(t=e),"string"==typeof e&&(t=document.querySelector(e)),t}init(){const e=this.getHtmlElement(this.options.wrapperElement);void 0===i.get(this.options.cookiesSettings.consentCookieName)&&(e?.insertAdjacentHTML("beforeend",this.renderCookiesModal()),this.cookies=document.querySelector(".webcimes-cookies"),this.cookies?.querySelector(".webcimes-cookies__option")?.focus(),this.bindEvents())}renderCookiesModal(){return`\n        <div class="webcimes-cookies" role="dialog" aria-modal="true" aria-labelledby="webcimes-cookies-title" aria-describedby="webcimes-cookies-description">\n            <div class="webcimes-cookies__content">\n            <div class="webcimes-cookies__section webcimes-cookies__section--default webcimes-cookies__section--active">\n                <div class="webcimes-cookies__data">\n                <div id="webcimes-cookies-title" class="webcimes-cookies__title">${this.options.defaultTexts.title}</div>\n                <div id="webcimes-cookies-description" class="webcimes-cookies__text">${this.options.defaultTexts.description}</div>\n                </div>\n                <div class="webcimes-cookies__options">\n                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--accept" title="${this.options.defaultTexts.buttonAccept}" aria-label="${this.options.defaultTexts.buttonAccept}">${this.options.defaultTexts.buttonAccept}</button>\n                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--preferences" title="${this.options.defaultTexts.buttonPreferences}" aria-label="${this.options.defaultTexts.buttonPreferences}">${this.options.defaultTexts.buttonPreferences}</button>\n                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--refuse" title="${this.options.defaultTexts.buttonRefuse}" aria-label="${this.options.defaultTexts.buttonRefuse}">${this.options.defaultTexts.buttonRefuse}</button>\n                </div>\n            </div>\n            <div class="webcimes-cookies__section webcimes-cookies__section--preferences">\n                <div class="webcimes-cookies__data">\n                <div class="webcimes-cookies__title">${this.options.defaultTexts.buttonPreferences}</div>\n                <div class="webcimes-cookies__preferences">\n                    ${this.preferences.map((e=>this.renderPreference(e))).join("")}\n                </div>\n                </div>\n                <div class="webcimes-cookies__options">\n                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--back" title="${this.options.defaultTexts.buttonBack}" aria-label="${this.options.defaultTexts.buttonBack}">${this.options.defaultTexts.buttonBack}</button>\n                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--accept" title="${this.options.defaultTexts.buttonAccept}" aria-label="${this.options.defaultTexts.buttonAccept}">${this.options.defaultTexts.buttonAccept}</button>\n                </div>\n            </div>\n            </div>\n        </div>`}renderPreference(e){return`\n        <div class="webcimes-cookies__preference">\n            <div class="webcimes-cookies__preference-title" id="${e.name}-title">${e.title}</div>\n            <div class="webcimes-cookies__preference-description" id="${e.name}-description">${e.description}</div>\n            <div class="webcimes-cookies__check">\n                <label>\n                    <input type="checkbox" \n                        name="${e.name}"\n                        ${e.required?"disabled":""} \n                        checked\n                        aria-hidden="true"\n                        autocomplete="off">\n                    <div class="webcimes-cookies__icon"\n                        role="checkbox" \n                        tabindex="0"\n                        aria-labelledby="${e.name}-label" \n                        aria-describedby="${e.name}-description"\n                        aria-required="${e.required?"true":"false"}"\n                        aria-checked="true">\n                        <div class="webcimes-cookies__icon--on">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>\n                            <div>${this.options.defaultTexts.preferenceAccept}</div>\n                        </div>\n                        <div class="webcimes-cookies__icon--off">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>\n                            <div>${this.options.defaultTexts.preferenceRefuse}</div>\n                        </div>\n                    </div>\n                </label>\n            </div>\n        </div>`}bindEvents(){this.cookies?.querySelectorAll(".webcimes-cookies__option").forEach((e=>{e.addEventListener("click",(()=>this.onCookieOptionClick(e)))})),this.cookies?.querySelectorAll(".webcimes-cookies__icon").forEach((e=>{e.addEventListener("keydown",(t=>this.onCheckboxIconKeyDown(e,t)))})),this.cookies?.querySelectorAll(".webcimes-cookies__check input[type=checkbox]").forEach((e=>{e.addEventListener("change",(()=>this.onCheckboxChange(e)))}))}onCookieOptionClick(e){e.classList.contains("webcimes-cookies__option--preferences")?this.showPreferencesSection(!0):e.classList.contains("webcimes-cookies__option--back")?this.showPreferencesSection(!1):e.classList.contains("webcimes-cookies__option--accept")?this.acceptCookies():e.classList.contains("webcimes-cookies__option--refuse")&&this.refuseCookies()}onCheckboxIconKeyDown(e,t){const o=e.parentElement?.querySelector("input[type=checkbox]");"Enter"!==t?.key&&" "!==t?.key||o.disabled||(t.preventDefault(),o.checked=!o.checked,o.dispatchEvent(new Event("change")))}onCheckboxChange(e){const t=e,o=t.parentElement?.querySelector(".webcimes-cookies__icon");o.setAttribute("aria-checked",t.checked.toString())}showPreferencesSection(e){e?(this.cookies?.querySelector(".webcimes-cookies__section--default")?.classList.remove("webcimes-cookies__section--active"),this.cookies?.querySelector(".webcimes-cookies__section--preferences")?.classList.add("webcimes-cookies__section--active"),this.cookies?.querySelector(".webcimes-cookies__icon")?.focus()):(this.cookies?.querySelector(".webcimes-cookies__section--preferences")?.classList.remove("webcimes-cookies__section--active"),this.cookies?.querySelector(".webcimes-cookies__section--default")?.classList.add("webcimes-cookies__section--active"),this.cookies?.querySelector(".webcimes-cookies__option")?.focus())}acceptCookies(){const e={};this.preferences.forEach((t=>{const o=this.cookies?.querySelector(`input[name='${t.name}']`);e[t.name]=o?.checked||!1})),this.setCookies(!0,e),this.destroy()}refuseCookies(){const e={};this.preferences.forEach((t=>{e[t.name]=t.required||!1})),this.setCookies(!1,e),this.destroy()}setCookies(e,t){i.set(this.options.cookiesSettings.consentCookieName,e.toString(),{expires:this.options.cookiesSettings.expiration,path:this.options.cookiesSettings.path,domain:this.options.cookiesSettings.domain,secure:this.options.cookiesSettings.secure,sameSite:this.options.cookiesSettings.sameSite}),i.set(this.options.cookiesSettings.preferencesCookieName,JSON.stringify(t),{expires:this.options.cookiesSettings.expiration,path:this.options.cookiesSettings.path,domain:this.options.cookiesSettings.domain,secure:this.options.cookiesSettings.secure,sameSite:this.options.cookiesSettings.sameSite})}destroy(){this.cookies?.classList.add("webcimes-cookies--inactive"),setTimeout((()=>{this.cookies?.querySelectorAll(".webcimes-cookies__option").forEach((e=>{e.removeEventListener("click",(()=>this.onCookieOptionClick(e)))})),this.cookies?.querySelectorAll(".webcimes-cookies__icon").forEach((e=>{e.removeEventListener("keydown",(t=>this.onCheckboxIconKeyDown(e,t)))})),this.cookies?.querySelectorAll(".webcimes-cookies__check input[type=checkbox]").forEach((e=>{e.removeEventListener("change",(()=>this.onCheckboxChange(e)))})),this.cookies?.remove()}),500)}}var n=t.C;export{n as WebcimesCookies};
//# sourceMappingURL=webcimes-cookies.esm.js.map