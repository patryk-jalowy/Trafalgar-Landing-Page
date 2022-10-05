const grid = document.createElement('template')

grid.innerHTML =
`
<style>
    @import "/web-components/grid/grid.css";
</style>

<div class="grid">
    <div class="row">
        <div slot  name="first" class="col"></div>
        <div slot  name="second" class="col"></div>
        <div slot name="third" class="col"></div>
    </div>

    <div class="row">
        <div slot name="fourth" class="col"></div>
        <div slot name="fifth" class="col"></div>
        <div slot name="sixth" class="col"></div>
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
