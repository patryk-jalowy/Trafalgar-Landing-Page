const card = document.createElement('template')

card.innerHTML =
`
<style>
    @import "/web-components/card/card.css";
</style>

<div class="card">
    <div class="picture">
        <slot name="picture">
    </div>
    <div class="heading">
        <slot name="heading">
    </div>
    <div class="card-text">
        <slot name="card-text">
    </div>
</div>
`
class Card extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(card.content.cloneNode(true))
  }

  connectedCallback () {
  }
}

window.customElements.define('site-card', Card)
