const template = document.createElement('template')

template.innerHTML = `
<style>
 @import "web-components/section/site-section.css";
</style>

<div class="section-container">
  <div class="row">
    <img class="dots-img" src="/assets/img/dots.svg">
    <div class="col-6">
        <slot name="slot-one"></slot>
    </div>
    <div class="col-6">
        <slot name="slot-two"></slot>
    </div>
  </div>
</div>
`

class SiteSection extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {}
}

window.customElements.define('site-section', SiteSection)
