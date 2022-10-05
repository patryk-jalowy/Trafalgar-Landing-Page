const card = document.createElement('template')

card.innerHTML =
`
<style>
    @import "/web-components/card/card.css";
</style>

<div class="card">
  <img slot name="picture"></img>
  <h3 slot name="heading"></h3>
  <p slot name="text"></p>
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
