class PictureElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.getImage();
    this.name = this.getAttribute("name");
    this.render();
  }

  on() {
    this.classList.add("on");
    const sound = new Audio("sounds/spotlight.mp3");
    sound.play();
  }

  getImage() {
    this.image = this.getAttribute("image").replace("70x70", "300x300");
    this.style.setProperty("--image", `url(${this.image})`);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PictureElement.styles}</style>
    <div class="frame"></div>
    <div class="light"></div>
    <div class="label-plate">${this.name}</div>
    `;
  }
}

customElements.define("picture-element", PictureElement);
