const grid = document.createElement('template')

grid.innerHTML =
`
<style>
    @import "/web-components/grid/grid.css";
</style>
<div>
<h1 class="title">Our services</h1>
<hr>
<p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
</div>
<div class="grid">

  <div class="row">
    <div class="col">
      <slot name="first">
    </div>
    <div class="col">
      <slot name="second">
    </div>
    <div class="col">
      <slot name="third">
    </div>
  </div>

  <div class="row">
    <div class="col">
      <slot name="fourth">
    </div>
    <div class="col">
      <slot name="fifth">
    </div>
    <div class="col">
      <slot name="sixth">
    </div>
  </div>
</div>

`
class Grid extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(grid.content.cloneNode(true))
  }

  connectedCallback () {
  }
}

window.customElements.define('site-grid', Grid)
