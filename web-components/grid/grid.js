const grid = document.createElement('template')

grid.innerHTML =
    `
<style>
    @import "web-components/grid/grid.css";
</style>

<div class="container">

    <img class="splash" src="assets/card-logos/splash.svg">
    <img class="dots" src="assets/card-logos/dots2.svg">

    <div class="grid">
            <div class="col">
          <slot name="first">
        </div>
        <div class="col">
          <slot name="second">
        </div>
        <div class="col">
          <slot name="third">
        </div>
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
