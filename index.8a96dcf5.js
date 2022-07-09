const p=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};p();class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .frame {
        width: 100px;
        height: 100px;

        background:
          linear-gradient(30deg, #0008, #0005, #0008),
          var(--image),
          linear-gradient(#fff, #fff);
        background-size: 200px 300px, 235px, 200px 300px;
        background-repeat: no-repeat, no-repeat;
        background-position: center;
        border-style: solid;
        border-width: 110px 100px 110px 100px;
        border-image: url("images/frame1.png") 130 100 130 100 stretch stretch;
        margin: auto;
        position: relative;
        z-index: 5;
      }

      .light {
        width: 375px;
        height: 375px;
        position: absolute;
        border-radius: 50%;
        z-index: 10;
        background: #fff8;
        filter: blur(10px);
        mix-blend-mode: overlay;
        transform: translateY(-15px);
        transition: opacity 0.5s ease;
        opacity: 0;
      }

      :host(.on) .light {
        opacity: 1;
      }

      .label-plate {
        color: #222;
        border-top: 2px solid #e9ce87;
        border-left: 1px solid #a68c49;
        padding: 4px 18px;
        background:
          url("images/plate.png"),
          linear-gradient(130deg, #b5933a, #f6da91, #b5933a);
        background-blend-mode: multiply;
        box-shadow:
          0 0 15px 5px #0002 inset,
          2px 2px 10px #0005;
        font-family: "EnterCommand";
        font-size: 35px;
        font-weight: bold;
      }
    `}connectedCallback(){this.getImage(),this.name=this.getAttribute("name"),this.render()}on(){this.classList.add("on"),new Audio("sounds/spotlight.mp3").play()}getImage(){this.image=this.getAttribute("image").replace("70x70","300x300"),this.style.setProperty("--image",`url(${this.image})`)}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="frame"></div>
    <div class="light"></div>
    <div class="label-plate">${this.name}</div>
    `}}customElements.define("picture-element",s);const u=()=>{const t=["waltz","8bits"][~~(Math.random()*2)];new Audio(`sounds/${t}.mp3`).play()},m=document.querySelector(".pictures"),g=(t,i)=>{const n=document.createElement("picture-element");n.setAttribute("image",i),n.setAttribute("name",t),m.appendChild(n)},f=t=>{const i=`@keyframes move-scene {
    0% { transform: translateX(0); }
    100% { transform: translateX(${t}px); }
  }`,n=document.createElement("style");n.innerHTML=i,document.body.appendChild(n)},h=[{name:"manuel_jesus_dody",picture:"https://static-cdn.jtvnw.net/jtv_user_pictures/44c2ba3c-1c84-44e1-95fe-dbba245c43c3-profile_image-70x70.png"},{name:"Djuliox",picture:"https://static-cdn.jtvnw.net/jtv_user_pictures/b57b2844-060e-40d9-9d06-bfa4ec576ea9-profile_image-70x70.png"},{name:"nicomem14_",picture:"https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png"},{name:"velcevu1",picture:"https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png"},{name:"rebeskor",picture:"https://static-cdn.jtvnw.net/jtv_user_pictures/822557d1-5834-4aca-b3db-c88f3c2b10b9-profile_image-70x70.png"},{name:"Rising_Okami",picture:"https://static-cdn.jtvnw.net/jtv_user_pictures/d18e6aaa-7499-4463-a2c4-ee1564bf43e4-profile_image-70x70.png"},{name:"Megavatio",picture:"https://static-cdn.jtvnw.net/jtv_user_pictures/784525ca-3dd4-4f2c-a653-5a1cf410fca7-profile_image-70x70.png"},{name:"JesusTorresDev",picture:"https://static-cdn.jtvnw.net/jtv_user_pictures/ce16a3e1-edd1-4f0a-831d-ca961feed4d4-profile_image-70x70.png"}],b=t=>{if(t.length>0){u(),f(-1*(t.length*400)+1200),document.body.style.setProperty("--elements",t.length),t.forEach(n=>g(n.name,n.picture));return}const i=new Audio("sounds/crickets.mp3");document.body.style.setProperty("--elements",6),i.play()};b(h);const c=1500;let l;const d=()=>{const t=l.shift();t&&(t.on(),setTimeout(()=>d(),c))};setTimeout(()=>{l=[...document.querySelectorAll("picture-element")],d()},c+2e3);
