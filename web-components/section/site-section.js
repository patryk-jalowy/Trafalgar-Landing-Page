
const template = document.createElement('template');

template.innerHTML = `
<style>
 @import "web-components/section/site-section.css";
</style>
<div>
  <div class="row">
  <img src="/assets/img/dots.svg" ></img>
    <div class="col-6">
    <slot></slot>
    </div>
    <div class="col-6">
    <slot></slot>
    </div>
  </div>
  </div>
`
class Section extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('Component initiated!');
    }

}
    window.customElements.define('site-section', Section);