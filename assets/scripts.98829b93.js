var k=Object.defineProperty;var y=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var g=(i,t,e)=>t in i?k(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,h=(i,t)=>{for(var e in t||(t={}))x.call(t,e)&&g(i,e,t[e]);if(y)for(var e of y(t))T.call(t,e)&&g(i,e,t[e]);return i};var v=(i,t,e)=>(g(i,typeof t!="symbol"?t+"":t,e),e);import{L as $,c as L,h as M,a as S,u as C,r as u,b as d,d as p,t as c,e as A}from"./vendor.0db5b536.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}};N();class E extends ${static get properties(){return{source:{attribute:!1}}}firstUpdated(){let e=this.shadowRoot.querySelector("slot").assignedNodes().map(s=>s.nodeType===Node.TEXT_NODE?s.textContent:s.outerHTML).join("").trim();e=M(e);const o=window.Prism.highlight(e,window.Prism.languages.markup,"html");this.source=o}render(){return S` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous"
      />
      <slot></slot>
      <pre><code>${C(this.source)}</code></pre>`}}v(E,"styles",L`
    :host {
      display: block;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    pre {
      background-color: var(--f-bluegray-50);
      font-family: Monaco, Ubuntu Mono, Consolas, monospace;
      font-size: 14px;
      margin: 0;
      padding: 16px;
      overflow-x: auto;
    }

    slot {
      display: none;
    }
  `);customElements.define("syntax-highlight",E);class f extends HTMLElement{constructor(){super();const t=document.createElement("template");t.innerHTML=`
            <style>:host { display: block; }</style>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
            />
        `,this.attachShadow({mode:"open"}).appendChild(t.content)}}const m=typeof window!="undefined";class H extends f{static get observedAttributes(){return["selected"]}attributeChangedCallback(t,e,o){switch(t){case"selected":this[t]=o!="false";break;default:this[t]=o}this.render()}connectedCallback(){this.content=[...this.innerHTML].join(""),this.as=this.getAttribute("as")||"div",this.selected=this.getAttribute("selected")?this.getAttribute("selected")!="false":void 0,this.render(),this.innerHTML=""}render(){const t=this.shadowRoot.querySelector("[data-root]");t&&t.remove(),this.shadowRoot.innerHTML+=`
      <${this.as} data-root tabindex="0" class="${u(this.getAttribute("class"),{"outline-none focus:ring ring-offset-1 ring-aqua-200":!0,[d.card]:!0,[d.cardSelected]:this.selected,[d.cardOutline]:!0,[this.selected?d.cardOutlineSelected:d.cardOutlineUnselected]:!0,[this.selected?"focus:border-blue-500":""]:!0})}">
    
      <style>a::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0;  }</style>
  
      ${this.onclick?`
          <button class="sr-only" aria-pressed="${this.selected}" tabIndex="-1">
            Velg
          </button>
        `:""}
  
      ${!this.onclick&&this.selected?`
        <span role="checkbox" aria-checked="true" aria-disabled="true" />
        `:""}
  
        ${this.content}
      </${this.as}>
      `,this.handleSetup()}handleSetup(){const t=this.shadowRoot.querySelector(this.as);if(this.onclick){const e=o=>{if(o.key==="Enter"||o.key===" "){o.preventDefault(),document.querySelector(this.as).setAttribute("selected",!this.selected),this.onclick&&this.onclick();return}};t.addEventListener("keydown",e)}}}customElements.get("f-card")||customElements.define("f-card",H);class I extends f{connectedCallback(){const t=Array.from(this.children).map(e=>e.outerHTML).join('<span class="select-none" aria-hidden="true">/</span>');this.shadowRoot.innerHTML+=`<nav
            aria-label="Her er du"
            class="flex space-x-8"
        >
            <h2 class="sr-only">Her er du</h2>
            ${t}
        </nav>`,this.innerHTML=""}}customElements.get("f-breadcrumbs")||customElements.define("f-breadcrumbs",I);function R(i,t){if(!m)return;const e=window.fabricToasts,o=document.querySelector("f-toast-container"),s=o.shadowRoot.getElementById("f-toast-container-list");if(!o&&customElements.get("f-toast")&&e)throw new Error("No toast container found. Make sure to call initToasts() first.");const r=Date.now().toString(36)+Math.random().toString(36).slice(2,5),a=h({id:r,programmatic:!0,text:i,duration:2400,type:"success"},t),n=document.createElement("f-toast");return n.className="w-full",Object.entries(a).forEach(l=>{n.setAttribute(l[0],l[1])}),s.appendChild(n),e.toasts=[...e.toasts,a],a}function b(i){if(!m)return;const t=window.fabricToasts,e=document.querySelector("f-toast-container");if(!e&&customElements.get("f-toast")&&t)throw new Error("No toast container found. Make sure to call initToasts() first.");t.toasts=t.toasts.filter(s=>s.id!==i);const o=e.shadowRoot.getElementById(i);return o?(p(o),setTimeout(()=>{o.remove()},1e3),!0):!1}function P(i,t){if(!m)return;const e=window.fabricToasts,o=document.querySelector("f-toast-container");if(!o&&customElements.get("f-toast")&&e)throw new Error("No toast container found. Make sure to call initToasts() first.");const s=e.toasts.find(n=>n.id===i),r=h(h({},s),t),a=o.shadowRoot.getElementById(i);return Object.entries(r).forEach(n=>{a.setAttribute(n[0],n[1])}),e.toasts=e.toasts.map(n=>n.id===r.id?r:n),r}const w=["success","warning","error","info"];class j extends f{static get observedAttributes(){return["type","text","duration","canclose","onclose"]}attributeChangedCallback(t,e,o){switch(t){case"onclose":this[t]=new Function("return "+o)();break;case"canclose":this[t]=o!="false";break;default:this[t]=o}this.id=this.id||Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.render(!0)}connectedCallback(){if(this.isProgrammatic=!!this.getAttribute("programmatic"),this.isProgrammatic&&!w.includes(this.type))throw new Error(`Invalid toast type. Allowed types: ${w.reduce((t,e,o)=>[t,e].join(o===w.length-1?" or ":", "))}`);this.render()}render(t){const e=this.shadowRoot.getElementById(`toast-${this.id}-wrapper`);e&&e.remove();const o=this.isProgrammatic,s=this.type==="success",r=this.type==="warning",a=this.type==="error",n=this.type==="info",l=s?"Vellykket":a?"Feil":r?"Varsel":"Info";this.shadowRoot.innerHTML+=`
            <section
                ${this.id?`id="toast-${this.id}-wrapper"`:""}
                ${o&&!t?"style='height: 0;'":""}
                class="${c.toastWrapper}"
                aria-label="${l}"
            >
                <div
                    class="${u({[c.toast]:!0,[c.toastPositive]:s,[c.toastWarning]:r,[c.toastNegative]:a,[c.toastNeutral]:n})}"
                >
                    <div
                        class="${u({[c.toastIcon]:!0,[c.toastIconPositive]:s,[c.toastIconWarning]:r,[c.toastIconNegative]:a,[c.toastIconNeutral]:n})}"
                    >
                        ${s?`
                        <svg
                            role="img"
                            aria-label="${l}"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M5.5 9l2 1.5L11 6"
                            />
                        </svg>`:`
                        <svg
                            role="img"
                            aria-label="${l}"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                            class="${u("transition-transform duration-200",{"transform-rotate-180":n})}"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-miterlimit="10"
                                stroke-width="1.5"
                                d="M8 9V4"
                            />
                            <circle
                                cx="8"
                                cy="11.8"
                                r=".8"
                                fill="currentColor"
                            />
                        </svg>`}
                    </div>
                    <div
                        role="${a||r?"alert":"status"}"
                        class="${c.toastContent}"
                    >
                        <p ${this.id?`id="toast-${this.id}-text"`:""}>${this.text}</p>
                    </div>
                    ${this.canclose?`
                            <button
                                ${this.id?`id="toast-${this.id}-button"`:""}
                                class="${c.toastClose}"
                            >
                                <svg
                                    role="img"
                                    aria-label="Lukk"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>`:""}
                </div>
            </section>
        `,document.readyState==="complete"||document.readyState==="loaded"||t?this.handleSetup(!!t):document.addEventListener("DOMContentLoaded",this.handleSetup(!!t))}handleSetup(t){const e=this.shadowRoot.getElementById(`toast-${this.id}-wrapper`),o=this.shadowRoot.getElementById(`toast-${this.id}-button`);if(o){const s=()=>{!this.canclose||(this.onclose&&this.onclose(),this.isProgrammatic&&(e&&p(e),setTimeout(()=>{b(this.id)},1e3)))};o.addEventListener("click",s)}if(this.isProgrammatic&&e&&!t&&A(e),(this.duration||this.isProgrammatic)&&e){if(clearTimeout(this.c),clearTimeout(this.r),this.duration==="0")return;this.c=setTimeout(()=>{p(e)},Number(this.duration)),this.r=setTimeout(()=>{b(this.id)},Number(this.duration)+1e3)}}}customElements.get("f-toast")||customElements.define("f-toast",j);class B extends f{async connectedCallback(){const t=Number(this.getAttribute("interval"))||3e5;await this.fetchMessage(),setInterval(async()=>await this.fetchMessage(),t)}async fetchMessage(){if(!m)return;const t=this.shadowRoot.querySelector("#broadcast-toast"),o=`https://${Boolean(this.getAttribute("dev"))?"dev":"www"}.finn.no/broadcasts?path=${this.getAttribute("url")||window.location.href}`,s=await(await fetch(o)).json();s.length?(this.message=s[0].message,t?t.setAttribute("text",this.message):this.shadowRoot.innerHTML+=`
          <div id="broadcast">
            <f-toast id="broadcast-toast" type="warning" text="${this.message}"></f-toast>
          </div>
        `):(this.message="",t&&t.remove())}}customElements.get("f-broadcast")||customElements.define("f-broadcast",B);window.toast=R;window.updateToast=P;window.removeToast=b;
